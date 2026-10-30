import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { WhatsAppIcon } from "@/components/WhatsAppFloat";
import { services, waLink } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.summary,
    alternates: { canonical: `/services/${s.slug}/` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const i = services.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const s = services[i];
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow={s.eyebrow}
        title={s.title}
        intro={s.summary}
        image={s.images[0].src}
        image2={s.images[1]?.src}
        badge={{ value: String(i + 1).padStart(2, "0"), label: `of ${services.length} services` }}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <Link href="/services/" className="text-sm font-semibold text-muted hover:text-red-brand">
              ← All services
            </Link>
            <p className="eyebrow mt-6 text-red-brand">
              {String(i + 1).padStart(2, "0")} · {s.short}
            </p>
            {s.body.map((p) => (
              <p key={p.slice(0, 20)} className="mt-5 text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <p className="eyebrow mt-10 text-muted">What&apos;s included</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {s.points.map((pt) => (
                <li key={pt} className="flex items-center gap-3 rounded-2xl border border-line px-4 py-3 font-medium">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-orange-500 text-xs text-ink-950">✓</span>
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/contact/" className="btn-primary">
                Get a quote
              </Link>
              <a
                href={waLink(`Hi AV Sense, I'd like to ask about ${s.short.toLowerCase()}.`)}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-sm font-semibold hover:text-red-brand"
              >
                <WhatsAppIcon className="size-5 text-[#25d366]" /> Ask on WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-3 self-start">
            {s.images.map((img, j) => (
              <div
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl bg-mist-100 ${
                  j === 0 || (s.images.length % 2 === 0 && j === s.images.length - 1) ? "col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={j === 0 ? "(min-width:1024px) 640px, 100vw" : "(min-width:1024px) 320px, 50vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-16 lg:py-20">
        <div className="container-x">
          <h2 className="reveal text-2xl font-bold sm:text-3xl">Book it on its own, or with the rest of the crew</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug} className="reveal">
                <Link
                  href={`/services/${o.slug}/`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-3 transition hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <span className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={o.images[0].src} alt="" fill sizes="80px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block font-semibold group-hover:text-red-brand">{o.short}</span>
                    <span className="mt-1 line-clamp-2 block text-sm text-muted">{o.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
