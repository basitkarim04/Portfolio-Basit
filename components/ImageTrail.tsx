"use client";

import { useEffect, useRef } from "react";

// hero cursor trail: drops app screens behind the cursor as it moves
const SCREENS = Array.from({ length: 17 }, (_, i) => `/screens/screen-${i + 1}.png`);

export default function ImageTrail() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const box = ref.current;
    const hero = box?.parentElement;
    if (!box || !hero || matchMedia("(pointer: coarse)").matches) return;
    let last = { x: 0, y: 0 }, idx = 0, z = 1;
    const move = (e: PointerEvent) => {
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      if (Math.hypot(x - last.x, y - last.y) < 90) return;
      last = { x, y };
      const img = document.createElement("img");
      img.src = SCREENS[idx++ % SCREENS.length];
      img.alt = "";
      const rot = Math.random() * 16 - 8;
      img.className = "pointer-events-none absolute w-[150px] rounded-[22px] shadow-2xl";
      Object.assign(img.style, {
        left: `${x}px`, top: `${y}px`, zIndex: String(z++),
        transform: `translate(-50%,-50%) scale(.6) rotate(${rot}deg)`, opacity: "0",
        transition: "transform .5s cubic-bezier(.2,.8,.2,1), opacity .4s",
      });
      box.appendChild(img);
      requestAnimationFrame(() => {
        img.style.opacity = "0.6";
        img.style.transform = `translate(-50%,-50%) scale(1) rotate(${rot}deg)`;
      });
      setTimeout(() => {
        img.style.opacity = "0";
        img.style.transform = `translate(-50%,-30%) scale(.85) rotate(${rot}deg)`;
        setTimeout(() => img.remove(), 500);
      }, 700);
    };
    hero.addEventListener("pointermove", move);
    return () => hero.removeEventListener("pointermove", move);
  }, []);
  return <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" />;
}
