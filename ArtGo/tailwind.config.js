/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        size1: "850px",
        size3: "10px",
      },
      colors: {
        brown1: "rgba(74, 70, 65, 1)",
        green1: "rgba(40, 159, 81, 1)",
      },
    },
  },
  plugins: [],
};
