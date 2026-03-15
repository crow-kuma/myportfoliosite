import { createClient } from "@sanity/client";

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;

export const sanity = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: "2023-07-01",
});
