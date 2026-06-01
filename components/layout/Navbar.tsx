'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './nav.css'

type NavChild = { vi: string; href: string }
type NavItem = { en: string; vi: string; href?: string; children?: NavChild[] }

const navItems: NavItem[] = [
  { en: 'HOME',      vi: 'Trang chủ',            href: '/' },
  { en: 'ABOUT',     vi: 'Giới thiệu', href: '/gioithieu' },
  {
    en: 'DOCUMENTS', vi: 'Văn bản',
    children: [
      { vi: 'Văn bản - Biểu mẫu', href: '/vanban/bieu-mau' },
      { vi: 'Văn bản pháp quy',   href: '/vanban/phap-quy' },
    ],
  },
  { en: 'LOOKUP',    vi: 'Tra cứu kết quả',  href: '/tracuu' },
  {
    en: 'INFO', vi: 'Thông tin',
    children: [
      { vi: 'Lịch thi',      href: '/thongtin/lich-thi' },
      { vi: 'Lịch ôn',       href: '/thongtin/lich-on' },
      { vi: 'Kế hoạch năm',  href: '/thongtin/ke-hoach-nam' },
    ],
  },
  { en: 'CONTACT',   vi: 'Liên hệ',    href: '/lienhe' },
  { en: 'UNIVERSITY', vi: 'Về trường',              href: 'https://www.nctu.edu.vn/' },
  { en: 'CENTER',     vi: 'Trung tâm chuẩn đầu ra', href: 'https://ttcdr.nctu.edu.vn/' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      if (current < 80) {
        setHidden(false)
      } else if (current > lastScrollY.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header className={`hirono-header${hidden && !open ? ' is-hidden' : ''}`}>
        <Link className="hirono-logo" href="/" aria-label="VSTEP – Đại học Nam Cần Thơ"
          style={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto', transition: 'opacity 0.3s' }}>
          <Image src="/img/logo_truong.png" alt="Logo ĐNC" width={180} height={52} style={{ height: 52, width: 'auto' }} />
        </Link>

        <div className="hirono-header-actions">
          <Link href="https://dkhp.nctu.edu.vn/dangnhap" className="hirono-entry"
            style={{ opacity: open ? 0 : 1, pointerEvents: open ? 'none' : 'auto', transition: 'opacity 0.3s' }}>
            Đăng ký
          </Link>

          <button
            type="button"
            className={`hirono-menu-button${open ? ' is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Mở menu"
            aria-expanded={open}
          >
            <span className="hirono-menu-icon">
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      {/* BACKDROP che 120px bên trái */}
      <div className={`hirono-nav-backdrop${open ? ' is-open' : ''}`} aria-hidden="true" />

      {/* OVERLAY */}
      <div className={`hirono-nav-overlay${open ? ' is-open' : ''}`}>

        {/* <button className="hirono-close" onClick={() => setOpen(false)} aria-label="Đóng">
          ×
        </button> */}

        <div className="hirono-nav-inner">

          {/* Cột trái: logo + link */}
          <div className="hirono-nav-left">
            <Link href="/" className="hirono-nav-logo" onClick={() => setOpen(false)}>
              <Image src="/img/logo_truong.png" alt="Logo ĐNC" width={200} height={60} style={{ height: 60, width: 'auto' }} />
            </Link>
            {/* <Link href="https://dnc.edu.vn" className="hirono-corporate" target="_blank" rel="noopener noreferrer">
              Website Trường ĐNC ↗
            </Link> */}
          </div>

          {/* Nav items */}
          <nav className="hirono-nav-list" aria-label="Điều hướng chính">
            {navItems.map((item) => {
              const itemContent = (
                <>
                  <span className="hirono-nav-en">{item.en}</span>
                  <span className="hirono-nav-jp-row">
                    <span className="hirono-nav-jp">{item.vi}</span>
                    {item.children && (
                      <span className="hirono-nav-plus" aria-hidden="true">
                        <span /><span />
                      </span>
                    )}
                  </span>
                </>
              )
              const itemClass = `hirono-nav-item${item.children ? ' has-children' : ''}`
              return (
              <div key={item.en} className="hirono-nav-cell">
                {item.href ? (
                  <Link href={item.href} className={itemClass} onClick={() => setOpen(false)}>
                    {itemContent}
                  </Link>
                ) : (
                  <span className={itemClass}>{itemContent}</span>
                )}
                {item.children && (
                  <ul className="hirono-nav-sub">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="hirono-nav-sub-item"
                          onClick={() => setOpen(false)}
                        >
                          {c.vi}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              )
            })}
          </nav>

          {/* Bottom: nút ENTRY */}
          <div className="hirono-nav-bottom">
            <Link href="https://dkhp.nctu.edu.vn/dangnhap" target="_blank" rel="noopener noreferrer" className="hirono-nav-entry" onClick={() => setOpen(false)}>
              Đăng ký ngay
              <span className="hirono-nav-entry-arrow">→</span>
            </Link>
            {/* <p className="hirono-copy">
              © Trung tâm Ngoại ngữ VSTEP – Trường Đại học Nam Cần Thơ
            </p> */}
          </div>

        </div>
      </div>
    </>
  )
}
