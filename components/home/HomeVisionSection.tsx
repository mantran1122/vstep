import Image from 'next/image'
import Link from 'next/link'

export default function HomeVisionSection() {
  return (
    <section className="home-vision">
      <div className="home-section-border" aria-hidden="true" />
      <div className="home-vision-panel">
        <div className="home-vision-copy">
          <p className="home-section-eyebrow">FUTURE</p>
          <h2 className="home-section-title">
            VISION
            <span>Huong den mot hanh trinh VSTEP de hieu, de hoc va de dat ket qua.</span>
          </h2>
          <p className="home-vision-text">
            Chung toi to chuc lai toan bo trai nghiem hoc va thi thanh tung buoc nho,
            ro rang va co the theo doi. Tu tu van, on luyen den thi thu, moi section
            deu duoc thiet ke de giup hoc vien di nhanh hon ma van chac nen.
          </p>
          <Link href="/thongtin" className="home-section-cta home-section-cta--orange">
            Xem tam nhin
          </Link>
        </div>

        <div className="home-vision-figure" aria-hidden="true">
          <div className="home-vision-figure-frame">
            <Image
              src="/img/anhkehoach.png"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 44vw"
            />
          </div>
          <div className="home-vision-badge home-vision-badge--one">B1-B2-C1</div>
          <div className="home-vision-badge home-vision-badge--two">Thi thu lien tuc</div>
        </div>
      </div>
    </section>
  )
}
