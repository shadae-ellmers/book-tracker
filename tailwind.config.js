/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./server/public/index.html', './client/components/*.tsx'],
  theme: {
    extend: {
      colors: {
        ivory: '#ffefcd',
        natural: '#a58e74',
        apricot: '#e09132',
        fern: '#424530',
      },
      fontFamily: {
        primary: 'Main',
      },
    },
  },
  plugins: [],
}
