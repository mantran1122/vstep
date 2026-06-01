'use client'

import { useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const FONT = "'Inter', sans-serif"

export interface NewsRow {
  date: string
  title: string
  tag?: string
  href?: string
  isNew?: boolean
}

interface Props {
  heading: string
  subheading?: string
  rows: NewsRow[]
  accent?: string
  pageSize?: number
}

function Row({ r, accent }: { r: NewsRow; accent: string }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={r.href ?? '#'}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        padding: '36px 42px',
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.12)',
        borderRadius: 8,
        textDecoration: 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
        boxShadow: hovered ? '0 8px 24px rgba(11,31,58,0.08)' : '0 2px 8px rgba(11,31,58,0.03)',
        transform: hovered ? 'translateY(-2px)' : 'none',
        borderColor: hovered ? accent : 'rgba(0,0,0,0.12)',
      }}
    >
      {/* Date + badge */}
      <div style={{
        flexShrink: 0,
        width: 165,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
      }}>
        <span style={{
          fontFamily: FONT,
          fontSize: 24,
          fontWeight: 500,
          color: '#0b1f3a',
          letterSpacing: '0.02em',
        }}>{r.date}</span>
        {r.tag && (
          <span style={{
            background: '#E11D2A',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            padding: '6px 18px',
            borderRadius: 9999,
            fontFamily: FONT,
            letterSpacing: '0.04em',
            lineHeight: 1.5,
          }}>{r.tag}</span>
        )}
      </div>

      {/* Divider dọc */}
      <div style={{
        width: 1,
        alignSelf: 'stretch',
        background: 'rgba(11,31,58,0.12)',
        flexShrink: 0,
      }} />

      {/* Title */}
      <span style={{
        flex: 1,
        fontFamily: FONT,
        fontSize: 22,
        fontWeight: 500,
        lineHeight: 1.5,
        color: hovered ? accent : '#0b1f3a',
        transition: 'color 0.2s ease',
      }}>{r.title}</span>

      {/* Arrow */}
      <span style={{
        flexShrink: 0,
        width: 16,
        height: 16,
        background: accent,
        borderRadius: 9999,
        transition: 'transform 0.2s ease',
        transform: hovered ? 'translateX(6px)' : 'none',
      }} />
    </a>
  )
}

export default function ThongTinNewsList({
  heading,
  subheading,
  rows,
  accent = '#2A6FDB',
  pageSize = 4,
}: Props) {
  const [page, setPage] = useState(1)
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize))
  const start = (page - 1) * pageSize
  const visibleRows = rows.slice(start, start + pageSize)

  return (
    <section className="relative z-10" style={{ padding: '120px 0 24px' }}>
      <style>{`
        .news-grid {
          display: grid;
          grid-template-columns: 1fr 2.4fr;
          gap: 64px;
          align-items: start;
        }
        .news-left { position: sticky; top: 120px; padding-top: 24px; }
        @media (max-width: 900px) {
          .news-grid { grid-template-columns: 1fr; gap: 32px; }
          .news-left { position: static; }
        }
      `}</style>
      <SectionWrapper>
        <div className="news-grid">
          {/* Cột trái */}
          <div className="news-left">
            <h2 style={{
              margin: 0,
              fontFamily: FONT,
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#0b1f3a',
              lineHeight: 1,
            }}>{heading}</h2>
            {subheading && (
              <p style={{
                margin: '14px 0 0',
                fontFamily: FONT,
                fontSize: 16,
                color: accent,
                letterSpacing: '0.04em',
              }}>{subheading}</p>
            )}

            {/* Pagination tabs */}
            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Trang trước"
                className="news-page-nav"
                style={{
                  width: 44, height: 44,
                  display: 'grid', placeItems: 'center',
                  border: `1.5px solid ${accent}`,
                  borderRadius: 9999,
                  background: 'transparent',
                  color: accent,
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  opacity: page === 1 ? 0.35 : 1,
                  fontFamily: FONT,
                  fontSize: 18,
                  fontWeight: 500,
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >‹</button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1
                const active = n === page
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    aria-current={active ? 'page' : undefined}
                    className="news-page-btn"
                    style={{
                      width: 44, height: 44,
                      display: 'grid', placeItems: 'center',
                      border: `1.5px solid ${accent}`,
                      borderRadius: 4,
                      background: active ? accent : 'transparent',
                      color: active ? '#fff' : accent,
                      cursor: 'pointer',
                      fontFamily: FONT,
                      fontSize: 16,
                      fontWeight: 600,
                      transition: 'background 0.2s ease, color 0.2s ease',
                    }}
                  >{n}</button>
                )
              })}

              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Trang sau"
                className="news-page-nav"
                style={{
                  width: 44, height: 44,
                  display: 'grid', placeItems: 'center',
                  border: `1.5px solid ${accent}`,
                  borderRadius: 9999,
                  background: 'transparent',
                  color: accent,
                  cursor: page === totalPages ? 'not-allowed' : 'pointer',
                  opacity: page === totalPages ? 0.35 : 1,
                  fontFamily: FONT,
                  fontSize: 18,
                  fontWeight: 500,
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >›</button>
            </div>
            <style>{`
              .news-page-btn:hover:not([aria-current="page"]),
              .news-page-nav:hover:not(:disabled) {
                background: ${accent} !important;
                color: #fff !important;
              }
            `}</style>
          </div>

          {/* Cột phải */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {visibleRows.map((r, i) => (
              <Row key={start + i} r={r} accent={accent} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
