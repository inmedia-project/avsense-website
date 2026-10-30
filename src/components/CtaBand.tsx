import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./WhatsAppFloat";
import { site, waLink } from "@/content/site";

export default function CtaBand() {
  const phone = site.phones[0];
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="reveal">
          <h2 className="text-3xl font-bold sm:text-5xl">Planning an event?</h2>
          <p className="mt-4 max-w-lg text-lg text-muted">
            WhatsApp us or send your brief, and we&apos;ll put a package together for your venue and date.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/contact/" className="btn-primary !px-8 !py-4 !text-base">
              Get a quote
            </Link>
            <a
              href={waLink("Hi AV Sense, I'd like to ask about an event.")}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 font-semibold hover:text-red-brand"
            >
              <WhatsAppIcon className="size-5 text-[#25d366]" /> Or chat with us on WhatsApp
            </a>
          </div>
          <a href={`tel:${phone.tel}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold hover:text-red-brand">
            <svg viewBox="0 0 20 20" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M4.5 3h3l1.5 4-2 1.2a9 9 0 0 0 4.8 4.8l1.2-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 2.5 5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
            </svg>
            {phone.display}
          </a>
        </div>
        <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
          <Image
            src="/images/work/awards-entrance.webp"
            alt="LED entrance arch for an agency dinner and awards presentation"
            fill
            sizes="(min-width:1024px) 45vw, 100vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
