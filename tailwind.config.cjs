/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width');
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [
    percentageWidth,
    require('tw-elements/dist/plugin'),
  ]
};
