import { NextResponse } from "next/server";

export const runtime = "nodejs";

const DEFAULT_BACKEND = "http://127.0.0.1:8000";

/**
 * Resolves the FastAPI base URL. Server-only — never exposed to the browser.
 * On Vercel this must be a **public** URL (not localhost).
 */
function backendBase(): string {
  const raw =
    process.env.BACKEND_URL?.trim() ||
    process.env.CHAT_BACKEND_URL?.trim() ||
    DEFAULT_BACKEND;
  return raw.replace(/\/$/, "");
}

/**
 * Proxies POST /api/chat to FastAPI so the browser only talks to the Next app
 * (fixes production "Failed to fetch" to localhost and mixed-content issues).
 */
export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ detail: "Invalid JSON body" }, { status: 400 });
  }

  const message =
    typeof body === "object" &&
    body !== null &&
    "message" in body &&
    typeof (body as { message: unknown }).message === "string"
      ? (body as { message: string }).message
      : null;

  if (!message?.trim()) {
    return NextResponse.json({ detail: "Missing message" }, { status: 400 });
  }

  const url = `${backendBase()}/api/chat`;

  try {
    const upstream = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
      signal: AbortSignal.timeout(120_000),
    });

    const text = await upstream.text();
    const contentType =
      upstream.headers.get("content-type") ?? "application/json; charset=utf-8";

    return new NextResponse(text, {
      status: upstream.status,
      headers: { "Content-Type": contentType },
    });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json(
      {
        detail: `Chat proxy could not reach FastAPI at ${url} (${msg}). For Vercel, set BACKEND_URL to your deployed API origin (not localhost).`,
      },
      { status: 502 }
    );
  }
}
