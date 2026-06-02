'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!agreed) return
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    e.currentTarget.reset()
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form-row">
        <label className="contact-field">
          <span>Họ</span>
          <input type="text" name="firstName" placeholder="Họ" required />
        </label>
        <label className="contact-field">
          <span>Tên</span>
          <input type="text" name="lastName" placeholder="Tên" required />
        </label>
      </div>

      <label className="contact-field">
        <span>Email</span>
        <input type="email" name="email" placeholder="ban@email.com" required />
      </label>

      <label className="contact-field">
        <span>Số điện thoại</span>
        <input type="tel" name="phone" placeholder="0901 012 365" />
      </label>

      <label className="contact-field">
        <span>Nội dung</span>
        <textarea name="message" rows={5} placeholder="Nhập nội dung cần liên hệ..." required />
      </label>

      <label className="contact-agree">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        <span>
          Bạn đồng ý với{' '}
          <a href="#" className="contact-link">
            chính sách bảo mật
          </a>{' '}
          của chúng tôi.
        </span>
      </label>

      <button type="submit" className="contact-submit" disabled={!agreed}>
        {sent ? 'Đã gửi!' : 'Gửi thông tin'}
      </button>
    </form>
  )
}
