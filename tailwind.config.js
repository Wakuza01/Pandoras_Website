/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d0e6',
          200: '#9fb0d5',
          300: '#7890c4',
          400: '#5a77b8',
          500: '#3b5ea8',
          600: '#2d4d8e',
          700: '#1e3a70',
          800: '#112754',
          900: '#0a1a3a',
          950: '#060f22',
        },
        gold: {
          50: '#fdf9ed',
          100: '#faf0cc',
          200: '#f5de94',
          300: '#f0c95c',
          400: '#ecb630',
          500: '#d4961a',
          600: '#b87512',
          700: '#8f5511',
          800: '#754415',
          900: '#633917',
          DEFAULT: '#d4961a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200%': '200%',
        '400%': '400%',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 26, 58, 0.15)',
        'gold': '0 4px 24px rgba(212, 150, 26, 0.3)',
        'navy': '0 4px 24px rgba(10, 26, 58, 0.4)',
        'card': '0 2px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
