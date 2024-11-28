/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#e0a159',
        'dark': '#111',
        'darker': '#000',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
        'fade-in-delay': 'fadeIn 0.7s ease-out 0.3s forwards',
        'fade-in-delay-2': 'fadeIn 0.7s ease-out 0.6s forwards',
        'bounce': 'bounce 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}