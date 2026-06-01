import Image from 'next/image'
import Link from 'next/link'

export default function GioiThieuHero() {
  return (
    <section className="relative h-[72vh] min-h-[500px] overflow-hidden">
      <Image
        src="/home/99406120-273c-4a77-99b6-99635e32abd9.png"
        alt="Giới thiệu VSTEP - Đại học Nam Cần Thơ"
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
          Giới thiệu
        </h1>

        <nav
          aria-label="Điều hướng"
          className="mt-6 flex items-center font-[600] gap-2 text-[calc(0.68rem+4px)] tracking-[0.2em] text-white"
          // style={{ textShadow: '0 6px 18px rgba(0,0,0,0.32)' }}
        >
          <Link href="/" className="transition-colors hover:text-white/70">
            Trang chủ
          </Link>
          <span>/</span>
          <span style={{ color: 'white' }}>Giới thiệu</span>
        </nav>
      </div>
    </section>
  )
}
