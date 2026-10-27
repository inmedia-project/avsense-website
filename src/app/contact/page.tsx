import type { Metadata } from "next";
import QuoteWizard from "@/components/QuoteWizard";
import { WhatsAppIcon } from "@/components/WhatsAppFloat";
import { site, waLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us & Get a Quote",
  description: "Get a quote for LED, sound and lighting, live feed, video, special effects or staging. WhatsApp, call or email AV Sense in Semenyih, Selangor.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const mapQ = encodeURIComponent(site.address.oneLine);
  return (
    <>
      <section className="bg-mist-50 py-16 lg:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="eyebrow text-red-brand">Contact us</p>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Let's plan your event.</h1>
            <p className="mt-5 max-w-md text-lg text-muted">
              Use the quick brief to send us the details on WhatsApp, or reach the team directly.
            </p>

            <div className="mt-10 grid gap-4">
              <a
                href={waLink("Hi AV Sense, I'd like to ask about an event.")}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-soft transition hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-full bg-[#25d366] text-white">
                  <WhatsAppIcon className="size-6" />
                </span>
                <span>
                  <span className="block font-semibold">WhatsApp</span>
                  <span className="text-sm text-muted">{site.phones[0].display} · Desmond Tee, VP Production</span>
                </span>
              </a>
              <div className="grid gap-4 sm:grid-cols-2">
                {site.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="rounded-2xl bg-white p-5 shadow-soft transition hover:shadow-lift">
                    <span className="eyebrow block text-muted">Call · {p.label}</span>
                    <span className="mt-1 block text-lg font-semibold">{p.display}</span>
                  </a>
                ))}
                {site.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="rounded-2xl bg-white p-5 shadow-soft transition hover:shadow-lift">
                    <span className="eyebrow block text-muted">Email</span>
                    <span className="mt-1 block font-semibold break-all">{e}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div id="enquiry">
            <QuoteWizard />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow text-red-brand">Visit us</p>
            <h2 className="mt-3 text-3xl font-bold">Our warehouse & office</h2>
            <address className="mt-5 text-lg leading-relaxed not-italic text-muted">
              {site.legalName}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.line3}
            </address>
            <a href={`https://maps.google.com/?q=${mapQ}`} target="_blank" rel="noopener" className="link-underline mt-6 inline-block font-semibold">
              Open in Google Maps →
            </a>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-3xl border border-line">
            <iframe
              title="AV Sense on Google Maps"
              src={`https://maps.google.com/maps?q=${mapQ}&z=15&output=embed`}
              className="size-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
