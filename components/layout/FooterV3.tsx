"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const sectionTitleClass = "text-[24px] font-[500] text-[#0B1A3B]";

const footerLinkClass =
  "inline-block text-[20px] font-[400] leading-[1.45] tracking-[-0.01em] text-[#0B1A3B] transition-[color,transform] duration-200 hover:translate-x-1 hover:text-[#FF282E]";

const footerTextClass =
  "block text-[20px] font-[500] leading-[1.45] tracking-[-0.01em] text-[#0B1A3B]/85";

const footerInfoRowClass = "flex items-start gap-3";
const footerInfoIconClass = "mt-[1px] text-[18px] text-[#0B1A3B]/70";

export default function FooterV3() {
  const footerRef = useRef<HTMLElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footerEl = footerRef.current;
    if (!footerEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.12 }
    );

    observer.observe(footerEl);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-white pt-4 sm:pt-12">
      {/* Tiêu đề & CTA - giống FooterV2 */}
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[1860px]">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex items-end lg:hidden">
              <Link href="/" className="inline-flex items-center rounded-[10px] transition hover:opacity-90">
                <img
                  src="/logo_don.png"
                  alt="Logo Đại học Nam Cần Thơ"
                  className="h-30 w-auto object-contain sm:h-20 lg:h-[4.5rem]"
                />
              </Link>
            </div>

            <h2 className="text-[36px] font-medium leading-[1.35] tracking-[-0.06em] text-[#0B1A3B] lg:text-[68px]">
              Liên hệ với chúng tôi
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="mailto:ttchuandaura@nctu.edu.vn"
                className="group inline-flex items-center gap-2 rounded-xl border border-[#171717] bg-white px-4 py-2 text-[16px] font-medium text-[#121212] transition-all duration-300 hover:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] hover:bg-[#fffdf7]"
              >
                Gửi email ngay
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#111] text-white transition-all duration-300 group-hover:rounded-lg group-hover:-rotate-6 transition-all duration-300 hover:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)]">
                  <i className="bi bi-envelope-fill text-[12px]" />
                </span>
              </a>
              <a
                href="https://dkhp.nctu.edu.vn/"
                className="inline-flex items-center gap-2 rounded-xl border border-[#FF282E] bg-[#FF282E] px-4 py-2 text-[16px] font-medium text-white transition-all duration-300 hover:[transform:skewY(-4deg)_rotate(-1deg)_scale(1.02)] hover:border-[#171717] hover:bg-[#fffdf7] hover:text-[#121212]"
              >
                Đăng ký
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Nội dung footer bg-[#FAF4EC]*/}
      <div className="relative mx-4 mt-12 rounded-[24px] border-1 border-[#161616] sm:mx-6 lg:mx-20">
        <div className="mx-auto w-full max-w-[1860px] px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <div className="lg:col-span-1 hidden lg:block">
              <Link href="/" className="inline-flex items-center transition hover:opacity-90">
                <img
                  src="/logo_don.png"
                  alt="Logo Đại học Nam Cần Thơ"
                  className="hidden h-16 w-auto object-contain lg:block lg:h-[7.5rem]"
                />
                <img
                  src="/logo_don.png"
                  alt="Logo Đại học Nam Cần Thơ"
                  className="h-16 w-auto object-contain sm:h-20 lg:hidden"
                />
              </Link>
            </div>

            <div className="lg:col-span-1 lg:justify-self-end">
              <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-20">
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

                <div>
                  <p className={sectionTitleClass}>Địa chỉ</p>
                  <div className="mt-3 flex flex-col items-start gap-2 sm:gap-2.5">
                    <div className={footerInfoRowClass}>
                      <i className={`bi bi-building-fill ${footerInfoIconClass}`} aria-hidden="true" />
                      <p className={footerTextClass}>Văn phòng: C2-14</p>
                    </div>
                    <div className={footerInfoRowClass}>
                      <i className={`bi bi-geo-alt-fill ${footerInfoIconClass}`} aria-hidden="true" />
                      <p className={footerTextClass}>Số 168, Nguyễn Văn Cừ (nối dài), P. An Bình, TP. Cần Thơ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 border-t border-[#0B1A3B]/10 pt-6 text-center text-[14px] text-[#101114]/75 sm:text-left">
            © {new Date().getFullYear()} Trung tâm Chuẩn đầu ra & Phát triển nguồn nhân lực - Trường Đại học Nam
            Cần Thơ
          </p>
        </div>

        {/* <a
          href="https://zalo.me/0982991914"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="absolute right-4 top-6 z-30 hidden h-[72px] w-[72px] rotate-[6deg] items-center justify-center rounded-full border-[3px] border-white bg-[#F6F3EC] shadow-[0_8px_24px_rgba(15,23,42,0.12)] transition hover:scale-105 sm:right-8 sm:top-8 lg:inline-flex lg:h-[88px] lg:w-[88px] lg:rotate-[10deg]"
        >
          <span className="relative inline-block">
            <img src="/zalo-icon.png" alt="Zalo" className="h-[40px] w-[40px] object-contain lg:h-[46px] lg:w-[46px]" />
            <span className="absolute bottom-0 right-0 rounded-[5px] bg-white px-0.5 py-0.5 !text-[12px] font-[700] leading-none text-[#ff0000]">
              CDR
            </span>
          </span>
        </a> */}
      </div>

      <div id="zaloBtnMobile" className="fixed bottom-5 right-3 z-[80]">
        <a
          href="https://zalo.me/0982991914"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo"
          className="relative inline-block"
        >
          <img src="/zalo-icon.png" alt="logo zalo" width={55} height={55} />
          <span className="absolute bottom-0 right-0 rounded-[5px] bg-white px-0.5 py-0.5 !text-[12px] font-[700] leading-none text-[#ff0000]">
            CDR
          </span>
        </a>
      </div>

      {/* {!isFooterVisible && (
        <div id="zaloBtnDesktop" className="fixed bottom-10 right-[27px] z-[80]">
          <a
            href="https://zalo.me/0982991914"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat Zalo"
            className="relative inline-block"
          >
            <img src="/zalo-icon.png" alt="logo zalo" width={55} height={55} />
            <span
              className="absolute bottom-0 right-0 rounded-[5px] bg-white px-0.5 py-0.5 !text-[12px] font-[700] leading-none text-[#ff0000]"
              style={{ fontSize: "12px" }}
            >
              CDR
            </span>
          </a>
        </div>
      )} */}
    </footer>
  );
}
