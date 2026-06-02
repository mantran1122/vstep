'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const SLIDES = [
  { desktop: '/img/1.png', mobile: '/vanbangphapquy/1mobile.png' },
  { desktop: '/img/2.png', mobile: '/vanbangphapquy/2mobile.png' },
  { desktop: '/img/3.png', mobile: '/vanbangphapquy/3mobile.png' },
]
const INTERVAL = 10000

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [leaving, setLeaving] = useState<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)
  const touchStartX = useRef(0)
  const [isTouching, setIsTouching] = useState(false)

  useEffect(() => {
    currentRef.current = current
  }, [current])

  const resetBar = () => {
    const bar = barRef.current
    if (!bar) return
    bar.style.transition = 'none'
    bar.style.width = '0%'
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        bar.style.transition = `width ${INTERVAL}ms linear`
        bar.style.width = '100%'
      })
    )
  }

  const goTo = (idx: number) => {
    const c = currentRef.current
    const next = ((idx % SLIDES.length) + SLIDES.length) % SLIDES.length
    setLeaving(c)
    setTimeout(() => setLeaving(null), 1400)
    setCurrent(next)
    resetBar()
  }

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => goTo(currentRef.current + 1), INTERVAL)
  }

  useEffect(() => {
    startTimer()
    resetBar()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { goTo(currentRef.current + 1); startTimer() }
      if (e.key === 'ArrowLeft')  { goTo(currentRef.current - 1); startTimer() }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      document.removeEventListener('keydown', handleKey)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section
      className="hero"
      onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current) }}
      onMouseLeave={startTimer}
      onTouchStart={(e) => {
        setIsTouching(true)
        touchStartX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        setIsTouching(false)
        const dx = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(dx) > 50) {
          e.preventDefault()
          if (dx < 0) {
            goTo(currentRef.current + 1)
          } else {
            goTo(currentRef.current - 1)
          }
          startTimer()
        }
      }}
    >
      {/* <div className="hero-title-block">
        <div className="eyebrow">
          <div className="eyebrow-line" />
          <span>Trường Đại học Nam Cần Thơ</span>
        </div>
        <h1 className="hero-title">
          Trung tâm<br />
          <em>VSTEP</em>
        </h1>
      </div> */}

      {SLIDES.map((slide, i) => (
        <div
          key={slide.desktop}
          className={`slide${i === current ? ' active' : ''}${i === leaving ? ' prev' : ''}`}
        >
          <Image src={slide.desktop} alt="" fill sizes="(max-width: 1024px) 100vw, 100vw" priority={i === 0} style={{ objectFit: 'cover' }} className="slide-img-desktop" />
          <Image src={slide.mobile} alt="" fill sizes="(max-width: 768px) 100vw, 100vw" priority={i === 0} style={{ objectFit: 'cover' }} className="slide-img-mobile" />
        </div>
      ))}

<div className="slide-counter">
        <div className="counter-current">{String(current + 1).padStart(2, '0')}</div>
        <div className="counter-divider" />
        <div className="counter-total">{String(SLIDES.length).padStart(2, '0')}</div>
      </div>

      <div className="hero-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => { goTo(i); startTimer() }}
          />
        ))}
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>

      <div className="hero-arrows">
        <button className="arrow-btn" onClick={() => { goTo(currentRef.current - 1); startTimer() }}>&#8592;</button>
        <button className="arrow-btn" onClick={() => { goTo(currentRef.current + 1); startTimer() }}>&#8594;</button>
      </div>

      <div className="progress-bar" ref={barRef} />

      {/* Quick access bar */}
      <div className="hero-quick">
        <div className="hero-quick-inner">
        <a href="/tracuu" className="hero-quick-card hero-quick-card--blue">
          <div className="hero-quick-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="14" rx="2"/><line x1="3" y1="20" x2="21" y2="20"/><line x1="8" y1="17" x2="8" y2="20"/><line x1="16" y1="17" x2="16" y2="20"/>
            </svg>
          </div>
          <div className="hero-quick-body">
            <span className="hero-quick-title">Đăng ký thi và ôn</span>
          </div>
          <span className="hero-quick-arrow">
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 1.5 L7 5 L3 8.5"/></svg>
          </span>
        </a>

        <a href="/tracuu" className="hero-quick-card hero-quick-card--teal">
          <div className="hero-quick-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
          </div>
          <div className="hero-quick-body">
            <span className="hero-quick-title">Đăng ký thi thử</span>
          </div>
          <span className="hero-quick-arrow">
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 1.5 L7 5 L3 8.5"/></svg>
          </span>
        </a>

        <a href="tel:02923798789" className="hero-quick-card hero-quick-card--orange">
          <div className="hero-quick-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </div>
          <div className="hero-quick-body">
            <span className="hero-quick-title">02923 798 789</span>
            <span className="hero-quick-sub">0901 012 365</span>
          </div>
          <span className="hero-quick-arrow">
            <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 1.5 L7 5 L3 8.5"/></svg>
          </span>
        </a>
        </div>
      </div>
    </section>
  )
}
