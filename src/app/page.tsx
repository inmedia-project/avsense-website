import Image from "next/image";
import Link from "next/link";
import ClientLogos from "@/components/ClientLogos";
import CompanyVideo from "@/components/CompanyVideo";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import LedEstimator from "@/components/LedEstimator";
import ServiceShowcase from "@/components/ServiceShowcase";
import { WhatsAppIcon } from "@/components/WhatsAppFloat";
import { contractorFor, gallery, routes, services, waLink } from "@/content/site";

const years = new Date().getFullYear() - 2005;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        {/* Background: poster (server-rendered) + stage-lighting loop (Mixkit free licence). */}
        <Image
          src="/video/hero-stage-lights-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <video
          src="/video/hero-stage-lights.mp4"
          poster="/video/hero-stage-lights-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
        <div className="container-x flex min-h-[calc(88dvh-5rem)] flex-col justify-center py-16 lg:min-h-[calc(100dvh-5rem)] lg:py-20">
          <p className="eyebrow text-orange-400">Event production & AV rental · Semenyih, Selangor</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl">
            Stage, screen and sound for events people remember.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            LED walls, sound and lighting, multi-camera live feed, video, special effects and staging. Designed,
            supplied and run by one team.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href="/contact/" className="btn-primary">
              Get a quote
            </Link>
            <a
              href={waLink("Hi AV Sense, I'd like to ask about an event.")}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 text-sm font-semibold hover:text-orange-400"
            >
              <WhatsAppIcon className="size-5 text-[#25d366]" /> Or chat with us on WhatsApp
            </a>
          </div>
          <div className="mt-14 max-w-2xl border-t border-white/15 pt-5">
            <p className="eyebrow text-white/50">All in-house</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              {services.map((s) => (
                <li key={s.slug} className="flex items-center gap-1.5">
                  <span className="text-orange-500">✓</span> {s.short}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Intro + stats */}
      <section className="bg-mist-50 py-16 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <h2 className="text-3xl font-bold sm:text-4xl">One team from first idea to show day</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Designers, set builders, AV technicians, camera crew and editors under one roof. A better use of your
              budget, and fewer suppliers to manage.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {[
                { label: "Years running", value: years, note: "Incorporated in 2005" },
                { label: "In-house services", value: services.length, note: "From LED to canopies" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="eyebrow text-muted">{s.label}</dt>
                  <dd className="mt-2 text-5xl font-bold text-ink-950">
                    <CountUp to={s.value} />
                    {s.label === "Years running" && "+"}
                  </dd>
                  <dd className="mt-3 border-t-2 border-ink-950/10 pt-3 text-sm text-muted">{s.note}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
              Not sure what you need?{" "}
              <Link href="/contact/" className="link-underline font-semibold text-text">
                Tell us about your event
              </Link>{" "}
              →
            </p>
          </div>
          <div className="reveal">
            <CompanyVideo />
            <p className="mt-4 text-sm text-muted">Every package is quoted for your venue, date and guest count.</p>
          </div>
        </div>
      </section>

      {/* Three ways to work with us */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="reveal max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Rent the gear, or hand us the whole show.</h2>
            <p className="mt-4 text-lg text-muted">Every route ends with a show that runs on time.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {routes.map((r) => (
              <article key={r.n} className="reveal group relative overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={r.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold">{r.n}</span>
                  <div className="absolute bottom-4 left-5 text-white">
                    <h3 className="text-2xl font-bold">{r.title}</h3>
                    <p className="text-sm text-white/70">{r.sub}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm">
                    <span className="eyebrow text-muted">You have</span>{" "}
                    <span className="ml-1 font-semibold underline decoration-orange-500 decoration-2 underline-offset-4">{r.have}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{r.pitch}</p>
                  <p className="eyebrow mt-6 text-muted">What we do</p>
                  {/* On hover the numbers light up one after another (1, 2, 3, 4). */}
                  <ol className="relative mt-3 space-y-2.5 text-sm before:absolute before:top-3 before:bottom-3 before:left-3 before:w-px before:bg-line">
                    {r.steps.map((s, i) => (
                      <li key={s} style={{ "--j": i } as React.CSSProperties} className="route-step relative flex items-center gap-3">
                        <span className="route-step-num relative grid size-6 shrink-0 place-items-center rounded-full bg-mist-100 text-xs font-semibold">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
                {/* Accent line grows along the bottom on hover. */}
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-orange-500 transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LED screen estimator */}
      <section id="led-estimate" className="bg-ink-900 py-16 text-white lg:py-24">
        <div className="container-x">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow text-orange-400">LED screen rental</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-5xl">How big should your LED screen be?</h2>
            <p className="mt-4 text-lg text-white/70">
              Pick a size and see it on stage, next to a person and a speaker stack, before you ask for a quote.
            </p>
          </div>
          <div className="mt-12">
            <LedEstimator />
          </div>
        </div>
      </section>

      {/* Services showcase */}
      <section className="bg-ink-950 py-16 text-white lg:py-24">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-orange-400">What we do</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Seven services, one crew.</h2>
              <p className="mt-3 text-white/60">Book one, or let us run them together.</p>
            </div>
            <Link href="/services/" className="text-sm font-semibold text-white underline decoration-orange-500 decoration-2 underline-offset-[6px]">
              See all services →
            </Link>
          </div>
          <div className="reveal mt-12">
            <ServiceShowcase />
          </div>
        </div>
      </section>

      {/* Work gallery */}
      <section id="work" className="bg-ink-900 py-16 text-white lg:py-24">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <p className="eyebrow text-orange-400">Our work</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Awards nights, launches, conferences and concerts.</h2>
            </div>
            <ul className="flex flex-wrap gap-2 text-sm">
              {["Gala dinners", "Award shows", "Training halls", "Concerts", "Banquets"].map((t) => (
                <li key={t} className="rounded-full border border-white/20 px-4 py-2">{t}</li>
              ))}
            </ul>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-2">
            {gallery.map((g, i) => (
              <figure
                key={g.src}
                className={`reveal group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-[4/3]"
                }`}
              >
                <Image src={g.src} alt={g.alt} fill sizes={i === 0 ? "(min-width:768px) 50vw, 100vw" : "(min-width:768px) 25vw, 100vw"} className="object-cover transition duration-700 group-hover:scale-105" />
              </figure>
            ))}
          </div>

          {/* Numbers + links, all from the company profile */}
          <div className="reveal mt-14 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr]">
            {[
              { value: years, suffix: "+", label: "years of events since 2005" },
              { value: services.length, suffix: "", label: "services run by our own crew" },
              { value: contractorFor.length, suffix: "", label: "agencies, universities and banks we're registered to supply" },
            ].map((n, i) => (
              <div key={n.label} className="stat group" style={{ "--i": i } as React.CSSProperties}>
                <p className="text-5xl font-bold transition-colors group-hover:text-orange-400">
                  <CountUp to={n.value} />
                  {n.suffix}
                </p>
                <span aria-hidden className="stat-bar mt-3 block h-0.5 w-16 origin-left bg-orange-500" />
                <p className="mt-3 max-w-[16rem] text-white/60">{n.label}</p>
              </div>
            ))}
            <div className="flex flex-col items-start gap-4 lg:pt-2">
              <a
                href={waLink("Hi AV Sense, I'd like to see more of your past events.")}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 font-semibold hover:text-orange-400"
              >
                <WhatsAppIcon className="size-5 text-[#25d366]" /> Ask for our portfolio
              </a>
              <Link href="/work/" className="font-semibold underline decoration-orange-500 decoration-2 underline-offset-[6px] hover:text-orange-400">
                See all our work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <p className="eyebrow text-red-brand">Trusted by</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Brands and institutions we&apos;ve worked with</h2>
            </div>
            <p className="max-w-sm text-muted">
              Registered contractor with the Sennego system for government agencies, universities and banks.
            </p>
          </div>
          <div className="reveal mt-10">
            <ClientLogos />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-mist-50 py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="reveal">
            <h2 className="text-3xl font-bold sm:text-4xl">Questions event organisers ask us</h2>
            <Link href="/contact/" className="link-underline mt-6 inline-block text-sm font-semibold">
              Ask us something else →
            </Link>
          </div>
          <div className="reveal">
            <Faq />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
