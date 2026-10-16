import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site principal da Conecta Phone — exclusivo de SEO.
// Landing pages de anúncio ficam no projeto conecta-landings (ver vercel.json).
export default defineConfig({
  site: 'https://conecta-blog.vercel.app',
  integrations: [sitemap()],
});
