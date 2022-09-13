/** @type {import('tailwindcss').Config} */
module.exports = {
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
};
