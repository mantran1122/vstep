import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/FooterV1'

export const metadata: Metadata = {
  title: 'VSTEP – ĐH Nam Cần Thơ',
  description:
    'Trung tâm VSTEP – Đại học Nam Cần Thơ. Đăng ký thi, ôn thi và tra cứu kết quả chứng chỉ tiếng Anh VSTEP bậc 1–6.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
