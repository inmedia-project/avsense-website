"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services } from "@/content/site";

// Dark section: service list on the left, stacked photo cards on the right.
export default function ServiceShowcase() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <ul className="border-t border-white/10">
        {services.map((item, i) => {
          const on = i === active;
          return (
            <li key={item.slug} className="relative border-b border-white/10">
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
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
              <div className={`grid transition-all duration-300 ${on ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden pl-10">
                  <p className="max-w-md text-sm leading-relaxed text-white/70">{item.summary}</p>
                  <Link href={`/services/#${item.slug}`} className="mt-3 inline-block text-sm font-semibold text-orange-400 hover:text-orange-500">
                    Learn more →
                  </Link>
                </div>
              </div>
              {on && <span className="absolute bottom-[-1px] left-0 h-0.5 w-10 bg-orange-500" />}
            </li>
          );
        })}
      </ul>

      <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
        {s.images.slice(0, 3).map((img, i) => (
          <div
            key={`${s.slug}-${i}`}
            className="absolute inset-0 overflow-hidden rounded-2xl bg-ink-800 shadow-lift ring-1 ring-white/10 transition-all duration-500"
            style={{
              transform: `translate(${(2 - i) * -18}px, ${(2 - i) * 14}px) rotate(${(2 - i) * -3}deg) scale(${1 - (2 - i) * 0.04})`,
              zIndex: i,
              opacity: i === 2 || s.images.length < 3 ? 1 : 0.55,
            }}
          >
            <Image src={img.src} alt={i === s.images.slice(0, 3).length - 1 ? img.alt : ""} fill sizes="(min-width:1024px) 560px, 90vw" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
