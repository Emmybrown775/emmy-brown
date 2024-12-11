/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Code"', "sans-serif"],
      },

      colors: {
        "main": "#011627",
        "text-colour": "#607B96",
        "line-colour": "#1E2D3D",
        "text-white": "#E5E9F0",
        "text-blue": "#4D5BCE",
        "text-green": "#43D9AD",
        "text-orange": "#E99287",
        "main-green": "#175553",
        "main-orange": "#FEA55F",
        "light-green": "#011423",
        "light-blue": "#3A49A4",
        "even-lighter-blue": "#5565E8",
        "dark-blue": "#011221",
        "ash-blue": "#1C2B3A",
        "icon-blue": "#86E1F9",
        "text-pink": "#C98BDF"
      }
    },
  },
  plugins: [],
}