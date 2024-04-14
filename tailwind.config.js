/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "dist/**/*.html",
    "dist/js-scripts/*.js",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'body-font': ['Red Hat Display', 'sans-serif'],
      'second-font': ['Kaushan Script', 'cursive'],
    },
  },
  plugins: [],
}