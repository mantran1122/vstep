import Link from 'next/link'
import { bieuMauGroups, type BieuMauItem } from './bieuMauData'

function itemHref(item: BieuMauItem): string {
  if (item.kind === 'download') return item.file
  return `/vanban/bieu-mau/${item.slug}`
}

export default function VanBanBieuMauContent() {
  return (
    <section className="px-[6%] pt-[120px] pb-[24px]">
      <div className="mx-auto max-w-[1400px] space-y-14">
        {bieuMauGroups.map((group) => (
          <div key={group.heading}>
            <div
              className="rounded-md px-6 py-3 mb-8"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <h2 className="text-white font-bold text-[1.25rem] tracking-wide">
                {group.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((item) => {
                const isDownload = item.kind === 'download'
                const extraProps = isDownload
                  ? { download: '' as string, target: '_blank', rel: 'noopener noreferrer' }
                  : {}
                return (
                  <Link
                    key={item.title}
                    href={itemHref(item)}
                    {...extraProps}
                    className="group block rounded-md bg-white p-8 border border-black/50 hover:border-black transition-colors"
                  >
                    <div className="flex justify-center mb-5">
                      <i
                        className={`bi ${item.icon}`}
                        style={{ fontSize: '56px', color: 'var(--accent)' }}
                      />
                    </div>
                    <h3 className="text-center font-bold text-[1.05rem] leading-snug text-[#0a0a0a] mb-3">
                      {item.title}
                    </h3>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
