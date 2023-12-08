const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,liquid}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['"Tiempos Display Light", Classico, Segoe, "Segoe UI", Candara, Calibri, serif;'],
        'sans': ['Antarctica, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif'],
        'serif': ['"Iowan Old Style"', '"Apple Garamond"', 'Baskerville', '"Times New Roman"', '"Droid Serif"', 'Times', '"Source Serif Pro"', 'serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      }
    },
    screens: {
      '2xs': '320px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
