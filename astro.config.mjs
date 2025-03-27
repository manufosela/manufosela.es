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
  output: 'server',
  vite: {
    build: {
      rollupOptions: {
        external: ['scripts/**', 'functions/**', 'admin/**']
      }
    }
  },
  security: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; img-src 'self' https://librecounter.org https://res.cloudinary.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.growthbook.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://cdn.growthbook.io;"
    }
  }
})
