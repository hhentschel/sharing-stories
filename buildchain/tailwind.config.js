// module exports
module.exports = {
  content: [
    '../src/templates/**/*.{twig,html}',
    '../src/vue/**/*.{vue,html}',
    '../src/css/**/*.{css,pcss,scss}',
  ],
  safelist: [],
  theme: {
    fontSize: {
      'h1-sm': ['2.375rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
      'h1-md': ['3rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
      'h1-lg': ['3.5rem', {
          lineHeight: '1.4',
          letterSpacing: '0.06em',
          fontWeight: '700',
      }],
    },
    container: {
      center: true,
      padding: '0 2rem',
    },
    extend: {
      colors: {
        'brand': '#253900',
        'header': '#08CB00',
        'nav-link': '#253900',
        'nav-link-active': '#000000',
        'custom': {
            50: '#fef2f2',
            100: '#fee2e2',
            500: '#C93127',
            900: '#7f1d1d',
          }
      }
    },
  },
  plugins: [],
};