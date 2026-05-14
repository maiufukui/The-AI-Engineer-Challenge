"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type LogRole = "user" | "coach" | "system";

interface LogLine {
  id: string;
  role: LogRole;
  text: string;
}

/**
 * Chat POST target. Always use the same-origin `/api/chat` Next proxy so the
 * browser never talks to FastAPI directly and never bakes localhost into the
 * client bundle.
 */
function getChatPostUrl(): string {
  return "/api/chat";
}

function uplinkDescription(): string {
  return "Proxied: POST /api/chat on this host → FastAPI (BACKEND_URL on server; default http://127.0.0.1:8000 for local dev)";
}

function uid(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Terminal-styled chat that posts to the FastAPI `/api/chat` endpoint.
 * Log region grows with content; input stays pinned at the bottom for UX.
 */
export function TerminalChat() {
  const [lines, setLines] = useState<LogLine[]>(() => [
    {
      id: uid(),
      role: "system",
      text: "MENTAL_COACH.EXE v1.0 — uplink ready. Type your message and press ENTER.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = logRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, loading, scrollToBottom]);

  const send = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setInput("");
    setLines((prev) => [...prev, { id: uid(), role: "user", text: trimmed }]);
    setLoading(true);

    try {
      const res = await fetch(getChatPostUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      const data: unknown = await res.json().catch(() => ({}));

      if (!res.ok) {
        const detail =
          typeof data === "object" &&
          data !== null &&
          "detail" in data &&
          typeof (data as { detail: unknown }).detail === "string"
            ? (data as { detail: string }).detail
            : `HTTP ${res.status}`;
        setLines((prev) => [
          ...prev,
          { id: uid(), role: "system", text: `[ERROR] ${detail}` },
        ]);
        return;
      }

      const reply =
        typeof data === "object" &&
        data !== null &&
        "reply" in data &&
        typeof (data as { reply: unknown }).reply === "string"
          ? (data as { reply: string }).reply
          : "[No reply field in response]";

      setLines((prev) => [...prev, { id: uid(), role: "coach", text: reply }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Network error";
      setLines((prev) => [
        ...prev,
        {
          id: uid(),
          role: "system",
          text: `[LINK_FAILURE] ${msg}. ${uplinkDescription()}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const prefix = (role: LogRole) => {
    switch (role) {
      case "user":
        return "you@matrix:~$";
      case "coach":
        return "COACH";
      default:
        return "SYS";
    }
  };

  const lineColor = (role: LogRole) => {
    switch (role) {
      case "user":
        return "text-matrix-green";
      case "coach":
        return "text-matrix-green-soft drop-shadow-[0_0_6px_rgba(57,255,20,0.35)]";
      default:
        return "text-matrix-dim";
    }
  };

  return (
    <section
      className="flex min-h-0 flex-1 flex-col rounded border border-matrix-dim/80 bg-matrix-panel/85 shadow-glow backdrop-blur-sm"
      aria-label="Matrix terminal chat"
    >
      <header className="shrink-0 border-b border-matrix-dim/60 px-4 py-3 sm:px-5">
        <p className="text-sm tracking-widest text-matrix-green sm:text-base">
          ◈ THE CONSTRUCT — MENTAL COACH INTERFACE
        </p>
        <p className="mt-1 text-xs text-matrix-dim">
          {uplinkDescription()} — session is not persisted
        </p>
      </header>

      <div
        ref={logRef}
        className="min-h-[40vh] flex-1 overflow-y-auto px-4 py-4 sm:min-h-[50vh] sm:px-5"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        <ul className="space-y-4">
          {lines.map((line) => (
            <li key={line.id} className="text-sm leading-relaxed sm:text-base">
              <span className="select-none text-matrix-dim">
                [{prefix(line.role)}]
              </span>{" "}
              <span className={`whitespace-pre-wrap break-words ${lineColor(line.role)}`}>
                {line.text}
              </span>
            </li>
          ))}
          {loading && (
            <li className="text-matrix-dim" aria-busy>
              <span className="animate-pulse">… establishing neural link</span>
            </li>
          )}
        </ul>
      </div>

      <form
        className="shrink-0 border-t border-matrix-dim/60 p-4 sm:p-5"
        onSubmit={(e) => {
          e.preventDefault();
          void send();
        }}
      >
        <label htmlFor="terminal-input" className="sr-only">
          Message to mental coach
        </label>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-3">
          <div className="min-w-0 flex-1">
            <span className="mb-1 block text-xs text-matrix-dim sm:mb-0 sm:inline sm:mr-2">
              you@matrix:~$
            </span>
            <input
              id="terminal-input"
              type="text"
              autoComplete="off"
              spellCheck
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Follow the white rabbit… (type a message)"
              disabled={loading}
              className="w-full rounded border border-matrix-dim bg-matrix-void/90 px-3 py-2.5 text-matrix-green-soft outline-none ring-0 placeholder:text-matrix-dim/70 focus:border-matrix-green focus:shadow-glow disabled:opacity-50"
            />
          </div>
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="shrink-0 rounded border border-matrix-green bg-matrix-green/15 px-5 py-2.5 text-matrix-green transition hover:bg-matrix-green/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-matrix-green disabled:cursor-not-allowed disabled:opacity-40"
          >
            SEND
          </button>
        </div>
        <p className="mt-2 text-xs text-matrix-dim">
          Press ENTER to transmit. Use a password field only for secrets — this
          field is for conversation text.
        </p>
      </form>
    </section>
  );
}
