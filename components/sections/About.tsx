"use client";

import { useEffect, useRef, useState } from "react";
import { LINKEDIN } from "@/lib/data";

const VISION = [
  "I build responsive web and mobile applications that solve real problems,",
  "engineer scalable backends with Node.js, Supabase, and SQL,",
  "and transform Figma designs into fast, reliable,",
  "production-ready software experiences.",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [fill, setFill] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = textRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // fill starts when text is at 85% of viewport, done when it reaches 35%
      setFill(Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (vh * 0.5 + r.height))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="about" ref={ref} className="bg-[var(--light)] px-5 pb-16 pt-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 border-b border-neutral-300 pb-8 text-center md:flex-row md:flex-wrap md:gap-6 md:text-left">
          <h2 className="text-6xl font-medium tracking-tight md:text-7xl">About</h2>
          <div className="hidden h-14 w-px bg-neutral-300 md:block" />
          <p className="text-sm leading-snug text-neutral-600">
            Clean code turns ideas
            <br />
            into scalable software.
          </p>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta ml-auto hidden md:inline-flex"
          >
            <span>Hire Me</span>
            <span className="btn-icon">↗</span>
          </a>
        </div>

        <div className="mt-14">
          <div ref={textRef} className="text-center text-3xl font-medium leading-tight tracking-tight md:text-right md:text-[2.1rem] lg:text-[2.4rem]">
            {VISION.map((line, i) => {
              const p = Math.min(1, Math.max(0, fill * VISION.length - i)) * 100;
              return (
                <div key={i} className="relative">
                  <span className="text-neutral-300">{line}</span>
                  <span
                    aria-hidden
                    className="absolute inset-0 text-neutral-900"
                    style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}
                  >
                    {line}
                  </span>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
