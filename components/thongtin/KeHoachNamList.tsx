'use client'

import { useMemo, useState } from 'react'
import SectionWrapper from '@/components/ui/SectionWrapper'

const FONT = "'Momo Trust Sans', sans-serif"

export interface KeHoachItem {
  date: string // YYYY.MM.DD
  year: string
  category: string
  title: string
  image: string
  href: string
}

interface Props {
  heading?: string
  items: KeHoachItem[]
  pageSize?: number
}

const ALL = 'Tất cả'

export default function KeHoachNamList({ heading = 'Thông báo', items, pageSize = 6 }: Props) {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(items.map((i) => i.category)))],
    [items],
  )
  const years = useMemo(
    () => [ALL, ...Array.from(new Set(items.map((i) => i.year))).sort((a, b) => Number(b) - Number(a))],
    [items],
  )

  const [cat, setCat] = useState<string>(ALL)
  const [year, setYear] = useState<string>(ALL)
  const [page, setPage] = useState(1)

  const filtered = useMemo(
    () =>
      items.filter(
        (it) => (cat === ALL || it.category === cat) && (year === ALL || it.year === year),
      ),
    [items, cat, year],
  )

  const shown = page * pageSize
  const visible = filtered.slice(0, shown)
  const hasMore = filtered.length > shown

  return (
    <section style={{ padding: 'clamp(40px, 6vw, 80px) 0 24px', background: 'transparent' }}>
      <SectionWrapper>
        <header style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontFamily: FONT,
              fontSize: 'clamp(2.4rem, 5vw, 4rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#111',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {heading}
          </h2>
        </header>

        <div className="khn-layout">
          <aside className="khn-sidebar">
            <div className="khn-sidebar-inner">
              <div className="khn-side-group">
                <ul className="khn-side-list">
                  {categories.map((c) => (
                    <li key={c}>
                      <button
                        type="button"
                        className={`khn-side-btn ${cat === c ? 'is-active' : ''}`}
                        onClick={() => { setCat(c); setPage(1) }}
                      >
                        {c === ALL ? 'Tất cả' : c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="khn-side-group">
                <h3 className="khn-side-title">Năm</h3>
                <ul className="khn-side-list">
                  {years.map((y) => (
                    <li key={y}>
                      <button
                        type="button"
                        className={`khn-side-btn ${year === y ? 'is-active' : ''}`}
                        onClick={() => { setYear(y); setPage(1) }}
                      >
                        {y === ALL ? 'Tất cả' : y}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="khn-main">
        <ul className="khn-list">
          {visible.length === 0 && (
            <li style={{ padding: '64px 0', textAlign: 'center', color: '#888', fontFamily: FONT }}>
              Không có kết quả phù hợp.
            </li>
          )}
          {visible.map((it, i) => (
            <li key={i} className="khn-item">
              <a href={it.href} className="khn-link">
                <div className="khn-thumb">
                  <img src={it.image} alt={it.title} />
                </div>
                <div className="khn-body">
                  <div className="khn-meta">
                    <time className="khn-date">{it.date}</time>
                    {/* <span className="khn-tag">{it.category}</span> */}
                  </div>
                  <h3 className="khn-title">{it.title}</h3>
                  {/* <span className="khn-more">
                    Xem chi tiết
                    <svg width="18" height="12" viewBox="0 0 24 16" fill="none" aria-hidden>
                      <path d="M0 8h22M15 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span> */}
                </div>
              </a>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className="khn-more-wrap">
            <button
              type="button"
              className="khn-more-btn"
              onClick={() => setPage((p) => p + 1)}
            >
              Hiện thêm
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        )}
          </div>
        </div>
      </SectionWrapper>

      <style>{`
        .khn-layout {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 64px;
          align-items: stretch;
        }
        .khn-sidebar { position: relative; height: 100%; }
        .khn-sidebar-inner {
          position: sticky;
          top: calc(var(--nav-h, 80px) + 32px);
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .khn-side-group { font-family: ${FONT}; }
        .khn-side-title {
          font-family: ${FONT};
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c8a84b;
          margin: 0 0 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(17,17,17,0.15);
        }
        .khn-side-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .khn-side-btn {
          appearance: none;
          background: transparent;
          border: 1px solid transparent;
          border-radius: 10px;
          padding: 10px 36px 10px 14px;
          font-family: ${FONT};
          font-size: 14px;
          color: #333;
          text-align: left;
          width: 100%;
          cursor: pointer;
          letter-spacing: 0.02em;
          position: relative;
          transition: color .2s ease, background .2s ease, border-color .2s ease;
        }
        .khn-side-btn:hover { color: #111; background: rgba(17,17,17,0.04); }
        .khn-side-btn::after {
          content: '';
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%) scale(0);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34,197,94,0.18);
          transition: transform .2s ease;
        }
        .khn-side-btn.is-active::after { transform: translateY(-50%) scale(1); }
        .khn-side-btn::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 0;
          height: 1px;
          background: transparent;
          transition: width .25s ease;
        }
        .khn-side-btn.is-active {
          color: #111;
          font-weight: 600;
          background: #fff;
          border-color: rgba(17,17,17,0.12);
          box-shadow: 0 4px 14px rgba(17,17,17,0.05);
        }
        .khn-main { min-width: 0; }

        .khn-list { list-style: none; margin: 0; padding: 0; }
        .khn-item + .khn-item { border-top: 1px solid rgba(17,17,17,0.10); }
        .khn-item { border-bottom: none; }
        .khn-item:first-child { border-top: 1px solid rgba(17,17,17,0.10); }

        .khn-link {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 40px;
          align-items: center;
          padding: 28px 8px;
          text-decoration: none;
          color: inherit;
          transition: background .25s ease, padding .25s ease;
        }
        .khn-link:hover { background: rgba(200,168,75,0.06); padding-left: 20px; padding-right: 20px; }

        .khn-thumb {
          position: relative;
          aspect-ratio: 4 / 3;
          width: 100%;
          overflow: hidden;
          border-radius: 6px;
          background: #f3efe6;
        }
        .khn-thumb img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform .8s cubic-bezier(.22,1,.36,1);
        }
        .khn-link:hover .khn-thumb img { transform: scale(1.06); }

        .khn-body { display: flex; flex-direction: column; gap: 14px; }
        .khn-meta { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
        .khn-date {
          font-family: ${FONT};
          font-size: 14px;
          letter-spacing: 0.08em;
          color: #555;
        }
        .khn-tag {
          display: inline-flex;
          align-items: center;
          font-family: ${FONT};
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c8a84b;
          border: 1px solid rgba(200,168,75,0.55);
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(200,168,75,0.06);
        }
        .khn-title {
          font-family: ${FONT};
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          font-weight: 600;
          line-height: 1.5;
          color: #111;
          margin: 0;
          transition: color .25s ease;
        }
        .khn-link:hover .khn-title { color: #c8a84b; }
        .khn-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: ${FONT};
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #111;
          margin-top: 4px;
        }
        .khn-more svg { transition: transform .25s ease; }
        .khn-link:hover .khn-more svg { transform: translateX(6px); }

        .khn-more-wrap {
          display: flex;
          justify-content: flex-end;
          margin-top: 48px;
        }
        .khn-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: ${FONT};
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: #111;
          background: #fff;
          border: 1.5px solid #111;
          border-radius: 9999px;
          padding: 12px 28px;
          cursor: pointer;
          transition: background .25s ease, color .25s ease, transform .25s ease;
        }
        .khn-more-btn:hover { background: #c8a84b; color: #fff; border-color: #c8a84b; }
        .khn-more-btn:hover svg { transform: rotate(90deg); }
        .khn-more-btn svg { transition: transform .25s ease; }

        @media (max-width: 980px) {
          .khn-layout { grid-template-columns: 1fr; gap: 40px; }
          .khn-sidebar-inner { position: static; flex-direction: row; flex-wrap: wrap; gap: 32px; }
          .khn-side-group { flex: 1 1 200px; }
        }
        @media (max-width: 780px) {
          .khn-link {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 22px 4px;
          }
          .khn-link:hover { padding-left: 10px; padding-right: 10px; }
          .khn-thumb { aspect-ratio: 16 / 10; }
        }
      `}</style>
    </section>
  )
}
