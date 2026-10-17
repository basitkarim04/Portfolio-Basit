"use client";

import Image from "next/image";
import { useState } from "react";
import { FULL_NAME, NAV } from "@/lib/data";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* Fixed Clean Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Left: MENU Button */}
          <div className="flex flex-1 items-center justify-start">
            <button
              onClick={() => setMenu(!menu)}
              aria-label={menu ? "Close menu" : "Open menu"}
              className="btn-cta !py-2.5 !px-5 sm:!py-3 sm:!px-6 !text-xs sm:!text-sm"
            >
              <span>{menu ? "Close" : "Menu"}</span>
              <span className="btn-icon">{menu ? "✕" : "↗"}</span>
            </button>
          </div>

          {/* Center: Profile Avatar */}
          <a
            href="#home"
            className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15 bg-black/60 shadow-lg text-lg font-black tracking-tighter text-white backdrop-blur-xl sm:h-12 sm:w-12 transition-transform hover:scale-105"
          >
            <Image src="/icon.png" alt={FULL_NAME} fill sizes="48px" className="object-cover object-top" />
          </a>

          {/* Right: Let's Talk Button */}
          <div className="flex flex-1 items-center justify-end">
            <a
              href="#contact"
              className="btn-cta !py-2.5 !px-5 sm:!py-3 sm:!px-6 !text-xs sm:!text-sm"
            >
              <span>Let&apos;s Talk</span>
              <span className="btn-icon">↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Animated Opening/Closing Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menu
            ? "pointer-events-auto opacity-100 visible"
            : "pointer-events-none opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center gap-6 sm:gap-7">
          {NAV.map(([l, h], i) => (
            <a
              key={h}
              href={h}
              onClick={() => setMenu(false)}
              style={{
                transitionDelay: menu ? `${i * 65 + 100}ms` : `${(NAV.length - 1 - i) * 25}ms`,
              }}
              className={`menu-nav-item text-3xl font-black transition-all duration-500 ease-out sm:text-4xl md:text-5xl ${
                menu ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
