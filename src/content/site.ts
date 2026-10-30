// All copy is sourced from the AV Sense company profile (PDF) and Desmond Tee's
// business card. Don't add stats, clients or claims that aren't in those.

export const site = {
  name: "AV Sense",
  legalName: "AV Sense Sdn. Bhd.",
  regNo: "683581-X",
  incorporated: "8 March 2005",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://avsense.com.my",
  address: {
    line1: "No 12, Jalan 2,",
    line2: "Kawasan Perindustrian Lekas 18,",
    line3: "43500 Semenyih, Selangor",
    oneLine: "No 12, Jalan 2, Kawasan Perindustrian Lekas 18, 43500 Semenyih, Selangor",
  },
  // WhatsApp goes to Desmond Tee (VP Production), from his business card.
  whatsapp: "60122347674",
  phones: [
    { label: "Desmond Tee", display: "012-234 7674", tel: "+60122347674" },
    { label: "Office", display: "010-228 3277", tel: "+60102283277" },
  ],
  emails: ["info@avsense.com.my", "desmond@avsense.com.my"],
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/work/", label: "Our work" },
  { href: "/clients/", label: "Our clients" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About us" },
  { href: "/contact/", label: "Contact us" },
];

export type Service = {
  slug: string;
  short: string;
  title: string;
  eyebrow: string;
  summary: string;
  body: string[];
  points: string[];
  images: { src: string; alt: string }[];
};

export const services: Service[] = [
  {
    slug: "event-production",
    short: "Event production",
    title: "Event management & show design",
    eyebrow: "Event management company Malaysia",
    summary:
      "Stage sets, motion graphics and live screen content, designed and delivered by one integrated team.",
    body: [
      "Our design team knows how to use imagery to create the biggest impact at your event. We pull together the technical and creative elements of a show: stage sets, motion graphics and live screen content.",
      "Graphic designers, artists, set designers and industrial designers work alongside our sales and technical teams, so from first concept to delivery you get one integrated service. That means a better use of your budget, and technical and creative solutions that deliver your content with conviction and flair.",
    ],
    points: ["Stage set design", "Motion graphics", "Live screen content", "Concept to delivery"],
    images: [
      { src: "/images/work/stage-dancers.webp", alt: "Dancers on stage in front of a red LED backdrop with moving-head beams" },
      { src: "/images/work/awards-night.webp", alt: "Awards night stage with LED screens and red carpet steps" },
      { src: "/images/work/awards-entrance.webp", alt: "LED entrance arch for an agency dinner and awards presentation" },
    ],
  },
  {
    slug: "led",
    short: "LED walls",
    title: "LED screens & installation",
    eyebrow: "LED installation",
    summary:
      "High-quality LED screen and lighting systems that are easy to control, for any type of space or event.",
    body: [
      "We supply LED screen and lighting systems for any type of space and area. Our systems are high quality, easy to control and centralised, and built to perform in high-demand settings.",
      "Functions, colours, types and levels of output can all be adapted for the event or building, from a training hall to a full ballroom.",
    ],
    points: ["LED wall rental", "Permanent installation", "Centralised control", "Video processing"],
    images: [
      { src: "/images/work/led-wall-1.webp", alt: "Wide LED wall in a training hall showing a studio logo" },
      { src: "/images/work/led-wall-2.webp", alt: "LED wall across the front of a training hall" },
      { src: "/images/work/led-wall-3.webp", alt: "Curved LED wall with colourful graphics above rows of chairs" },
    ],
  },
  {
    slug: "sound-lighting",
    short: "Sound & lighting",
    title: "Sound & lighting systems",
    eyebrow: "Rental, design, supply & installation",
    summary:
      "Sound and lighting for rental, design, supply and installation, from microphones to full stage rigs.",
    body: [
      "AV Sense provides sound and lighting systems for rental, design, supply and installation, for the best audio and visual experience at any type of event. Our team can install the system of your choice.",
      "We carry equipment from local and international brands, and we also rent and manage performance areas and help plan and run music events. Talk to our consultants for system advice or a rental package.",
    ],
    points: [
      "Wired & wireless microphones",
      "Speakers & portable systems",
      "Stage & LED lighting",
      "Conference systems",
    ],
    images: [
      { src: "/images/work/concert-led.webp", alt: "Concert stage with beam lights, LED screens and a projection screen" },
      { src: "/images/work/switcher-console.webp", alt: "Presentation switcher console with two touch screens" },
      { src: "/images/work/e2-front.webp", alt: "Rack-mounted video processor" },
    ],
  },
  {
    slug: "multi-camera",
    short: "Multi-camera & live feed",
    title: "Multi-camera production & live feed",
    eyebrow: "Multi camera production Malaysia",
    summary:
      "Broadcast-quality live feed, from formal international conferences to entertainment shows.",
    body: [
      "For complex multi-camera events we set up a mini production studio on location, where we direct each camera operator by headset.",
      "From the control room we can record each camera on its own for editing in post-production, or have our director and technical director call live camera switches for big-screen coverage, satellite uplinks, web streaming and broadcast. It all depends on what you need, 100% customised.",
    ],
    points: ["On-site control room", "Live switching to screen", "Web streaming", "Iso recording for post"],
    images: [
      { src: "/images/work/control-room.webp", alt: "Operator at a vision mixer in front of a wall of monitors" },
      { src: "/images/work/live-switching.webp", alt: "Live switching desk with monitors showing a ballroom feed" },
      { src: "/images/work/camera-jib.webp", alt: "Camera jib crane" },
      { src: "/images/work/live-control.webp", alt: "Speaker on a confidence monitor with a countdown timer" },
    ],
  },
  {
    slug: "video",
    short: "Video production",
    title: "Video production house & corporate video",
    eyebrow: "Lights, camera, action",
    summary:
      "Corporate and event video, from pre-production and shooting to edit, grading and motion graphics.",
    body: [
      "Production: our crew works with cameras, drones, lighting and audio equipment to capture the visuals and sound that shape your story.",
      "Post-production: our editors go through everything from the shoot, choose the best, and build it around your script and storyboard, with colour grading, motion graphics, music and sound effects.",
    ],
    points: ["Corporate video", "Interviews & green screen", "Drone footage", "Editing & motion graphics"],
    images: [
      { src: "/images/work/greenscreen-interview.webp", alt: "Green-screen interview set with lights and a camera" },
      { src: "/images/work/studio-setup.webp", alt: "Interview being filmed in a hall with studio lights" },
      { src: "/images/work/camera-crew.webp", alt: "Crew preparing a broadcast camera" },
    ],
  },
  {
    slug: "efx",
    short: "Special effects",
    title: "Special effects (Rhythm EFX)",
    eyebrow: "EFX team KL, Malaysia",
    summary:
      "Cold-spark and confetti effects with no gunpowder, designed, installed and run by our EFX team.",
    body: [
      "Our effects use Sparkular machines and a granulated alloy, so there is no gunpowder and no traditional pyrotechnics. You get a dazzling, firework-style display that is completely safe.",
      "Rhythm EFX can design, install and manage your event's special effects, and advise on how to bring a Sparkular system into any event or installation.",
    ],
    points: ["Sparkular cold sparks", "Confetti cannons", "Design & installation", "Run on the night"],
    images: [
      { src: "/images/work/efx-sparkular.webp", alt: "Row of cold-spark fountains firing on a dark stage" },
      { src: "/images/work/efx-confetti.webp", alt: "Confetti falling over an awards stage" },
      { src: "/images/work/efx-machine.webp", alt: "Confetti cannon machine" },
    ],
  },
  {
    slug: "canopy-stage",
    short: "Canopy & stage",
    title: "Canopy & stage rental",
    eyebrow: "Canopy & stage rental KL",
    summary:
      "Stages from small product launches to concerts, and canopies of almost every type across the KL area.",
    body: [
      "We rent stages for everything from a small product launch to a concert. Every stage comes carpeted and can be built to the length and width you need. We also rent platforms, with or without carpet. Tell us your requirements and we'll send you a quote.",
      "We serve corporates and individuals across the KL area with canopies of almost every type, on complete packages at competitive prices.",
    ],
    points: ["Custom-size stages", "Platforms", "Canopies & tents", "Complete packages"],
    images: [
      { src: "/images/work/canopy-1.webp", alt: "Large canopy with draped ceiling and banquet tables" },
      { src: "/images/work/canopy-8.webp", alt: "Hall set with hundreds of covered chairs and stage screens" },
      { src: "/images/work/canopy-7.webp", alt: "Rows of purple-sashed chairs under stage lighting" },
      { src: "/images/work/canopy-3.webp", alt: "White marquee tent with windows at night" },
    ],
  },
];

export const routes = [
  {
    n: "01",
    title: "Rent the gear",
    sub: "Equipment rental",
    image: "/images/work/e2-angle.webp",
    have: "a venue and a crew",
    pitch: "Rent the sound, lighting, LED screens, stages and canopies you need, with installation by our team.",
    steps: ["Tell us the event and venue", "We recommend a package", "Delivery and installation", "Teardown after the show"],
  },
  {
    n: "02",
    title: "We run the tech",
    sub: "Technical production",
    image: "/images/work/live-switching.webp",
    have: "an event plan",
    pitch: "Our crew installs, operates and manages every screen, speaker and camera on the day.",
    steps: ["Technical plan for your venue", "Install and rehearse", "Operate live on the day", "Teardown"],
  },
  {
    n: "03",
    title: "Produce the whole show",
    sub: "Full event production",
    image: "/images/work/stage-dancers.webp",
    have: "an idea or a date",
    pitch: "Concept, stage design, content, AV and video under one team, from first idea to delivery.",
    steps: ["Concept and stage design", "Motion graphics and content", "Full AV, EFX and staging", "Show day and event video"],
  },
];

export const gallery = [
  { src: "/images/work/awards-night.webp", alt: "Awards night stage with red LED backdrop" },
  { src: "/images/work/concert-led.webp", alt: "Concert stage with beam lights" },
  { src: "/images/work/led-wall-3.webp", alt: "Curved LED wall in a training hall" },
  { src: "/images/work/efx-sparkular.webp", alt: "Cold-spark fountains" },
  { src: "/images/work/canopy-8.webp", alt: "Banquet hall set for a large event" },
];

// Logos from Wikimedia Commons / the organisation's own site, in public/images/clients.
export const clients = [
  { name: "Amway", logo: "/images/clients/amway.png" },
  { name: "Herbalife Nutrition", logo: "/images/clients/herbalife.png" },
  { name: "Etiqa Takaful", logo: "/images/clients/etiqa.png" },
  { name: "Angkasa", logo: "/images/clients/angkasa-mark.png" },
];

export const contractorFor = [
  { name: "MARA", full: "Majlis Amanah Rakyat", logo: "/images/clients/mara.png" },
  { name: "MPOB", full: "Malaysian Palm Oil Board", logo: "/images/clients/mpob.png" },
  { name: "UPM", full: "Universiti Putra Malaysia", logo: "/images/clients/upm.png" },
  { name: "RISDA", full: "Rubber Industry Smallholders Development Authority", logo: "/images/clients/risda.png" },
  { name: "BSN", full: "Bank Simpanan Nasional", logo: "/images/clients/bsn.png" },
  { name: "Bank Muamalat", full: "Bank Muamalat Malaysia", logo: "/images/clients/muamalat.png" },
  { name: "UNIMAS", full: "Universiti Malaysia Sarawak", logo: "/images/clients/unimas.png" },
  { name: "MARDI", full: "Malaysian Agricultural Research & Development Institute", logo: "/images/clients/mardi.png" },
  { name: "GMI", full: "German Malaysian Institute", logo: "" },
  { name: "UMP", full: "Universiti Malaysia Pahang", logo: "/images/clients/ump.png" },
  { name: "IIUM", full: "International Islamic University Malaysia", logo: "/images/clients/iium.png" },
  { name: "PERKESO", full: "Pertubuhan Keselamatan Sosial", logo: "/images/clients/perkeso.png" },
  { name: "UPM Holdings", full: "Wholly owned by Universiti Putra Malaysia", logo: "/images/clients/upm.png" },
];

export const team = [
  { name: "Dato' Naza Harun", role: "Chairman", lead: true },
  { name: "Gobindran Krishna Murthy", role: "Project Director", lead: true },
  { name: "Raymond Tee", role: "VP Operations" },
  { name: "Eddie Tee", role: "VP Marketing" },
  { name: "Desmond Tee", role: "VP Production" },
  { name: "Mohd Daus", role: "VP Transportation & Logistics" },
  { name: "Frances Wong", role: "Creative Director" },
  { name: "Sangeetha", role: "Human Resource" },
  { name: "Herbert", role: "Finance" },
  { name: "Kevin", role: "Project Manager" },
  { name: "Anna", role: "Production Manager" },
  { name: "Jane", role: "Editor" },
  { name: "Mohd Farril", role: "Equipment & Facilities" },
  { name: "Nurshikin", role: "Executive Assistant" },
];

// Answers only restate what the company profile says.
export const faqs = [
  {
    q: "Do you only rent equipment, or can you run the whole event?",
    a: "Both. We rent, design, supply and install sound, lighting and LED systems, and our event team can also take a show from first concept to delivery: stage sets, motion graphics, live screen content, AV and video.",
  },
  {
    q: "Can you live stream or broadcast our event?",
    a: "Yes. We set up a mini production studio on location. Our director can call live camera switches for the big screen, web streaming, satellite uplinks and broadcast, or we record each camera separately for editing afterwards.",
  },
  {
    q: "Are your spark effects safe indoors?",
    a: "Our effects use Sparkular machines and a granulated alloy instead of gunpowder or traditional pyrotechnics. Our EFX team designs, installs and runs them, and can advise on using them at your venue.",
  },
  {
    q: "Can the stage be built to our size?",
    a: "Yes. Our stages come carpeted and we adjust the length and width to your requirements, from a small product launch to a concert stage. Platforms are available with or without carpet.",
  },
  {
    q: "Do you provide canopies and tents?",
    a: "Yes. We have almost every type of canopy, and serve corporates and individuals across the KL area on complete packages.",
  },
  {
    q: "Do you make corporate videos outside of events?",
    a: "Yes. Our video production house handles the shoot (cameras, drones, lighting, audio) and post-production (editing, colour grading, motion graphics, music and sound effects).",
  },
];

export const wizard = {
  eventTypes: [
    { value: "Corporate dinner / awards", hint: "Annual dinner, gala, awards night", image: "/images/work/awards-night.webp" },
    { value: "Conference / seminar", hint: "Training, summit, AGM", image: "/images/work/led-wall-1.webp" },
    { value: "Product launch", hint: "Launch, roadshow, exhibition", image: "/images/work/awards-entrance.webp" },
    { value: "Concert / show", hint: "Live performance, festival", image: "/images/work/concert-led.webp" },
    { value: "Wedding / private event", hint: "Wedding, party, celebration", image: "/images/work/stage-dancers.webp" },
    { value: "Not sure yet", hint: "Let's talk it through", image: "/images/work/efx-sparkular.webp" },
  ],
  needs: [
    "LED wall",
    "Sound & lighting",
    "Multi-camera / live stream",
    "Video production",
    "Stage & canopy",
    "Special effects",
    "Full event production",
  ],
  // Photo shown on the brief preview's polaroid when a need is picked.
  needImages: {
    "LED wall": "/images/work/led-wall-2.webp",
    "Sound & lighting": "/images/work/stage-dancers.webp",
    "Multi-camera / live stream": "/images/work/camera-crew.webp",
    "Video production": "/images/work/greenscreen-interview.webp",
    "Stage & canopy": "/images/work/canopy-1.webp",
    "Special effects": "/images/work/efx-confetti.webp",
    "Full event production": "/images/work/control-room.webp",
  } as Record<string, string>,
  guests: ["Under 100", "100 – 300", "300 – 1,000", "1,000+", "Not sure"],
};

// LED screen estimator on the home page. Pricing follows the ledscreens.my
// estimator (Klang Valley, single day): RM 60 per m² of P2.5 LED, plus
// RM 1,400 transport and RM 2,650 crew for the first day, plus a 3ft riser at
// RM 100 per metre of screen width. Swap in AV Sense's own rates when confirmed.
const LED_RATE_PER_SQM = 60;
const LED_BASE = 1400 + 2650;
const LED_RISER_PER_M = 100;
const ledPrice = (w: number, h: number) => w * h * LED_RATE_PER_SQM + LED_BASE + w * LED_RISER_PER_M;

export const ledEstimator = {
  sizes: [
    { w: 3, h: 2, recommended: false },
    { w: 4, h: 2.5, recommended: false },
    { w: 5, h: 3, recommended: true },
    { w: 6, h: 3.5, recommended: false },
    { w: 7, h: 4, recommended: false },
  ].map((z) => ({ ...z, price: ledPrice(z.w, z.h) as number | null })),
  note: "Single-day rental in the Klang Valley. Outside the Klang Valley, extra days and add-ons are quoted on request.",
  // From the "Rent the gear" and "We run the tech" routes above.
  included: ["LED screen panels", "Video processing", "3ft screen riser", "Delivery & installation", "Operator on the day", "Teardown after the show"],
};
