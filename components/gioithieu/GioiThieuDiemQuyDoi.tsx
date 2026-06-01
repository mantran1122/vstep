'use client'

import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ROWS = [
  {
    diem: 'Dưới 4,0',
    bac: 'Không xét',
    bacLabel: null,
    desc: 'Không xét khi sử dụng định dạng đề thi này.',
    muted: true,
  },
  {
    diem: '4,0 – 5,5',
    bac: 'Bậc 3',
    bacLabel: '',
    desc: 'Có thể hiểu được các ý chính của một đoạn văn hay bài phát biểu chuẩn mực về câu từ, rõ ràng về các chủ đề quen thuộc hay gặp trong công việc, học tập, giải trí, v.v… Có thể xử lí hầu hết các tình huống xảy ra lúc đi lại tại khu vực có sử dụng tiếng Anh. Có thể viết văn bản đơn giản liên quan đến các chủ đề quen thuộc hoặc cá nhân quan tâm. Có thể mô tả được những trải nghiệm, sự kiện, mơ ước, hi vọng, hoài bão và có thể trình bày ngắn gọn các lí do, giải thích cho ý kiến và kế hoạch của mình.',
    muted: false,
  },
  {
    diem: '6,0 – 8,0',
    bac: 'Bậc 4',
    bacLabel: '',
    desc: 'Có thể hiểu ý chính của một văn bản phức tạp về các chủ đề cụ thể và trừu tượng, kể cả những trao đổi kĩ thuật thuộc lĩnh vực chuyên môn của bản thân. Có thể giao tiếp ở mức độ trôi chảy, tự nhiên đạt đến mức các giao tiếp thường xuyên này với người bản ngữ không gây khó khăn cho cả hai bên. Có thể viết được các văn bản rõ ràng, chi tiết về nhiều chủ đề khác nhau và có thể giải thích quan điểm của mình về một vấn đề có tính thời sự, nêu ra được những ưu điểm, nhược điểm của các phương án lựa chọn khác nhau.',
    muted: false,
  },
  {
    diem: '8,5 – 10',
    bac: 'Bậc 5',
    bacLabel: '',
    desc: 'Có thể hiểu nhiều loại văn bản khó, dài, và nhận biết được hàm ý. Có thể diễn đạt lưu loát, tức thì, và không thể hiện rõ rệt việc phải tìm từ ngữ diễn đạt. Có thể sử dụng ngôn ngữ linh hoạt và hiệu quả phục vụ các mục đích xã hội, học thuật và chuyên môn. Có thể viết được các văn bản rõ ràng, chặt chẽ, chi tiết về các chủ đề phức tạp, thể hiện khả năng sử dụng tốt các kiểu tổ chức văn bản, liên từ và các phương tiện liên kết.',
    muted: false,
  },
]

export default function GioiThieu4KyNang() {
  const sectionRef = useRef<HTMLElement>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

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
            '[data-gtdq-text-card]',
            { opacity: 0, x: -56, y: 36 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.95,
              ease: 'power3.out',
            }
          )
          .fromTo(
            '[data-gtdq-image-card]',
            { opacity: 0, x: 46, y: 28, scale: 0.94, rotate: 2 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotate: 0,
              duration: 0.9,
              ease: 'power3.out',
            },
            0.14
          )

        const rows = gsap.utils.toArray<HTMLElement>('[data-score-row]', rowsRef.current)

        cardsTl.fromTo(
          rows,
          { opacity: 0, x: 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.58,
            ease: 'power2.out',
            stagger: 0.12,
          },
          0.52
        )

        gsap.fromTo(
          '[data-gtdq-head]',
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '[data-gtdq-head]',
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
            data-gtdq-text-card
            className="w-full min-w-0 rounded-2xl border border-[#e4ddd0] bg-white lg:flex-1"
            style={{
              paddingTop: '56px',
              paddingBottom: '56px',
              paddingLeft: '48px',
              paddingRight: '136px',
            }}
          >
            <div className="mb-10">
              <h2
                className="gioithieu-main-title leading-[1.14] tracking-[-0.03em] text-[#111]"
                style={{ marginBottom: '1rem' }}
              >
                Bảng quy đổi điểm
                <br />
                bài thi VSTEP bậc 3–5
              </h2>
            </div>

            <div
              data-gtdq-head
              className="mb-1 hidden grid-cols-[130px_120px_1fr] gap-x-6 border-b border-[#e8e1d8] pb-3 text-[calc(0.7rem+4px)] font-[600] whitespace-nowrap tracking-[0.14em] text-[#aaa] lg:grid"
            >
              <span>Điểm thi</span>
              <span>Bậc năng lực</span>
              <span>Mô tả năng lực</span>
            </div>

            <div ref={rowsRef} className="flex flex-col divide-y divide-[#e8e1d8]">
              {ROWS.map((row, index) => (
                <div
                  key={index}
                  data-score-row
                  className={`grid grid-cols-1 gap-x-6 gap-y-1.5 py-5 transition-colors duration-200 lg:grid-cols-[130px_120px_1fr] ${
                    row.muted ? 'opacity-40' : ''
                  }`}
                >
                  <div className="flex items-start lg:items-center">
                    <span
                      className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold tabular-nums"
                      style={{
                        background: row.muted ? '#f0ede8' : 'rgba(200,168,75,0.10)',
                        color: row.muted ? '#bbb' : 'var(--accent)',
                        border: `1px solid ${row.muted ? '#e0dbd4' : 'rgba(200,168,75,0.25)'}`,
                        fontFamily: "'Momo Trust Sans', sans-serif",
                      }}
                    >
                      {row.diem}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 lg:items-center">
                    <span
                      className="font-semibold text-[#111]"
                      style={{
                        fontFamily: "'Momo Trust Sans', sans-serif",
                        fontSize: 'calc(0.97rem + 4px)',
                      }}
                    >
                      {row.bac}
                    </span>
                    {row.bacLabel && (
                      <span
                        className="rounded px-1.5 py-0.5 text-[calc(0.7rem+4px)] font-medium"
                        style={{ background: '#f0ede8', color: '#888', border: '1px solid #e4ddd0' }}
                      >
                        {row.bacLabel}
                      </span>
                    )}
                  </div>

                  <p className="leading-[1.78] text-[#666]" style={{ fontSize: 'calc(0.82rem + 4px)' }}>
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hidden shrink-0 lg:block lg:sticky lg:z-10"
            style={{
              width: 'clamp(342px, 29vw, 558px)',
              top: 'var(--nav-h)',
              marginLeft: '-72px',
              paddingTop: '34px',
              paddingBottom: '34px',
            }}
          >
            <div
              data-gtdq-image-card
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '7/9' }}
            >
              <Image
                src="/gioithieu_img/4.png"
                alt="Sinh viên tốt nghiệp VSTEP"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1440px) 29vw, 558px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
