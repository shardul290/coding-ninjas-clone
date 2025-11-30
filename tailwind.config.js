/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#FFF7F3",
          100: "#FFE0D1",
          200: "#FFC4A8",
          300: "#FF9E70",
          400: "#FF7A3C",
          500: "#FF6C37", // main brand
          600: "#E85C2A",
          700: "#C94A1E",
        },
        gray: {
          900: "#0A0A0A",
          700: "#4B4B4B",
          500: "#7D7D7D",
          200: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
