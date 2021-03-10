const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['dark']
    }
  },
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
