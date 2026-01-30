import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://miria.tech",
  build: {
    // Sin guion bajo: GitHub Pages (Jekyll) ignora carpetas que empiezan por _
    assets: "astro",
  },
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
