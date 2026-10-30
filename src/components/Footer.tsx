import Image from "next/image";
import Link from "next/link";
import { clients, contractorFor, services, site, waLink } from "@/content/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-white/70">
      <div className="h-1 bg-gradient-to-r from-red-brand via-orange-500 to-orange-400" />
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.9fr] lg:gap-16 lg:py-20">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Event production, LED, sound and lighting, multi-camera live feed, video, special effects, and canopy and
            stage rental. One team from concept to show day.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-3">
              <Pin />
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(site.address.oneLine)}`}
                target="_blank"
                rel="noopener"
                className="hover:text-white"
              >
                {site.address.oneLine}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.tel} className="flex gap-3">
                <Phone />
                <a href={`tel:${p.tel}`} className="hover:text-white">
                  {p.display} <span className="text-white/40">· {p.label}</span>
                </a>
              </li>
            ))}
            {site.emails.map((e) => (
              <li key={e} className="flex gap-3">
                <Mail />
                <a href={`mailto:${e}`} className="hover:text-white">
                  {e}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterCol title="Company">
              <FooterLink href="/about/">About us</FooterLink>
              <FooterLink href="/about/#team">Our team</FooterLink>
              <FooterLink href="/clients/">Our clients</FooterLink>
              <FooterLink href="/contact/">Contact us</FooterLink>
            </FooterCol>
            <FooterCol title="Services">
              {services.slice(0, 4).map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}/`}>
                  {s.short}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title="More services">
              {services.slice(4).map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}/`}>
                  {s.short}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title="Explore">
              <FooterLink href="/work/">Our work</FooterLink>
              <FooterLink href="/#led-estimate">LED screen sizes</FooterLink>
              <FooterLink href="/blog/">Blog</FooterLink>
              <FooterLink href="/#faq">FAQ</FooterLink>
            </FooterCol>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="eyebrow text-white/40">Trusted by</p>
            <ul className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6">
              {clients.map((c) => (
                <li key={c.name} className="relative h-10 w-28">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    sizes="112px"
                    className="object-contain object-left opacity-60 brightness-0 invert transition hover:opacity-100"
                  />
                </li>
              ))}
              <li>
                <Link href="/clients/" className="text-sm font-semibold text-white/60 hover:text-orange-400">
                  + {contractorFor.length} agencies, universities &amp; banks →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-7 text-sm text-white/50">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/contact/" className="hover:text-white">Get a quote</Link>
            <a href={waLink("Hi AV Sense, I'd like to ask about an event.")} target="_blank" rel="noopener" className="hover:text-white">
              WhatsApp us
            </a>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(site.address.oneLine)}`} target="_blank" rel="noopener" className="hover:text-white">
              Directions to our warehouse
            </a>
          </nav>
          <p>
            © {new Date().getFullYear()} {site.legalName} ({site.regNo}). All rights reserved. · Powered by{" "}
            <a href="https://inmediastudio.com.my" target="_blank" rel="noopener" className="font-semibold text-white/85 hover:text-white">
              Inmedia Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-white/40">{title}</p>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-white">
        {children}
      </Link>
    </li>
  );
}

const ic = "mt-0.5 size-4 shrink-0 text-orange-500";
function Pin() {
  return (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}
function Phone() {
  return (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
function Mail() {
  return (
    <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
