export const siteConfig = {
  name: 'MAC Industrial Services',
  url: 'https://macindustrialsvcs.com',
  description:
    'MAC Industrial Services delivers expert industrial maintenance, outage services, welding and fabrication, and emergency response to industrial facilities nationwide.',
  logo: '/media/logo/mac-logo.png',
  email: 'JMclain@macindustrialsvcs.com',
  phone: '+1-812-801-1391',
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}
