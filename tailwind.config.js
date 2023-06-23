/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
      },
      backgroundImage: {
        'mobileDarkTheme': "url('/src/assets/images/bg-mobile-dark.jpg')",
        'mobileLightTheme': "url('/src/assets/images/bg-mobile-light.jpg')",
        'desktopDarkTheme': "url('/src/assets/images/bg-desktop-dark.jpg')",
        'desktopLightTheme': "url('/src/assets/images/bg-desktop-light.jpg')",
      }
    },
  },
  plugins: [],
}