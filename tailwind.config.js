/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: {
          800: '#131212'
        } ,
        lime: {
          10: '#B4FF00'
        },
        traspgray: {
          100: 'rgba(46, 52, 54, 0.29)'
        }
      },
    },
  },
  plugins: [],
}

