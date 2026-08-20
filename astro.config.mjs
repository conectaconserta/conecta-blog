import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://conecta-blog.vercel.app',
  integrations: [
    sitemap({
      // /tiktok (bio) e /chatgpt (destino de anúncio) são landings — fora do sitemap
      filter: page => !page.includes('/tiktok') && !page.includes('/chatgpt'),
    }),
  ],
});
