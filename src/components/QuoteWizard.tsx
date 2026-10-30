"use client";

import Image from "next/image";
import { useState } from "react";
import { site, waLink, wizard } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppFloat";

const steps = ["Event", "Services", "Guests", "Details"];

/**
 * Quote brief: the intro and a live preview of the brief on the left, the
 * four-step picker on the right. Every step sits in the same grid cell, so the
 * card keeps the height of the tallest step and doesn't jump between steps.
 */
export default function QuoteWizard({ intro }: { intro?: React.ReactNode }) {
  const [step, setStep] = useState(0);
  const [eventType, setEventType] = useState("");
  const [needs, setNeeds] = useState<string[]>([]);
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [name, setName] = useState("");

  const done = [!!eventType, needs.length > 0, !!guests, true];
  const ready = done.every(Boolean);

  const lines = [
    `Hi AV Sense${name ? `, this is ${name}` : ""}. I'd like a quote for an event.`,
    eventType && `• Event: ${eventType}`,
    needs.length > 0 && `• Need: ${needs.join(", ")}`,
    guests && `• Guests: ${guests}`,
    date && `• Date: ${date}`,
    venue && `• Venue: ${venue}`,
  ].filter(Boolean) as string[];
  const message = lines.join("\n");

  const pick = (fn: () => void) => {
    fn();
    setTimeout(() => setStep((s) => Math.min(s + 1, steps.length - 1)), 180);
  };

  const card = (
    <div className="reveal overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-black/5">
      <ol className="flex items-center gap-2 bg-ink-900 px-5 py-4 text-[0.68rem] font-semibold tracking-[0.14em] text-white/50 uppercase sm:px-6">
        {steps.map((s, i) => {
          const current = i === step;
          const ticked = done[i] && i < 3 && !current;
          return (
            <li key={s} className="flex flex-1 items-center gap-2 last:flex-none">
              <button
                type="button"
                onClick={() => setStep(i)}
                className={`flex items-center gap-2 ${current || ticked ? "text-white" : ""}`}
                aria-current={current ? "step" : undefined}
              >
                <span
                  className={`grid size-6 place-items-center rounded-full text-[0.7rem] transition-colors ${
                    current ? "bg-orange-500 text-ink-950" : ticked ? "bg-emerald-500 text-white" : "bg-white/10"
                  }`}
                >
                  {ticked ? <Tick className="size-3.5" /> : i + 1}
                </span>
                <span className="hidden sm:inline">{s}</span>
              </button>
              {i < steps.length - 1 && (
                <span className={`h-px flex-1 transition-colors ${done[i] ? "bg-emerald-500" : "bg-white/15"}`} />
              )}
            </li>
          );
        })}
      </ol>

      <div className="grid p-5 sm:p-6">
        <Panel active={step === 0}>
          <fieldset>
            <legend className="mb-4 font-semibold">What kind of event is it?</legend>
            <div className="grid grid-cols-2 gap-3">
              {wizard.eventTypes.map((t) => (
                <Choice key={t.value} active={eventType === t.value} onClick={() => pick(() => setEventType(t.value))}>
                  <span className="block pr-6 font-semibold">{t.value}</span>
                  <span className={`mt-1 block text-xs ${eventType === t.value ? "text-white/60" : "text-muted"}`}>
                    {t.hint}
                  </span>
                </Choice>
              ))}
            </div>
          </fieldset>
        </Panel>

        <Panel active={step === 1}>
          <fieldset>
            <legend className="mb-4 font-semibold">
              What do you need? <span className="font-normal text-muted">Pick all that apply.</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {wizard.needs.map((n) => {
                const on = needs.includes(n);
                return (
                  <button
                    key={n}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setNeeds((xs) => (on ? xs.filter((x) => x !== n) : [...xs, n]))}
                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                      on ? "border-ink-950 bg-ink-950 text-white" : "border-line hover:border-ink-600"
                    }`}
                  >
                    {on ? <span className="text-orange-400">✓ </span> : "+ "}
                    {n}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                disabled={!needs.length}
                onClick={() => setStep(2)}
                className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-soft transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:bg-mist-100 disabled:text-muted disabled:shadow-none"
              >
                Next: guest count
                <span aria-hidden className="transition-transform group-enabled:group-hover:translate-x-1">→</span>
              </button>
              <span className="text-sm text-muted">
                {needs.length ? `${needs.length} selected` : "Pick at least one"}
              </span>
            </div>
          </fieldset>
        </Panel>

        <Panel active={step === 2}>
          <fieldset>
            <legend className="mb-4 font-semibold">Roughly how many guests?</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {wizard.guests.map((g) => (
                <Choice key={g} active={guests === g} onClick={() => pick(() => setGuests(g))}>
                  <span className="block text-lg font-bold">{g}</span>
                  {g !== "Not sure" && (
                      <span className={`block text-xs ${guests === g ? "text-white/60" : "text-muted"}`}>guests</span>
                    )}
                </Choice>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted">Rough is fine. You can change it later.</p>
          </fieldset>
        </Panel>

        <Panel active={step === 3}>
          <div className="grid gap-4">
            <p className="font-semibold">
              Almost done. <span className="font-normal text-muted">All optional.</span>
            </p>
            <Field label="Your name" value={name} onChange={setName} placeholder="e.g. Aisyah" />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Event date" value={date} onChange={setDate} placeholder="e.g. 14 March 2027" />
              <Field label="Venue / location" value={venue} onChange={setVenue} placeholder="e.g. hotel ballroom, KL" />
            </div>
          </div>
        </Panel>
      </div>

      <div className="border-t border-line bg-mist-50 p-5 sm:p-6">
        <a
          href={ready ? waLink(message) : undefined}
          target="_blank"
          rel="noopener"
          aria-disabled={!ready}
          onClick={(e) => {
            if (!ready) {
              e.preventDefault();
              setStep(done.findIndex((d) => !d));
            }
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition ${
            ready ? "bg-orange-500 text-ink-950 hover:bg-orange-400" : "bg-orange-500/40 text-ink-950/60"
          }`}
        >
          <WhatsAppIcon /> Send on WhatsApp
        </a>
        <a
          href={`mailto:${site.emails[0]}?subject=${encodeURIComponent("Event quote request")}&body=${encodeURIComponent(message)}`}
          className="mt-3 block text-center text-sm font-medium text-muted hover:text-text"
        >
          Prefer email? Send it to {site.emails[0]} →
        </a>
      </div>
    </div>
  );

  // Without an intro (contact page) it's just the card.
  if (!intro) return card;
  return (
    <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
      <div className="reveal">
        {intro}
        <BriefPreview eventType={eventType} needs={needs} guests={guests} date={date} ready={ready} />
      </div>
      {card}
    </div>
  );
}

/** Live picture of the brief: photo of the event type, a spec card and polaroids of what's picked. */
function BriefPreview({
  eventType,
  needs,
  guests,
  date,
  ready,
}: {
  eventType: string;
  needs: string[];
  guests: string;
  date: string;
  ready: boolean;
}) {
  const event = wizard.eventTypes.find((t) => t.value === eventType);
  const filled = [eventType, needs.length, guests, date].filter(Boolean).length;
  const rows = [
    ["Event", eventType.split(" / ")[0]],
    ["Services", needs.length > 1 ? `${needs[0]} +${needs.length - 1}` : needs[0]],
    ["Guests", guests === "Not sure" ? "Not sure yet" : guests],
    ["Date", date],
  ];

  return (
    <div aria-hidden className="relative mt-12 hidden pt-6 pb-8 pl-6 lg:block">
      {/* Stage photo, changes with the event type */}
      <div className="relative aspect-[4/3] w-[86%] overflow-hidden rounded-3xl bg-ink-950 shadow-lift">
        {wizard.eventTypes.map((t) => (
          <Image
            key={t.value}
            src={t.image}
            alt=""
            fill
            sizes="480px"
            className={`object-cover transition-opacity duration-700 ${
              (event?.image ?? "/images/work/stage-dancers.webp") === t.image && (event ? event === t : true)
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
      </div>

      {/* Round event badge */}
      <div
        key={`badge-${eventType}`}
        className="brief-pop absolute top-0 left-0 grid size-24 -rotate-12 place-items-center rounded-full bg-ink-950 text-center text-white shadow-lift ring-4 ring-white"
      >
        <span className="absolute inset-1.5 rounded-full border-2 border-dashed border-orange-500/70" />
        <span className="px-3">
          <span className="block text-[0.6rem] font-semibold tracking-[0.18em] text-orange-400 uppercase">Event</span>
          <span className="mt-0.5 block text-sm leading-tight font-bold">
            {eventType ? eventType.split(" / ")[0] : "?"}
          </span>
        </span>
      </div>

      {/* Spec card */}
      <div className="absolute top-2 right-0 w-64 rotate-2 overflow-hidden rounded-2xl bg-white shadow-lift ring-1 ring-black/5">
        <div className="flex items-center justify-between bg-ink-900 px-4 py-3 text-[0.65rem] font-semibold tracking-[0.16em] text-white uppercase">
          Event brief <span className="text-white/60">{filled}/4</span>
        </div>
        <dl className="divide-y divide-line px-4 text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex items-center justify-between gap-3 py-2.5">
              <dt className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted uppercase">{k}</dt>
              <dd key={v ?? "-"} className={`truncate font-semibold ${v ? "brief-pop" : "text-muted/60"}`}>
                {v || "—"}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center justify-between border-t border-line bg-mist-50 px-4 py-2.5 text-sm">
          <span className="text-muted">Status</span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
              ready ? "bg-emerald-50 text-emerald-700" : "bg-mist-100 text-muted"
            }`}
          >
            <span className={`size-1.5 rounded-full ${ready ? "bg-emerald-500" : "bg-muted/50"}`} />
            {ready ? "Ready to send" : "Draft"}
          </span>
        </div>
      </div>

      {/* Polaroids of the first two picked services */}
      {needs.slice(0, 2).map((n, i) => (
        <div
          key={n}
          className={`brief-pop absolute w-36 rounded-xl bg-white p-2 pb-3 shadow-lift ${
            i === 0 ? "bottom-16 -left-2 -rotate-6" : "bottom-24 left-36 rotate-3"
          }`}
        >
          <span className="absolute -top-2 left-1/2 h-4 w-12 -translate-x-1/2 rounded-sm bg-orange-400/80" />
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src={wizard.needImages[n]} alt="" fill sizes="140px" className="object-cover" />
          </div>
          <p className="mt-2 truncate text-center text-xs font-semibold">{n}</p>
        </div>
      ))}

      {/* Guest count tag */}
      {guests && (
        <div
          key={guests}
          className="brief-pop absolute bottom-2 left-2 inline-flex -rotate-3 items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 shadow-lift"
        >
          <span className="size-2 rounded-full bg-white" />
          <span className="text-xl font-bold">{guests}</span>
          {guests !== "Not sure" && <span className="text-[0.65rem] font-semibold tracking-[0.14em] uppercase">guests</span>}
        </div>
      )}

      {ready && (
        <div className="brief-stamp absolute right-6 bottom-6 inline-flex -rotate-12 items-center gap-2 rounded-xl border-[3px] border-emerald-600 bg-white/90 px-4 py-1.5 text-lg font-bold tracking-wide text-emerald-600 uppercase">
          <Tick className="size-4" /> Ready to send
        </div>
      )}
    </div>
  );
}

/** Each step stays mounted in the same grid cell; only the active one is visible. */
function Panel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      inert={!active}
      className={`col-start-1 row-start-1 transition-[opacity,transform] duration-300 ${
        active ? "opacity-100" : "pointer-events-none invisible translate-x-3 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`relative rounded-2xl border p-4 text-left text-sm transition ${
        active
          ? "border-ink-950 bg-ink-950 text-white shadow-lift"
          : "border-line hover:-translate-y-0.5 hover:border-ink-600"
      }`}
    >
      {active && (
        <span className="brief-pop absolute top-3 right-3 grid size-5 place-items-center rounded-full bg-orange-500 text-ink-950">
          <Tick className="size-3" />
        </span>
      )}
      {children}
    </button>
  );
}

function Tick({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden>
      <path d="m3 8.5 3.2 3.2L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30"
      />
    </label>
  );
}
