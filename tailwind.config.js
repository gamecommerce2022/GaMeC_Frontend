/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: 'class',
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      green: { banana: "#BEEE11", dark: "#4c6b22" },
      gray: { dark: "#344654" },
    },
    extend: {},
   
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
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),    
  ],
  corePlugins: {
    preflight: false,
  },
});
