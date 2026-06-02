import GioiThieuHero     from '@/components/gioithieu/GioiThieuHero'
import GioiThieuSoLieu   from '@/components/gioithieu/GioiThieuSoLieu'
import GioiThieuTrungTam from '@/components/gioithieu/GioiThieuTrungTam'
import GioiThieuKhung6Bac from '@/components/gioithieu/GioiThieuKhung6Bac'
import GioiThieu4KyNang   from '@/components/gioithieu/GioiThieuDiemQuyDoi'
import GioiThieuHinhThuc   from '@/components/gioithieu/GioiThieuHinhThuc'

export default function GioiThieuPage() {
  return (
    <div className="bg-cream-dots">
      <GioiThieuHero />
      <GioiThieuSoLieu />
      <GioiThieuTrungTam />
      {/* <GioiThieuVSTEP /> */}
      <GioiThieuKhung6Bac />
      <GioiThieu4KyNang />
      <GioiThieuHinhThuc />
    </div>
  )
}
