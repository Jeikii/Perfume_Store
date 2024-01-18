/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      opacity: {
        '53': '.53'
      },
      colors: {
        'gray-rgba': 'rgba(255, 255, 255, 0.65)'
      },
      fontFamily: {
        sans: ['Josefin Sans']
      },
    },
  },
  plugins: [],
}
