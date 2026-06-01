import ThongTinHero from '@/components/thongtin/ThongTinHero'
import ThongTinNewsList, { NewsRow } from '@/components/thongtin/ThongTinNewsList'

const ROWS: NewsRow[] = [
  { date: '18/05/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 đợt tháng 06/2026', tag: 'Mới', isNew: true, href: '#' },
  { date: '10/04/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 đợt tháng 05/2026', href: '#' },
  { date: '21/03/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 đợt tháng 04/2026', href: '#' },
  { date: '24/02/2026', title: 'Thông báo mở lớp ôn thi VSTEP Bậc 3–5 đợt tháng 03/2026', href: '#' },
]

export default function LichOnPage() {
  return (
    <div className="bg-cream-dots">
      <ThongTinHero
        title="Lịch ôn"
        crumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Thông tin' },
          { label: 'Lịch ôn' },
        ]}
      />
      <ThongTinNewsList
        heading="Lịch ôn"
        subheading=""
        rows={ROWS}
        accent="#2A6FDB"
      />
    </div>
  )
}
