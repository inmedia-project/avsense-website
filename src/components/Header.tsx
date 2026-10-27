"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, services } from "@/content/site";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 bg-white transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="AV Sense home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <div className="group relative">
            <Link href="/services/" className="flex items-center gap-1 py-7 hover:text-red-brand">
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden className="transition group-hover:rotate-180">
                <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </Link>
            <div className="invisible absolute top-full left-1/2 w-[34rem] -translate-x-1/2 translate-y-2 rounded-2xl border border-line bg-white p-3 opacity-0 shadow-lift transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/#${s.slug}`}
                    className="rounded-xl px-4 py-3 transition hover:bg-mist-50"
                  >
                    <span className="block font-semibold">{s.short}</span>
                    <span className="mt-0.5 line-clamp-2 block text-xs font-normal text-muted">{s.summary}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {nav.slice(1).map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-red-brand">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact/" className="btn-primary hidden !py-2.5 sm:inline-flex">
            Get a quote
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
              {open ? (
                <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.8" />
              ) : (
                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.8" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 h-0.5 bg-red-brand"
        style={{ width: `${progress * 100}%` }}
      />

      {open && (
        <div id="mobile-nav" className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-white lg:hidden">
          <nav aria-label="Mobile" className="container-x flex flex-col py-6">
            <p className="eyebrow mb-2 text-muted">Services</p>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/#${s.slug}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-lg font-medium"
              >
                {s.short}
              </Link>
            ))}
            <div className="mt-6 flex flex-col">
              {nav.slice(1).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-lg font-semibold"
                >
                  {n.label}
                </Link>
              ))}
            </div>
            <Link href="/contact/" onClick={() => setOpen(false)} className="btn-primary mt-8">
              Get a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
