import type { Metadata } from 'next'
import ThongTinHero from '@/components/thongtin/ThongTinHero'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Liên hệ – VSTEP ĐH Nam Cần Thơ',
  description:
    'Thông tin liên hệ Trung tâm VSTEP – Đại học Nam Cần Thơ: địa chỉ, điện thoại, Zalo và email.',
}

const INFO_CARDS = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Địa chỉ',
    lines: [
      'Phòng C2-14 (Khu C)',
      'Trường Đại học Nam Cần Thơ',
      '168 Nguyễn Văn Cừ nối dài, P. An Bình, TP. Cần Thơ',
    ],
  },
  {
    icon: 'bi-envelope-fill',
    title: 'E-Mail',
    lines: ['vstepdhnamcantho@nctu.edu.vn'],
  },
  {
    icon: 'bi-telephone-fill',
    title: 'Điện thoại',
    lines: [' 02923 798 789 – 0901 012 365'],
  },
]

export default function LienHePage() {
  return (
    <div className="bg-cream-dots">
      <ThongTinHero
        title="Liên hệ"
        crumbs={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Liên hệ' },
        ]}
      />

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info-card">
            {INFO_CARDS.map((c) => (
              <div key={c.title} className="contact-info-col">
                <div className="contact-info-icon">
                  <i className={`bi ${c.icon}`} />
                </div>
                <h3 className="contact-info-title">{c.title}</h3>
                {c.lines.map((line, i) => (
                  <p key={i} className="contact-info-text">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="contact-form-head">
            <h2 className="contact-form-title">Gửi thông tin cho chúng tôi</h2>
          </div>

          <div className="contact-form-card">
            <ContactForm />

            <div className="contact-map">
              <iframe
                title="Bản đồ Đại học Nam Cần Thơ"
                src="https://www.google.com/maps?q=Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+Nam+C%E1%BA%A7n+Th%C6%A1&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
