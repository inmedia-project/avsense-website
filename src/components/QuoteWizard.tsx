"use client";

import { useState } from "react";
import { site, waLink, wizard } from "@/content/site";
import { WhatsAppIcon } from "./WhatsAppFloat";

const steps = ["Event", "Services", "Guests", "Details"];

export default function QuoteWizard() {
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

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-black/5">
      <ol className="flex items-center gap-2 bg-ink-900 px-5 py-4 text-[0.68rem] font-semibold tracking-[0.14em] text-white/50 uppercase sm:px-6">
        {steps.map((s, i) => (
          <li key={s} className="flex flex-1 items-center gap-2 last:flex-none">
            <button
              type="button"
              onClick={() => setStep(i)}
              className={`flex items-center gap-2 ${i === step ? "text-white" : ""}`}
              aria-current={i === step ? "step" : undefined}
            >
              <span
                className={`grid size-6 place-items-center rounded-full text-[0.7rem] ${
                  i === step ? "bg-orange-500 text-ink-950" : done[i] && i < 3 ? "bg-white/20 text-white" : "bg-white/10"
                }`}
              >
                {done[i] && i < 3 && i !== step ? "✓" : i + 1}
              </span>
              <span className="hidden sm:inline">{s}</span>
            </button>
            {i < steps.length - 1 && <span className="h-px flex-1 bg-white/15" />}
          </li>
        ))}
      </ol>

      <div className="min-h-[20rem] p-5 sm:p-6">
        {step === 0 && (
          <fieldset>
            <legend className="mb-4 font-semibold">What kind of event is it?</legend>
            <div className="grid grid-cols-2 gap-3">
              {wizard.eventTypes.map((t) => (
                <Choice key={t.value} active={eventType === t.value} onClick={() => pick(() => setEventType(t.value))}>
                  <span className="block font-semibold">{t.value}</span>
                  <span className="mt-1 block text-xs text-muted">{t.hint}</span>
                </Choice>
              ))}
            </div>
          </fieldset>
        )}

        {step === 1 && (
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
                    {on ? "✓ " : "+ "}
                    {n}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              disabled={!needs.length}
              onClick={() => setStep(2)}
              className="mt-6 text-sm font-semibold text-red-brand disabled:text-muted/60"
            >
              Next →
            </button>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="mb-4 font-semibold">Roughly how many guests?</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {wizard.guests.map((g) => (
                <Choice key={g} active={guests === g} onClick={() => pick(() => setGuests(g))}>
                  <span className="block font-semibold">{g}</span>
                </Choice>
              ))}
            </div>
          </fieldset>
        )}

        {step === 3 && (
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
        )}
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
}

function Choice({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-2xl border p-4 text-left text-sm transition ${
        active ? "border-orange-500 bg-orange-100/60 ring-1 ring-orange-500" : "border-line hover:border-ink-600"
      }`}
    >
      {children}
    </button>
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
