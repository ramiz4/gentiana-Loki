/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#ebefff",
          200: "#d6dfff",
          300: "#b3c3ff",
          400: "#8c9eff",
          500: "#667eea",
          600: "#5568d3",
          700: "#4553b8",
          800: "#364194",
          900: "#2a3475",
        },
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#764ba2",
          600: "#6d3f94",
          700: "#5e3380",
          800: "#4e2a6a",
          900: "#3f2256",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}
