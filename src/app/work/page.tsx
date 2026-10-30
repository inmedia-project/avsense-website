import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClientLogos from "@/components/ClientLogos";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { gallery, services } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Awards nights, launches, conferences and concerts: LED walls, sound and lighting, live feed, effects and staging by AV Sense.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Awards nights, launches, conferences and concerts."
        intro="A look at the stages, screens and shows our crew has built and run."
        variant="strip"
        images={[...gallery.map((g) => g.src), ...services.map((s) => s.images[0].src)]}
      />

      {/* Highlights */}
      <section className="bg-ink-900 py-16 text-white lg:py-24">
        <div className="container-x grid gap-4 md:grid-cols-4 md:grid-rows-2">
          {gallery.map((g, i) => (
            <figure
              key={g.src}
              className={`reveal group relative overflow-hidden rounded-2xl ${
                i === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes={i === 0 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 100vw"}
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent p-4 text-sm font-medium opacity-0 transition group-hover:opacity-100">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* By service */}
      {services.map((s, i) => (
        <section key={s.slug} className={`py-14 lg:py-20 ${i % 2 ? "bg-mist-50" : ""}`}>
          <div className="container-x">
            <div className="reveal flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-red-brand">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{s.short}</h2>
              </div>
              <Link href={`/services/${s.slug}/`} className="text-sm font-semibold underline decoration-orange-500 decoration-2 underline-offset-[6px]">
                About this service →
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {s.images.map((img) => (
                <figure key={img.src} className="reveal group relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="reveal max-w-xl">
            <p className="eyebrow text-red-brand">Trusted by</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Brands and institutions we&apos;ve worked with</h2>
          </div>
          <div className="reveal mt-10">
            <ClientLogos />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
