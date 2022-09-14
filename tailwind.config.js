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
  extend: {},
 },
 plugins: [
  require("flowbite/plugin"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
 ],
});
