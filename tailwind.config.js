/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      transitionProperty: {
        'filter': 'filter',
      },
      fontFamily: {
        roboto: ['Roboto, sans-serif'],
        sans: ['Open Sans, sans-serif'],
        montserrat: ['Montserrat, sans-serif'],
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#3DDC97',
          700: '#015F43',
        },
        blue: {
          300: '#4aa6f733',
          500: '#4AA6F7',
          900: '#141A31'
        },
        orange: {
          500: '#FF5C00',
          600: '#B15A35',
        },
        red: {
          600: '#CF5964',
          300: '#FA5A69',
          500: '#CF3D4B',
        },
        gray: {
          100: '#FCFCFC',
          200: '#AEAEAE',
          250: '#C6C6C6',
          300: '#646466',
          350: '#7A7C7E',
          500: '#6B6D6E',
          600: '#6A6A6A',
          700: '#1C1C1D',
          800: '#161819',
          900: '#01080B'
        },
        black: {
          500: '#FFFFFF',
        },
        pink: {
          500: '#FF495C',
        },
        yellow: {
          500: '#FEA600',
        }
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
