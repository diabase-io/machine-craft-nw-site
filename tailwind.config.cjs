/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        dsk: ['19px', '1.75rem'],
      },
      spacing: {
        header: '5.25rem',
        21: '5.25rem',
        22: '5.5rem',
        23: '5.75rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        29: '7.25rem',
        30: '7.5rem',
        31: '7.75rem',
        33: '8.25rem',
        34: '8.5rem',
        35: '8.75rem'
      },
      screens: {
        // same as xl breakpoint, makes reading code easier
        dsk: '1280px'
      }
    }
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
