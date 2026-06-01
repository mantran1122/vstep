'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const THI = [
  { date: '18/05/2026', title: 'Thông báo kế hoạch thi tháng 06/2026', isNew: true },
  { date: '10/04/2026', title: 'Thông báo kế hoạch thi tháng 05/2026' },
  { date: '21/03/2026', title: 'Thông báo kế hoạch thi tháng 04/2026' },
  { date: '24/02/2026', title: 'Thông báo kế hoạch thi tháng 03/2026' },
]

const ON = [
  { date: '18/05/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 (06/2026)', isNew: true },
  { date: '10/04/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 (05/2026)' },
  { date: '21/03/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 (04/2026)' },
  { date: '24/02/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 (03/2026)' },
]

const ORANGE = '#F35F2A'
const BLUE   = '#2A6FDB'
const FONT   = "'Inter', sans-serif"

interface Row { date: string; title: string; isNew?: boolean }

function NewsRow({ r, accent }: { r: Row; accent: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="lichthi-row"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '20px 0',
        textDecoration: 'none',
        borderBottom: 'none',
        transition: 'opacity 0.18s ease',
        opacity: hovered ? 0.72 : 1,
        cursor: 'pointer',
      }}
    >
      {/* Date + Badge */}
      <div style={{
        flexShrink: 0,
        width: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
      }}>
        <span style={{
          fontFamily: FONT,
          fontSize: 18,
          fontWeight: 400,
          color: '#9ca3af',
          letterSpacing: '0.04em',
        }}>{r.date}</span>
        {r.isNew && (
          <span style={{
            background: '#E11D2A',
            color: '#fff',
            fontSize: 10,
            fontWeight: 700,
            padding: '2px 7px',
            borderRadius: 999,
            fontFamily: FONT,
            letterSpacing: '0.04em',
            lineHeight: 1.5,
          }}>Mới</span>
        )}
      </div>

      {/* Divider dọc */}
      <div style={{
        width: 1,
        alignSelf: 'stretch',
        background: 'rgba(11, 31, 58, 0.1)',
        flexShrink: 0,
        margin: '4px 0',
      }} />

      {/* Title */}
      <span style={{ flex: 1 }}>
        <span style={{
          fontFamily: FONT,
          fontSize: 20,
          fontWeight: hovered ? 500 : 400,
          lineHeight: 1.55,
          color: hovered ? accent : '#1e293b',
          transition: 'color 0.18s ease, font-weight 0.18s ease',
        }}>{r.title}</span>
      </span>

      {/* Chevron */}
      <svg
        width="14" height="14" viewBox="0 0 14 14" fill="none"
        style={{ flexShrink: 0, opacity: hovered ? 1 : 0.3, transition: 'opacity 0.18s ease' }}
      >
        <path d="M5 3l4 4-4 4" stroke={accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  )
}

function SeeAllButton() {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: FONT,
        fontSize: 18,
        fontWeight: 400,
        color: '#0b1f3a',
        textDecoration: 'none',
        opacity: hovered ? 0.5 : 1,
        transition: 'opacity 0.18s ease',
        cursor: 'pointer',
      }}
    >
      Xem tất cả
    </a>
  )
}

interface CardProps {
  accent: string
  rows: Row[]
}

function NewsCard({ accent, rows }: CardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {rows.map((r, i) => (
        <div
          key={i}
          style={{
            background: '#fff',
            borderRadius: 14,
            padding: '0 28px',
            border: '1px solid rgba(0, 0, 0, 0.4)',
            boxShadow: '0 4px 20px rgba(11, 31, 58, 0.05)',
          }}
        >
          <NewsRow r={r} accent={accent} />
        </div>
      ))}
    </div>
  )
}

export default function LichThiSection() {
  return (
    <section className="relative z-10" style={{ padding: '160px 0 64px' }}>
      <style>{`
        .lichthi-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .lichthi-heading {
          font-size: 64px;
        }
        .lichthi-row {
          height: 120px;
        }
        @media (max-width: 1024px) {
          .lichthi-heading { font-size: clamp(2.5rem, 5vw, 4rem); }
        }
        @media (max-width: 768px) {
          .lichthi-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .lichthi-heading { font-size: clamp(2rem, 8vw, 2.8rem); }
          .lichthi-row { height: auto; min-height: 88px; }
        }
      `}</style>
      <SectionWrapper>
        {/* Section heading */}
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          {/* <h2 style={{
            fontFamily: FONT,
            fontWeight: 400,
            fontSize: 64,
            margin: 0,
            letterSpacing: '-0.02em',
            color: '#0b1f3a',
            lineHeight: 1.1,
          }}>
            Lịch thi – Ôn thi
          </h2> */}
          {/* <p style={{
            fontFamily: FONT,
            fontSize: 17,
            color: '#6b7280',
            margin: '12px 0 0',
            lineHeight: 1.6,
          }}>
            Cập nhật lịch thi và lịch khai giảng lớp ôn thi VSTEP mới nhất.
          </p> */}
        </div>

        {/* 2 cards */}
        <div className="lichthi-grid">
          {/* Cột Lịch thi */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 className="lichthi-heading" style={{
                margin: 0,
                fontFamily: FONT,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: '#0b1f3a',
                lineHeight: 1.25,
                borderLeft: `4px solid ${ORANGE}`,
                paddingLeft: 30,
              }}>Lịch thi</h3>
              <SeeAllButton />
            </div>
            <NewsCard accent={ORANGE} rows={THI} />
          </div>

          {/* Cột Lịch ôn */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 className="lichthi-heading" style={{
                margin: 0,
                fontFamily: FONT,
                fontWeight: 400,
                letterSpacing: '-0.02em',
                color: '#0b1f3a',
                lineHeight: 1.25,
                borderLeft: `4px solid ${BLUE}`,
                paddingLeft: 30,
              }}>Lịch ôn</h3>
              <SeeAllButton />
            </div>
            <NewsCard accent={BLUE} rows={ON} />
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
