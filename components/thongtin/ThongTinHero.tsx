import Image from 'next/image'
import Link from 'next/link'

interface Crumb { label: string; href?: string }

interface Props {
  title: string
  crumbs?: Crumb[]
  image?: string
}

export default function ThongTinHero({
  title,
  crumbs = [{ label: 'Trang chủ', href: '/' }, { label: 'Thông tin' }],
  image = '/home/99406120-273c-4a77-99b6-99635e32abd9.png',
}: Props) {
  return (
    <section className="relative h-[72vh] min-h-[500px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-black/38 via-black/14 to-transparent" />

      <div
        className="absolute inset-0 flex flex-col justify-center px-[6%]"
        style={{ paddingTop: 'calc(var(--nav-h) + 120px)' }}
      >
        <h1
          className="gioithieu-main-hero leading-[0.95] tracking-[-0.02em] text-white"
          style={{ textShadow: '0 10px 26px rgba(0,0,0,0.22)' }}
        >
          {title}
        </h1>

        <nav
          aria-label="Điều hướng"
          className="mt-6 flex items-center font-[600] gap-2 text-[calc(0.68rem+4px)] tracking-[0.2em] text-white"
        >
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2">
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white/70">
                  {c.label}
                </Link>
              ) : (
                <span style={{ color: 'white' }}>{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span>/</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  )
}
