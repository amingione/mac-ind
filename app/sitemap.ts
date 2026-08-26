import type { MetadataRoute } from 'next'
import { capabilities, services } from '@/lib/data'
import { galleryAlbums } from '@/lib/gallery-albums'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/') },
    { url: absoluteUrl('/services') },
    { url: absoluteUrl('/capabilities') },
    { url: absoluteUrl('/gallery') },
    { url: absoluteUrl('/resources') },
    { url: absoluteUrl('/safety') },
    { url: absoluteUrl('/contact') },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.id}`),
  }))

  const capabilityRoutes: MetadataRoute.Sitemap = capabilities.map((capability) => ({
    url: absoluteUrl(`/capabilities/${capability.id}`),
  }))

  const galleryRoutes: MetadataRoute.Sitemap = galleryAlbums.map((album) => ({
    url: absoluteUrl(`/gallery/${album.id}`),
  }))

  return [...staticRoutes, ...serviceRoutes, ...capabilityRoutes, ...galleryRoutes]
}
