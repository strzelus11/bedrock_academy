import type { MetadataRoute } from 'next'

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
  'https://bedrock-academy.pl'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/o-nas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/dokumenty', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/gdzie-jestesmy', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/kontakt', priority: 0.8, changeFrequency: 'yearly' as const },
    { path: '/polityka-prywatnosci', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
