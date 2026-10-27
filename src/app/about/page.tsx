import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { clients, contractorFor, site, team } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "AV Sense Sdn Bhd (683581-X), incorporated in 2005: an event production and AV company in Semenyih, Selangor, with design, technical and video teams under one roof.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  const leads = team.filter((t) => t.lead);
  const rest = team.filter((t) => !t.lead);

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We engage the power of imagery to make the biggest impact at your event."
        intro="An event production and AV company in Semenyih, Selangor, incorporated in 2005."
        image="/images/work/awards-night.webp"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal space-y-5 text-lg leading-relaxed text-muted">
            <h2 className="text-3xl font-bold text-text sm:text-4xl">The technical and the creative, under one roof.</h2>
            <p>
              We pull together the technical and creative elements of a show: stage sets, motion graphics and live
              screen content. Our multimedia design team covers graphic designers, artists, set designers and
              industrial designers.
            </p>
            <p>
              They work alongside our sales and technical teams, so from first concept to delivery you get one
              integrated service. That means a better use of your budget, and technical and creative solutions that
              deliver your content with conviction and flair.
            </p>
          </div>
          <div className="reveal grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image src="/images/work/stage-dancers.webp" alt="Performers on stage in front of an LED backdrop" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/work/camera-crew.webp" alt="Crew preparing a broadcast camera" fill sizes="300px" className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/work/led-wall-2.webp" alt="LED wall installed in a training hall" fill sizes="300px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-ink-950 py-16 text-white lg:py-24">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <p className="eyebrow text-orange-400">Our team</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The people behind the show</h2>
          </div>
          <ul className="reveal mt-10 grid gap-4 sm:grid-cols-2">
            {leads.map((t) => (
              <li key={t.name} className="rounded-2xl border border-orange-500/40 bg-white/5 p-6">
                <p className="text-xl font-bold">{t.name}</p>
                <p className="mt-1 text-orange-400">{t.role}</p>
              </li>
            ))}
          </ul>
          <ul className="reveal mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {rest.map((t) => (
              <li key={t.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-semibold">{t.name}</p>
                <p className="mt-1 text-sm text-white/60">{t.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="clients" className="py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="reveal">
            <p className="eyebrow text-red-brand">Clients</p>
            <h2 className="mt-3 text-3xl font-bold">Who we've worked with</h2>
          </div>
          <div className="reveal">
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {clients.map((c) => (
                <li key={c} className="grid h-20 place-items-center rounded-2xl bg-ink-950 px-3 text-center text-lg font-bold text-white">
                  {c}
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-10 text-muted">Registered contractor with the Sennego system</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {contractorFor.map((c) => (
                <li key={c.name} className="rounded-xl border border-line px-4 py-3">
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-muted">{c.full}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-14">
        <div className="container-x reveal">
          <dl className="grid gap-6 sm:grid-cols-3">
            {[
              ["Company", site.legalName],
              ["Registration no.", site.regNo],
              ["Incorporated", `${site.incorporated} (Companies Commission of Malaysia)`],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white p-6 shadow-soft">
                <dt className="eyebrow text-muted">{k}</dt>
                <dd className="mt-2 text-lg font-semibold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
