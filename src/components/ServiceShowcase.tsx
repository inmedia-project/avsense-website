"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/content/site";

const STEP_MS = 7000;

// Dark section: service list on the left, stacked photo cards on the right.
// It steps through the services on its own while on screen, and pauses while
// the visitor hovers or focuses it. Reduced motion turns the autoplay off.
export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  // Hovering a row switches after a short pause, so sweeping the mouse across
  // the list doesn't swap the photos on every row it passes.
  const hoverTo = (i: number) => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(i), 150);
  };
  const s = services[active];
  const playing = visible && !paused;

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % services.length), STEP_MS);
    return () => clearTimeout(t);
  }, [playing, active]);

  return (
    <div
      ref={root}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
    >
      <ul className="border-t border-white/10">
        {services.map((item, i) => {
          const on = i === active;
          return (
            <li key={item.slug} className="relative border-b border-white/10">
              <button
                type="button"
                onMouseEnter={() => hoverTo(i)}
                onMouseLeave={() => clearTimeout(hoverTimer.current)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={on}
                className="flex w-full items-baseline gap-5 py-4 text-left"
              >
                <span className={`w-5 text-xs tabular-nums ${on ? "text-orange-500" : "text-white/40"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-xl font-semibold transition sm:text-2xl ${on ? "translate-x-1 text-white" : "text-white/50"}`}
                >
                  {item.short}
                </span>
              </button>
              {/* Fixed open height, so the list (and the section) doesn't change size as it steps through. */}
              <div className={`overflow-hidden transition-[height] duration-300 ${on ? "h-32 sm:h-28" : "h-0"}`}>
                <div className="pl-10">
                  <p className="max-w-md text-sm leading-relaxed text-white/70">{item.summary}</p>
                  <Link href={`/services/${item.slug}/`} className="mt-3 inline-block text-sm font-semibold text-orange-400 hover:text-orange-500">
                    Learn more →
                  </Link>
                </div>
              </div>
              {on && (
                <span
                  key={`${active}-${playing}`}
                  className={`absolute bottom-[-1px] left-0 h-0.5 bg-orange-500 ${playing ? "showcase-progress" : "w-10"}`}
                  style={{ animationDuration: `${STEP_MS}ms` }}
                />
              )}
            </li>
          );
        })}
      </ul>

      <div className="group relative mx-auto aspect-[4/3] w-full max-w-xl transition-transform duration-500 hover:scale-[1.02]">
        {s.images.slice(0, 3).map((img, i) => (
          <div
            key={`${s.slug}-${i}`}
            className="absolute inset-0 overflow-hidden rounded-2xl bg-ink-800 shadow-lift ring-1 ring-white/10 transition-[transform,opacity] duration-500 will-change-transform"
            style={{
              transform: `translate(${(2 - i) * -18}px, ${(2 - i) * 14}px) rotate(${(2 - i) * -3}deg) scale(${1 - (2 - i) * 0.04})`,
              zIndex: i,
              opacity: i === 2 || s.images.length < 3 ? 1 : 0.55,
            }}
          >
            <Image src={img.src} alt={i === s.images.slice(0, 3).length - 1 ? img.alt : ""} fill sizes="(min-width:1024px) 560px, 90vw" className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.03]" />
          </div>
        ))}
      </div>
    </div>
  );
}
