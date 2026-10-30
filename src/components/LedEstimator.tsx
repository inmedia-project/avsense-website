"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ledEstimator, waLink } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppFloat";

// Scene is drawn in metres: 12m wide x 6.4m tall, positioned with percentages
// so size changes animate with plain CSS transitions.
const SCENE_W = 12;
const SCENE_H = 6.4;
const STAGE_TOP = 5.9; // metres from the top of the scene
const RISER = 0.9; // 3ft
const x = (m: number) => `${(m / SCENE_W) * 100}%`;
const y = (m: number) => `${(m / SCENE_H) * 100}%`;
// One easing for every moving part, so they arrive together.
const MOVE = "transition-[left,top,width,height] duration-700 ease-[cubic-bezier(.22,1,.36,1)]";

export default function LedEstimator() {
  const sizes = ledEstimator.sizes;
  const [pick, setPick] = useState(sizes.findIndex((s) => s.recommended));
  const s = sizes[pick];
  const area = s.w * s.h;

  const left = (SCENE_W - s.w) / 2;
  const top = STAGE_TOP - RISER - s.h;

  const message = `Hi AV Sense, I'd like a quote for a ${s.w}m x ${s.h}m LED screen (${area}m²).`;

  return (
    <div>
      {/* Stage scene */}
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-ink-950 ring-1 ring-white/10">
        <div className="relative aspect-[12/7] sm:aspect-[12/6.4]">
          {/* Haze glow behind the screen (static, so resizing stays cheap) */}
          <div className="pointer-events-none absolute inset-x-[15%] top-[10%] bottom-[10%] bg-[radial-gradient(closest-side,rgba(247,148,29,.28),transparent)]" />

          {/* Truss + moving-head beams */}
          <div className="absolute inset-x-[6%] top-[5%] h-[3%] rounded-sm bg-[repeating-linear-gradient(60deg,#3a3a43_0_2px,transparent_2px_14px),repeating-linear-gradient(-60deg,#3a3a43_0_2px,transparent_2px_14px)] ring-1 ring-ink-600" />
          {[0.14, 0.3, 0.46, 0.62, 0.78].map((p, i) => (
            <div key={p} className="absolute top-[8%]" style={{ left: `${p * 100 + 3}%` }}>
              <span className="block size-2.5 rounded-full bg-white/80 shadow-[0_0_12px_4px_rgba(255,255,255,.5)]" />
              <span
                className="led-beam absolute will-change-transform top-1 left-1/2 block h-[22rem] w-24 -translate-x-1/2 origin-top bg-gradient-to-b from-white/25 via-orange-200/10 to-transparent [clip-path:polygon(46%_0,54%_0,100%_100%,0_100%)]"
                style={{ animationDelay: `${i * -1.3}s` }}
              />
            </div>
          ))}
          <p className="absolute top-[1.2%] left-1/2 -translate-x-1/2 text-[0.6rem] font-semibold tracking-[0.25em] text-white/35 uppercase sm:text-xs">
            10m stage
          </p>

          {/* Width dimension */}
          <div className={`absolute ${MOVE}`} style={{ left: x(left), width: x(s.w), top: y(top - 0.55) }}>
            <p className="text-center text-xs font-semibold text-white/80 sm:text-sm">{s.w} metres</p>
            <div className="mt-1 h-2 border-x-2 border-white/50">
              <div className="mt-[3px] h-0.5 bg-white/50" />
            </div>
          </div>

          {/* Height dimension */}
          <div
            className={`absolute flex items-center gap-2 ${MOVE}`}
            style={{ left: `calc(${x(left + s.w)} + 0.75rem)`, top: y(top), height: y(s.h) }}
          >
            <div className="h-full w-2 border-y-2 border-white/50">
              <div className="mx-auto h-full w-0.5 bg-white/50" />
            </div>
            <span className="text-xs font-semibold text-white/80 sm:text-sm">{s.h}m</span>
          </div>

          {/* The LED screen */}
          <div
            className={`absolute overflow-hidden rounded-[3px] ring-2 ring-orange-400 ${MOVE}`}
            style={{ left: x(left), top: y(top), width: x(s.w), height: y(s.h) }}
          >
            <div className="led-content absolute inset-0" />
            <div key={pick} className="led-flash absolute inset-0 bg-white opacity-0" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,.35)_0_1px,transparent_1px_4px),repeating-linear-gradient(90deg,rgba(0,0,0,.35)_0_1px,transparent_1px_4px)]" />
            <div className="absolute inset-0 grid place-items-center">
              <p className="text-lg font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,.6)] sm:text-4xl">
                {s.w}m × {s.h}m
              </p>
            </div>
          </div>

          {/* Riser */}
          <div
            className={`absolute grid place-items-center bg-ink-800 text-[0.55rem] font-medium text-white/45 ring-1 ring-white/10 sm:text-xs ${MOVE}`}
            style={{ left: x(left), top: y(STAGE_TOP - RISER), width: x(s.w), height: y(RISER) }}
          >
            LED screen riser · 3ft
          </div>

          {/* Person for scale */}
          <div className="absolute flex flex-col items-center" style={{ left: x(1.5), top: y(STAGE_TOP - 1.7 - 0.35), height: y(1.7 + 0.35) }}>
            <span className="text-[0.55rem] font-semibold text-white/50 sm:text-xs">1.7m</span>
            <svg viewBox="0 0 20 60" className="mt-1 h-full w-auto flex-1 fill-white/40" aria-hidden>
              <circle cx="10" cy="6" r="5.5" />
              <rect x="3.5" y="13" width="13" height="22" rx="4" />
              <rect x="6" y="33" width="3.5" height="27" rx="1.5" />
              <rect x="10.5" y="33" width="3.5" height="27" rx="1.5" />
            </svg>
          </div>

          {/* Speaker stack */}
          <div className="absolute flex flex-col gap-[3%]" style={{ left: x(9.9), top: y(STAGE_TOP - 1.6), width: x(0.7), height: y(1.6) }}>
            {[0, 1].map((k) => (
              <div key={k} className="grid flex-1 place-items-center rounded-sm bg-ink-700 ring-1 ring-white/10">
                <span className="aspect-square w-1/2 rounded-full border-2 border-white/20" />
              </div>
            ))}
          </div>

          {/* Stage deck */}
          <div className="absolute inset-x-[8.3%] bottom-0 bg-gradient-to-b from-ink-700 to-ink-900" style={{ top: y(STAGE_TOP) }} />

          {/* Crowd silhouettes */}
          <div className="absolute inset-x-0 -bottom-3 flex justify-around opacity-90">
            {Array.from({ length: 22 }, (_, i) => (
              <span
                key={i}
                className="block rounded-t-full bg-ink-950"
                style={{ width: `${2.6 + (i % 3) * 0.4}%`, aspectRatio: "1 / 1.25", transform: `translateY(${(i * 7) % 12}px)` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="reveal relative z-10 mx-auto -mt-10 grid max-w-6xl gap-10 rounded-[2rem] bg-white p-6 text-text shadow-lift sm:p-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-muted">Select a size</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {sizes.map((z, i) => {
              const on = i === pick;
              return (
                <button
                  key={`${z.w}x${z.h}`}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setPick(i)}
                  className={`relative flex items-center rounded-2xl px-4 py-4 text-left text-base font-semibold whitespace-nowrap transition sm:px-5 sm:text-lg ${
                    on ? "bg-ink-950 text-white shadow-lift" : "bg-mist-50 text-text/70 hover:-translate-y-0.5 hover:text-text"
                  }`}
                >
                  <span>
                    {z.w}m × {z.h}m
                  </span>
                  {z.recommended && (
                    <span className="absolute -top-2 right-3 rounded-full px-2 py-0.5 text-[0.6rem] font-bold tracking-[0.14em] text-white uppercase shadow-sm bg-orange-500">
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
            <a
              href={waLink("Hi AV Sense, I need a custom-size LED screen. My venue is:")}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between gap-2 rounded-2xl border-2 border-dashed border-line px-4 py-4 text-base font-semibold whitespace-nowrap sm:px-5 sm:text-lg text-text/70 transition hover:border-orange-500 hover:text-text"
            >
              Custom size <span aria-hidden>→</span>
            </a>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="eyebrow text-muted">Your screen</p>
            <p className="mt-2 text-3xl font-bold">
              {s.w}m × {s.h}m
            </p>
            <p className="mt-1 text-muted">
              {area}m² of LED · on a 3ft riser · top edge {(s.h + RISER).toFixed(1)}m off the stage
            </p>
          </div>
        </div>

        <div>
          <div className="rounded-3xl bg-mist-50 p-6">
            <p className="eyebrow text-muted">Estimated price</p>
            {s.price ? (
              <>
                <p className="mt-2 text-5xl font-bold tabular-nums">
                  RM <Price value={s.price} />
                </p>
                <p className="mt-2 text-sm text-muted">{ledEstimator.note}</p>
              </>
            ) : (
              <>
                <p className="mt-2 text-4xl font-bold">Ask for today&apos;s rate</p>
                <p className="mt-2 text-sm text-muted">We reply on WhatsApp with a price for this size.</p>
              </>
            )}
          </div>

          <p className="mt-6 font-semibold">Included with your screen:</p>
          <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {ledEstimator.included.map((item, i) => (
              <li key={item} className="flex items-center gap-2.5 text-muted">
                <span
                  key={`${pick}-${item}`}
                  className="brief-pop grid size-5 shrink-0 place-items-center rounded-full bg-orange-500 text-[0.6rem] text-ink-950"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-4 font-semibold text-white transition hover:bg-ink-800"
          >
            <WhatsAppIcon className="size-5 text-[#25d366]" /> Get this price on WhatsApp
          </a>
          <Link href="/contact/#enquiry" className="mt-3 block text-center text-sm font-medium text-muted hover:text-text">
            Need sound, lighting or a full show too? Build a full brief →
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Counts from the previous price to the new one. */
function Price({ value }: { value: number }) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);
  useEffect(() => {
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min((t - start) / 500, 1);
      setShown(Math.round(a + (value - a) * (1 - (1 - k) ** 3)));
      if (k < 1) raf = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <>{shown.toLocaleString("en-MY")}</>;
}
