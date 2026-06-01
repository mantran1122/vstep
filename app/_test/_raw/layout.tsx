// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phỏng vấn nhân viên | Cơ khí Tinh Hoa — Tuyển dụng",
  description:
    "Lắng nghe những con người đang làm việc tại Cơ khí Tinh Hoa kể câu chuyện của mình.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
