import Image from "next/image";
import Link from "next/link";
import { WhatsAppIcon } from "./WhatsAppFloat";
import { waLink } from "@/content/site";

export default function CtaBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-16 text-white lg:py-20">
      <Image src="/images/work/concert-led.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
      <div className="container-x reveal flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Planning an event?</h2>
          <p className="mt-3 text-lg text-white/70">WhatsApp us or send your brief, and we'll put a package together.</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link href="/contact/" className="btn-primary">
            Get a quote
          </Link>
          <a href={waLink("Hi AV Sense, I'd like to ask about an event.")} target="_blank" rel="noopener" className="flex items-center gap-2 text-sm font-semibold hover:text-orange-400">
            <WhatsAppIcon className="size-5 text-[#25d366]" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
