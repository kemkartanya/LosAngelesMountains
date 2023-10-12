module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary-color': '#414f6b',
      },
      textColor: {
        'primary-color': '#414f6b',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
