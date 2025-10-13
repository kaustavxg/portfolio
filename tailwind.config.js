/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: { DEFAULT: '#f59e0b', hover: '#d97706' },
        base: { 900: '#0a0a0a', 800: '#111111', 700: '#1a1a1a' }
      },
      boxShadow: { glow: '0 0 0 4px rgba(245,158,11,0.18)' },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)'
      }
    },
  },
  plugins: [],
}

