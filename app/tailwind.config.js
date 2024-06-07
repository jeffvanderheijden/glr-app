/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "glr-green": {
          500: "#8fd23f",
          600: "#82bf39"
        }
      },
    },
  },
  plugins: [],
}