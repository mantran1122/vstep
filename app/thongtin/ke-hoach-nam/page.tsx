import ThongTinHero from '@/components/thongtin/ThongTinHero'
import KeHoachNamList, { KeHoachItem } from '@/components/thongtin/KeHoachNamList'

const ITEMS: KeHoachItem[] = [
  {
    date: '2026.01.09',
    year: '2026',
    category: 'Đánh giá năng lực',
    title: 'Kế hoạch ôn đánh giá năng lực Ngoại ngữ 6 Bậc năm 2026',
    image: '/img/ke-hoach-nam.png',
    href: '#',
  },
  {
    date: '2025.12.22',
    year: '2026',
    category: 'Chứng chỉ VSTEP',
    title: 'Kế hoạch thi VSTEP năm 2026',
    image: '/img/ke-hoach-nam.png',
    href: '#',
  },
  {
    date: '2025.01.17',
    year: '2025',
    category: 'Đánh giá năng lực',
    title: 'Kế hoạch ôn đánh giá năng lực Ngoại ngữ 6 Bậc năm 2025',
    image: '/img/ke-hoach-nam.png',
    href: '#',
  },
  {
    date: '2024.12.20',
    year: '2025',
    category: 'Chứng chỉ VSTEP',
    title: 'Kế hoạch thi VSTEP năm 2025',
    image: '/img/ke-hoach-nam.png',
    href: '#',
  },
]

export default function KeHoachNamPage() {
  return (
    <div className="bg-cream-dots">
      <ThongTinHero
        title="Kế hoạch năm"
        crumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Thông tin' },
          { label: 'Kế hoạch năm' },
        ]}
      />
      <KeHoachNamList heading="Kế hoạch năm" items={ITEMS} />
    </div>
  )
}
