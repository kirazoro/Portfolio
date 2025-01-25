/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        olive: {
          50: '#f4f5f0',
          100: '#e6e7df',
          200: '#cfd2c4',
          300: '#b3b7a3',
          400: '#959a83',
          500: '#7d8169',
          600: '#626754',
          700: '#4b4f41',
          800: '#373a30',
          900: '#252721',
        },
        accent: {
          light: '#e6e7df',
          DEFAULT: '#b3b7a3',
          dark: '#4b4f41',
        }
      },
      backgroundImage: {
        'gradient-texture': 'linear-gradient(to bottom, rgba(37, 39, 33, 0.8), rgba(37, 39, 33, 0.95))',
      },
    },
  },
  plugins: [],
};