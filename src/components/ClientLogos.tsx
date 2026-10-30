import Image from "next/image";
import { clients, contractorFor } from "@/content/site";

// Logo wall: brand clients large, then every body AV Sense is a registered
// contractor for. Full-colour logos, no boxes.
export default function ClientLogos() {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
        {clients.map((c) => (
          <li
            key={c.name}
            className="grid h-24 place-items-center px-4 transition hover:-translate-y-0.5"
          >
            <span className="relative block h-16 w-full">
              <Image
                src={c.logo}
                alt={c.name}
                fill
                sizes="200px"
                className="object-contain"
              />
            </span>
          </li>
        ))}
      </ul>

      <p className="eyebrow mt-10 text-muted">Registered contractor for</p>
      <ul className="mt-6 grid grid-cols-3 gap-x-6 gap-y-8 sm:grid-cols-5 lg:grid-cols-7">
        {contractorFor.map((c) => (
          <li
            key={c.name}
            title={c.full}
            className="flex flex-col items-center gap-2 text-center transition hover:-translate-y-0.5"
          >
            <span className="relative grid h-16 w-full place-items-center">
              {c.logo ? (
                <Image
                  src={c.logo}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              ) : (
                <span className="text-xl font-bold tracking-tight">{c.name}</span>
              )}
            </span>
            <span className="text-[0.7rem] font-semibold text-muted">{c.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
