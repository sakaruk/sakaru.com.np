import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://sakaru.com.np',

  integrations: [
      sitemap({
          serialize(item) {
              if (item.url === 'https://sakaru.com.np/') {
                  item.priority = 1.0;
                  item.changefreq = 'daily';
              } else if (item.url.includes('/community') || item.url.includes('/portfolio')) {
                  item.priority = 0.8;
                  item.changefreq = 'weekly';
              }
              return item;
          },
      })
	],

  adapter: cloudflare(),
});