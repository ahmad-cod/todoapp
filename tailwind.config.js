/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'veryDarkBlue': 'hsl(235, 21%, 11%)',
        'ddesaturatedBlue': 'hsl(235, 24%, 19%)',
        'lgrayishBlue': 'hsl(234, 39%, 85%)',
      }
    },
  },
  plugins: [],
}