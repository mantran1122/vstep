// components/EntryCTA.tsx
"use client";

import { motion } from "framer-motion";

export default function EntryCTA() {
  return (
    <section className="px-5 pb-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-ink px-6 py-16 text-cream sm:px-16 sm:py-24"
      >
        {/* khối sáng trang trí */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-amber/20 blur-3xl" />

        <div className="relative max-w-2xl">
          <span className="text-xs tracking-[0.4em] text-accent">ENTRY</span>
          <h2 className="mt-5 font-display text-3xl leading-tight sm:text-5xl">
            Trong văn hoá “trân trọng con người”,
            <br className="hidden sm:block" /> bạn cũng sẽ trưởng thành.
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-cream/70">
            Một nơi để bạn bước những bước đầu tiên đầy vững vàng. Dù là sinh viên mới
            ra trường hay người chuyển ngành — chúng tôi luôn chờ đón những ai mang trong mình hoài bão.
          </p>
          <a
            href="/requirements"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            Ứng tuyển ngay
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
