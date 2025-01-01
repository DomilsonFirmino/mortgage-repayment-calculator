/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'lime': {
        100: "#fafae0",
        300: "#edf6ac",
        400: '#d7da2f'
      },
      'Red': '#d73328',
      'slate': {
        100: '#e3f3fd',
        300: '#9abed5',
        500: '#6b94a8',
        700: '#4e6e7e',
        900: '#133040',
        1000: '#0e2431'
      }
    }
  },
  fontFamily :{
    PlusJakarta: ["PlusJakarta","sans"]
  }  ,
  plugins: [],
}

