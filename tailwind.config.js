/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#512d7c",
        secondary: "#f2b42c",
      },
      borderRadius: {
        lg: "0.625rem",
      },
    },
  },
  plugins: [],
}