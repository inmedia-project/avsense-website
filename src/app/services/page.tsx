import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { services, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Services: LED, Sound & Lighting, Live Feed, Video, EFX, Staging",
  description:
    "Event production, LED screens, sound and lighting rental, multi-camera live feed, video production, cold-spark effects, and canopy and stage rental in KL and Selangor.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your event needs on stage and on screen."
        intro="Book a single service or let one crew run them all together."
        variant="strip"
        images={services.map((s) => s.images[0].src)}
      />

      <nav aria-label="Services" className="sticky top-20 z-30 border-b border-line bg-white/95 backdrop-blur">
        <ul className="container-x flex gap-2 overflow-x-auto py-3 text-sm font-medium whitespace-nowrap">
          {services.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="block rounded-full border border-line px-4 py-2 hover:border-ink-950">
                {s.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`scroll-mt-40 py-16 lg:py-24 ${i % 2 ? "bg-mist-50" : ""}`}>
          <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className={`reveal ${i % 2 ? "lg:order-2" : ""}`}>
              <p className="eyebrow text-red-brand">
                {String(i + 1).padStart(2, "0")} · {s.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                <Link href={`/services/${s.slug}/`} className="hover:text-red-brand">
                  {s.title}
                </Link>
              </h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 20)} className="mt-5 leading-relaxed text-muted">
                  {p}
                </p>
              ))}
              <ul className="mt-7 grid grid-cols-2 gap-3 text-sm font-medium">
                {s.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <span className="text-orange-600">✓</span> {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link href="/contact/" className="btn-primary">
                  Get a quote
                </Link>
                <Link href={`/services/${s.slug}/`} className="link-underline text-sm font-semibold">
                  Full details
                </Link>
                <a
                  href={waLink(`Hi AV Sense, I'd like to ask about ${s.short.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener"
                  className="link-underline text-sm font-semibold"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
            <div className={`reveal grid grid-cols-2 gap-3 ${i % 2 ? "lg:order-1" : ""}`}>
              {s.images.map((img, j) => (
                <div
                  key={img.src}
                  className={`relative overflow-hidden rounded-2xl bg-mist-100 ${j === 0 ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"} ${
                    s.images.length === 2 && j === 1 ? "col-span-2" : ""
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill sizes={j === 0 ? "(min-width:1024px) 600px, 100vw" : "(min-width:1024px) 300px, 50vw"} className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
