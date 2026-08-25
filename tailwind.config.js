/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#152238',
        canvas: '#f5f7fb',
        signal: '#16a394',
        amber: '#e6a23c'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(21, 34, 56, 0.08)'
      }
    }
  },
  plugins: []
};