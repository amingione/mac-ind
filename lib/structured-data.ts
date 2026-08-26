import type { FAQ } from '@/types'
import { services } from '@/lib/data'
import { absoluteUrl, siteConfig } from '@/lib/site'

interface ServiceSchemaInput {
  name: string
  description: string
  path: string
  imagePath?: string
  category?: string
  areaServed?: string[]
}

export const organizationId = `${siteConfig.url}/#organization`
export const websiteId = `${siteConfig.url}/#website`

export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(siteConfig.logo),
      },
      description: siteConfig.description,
      email: siteConfig.email,
      telephone: siteConfig.phoneHref,
      // Core industry focus — mirrors the 'Industrial Company' business category
      knowsAbout: [
        'Welding & Fabrication',
        'Plant Maintenance',
        'Outage Services',
      ],
      // Built from the live services list so the schema can't drift from the site
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Industrial Services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${absoluteUrl(`/services/${service.id}`)}#service`,
            name: service.title,
            description: service.description,
            url: absoluteUrl(`/services/${service.id}`),
            provider: { '@id': organizationId },
          },
        })),
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: {
        '@id': organizationId,
      },
      inLanguage: 'en-US',
    },
  ],
}

export function createServiceSchema({
  name,
  description,
  path,
  imagePath,
  category,
  areaServed,
}: ServiceSchemaInput) {
  const url = absoluteUrl(path)

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name,
    description,
    url,
    ...(imagePath ? { image: absoluteUrl(imagePath) } : {}),
    ...(category ? { serviceType: category } : {}),
    provider: {
      '@id': organizationId,
    },
    areaServed: (areaServed ?? ['United States']).map((name) => ({
      '@type': 'Country',
      name,
    })),
  }
}

export function createFaqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
