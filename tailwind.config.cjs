/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'lime-green': '#32CD32',
        'emerald':'#bef264',
        'dark-blue':'#082f49',
        'dark-green':'#134e4a',
        'light-yellow':'#fef9c3',
        'light-indigo':'#eef2ff',
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
