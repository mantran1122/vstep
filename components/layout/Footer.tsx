import Image from 'next/image'
import Link from 'next/link'

function IconMail() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-black/35">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconChat() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-black/35">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-black/35">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-black/35">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 22V12h6v10M3 9h18" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-black/35">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative z-10 px-5 py-5" style={{ marginTop: '96px' }}>
      {/* Main card */}
      <div style={{ margin: '20px auto', padding: '40px 60px', minHeight: '220px' }} className="max-w-[1540px] w-full bg-white border border-black/10 rounded-2xl">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0">

          {/* Logo */}
          <div className="lg:w-[280px] shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src="/img/logo_don.png"
                alt="Logo Đại học Nam Cần Thơ"
                width={60}
                height={60}
                className="object-contain select-none"
              />
            </Link>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block flex-1" />

          {/* Liên hệ */}
          <div className="lg:w-[320px] shrink-0">
            <h3 className="text-2xl font-medium text-black mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-lg text-black/55">
                <IconMail />
                <span>ttchuandaura@nctu.edu.vn</span>
              </li>
              <li className="flex items-start gap-2.5 text-lg text-black/55">
                <IconChat />
                <span>Hotline / Zalo: 0982 991 914</span>
              </li>
              <li className="flex items-start gap-2.5 text-lg text-black/55">
                <IconPhone />
                <span>Điện thoại: 02923 798 789</span>
              </li>
            </ul>
          </div>

          {/* Địa chỉ */}
          <div className="lg:w-[320px] shrink-0 lg:ml-16">
            <h3 className="text-2xl font-medium text-black mb-4">Địa chỉ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-[18px] text-black/55">
                <IconBuilding />
                <span>Văn phòng: C2-14</span>
              </li>
              <li className="flex items-start gap-2.5 text-[18px] text-black/55">
                <IconPin />
                <span>Số 168, Nguyễn Văn Cừ (nối dài), P. An Bình, TP. Cần Thơ</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="pt-5">
          <div className="border-t border-black/10 mb-5" />
          <p className="text-base text-black/100 tracking-wide">
            © 2026 Trung tâm Chuẩn đầu ra &amp; Phát triển nguồn nhân lực - Trường Đại học Nam Cần Thơ
          </p>
        </div>
      </div>
    </footer>
  )
}
