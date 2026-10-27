import Image from "next/image";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src="/brand/av-mark.png" alt="" width={992} height={458} className="h-8 w-auto" priority />
      <span className="leading-none">
        <span className={`block text-[1.05rem] font-bold tracking-tight ${dark ? "text-white" : "text-ink-950"}`}>
          AV SENSE
        </span>
        <span className={`block text-[0.6rem] font-medium tracking-[0.2em] ${dark ? "text-white/60" : "text-muted"}`}>
          SDN. BHD.
        </span>
      </span>
    </span>
  );
}
