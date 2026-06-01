'use client'

import { useLayoutEffect, useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/* ------------------------------------------------------------------ */
/*  DỮ LIỆU                                                            */
/* ------------------------------------------------------------------ */
type Skill = {
  id: string
  icon: string
  title: string
  meta: string
  spec: [string, string][]
  parts: [string, string][]
  desc: string
}

const SKILLS: Skill[] = [
  {
    id: '01', icon: 'bi-headphones', title: 'Kỹ năng nghe hiểu', meta: '40 phút · 35 câu hỏi · 3 phần',
    spec: [['Thời gian', '40 phút'], ['Số câu hỏi', '35 câu'], ['Dạng bài', 'Trắc nghiệm (MCQ)']],
    parts: [
      ['Phần 1', 'Đoạn trao đổi / thông báo ngắn'],
      ['Phần 2', 'Hướng dẫn, hội thoại'],
      ['Phần 3', 'Bài giảng, bài nói chuyện'],
    ],
    desc: 'Thí sinh nghe các đoạn ghi âm rồi chọn đáp án đúng cho câu hỏi trắc nghiệm đã in sẵn trong đề thi.',
  },
  {
    id: '02', icon: 'bi-book-fill', title: 'Kỹ năng đọc hiểu', meta: '60 phút · 4 bài đọc · 40 câu hỏi',
    spec: [['Thời gian', '60 phút'], ['Bài đọc', '4 bài · 40 câu'], ['Độ dài', '1.700 – 2.050 từ'], ['Cấp độ', 'Bậc 3 – 5']],
    parts: [
      ['Kỹ năng 1', 'Hiểu ý chính & chi tiết'],
      ['Kỹ năng 2', 'Hiểu ý kiến, thái độ tác giả'],
      ['Kỹ năng 3', 'Đoán nghĩa từ trong ngữ cảnh'],
    ],
    desc: 'Đọc cả 4 đoạn văn và trả lời câu hỏi sau mỗi bài, kiểm tra nhiều kỹ năng đọc khác nhau từ bậc 3 đến bậc 5.',
  },
  {
    id: '03', icon: 'bi-pencil-fill', title: 'Kỹ năng viết', meta: '60 phút · 2 bài · Thư + Luận',
    spec: [['Thời gian', '60 phút'], ['Số bài', '2 bài viết'], ['Hình thức', 'Thư + Luận']],
    parts: [
      ['Bài 1', 'Thư / email ~120 từ · 1/3 điểm'],
      ['Bài 2', 'Bài luận ~250 từ · 2/3 điểm'],
    ],
    desc: 'Bài 2 yêu cầu thí sinh dùng kiến thức và trải nghiệm thực tế để đưa ra lập luận và bảo vệ ý kiến của mình.',
  },
  {
    id: '04', icon: 'bi-mic-fill', title: 'Kỹ năng nói', meta: '~15 phút · 3 phần · Thi trực tiếp',
    spec: [['Thời gian', '~15 phút'], ['Hình thức', 'Thi trực tiếp'], ['Số phần', '3 phần']],
    parts: [
      ['Phần 1', 'Social Interaction — phản hồi tình huống'],
      ['Phần 2', 'Solution Discussion — chọn & bảo vệ giải pháp'],
      ['Phần 3', 'Topic Development — phát triển chủ đề'],
    ],
    desc: 'Thí sinh đối thoại trực tiếp với giám khảo qua 3 phần, kết thúc bằng một số câu hỏi thảo luận mở rộng.',
  },
]

/* trạng thái "bay" của panel — đổi 4 dòng này là đổi kiểu bay */
const DRIFT_FROM = { y: 58, scale: 0.9, opacity: 0, filter: 'blur(16px)', rotationZ: -3 }
const DRIFT_TO   = { y: -24, scale: 1.02, opacity: 1, filter: 'blur(0px)', rotationZ: 0 }

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                          */
/* ------------------------------------------------------------------ */
export default function GioiThieuLoiIch() {
  const rootRef  = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const scrimRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [pos, setPos] = useState<{ left: number; top: number; width: number }>({ left: 0, top: 0, width: 0 })
  const closing = useRef(false)

  /* ---------- ENTRY: blur-in + counter ---------- */
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx: ReturnType<typeof gsap.context>
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-skill-card]', rootRef.current!)
        const tl = gsap.timeline({ scrollTrigger: { trigger: rootRef.current, start: 'top 82%' } })

        tl.fromTo(cards,
          { opacity: 0, y: 24, filter: 'blur(12px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', stagger: 0.12 })

        cards.forEach((c, i) => {
          const numEl = c.querySelector('[data-num]') as HTMLElement
          const o = { v: 0 }
          tl.fromTo(o, { v: 0 }, {
            v: i + 1, duration: 0.8, ease: 'power1.out', snap: { v: 1 },
            onUpdate: () => { numEl.textContent = String(Math.round(o.v)).padStart(2, '0') },
          }, i * 0.12)
        })
      }, rootRef)
    })
    return () => { cancelAnimationFrame(raf); ctx?.revert() }
  }, [])

  /* ---------- MỞ: tính vị trí rồi render panel ---------- */
  const openDetail = (i: number) => {
    if (openIdx !== null) return
    const card = cardRefs.current[i]
    const stage = stageRef.current
    if (!card || !stage) return
    const width = Math.max(308, card.offsetWidth + 36)
    let left = card.offsetLeft + card.offsetWidth / 2 - width / 2
    left = Math.max(12, Math.min(left, stage.clientWidth - width - 12))
    setPos({ left, top: card.offsetTop, width })
    setOpenIdx(i)
  }

  /* ---------- BAY RA (Drift) khi panel vừa mount ---------- */
  useLayoutEffect(() => {
    if (openIdx === null) return
    const panel = panelRef.current
    const scrim = scrimRef.current
    const stage = stageRef.current
    const card = cardRefs.current[openIdx]
    if (!panel || !scrim || !stage || !card) return

    // chống tràn đáy stage
    const top = Math.min(card.offsetTop, Math.max(12, stage.clientHeight - panel.offsetHeight - 16))
    gsap.set(panel, { top })

    gsap.fromTo(scrim, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: 'power1.out' })
    gsap.fromTo(panel, DRIFT_FROM, { ...DRIFT_TO, duration: 0.82, ease: 'power2.out', clearProps: 'filter' })
    gsap.fromTo(panel.querySelectorAll('[data-item]'),
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', stagger: 0.05, delay: 0.4 })
  }, [openIdx])

  /* ---------- BAY VỀ chỗ cũ rồi unmount ---------- */
  const closeDetail = useCallback(() => {
    const panel = panelRef.current
    const scrim = scrimRef.current
    if (!panel || closing.current) return
    closing.current = true
    gsap.to(scrim, { opacity: 0, duration: 0.3, ease: 'power1.in' })
    gsap.to(panel, {
      ...DRIFT_FROM, duration: 0.66, ease: 'power2.in',
      onComplete: () => { closing.current = false; setOpenIdx(null) },
    })
  }, [])

  /* ---------- đóng bằng phím Esc ---------- */
  useEffect(() => {
    if (openIdx === null) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeDetail() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIdx, closeDetail])

  const active = openIdx !== null ? SKILLS[openIdx] : null

  /* ------------------------------------------------------------------ */
  return (
    <section ref={rootRef} className="gtl">
      <div className="gtl-wrap">
        <header className="gtl-head">
          <h2 className="gtl-title">Hình thức bài thi VSTEP bậc 3 – 5</h2>
        </header>

        <div ref={stageRef} className="gtl-stage">
          <div className="vrow">
            {SKILLS.map((s, i) => {
              const last = i === SKILLS.length - 1
              return (
                <article
                  key={s.id}
                  data-skill-card
                  ref={el => { cardRefs.current[i] = el }}
                  onClick={() => openDetail(i)}
                  className="vcard"
                  style={{ borderRadius: last ? '1rem' : '1rem 0 0 1rem', zIndex: i + 1 }}
                >
                  <div className="vcard-inner">
                    <span data-num className="vcard-num">{s.id}</span>
                    <div className="vcard-icon"><i className={`bi ${s.icon}`} /></div>
                    <h3 className="vcard-tt">{s.title}</h3>
                    <div className="vcard-foot">
                      <span className="vcard-detail">Chi tiết</span>
                      <i className="bi bi-plus-lg vcard-plus" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* PANEL BAY RA */}
          {active && (
            <>
              <div ref={scrimRef} className="fly-scrim" onClick={closeDetail} />
              <div ref={panelRef} className="fly-panel" style={{ left: pos.left, top: pos.top, width: pos.width }}>
                <div className="fly-head">
                  <div className="fly-ic"><i className={`bi ${active.icon}`} /></div>
                  <div className="fly-tt">
                    <h4>{active.title}</h4>
                    <span>{active.meta}</span>
                  </div>
                  <button className="fly-x" aria-label="Đóng" onClick={closeDetail}>
                    <i className="bi bi-x-lg" />
                  </button>
                </div>

                <div className="fly-body">
                  <div className="spec">
                    {active.spec.map(([k, v]) => (
                      <div data-item key={k} className="spec-row">
                        <span className="k">{k}</span><span className="dot" /><span className="v">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="parts">
                    <p data-item className="parts-label">Cấu trúc</p>
                    <ul>
                      {active.parts.map(([k, v]) => (
                        <li data-item key={k}>
                          <span className="pt">{k}</span><span className="pd">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p data-item className="desc">{active.desc}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ----------------------------------------------------------------
          STYLE  (styled-jsx). Cần Bootstrap Icons đã được import global,
          ví dụ trong layout:  import 'bootstrap-icons/font/bootstrap-icons.css'
      ----------------------------------------------------------------- */}
      <style jsx>{`
        .gtl {
          --accent: #c8a84b;
          --accent-soft: rgba(200,168,75,.10);
          --accent-line: rgba(200,168,75,.18);
          --border: #c8bfb0;
          --divider: #ede8e0;
          --ink: #111;
          --sans: 'Momo Trust Sans', system-ui, sans-serif;
          --mono: ui-monospace, 'JetBrains Mono', monospace;
          padding: 80px 0;
          font-family: var(--sans);
        }
        .gtl-wrap { max-width: 1440px; margin: 0 auto; padding: 0 24px; }
        .gtl-head { margin-bottom: 40px; }
        .gtl-title {
          font-weight: 300; letter-spacing: -.03em; line-height: 1.14; color: var(--ink);
          font-size: clamp(1.85rem, 2.6vw, 2.6rem); margin: 0;
        }

        .gtl-stage { position: relative; }
        .vrow { display: flex; align-items: flex-start; }

        .vcard {
          flex: 1; min-width: 0; background: #fff; border: 1px solid var(--border);
          box-shadow: 0 2px 12px rgba(0,0,0,.07); position: relative; overflow: hidden;
          margin-left: -12px; cursor: pointer;
          transition: background .3s ease, box-shadow .3s ease;
        }
        .vcard:first-child { margin-left: 0; }
        .vcard:hover { box-shadow: 0 18px 36px -18px rgba(80,60,20,.4); }
        .vcard:hover :global(.vcard-icon) { background: rgba(200,168,75,.2); }

        /* vệt sáng quét chéo khi hover */
        .vcard::before {
          content: ''; position: absolute; inset: 0; z-index: 5; pointer-events: none;
          background: linear-gradient(115deg, transparent 32%, rgba(200,168,75,.22) 50%, transparent 68%);
          transform: translateX(-130%); transition: transform .85s ease;
        }
        .vcard:hover::before { transform: translateX(130%); }

        .vcard-inner {
          display: flex; flex-direction: column; padding: 30px 26px;
          min-height: 336px; height: 100%; position: relative; z-index: 6;
        }
        .vcard-num {
          font-family: var(--mono); font-size: .72rem; font-weight: 600; letter-spacing: .2em;
          text-transform: uppercase; color: var(--accent); margin-bottom: 22px; line-height: 1;
        }
        .vcard-icon {
          width: 56px; height: 56px; border-radius: 16px; display: flex; align-items: center;
          justify-content: center; background: var(--accent-soft); border: 1px solid var(--accent-line);
          margin-bottom: 22px; transition: background .3s ease;
        }
        .vcard-icon i { font-size: 1.5rem; color: var(--accent); }
        .vcard-tt { font-size: 1.08rem; font-weight: 500; color: var(--ink); margin: 0 0 8px; line-height: 1.32; }
        .vcard-foot {
          margin-top: auto; padding-top: 20px; border-top: 1px solid var(--divider);
          display: flex; align-items: center; justify-content: space-between;
        }
        .vcard-detail { font-family: var(--mono); font-size: .68rem; letter-spacing: .08em; text-transform: uppercase; color: #c2bbac; }
        .vcard-plus { font-size: .95rem; color: #c2bbac; transition: color .3s ease; }
        .vcard:hover .vcard-plus { color: var(--accent); }

        /* ----- panel bay ra ----- */
        .fly-scrim {
          position: absolute; inset: 0; z-index: 100; cursor: pointer; border-radius: 16px;
          background: rgba(34,27,12,.34); backdrop-filter: blur(1.5px); -webkit-backdrop-filter: blur(1.5px);
        }
        .fly-panel {
          position: absolute; z-index: 101; background: #fff; border: 1px solid var(--border);
          border-radius: 18px; padding: 22px 22px 24px; will-change: transform, opacity; backface-visibility: hidden;
          box-shadow: 0 44px 90px -34px rgba(60,45,15,.62), 0 14px 32px -14px rgba(0,0,0,.28);
        }
        .fly-head { display: flex; align-items: center; gap: 13px; padding-bottom: 16px; border-bottom: 1px solid var(--divider); margin-bottom: 16px; }
        .fly-ic {
          width: 46px; height: 46px; flex-shrink: 0; border-radius: 13px; display: flex; align-items: center;
          justify-content: center; background: var(--accent-soft); border: 1px solid var(--accent-line);
        }
        .fly-ic i { font-size: 1.25rem; color: var(--accent); }
        .fly-tt { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
        .fly-tt h4 { margin: 0; font-size: 1.02rem; font-weight: 600; color: var(--ink); line-height: 1.2; }
        .fly-tt span { font-family: var(--mono); font-size: .66rem; color: #a89f8d; }
        .fly-x {
          margin-left: auto; flex-shrink: 0; width: 32px; height: 32px; border-radius: 9px;
          border: 1px solid #e6dfd0; background: #faf7f1; color: #9a9183; cursor: pointer;
          display: flex; align-items: center; justify-content: center; transition: all .2s ease;
        }
        .fly-x:hover { border-color: var(--accent); color: var(--accent); background: #fff; }
        .fly-x i { font-size: .8rem; }

        .spec { display: flex; flex-direction: column; gap: 9px; margin-bottom: 16px; }
        .spec-row { display: flex; align-items: baseline; gap: 8px; font-size: .78rem; }
        .spec-row .k { color: #9a9183; white-space: nowrap; }
        .spec-row .dot { flex: 1; border-bottom: 1px dotted #d9cfbc; transform: translateY(-2px); min-width: 10px; }
        .spec-row .v { color: #2c2820; font-weight: 500; white-space: nowrap; font-family: var(--mono); font-size: .74rem; }

        .parts { margin-bottom: 15px; }
        .parts-label { font-family: var(--mono); font-size: .64rem; letter-spacing: .16em; text-transform: uppercase; color: var(--accent); margin: 0 0 9px; }
        .parts ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .parts li { position: relative; padding-left: 16px; display: flex; flex-direction: column; gap: 1px; }
        .parts li::before { content: ''; position: absolute; left: 0; top: 6px; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
        .parts .pt { font-size: .74rem; font-weight: 600; color: #3a352c; }
        .parts .pd { font-size: .76rem; line-height: 1.5; color: #6a6256; }
        .desc { font-size: .8rem; line-height: 1.68; color: #6a6256; margin: 0; padding-top: 14px; border-top: 1px solid #f0e9dc; }

        @media (max-width: 920px) {
          .vrow { flex-direction: column; }
          .vcard { margin-left: 0; border-radius: 1rem !important; width: 100%; }
          .vcard-inner { min-height: 0; }
        }
      `}</style>
    </section>
  )
}
