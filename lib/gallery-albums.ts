import { readdir } from 'node:fs/promises'
import path from 'node:path'

export type GalleryAlbum = {
  id: string
  title: string
  description: string
  folder: string
}

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'jobsite',
    title: 'Jobsite',
    description: 'Field photos documenting active MAC Industrial projects and outage execution.',
    folder: 'images/jobsitePICS',
  },
]

function toPublicImagePath(folder: string, file: string): string {
  return `/${folder.replace(/^\/+|\/+$/g, '')}/${file}`
}

async function getImageFilesInPublicFolder(folder: string): Promise<string[]> {
  const folderPath = path.join(process.cwd(), 'public', folder)
  const entries = await readdir(folderPath, { withFileTypes: true })

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
}

export async function getAlbumImages(albumId: string): Promise<string[]> {
  const album = galleryAlbums.find((item) => item.id === albumId)
  if (!album) return []

  const files = await getImageFilesInPublicFolder(album.folder)
  return files.map((file) => toPublicImagePath(album.folder, file))
}

export async function getAlbumSummaries(): Promise<
  Array<GalleryAlbum & { coverImage: string | null; imageCount: number }>
> {
  return Promise.all(
    galleryAlbums.map(async (album) => {
      const images = await getAlbumImages(album.id)
      return {
        ...album,
        coverImage: images[0] ?? null,
        imageCount: images.length,
      }
    }),
  )
}
