/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        accent: '#000000',
        background: '#f2f2f0',
        card: '#ffffff',
        'card-hover': '#f7f7f5',
        text: '#1a1a1a',
        muted: '#6b6b6b',
        border: '#e5e5e3',
        'dark-bg': '#f2f2f0',
        'dark-card': '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
