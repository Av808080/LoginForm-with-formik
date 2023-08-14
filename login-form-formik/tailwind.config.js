/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lalezar: ["Lalezar", defaultTheme.fontFamily.sans],
        Nunito: ["Nunito", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
