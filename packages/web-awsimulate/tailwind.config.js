/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./app/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'awsimulate-color-font-white': '#FFFFED',
        'awsimulate-color-bg-white': '#FBFBFB',
        'awsimulate-color-blue-darkest': '#232f3e',
        'awsimulate-color-blue-dark': '#005276',
        'awsimulate-color-blue-lightest': '#0073BB',
        'awsimulate-color-orange-dark': '##EC912D',
        'awsimulate-color-orange-darker': '#EC7211',
        'awsimulate-color-gray-dark': '#7A8695',
        'awsimulate-color-gray-darker': '#5F6B7A',
      },
    },
  },
  plugins: [],
}