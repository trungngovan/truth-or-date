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
      },
      fontFamily: {
        'title': ['Bebas Neue', 'sans-serif'],
        'heading': ['Rajdhani', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
