/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      esm: "0px",
      sm: "480px",
      md: "768px",
      md2: "870px",
      lg: "976px",
      lg0: "1083px",
      lg1: "1110px",
      lg2: "1200px",
      xl: "1440px",
      carousel: "1132px",
    },
    placeholderColor: {
      primary: "#8C9196",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    colors: {
      ...colors,
      primary: "#008060",
      primaryHover: "#005C44",
    },
  },
  plugins: [],
};
