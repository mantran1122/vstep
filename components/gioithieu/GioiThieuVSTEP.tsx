'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function GioiThieuVSTEP() {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx: ReturnType<typeof gsap.context>
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('[data-gt-reveal]', ref.current!).forEach((el) => {
          gsap.fromTo(el, { opacity: 0, y: 44 }, {
            opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 86%' },
          })
        })
      }, ref)
    })
    return () => { cancelAnimationFrame(raf); ctx?.revert() }
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ background: '#0a0a0a' }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24 items-center">

          {/* Image */}
          <div data-gt-reveal className="relative aspect-[4/3] overflow-hidden rounded-xl order-2 lg:order-1">
            <Image
              src="/gioithieu_img/1.png"
              alt="VSTEP - Bài kiểm tra năng lực tiếng Anh"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <div
              className="absolute bottom-5 left-5 rounded-lg px-4 py-3"
              style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(10px)' }}
            >
              <span className="block text-[calc(0.62rem+4px)] tracking-[0.18em] uppercase text-white/45 mb-1">Được công nhận bởi</span>
              <span className="block text-[calc(0.9rem+4px)] font-medium text-white">Bộ Giáo dục và Đào tạo</span>
            </div>
          </div>

          {/* Text */}
          <div data-gt-reveal className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="block h-px w-8" style={{ background: 'var(--accent)' }} />
              <span className="text-[calc(0.63rem+4px)] tracking-[0.24em] uppercase" style={{ color: 'var(--accent)' }}>Tổng quan</span>
            </div>
            <h2
              className="gioithieu-main-title leading-[1.1] tracking-[-0.04em] text-white"
            >
              VSTEP là gì?
            </h2>
            <p className="mt-6 leading-[1.85] text-white/65" style={{ fontSize: 'calc(0.97rem + 4px)' }}>
              <strong className="font-medium text-white">VSTEP</strong> (Vietnamese Standardized Test of English Proficiency)
              là bài kiểm tra năng lực tiếng Anh được chuẩn hóa theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam,
              tương đương Khung tham chiếu châu Âu (CEFR) từ A1 đến C2.
            </p>
            <p className="mt-4 leading-[1.85] text-white/65" style={{ fontSize: 'calc(0.97rem + 4px)' }}>
              Kỳ thi được tổ chức bởi Bộ Giáo dục và Đào tạo và các đơn vị được ủy quyền, nhằm đánh giá
              toàn diện 4 kỹ năng ngôn ngữ:{' '}
              <strong className="font-medium text-white">Nghe – Nói – Đọc – Viết</strong>.
            </p>
            <p className="mt-4 leading-[1.85] text-white/65" style={{ fontSize: 'calc(0.97rem + 4px)' }}>
              Chứng chỉ VSTEP có giá trị pháp lý, được Bộ GD&amp;ĐT công nhận và sử dụng rộng rãi trong
              xét chuẩn đầu ra đại học, thạc sĩ, tiến sĩ và các chương trình bồi dưỡng giáo viên trên cả nước.
            </p>
            <Link
              href="https://dkhp.nctu.edu.vn/dangnhap"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 pb-0.5 text-[calc(0.78rem+4px)] tracking-[0.12em] uppercase transition-opacity hover:opacity-70"
              style={{ borderBottom: '1px solid var(--accent)', color: 'var(--accent)' }}
            >
              Đăng ký thi ngay
              <i className="bi bi-arrow-right" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
