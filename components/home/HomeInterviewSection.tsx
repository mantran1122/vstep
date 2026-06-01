'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const interviewItems = [
  {
    id: '01',

    title: 'Điều kiện tốt nghiệp và hoàn thiện hồ sơ học tập',
    meta: 'VSTEP B2 / Năng lực tiếng Anh nghề nghiệp',
    href: '/tracuu',
    image: '/home/totnghiep.jpg',
    variant: 'gold',
  },
  {
    id: '02',
    title: 'Vững vàng kiến thức chuyên môn và năng lực',
    meta: 'VSTEP B1 / Hỗ trợ mục tiêu tốt nghiệp',
    href: '/gioithieu',
    image: '/home/kienthucchuyenmon.jpg',
    variant: 'sky',
  },
  {
    id: '03',
    title: 'Tăng lợi thế khi ứng tuyển việc làm và thực tập',
    meta: 'VSTEP C1 / Phát triển học thuật và chuyên môn',
    href: '/lienhe',
    image: '/home/vieclam.jpg',
    variant: 'mint',
  },
  {
    id: '04',
    title: 'Mở rộng cơ hội học tiếp trong và ngoài nước',
    meta: 'VSTEP C1+ / Cơ hội học bổng và du học',
    href: '/lienhe',
    image: '/home/Cơ hội học tiếp.jpg',
    variant: 'rose',
  },
] as const

export default function HomeInterviewSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="home-interview">
      <div className="home-interview-inner">
        <div className="home-interview-heading">
          <h2 className="home-section-title">
            Có chứng chỉ VSTEP
            <span style={{ whiteSpace: 'nowrap' }}>Bạn có thêm những lợi thế nào?</span>
          </h2>
        </div>

        <div className="home-interview-grid" ref={gridRef}>
          {interviewItems.map((item) => (
            <article
              key={item.id}
              className={`home-interview-card home-interview-card--${item.variant}`}
            >
              <Link href={item.href} className="home-interview-card-link">
                <div className="home-interview-card-shape">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="home-interview-card-overlay">
                    <h3 className="home-interview-card-title">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
