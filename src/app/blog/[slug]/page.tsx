import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { blogAuthor, getPost, posts } from "@/content/blog";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article>
        <header className="bg-mist-50 pt-12 pb-40 lg:pt-16">
          <div className="container-x max-w-4xl">
            <Link href="/blog/" className="text-sm font-semibold underline decoration-orange-500 decoration-2 underline-offset-4 hover:text-red-brand">
              ← All posts
            </Link>
            <h1 className="mt-8 text-4xl leading-[1.05] font-bold text-balance sm:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{post.description}</p>
            <p className="mt-6 text-sm text-muted">
              Published by <span className="font-semibold text-text">{blogAuthor}</span> · <time dateTime={post.date}>{post.date}</time> ·{" "}
              {post.minutes} min read
            </p>
          </div>
        </header>
        <div className="container-x max-w-4xl">
          <div className="relative -mt-32 aspect-[16/9] overflow-hidden rounded-3xl shadow-lift">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width:1024px) 896px, 100vw" className="object-cover" />
          </div>
          <div className="mx-auto max-w-2xl space-y-8 py-14 text-lg leading-relaxed text-muted lg:py-20">
            {post.body.map((b, i) => (
              <div key={i}>
                {b.heading && <h2 className="mb-3 text-2xl font-bold text-text sm:text-3xl">{b.heading}</h2>}
                <p>{b.text}</p>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-6 border-t border-line pt-8">
              <Link href="/contact/" className="btn-primary">
                Get a quote
              </Link>
              <Link href="/blog/" className="text-base font-semibold underline decoration-orange-500 decoration-2 underline-offset-4">
                More guides →
              </Link>
            </div>
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
