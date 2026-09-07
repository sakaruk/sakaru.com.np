import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sakaru.com.np',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      serialize(item) {
        // Strip trailing slash unless it is the root URL
        let url = item.url;
        if (url !== 'https://sakaru.com.np/' && url.endsWith('/')) {
          url = url.replace(/\/+$/, '');
        }
        item.url = url;
        item.lastmod = new Date();

        if (url === 'https://sakaru.com.np' || url === 'https://sakaru.com.np/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('/community') || url.includes('/portfolio')) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        } else if (url.includes('/about')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      },
    }),
  ],
});