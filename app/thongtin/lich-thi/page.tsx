import ThongTinHero from '@/components/thongtin/ThongTinHero'
import ThongTinNewsList, { NewsRow } from '@/components/thongtin/ThongTinNewsList'

const ROWS: NewsRow[] = [
  { date: '18/05/2026', title: 'Thông báo kế hoạch thi đánh giá năng lực Ngoại ngữ 6 Bậc tháng 06/2026', tag: 'Mới', isNew: true, href: '#' },
  { date: '10/04/2026', title: 'Thông báo kế hoạch thi đánh giá năng lực Ngoại ngữ 6 Bậc tháng 05/2026', href: '#' },
  { date: '21/03/2026', title: 'Thông báo kế hoạch thi đánh giá năng lực Ngoại ngữ 6 Bậc tháng 04/2026', href: '#' },
  { date: '24/02/2026', title: 'Thông báo kế hoạch thi đánh giá năng lực Ngoại ngữ 6 Bậc tháng 03/2026', href: '#' },
]

export default function LichThiPage() {
  return (
    <div className="bg-cream-dots">
      <ThongTinHero
        title="Lịch thi"
        crumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Thông tin' },
          { label: 'Lịch thi' },
        ]}
      />
      <ThongTinNewsList
        heading="Lịch thi"
        subheading=""
        rows={ROWS}
        accent="#E07A1F"
      />
    </div>
  )
}
