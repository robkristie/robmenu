import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), vue()],
  adapter: netlify()
});