"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// The AI-produced company video isn't made yet. When it's ready, set the two
// paths here and the player replaces the placeholder.
const VIDEO: { src: string; poster: string } | null = null;

export default function CompanyVideo() {
  return VIDEO ? <Player video={VIDEO} /> : <Placeholder />;
}

function Placeholder() {
  return (
    <div className="relative grid aspect-video place-items-center overflow-hidden rounded-3xl bg-ink-950 text-center text-white shadow-lift">
      <Image src="/video/awards-stage-poster.webp" alt="" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover opacity-25 blur-sm" />
      <div className="relative px-8">
        <span className="mx-auto grid size-16 place-items-center rounded-full border-2 border-dashed border-orange-500/70 text-orange-400">
          <svg viewBox="0 0 24 24" className="ml-1 size-6" fill="currentColor" aria-hidden>
            <path d="M7 4.5v15l12-7.5-12-7.5Z" />
          </svg>
        </span>
        <p className="eyebrow mt-5 text-orange-400">Coming soon</p>
        <p className="mt-2 text-2xl font-bold">AV Sense company video</p>
        <p className="mx-auto mt-2 max-w-sm text-sm text-white/70">
          An AI-produced introduction to AV Sense, its team and its work. It will play here once it&apos;s ready.
        </p>
      </div>
    </div>
  );
}

/**
 * Company video that plays muted when scrolled into view and pauses when
 * scrolled away. Browsers only allow muted autoplay, so a "Sound on" button is
 * offered. Once the visitor pauses it themselves, it stays paused. Reduced
 * motion and Save-Data visitors get a manual play button instead.
 */
function Player({ video }: { video: { src: string; poster: string } }) {
  const ref = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const autoPausing = useRef(false);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (!v || reduced || saveData) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!userPaused.current) v.play().catch(() => {});
        } else if (!v.paused) {
          autoPausing.current = true;
          v.pause();
        }
      },
      { threshold: [0, 0.5] },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl bg-ink-950 shadow-lift">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        preload="none"
        muted={muted}
        loop
        playsInline
        controls={started}
        title="AV Sense company video"
        onPlay={() => {
          setStarted(true);
          userPaused.current = false;
        }}
        onPause={() => {
          // Pauses from scrolling away are not the visitor's choice; any other pause is.
          if (autoPausing.current) autoPausing.current = false;
          else userPaused.current = true;
        }}
        onVolumeChange={(e) => setMuted(e.currentTarget.muted)}
        className="size-full object-cover"
      />

      {!started && (
        <button
          type="button"
          onClick={() => {
            setMuted(false);
            ref.current?.play().catch(() => {});
          }}
          className="group absolute inset-0 grid place-items-center"
        >
          <span className="grid size-20 place-items-center rounded-full bg-orange-500 text-ink-950 shadow-xl transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-1 size-8" fill="currentColor" aria-hidden>
              <path d="M7 4.5v15l12-7.5-12-7.5Z" />
            </svg>
          </span>
          <span className="sr-only">Play the AV Sense company video</span>
        </button>
      )}

      {started && muted && (
        <button
          type="button"
          onClick={() => {
            setMuted(false);
            if (ref.current) ref.current.muted = false;
          }}
          className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink-950/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-ink-950"
        >
          <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            <path d="M3 8v4h3l4 3.5v-11L6 8H3Z" strokeLinejoin="round" />
            <path d="m13.5 7.5 4 5m0-5-4 5" strokeLinecap="round" />
          </svg>
          Sound on
        </button>
      )}
    </div>
  );
}
