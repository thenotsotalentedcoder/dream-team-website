/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          navy: '#1a2639',
          teal: '#4ecdc4',
          cream: '#f7fff7',
          coral: '#ff6b6b',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Clash Display', 'sans-serif'],
          accent: ['Playfair Display', 'serif'],
        },
        boxShadow: {
          'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        },
        height: {
          '90vh': '90vh',
        },
        maxHeight: {
          '90vh': '90vh',
        },
        zIndex: {
          '-10': '-10',
        },
        transitionProperty: {
          'height': 'height',
          'spacing': 'margin, padding',
        },
        animation: {
          'bounce-slow': 'bounce 3s infinite',
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }