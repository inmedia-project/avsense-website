import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { blogAuthor, posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Event planning and AV guides from AV Sense: LED walls, sound, lighting, cameras and staging.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guides for planning your next event."
        intro="Practical advice on LED walls, sound, lighting, cameras and staging, from the team that runs the show."
        variant="editorial"
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ul className="grid gap-6 sm:grid-cols-2">
            {posts.map((p) => (
              <li key={p.slug} className="reveal">
                <Link
                  href={`/blog/${p.slug}/`}
                  className="group block h-full overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="relative block aspect-[16/10] overflow-hidden bg-mist-100">
                    <Image src={p.image} alt={p.imageAlt} fill sizes="(min-width:1024px) 30vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </span>
                  <span className="block p-6">
                    <span className="text-sm text-muted">
                      By <span className="font-semibold text-text">{blogAuthor}</span> · <time dateTime={p.date}>{p.date}</time> ·{" "}
                      {p.minutes} min read
                    </span>
                    <span className="mt-2 block text-2xl leading-snug font-bold group-hover:underline group-hover:decoration-orange-500 group-hover:decoration-2 group-hover:underline-offset-4">
                      {p.title}
                    </span>
                    <span className="mt-3 block leading-relaxed text-muted">{p.description}</span>
                    <span className="mt-5 inline-block font-semibold underline decoration-orange-500 decoration-2 underline-offset-4">Read the guide →</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <aside className="reveal self-start rounded-3xl bg-mist-50 p-6">
            <h2 className="text-2xl font-bold">Looking for an answer?</h2>
            <p className="mt-2 text-muted">Our FAQ covers setup times, venues, rental vs full production and more.</p>
            <Link href="/#faq" className="mt-4 inline-block font-semibold underline decoration-orange-500 decoration-2 underline-offset-4 hover:text-red-brand">
              Go to the FAQ →
            </Link>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
