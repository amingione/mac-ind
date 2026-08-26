import type { MetadataRoute } from 'next'
import { capabilities, services } from '@/lib/data'
import { galleryAlbums } from '@/lib/gallery-albums'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/services'), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/capabilities'), changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/gallery'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/resources'), changeFrequency: 'monthly', priority: 0.7 },
    { url: absoluteUrl('/safety'), changeFrequency: 'yearly', priority: 0.7 },
    { url: absoluteUrl('/contact'), changeFrequency: 'yearly', priority: 0.8 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.id}`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const capabilityRoutes: MetadataRoute.Sitemap = capabilities.map((capability) => ({
    url: absoluteUrl(`/capabilities/${capability.id}`),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const galleryRoutes: MetadataRoute.Sitemap = galleryAlbums.map((album) => ({
    url: absoluteUrl(`/gallery/${album.id}`),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...capabilityRoutes, ...galleryRoutes]
}
