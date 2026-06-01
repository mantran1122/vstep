"use client";

import Reveal from "./Reveal";
import InterviewCard from "./InterviewCard";
import { interviews } from "../_data/interviews";

export default function MembersSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <span className="text-xs tracking-[0.4em] text-accent">MEMBERS</span>
            <h2 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
              Phỏng vấn <span className="italic">nhân viên</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="max-w-md text-base leading-relaxed text-ink-soft">
              Chúng tôi đã trò chuyện cùng ba thành viên đang làm việc tại Tinh Hoa,
              để nghe những điều họ thật lòng tận hưởng mỗi ngày.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {interviews.map((item, i) => (
            <InterviewCard key={item.id} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
