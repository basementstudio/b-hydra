const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: 'var(--font-body)',
      display: 'var(--font-display)'
    },
    extend: {
      colors: {
        gray: colors.trueGray
      },
      minWidth: {
        form: '484px'
      },
      maxWidth: {
        form: '484px'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: []
}
