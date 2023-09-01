/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#fc0",
        "color-red": "#d40511",
      },
      fontFamily: {
        first: ["Merriweather Sans"],
      },
    },
  },
  plugins: [],
};
