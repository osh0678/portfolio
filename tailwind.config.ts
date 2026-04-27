import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        bg: "#080b10",
        surface: "#0d1117",
        surface2: "#161b22",
        border: "#21262d",
        accent: "#58a6ff",
        accent2: "#79c0ff",
        "clr-green": "#3fb950",
        "clr-purple": "#bc8cff",
        "clr-orange": "#ffa657",
        "text-dim": "#484f58",
        "text-muted": "#7d8590",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        drift: "drift 20s ease-in-out infinite alternate",
      },
      keyframes: {
        drift: {
          from: { transform: "translate(0, 0) scale(1)" },
          to: { transform: "translate(30px, 20px) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
}
export default config
