import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

const albums = [
  {
    id: 'jobsite',
    folder: 'images/jobsitePICS',
  },
]

function toPublicImagePath(folder, file) {
  return `/${folder.replace(/^\/+|\/+$/g, '')}/${file}`
}

async function getImagesForFolder(folder) {
  const folderPath = path.join(process.cwd(), 'public', folder)
  const entries = await readdir(folderPath, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => toPublicImagePath(folder, file))
}

async function main() {
  const manifest = {}

  for (const album of albums) {
    manifest[album.id] = await getImagesForFolder(album.folder)
  }

  const outputPath = path.join(process.cwd(), 'lib', 'gallery-manifest.json')
  await writeFile(outputPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${outputPath}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
