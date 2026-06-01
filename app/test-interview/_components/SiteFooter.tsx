import { navLinks } from "../_data/interviews";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-cream text-ink font-display text-lg">
              T
            </span>
            <span className="font-display text-xl text-cream">Cơ khí Tinh Hoa</span>
          </div>
          <a
            href="#"
            className="mt-6 inline-block text-sm text-cream/60 underline-offset-4 hover:underline"
          >
            Website doanh nghiệp →
          </a>
        </div>

        <nav className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
          {navLinks.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              className="text-sm text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-[11px] tracking-[0.2em] text-cream/40">
        © 2025 CÔNG TY CƠ KHÍ TINH HOA — DỮ LIỆU MINH HOẠ
      </div>
    </footer>
  );
}
