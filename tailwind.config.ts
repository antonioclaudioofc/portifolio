import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      yellow: {
        50: "#fdf9ec",
        100: "#faedc5",
        200: "#f7e5a9",
        300: "#f4d981",
        400: "#f1d169",
        500: "#eec643",
        600: "#d9b43d",
        700: "#a98d30",
        800: "#836d25",
        900: "#64531c",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      blue: {
        50: "#e6e8eb",
        100: "#b0b7c1",
        200: "#8a94a3",
        300: "#55637a",
        400: "#344560",
        500: "#011638",
        600: "#011433",
        700: "#011028",
        800: "#010c1f",
        900: "#000918",
      },
    },
    extend: {
      backgroundImage: {
        "main-section": "url('/backgroundMain.svg')",
      },
      animation: {
        "slide-right-to-left": "slide-right-to-left 0.3s ease-in-out",
        "fade-in": "fade-in 0.2s ease-in-out",
      },
      keyframes: {
        "slide-right-to-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
