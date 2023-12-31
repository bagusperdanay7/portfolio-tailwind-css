/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#6366f1',
        dark: '#18181b'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

