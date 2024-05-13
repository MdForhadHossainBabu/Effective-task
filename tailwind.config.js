/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Space: "'Space Grotesk', sans-serif",
        Raleway: "'Raleway', sans-serif",
        Roboto: "'Roboto', sans-serif;"
      }
    },
  },
  plugins: [require('daisyui')],
};
