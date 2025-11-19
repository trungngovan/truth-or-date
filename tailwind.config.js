/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF1493',
        'neon-blue': '#00D4FF',
        'neon-purple': '#B026FF',
        'neon-green': '#39FF14',
        'purple': {
          600: '#9333ea',
          700: '#7e22ce',
        },
        'coral': {
          500: '#ff6b6b',
          600: '#ee5a6f',
        },
      },
      fontFamily: {
        'title': ['"Oswald"', 'sans-serif'],
        'heading': ['"Exo 2"', 'sans-serif'],
        'body': ['"Nunito"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
