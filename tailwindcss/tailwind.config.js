module.exports = {
  theme: {
    // Some useful comment
  },
  variants: {
    // Some useful comment
    visibility: ['responsive', 'hover', 'focus']
  },
  plugins: [
    // Some useful comment
    function ({ addUtilities }) {
      const newUtilities = {
        '.-translateY-sm': {
          transform: 'translateY(-2px);',
        },
        '.transition': {
          transition: 'all .15s ease'
        },
        '.-scale-sm': {
          transform: 'scale(1.1)'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
