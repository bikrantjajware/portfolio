/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'project1': `url(images/projects/m3mories.png)`
      },
      animation: {
        glitch: 'glitch 0.0002s ease-in-out infinite'
      },
      keyframes: {
        glitch: {
          '0%,100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-15px)' },
          '50%': { transform: 'translate(15px)' }
        }
      }
    }
  },
  plugins: []
};
