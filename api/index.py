from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os

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
# and the whole Vercel serverless function fails (even GET /). Lazy-init in chat.
_client: OpenAI | None = None


def _get_openai_client() -> OpenAI:
    """Return a cached OpenAI client once OPENAI_API_KEY is present."""
    global _client
    if _client is None:
        key = os.getenv("OPENAI_API_KEY")
        if not key:
            raise HTTPException(
                status_code=500, detail="OPENAI_API_KEY not configured"
            )
        _client = OpenAI(api_key=key)
    return _client


class ChatRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/api/chat")
def chat(request: ChatRequest):
    try:
        client = _get_openai_client()
        user_message = request.message
        response = client.chat.completions.create(
            model="gpt-5",
            messages=[
                {"role": "system", "content": "You are a supportive mental coach."},
                {"role": "user", "content": user_message}
            ]
        )
        return {"reply": response.choices[0].message.content}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error calling OpenAI API: {str(e)}")
