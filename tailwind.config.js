/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '390px'
    },
    colors: {
      Light: 'hsl(0, 0%, 98%)',
      Dark: 'hsl(207, 26%, 17%)',
      lightEl: 'hsl(0, 0%, 100%)',
      darkEl: 'hsl(209, 23%, 22%)',
      lightTxt: 'hsl(200, 15%, 8%)',
      darkTxt: 'hsl(0, 0%, 100%)',
      lightInput: 'hsl(0, 0%, 52%)'
    },
    extend: {
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
        'sans-300': ['Nunito Sans', 'sans-serif', '300'],
        'sans-600': ['Nunito Sans', 'sans-serif', '600'],
        'sans-800': ['Nunito Sans', 'sans-serif', '800'],
      }
    }
  },
  plugins: [],
}