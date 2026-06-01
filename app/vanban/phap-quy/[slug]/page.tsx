import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDocBySlug, phapQuyDocs } from '@/components/vanban/phapQuyData'

export function generateStaticParams() {
  return phapQuyDocs
    .filter((d) => d.slug)
    .map((d) => ({ slug: d.slug as string }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  return { title: doc ? `${doc.title} – VSTEP NCTU` : 'Văn bản pháp quy – VSTEP NCTU' }
}

export default async function PhapQuyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getDocBySlug(slug)
  if (!doc || !doc.pdf) notFound()

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col">
      <div className="flex items-center justify-between gap-4 px-4 py-3 bg-black text-white border-b border-white/10">
        <Link
          href="/vanban/phap-quy"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition"
        >
          <i className="bi bi-arrow-left" /> Quay lại
        </Link>
        <h1 className="hidden md:block text-sm font-medium text-white/90 truncate max-w-[60%]">
          {doc.title}
        </h1>
        <div className="flex items-center gap-2">
          <a
            href={doc.pdf}
            download
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/20 text-xs font-medium text-white hover:bg-white/10 transition"
          >
            <i className="bi bi-download" /> Tải xuống
          </a>
          <a
            href={doc.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[var(--accent)] text-black text-xs font-medium hover:opacity-90 transition"
          >
            <i className="bi bi-box-arrow-up-right" /> Tab mới
          </a>
        </div>
      </div>

      <div className="flex-1 bg-black">
        <iframe
          src={doc.pdf}
          title={doc.title}
          className="w-full h-full border-0"
        />
      </div>
    </div>
  )
}
