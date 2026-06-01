"use client";

import { motion } from "framer-motion";
import type { Interview } from "../_data/interviews";

export default function InterviewCard({ item, i }: { item: Interview; i: number }) {
  return (
    <motion.a
      href={item.href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-[28px] bg-cream-2 shadow-soft ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.department}
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent" />

        <span className="absolute left-5 top-4 font-display text-5xl text-cream/90 drop-shadow">
          {item.index}
        </span>
        <span className="absolute right-5 top-5 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-medium tracking-wide text-ink">
          {item.tag}
        </span>

        <div className="absolute bottom-4 left-5 right-5 text-cream">
          <p className="text-[11px] tracking-[0.25em] text-cream/80">{item.joinedYear}</p>
          <p className="font-display text-2xl">{item.name}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[11px] tracking-[0.3em] text-accent">INTERVIEW {item.index}</span>
        <p className="mt-3 flex-1 font-display text-xl leading-snug text-ink">
          “{item.quote}”
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4">
          <span className="text-sm text-ink-soft">{item.department}</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-cream transition-all duration-300 group-hover:bg-accent group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </motion.a>
  );
}
