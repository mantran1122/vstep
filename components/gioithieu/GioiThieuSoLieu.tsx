'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type StatItem = {
  value: number
  label: string
  suffix?: string
  decimals?: number
}

const STATS: StatItem[] = [
  { value: 6, label: 'Khung đào tạo' },
  { value: 25, label: 'Đợt thi đã tổ chức', suffix: '+' },
  { value: 8000, label: 'Lượt thí sinh dự thi', suffix: '+' },
  { value: 70, label: 'Tỷ lệ đạt chứng chỉ', suffix: '%' },
  { value: 2500, label: 'Sinh viên đăng ký học', suffix: '+' },
]

function formatStatValue(value: number, suffix = '', decimals = 0) {
  const rounded =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString()

  const [whole, fraction] = rounded.split('.')
  const formattedWhole = new Intl.NumberFormat('vi-VN').format(Number(whole))

  if (fraction) {
    return `${formattedWhole}.${fraction}${suffix}`
  }

  return `${formattedWhole}${suffix}`
}

export default function GioiThieuSoLieu() {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx: ReturnType<typeof gsap.context>

    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const statCards = gsap.utils.toArray<HTMLElement>('[data-gt-stat]', ref.current)

        gsap.fromTo(
          statCards,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 82%',
            },
          }
        )

        statCards.forEach((card) => {
          const valueNode = card.querySelector<HTMLElement>('[data-gt-stat-value]')
          const target = Number(card.dataset.statValue ?? 0)
          const suffix = card.dataset.statSuffix ?? ''
          const decimals = Number(card.dataset.statDecimals ?? 0)

          if (!valueNode) return

          const counter = { value: 0 }

          gsap.to(counter, {
            value: target,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
            onUpdate: () => {
              valueNode.textContent = formatStatValue(counter.value, suffix, decimals)
            },
          })
        })
      }, ref)
    })

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
    }
  }, [])

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-8">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              data-gt-stat
              data-stat-value={stat.value}
              data-stat-suffix={stat.suffix ?? ''}
              data-stat-decimals={stat.decimals ?? 0}
              className={`flex flex-col items-center text-center lg:px-6 ${
                index === STATS.length - 1 && STATS.length % 2 === 1
                  ? 'col-span-2 sm:col-span-1'
                  : ''
              } ${index > 0 ? 'lg:border-l lg:border-[#111]/0' : ''}`}
            >
              <span
                data-gt-stat-value
                className="font-light leading-none tracking-[-0.04em] text-[#111]"
                style={{
                  fontFamily: "'Momo Trust Sans', sans-serif",
                  fontSize: 'clamp(calc(2rem + 4px), calc(4.2vw + 4px), calc(3.6rem + 4px))',
                }}
              >
                {formatStatValue(stat.value, stat.suffix, stat.decimals)}
              </span>
              <span className="mt-3 text-[calc(0.7rem+4px)] sm:text-[calc(0.82rem+4px)] font-semibold tracking-[0.06em] text-[#111]/65 lg:whitespace-nowrap">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
