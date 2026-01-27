import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Screen size
      screens: {
        "2xl": { max: "1525px" },
        xl: { max: "1279px" },
        lg: { max: "1024px" },
        md: { max: "880px" },
        sm: { max: "639px" },
        xs: { max: "376px" },
      },
      colors: {
        // Default Color
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        black: "#000000",
        // Gray scale
        gray: {
          900: "#333333",
          800: "#666666",
          700: "#999999",
          600: "#CCCCCC",
          100: "#EEEEEE",
        },
        white: "#f3f3f3",
      },
      fontFamily: {
        sans: ["Franklin Gothic Medium", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.03em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.03em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0.03em" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0.03em" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "0.03em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "0.03em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "0.03em" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "0.03em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "0.03em" }],
      },
    },
  },
  plugins: [],
};

export default {
  plugins: ["@tailwindcss/postcss"],
  config,
};
