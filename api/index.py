from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import APIStatusError, AuthenticationError, OpenAI
import os
import hashlib

# Load .env locally when python-dotenv is installed; on Vercel, env is injected.
try:
    from dotenv import load_dotenv

    load_dotenv()
except ImportError:
    pass

app = FastAPI()

# CORS so the frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# Do not construct OpenAI() at import time: without OPENAI_API_KEY the SDK raises
# and the whole Vercel serverless function fails (even GET /).


def _get_openai_client() -> OpenAI:
    """Build a client for this request (no global cache — avoids stale keys after env updates)."""
    key = (os.getenv("OPENAI_API_KEY") or "").strip()
    if not key:
        raise HTTPException(
            status_code=500, detail="OPENAI_API_KEY not configured"
        )
    return OpenAI(api_key=key)


class ChatRequest(BaseModel):
    message: str

def _openai_model() -> str:
    """Model id from env (override if your org does not have access to the default)."""
    return (os.getenv("OPENAI_MODEL") or "gpt-5").strip()


def _openai_key_info() -> dict[str, object]:
    """Return non-sensitive diagnostics to compare local vs deployed secrets."""
    key = (os.getenv("OPENAI_API_KEY") or "").strip()
    return {
        "present": bool(key),
        "length": len(key),
        "fingerprint": hashlib.sha256(key.encode("utf-8")).hexdigest()[:12] if key else "",
    }


def _openai_error_detail(error: Exception) -> dict[str, object]:
    """Extract a safe, non-secret OpenAI error summary for debugging."""
    detail: dict[str, object] = {
        "exception": error.__class__.__name__,
        "message": str(error),
    }

    status_code = getattr(error, "status_code", None)
    if status_code is not None:
        detail["status_code"] = status_code

    response = getattr(error, "response", None)
    if response is not None:
        detail["response_status"] = getattr(response, "status_code", None)
        try:
            payload = response.json()
        except Exception:
            payload = None
        if isinstance(payload, dict):
            error_obj = payload.get("error")
            if isinstance(error_obj, dict):
                detail["openai_error"] = {
                    "type": error_obj.get("type"),
                    "code": error_obj.get("code"),
                    "message": error_obj.get("message"),
                    "param": error_obj.get("param"),
                }
            else:
                detail["openai_error"] = payload
    return detail


@app.get("/api/health")
def health():
    """Lightweight check; `openai_key_present` helps verify Vercel env without exposing secrets."""
    key_info = _openai_key_info()
    return {
        "status": "ok",
        "openai_key_present": key_info["present"],
        "openai_key_length": key_info["length"],
        "openai_key_fingerprint": key_info["fingerprint"],
    }


@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    try:
        client = _get_openai_client()
        user_message = request.message
        response = client.chat.completions.create(
            model=_openai_model(),
            messages=[
                {"role": "system", "content": "You are a supportive mental coach."},
                {"role": "user", "content": user_message}
            ]
        )
        return {"reply": response.choices[0].message.content}
    except AuthenticationError as e:
        raise HTTPException(
            status_code=500,
            detail={
                "summary": "OpenAI rejected the API key (401).",
                "debug": _openai_error_detail(e),
                "next_step": (
                    "If the debug payload shows IP not authorized or an org/project permission issue, "
                    "check OpenAI project/organization settings. Otherwise verify the backend Vercel "
                    "project's OPENAI_API_KEY and redeploy."
                ),
            },
        ) from None
    except APIStatusError as e:
        raise HTTPException(
            status_code=500,
            detail=f"OpenAI API error ({e.status_code}): {e.message}",
        ) from e
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling OpenAI API: {str(e)}")
