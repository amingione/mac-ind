import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { galleryAlbums, getAlbumImages } from '@/lib/gallery-albums'

type Props = {
  params: {
    album: string
  }
}

export async function generateStaticParams() {
  return galleryAlbums.map((album) => ({ album: album.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const album = galleryAlbums.find((item) => item.id === params.album)
  if (!album) {
    return {
      title: 'Album Not Found',
    }
  }

  return {
    title: `${album.title} Album`,
    description: album.description,
  }
}

export default async function AlbumPage({ params }: Props) {
  const album = galleryAlbums.find((item) => item.id === params.album)
  if (!album) notFound()

  const images = await getAlbumImages(album.id)

  return (
    <>
      <section className="pt-36 pb-14 bg-mac-dark relative overflow-hidden border-b border-white/5">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-mac-red" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-widest transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-700 text-xs">/</span>
            <Link
              href="/gallery"
              className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-widest transition-colors"
            >
              Gallery
            </Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-mac-red text-xs uppercase tracking-widest">{album.title}</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">{album.title} Album</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            {album.description} Total photos: {images.length}.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mac-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <div className="text-center py-14 border border-mac-gray-light rounded-xl bg-mac-dark">
              <p className="text-gray-400">No photos were found in this album.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {images.map((imageSrc, index) => (
                <a
                  key={imageSrc}
                  href={imageSrc}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-xl overflow-hidden border border-mac-gray-light bg-mac-dark hover:border-mac-red/40 transition-colors duration-300"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-mac-dark">
                    <Image
                      src={imageSrc}
                      alt={`${album.title} photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
