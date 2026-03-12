import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "Portfolio",
  projectId: "68vbgg4r",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [], // Types will be handled via Sanity Studio in portfolioSanity
  },
});
