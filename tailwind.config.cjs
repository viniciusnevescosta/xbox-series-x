/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#9BF00B",
        // neutral
        dark: "#0C0C0C",
        gray: "#777777",
        grayLight: "#C0C0C0",
        light: "#FFFFFF",
      },
      fontSize: {
        tyne: "0.6rem",
      },
      backgroundImage: {
        greenLight: "src/assets/luz-verde.png",
      },
    },
  },
  plugins: [],
};
