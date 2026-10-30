"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Adds `is-in` to every `.reveal` element once it scrolls into view.
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    const watch = () => document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    watch();
    // Elements rendered later (client components, hot reload) need observing too,
    // otherwise they stay invisible.
    const mo = new MutationObserver(watch);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);
  return null;
}
