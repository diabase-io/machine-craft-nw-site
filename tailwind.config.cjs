/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#008EDE',
          secondary: '#A55FFE',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-200': '#030114'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
