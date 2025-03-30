/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#1a1a1a', // Dark Gray for primary elements
        'secondary': '#333333', // Slightly lighter dark gray for secondary elements
        'text-primary': '#ffffff', // White for primary text
        'text-secondary': '#cccccc', // Light gray for secondary text
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        "fade-right": {
          from:{
            opacity: "1",
            transform: "translateY(0)"
          },
          "to": {
            opacity: "0",
            transform: "translateY(40%)"
          }
        },
      },
      animation: {
        "fade-right": "fade-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}