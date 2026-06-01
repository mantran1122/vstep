// components/HeroInterview.tsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const lineUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroInterview() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* Nền: các khối mềm trôi nhẹ – tạo bằng CSS, không dùng asset gốc */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="absolute inset-0 bg-grain opacity-[0.04]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={lineUp}
            className="inline-flex items-center gap-3 text-xs tracking-[0.4em] text-accent"
          >
            <span className="h-px w-10 bg-accent" />
            INTERVIEW
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.05] text-ink">
            <motion.span variants={lineUp} className="block">
              Lắng nghe
            </motion.span>
            <motion.span variants={lineUp} className="block">
              người <span className="italic text-accent">trong nghề</span>
            </motion.span>
          </h1>

          <motion.p
            variants={lineUp}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            Ba con người đang ngày ngày tận hưởng công việc tại Cơ khí Tinh Hoa.
            Họ kể lại bằng chính giọng nói của mình — chân thật, gần gũi và đầy cảm hứng.
          </motion.p>
        </motion.div>
      </div>

      {/* Dải ảnh trang trí phía dưới hero */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-4 px-5 sm:mt-20 sm:grid-cols-4 sm:px-8"
      >
        {[
          { seed: "hero-1", h: "h-44 sm:h-56", t: "sm:translate-y-6" },
          { seed: "hero-2", h: "h-52 sm:h-72", t: "" },
          { seed: "hero-3", h: "h-44 sm:h-56", t: "sm:translate-y-10" },
          { seed: "hero-4", h: "h-52 sm:h-64", t: "sm:-translate-y-2" },
        ].map((img) => (
          <div
            key={img.seed}
            className={`overflow-hidden rounded-3xl bg-ink/5 ${img.h} ${img.t} float-soft`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://picsum.photos/seed/${img.seed}/600/800`}
              alt="Khoảnh khắc làm việc"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
