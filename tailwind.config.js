/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f0fa',
          100: '#ecdcf2',
          200: '#d6b4e6',
          300: '#bd8bd6',
          400: '#9d5fbf',
          500: '#7e3ca4',
          600: '#6b2d8c',
          700: '#552570',
          800: '#4a1d6e',
          900: '#3a1758',
          950: '#260e3c',
        },
        accent: {
          50: '#fbf7ec',
          100: '#f6ecc8',
          200: '#ecd98c',
          300: '#e2c755',
          400: '#d4af37',
          500: '#c9a227',
          600: '#a8821e',
          700: '#84611c',
          800: '#6b4f1d',
          900: '#5b421d',
        },
        cream: {
          50: '#fefcf8',
          100: '#faf5ec',
          200: '#f3e9d6',
          300: '#ead9bd',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(74, 29, 110, 0.18)',
        gold: '0 8px 30px -10px rgba(212, 175, 55, 0.45)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        floatY: 'floatY 5s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
