import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://conecta-blog.vercel.app',
  integrations: [sitemap()],
  output: "hybrid",
  adapter: cloudflare()
});