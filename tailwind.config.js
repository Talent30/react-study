const tailwindForms = require('@tailwindcss/forms');

module.exports = {
  mode: 'jit',
  purge: {
    // enabled: true,
    content: ['./src/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [tailwindForms],
};
