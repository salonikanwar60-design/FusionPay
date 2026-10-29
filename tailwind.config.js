/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B14",        // near-black base
        panel: "#0F1626",       // card surface
        panel2: "#141D33",      // elevated surface
        border: "#20293F",
        teal: {
          DEFAULT: "#2DD4BF",
          dim: "#1B7F72",
        },
        violet: {
          DEFAULT: "#8B7CF6",
          dim: "#4C3FA0",
        },
        gold: "#F5B942",
        rose: "#F4657A",
        mist: "#8892A6",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.45)",
        glow: "0 0 40px rgba(45,212,191,0.25)",
      },
      backgroundImage: {
        "pulse-gradient": "linear-gradient(135deg, #1B7F72 0%, #2DD4BF 35%, #8B7CF6 100%)",
      },
    },
  },
  plugins: [],
};
