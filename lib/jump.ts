import type { MouseEvent } from "react";

// in-page anchor jump that always lands, even if native smooth scrolling is interrupted
export function jump(e: MouseEvent<HTMLAnchorElement>) {
  const id = e.currentTarget.getAttribute("href")?.slice(1);
  const el = id && document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  history.replaceState(null, "", `#${id}`);
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
}
