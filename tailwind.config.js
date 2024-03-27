/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        black: {
          800: '#131212'
        } ,
      },
    },
  },
  plugins: [],
}

