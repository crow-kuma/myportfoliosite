import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: "68vbgg4r", 
  dataset: "production", 
  useCdn: true, 
  apiVersion: "2023-07-01" 
});