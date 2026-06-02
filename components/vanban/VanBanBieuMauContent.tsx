import Link from 'next/link'
import { bieuMauGroups, type BieuMauItem } from './bieuMauData'

function itemHref(item: BieuMauItem): string {
  if (item.kind === 'download') return item.file
  return `/vanban/bieu-mau/${item.slug}`
}

export default function VanBanBieuMauContent() {
  return (
    <section className="px-[6%] pt-[60px] md:pt-[120px] pb-[24px]">
      <div className="mx-auto max-w-[1400px]">
        <h1
          className="font-[500] tracking-[-0.02em] text-[#0b1f3a] leading-[1] mb-10"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          Biểu mẫu
        </h1>

        <div className="space-y-14">
          {bieuMauGroups.map((group) => (
            <div key={group.heading}>
              <div
                className="rounded-md px-6 py-3 mb-8"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                <h2 className="text-white font-[400] text-[1.25rem] tracking-wide">
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
                      <h3 className="text-center font-[400] text-[1.05rem] leading-snug text-[#0a0a0a] mb-3">
                        {item.title}
                      </h3>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
