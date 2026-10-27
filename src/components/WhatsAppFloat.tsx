import { waLink } from "@/content/site";

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm0-21.6A11.8 11.8 0 0 0 1.9 18L.2 24l6.2-1.6A11.8 11.8 0 1 0 12 .2Z" />
    </svg>
  );
}

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi AV Sense, I'd like to ask about an event.")}
      target="_blank"
      rel="noopener"
      className="group fixed right-5 bottom-5 z-30 flex items-center gap-2"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-soft sm:block">Chat with us</span>
      <span className="grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lift transition group-hover:scale-105">
        <WhatsAppIcon className="size-7" />
      </span>
    </a>
  );
}
