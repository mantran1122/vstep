import Link from 'next/link'
import { phapQuyDocs } from './phapQuyData'

export default function VanBanPhapQuyContent() {
  return (
    <section className="px-[6%] pt-[120px] pb-[56px] sm:pb-[24px]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[var(--accent)] text-white px-6 py-4 rounded-md">
          <h2 className="text-xl md:text-2xl font-bold tracking-wide">
            Văn bản pháp quy hiện hành
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phapQuyDocs.map((doc) => {
            const cardClass =
              'group flex flex-col items-center bg-white border border-gray-200 rounded-md p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
            const inner = (
              <>
                <div className="flex justify-center mb-5">
                  <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
                    <i className={`bi ${doc.icon} text-4xl`} />
                  </span>
                </div>
                <h3 className="text-base font-bold text-center text-gray-900 leading-snug">
                  {doc.title}
                </h3>
              </>
            )

            if (doc.slug) {
              return (
                <Link key={doc.slug} href={`/vanban/phap-quy/${doc.slug}`} className={cardClass}>
                  {inner}
                </Link>
              )
            }

            return (
              <a
                key={doc.title}
                href={doc.externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
