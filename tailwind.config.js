/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust as necessary
  ],
  theme: {
    extend: {
      margin: {
        '-5rem': '-5rem',
      },
      colors: {
        'custom-green': '#00CA00',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '30px': '30px',
      },
    },
  },
  plugins: [],
}
