import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import QuoteWizard from "@/components/QuoteWizard";
import ServiceShowcase from "@/components/ServiceShowcase";
import { WhatsAppIcon } from "@/components/WhatsAppFloat";
import { clients, contractorFor, gallery, routes, services, waLink } from "@/content/site";

const years = new Date().getFullYear() - 2005;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <Image
          src="/images/work/stage-dancers.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="kenburns -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
        <div className="container-x flex min-h-[38rem] flex-col justify-center py-20 lg:min-h-[42rem]">
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
          <div className="reveal relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
              <Image src="/images/work/awards-night.webp" alt="Awards night stage with LED screens, beams and a red carpet" fill sizes="(min-width:1024px) 600px, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-lift sm:block">
              <div className="relative aspect-[4/3]">
                <Image src="/images/work/control-room.webp" alt="Live vision mixing in the control room" fill sizes="224px" className="object-cover" />
              </div>
            </div>
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
              <article key={r.n} className="reveal group overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-lift">
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
                  <ol className="mt-3 space-y-2.5 text-sm">
                    {r.steps.map((s, i) => (
                      <li key={s} className="flex items-center gap-3">
                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-mist-100 text-xs font-semibold">{i + 1}</span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote wizard */}
      <section id="brief" className="relative overflow-hidden bg-mist-50 py-16 lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <h2 className="text-3xl font-bold sm:text-4xl">Tell us about your event.</h2>
            <p className="mt-4 max-w-md text-lg text-muted">
              Four quick taps: the event, what you need, guest count and date. It opens WhatsApp with everything filled
              in, and our team replies with options.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-sm">
              {["Takes under a minute", "No brief needed yet", "Change anything later"].map((t) => (
                <li key={t} className="rounded-full border border-line bg-white px-3 py-1.5">
                  <span className="text-orange-600">✓</span> {t}
                </li>
              ))}
            </ul>
            <div className="relative mt-10 hidden aspect-[16/9] max-w-md overflow-hidden rounded-3xl lg:block">
              <Image src="/images/work/efx-sparkular.webp" alt="Cold-spark fountains on stage" fill sizes="450px" className="object-cover" />
            </div>
          </div>
          <div className="reveal">
            <QuoteWizard />
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
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="reveal grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow text-red-brand">Trusted by</p>
              <h2 className="mt-3 text-3xl font-bold">Brands and institutions we've worked with</h2>
              <p className="mt-4 text-muted">
                Registered contractor with the Sennego system for government agencies, universities and banks.
              </p>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {clients.map((c) => (
                  <li key={c} className="grid h-20 place-items-center rounded-2xl bg-ink-950 px-3 text-center text-lg font-bold text-white">
                    {c}
                  </li>
                ))}
              </ul>
              <p className="eyebrow mt-8 text-muted">Registered contractor for</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {contractorFor.map((c) => (
                  <li key={c.name} title={c.full} className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium">
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>
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
