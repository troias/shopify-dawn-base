/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js',
    './assets/*.css',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
