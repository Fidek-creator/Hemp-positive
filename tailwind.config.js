module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
        Teko: ['Teko', 'sans-serif'], //add this line to your tailwind.config.js  
      }, //end of fontFamily  
    },
  },
  plugins: [],
}