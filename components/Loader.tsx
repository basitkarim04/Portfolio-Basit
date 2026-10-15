"use client";

import { useEffect, useState } from "react";
import { NAME } from "@/lib/data";

export default function Loader({ done }: { done: boolean }) {
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
