import { dark, light, mirage } from "ayu";
/** @type {import('tailwindcss').Config} */
export default {
  darkmode: ["class", "[data-theme=dark]"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
