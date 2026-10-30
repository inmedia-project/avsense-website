import Image from "next/image";

type Base = { eyebrow: string; title: string; intro: string };

type Props = Base &
  (
    | // Light, text left, two overlapping photos and a stat chip on the right.
    { variant?: "split"; image: string; image2?: string; badge?: { value: string; label: string } }
    // Dark, text on top, a slowly drifting strip of photos underneath.
    | { variant: "strip"; images: string[] }
    // White, big title, a looping band of logos underneath.
    | { variant: "logos"; logos: { src: string; alt: string }[] }
    // Minimal editorial header with an orange highlight under the last word.
    | { variant: "editorial" }
  );

export default function PageHero(props: Props) {
  const { eyebrow, title, intro } = props;

  if (props.variant === "strip") {
    const loop = [...props.images, ...props.images];
    return (
      <section className="relative overflow-hidden bg-ink-950 pt-16 pb-14 text-white lg:pt-24">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="container-x relative">
          <p className="eyebrow text-orange-400">{eyebrow}</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <h1 className="text-4xl leading-[1.05] font-bold sm:text-6xl">{title}</h1>
            <p className="max-w-md text-lg text-white/70">{intro}</p>
          </div>
        </div>
        <div className="hero-strip mt-12 flex w-max gap-4">
          {loop.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className={`relative w-64 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 sm:w-80 ${
                i % 2 ? "mt-8 aspect-[4/3]" : "aspect-[4/5]"
              }`}
            >
              <Image src={src} alt="" fill priority={i < 4} sizes="320px" className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (props.variant === "logos") {
    const loop = [...props.logos, ...props.logos];
    return (
      <section className="overflow-hidden border-b border-line bg-white pt-16 pb-12 lg:pt-24">
        <div className="container-x text-center">
          <p className="eyebrow text-red-brand">{eyebrow}</p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl leading-[1.05] font-bold sm:text-6xl">{title}</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{intro}</p>
        </div>
        <div className="mt-14 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="hero-strip flex w-max items-center gap-16">
            {loop.map((l, i) => (
              <div key={`${l.src}-${i}`} className="relative h-14 w-36 shrink-0">
                <Image src={l.src} alt={i < props.logos.length ? l.alt : ""} fill sizes="144px" className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (props.variant === "editorial") {
    const words = title.split(" ");
    const last = words.pop();
    return (
      <section className="relative overflow-hidden bg-mist-50 pt-16 pb-14 lg:pt-24 lg:pb-20">
        <span aria-hidden className="pointer-events-none absolute -right-10 -bottom-24 text-[16rem] leading-none font-bold text-ink-950/[0.04] select-none">
          {eyebrow}
        </span>
        <div className="container-x relative">
          <p className="eyebrow text-red-brand">{eyebrow}</p>
          <h1 className="isolate mt-4 max-w-4xl text-4xl leading-[1.05] font-bold sm:text-7xl">
            {words.join(" ")}{" "}
            <span className="relative whitespace-nowrap">
              {last}
              <span aria-hidden className="hero-underline absolute inset-x-0 bottom-1 -z-10 h-4 origin-left bg-orange-400/70 sm:h-5" />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{intro}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-mist-50 py-14 lg:py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow text-red-brand">{eyebrow}</p>
          <h1 className="mt-4 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">{intro}</p>
        </div>
        <div className="relative pb-10 pl-10 sm:pb-12 sm:pl-14">
          <div className="hero-pop relative aspect-[4/3] rotate-2 overflow-hidden rounded-3xl shadow-lift ring-4 ring-white">
            <Image src={props.image} alt="" fill priority sizes="(min-width:1024px) 520px, 90vw" className="object-cover" />
          </div>
          {props.image2 && (
            <div className="hero-pop absolute bottom-0 left-0 aspect-square w-[42%] -rotate-6 overflow-hidden rounded-2xl shadow-lift ring-4 ring-white [animation-delay:150ms]">
              <Image src={props.image2} alt="" fill sizes="220px" className="object-cover" />
            </div>
          )}
          {props.badge && (
            <div className="hero-pop absolute -top-4 right-4 rounded-2xl bg-ink-950 px-5 py-3 text-white shadow-lift [animation-delay:300ms]">
              <p className="text-3xl font-bold text-orange-400">{props.badge.value}</p>
              <p className="text-xs text-white/70">{props.badge.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
