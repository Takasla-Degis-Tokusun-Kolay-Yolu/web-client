/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "brand-green": "#4A772F",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
