import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://bellez-concept.vercel.app/sitemap.xml',
    host: 'https://bellez-concept.vercel.app',
  }
}
