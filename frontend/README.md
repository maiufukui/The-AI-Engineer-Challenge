# Mental Coach — Matrix Terminal UI

This is the **Next.js** front end for the FastAPI coach in `/api`. It looks like a green-on-black terminal dropped into the Construct, complete with a light “digital rain” backdrop (your messages stay readable—we are not actually living in 1999).

## Prerequisites

- **Node.js 18+** (20 LTS is a solid choice)
- **npm** (ships with Node)
- The **Python API** running locally when you want real replies (see repo root `README.md` or `api/README.md`)

## Run it locally (the fun part)

1. **Start the API** from the repo root (not inside `frontend/`):

   ```bash
   export OPENAI_API_KEY=sk-...   # your key
   uv run uvicorn api.index:app --reload
   ```

   Default API URL: `http://localhost:8000` (same as the Next.js proxy default).

2. **Install front-end dependencies** (first time only):

   ```bash
   cd frontend
   npm install
   ```

3. **Optional env** (`cp .env.example .env.local`):

   - **`BACKEND_URL`** — where the **Next server** forwards `/api/chat` (default `http://127.0.0.1:8000`). Use this if FastAPI is not on port 8000.
   - **`NEXT_PUBLIC_API_URL`** — only if you want the **browser** to call FastAPI directly (skip the proxy). Must be a **public HTTPS** URL in production.

4. **Start the Matrix:**

   ```bash
   npm run dev
   ```

5. Open **http://localhost:3000** in your browser, type a message, hit **Enter** or **SEND**, and let the coach respond.

Other useful commands:

| Command        | What it does        |
|----------------|---------------------|
| `npm run dev`  | Hot-reload dev server |
| `npm run build` | Production build    |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint               |

## Deploying on Vercel

This app is meant to run as a **Next.js** project on Vercel:

- Set the Vercel project **Root Directory** to `frontend` so Vercel picks up this `package.json` and Next’s config.
- Add **`BACKEND_URL`** (server-side) to your **public** FastAPI origin, e.g. `https://your-python-api.vercel.app` — **not** `http://localhost:8000`. The UI posts to **`/api/chat` on the Next app**; Next’s serverless function proxies that request to `BACKEND_URL`. After changing env vars, **redeploy** so they take effect.

Why not `NEXT_PUBLIC_API_URL=http://localhost:8000` on Vercel? The browser runs on each visitor’s machine — “localhost” is *their* laptop, not your API. Same-origin `/api/chat` avoids that trap (and avoids HTTPS → HTTP mixed-content blocks).

Optional: set **`NEXT_PUBLIC_API_URL`** to a public API URL only if you really want the browser to skip the proxy (CORS must allow your Vercel domain).

**Heads-up:** the repo root `vercel.json` is wired for the **Python** serverless API. If you deploy this folder as its own Vercel project, you still need a **reachable** FastAPI somewhere and **`BACKEND_URL`** pointing at it.

## Design notes (why it looks like this)

- **Contrast:** bright greens on a near-black void so nothing “white on white” sneaks in.
- **UX:** the transcript area scrolls and grows with the conversation; the input stays at the bottom.
- **Secrets:** if you ever add API keys in the UI, use `type="password"`—normal chat stays in a regular text field.

Now go make good choices, Neo.
