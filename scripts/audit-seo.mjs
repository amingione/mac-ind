import { readFile, readdir } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'

const appBuildDirectory = join(process.cwd(), '.next/server/app')
const expectedOrigin = 'https://macindustrialsvcs.com'
const googleTagId = 'G-B9NSMY1RXP'

function normalizeUrl(value) {
  const url = new URL(value)
  return `${url.origin}${url.pathname === '/' ? '' : url.pathname}${url.search}`
}

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await findHtmlFiles(fullPath)))
    else if (entry.name.endsWith('.html')) files.push(fullPath)
  }

  return files
}

function routeForFile(filePath) {
  const buildPath = relative(appBuildDirectory, filePath).split(sep).join('/')
  if (buildPath === 'index.html') return '/'
  return `/${buildPath.replace(/\.html$/, '')}`
}

function matches(content, expression) {
  return [...content.matchAll(expression)].map((match) => match[1])
}

const sitemapXml = await readFile(
  join(appBuildDirectory, 'sitemap.xml.body'),
  'utf8',
).catch(() => {
  throw new Error('Missing sitemap build output. Run `npm run build` first.')
})

const sitemapUrls = matches(sitemapXml, /<loc>(.*?)<\/loc>/g)
const sitemapUrlSet = new Set(sitemapUrls.map(normalizeUrl))
const htmlFiles = (await findHtmlFiles(appBuildDirectory)).filter(
  (filePath) => !filePath.endsWith('_not-found.html'),
)
const failures = []
const pages = []

for (const filePath of htmlFiles) {
  const route = routeForFile(filePath)
  const expectedCanonical = `${expectedOrigin}${route === '/' ? '/' : route}`
  const html = await readFile(filePath, 'utf8')
  const head = html.match(/<head>([\s\S]*?)<\/head>/)?.[1] ?? ''
  const titles = matches(head, /<title>(.*?)<\/title>/g)
  const descriptions = matches(
    head,
    /<meta name="description" content="(.*?)"/g,
  )
  const canonicals = matches(head, /<link rel="canonical" href="(.*?)"/g)
  const openGraphUrls = matches(
    head,
    /<meta property="og:url" content="(.*?)"/g,
  )
  const h1Count = (html.match(/<h1\b/g) ?? []).length
  const jsonLdScripts = matches(
    html,
    /<script type="application\/ld\+json">(.*?)<\/script>/g,
  )
  const googleTagLoaderCount = (
    head.match(new RegExp(`googletagmanager\\.com/gtag/js\\?id=${googleTagId}`, 'g')) ?? []
  ).length
  const googleTagConfigCount = (
    head.match(new RegExp(`gtag\\('config', '${googleTagId}'\\)`, 'g')) ?? []
  ).length

  for (const jsonLd of jsonLdScripts) {
    try {
      JSON.parse(jsonLd)
    } catch (error) {
      failures.push(`${route}: invalid JSON-LD (${error})`)
    }
  }

  if (titles.length !== 1 || !titles[0]) failures.push(`${route}: expected one title`)
  if (descriptions.length !== 1 || !descriptions[0]) {
    failures.push(`${route}: expected one meta description`)
  }
  if (
    canonicals.length !== 1 ||
    normalizeUrl(canonicals[0]) !== normalizeUrl(expectedCanonical)
  ) {
    failures.push(
      `${route}: canonical should be ${expectedCanonical}, found ${canonicals.join(', ') || 'none'}`,
    )
  }
  if (
    openGraphUrls.length !== 1 ||
    normalizeUrl(openGraphUrls[0]) !== normalizeUrl(expectedCanonical)
  ) {
    failures.push(
      `${route}: og:url should be ${expectedCanonical}, found ${openGraphUrls.join(', ') || 'none'}`,
    )
  }
  if (h1Count !== 1) failures.push(`${route}: expected one h1, found ${h1Count}`)
  if (googleTagLoaderCount !== 1 || googleTagConfigCount !== 1) {
    failures.push(
      `${route}: expected one Google tag, found ${googleTagLoaderCount} loader and ${googleTagConfigCount} config calls`,
    )
  }
  if (!sitemapUrlSet.has(normalizeUrl(expectedCanonical))) {
    failures.push(`${route}: canonical URL is missing from sitemap`)
  }

  pages.push({
    route,
    title: titles[0],
    description: descriptions[0],
  })
}

for (const field of ['title', 'description']) {
  const values = new Map()

  for (const page of pages) {
    const routes = values.get(page[field]) ?? []
    routes.push(page.route)
    values.set(page[field], routes)
  }

  for (const [value, routes] of values) {
    if (value && routes.length > 1) {
      failures.push(`Duplicate ${field} on ${routes.join(', ')}`)
    }
  }
}

if (sitemapUrls.length !== sitemapUrlSet.size) {
  failures.push('Sitemap contains duplicate URLs')
}

console.log(
  JSON.stringify(
    {
      pagesAudited: pages.length,
      sitemapUrls: sitemapUrls.length,
      failures,
    },
    null,
    2,
  ),
)

if (failures.length > 0) process.exitCode = 1
