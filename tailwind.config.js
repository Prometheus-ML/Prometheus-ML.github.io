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
        'main-banner': "url('~assets/images/main.jpeg')",
        'home-first-block': "url('~assets/images/class.png')",
        'home-second-block': "url('~assets/images/study.jpeg')",
      },
      colors: {
        'black-alpha': 'rgba(0, 0, 0, 0.7)'
      },
      wordBreak: {
        'kepp-all': 'keep-all'
      }
    },
  },
  plugins: [],
}
