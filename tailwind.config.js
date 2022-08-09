/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '1.5rem',
    },
    extend: {
      screens: {
        '2xl': '1300px',
      },
      backgroundImage: {
        'home-first-block': "url('~assets/images/강연.png')",
      }
    },
  },
  plugins: [],
}
