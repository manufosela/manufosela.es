import { Site } from './src/data/config'
import { defineConfig } from 'astro/config';

import sitemap from 'astro-sitemap'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: Site.url,
  integrations: [sitemap({
    filter: (page) => !page.includes('admin') && !page.includes('api'),
    lastmod: new Date()
  }), compress(), compressor(), robotsTxt({
    policy: [{ userAgent: '*', allow: '/' }],
    sitemap: `${Site.url}/sitemap-index.xml`,
  })],
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        external: ['scripts/**', 'functions/**', 'admin/**']
      }
    }
  }
})
