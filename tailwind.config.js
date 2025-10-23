/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        turmeric: "#FFB306",
        chilli: "#EF0440",
      },
      fontFamily: {
        primary: ["Agatho", "sans-serif"],
        secondary: ["Nexa", "sans-serif"],
      },
    },
  },
  plugins: [],
}
