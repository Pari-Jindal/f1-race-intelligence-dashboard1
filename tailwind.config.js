/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Motorsport near-black background
        base: {
          DEFAULT: '#0a0a0a',
          900: '#0a0a0a',
          800: '#121212',
          700: '#1a1a1a',
        },
        // F1 red accent
        f1red: {
          DEFAULT: '#e10600',
          50: '#fff1f0',
          100: '#ffe0de',
          200: '#ffc8c4',
          300: '#ffa39c',
          400: '#ff5a4f',
          500: '#e10600',
          600: '#c00500',
          700: '#9a0400',
          800: '#730300',
          900: '#4d0200',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'red-glow': '0 0 25px -4px rgba(225, 6, 0, 0.45)',
        'red-glow-lg': '0 0 50px -8px rgba(225, 6, 0, 0.55)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scrollWheel: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
        'pulse-red': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        marquee: 'marquee 28s linear infinite',
        scrollWheel: 'scrollWheel 1.6s ease-in-out infinite',
        'pulse-red': 'pulse-red 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
