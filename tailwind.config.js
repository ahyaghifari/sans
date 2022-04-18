module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        amatic: 'Amatic SC',
        poppins: 'Poppins',
      },
      colors: {
        whitechoco: '#EDE6D6',
        milkchoco: '#84563c',
        traditionalchoco: '#7B3F00',
        coffe: '#714732',
        brown: '#3F000F',
        cookies: '#EEE0B1',
      },
      aspectRatio: {
        portrait: '4 / 3'
      },
      keyframes: {
        pop: {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1)'}
        }
      }
    },
  },
  plugins: [],
}
