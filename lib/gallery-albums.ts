import galleryManifest from '@/lib/gallery-manifest.json'

export type GalleryAlbum = {
  id: string
  title: string
  description: string
  folder: string
}

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'jobsite',
    title: 'Jobsite',
    description: 'Field photos documenting active MAC Industrial projects and outage execution.',
    folder: 'images/jobsitePICS',
  },
]

export async function getAlbumImages(albumId: string): Promise<string[]> {
  return galleryManifest[albumId as keyof typeof galleryManifest] ?? []
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
