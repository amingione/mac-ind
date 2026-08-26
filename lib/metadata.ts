import type { Metadata } from 'next'
import { absoluteUrl, siteConfig } from '@/lib/site'

interface PageMetadataInput {
  title: string
  description: string
  path: string
  imagePath?: string
  absoluteTitle?: boolean
}

export function toMetaDescription(description: string, maxLength = 160) {
  if (description.length <= maxLength) return description

  const shortened = description.slice(0, maxLength - 1)
  const lastSpace = shortened.lastIndexOf(' ')
  return `${shortened.slice(0, lastSpace > 120 ? lastSpace : maxLength - 1).trim()}…`
}

export function createPageMetadata({
  title,
  description,
  path,
  imagePath = siteConfig.socialImage,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = absoluteUrl(imagePath)
  const metaDescription = toMetaDescription(description)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: imageUrl,
          alt: imagePath === siteConfig.socialImage
            ? 'Industrial power facility served by MAC Industrial Services'
            : `${title} | MAC Industrial Services`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDescription,
      images: [imageUrl],
    },
  }
}
