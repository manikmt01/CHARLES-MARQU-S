/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      Agrandir: ['Agrandir'],
      AgrandirGrand: ['Agrandir Grand'],
      AgrandirWide: ['Agrandir Wide'],
      AgrandirNarrow: ['Agrandir Narrow'],
      AgrandirTight: ['Agrandir Tight'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
