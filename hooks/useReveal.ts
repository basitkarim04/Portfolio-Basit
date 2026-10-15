"use client";

import { useEffect } from "react";

export function useReveal() {
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
