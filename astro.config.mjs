import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  // No `include` is needed if you are only using a single JSX framework!
  site: "https://pynappo.github.io",
  integrations: [
    tailwind({
      configFile: "./tailwind.config.mjs",
    }),
    preact({
      include: ["**/preact/*"],
    }),
    react({
      include: ["**/react/*"],
    }),
    svelte({
      include: ["**/solid/*"],
    }),
    mdx(),
  ],
});
import preact from "@astrojs/preact";
