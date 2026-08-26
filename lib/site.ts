export const siteConfig = {
  name: 'MAC Industrial Services',
  url: 'https://macindustrialsvcs.com',
  description:
    'MAC Industrial Services delivers expert industrial maintenance, outage services, welding and fabrication, and emergency response to industrial facilities nationwide.',
  logo: '/media/logo/mac-logo.png',
  socialImage: '/images/riverview.jpg',
  email: 'adoeppke@macindustrialsvcs.com',
  phone: '(229) 251-9315',
  // E.164 form for tel: links and schema.org telephone
  phoneHref: '+12292519315',
} as const

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString()
}
