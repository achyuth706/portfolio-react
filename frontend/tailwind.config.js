/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00e5b0',
        'accent-blue': '#3d8ef0',
        'accent-yellow': '#f0c040',
        bg: '#04070a',
        surface: '#080d12',
        card: '#0c1219',
        border: '#162030',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        heading: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
