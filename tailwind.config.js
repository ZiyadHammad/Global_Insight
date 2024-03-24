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
      Dark: 'hsl(207, 26%, 17%)'
    
    },
  },
  plugins: [],
}