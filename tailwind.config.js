/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#00786f",
        primary: "#98D7C2",
        secondary: "#DDFFE7",
      },
    },
  },
  plugins: [],
};
