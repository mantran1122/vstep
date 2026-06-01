import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { bieuMauGroups, findBieuMauBySlug } from '@/components/vanban/bieuMauData'

export function generateStaticParams() {
  const slugs: { slug: string }[] = []
  for (const g of bieuMauGroups) {
    for (const it of g.items) {
      if (it.slug) slugs.push({ slug: it.slug })
    }
  }
  return slugs
}

export default async function BieuMauViewerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = findBieuMauBySlug(slug)
  if (!item || item.kind === 'download') notFound()

  return (
    <>
      <style>{`
        .hirono-header, footer { display: none !important; }
        body { background: #000 !important; }
      `}</style>

      <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-4">
        <Link
          href="/vanban/bieu-mau"
          aria-label="Đóng"
          className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-2xl hover:bg-white/20 transition-colors"
        >
          ×
        </Link>

        {item.kind === 'image' ? (
          <Image
            src={item.file}
            alt={item.title}
            width={1600}
            height={2200}
            className="max-h-screen max-w-full w-auto h-auto object-contain"
            priority
          />
        ) : (
          <iframe
            src={item.file}
            title={item.title}
            className="w-full h-full border-0 bg-white"
          />
        )}
      </div>
    </>
  )
}
