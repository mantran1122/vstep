'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from '@/components/home/HeroSection'

export default function HomeHeroIntro() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let ctx: ReturnType<typeof gsap.context>
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          '[data-home-circle]',
          { scale: 0.025 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '[data-home-intro]',
              start: 'top bottom',
              end: '10% center',
              scrub: 1,
            },
          }
        )

        ScrollTrigger.create({
          trigger: '[data-home-intro]',
          start: 'top top',
          end: '+=200%',
          pin: '.home-intro-sticky-height',
          pinSpacing: false,
        })

      }, wrapRef)
    })

    return () => {
      cancelAnimationFrame(raf)
      ctx?.revert()
    }
  }, [])

  return (
    <div ref={wrapRef}>
      <div className="home-hero-fixed">
        <HeroSection />
      </div>

      <div className="home-scroll-body">
        <div data-home-intro className="home-intro-body">
          <div className="home-intro-circle-wrap" aria-hidden="true">
            <svg
              data-home-circle
              className="home-intro-circle"
              viewBox="0 0 4000 4000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="intro-noise"
                  patternUnits="userSpaceOnUse"
                  width="64"
                  height="64"
                >
                  <rect width="64" height="64" fill="#fffdf5" />
                  <circle cx="10" cy="12" r="1.2" fill="#efe8d5" />
                  <circle cx="26" cy="18" r="1.1" fill="#efe8d5" />
                  <circle cx="46" cy="32" r="1.3" fill="#efe8d5" />
                  <circle cx="14" cy="42" r="1.1" fill="#efe8d5" />
                  <circle cx="36" cy="52" r="1.2" fill="#efe8d5" />
                  <circle cx="58" cy="14" r="1.1" fill="#efe8d5" />
                </pattern>
              </defs>
              <circle cx="2000" cy="2000" r="2000" fill="#fffdf5" />
              <circle cx="2000" cy="2000" r="2000" fill="url(#intro-noise)" />
            </svg>
          </div>

          <div className="home-intro-content">
            <div className="home-intro-sticky-item">
              <div className="home-intro-sticky-height">
                <div className="home-intro-txt-wrap">
                  <Image
                    src="/img/v1.png"
                    alt=""
                    aria-hidden="true"
                    width={185}
                    height={104}
                    className="home-intro-deco home-intro-deco-1"
                  />
                  <Image
                    src="/img/v3.png"
                    alt=""
                    aria-hidden="true"
                    width={185}
                    height={104}
                    className="home-intro-deco home-intro-deco-2"
                  />
                  <hgroup>
                    <h2 className="home-intro-title">
                      Chứng chỉ VSTEP là gì?
                    </h2>
                  </hgroup>
                  <div className="home-intro-copy">
                    <p className="home-intro-line">
                      VSTEP là viết tắt của cụm từ tiếng Anh{' '}
                      <strong>&ldquo;Vietnamese Standardized Test of English Proficiency&rdquo;</strong>
                    </p>
                    <p className="home-intro-line">
                      nghĩa là &ldquo;Kỳ thi đánh giá năng lực tiếng Anh theo Khung năng lực ngoại ngữ (NLNN) 6 bậc dành cho Việt Nam&rdquo;
                    </p>
                    <p className="home-intro-line">
                      Từ bậc 1 đến bậc 6, tương đương với các trình độ quốc tế:{' '}
                      <strong>A1, A2, B1, B2, C1, C2</strong>.
                    </p>
                  </div>
                  <Link href="/gioithieu" className="home-intro-cta">
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
