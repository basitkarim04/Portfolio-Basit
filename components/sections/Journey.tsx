"use client";

import { useEffect, useRef, useState } from "react";
import { JOURNEY, RESUME, TOOLS } from "@/lib/data";

const STATS = [
  { val: "3+", label: "Years Experience" },
  { val: "15+", label: "Apps & Services" },
  { val: "2", label: "Stores (iOS & Play)" },
];

export default function Journey() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start line fill when top reaches 70% of viewport, finish near 50%
      const start = vh * 0.7;
      const total = r.height;
      const p = Math.min(1, Math.max(0, (start - r.top) / total));
      setProgress(p);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="resume" className="relative overflow-hidden bg-[var(--dark)] px-5 py-28 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16 xl:gap-24">
          
          {/* Left Column: Overview, Highlights, Skills & Resume Download */}
          <div className="flex flex-col lg:sticky lg:top-28 lg:self-start">
            <span className="pill w-fit text-[var(--accent)] border-[var(--accent)]/40">
              Career &amp; Milestones
            </span>
            <h2 className="mt-5 text-5xl font-black uppercase tracking-tight md:text-7xl">
              My Journey.
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed text-white/65">
              From writing my first algorithms to building enterprise ERP systems, shipping production apps to the Apple App Store &amp; Google Play, and architecting multi-cloud backends.
            </p>

            {/* Career Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-3 text-center sm:p-4 transition-colors hover:border-[var(--accent)]/40 hover:bg-white/[0.04]"
                >
                  <p className="text-2xl font-black text-[var(--accent)] sm:text-3xl">{s.val}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Tools & Tech Stack */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40">Tools &amp; Technologies</p>
              <div className="mt-3.5 flex flex-wrap gap-2">
                {TOOLS.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-1.5 text-xs text-white/80 transition-all hover:border-[var(--accent)]/50 hover:text-[var(--accent)] hover:bg-white/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="mt-10">
              <a href={RESUME} download className="btn-cta w-full sm:w-auto">
                <span>Download resume</span>
                <span className="btn-icon">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Scroll-Filling Timeline */}
          <div ref={trackRef} className="relative pb-6 pt-2">
            
            {/* Background Muted Connecting Line */}
            <div
              className="absolute left-[15px] top-6 bottom-8 w-[2px] bg-white/10"
              aria-hidden
            />

            {/* Dynamic Foreground Filled Line (Grows & Retracts with Scroll) */}
            <div
              className="absolute left-[15px] top-6 w-[2px] bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] transition-all duration-75 ease-out"
              style={{
                height: `${progress * 100}%`,
                maxHeight: "calc(100% - 32px)",
              }}
              aria-hidden
            />

            {/* Timeline Milestones */}
            <div className="flex flex-col gap-10 sm:gap-12">
              {JOURNEY.map(([y, r, o, d, tags], i) => {
                const milestoneThreshold = (i / (JOURNEY.length - 1)) * 0.85;
                const isPassed = progress >= milestoneThreshold;

                return (
                  <div key={o} className="relative flex items-start gap-6 sm:gap-8">
                    
                    {/* Interactive Animated Node Dot */}
                    <div className="relative z-10 mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center">
                      <span
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                          isPassed
                            ? "bg-[var(--accent)] scale-125 ring-4 ring-[var(--accent)]/25 shadow-[0_0_14px_var(--accent)]"
                            : "bg-neutral-800 border-2 border-white/25 scale-100"
                        }`}
                      />
                    </div>

                    {/* Milestone Card */}
                    <div
                      className={`flex-1 rounded-2xl border p-5 sm:p-6 transition-all duration-500 ${
                        isPassed
                          ? "border-white/20 bg-white/[0.035] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
                          : "border-white/10 bg-white/[0.015]"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">
                          {y}
                        </span>
                        <span className="text-xs font-semibold text-white/50">{o}</span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold sm:text-2xl text-white">{r}</h3>
                      <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-white/60">{d}</p>

                      {/* Tech Chips */}
                      {tags && tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
