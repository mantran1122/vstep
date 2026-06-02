'use client'

import SectionWrapper from '@/components/ui/SectionWrapper'

const FONT = "'Momo Trust Sans', sans-serif"
const HEADING_FONT = "'Inter', sans-serif"

const CARDS = [
  {
    index: 1,
    tag: '',
    date: '09/01/2026',
    year: '2026',
    title: 'Kế hoạch ôn đánh giá năng lực Ngoại ngữ 6 Bậc năm 2026',
    category: 'Đánh giá năng lực · ĐHNCTU',
    image: '/img/ke-hoach-nam2.png',
    href: '#',
  },
  {
    index: 2,
    tag: '',
    date: '22/12/2025',
    year: '2026',
    title: 'Kế hoạch thi VSTEP năm 2026',
    category: 'Chứng chỉ VSTEP · Bậc 1–6',
    image: '/img/ke-hoach-nam2.png',
    href: '#',
  },
  {
    index: 3,
    tag: '',
    date: '17/01/2025',
    year: '2025',
    title: 'Kế hoạch ôn đánh giá năng lực Ngoại ngữ 6 Bậc năm 2025',
    category: 'Đánh giá năng lực · ĐHNCTU',
    image: '/img/ke-hoach-nam2.png',
    href: '#',
  },
  {
    index: 4,
    tag: '',
    date: '20/12/2024',
    year: '2025',
    title: 'Kế hoạch thi VSTEP năm 2025',
    category: 'Chứng chỉ VSTEP · Bậc 1–6',
    image: '/img/ke-hoach-nam2.png',
    href: '#',
  },
]

function Card({ card, index }: { card: typeof CARDS[0]; index: number }) {
  return (
    <a
      href={card.href}
      className="kehoach-card"
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        animationDelay: `${0.08 + index * 0.1}s`,
        background: '#ffffff',
        borderRadius: 28,
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.5s, transform 0.5s',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Ảnh 4:5 */}
      <div className="kehoach-media" style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden' }}>
        <img
          src={card.image}
          alt={card.title}
          className="kehoach-img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 1.2s ease',
          }}
        />
        {/* gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 50%, transparent 100%)',
        }} />

        {/* Số thứ tự */}
        <span style={{
          position: 'absolute', left: 20, top: 16,
          fontFamily: FONT,
          fontSize: 48,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.9)',
          lineHeight: 1,
          textShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}>
          {/* {card.index} */}
        </span>

        {/* Tag badge */}
        <span style={{
          position: 'absolute', right: 20, top: 20,
          background: 'rgba(255,255,255,0.9)',
          color: '#111',
          fontSize: 11,
          fontFamily: FONT,
          fontWeight: 600,
          letterSpacing: '0.04em',
          padding: '4px 12px',
          borderRadius: 9999,
        }}>
          {card.tag}
        </span>

        {/* Overlay dưới: ngày + năm */}
        <div style={{ position: 'absolute', bottom: 16, left: 20, right: 20 }}>
          <p style={{
            fontFamily: FONT,
            fontSize: 11,
            letterSpacing: '0.25em',
            color: 'rgba(255,255,255,0.7)',
            margin: 0,
          }}>
            
          </p>
          <p style={{
            fontFamily: FONT,
            fontSize: 24,
            fontWeight: 700,
            color: '#fff',
            margin: '2px 0 0',
          }}>
          {card.year}
          </p>
        </div>
      </div>

      {/* Nội dung */}
      <div className="kehoach-content" style={{ padding: '20px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span className="kehoach-date" style={{
          fontFamily: FONT,
          fontSize: 16,
          letterSpacing: '0.02em',
          color: '#111',
        }}>
          {card.date}
        </span>

        <p className="kehoach-title" style={{
          margin: '12px 0 0',
          fontFamily: FONT,
          fontSize: 18,
          fontWeight: 500,
          lineHeight: '1.55',
          color: '#111',
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          "{card.title}"
        </p>

        <div className="kehoach-footer" style={{
          marginTop: 24,
          paddingTop: 16,
          borderTop: '1px solid rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span className="kehoach-category" style={{
            fontFamily: FONT,
            fontSize: 15,
            color: 'rgba(0,0,0,0.45)',
            transition: 'color 0.3s',
          }}>
            {card.category}
          </span>
          <span className="kehoach-arrow" style={{
            width: 36, height: 36,
            display: 'grid', placeItems: 'center',
            borderRadius: '50%',
            background: '#fff',
            color: '#111',
            fontSize: 16,
            transition: 'background 0.3s, color 0.3s, transform 0.3s',
          }}>
            →
          </span>
        </div>
      </div>
    </a>
  )
}

export default function KeHoachNamSection() {
  return (
    <section className="relative z-10" style={{ padding: '96px 0 96px' }}>
      <style>{`
        @keyframes kehoach-rise {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .kehoach-card {
          opacity: 0;
          animation: kehoach-rise 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .kehoach-card:hover {
          box-shadow: 0 30px 60px rgba(0,0,0,0.4) !important;
          transform: translateY(-8px) !important;
        }
        .kehoach-card:hover .kehoach-img {
          transform: scale(1.05) !important;
        }
        .kehoach-card:hover .kehoach-arrow {
          background: #c84b4b !important;
          color: #fff !important;
          transform: translateX(2px) !important;
        }
        .kehoach-card:hover .kehoach-category {
          color: rgba(0,0,0,0.85) !important;
        }
      `}</style>

      <SectionWrapper>
        {/* Header — bố cục MembersSection */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 48, gap: 0 }}>
          <h2 style={{
            fontFamily: HEADING_FONT,
            fontSize: 'clamp(2.4rem,5vw,4rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: '#111',
            margin: '12px 0 0',
            lineHeight: 1.1,
          }}>
            Kế hoạch năm
          </h2>

        </div>

        {/* Grid 4 card */}
        <div className="kehoach-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}>
          {CARDS.map((card, i) => (
            <Card key={card.index} card={card} index={i} />
          ))}
        </div>

        {/* Xem tất cả */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <a
            href="/thongtin/ke-hoach-nam"
            className="kehoach-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: HEADING_FONT,
              fontSize: 13,
              fontWeight: 600,
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              border: 'none',
              borderRadius: 9999,
              padding: '10px 28px',
              background: '#FF282E',
              transition: 'filter 0.5s ease, transform 0.5s ease',
            }}
          >
            Xem tất cả
            <svg className="kehoach-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transition: 'transform 0.25s ease' }}>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </SectionWrapper>

      <style>{`
        @media (max-width: 1100px) {
          .kehoach-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .kehoach-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .kehoach-card {
            flex-direction: row !important;
            border-radius: 16px !important;
            box-shadow: 0 4px 14px rgba(0,0,0,0.06) !important;
          }
          .kehoach-media {
            aspect-ratio: auto !important;
            width: 40% !important;
            flex-shrink: 0 !important;
            min-height: 100%;
          }
          .kehoach-content {
            padding: 12px 14px 14px !important;
            flex: 1 !important;
            min-width: 0 !important;
          }
          .kehoach-title {
            font-size: 14px !important;
            line-height: 1.4 !important;
            margin: 6px 0 0 !important;
            -webkit-line-clamp: 3 !important;
          }
          .kehoach-footer {
            margin-top: 10px !important;
            padding-top: 8px !important;
          }
          .kehoach-category {
            font-size: 11px !important;
          }
          .kehoach-arrow {
            width: 28px !important;
            height: 28px !important;
            font-size: 13px !important;
            flex-shrink: 0;
          }
          .kehoach-date {
            font-size: 12px !important;
            letter-spacing: 0.06em !important;
            color: rgba(0,0,0,0.55) !important;
          }
        }
        .kehoach-cta:hover {
          filter: brightness(0.93);
          transform: scale(1.01);
        }
        .kehoach-cta:hover .kehoach-cta-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  )
}
