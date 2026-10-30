// Blog posts. General planning advice only: like site.ts, no stats, clients or
// claims that the company profile doesn't back up.

// Shown as "Published by" on the blog list and each post.
export const blogAuthor = "Zachary Lim";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  minutes: number;
  image: string;
  imageAlt: string;
  body: { heading?: string; text: string }[];
};

export const posts: Post[] = [
  {
    slug: "choosing-an-led-wall-for-your-event",
    title: "Choosing an LED wall for your event",
    description: "Room size, viewing distance and content: what to decide before you book an LED screen.",
    date: "2026-10-28",
    minutes: 4,
    image: "/images/work/led-wall-1.webp",
    imageAlt: "Wide LED wall in a training hall",
    body: [
      {
        text: "An LED wall is often the biggest single item in an event's AV budget, and the one guests notice first. A few decisions up front make it much easier to get a quote that fits.",
      },
      {
        heading: "Start with the room",
        text: "Measure the stage width and the ceiling height, and note where the furthest guest will sit. The screen should be wide enough to read from the back row, but leave room for the stage set, speakers and lighting truss around it.",
      },
      {
        heading: "Plan the content, not just the screen",
        text: "Decide early what will play on the wall: slides, video, live camera feed or motion graphics. Live camera feeds need a camera crew and vision mixing; motion graphics need design time before show day. Tell your AV team so the processing and control are set up for it.",
      },
      {
        heading: "Indoor or outdoor",
        text: "Outdoor events need screens bright enough for daylight, plus cover for rain. If you're also booking a canopy or stage, ask for them together so the structure, power and screen are planned as one.",
      },
      {
        heading: "Allow time for setup",
        text: "LED walls are built on site, tested and then programmed. Ask how long setup and rehearsal take and confirm venue access times before you lock the schedule.",
      },
    ],
  },
  {
    slug: "event-av-checklist",
    title: "An AV checklist for corporate events and dinners",
    description: "Sound, lighting, screens, cameras and effects: a checklist to run through before you brief your AV supplier.",
    date: "2026-10-28",
    minutes: 3,
    image: "/images/work/awards-night.webp",
    imageAlt: "Awards night stage with LED screens and red carpet steps",
    body: [
      {
        text: "Whether it's an annual dinner, an awards night or a product launch, the same questions come up every time. Run through this list before you brief your AV supplier and you'll get a clearer quote, faster.",
      },
      {
        heading: "Sound",
        text: "How many speakers and microphones are on stage at once? Is there a live band or just playback? Wireless handheld and lapel mics should be counted per segment, not per event.",
      },
      {
        heading: "Lighting and screens",
        text: "Do you need stage wash, moving heads for walk-ins, or both? Will there be one main LED wall or side screens as well? Send the venue floor plan if you have it.",
      },
      {
        heading: "Cameras and live feed",
        text: "Will speakers be shown live on screen? Is the event being recorded or streamed? Multi-camera setups need a control position, so reserve space for it in the hall.",
      },
      {
        heading: "Special effects and staging",
        text: "Confetti, sparklers and smoke need venue approval. Check the rules before you plan the big moment. Stage height, steps and a canopy for outdoor areas should be confirmed with the venue too.",
      },
      {
        heading: "One supplier or several",
        text: "Each extra supplier adds a handover on show day. Using one team for design, equipment and crew means fewer gaps and one person to call when something changes.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
