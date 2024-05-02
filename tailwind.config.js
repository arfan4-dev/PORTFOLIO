/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'h-calc': 'calc(100vh - 5rem)',
      },
      smallScreenHeight: {
        'min-h-calc': 'calc(100vh - 18rem)',
      },
    },
  },
  plugins: [],
}