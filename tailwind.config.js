/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green_dofus: "#96A702",
        orange_dofus: "#EA9512",
        primary_dofus: "#F6EED6",
        white_dofus: "#A0A095",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
      },
    },
  },
  plugins: [],
};
