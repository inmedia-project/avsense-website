import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-50" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30" />
      <div className="container-x py-20 lg:py-28">
        <p className="eyebrow text-orange-400">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] font-bold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-xl text-lg text-white/75">{intro}</p>
      </div>
    </section>
  );
}
