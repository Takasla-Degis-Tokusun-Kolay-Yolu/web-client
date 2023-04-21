/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      colors: {
        "brand-green": "#4A772F",
        "brand-green-soft": "#A1DD70",
        "brand-soft-white": "#FDFFF0",
        "brand-strong-white": "#E8ECD6",
        "brand-red": "#A23131",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

