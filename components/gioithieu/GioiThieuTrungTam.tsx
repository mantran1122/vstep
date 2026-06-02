'use client'

import Image from 'next/image'
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
        
        // 1. TEXT REVEAL: Smooth Line Slip
        gsap.utils.toArray<HTMLElement>('[data-gt-reveal="text-premium"]').forEach((container) => {
          const lines = container.querySelectorAll('.reveal-line-inner')
          const paragraphs = container.querySelectorAll('p')

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true
            }
          })

          tl.fromTo(lines,
            { yPercent: 100 },
            { yPercent: 0, duration: 1.2, ease: 'power4.out', stagger: 0.08 }
          )
          
          if (paragraphs.length > 0) {
            tl.fromTo(paragraphs,
              { opacity: 0, y: 15 },
              { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 },
              '-=0.8'
            )
          }
        })

        // 2. IMAGE REVEAL: Clean Mask ClipPath (Đã fix giữ bo góc round 12px)
        gsap.utils.toArray<HTMLElement>('[data-gt-reveal="image-premium"]').forEach((container) => {
          const img = container.querySelector('img')
          
          if (img) {
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                once: true
              }
            })

            // FIX TẠI ĐÂY: Thêm "round 12px" để ép clipPath phải bo góc khi mở rèm
            tl.fromTo(container,
              { clipPath: 'inset(100% 0% 0% 0% round 12px)' },
              { clipPath: 'inset(0% 0% 0% 0% round 12px)', duration: 1.4, ease: 'power4.inOut', clearProps: 'clipPath' }
            )
            
            tl.fromTo(img, 
              { scale: 1.15 }, 
              { scale: 1, duration: 1.6, ease: 'power4.out' }, 
              '-=1.4'
            )

            // Parallax lướt nhẹ tạo chiều sâu khi cuộn trang
            gsap.to(img, {
              yPercent: -6,
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
              }
            })
          }
        })

        // 3. LIST REVEAL: Subtle Intersecting Stagger
        const listContainer = document.querySelector('[data-gt-reveal="list-premium"]')
        if (listContainer) {
          const items = listContainer.querySelectorAll('li')
          gsap.fromTo(items, 
            { opacity: 0, y: 25 }, 
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
              stagger: 0.08,
              scrollTrigger: {
                trigger: listContainer,
                start: 'top 85%',
                once: true
              }
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
    <section ref={ref} className="py-24 lg:py-36 overflow-hidden selection:bg-[#111] selection:text-white">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        
        <div className="grid grid-cols-1 gap-28 lg:grid-cols-2 lg:gap-x-32 lg:gap-y-48 lg:items-center">

          {/* HÀNG 1 - ẢNH TRÁI */}
          {/* FIX TẠI ĐÂY: style inline ban đầu cũng phải có "round 12px" để ảnh không bị vuông chằn chặn lúc vừa load trang */}
          <div 
            data-gt-reveal="image-premium" 
            className="relative aspect-[4/3] overflow-hidden rounded-xl lg:col-start-1 lg:row-start-1"
            style={{ clipPath: 'inset(100% 0% 0% 0% round 12px)' }}
          >
            <Image
              src="/gioithieu_img/1_1.png"
              alt="VSTEP - Bài kiểm tra năng lực tiếng Anh"
              fill
              className="object-cover will-change-transform"
              priority 
            />
            <div
              className="absolute bottom-6 left-6 text-white rounded-lg px-5 py-3.5 z-20"
              style={{ background: 'rgba(10, 10, 10, 0.75)', backdropFilter: 'blur(12px)' }}
            >
              <span className="block text-[12px] tracking-[0.2em]  text-white/80 mb-1 font-medium">Được công nhận bởi</span>
              <span className="block text-sm font-medium tracking-tight">Bộ Giáo dục và Đào tạo</span>
            </div>
          </div>

          {/* HÀNG 1 - CHỮ PHẢI */}
          <div className="flex flex-col lg:col-start-2 lg:row-start-1">
            <div data-gt-reveal="text-premium">
              <h2 className="gioithieu-main-title font-semibold leading-[1.15] tracking-[-0.03em] text-[#111] [text-wrap:balance]">
                <span className="block overflow-hidden py-1">
                  <span className="block reveal-line-inner">VSTEP và chứng chỉ</span>
                </span>
                <span className="block overflow-hidden py-1">
                  <span className="block reveal-line-inner">VSTEP là gì?</span>
                </span>
              </h2>
              
              <p className="mt-6 leading-[1.85] text-[#111]/65 text-base lg:text-[17px]">
                <strong className="font-semibold text-[#111]">VSTEP</strong>{' '}
                (<em className="not-italic font-medium" style={{ color: 'var(--accent)' }}>Vietnamese Standardized Test of English Proficiency</em>)
                là kỳ thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam,
                từ bậc 1 đến bậc 6, tương đương{' '}
                <strong className="font-semibold text-[#111]">A1, A2, B1, B2, C1, C2</strong> theo CEFR.
              </p>
              <p className="mt-4 leading-[1.85] text-[#111]/65 text-base lg:text-[17px]">
                <strong className="font-semibold text-[#111]">Chứng chỉ VSTEP</strong> là chứng chỉ được cấp cho
                thí sinh đạt đủ điều kiện năng lực ở từng bậc, do các đơn vị được{' '}
                <strong className="font-semibold text-[#111]">Bộ Giáo dục và Đào tạo</strong> ủy quyền tổ chức thi và cấp phát.
              </p>
            </div>
          </div>

          {/* HÀNG 2 - DANH SÁCH TRÁI */}
          <div className="lg:col-start-1 lg:row-start-2">
            <div data-gt-reveal="text-premium" className="mb-8">
              <h2 className="gioithieu-main-title font-normal leading-[1.15] tracking-[-0.03em] text-[#111] [text-wrap:balance]">
                <span className="block overflow-hidden py-1">
                  <span className="block reveal-line-inner">Chứng chỉ VSTEP</span>
                </span>
                <span className="block overflow-hidden py-1">
                  <span className="block reveal-line-inner">cần cho ai?</span>
                </span>
              </h2>
            </div>
            
            <ul data-gt-reveal="list-premium" className="flex flex-col gap-3.5">
              {TARGET_GROUPS.map((g, i) => (
                <li
                  key={i}
                  className="flex items-center gap-5 rounded-xl border border-[#111]/10 bg-transparent px-6 py-4.5 transition-all duration-400 hover:border-[#111] hover:bg-[#111]/[0.02] group cursor-pointer will-change-transform"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 group-hover:bg-[#111] group-hover:text-white"
                    style={{ background: 'rgba(200,168,75,0.08)' }}
                  >
                    <i className={`bi ${g.icon} text-base transition-colors duration-300`} style={{ color: 'var(--accent)' }} />
                  </span>
                  <span className="text-[16px] font-medium text-[#111]/70 group-hover:text-black transition-colors duration-300">{g.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HÀNG 2 - ẢNH PHẢI */}
          {/* FIX TẠI ĐÂY: Thêm "round 12px" vào style inline của ảnh thứ hai */}
          <div 
            data-gt-reveal="image-premium" 
            className="relative aspect-[4/3] overflow-hidden rounded-xl lg:col-start-2 lg:row-start-2"
            style={{ clipPath: 'inset(100% 0% 0% 0% round 12px)' }}
          >
            <Image
              src="/gioithieu_img/2_2.png"
              alt="Sinh viên đạt chuẩn đầu ra VSTEP"
              fill
              className="object-cover will-change-transform"
            />
          </div>

        </div>
      </div>
    </section>
  )
}