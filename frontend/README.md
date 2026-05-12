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

   Default API URL: `http://localhost:8000`

2. **Install front-end dependencies** (first time only):

   ```bash
   cd frontend
   npm install
   ```

3. **Optional:** tell the UI where the API lives (defaults to localhost anyway):

   ```bash
   cp .env.example .env.local
   # edit NEXT_PUBLIC_API_URL if your API is not on :8000
   ```

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
- Add an environment variable **`NEXT_PUBLIC_API_URL`** pointing at your **public** FastAPI base URL (include `https://`, no trailing slash drama required—we trim it in code).

**Heads-up:** the repo root `vercel.json` is wired for the **Python** serverless API. If you deploy only this folder as a separate Vercel project, you get the shiny terminal UI; point it at wherever your API actually lives.

## Design notes (why it looks like this)

- **Contrast:** bright greens on a near-black void so nothing “white on white” sneaks in.
- **UX:** the transcript area scrolls and grows with the conversation; the input stays at the bottom.
- **Secrets:** if you ever add API keys in the UI, use `type="password"`—normal chat stays in a regular text field.

Now go make good choices, Neo.
