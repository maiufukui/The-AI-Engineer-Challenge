import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          void: "#020805",
          panel: "#041208",
          green: "#39ff14",
          "green-soft": "#7cfc8a",
          dim: "#1a5c1a",
        },
      },
      fontFamily: {
        terminal: ["var(--font-share-tech)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 12px rgba(57, 255, 20, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
