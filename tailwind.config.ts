import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm paper base
        paper: {
          DEFAULT: "#F7F5F0",
          light: "#FBFAF6",
          dark: "#EFEBE2",
        },
        // Deep navy ink — primary text + dark sections
        ink: {
          DEFAULT: "#0F1C32",
          soft: "#16263F",
          muted: "#2A3A55",
        },
        // Secondary / supporting text
        slate: {
          DEFAULT: "#566173",
          light: "#7A8494",
        },
        // Single restrained accent — deep evergreen (growth, stability; not gold)
        accent: {
          DEFAULT: "#15514A",
          deep: "#103E39",
          soft: "#E7EEEC",
          line: "#C9DAD5",
        },
        // Warm hairline
        line: {
          DEFAULT: "#E6E0D4",
          dark: "#23344F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 28, 50, 0.04), 0 12px 32px -18px rgba(15, 28, 50, 0.18)",
        "card-hover":
          "0 1px 2px rgba(15, 28, 50, 0.05), 0 22px 48px -22px rgba(15, 28, 50, 0.28)",
        soft: "0 24px 60px -32px rgba(15, 28, 50, 0.30)",
      },
      transitionTimingFunction: {
        refined: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
