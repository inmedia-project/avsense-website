import { faqs } from "@/content/site";

export default function Faq() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group py-1">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-mist-50 text-red-brand transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-2xl pb-5 leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
