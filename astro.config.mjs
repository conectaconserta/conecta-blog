import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://conecta-blog.vercel.app',
  integrations: [sitemap()],
});
