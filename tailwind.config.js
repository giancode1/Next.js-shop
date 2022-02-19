const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*{html,js}'],
  // darkMode: false,
  theme: {
    colors: {
      ...colors,
    },
    // extend: {},
  },
  // variants: {
  //   extends: {},
  // },
  // plugins: [],
  // content: [],
};
