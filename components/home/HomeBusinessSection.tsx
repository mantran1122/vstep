'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// ── dữ liệu slide ─────────────────────────────────────────────────────────
const SLIDES = [
  {
    src: '/home/totnghiep.jpg',
    alt: 'Tốt nghiệp',
    title: 'Đáp ứng điều kiện tốt nghiệp',
    desc: 'Chứng chỉ VSTEP B1 trở lên là điều kiện bắt buộc để hoàn thành chương trình đại học tại trường, giúp bạn tốt nghiệp đúng hạn.',
  },
  {
    src: '/home/kienthucchuyenmon.jpg',
    alt: 'Kiến thức chuyên môn',
    title: 'Nâng cao kiến thức chuyên môn',
    desc: 'Năng lực tiếng Anh tốt giúp bạn tiếp cận tài liệu chuyên ngành quốc tế, mở rộng kiến thức vượt ra ngoài giới hạn tài liệu tiếng Việt.',
  },
  {
    src: '/home/vieclam.jpg',
    alt: 'Việc làm',
    title: 'Tăng lợi thế khi ứng tuyển việc làm',
    desc: 'Nhà tuyển dụng đánh giá cao ứng viên có chứng chỉ tiếng Anh chuẩn hóa. VSTEP là minh chứng rõ ràng cho năng lực ngôn ngữ của bạn.',
  },
  {
    src: '/home/Cơ hội học tiếp.jpg',
    alt: 'Cơ hội học tiếp',
    title: 'Mở ra cơ hội học tập tiếp theo',
    desc: 'VSTEP B2, C1 được công nhận khi xét tuyển chương trình thạc sĩ, tiến sĩ và các khóa học nâng cao trong và ngoài nước.',
  },
]

// ── arc carousel (tạm thời vô hiệu) ──────────────────────────────────────
/*
const ITEMS = [
  { src: '/img/lg3.png', alt: 'VSTEP là gì',       title: 'Bài kiểm tra chuẩn hóa năng lực tiếng Anh quốc gia' },
  { src: '/img/lg1.png', alt: 'Khung 6 bậc VSTEP', title: 'Đánh giá từ A1 đến C2 theo chuẩn quốc tế' },
  { src: '/img/lg2.png', alt: '4 kỹ năng VSTEP',   title: 'Nghe - Nói - Đọc - Viết toàn diện' },
]
const ARC_ROW = [...ITEMS, ...ITEMS, ...ITEMS]
const N       = ARC_ROW.length
const TAU     = Math.PI * 2
const HALF_PI = Math.PI
const VIS     = Math.PI * 0.72
const STEP    = TAU / N
const DEPTH   = 80
const AUTO_V  = 0.045
function normAngle(a: number) {
  return ((a + HALF_PI) % TAU + TAU) % TAU - HALF_PI
}
function calcArcItems(rotation: number, archRx: number) {
  return ARC_ROW.map((item, i) => {
    const theta   = normAngle(i * STEP + rotation)
    const phi     = (theta / VIS) * (Math.PI / 2)
    const visible = Math.abs(theta) <= VIS
    const cos     = Math.cos(phi)
    const sin     = Math.sin(phi)
    const x       = sin * archRx
    const y       = -cos * DEPTH
    const scale   = 0.52 + 0.48 * cos
    const opacity = visible ? Math.max(0, Math.pow(Math.abs(cos), 0.5)) : 0
    const z       = Math.round(cos * 100)
    return { item, theta, x, y, scale, opacity, z, visible, index: i }
  })
}
*/

// ── component chính ───────────────────────────────────────────────────────
export default function HomeBusinessSection() {

  /* scroll-linked animations */
  const sectionRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [[0, 0], [1, 0.999]],
  })

  const bgScale   = useTransform(scrollYProgress, [0, 0.45], [shouldReduceMotion ? 1 : 0.07, 1])
  const bgOpacity = useTransform(scrollYProgress, [0, 0.12], [0.4, 1])

  // cross-fade hai ảnh nền: figure05 → business-bg — chỉ sau khi nền chính bung xong (0.45)
  const figureOpacity = useTransform(scrollYProgress, [0.45, 0.55], [1, 0])
  const bgImgOpacity  = useTransform(scrollYProgress, [0.45, 0.55], [0, 1])

  // nền chấm: ẩn lúc đầu, hiện ra ngay sau khi nền bung xong, trước khi chữ xuất hiện
  const noiseOpacity  = useTransform(scrollYProgress, [0.45, 0.50], [0, 1])

  const contentOpacity = useTransform(scrollYProgress, [0.45, 0.53], [0, 1])
  const contentY       = useTransform(scrollYProgress, [0.45, 0.53], [shouldReduceMotion ? 0 : 40, 0])

  const headingOpacity = useTransform(scrollYProgress, [0.5, 0.58], [0, 1])
  const headingBlur    = useTransform(scrollYProgress, [0.5, 0.58], [shouldReduceMotion ? 0 : 10, 0])
  const headingFilter  = useMotionTemplate`blur(${headingBlur}px)`

  const cardGroupOpacity = useTransform(scrollYProgress, [0.58, 0.70], [0, 1])
  const cardGroupY       = useTransform(scrollYProgress, [0.58, 0.70], [shouldReduceMotion ? 0 : 30, 0])

  const ctaOpacity = useTransform(scrollYProgress, [0.70, 0.78], [0, 1])
  const ctaY       = useTransform(scrollYProgress, [0.70, 0.78], [shouldReduceMotion ? 0 : 16, 0])
  const ctaBlur    = useTransform(scrollYProgress, [0.70, 0.78], [shouldReduceMotion ? 0 : 6, 0])
  const ctaFilter  = useMotionTemplate`blur(${ctaBlur}px)`

  /* slide state */
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerW, setContainerW] = useState(0)
  const [visible, setVisible] = useState(4)

  // đo chiều rộng container + cập nhật số thẻ hiện
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else setVisible(4)
    }
    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(e => setContainerW(e[0].contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const GAP    = 20
  const VISIBLE = visible
  const slideW  = containerW ? (containerW - GAP * (VISIBLE - 1)) / VISIBLE : 0
  const trackX  = -(current * (slideW + GAP))

  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES.length) % SLIDES.length), [])

  // auto-play đã tắt

  // ── render ──────────────────────────────────────────────────────────────
  return (
    <div ref={sectionRef} className="home-business-section relative z-[4] h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Background zoom */}
        <motion.div className="absolute inset-0" style={{ scale: bgScale, opacity: bgOpacity }}>
          <motion.div className="absolute inset-0" style={{ background: '#fffdf5', opacity: noiseOpacity }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <pattern id="biz-noise" patternUnits="userSpaceOnUse" width="64" height="64">
                  <rect width="64" height="64" fill="#fffdf5" />
                  <circle cx="10" cy="12" r="1.2" fill="#efe8d5" />
                  <circle cx="26" cy="18" r="1.1" fill="#efe8d5" />
                  <circle cx="14" cy="42" r="1.1" fill="#efe8d5" />
                  <circle cx="36" cy="52" r="1.2" fill="#efe8d5" />
                  <circle cx="58" cy="14" r="1.1" fill="#efe8d5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#biz-noise)" />
            </svg>
          </motion.div>
          {/* figure05 — hiện lúc đang zoom, fade out khi bung xong */}
          <motion.img
            src="/home-intro-figure05.webp"
            alt="" aria-hidden="true"
            className="absolute top-1/2 right-0 -translate-y-1/2 h-[145%] w-[95%]"
            style={{ opacity: figureOpacity }}
          />
          {/* business-bg — fade in khi bung xong */}
          <motion.img
            src="/home-business-bg.webp"
            alt="" aria-hidden="true"
            className="absolute top-1/2 right-0 -translate-y-1/2 h-[145%] w-[96%]"
            style={{ opacity: bgImgOpacity }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6 pt-[10px] pb-[10px] translate-y-8"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <motion.h2
            className="text-center font-normal leading-[1.22] tracking-[-0.06em] text-[#111111] text-[clamp(2rem,5vw,4rem)]"
            style={{ opacity: headingOpacity, filter: headingFilter, fontFamily: "'Inter', sans-serif" }}
          >
            Có chứng chỉ VSTEP, bạn sẽ được gì?
          </motion.h2>

          <motion.p
            className="max-w-2xl text-center text-[clamp(0.88rem,1.3vw,1.15rem)] leading-relaxed text-[#333] px-4"
            style={{ opacity: headingOpacity }}
          >
             Chứng chỉ VSTEP B1, B2, C1 không chỉ giúp bạn hoàn thiện điều kiện học tập và tốt nghiệp,
  mà còn mở rộng cơ hội xét tuyển, nâng chuẩn hồ sơ cá nhân và tạo lợi thế khi ứng tuyển việc làm
  trong môi trường học thuật, nghề nghiệp hiện đại.
          </motion.p>

          {/* ── Image Slider — 3 thẻ hiện cùng lúc ── */}
          <motion.div
            className="w-full max-w-[1440px] mx-auto"
            style={{ opacity: cardGroupOpacity, y: cardGroupY, marginTop: 32 }}
          >
            {/* arrows hai bên + clip */}
            <div className="relative">
              {/* arrow trái */}
              <button onClick={prev} aria-label="Ảnh trước"
                className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#111]/15 bg-white shadow-md hover:bg-gray-50 transition">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 3L5 8l5 5" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {/* arrow phải */}
              <button onClick={next} aria-label="Ảnh sau"
                className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-[#111]/15 bg-white shadow-md hover:bg-gray-50 transition">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3l5 5-5 5" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

            <div ref={containerRef} className="relative w-full overflow-hidden">
              {/* track */}
              <motion.div
                className="flex"
                style={{ gap: GAP }}
                animate={{ x: trackX }}
                transition={{ duration: 0.5, ease: [0.32, 0, 0.67, 0] }}
              >
                {/* lặp đôi để wrap mượt */}
                {[...SLIDES, ...SLIDES].map((slide, i) => (
                  <div
                    key={i}
                    className="group relative shrink-0 rounded-2xl shadow-md overflow-hidden"
                    style={{ width: slideW || `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`, height: VISIBLE === 1 ? 260 : 320 }}
                  >
                    {/* ảnh — cố định, không di chuyển */}
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 768px) 90vw, 400px"
                      className="object-cover"
                      priority={i < 4}
                    />

                    {/* gradient + title — luôn hiển thị ở dưới ảnh */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <p className="absolute bottom-[10px] left-[10px] right-[10px] text-[1rem] font-semibold leading-snug text-white transition-opacity duration-300 group-hover:opacity-0">
                      {slide.title}
                    </p>

                    {/* description panel — trượt lên từ dưới khi hover */}
                    <div
                      className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0 bg-white/95"
                      style={{ padding: '10px 14px' }}
                    >
                      {/* <p style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111', marginBottom: 4 }}>{slide.title}</p> */}
                      <p style={{ fontSize: '0.86rem', lineHeight: 1.55, color: '#111' }}>{slide.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>{/* đóng overflow-hidden */}
            </div>{/* đóng relative */}

            {/* dots giữa */}
            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 10, padding: '8px 0' }}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ảnh ${i + 1}`}
                  style={{
                    height: 6,
                    borderRadius: 999,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    width: i === current ? 24 : 6,
                    background: i === current ? '#111' : 'rgba(17,17,17,0.25)',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div style={{ opacity: ctaOpacity, y: ctaY, filter: ctaFilter }}>
            <Link
              href="/vstep"
              className="group inline-flex self-start border-b-2 border-[#111111] pb-0.5 text-[13px] font-bold text-[#111111] transition-all duration-200 hover:gap-4"
            >
              {/* <span className="flex items-center gap-2">
                Tìm hiểu thêm
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span> */}
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
