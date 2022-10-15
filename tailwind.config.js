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
 plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
 corePlugins: {
  preflight: false,
 },
});
