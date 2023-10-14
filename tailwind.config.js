/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '8' : 'repeat(8)'
      },
      gridTemplateRows: {
        '8' : 'repeat(8, 1fr)'
      },
      colors: {
        'prim-green' : '#0E484E',
        'sec-green' : '#397C7F',
        'ter-green' : '#24B8AC',
        'pastel' : '#F2D8A8',
        'white' : '#FFFFFF',
        'gray' : '#F5F5F5'
      }
    },
  },
  plugins: [],
}

