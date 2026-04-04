// @ts-check

import react from "@astrojs/react";

import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [
    sanity({
      projectId: "68vbgg4r",
      dataset: "production",
      useCdn: true,
    }),
    react(),
  ],
});
