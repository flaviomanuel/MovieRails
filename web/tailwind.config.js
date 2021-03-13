module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontSize: {
      modifyLg: ['1.125rem',"1rem"],
    },
    colors: {
      redRails: '#CC0000',
      grayBackground: '#F3F3F4',
      white: '#FFFFFF'
    },
    boxShadow: {
      modifySearchShadow: '10px 7px 36px 2px rgba(0, 0, 0, 0.25);'
    }
  },
  variants: {

  },
  plugins: [],
}
