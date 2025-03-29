/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E1B4B', // Dark navy/black
          light: '#2D2D4D',
          dark: '#0D0D1D'
        },
        accent: {
          DEFAULT: '#8B5CF6', // Bright purple
          light: '#A78BFA',
          dark: '#7C3AED'
        },
        background: '#F8F9FA',
        text: {
          primary: '#1E1B4B',
          secondary: '#4A4A4A'
        }
      }
    },
  },
  plugins: [],
};