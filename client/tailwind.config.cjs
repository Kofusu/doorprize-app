/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC93C",
        secondaryAdmin: "#07689F",
        secondary: "#40A8C4",
        secondary2: "#A2D5F2",
        cusWhite: "#FDFDFD",
        cusBlack: "#2C2D2E",
        default: "#CFCFCF",
      },
    },
  },
  plugins: [],
  important: true,
}
