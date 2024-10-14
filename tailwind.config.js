/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: '#ff00a6',
        turquoise: '#00ffe0',
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
