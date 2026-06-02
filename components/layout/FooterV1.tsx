"use client";

import Link from "next/link";
import Image from "next/image";

const sectionTitleClass = "text-[24px] font-[500] text-[#0B1A3B]";

const footerLinkClass =
  "inline-block text-[20px] font-[400] leading-[1.45] tracking-[-0.01em] text-[#0B1A3B] transition-[color,transform] duration-200 hover:translate-x-1 hover:text-[#FF282E]";

const footerTextClass =
  "block text-[20px] font-[500] leading-[1.45] tracking-[-0.01em] text-[#0B1A3B]/85";

const footerInfoRowClass = "flex items-start gap-3";
const footerInfoIconClass = "mt-[1px] text-[18px] text-[#0B1A3B]/70";

export default function Footer() {
  return (
    <footer className="relative z-[10] pt-4 sm:pt-12">
      {/* Tiêu đề & CTA — không có nền, trong suốt */}
      {/* <div className="mx-auto w-full max-w-[1540px] px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-end lg:hidden">
            <Link href="/" className="inline-flex items-center rounded-[10px] transition hover:opacity-90">
              <img
                src="/img/logo_don.png"
                alt="Logo Đại học Nam Cần Thơ"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          <h2 className="text-[36px] font-medium leading-[1.35] tracking-[-0.06em] text-[#0B1A3B] lg:text-[68px]">
            Liên hệ với chúng tôi
          </h2>
          <div className="mt-6 flex items-center justify-center">
            <div className="inline-flex items-center overflow-hidden rounded-full border border-[#171717] bg-white">
              <a
                href="mailto:ttchuandaura@nctu.edu.vn"
                className="group inline-flex items-center gap-2 px-5 py-2.5 text-[15px] font-medium text-[#121212] transition-colors duration-200 hover:bg-[#f5f5f5]"
              >
                Gửi email ngay
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#111] text-white transition-transform duration-300 group-hover:-rotate-12">
                  <i className="bi bi-envelope-fill text-[11px]" />
                </span>
              </a>
              <div className="h-5 w-px bg-[#d0d0d0]" />
              <a
                href="https://dkhp.nctu.edu.vn/"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[15px] font-medium text-[#121212] transition-colors duration-200 hover:bg-[#f5f5f5]"
              >
                Đăng ký
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#FF282E] text-white">
                  <i className="bi bi-arrow-right text-[11px]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      
      {/* Box nội dung — max-w 1540px, nền trắng, bo góc */}
      <div className="mx-auto mt-12 w-full max-w-full rounded-[24px] border border-[#161616]/20 bg-white px-4 sm:px-6">
        {/* Banner ĐĂNG KÝ NGAY */}
        <div className="mx-auto w-full mt-12 max-w-[1440px] h-[370px] px-4 sm:px-6">
        <a
          href="https://dkhp.nctu.edu.vn/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-full items-center justify-between gap-6 overflow-hidden rounded-[16px] bg-[#FF282E] px-8 sm:px-12 lg:px-16 transition-all duration-500 hover:brightness-[0.93] hover:scale-[1.01]"
        >
          {/* Grain / noise texture overlay */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[16px] opacity-[0.07]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
          />

          {/* Shimmer sweep on hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-700 group-hover:translate-x-[120%]"
          />

          {/* Chữ to bên trái */}
          <span className="relative text-[48px] font-[900] uppercase leading-none tracking-[-0.03em] text-white sm:text-[64px] lg:text-[80px]">
            ĐĂNG KÝ NGAY
          </span>

          {/* Mô tả ở giữa — ẩn trên mobile */}
          <span className="relative hidden max-w-[360px] text-[16px] font-[400] leading-[1.65] text-white/90 lg:block">
            Mở ra cơ hội nghề nghiệp của bạn — nhanh tay đăng ký để nhận tư vấn
            và bắt đầu hành trình mới cùng chúng tôi.
          </span>

          {/* Nút mũi tên bên phải */}
          <span className="relative flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[10px] bg-white transition-transform duration-300 group-hover:translate-x-1 sm:h-[72px] sm:w-[72px]">
            <i className="bi bi-arrow-right text-[28px] font-bold text-[#FF282E] sm:text-[32px]" />
          </span>
        </a>
      </div>

        <div className="mx-auto w-full max-w-[1440px] border-t border-[#0B1A3B]/30 mt-12 px-4 sm:px-6" />

        <div className="mx-auto w-full max-w-[1440px] py-10 sm:py-12 lg:py-14 px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-10">
            {/* Logo - chỉ hiện trên desktop */}
            <div className="lg:col-span-1 hidden lg:flex lg:items-center">
              <Link href="/" className="inline-flex items-center transition hover:opacity-90">
                <img
                  src="/img/logo_don.png"
                  alt="Logo Đại học Nam Cần Thơ"
                  className="hidden h-16 w-auto object-contain lg:block lg:h-[7.5rem]"
                />
              </Link>
            </div>

            {/* Liên hệ & Địa chỉ */}
            <div className="lg:col-span-1 lg:justify-self-end">
              <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-20">
                {/* Liên hệ */}
                <div>
                  <p className={sectionTitleClass}>Liên hệ</p>
                  <div className="mt-3 flex flex-col items-start gap-2 sm:gap-2.5">
                    <div className={footerInfoRowClass}>
                      <i className={`bi bi-envelope-fill ${footerInfoIconClass}`} aria-hidden="true" />
                      <a href="mailto:ttchuandaura@nctu.edu.vn" className={footerLinkClass}>
                        ttchuandaura@nctu.edu.vn
                      </a>
                    </div>
                    <div className={footerInfoRowClass}>
                      <i className={`bi bi-chat-dots-fill ${footerInfoIconClass}`} aria-hidden="true" />
                      <a
                        href="https://zalo.me/0982991914"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerLinkClass}
                      >
                        Hotline / Zalo: 0982 991 914
                      </a>
                    </div>
                    <div className={footerInfoRowClass}>
                      <i className={`bi bi-telephone-fill ${footerInfoIconClass}`} aria-hidden="true" />
                      <a href="tel:02923798789" className={footerLinkClass}>
                        Điện thoại: 02923 798 789
                      </a>
                    </div>
                  </div>
                </div>

                {/* Địa chỉ */}
                <div>
                  <p className={sectionTitleClass}>Địa chỉ</p>
                  <div className="mt-3 flex flex-col items-start gap-2 sm:gap-2.5">
                    <div className={footerInfoRowClass}>
                      <i className={`bi bi-building-fill ${footerInfoIconClass}`} aria-hidden="true" />
                      <p className={footerTextClass}>Văn phòng: C2-14</p>
                    </div>
                    <div className={footerInfoRowClass}>
                      <i className={`bi bi-geo-alt-fill ${footerInfoIconClass}`} aria-hidden="true" />
                      <p className={footerTextClass}>
                        Số 168, Nguyễn Văn Cừ (nối dài), P. An Bình, TP. Cần Thơ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="mt-33 border-t border-[#0B1A3B]/0 pt-6 text-center text-[14px] text-[#101114]/75 sm:text-left">
            © {new Date().getFullYear()}  Trung tâm Chuẩn đầu ra &amp; Phát triển nguồn nhân lực - Trường Đại học Nam
            Cần Thơ
          </p>
        </div>
      </div>

      {/* Nút Zalo cố định */}
      <div id="zaloBtnMobile" className="fixed bottom-5 right-3 z-[80]">
        <a
          href="https://zalo.me/0982991914"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="relative flex h-[55px] w-[55px] items-center justify-center hover:scale-110 transition-transform duration-200"
        >
          <Image src="/home/zaloicon.png" alt="Chat Zalo" width={55} height={55} />
          <span className="absolute -bottom-1 -right-1 rounded-[5px] bg-white px-1 py-0.5 text-[10px] font-[700] leading-none text-[#ff0000] shadow">
            CDR
          </span>
        </a>
      </div>
    </footer>
  );
}
