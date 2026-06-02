'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const LEVELS = [
  {
    code: 'A1',
    label: 'Bậc 1 — Sơ cấp',
    desc: 'Hiểu và sử dụng các cụm từ quen thuộc, câu đơn giản trong cuộc sống hàng ngày. Giới thiệu bản thân và giao tiếp ở mức cơ bản nhất.',
  },
  {
    code: 'A2',
    label: 'Bậc 2 — Tiền trung cấp',
    desc: 'Giao tiếp trong các tình huống đơn giản như gia đình, mua sắm, địa điểm quen thuộc. Hiểu các câu và biểu đạt thường dùng.',
  },
  {
    code: 'B1',
    label: 'Bậc 3 — Trung cấp',
    desc: 'Hiểu các văn bản rõ ràng về chủ đề quen thuộc. Đây là chuẩn đầu ra bắt buộc của bậc đại học theo quy định Bộ GD&ĐT.',
    tag: 'Chuẩn đầu ra đại học',
  },
  {
    code: 'B2',
    label: 'Bậc 4 — Trên trung cấp',
    desc: 'Hiểu nội dung phức tạp cả cụ thể lẫn trừu tượng. Giao tiếp tự nhiên, trôi chảy với người bản ngữ. Tương đương chuẩn thạc sĩ.',
    tag: 'Chuẩn đầu ra thạc sĩ',
  },
  {
    code: 'C1',
    label: 'Bậc 5 — Cao cấp',
    desc: 'Sử dụng tiếng Anh linh hoạt, hiệu quả trong học thuật, nghề nghiệp và xã hội. Diễn đạt ý tưởng rõ ràng và chi tiết.',
  },
  {
    code: 'C2',
    label: 'Bậc 6 — Thành thạo',
    desc: 'Thành thạo hoàn toàn, hiểu mọi thứ nghe và đọc. Diễn đạt chính xác, tự phát trong mọi tình huống phức tạp nhất.',
  },
]

export default function GioiThieuKhung6Bac() {
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx: ReturnType<typeof gsap.context>

    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const cardsTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 76%',
            toggleActions: 'play none none none',
            once: true,
          },
        })

        cardsTl
          .fromTo(
            '[data-k6b-image-card]',
            { opacity: 0, x: -46, y: 28, scale: 0.94, rotate: -2 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 0.9,
              ease: 'power3.out',
            }
          )
          .fromTo(
            '[data-k6b-text-card]',
            { opacity: 0, x: 56, y: 36 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.95,
              ease: 'power3.out',
            },
            0.14
          )
          .fromTo(
            lineRef.current,
            { scaleY: 0, transformOrigin: 'top center' },
            { scaleY: 1, duration: 1.05, ease: 'power2.out' },
            0.42
          )

        const items = gsap.utils.toArray<HTMLElement>('[data-level-item]', timelineRef.current)

        cardsTl.fromTo(
          items,
          { opacity: 0, x: 26 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.14,
          },
          0.72
        )

        gsap.fromTo(
          '[data-k6b-note]',
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '[data-k6b-note]',
              start: 'top 88%',
              once: true,
            },
          }
        )
      }, sectionRef)
    })

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="flex flex-col items-start lg:flex-row">
          <div
            className="hidden shrink-0 lg:block lg:sticky lg:z-10"
            style={{
              width: 'clamp(342px, 29vw, 558px)',
              top: 'var(--nav-h)',
              marginRight: '-72px',
              paddingTop: '34px',
              paddingBottom: '34px',
            }}
          >
            <div
              data-k6b-image-card
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '7/9' }}
            >
              <Image
                src="/gioithieu_img/3_1.png"
                alt="Sinh viên ôn thi VSTEP"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1440px) 32vw, 620px"
                priority
              />
            </div>
          </div>

          <div
            data-k6b-text-card
            className="w-full min-w-0 rounded-2xl border border-[#e4ddd0] bg-white lg:flex-1"
            style={{
              paddingTop: 'clamp(32px, 5vw, 56px)',
              paddingBottom: 'clamp(32px, 5vw, 56px)',
              paddingRight: 'clamp(20px, 3vw, 48px)',
              paddingLeft: 'clamp(20px, 9vw, 136px)',
            }}
          >
            <div className="mb-12">
              <h2
                className="gioithieu-main-title leading-[1.14] tracking-[-0.03em] text-[#111]"
                style={{ marginBottom: '1rem' }}
              >
                Khung năng lực 6 bậc dùng cho Việt Nam
              </h2>
            </div>

            <div ref={timelineRef} className="relative">
              <div
                ref={lineRef}
                className="absolute bottom-6 left-[25px] top-[50px] w-px"
                style={{ background: 'linear-gradient(to bottom, var(--accent), rgba(200,168,75,0.08))' }}
              />

              <div className="flex flex-col">
                {LEVELS.map((level) => (
                  <div key={level.code} data-level-item className="flex gap-5 pb-9 last:pb-0">
                    <div className="relative z-10 shrink-0">
                      <div
                        className="flex h-[50px] w-[50px] items-center justify-center rounded-full border"
                        style={{ borderColor: 'var(--accent)', background: '#fff' }}
                      >
                        <span
                          className="font-semibold"
                          style={{
                            color: 'var(--accent)',
                            fontSize: 'calc(0.82rem + 4px)',
                            fontFamily: "'Momo Trust Sans', sans-serif",
                          }}
                        >
                          {level.code}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 pt-2">
                      <h3
                        className="mb-1.5 font-medium leading-snug text-[#111]"
                        style={{
                          fontSize: 'calc(0.97rem + 4px)',
                          fontFamily: "'Momo Trust Sans', sans-serif",
                        }}
                      >
                        {level.label}
                      </h3>
                      <p className="leading-[1.72] text-[#666]" style={{ fontSize: 'calc(0.83rem + 4px)' }}>
                        {level.desc}
                      </p>
                      {level.tag && (
                        <span
                          className="mt-2 inline-block rounded-sm px-2 py-1 text-[calc(0.58rem+4px)] uppercase tracking-[0.14em]"
                          style={{ background: 'rgba(200,168,75,0.12)', color: 'var(--accent)' }}
                        >
                          {level.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-k6b-note className="mt-10 border-t border-[#eee] pt-6">
              <p className="leading-[1.7] text-[#aaa]" style={{ fontSize: 'calc(0.75rem + 4px)' }}>
                Nguồn: Thông tư 01/2014/TT-BGDĐT — Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
