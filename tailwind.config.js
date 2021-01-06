// eslint-disable-next-line @typescript-eslint/no-var-requires, import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    container: {
      padding: { DEFAULT: '2rem', md: '1rem' },
    },
    colors: {
      white: '#fff',
      textColor: '#080539',
      'stupo-main': colors.lightBlue,
      'stupo-main-complement': colors.orange,
      'stupo-compass': colors.purple,
      'stupo-compass-complement': colors.lightBlue,
      'stupo-quiz': colors.yellow,
      'stupo-quiz-complement': colors.lightBlue,
      'stupo-blog': colors.orange,
      'stupo-blog-complement': colors.rose,
      'stupo-tools': colors.red,
      'stupo-tools-complement': colors.indigo,
      'stupo-pupil': colors.lime,
      'stupo-pupil-complement': colors.purple,
      'stupo-teacher': colors.rose,
      'stupo-teacher-complement': colors.green,
    },
  },
  variants: { extend: { padding: ['first', 'last'] } },
  plugins: [],
};
