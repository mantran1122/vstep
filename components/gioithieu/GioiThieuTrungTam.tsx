'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TARGET_GROUPS = [
  { icon: 'bi-mortarboard-fill',     label: 'Sinh viên Đại học, Cao đẳng' },
  { icon: 'bi-journal-bookmark-fill', label: 'Học viên Thạc sĩ, Tiến sĩ' },
  { icon: 'bi-person-workspace',      label: 'Giáo viên tiếng Anh' },
  { icon: 'bi-briefcase-fill',        label: 'Người đi làm tại cơ quan, doanh nghiệp' },
]

export default function GioiThieuTrungTam() {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx: ReturnType<typeof gsap.context>

    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        
        // 1. EFFECT: Fade & Slide Up cho các khối Text tiêu chuẩn
        gsap.utils.toArray<HTMLElement>('[data-gt-reveal="text"]').forEach((el) => {
          gsap.fromTo(el, 
            { opacity: 0, y: 50 }, 
            {
              opacity: 1, y: 0, duration: 1, ease: 'power3.out',
              scrollTrigger: { 
                trigger: el, 
                start: 'top 85%', 
                once: true // Chạy 1 lần rồi hủy giải phóng bộ nhớ
              },
            }
          )
        })

        // 2. EFFECT: Cinematic Image Zoom Reveal
        gsap.utils.toArray<HTMLElement>('[data-gt-reveal="image"]').forEach((container) => {
          const img = container.querySelector('img')
          if (img) {
            // Giữ hiệu ứng fade của cả khung
            gsap.fromTo(container, 
              { opacity: 0, y: 30 }, 
              { 
                opacity: 1, y: 0, duration: 1, ease: 'power2.out', 
                scrollTrigger: { trigger: container, start: 'top 80%', once: true } 
              }
            )
            // Hiệu ứng Zoom độc lập của ảnh bên trong
            gsap.fromTo(img, 
              { scale: 1.2 }, 
              {
                scale: 1, duration: 1.6, ease: 'power2.out',
                scrollTrigger: { trigger: container, start: 'top 80%', once: true }
              }
            )
          }
        })

        // 3. EFFECT: Staggered List (Các item trong list xuất hiện lần lượt)
        const listContainer = document.querySelector('[data-gt-reveal="list"]')
        if (listContainer) {
          const items = listContainer.querySelectorAll('li')
          gsap.fromTo(items, 
            { opacity: 0, x: -30 }, 
            {
              opacity: 1, x: 0, duration: 0.6, ease: 'power2.out',
              stagger: 0.15,
              scrollTrigger: { trigger: listContainer, start: 'top 80%', once: true }
            }
          )
        }

      }, ref)
    })

    return () => { 
      cancelAnimationFrame(raf)
      ctx?.revert() 
    }
  }, [])

  return (
    <section ref={ref} className="py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-12 items-start">

          {/* ẢNH 1 — Combo Hiệu ứng 2 (Image Zoom) */}
          <div data-gt-reveal="image" className="relative aspect-[4/3] overflow-hidden rounded-xl lg:col-start-1 lg:row-start-1">
            <Image
              src="/gioithieu_img/1_1.png"
              alt="VSTEP - Bài kiểm tra năng lực tiếng Anh"
              fill
              className="object-cover"
              priority // Thêm priority cho ảnh đầu tiên để tối ưu LCP, tránh lag khi load ảnh
            />
            <div
              className="absolute bottom-5 left-5 rounded-lg px-4 py-3 z-10"
              style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(10px)' }}
            >
              <span className="block text-[calc(0.62rem+4px)] tracking-[0.18em] uppercase text-white/45 mb-1">Được công nhận bởi</span>
              <span className="block text-[calc(0.9rem+4px)] font-medium text-white">Bộ Giáo dục và Đào tạo</span>
            </div>
          </div>

          {/* Khối 1 + 2 — cột phải */}
          <div className="flex flex-col gap-12 lg:col-start-2 lg:row-start-1">

            {/* Khối 1: VSTEP là gì? */}
            <div data-gt-reveal="text">
              <h2 className="gioithieu-main-title leading-[1.1] tracking-[-0.04em] text-[#111]">
                VSTEP là gì?
              </h2>
              <p className="mt-5 leading-[1.85] text-[#111]/70" style={{ fontSize: 'calc(0.97rem + 4px)' }}>
                <strong className="font-medium text-[#111]">VSTEP</strong> là viết tắt của{' '}
                <em className="not-italic" style={{ color: 'var(--accent)' }}>
                  "Vietnamese Standardized Test of English Proficiency"
                </em>{' '}
                — nghĩa là kỳ thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ 6 bậc dành cho Việt Nam,
                từ bậc 1 đến bậc 6, tương đương với trình độ{' '}
                <strong className="font-medium text-[#111]">A1, A2, B1, B2, C1, C2</strong>.
              </p>
            </div>

            {/* Khối 2: Chứng chỉ VSTEP là gì? */}
            <div data-gt-reveal="text" className="border-t border-[#111]/10 pt-10">
              <h2 className="gioithieu-main-title font-light leading-[1.1] tracking-[-0.03em] text-[#111] mb-4">
                Chứng chỉ VSTEP là gì?
              </h2>
              <p className="leading-[1.85] text-[#111]/70" style={{ fontSize: 'calc(0.97rem + 4px)' }}>
                Chứng chỉ VSTEP là chứng chỉ tiếng Anh được cấp cho các thí sinh đạt đủ các điều kiện về năng lực
                theo Khung năng lực ngoại ngữ 6 bậc dành cho Việt Nam. Chứng chỉ được cấp bởi các trường được
                ủy quyền của <strong className="font-medium text-[#111]">Bộ Giáo dục và Đào tạo</strong>.
              </p>
            </div>

          </div>

          {/* Khối 3: Cần cho ai? */}
          <div className="lg:col-start-1 lg:row-start-2">
            <div className="border-t border-[#111]/10 pt-10 lg:border-t-0 lg:pt-0">
              <div data-gt-reveal="text">
                <h2 className="gioithieu-main-title whitespace-nowrap font-light leading-[1.1] tracking-[-0.03em] text-[#111] mb-6">
                  Chứng chỉ VSTEP cần cho ai?
                </h2>
              </div>
              
              <ul data-gt-reveal="list" className="flex flex-col gap-3">
                {TARGET_GROUPS.map((g, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 rounded-lg border border-[#111]/10 px-5 py-4 transition-colors duration-200 hover:border-[#111]/25"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'rgba(200,168,75,0.12)' }}
                    >
                      <i className={`bi ${g.icon} text-[0.95rem]`} style={{ color: 'var(--accent)' }} />
                    </span>
                    <span className="text-[calc(0.93rem+4px)] text-[#111]/80">{g.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ẢNH 2 — Combo Hiệu ứng 2 (Image Zoom) */}
          <div data-gt-reveal="image" className="relative aspect-[4/3] overflow-hidden rounded-xl lg:col-start-2 lg:row-start-2">
            <Image
              src="/gioithieu_img/2_2.png"
              alt="Sinh viên đạt chuẩn đầu ra VSTEP"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}