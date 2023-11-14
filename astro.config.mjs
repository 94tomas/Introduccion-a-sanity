import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [vue(), tailwind()
  // sanity({
  //   projectId: '5ogj981v',
  //   dataset: 'production',
  //   apiVersion: '2021-03-25',
  //   useCdn: true,
  // })
  ],
  adapter: vercel()
});