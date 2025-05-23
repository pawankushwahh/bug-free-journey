/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // bright blue
          dark: '#1D4ED8',
          light: '#93C5FD',
        },
        secondary: {
          DEFAULT: '#10B981', // emerald green
          dark: '#059669',
          light: '#6EE7B7',
        },
        accent: {
          DEFAULT: '#1E293B', // slate blue
          light: '#334155',
        }
      }
    },
  },
  plugins: [],
};