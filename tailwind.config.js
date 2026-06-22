/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',      // blue-600
        background: '#F8FAFC',   // light gray-white
        card: '#FFFFFF',
        text: '#1E293B',         // slate-800
        muted: '#64748B',        // slate-500
        'dark-bg': '#0F172A',    // slate-900
        'dark-card': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
