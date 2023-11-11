import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    // sanity({
    //   projectId: '5ogj981v',
    //   dataset: 'production',
    //   apiVersion: '2021-03-25',
    //   useCdn: true,
    // })
  ],
});