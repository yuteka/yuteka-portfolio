/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F8F7F4',
        'lavender-blush': '#FFF0F5',
        'deep-rose': '#BE185D', // This is the same as pink-700
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob-float': 'blob-float 8s ease-in-out infinite',
      },
      keyframes: {
        'blob-float': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        }
      },
    },
  },
  plugins: [],
}