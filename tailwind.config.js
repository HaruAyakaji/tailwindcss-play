/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
