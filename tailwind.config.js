/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'project1': `url(images/projects/m3mories.png)`
      },
      animation: {
        glitch: 'glitch 0.0002s ease-in-out infinite',
        showNav: 'showNav 1s ease forwards',
        hideNav: 'hideNav 1s ease forwards'
      },
      keyframes: {
        glitch: {
          '0%,100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-15px)' },
          '50%': { transform: 'translate(15px)' }
        },
        showNav: {
          '0%': { top: '-100%' },
          '100%': { top: '0' }
        },
        hideNav: {
          '0%': { top: '0' },
          '100%': { top: '-100%' }
        }
      }
    }
  },
  plugins: []
};
