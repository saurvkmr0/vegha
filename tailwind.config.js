module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],  // Include your JSX/TSX files
  theme: {
    extend: {
      colors: {
        primeBlue: '#0d6efd', // Example custom color
        hoverBlue: '#1377bb', // Another custom color
      },
    },
  },
  plugins: [],
};