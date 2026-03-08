// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "68vbgg4r",
      dataset: "production",
      useCdn: true,
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
