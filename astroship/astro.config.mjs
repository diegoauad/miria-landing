import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
// Si despliegas en GitHub Pages como "project site" (ej. usuario.github.io/astroship/),
// base debe ser '/nombre-del-repo/'. Si usas dominio propio en la raíz (miria.tech), usa base: '/' o quita base.
export default defineConfig({
  site: "https://miria.tech",
  base: "/astroship/",
  build: {
    // Sin guion bajo: GitHub Pages (Jekyll) ignora carpetas que empiezan por _
    assets: "astro",
  },
  integrations: [tailwind(), mdx(), sitemap(), icon()],
});
