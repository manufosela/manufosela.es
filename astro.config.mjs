import { Site } from './src/data/config'
import { defineConfig } from 'astro/config';

import sitemap from 'astro-sitemap'
import compress from 'astro-compress'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap({
    changefreq: 'weekly',
    priority: 0.8,
    exclude: ['/404', '/offline', '/offline.html', '/sitemap.xml', '/robots.txt']
  }), compress(), compressor(), robotsTxt({
    policy: [{ userAgent: '*', allow: '/' }],
    sitemap: `https://${Site.url}/sitemap.xml`,
  })],
  site: Site.url,
  output: 'static'
})
