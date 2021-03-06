module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'leftBackgroundRedRails': "url('/src/assets/images/left-background.png')",
       }),
       outline: {
         outlineInput: 'outline-style: none'
       }
    },
    fontSize: {
      modifyLg: ['1.125rem',"1rem"],
      titleLeftMain:["3rem","3.8rem"],
      titleForm:["1.8rem","2rem"],
      directorName: ["1.4rem","1.4rem"],
      releaseDate: ["0.9rem", "0.9rem"]
    },
    colors: {
      redRails: '#CC0000',
      grayBackground: '#F3F3F4',
      white: '#FFFFFF',
      releaseDate: '#5F6368',
      redDelete: '#ff4040',
      orangeUpdate: '#ff8c00',
    },
    boxShadow: {
      modifySearchShadow: '10px 7px 36px 2px rgba(0, 0, 0, 0.25);'
    }
  },
  variants: {

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
