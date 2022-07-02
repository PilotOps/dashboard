import { defineConfig } from 'astro/config';

import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), tailwind({ config: { applyBaseStyles: false } }), sitemap()],
  // experimental: { integrations: true },
  vite: {
    ssr: { external: ["svgo"] },
    plugins: [
      AutoImport({
        resolvers: [
          IconsResolver({
            prefix: "Icon",
            extension: "tsx",
          }),
        ],
      }),
      Icons({
        autoInstall: true,
        compiler: "solid",
        defaultClass: "icon",
      })
    ],
  },
});