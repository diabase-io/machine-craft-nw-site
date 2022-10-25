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
          primary: '#1980FA',
          secondary: '#A55FFE',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-200': '#030114',
          black: '#0A001A'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
