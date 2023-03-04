/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html}", "./src/**/*.{vue, js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        lightYellow: '#eceac2',
        darkViolet: '#342546'
      }
    },
  },
  plugins: [],
}
