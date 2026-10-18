"use client";

import Image from "next/image";
import { BLOG } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="relative overflow-hidden bg-[var(--dark2)] px-5 py-28 text-white md:px-10">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-10 blur-[140px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-white opacity-5 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1.3fr] lg:gap-16">
          
          {/* Left: Text & Content */}
          <div>
            <span className="pill text-[var(--accent)] border-[var(--accent)]/40">
              {BLOG.tag}
            </span>
            <h2 className="mt-6 text-4xl font-black uppercase tracking-tight md:text-6xl">
              {BLOG.titlePrefix}{" "}
              <span className="text-[var(--accent)]">{BLOG.titleHighlight}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-white/70">
              {BLOG.desc}
            </p>

            {/* Feature Highlights */}
            <div className="mt-8 space-y-3.5 text-sm text-white/75">
              {BLOG.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/20 text-xs font-bold text-[var(--accent)]">✓</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={BLOG.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta !py-3.5 !px-8"
              >
                <span>{BLOG.ctaText}</span>
                <span className="btn-icon">↗</span>
              </a>
              <span className="text-xs text-white/45">
                Featured on <strong className="text-white/80">{BLOG.platform}</strong>
              </span>
            </div>
          </div>

          {/* Right: Laptop Montage Preview Showcase */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/60 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm transition-all duration-500 hover:border-[var(--accent)]/40 hover:shadow-[0_20px_60px_-15px_rgba(117,234,27,0.2)]">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-white/[0.03]">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-[11px] font-mono tracking-wider text-white/45">{BLOG.platformDomain}</span>
                <span className="text-xs font-semibold text-[var(--accent)]">Live ↗</span>
              </div>

              {/* GIF Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                <Image
                  src={BLOG.previewMedia}
                  alt={`${BLOG.platform} Blog Preview`}
                  fill
                  sizes="(min-width: 1024px) 600px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Bottom Caption Pill */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-t from-black/90 to-black/40">
                <div>
                  <p className="text-sm font-bold text-white">{BLOG.platform}</p>
                  <p className="text-xs text-white/50">{BLOG.platformTagline}</p>
                </div>
                <a
                  href={BLOG.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black"
                >
                  {BLOG.readMoreText}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
