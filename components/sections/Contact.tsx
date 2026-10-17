import { EMAIL, PHONE, GITHUB, LINKEDIN, NAME } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f3f3f3] px-5 py-32 text-center">
      <p className="reveal text-sm font-bold tracking-[0.3em] text-neutral-500">LET’S BUILD SOMETHING EXCEPTIONAL.</p>
      <h2 className="reveal mt-6 text-7xl font-black uppercase md:text-[10rem] md:leading-none">
        Let&apos;s <span className="text-[var(--accent)]">Talk</span>
      </h2>
      <p className="reveal mx-auto mt-8 max-w-md text-neutral-600">
        Have a project, idea, or an engineering challenge to solve? Let&apos;s build a scalable, high-performance experience together.
      </p>
      <a
        href={`https://wa.me/${PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi ${NAME}, I came across your portfolio and would like to discuss an opportunity.`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="reveal btn-cta mt-10 !py-4 !px-8 sm:!py-4.5 sm:!px-10"
      >
        <span>Start a conversation</span>
        <span className="btn-icon">↗</span>
      </a>
      <div className="reveal mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold">
        <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent)]">{EMAIL}</a>
        <a href={`tel:${PHONE.replace(/ /g, "")}`} className="hover:text-[var(--accent)]">{PHONE}</a>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">GitHub ↗</a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">LinkedIn ↗</a>
      </div>
    </section>
  );
}
