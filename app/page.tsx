"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const NAME = "Eshfaq";
const FULL_NAME = "Eshfaq Ahmad";
const EMAIL = "eshfaqahmad33@gmail.com";
const PHONE = "+92 334 6667631";
const RESUME = "/Eshfaq-Ahmad-Resume.pdf";
const TOOLS = ["Figma", "Framer", "Photoshop", "Illustrator", "Miro", "Claude.ai", "Google Stitch", "Jira", "Slack"];
const NAV = [
  ["About me", "#about"],
  ["Work", "#work"],
  ["Approach", "#approach"],
  ["Resume", "#resume"],
  ["Let's talk", "#contact"],
];
const PROJECTS = [
  ["Secure AI", "Mobile App · UX/UI", "An AI-powered logging app where every entry can carry photo and note proof, making records verifiable and easy to trust."],
  ["GlamBook", "Beauty Booking App · UX/UI", "Search, compare and book the best beauty parlours nearby — a calm, visual booking flow for every beauty need."],
  ["The Rusty Fork", "Hospitality Analytics · Dashboard", "A dark-mode analytics app for restaurants and hotels tracking revenue recovery, occupancy and waitlist success at a glance."],
  ["Personal Safety App", "Mobile App · Safety", "One-tap SOS, live location and quick safety actions designed to be usable under stress."],
  ["Babysitter Hiring App", "Marketplace · Mobile App", "Browse verified babysitters, compare ratings, experience and rates, and book trusted care with confidence."],
  ["FiLL-N", "Jobs Marketplace · UI/UX Mobile App", "Find flexible shifts and hire top talent — set your availability and take control of your schedule."],
  ["Wireless Boat Controller", "IoT · Mobile App", "A mobile controller for boats — set speed limits, switch between manual and auto modes and track live GPS speed from one screen."],
  ["Athlete Sponsorship App", "iOS, Android & Web · Lead UI/UX", "Sponsored deals, affiliate partnerships and gifting campaigns for athletes — designed end to end in 12 weeks."],
  ["Signer", "Mobile App · Product Design", "A focused mobile experience with clean notifications and a distraction-free interface."],
  ["Gig Booking App", "Music & Events · Mobile App", "Musicians post gigs, manage applications, messages and bookings for events — all from one dashboard."],
].map(([name, tags, desc], i) => ({ name, tags, desc, img: i === 6 ? "/projects/boat-controller.jpg" : `/projects/project-${i + 1}.jpg` }));

const STEPS = [
  {
    key: "Map",
    title: "Understand before designing.",
    desc: "I explore the problem, context, users, goals and constraints to define the right direction.",
    acts: ["User Research", "Problem Framing", "Context Analysis", "Defining Goals"],
  },
  {
    key: "Organize",
    title: "Bring structure to complexity.",
    desc: "I turn insights into flows, information architecture and clear priorities.",
    acts: ["Information Architecture", "User Flows", "Sitemaps", "Prioritization"],
  },
  {
    key: "Visualize",
    title: "Make ideas tangible.",
    desc: "From wireframes to high-fidelity UI and prototypes, ideas become something people can feel.",
    acts: ["Wireframing", "UI Design", "Prototyping", "Design Systems"],
  },
  {
    key: "Evolve",
    title: "Test, learn, refine.",
    desc: "I validate with real users and iterate until the experience truly works.",
    acts: ["User Testing", "Iteration", "Handoff", "Measuring Impact"],
  },
];
const JOURNEY = [
  ["Nov 2024 — Present", "UI/UX Designer", "Slicon Systems", "Designing web and mobile applications from first concept to final UI — wireframes, user flows and high-fidelity Figma designs, accessible design systems, and redesigns that improve usability and navigation across multiple projects."],
  ["Jan 2023 — Nov 2024", "UI/UX Designer", "Avialdo Solutions", "Redesigned web and mobile apps for smoother experiences, built design systems for consistency, applied accessibility best practices, and helped onboard 100+ clients through improved UX."],
  ["Certification", "UI Design", "California Institute of the Arts", "Specialized program in interface craft."],
  ["Certification", "UX Certification", "Memorisely Bootcamps", "Prototyping, design systems, typography and interaction design."],
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    const scan = () =>
      document.querySelectorAll(".reveal:not(.in), .reveal-img:not(.in)").forEach((el) => io.observe(el));
    scan();
    // pick up elements that mount or re-render later (e.g. after hot reload)
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}

function Loader({ done }: { done: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => Math.min(100, v + 4)), 40);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--dark2)] transition-all duration-700 ${done ? "pointer-events-none -translate-y-full" : ""}`}
    >
      <div className="relative text-5xl font-black uppercase tracking-tight md:text-7xl">
        <span className="text-black/60">{NAME}</span>
        <span
          className="absolute inset-0 overflow-hidden whitespace-nowrap text-white"
          style={{ width: `${n}%` }}
        >
          {NAME}
        </span>
      </div>
      <div className="mt-6 text-sm text-white/80">{n}</div>
      <div className="mt-3 h-px w-72 bg-white/15 md:w-[32rem]">
        <div className="h-px bg-white" style={{ width: `${n}%` }} />
      </div>
    </div>
  );
}

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [menu, setMenu] = useState(false);
  useReveal();
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="[overflow-x:clip]">
      <Loader done={loaded} />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center">
          <nav className="hidden w-fit gap-1 rounded-full border border-white/10 bg-black/60 shadow-lg p-1.5 backdrop-blur-xl md:flex">
            {NAV.slice(0, 4).map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenu(!menu)}
            className="w-fit rounded-full border border-white/10 bg-black/60 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl md:hidden"
          >
            {menu ? "Close" : "Menu"}
          </button>
          <a
            href="#home"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/60 text-lg font-black tracking-tighter text-white backdrop-blur-xl"
          >
            EA
          </a>
          <a
            href="#contact"
            className="group flex w-fit items-center gap-3 justify-self-end rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-semibold text-black shadow-lg"
          >
            Let&apos;s Talk
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-xl text-black transition-transform duration-300 group-hover:rotate-90">
              +
            </span>
          </a>
        </div>
      </header>
      {menu && (
        <nav className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-black/95 backdrop-blur md:hidden">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setMenu(false)} className="text-3xl font-black uppercase text-white">
              {l}
            </a>
          ))}
        </nav>
      )}

      {/* Hero */}
      <section id="home" className="relative flex h-[112vh] min-h-[760px] flex-col items-center overflow-hidden bg-[var(--dark)]">
        {/* swirling background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[160vmax] w-[160vmax] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] bg-[repeating-conic-gradient(from_0deg,#0b0b0b_0deg_18deg,#1b1b1b_28deg_40deg,#0b0b0b_52deg_60deg)] opacity-90 blur-2xl" />
          <div className="absolute left-1/2 top-[55%] h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-20 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#070707_85%)]" />
        </div>

        {/* script name on a line */}
        <div className="absolute inset-x-0 top-[38%] flex items-center">
          <div className="h-px flex-1 bg-white/25" />
          <span className="hand px-6 text-4xl text-white md:text-6xl">Product</span>
          <div className="w-[min(520px,64vw)] shrink-0" />
          <span className="hand hidden px-6 text-4xl text-white md:inline md:text-6xl">Designer</span>
          <div className="h-px flex-1 bg-white/25" />
        </div>

        {/* stacked photo cards */}
        <div
          className={`relative z-10 mt-[17vh] h-[42vh] max-h-[400px] w-[min(320px,60vw)] transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
        >
          <div className="absolute inset-0 translate-x-10 rotate-[8deg] overflow-hidden rounded-2xl border border-white/20">
            <Image src="/eshfaq.jpg" alt="" fill sizes="320px" className="scale-110 object-cover object-top opacity-70 blur-md" />
            <div className="absolute inset-0 bg-[var(--dark)]/30" />
          </div>
          <div className="absolute inset-0 -rotate-[6deg] overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/eshfaq.jpg" alt={FULL_NAME} fill priority sizes="320px" className="object-cover object-top" />
          </div>
          <div className="absolute -left-12 -top-6 flex h-24 w-24 items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-[spin_12s_linear_infinite]">
              <defs>
                <path id="badge" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-white text-[8.5px] font-bold uppercase tracking-[0.18em]">
                <textPath href="#badge" textLength="236" lengthAdjust="spacing">Product Designer • Open to work •</textPath>
              </text>
            </svg>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-lg text-black">↗</span>
          </div>
        </div>

        {/* tagline */}
        <p
          className={`relative z-10 mt-6 text-xs font-bold uppercase tracking-[0.35em] text-white/60 transition-all delay-300 duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        >
          Designing for users, built for business.
        </p>

        {/* giant name — letters rise out of masks */}
        <h1
          aria-label={FULL_NAME}
          className="pointer-events-none absolute bottom-[2vh] z-20 flex select-none whitespace-nowrap text-[25vw] font-semibold leading-[0.95] tracking-tighter text-white"
        >
          {NAME.split("").map((ch, i) => {
            const last = i === NAME.length - 1;
            return (
              <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em]">
                <span
                  className={`inline-block transition-transform duration-1000 ease-[cubic-bezier(.2,.8,.2,1)] ${loaded ? "translate-y-0" : "translate-y-[110%]"} ${last ? "pr-[0.06em] font-serif font-normal italic text-[var(--accent)]" : ""}`}
                  style={{ transitionDelay: `${300 + i * 70}ms` }}
                >
                  {ch}
                </span>
              </span>
            );
          })}
        </h1>
      </section>

      <About />

      <Work />

      <Testimonials />

      <Process />

      {/* Journey */}
      <section id="resume" className="bg-[var(--dark)] px-5 py-28 text-white md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal text-6xl font-black uppercase md:text-8xl">My Journey.</h2>
          <div className="mt-16 border-l border-white/20">
            {JOURNEY.map(([y, r, o, d]) => (
              <div key={o} className="reveal relative pb-14 pl-10">
                <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[var(--accent)]" />
                <p className="text-sm tracking-widest text-white/40">{y}</p>
                <h3 className="mt-2 text-2xl font-bold">{r}</h3>
                <p className="text-white/70">{o}</p>
                <p className="mt-2 max-w-lg text-white/50">{d}</p>
              </div>
            ))}
          </div>
          <div className="reveal mb-14">
            <p className="text-xs font-bold tracking-widest text-white/40">TOOLS</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {TOOLS.map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a href={RESUME} download className="inline-block rounded-md border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black">
            Download resume ↓
          </a>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-[#f3f3f3] px-5 py-32 text-center">
        <p className="reveal text-sm font-bold tracking-[0.3em] text-neutral-500">LET’S CREATE SOMETHING MEANINGFUL.</p>
        <h2 className="reveal mt-6 text-7xl font-black uppercase md:text-[10rem] md:leading-none">
          Let&apos;s <span className="text-[var(--accent)]">Talk</span>
        </h2>
        <p className="reveal mx-auto mt-8 max-w-md text-neutral-600">
          Have a project, idea, or a problem to solve? Let&apos;s turn it into a great experience together.
        </p>
        <a href={`mailto:${EMAIL}`} className="reveal mt-10 inline-block rounded-md bg-[var(--accent)] px-10 py-5 text-sm font-bold uppercase tracking-widest text-black hover:brightness-110">
          Start a conversation ↗
        </a>
        <div className="reveal mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold">
          <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent)]">{EMAIL}</a>
          <a href={`tel:${PHONE.replace(/ /g, "")}`} className="hover:text-[var(--accent)]">{PHONE}</a>
          <a href="#" className="hover:text-[var(--accent)]">Behance ↗</a>
          <a href="#" className="hover:text-[var(--accent)]">LinkedIn ↗</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="overflow-hidden bg-[var(--dark2)] px-5 pt-16 text-white md:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6">
          <nav className="flex flex-wrap gap-6">
            {["Home#home", "About#about", "Projects#work", "Approach#approach", "Resume#resume", "Contact#contact"].map((x) => {
              const [l, h] = x.split("#");
              return (
                <a key={h} href={`#${h}`} className="text-xs font-bold uppercase tracking-wider text-white/70 hover:text-white">
                  {l}
                </a>
              );
            })}
          </nav>
          <a href="#home" className="text-xs font-bold uppercase tracking-wider">↑ Back to top</a>
        </div>
        <div className="mt-10 select-none text-center text-[22vw] font-black uppercase leading-[0.8] text-white/90">
          {NAME.slice(0, -1)}<span className="text-[var(--accent)]">{NAME.slice(-1)}</span>
        </div>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 py-6 text-xs text-white/50">
          <span>Designed &amp; built with curiosity.</span>
          <span>© 2026 {FULL_NAME} • All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}

function Work() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = track.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(0.9999, Math.max(0, -r.top / (r.height - window.innerHeight)));
      setActive(Math.floor(p * PROJECTS.length));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + ((i + 0.5) / PROJECTS.length) * (el.offsetHeight - window.innerHeight), behavior: "smooth" });
  };

  return (
    <section id="work" className="bg-[var(--dark2)] px-5 pt-24 text-white md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6">
        <div>
          <span className="pill">Selected work</span>
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            A Few Things I’ve
            <br />
            <span className="text-[var(--accent)]">Designed.</span>
          </h2>
        </div>
        <p className="max-w-xs text-white/60">
          A few projects that show how I approach design: simple, accessible, and purposeful.
        </p>
      </div>

      <div ref={track} style={{ height: `${PROJECTS.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-start pt-24 md:items-center md:pt-0">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            {/* Images */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              {PROJECTS.map((x, i) => (
                <div
                  key={x.name}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
                >
                  <Image src={x.img} alt={x.name} fill sizes="(min-width: 768px) 640px, 100vw" priority={i === 0} className="object-cover" />
                </div>
              ))}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-start">
                <div className="h-[0.9em] overflow-hidden text-7xl font-light leading-[0.9] text-white/30 md:text-8xl">
                  <div className="transition-transform duration-700" style={{ transform: `translateY(-${active * 0.9}em)` }}>
                    {PROJECTS.map((_, i) => (
                      <div key={i} className="h-[0.9em]">{String(i + 1).padStart(2, "0")}</div>
                    ))}
                  </div>
                </div>
                <span className="ml-1 text-sm text-white/50">/{String(PROJECTS.length).padStart(2, "0")}</span>
              </div>
              <div className="mt-6 grid">
                {PROJECTS.map((x, i) => (
                  <div
                    key={x.name}
                    aria-hidden={i !== active}
                    className={`[grid-area:1/1] transition-all duration-500 ${i === active ? "translate-y-0 opacity-100 delay-150" : "pointer-events-none translate-y-4 opacity-0"}`}
                  >
                    <h3 className="text-3xl font-bold leading-tight md:text-5xl">{x.name}</h3>
                    <p className="mt-3 text-sm text-white/50">{x.tags}</p>
                    <p className="mt-6 max-w-sm text-white/70">{x.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-end gap-5">
                <a href="#" className="rounded-md bg-[var(--accent)] text-black px-7 py-4 text-sm font-bold uppercase tracking-widest hover:brightness-110">
                  View case study ↗
                </a>
                <span className="hand text-lg leading-tight text-white/50">Tap to view<br />full case study</span>
              </div>
              <div className="mt-10 flex gap-1.5">
                {PROJECTS.map((x, i) => (
                  <button
                    key={x.name}
                    aria-label={x.name}
                    onClick={() => go(i)}
                    className={`h-1 rounded-full transition-all ${i === active ? "w-10 bg-[var(--accent)]" : "w-4 bg-white/20 hover:bg-white/50"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  ["Client Name", "Founder, Company One", "Working with " + NAME + " transformed our product. Every screen felt intentional, and our users noticed the difference right away.", "from-lime-400 to-green-800"],
  ["Client Name", "Product Manager, Company Two", "Clear thinking, beautiful execution. " + NAME + " turned a messy set of requirements into a simple, scalable design system.", "from-amber-400 to-rose-700"],
  ["Client Name", "Co-Founder, Company Three", "Fast, thoughtful and easy to collaborate with. The research-driven approach helped us make confident product decisions.", "from-emerald-400 to-teal-800"],
  ["Client Name", "CEO, Company Four", "From wireframes to final UI, the attention to detail was outstanding. Our conversion improved after the redesign.", "from-fuchsia-500 to-purple-900"],
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-[var(--light)] px-5 py-28 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.3fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <span className="pill reveal bg-white">Testimonials</span>
          <h2 className="reveal mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Real Stories From
            <br />
            People I&apos;ve
            <br />
            <span className="text-[var(--accent)]">Designed With.</span>
          </h2>
          <p className="reveal mt-6 max-w-sm text-neutral-600">
            Kind words from founders, teams and clients I&apos;ve had the pleasure to work with.
          </p>
        </div>
        <div className="pb-[10vh]">
          {TESTIMONIALS.map(([name, role, quote, color], i) => (
            <div
              key={i}
              className="sticky top-24 mb-[12vh] grid gap-5 rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_-12px_40px_-20px_rgba(0,0,0,0.25)] last:mb-0 sm:grid-cols-[1.3fr_1fr]"
            >
              <div className="flex flex-col p-2">
                <span className="text-lg font-black tracking-tight text-neutral-400">{role.split(", ")[1]}</span>
                <span className="mt-6 text-[var(--accent)]">★★★★★</span>
                <p className="mt-3 text-lg italic leading-snug">“{quote}”</p>
                <div className="mt-auto pt-6">
                  <p className="text-xs text-neutral-500">{role}</p>
                  <p className="mt-1 text-sm font-semibold">{name}</p>
                </div>
              </div>
              <div className="reveal-img relative aspect-[4/5] overflow-hidden rounded-2xl">
                <div className={`flex h-full items-center justify-center bg-gradient-to-br ${color} text-6xl font-black text-white/80`}>
                  {name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div className="absolute inset-0 bg-[var(--accent)] transition-transform delay-150 duration-1000 ease-[cubic-bezier(.7,0,.2,1)] [.in>&]:translate-y-[101%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CARD_TILT = [-8, 6, -4, 9];

function Process() {
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
          className="pointer-events-none absolute inset-x-0 top-[22%] select-none whitespace-nowrap px-5 text-[17vw] font-black leading-none tracking-tighter md:px-10"
          style={{ transform: `translateX(${slide}vw)` }}
        >
          Our <span className="text-[var(--accent)]">Work</span>
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-[52%] select-none whitespace-nowrap px-5 text-right text-[17vw] font-black leading-none tracking-tighter md:px-10"
          style={{ transform: `translateX(${-slide}vw)` }}
        >
          Process
        </div>

        <div className="relative h-[300px] w-[min(440px,86vw)] md:h-[320px]">
          {STEPS.map((s, i) => {
            const t = fly(i);
            const last = i === n - 1;
            return (
              <article
                key={s.key}
                className="absolute inset-0 flex flex-col rounded-3xl bg-white p-7 text-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] will-change-transform"
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
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)] text-xl font-black uppercase text-black">
                    {s.key.slice(0, 2)}
                  </span>
                </div>
                <h3 className="mt-auto text-2xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
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

const VISION = [
  "I design web and mobile products that solve real problems,",
  "improve user experience, and help businesses grow",
  "with interfaces that are clean,",
  "accessible, and scalable.",
];

function About() {
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
        <div className="flex flex-wrap items-center gap-6 border-b border-neutral-300 pb-8">
          <h2 className="text-6xl font-medium tracking-tight md:text-7xl">About</h2>
          <div className="h-14 w-px bg-neutral-300" />
          <p className="text-sm leading-snug text-neutral-600">
            Consistency turns good work
            <br />
            into great work.
          </p>
          <a
            href="#contact"
            className="group ml-auto flex items-center gap-4 rounded-lg bg-[var(--accent)] py-2 pl-5 pr-2 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_var(--accent)]"
          >
            Hire Me
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/20 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="mt-14">
          <div ref={textRef} className="text-3xl font-medium leading-tight tracking-tight md:text-right md:text-[2.1rem] lg:text-[2.4rem]">
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
