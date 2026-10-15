"use client";

import { useEffect, useRef, useState } from "react";
import { STEPS } from "@/lib/data";

const STEP_VISUALS = [
  // discover: persona card + sticky notes under a magnifier
  <>
    <rect x="8" y="10" width="44" height="56" rx="6" fill="#fff" />
    <circle cx="30" cy="28" r="8" fill="#111" />
    <rect x="16" y="42" width="28" height="4" rx="2" fill="#111" />
    <rect x="16" y="50" width="20" height="4" rx="2" fill="#111" opacity=".35" />
    <rect x="60" y="10" width="20" height="20" rx="3" fill="#fff" transform="rotate(-6 70 20)" />
    <rect x="84" y="14" width="20" height="20" rx="3" fill="#111" opacity=".85" transform="rotate(5 94 24)" />
    <circle cx="80" cy="54" r="11" fill="none" stroke="#111" strokeWidth="4" />
    <path d="m88 62 10 10" stroke="#111" strokeWidth="5" strokeLinecap="round" />
  </>,
  // define: user-flow diagram
  <>
    <rect x="6" y="30" width="24" height="20" rx="5" fill="#111" />
    <rect x="46" y="8" width="24" height="20" rx="5" fill="#fff" />
    <rect x="46" y="52" width="24" height="20" rx="5" fill="#fff" />
    <rect x="84" y="30" width="22" height="20" rx="10" fill="#111" />
    <path d="M30 40h8v-22h8M38 40v22h8M70 18h6v22h8M70 62h6V40" fill="none" stroke="#111" strokeWidth="2.5" strokeLinejoin="round" />
  </>,
  // design: phone screen with UI + colour swatches
  <>
    <rect x="10" y="4" width="44" height="72" rx="8" fill="#111" />
    <rect x="15" y="10" width="34" height="22" rx="4" fill="#fff" />
    <rect x="15" y="37" width="24" height="4" rx="2" fill="#fff" />
    <rect x="15" y="45" width="34" height="3" rx="1.5" fill="#fff" opacity=".5" />
    <rect x="15" y="60" width="34" height="9" rx="4.5" fill="#fff" />
    <circle cx="74" cy="20" r="9" fill="#fff" />
    <circle cx="94" cy="20" r="9" fill="#111" />
    <text x="66" y="62" fontSize="26" fontWeight="800" fill="#111">Aa</text>
  </>,
  // prototype: two screens linked by an interaction
  <>
    <rect x="6" y="10" width="36" height="60" rx="7" fill="#fff" />
    <rect x="12" y="50" width="24" height="10" rx="5" fill="#111" />
    <rect x="70" y="10" width="36" height="60" rx="7" fill="#111" />
    <rect x="76" y="18" width="24" height="14" rx="3" fill="#fff" />
    <path d="M36 55c14 0 18-30 32-30" fill="none" stroke="#111" strokeWidth="2.5" strokeDasharray="4 4" />
    <path d="m62 20 7 5-7 5" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M28 56l4 12 2-5 5-2z" fill="#fff" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" />
  </>,
  // test: feedback checklist + score
  <>
    <rect x="6" y="6" width="58" height="68" rx="7" fill="#fff" />
    {[18, 36, 54].map((y, k) => (
      <g key={y}>
        <rect x="13" y={y - 5} width="10" height="10" rx="3" fill="#111" />
        {k < 2 && <path d={`m15.5 ${y}l2 2 4-4`} stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" />}
        <rect x="28" y={y - 2} width={k === 1 ? 22 : 30} height="4" rx="2" fill="#111" opacity={k < 2 ? 1 : 0.3} />
      </g>
    ))}
    <circle cx="88" cy="40" r="17" fill="#111" />
    <text x="88" y="46" fontSize="16" fontWeight="800" fill="#fff" textAnchor="middle">9.2</text>
  </>,
];
const CARD_TILT = [-8, 6, -4, 9, -5];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const [enter, setEnter] = useState(0);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setEnter(Math.min(1, Math.max(0, 1 - r.top / vh)));
      setProg(Math.min(1, Math.max(0, -r.top / (r.height - vh))));
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

  const n = STEPS.length;
  // first n-1 cards fly away over 90% of the pinned scroll; the last one stays
  const fly = (i: number) => Math.min(1, Math.max(0, (prog / 0.9) * (n - 1) - i));
  const current = Math.min(n - 1, Math.floor((prog / 0.9) * (n - 1) + 0.5));
  const slide = (1 - enter) * 30;

  return (
    <section id="approach" ref={ref} className="relative bg-[var(--dark)] text-white" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <div
          className="pointer-events-none relative mb-6 w-full sm:mb-10 select-none whitespace-nowrap px-5 text-[14vw] font-semibold leading-none tracking-tight md:px-10 md:text-[11vw] xl:absolute xl:inset-x-0 xl:mb-0 xl:top-[24%] xl:text-[8vw]"
          style={{ transform: `translateX(${slide}vw)` }}
        >
          Our <span className="text-[var(--accent)]">Work</span>
        </div>
        <div
          className="pointer-events-none relative order-last mt-6 w-full sm:mt-10 select-none whitespace-nowrap px-5 text-right text-[14vw] font-semibold leading-none tracking-tight md:px-10 md:text-[11vw] xl:absolute xl:inset-x-0 xl:order-none xl:mt-0 xl:top-[52%] xl:text-[8vw]"
          style={{ transform: `translateX(${-slide}vw)` }}
        >
          Process
        </div>

        <div className="relative h-[330px] w-[min(440px,88vw)] sm:h-[350px] md:h-[360px]">
          {STEPS.map((s, i) => {
            const t = fly(i);
            const last = i === n - 1;
            return (
              <article
                key={s.key}
                className="absolute inset-0 flex flex-col rounded-3xl bg-white p-5 text-black sm:p-7 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] will-change-transform"
                style={{
                  zIndex: n - i,
                  transform: last
                    ? `rotate(${CARD_TILT[i]}deg)`
                    : `translate(${-t * 60}vw, ${-t * 110}vh) rotate(${CARD_TILT[i] - t * 25}deg)`,
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-bold tracking-widest">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                    STEP:0{i + 1}
                  </span>
                  <span className="flex h-16 w-24 items-center justify-center rounded-2xl bg-[var(--accent)] p-2 sm:h-20 sm:w-28 sm:p-2.5">
                    <svg viewBox="0 0 112 80" className="h-full w-full" aria-hidden>
                      {STEP_VISUALS[i]}
                    </svg>
                  </span>
                </div>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-500">{s.key}</p>
                <h3 className="mt-auto text-xl font-bold sm:text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {s.acts.map((a) => (
                    <span key={a} className="rounded-full bg-neutral-100 px-3 py-1 text-xs">
                      {a}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="absolute bottom-8 flex gap-2">
          {STEPS.map((s, i) => (
            <span
              key={s.key}
              className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-[var(--accent)]" : "w-4 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
