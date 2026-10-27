import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Event Production, LED & Sound Rental in Malaysia | AV Sense",
    template: "%s | AV Sense",
  },
  description:
    "AV Sense Sdn Bhd: event production, LED screens, sound and lighting rental, multi-camera live feed, video production, special effects, and canopy and stage rental in Selangor and KL since 2005.",
  openGraph: {
    type: "website",
    siteName: "AV Sense",
    locale: "en_MY",
    images: ["/images/work/stage-dancers.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/work/stage-dancers.webp`,
  logo: `${site.url}/brand/av-mark.png`,
  email: site.emails[0],
  telephone: site.phones[1].tel,
  foundingDate: "2005-03-08",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 12, Jalan 2, Kawasan Perindustrian Lekas 18",
    postalCode: "43500",
    addressLocality: "Semenyih",
    addressRegion: "Selangor",
    addressCountry: "MY",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrument.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Reveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
