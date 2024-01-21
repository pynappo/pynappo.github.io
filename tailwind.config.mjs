import { dark, light, mirage } from "ayu";
import { Color } from "ayu/dist/color";

let ayu_copy = {};
// recursively copy over ayu colors
function tblSet(obj, indices, value) {
  let ptr = obj;
  for (let i = 0; i < indices.length - 1; i++) {
    let index = indices[i];
    if (!ptr[index]) ptr[index] = {};
    ptr = ptr[index];
  }
  ptr[indices[indices.length - 1]] = value;
}
function nestedCopy(original, destination, isLeaf, replacer, indices = []) {
  for (const [key, value] of Object.entries(original)) {
    indices.push(key);
    if (!isLeaf(value)) {
      nestedCopy(original[key], destination, isLeaf, replacer, indices);
    } else {
      tblSet(destination, indices, replacer(value));
    }
    indices.pop();
  }
}

for (const [key, value] of Object.entries({
  dark: dark,
  light: light,
  mirage: mirage,
})) {
  let a = {};
  nestedCopy(
    value,
    a,
    (item) => {
      return item instanceof Color;
    },
    (color) => color.hex(),
  );
  ayu_copy[key] = a;
}
console.log(ayu_copy);
console.log(ayu_copy.mirage.editor.fg);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      ayu: ayu_copy,
    }),
    extend: {},
  },
  plugins: [],
};
