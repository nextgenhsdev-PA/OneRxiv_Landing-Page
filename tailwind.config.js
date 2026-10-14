module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#C8102E',      // logo red: primary actions
        ink: '#1B2230',        // logo navy: text
        blush: { 50: '#FFF6F8', 100: '#FDE9EE', 200: '#F9CFD9', 300: '#F2A9BB' },
        slate2: '#5B6474',
      },
      fontFamily: { display: ['var(--font-display)', 'serif'], sans: ['var(--font-sans)', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
