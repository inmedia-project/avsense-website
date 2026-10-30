import type { Metadata } from "next";
import ClientLogos from "@/components/ClientLogos";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { clients, contractorFor } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Clients",
  description:
    "Brands and institutions AV Sense has worked with, and the government agencies, universities and banks it is a registered contractor for under the Sennego system.",
  alternates: { canonical: "/clients/" },
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our clients"
        title="Brands and institutions we've worked with."
        intro="Registered contractor with the Sennego system for government agencies, universities and banks."
        variant="logos"
        logos={[...clients, ...contractorFor.filter((c) => c.logo && c.name !== "UPM Holdings")].map((c) => ({ src: c.logo, alt: c.name }))}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <p className="eyebrow text-red-brand">Trusted by</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Who we&apos;ve worked with</h2>
            </div>
            <div className="flex gap-10">
              {[
                { value: clients.length, label: "brand clients" },
                { value: contractorFor.length, label: "registered contractor bodies" },
              ].map((n) => (
                <div key={n.label}>
                  <p className="text-5xl font-bold">{n.value}</p>
                  <p className="mt-1 text-sm text-muted">{n.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal mt-12">
            <ClientLogos />
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="reveal">
            <p className="eyebrow text-red-brand">Sennego system</p>
            <h2 className="mt-3 text-3xl font-bold">Registered contractor for</h2>
            <p className="mt-4 text-muted">
              We are registered to supply event production and AV services to these agencies, universities and banks.
            </p>
          </div>
          <ul className="reveal grid gap-3 sm:grid-cols-2">
            {contractorFor.map((c) => (
              <li key={c.name} className="rounded-2xl bg-white px-5 py-4 shadow-soft">
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-muted">{c.full}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
