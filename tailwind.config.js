/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('./assets/bg.png')",
      }
    },
  },
  plugins: [],
}

