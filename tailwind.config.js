/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinematic: {
          900: '#06141F',
          800: '#0A1F2E',
          700: '#12344D',
          accent: '#6DB6D9',
          light: '#BCE6FF',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backdropFilter: {
        'glass': 'blur(10px)',
        'glass-lg': 'blur(20px)',
        'glass-xl': 'blur(25px)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(109, 182, 217, 0.5)',
        'glow-sm': '0 0 15px rgba(109, 182, 217, 0.3)',
        'glow-lg': '0 0 50px rgba(109, 182, 217, 0.4)',
        'glow-inner': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
