/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      green: { banana: "#BEEE11", dark: "#4c6b22" },
      gray: { dark: "#344654" },
    },
    extend: {},
    screen: {
      min: "320px",
    },
  },
  variants: {
    extend: {
      height: {
        128: "32rem",
      },
      grayscale: ["hover"],
      sepia: ["hover"],
      invert: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
  corePlugins: {
    preflight: false,
  },
});
