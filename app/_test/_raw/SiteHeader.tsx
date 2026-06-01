// components/SiteHeader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "./interviews";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/80 backdrop-blur-md border-b border-ink/10 py-3"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo dạng chữ – tránh dùng asset gốc */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-cream font-display text-lg leading-none">
            T
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-ink">Tinh Hoa</span>
            <span className="text-[10px] tracking-[0.28em] text-ink-soft">CƠ KHÍ · TUYỂN DỤNG</span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <span className="block text-[9px] tracking-[0.2em] text-accent/80">{link.en}</span>
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/requirements"
            className="group relative hidden overflow-hidden rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-cream shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <span className="relative z-10 flex items-center gap-2">
              ENTRY
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <span className="absolute inset-0 -translate-x-full bg-ink transition-transform duration-500 group-hover:translate-x-0" />
          </a>

          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
            aria-label="Mở menu"
          >
            <span className="flex flex-col gap-1">
              <span className="h-px w-5 bg-ink" />
              <span className="h-px w-5 bg-ink" />
              <span className="h-px w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {/* Menu overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between px-5 py-5">
              <span className="font-display text-lg text-cream">Tinh Hoa</span>
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream"
                aria-label="Đóng menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-1 px-5 pt-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-cream/10 py-4 text-cream"
                >
                  <span className="block text-[10px] tracking-[0.2em] text-accent">{link.en}</span>
                  <span className="text-lg">{link.label}</span>
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
