<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Dự án: Website VSTEP – Đại học Nam Cần Thơ (NCTU)

Trang web của **Trung tâm Chuẩn đầu ra & Phát triển nguồn nhân lực – Đại học Nam Cần Thơ**, phục vụ kỳ thi chứng chỉ tiếng Anh **VSTEP** (Vietnamese Standardized Test of English Proficiency – đánh giá năng lực tiếng Anh 6 bậc, tương đương A1–C2).

Mục tiêu trang: giới thiệu VSTEP, đăng ký thi, ôn thi, lịch thi, kế hoạch năm, văn bản pháp quy và tra cứu kết quả.

Toàn bộ nội dung và giao diện hiển thị bằng **tiếng Việt**.

> **Lưu ý thiết kế:** Giao diện trang chủ được tham khảo một phần từ trang [Hirono](https://hirono-kankocho.jp/). Vì vậy nhiều class CSS vẫn mang tiền tố `hirono-*` (ví dụ `hirono-header`, `hirono-nav-overlay`) — đây là di sản từ thiết kế tham khảo, không phải lỗi. Các file `_analysis_hirono_*.txt` ở thư mục gốc là tư liệu phân tích trang gốc.

## Tech stack

| Công nghệ | Phiên bản | Ghi chú |
|-----------|-----------|---------|
| Next.js | 16.2.6 | App Router. **Đọc `node_modules/next/dist/docs/` trước khi code** (xem khối cảnh báo đầu file). |
| React | 19.2.4 | |
| Tailwind CSS | v4 | Qua `@tailwindcss/postcss`. Import bằng `@import "tailwindcss"` trong `globals.css`. |
| GSAP | 3.15 | Animation cuộn trang (ScrollTrigger). Là cách animation chính. |
| Framer Motion | 12.x | Có cài, dùng cho một số animation component. |
| Playwright | 1.60 | Testing / chụp ảnh trang. |
| TypeScript | 5 | |

## Scripts

- `npm run dev` – chạy dev server
- `npm run build` – build production
- `npm run start` – chạy bản build
- `npm run lint` – ESLint (`eslint-config-next`)

## Cấu trúc thư mục

```
app/
  layout.tsx        # Root layout: <Navbar/> + <main> + <Footer/>, nạp Bootstrap Icons qua CDN, lang="vi"
  page.tsx          # Trang chủ — ghép các section trong components/home/
  globals.css       # Stylesheet toàn cục (~1900 dòng), CSS viết tay theo class. Chứa biến :root (--accent, --nav-h...)
  gioithieu/        # ⚠️ Route rỗng — CHƯA dựng
  vanban/           # ⚠️ Route rỗng — CHƯA dựng
  tracuu/           # ⚠️ Route rỗng — CHƯA dựng
  thongtin/         # ⚠️ Route rỗng — CHƯA dựng
  lienhe/           # ⚠️ Route rỗng — CHƯA dựng

components/
  home/             # Các section của trang chủ
    HomeHeroIntro.tsx        # Hero + intro "VSTEP là gì?" (GSAP pin + scale circle)
    HeroSection.tsx
    HomeBusinessSection.tsx
    LichThiSection.tsx
    KeHoachNamSection.tsx
    HomeVisionSection.tsx    # (đang comment trong page.tsx)
    HomeInterviewSection.tsx # (đang comment trong page.tsx) + HomeInterviewCube.css
  layout/
    Navbar.tsx + nav.css     # Header cố định + menu overlay toàn màn hình (class hirono-*)
    FooterV1.tsx             # ← Footer đang dùng (import trong layout.tsx)
    Footer.tsx, FooterV3.tsx # Các bản footer khác (không active)
  ui/
    SectionWrapper.tsx

public/
  img/              # Logo (logo_truong.png, logo_don.png), ảnh trang trí, ke-hoach-nam*.png
  home/             # Ảnh nội dung trang chủ
  videos/           # Video hero
```

## Quy ước code

- **Routing:** App Router. Các route con (`gioithieu`, `vanban`, `tracuu`, `thongtin`, `lienhe`) đã có thư mục nhưng **chưa có `page.tsx`** — cần tạo khi dựng từng trang. Điều hướng định nghĩa trong `navItems` ở `components/layout/Navbar.tsx`.
- **Client components:** Section có animation/tương tác bắt đầu bằng `'use client'`.
- **Animation GSAP:** Đăng ký plugin trong `useLayoutEffect`, bọc trong `gsap.context(..., scopeRef)` và **luôn cleanup** bằng `ctx.revert()` (xem `HomeHeroIntro.tsx` làm mẫu). Dùng `requestAnimationFrame` để hoãn 1 frame khi cần.
- **CSS:** Chủ yếu là **CSS viết tay theo class trong `globals.css`** (không phải utility-only Tailwind). Tailwind v4 vẫn dùng được cho layout nhanh trong JSX. Class component-cụ-thể tách ra file riêng (`nav.css`, `HomeInterviewCube.css`) và import trực tiếp.
- **Tiền tố `hirono-`:** Giữ nguyên, là class kế thừa từ thiết kế tham khảo.
- **Ảnh & link:** Dùng `next/image` và `next/link`. Link ngoài dùng `target="_blank" rel="noopener noreferrer"`.
- **Icon:** Bootstrap Icons (nạp qua CDN trong `layout.tsx`), dùng dạng `<i className="bi bi-...">`.
- **Font:** `Momo Trust Sans` (chính) + `Inter`, nạp qua Google Fonts trong `globals.css`.
- **Màu chủ đạo:** `--accent: #c8a84b` (vàng gold), nền tối `#0a0a0a`.
- **Link ngoài quan trọng:** Đăng ký thi `https://dkhp.nctu.edu.vn/dangnhap`, Trường `https://www.nctu.edu.vn/`, Trung tâm CĐR `https://ttcdr.nctu.edu.vn/`.

## Trạng thái hiện tại

- ✅ **Trang chủ** đã hoàn thành (Hero/Intro, Business, Lịch thi, Kế hoạch năm).
- ⏳ Các trang con (Giới thiệu, Văn bản, Tra cứu, Thông tin, Liên hệ) **chưa dựng** — thư mục rỗng.
- 🔧 `HomeVisionSection` và `HomeInterviewSection` đang bị comment trong `page.tsx` (chưa dùng).
