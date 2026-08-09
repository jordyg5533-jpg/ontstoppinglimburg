import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { site } from "@/lib/site";
import { menuServices } from "@/lib/services";
import { hoofdSteden } from "@/lib/cities";
import { Jsonld } from "@/components/ui";
import { Logo, LogoMark } from "@/components/Logo";
import { OfferteProvider, OfferteKnop } from "@/components/Offerte";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.naam} | Riool & afvoer ontstoppen in heel Limburg`,
    template: `%s`,
  },
  description:
    "Verstopte riolering of afvoer in Limburg? Ontstopping, camera-inspectie, septische put en rioolherstel in alle 38 Limburgse gemeenten. Richtprijzen vooraf, dag en nacht bereikbaar.",
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: site.naam,
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.naam }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const organisatieSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organisatie`,
  name: site.naam,
  url: site.url,
  telephone: site.telefoon,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Limburg",
    containedInPlace: { "@type": "Country", name: "België" },
  },
  knowsAbout: [
    "rioolontstopping",
    "camera-inspectie riolering",
    "septische put",
    "hemelwaterverordening",
    "keuring privéwaterafvoer",
    "relining",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.naam,
  inLanguage: "nl-BE",
  publisher: { "@id": `${site.url}/#organisatie` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE">
      <body className="flex min-h-screen flex-col font-sans">
        <OfferteProvider>
        <Jsonld data={[organisatieSchema, websiteSchema]} />

        <header className="sticky top-0 z-40 border-b border-water-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6">
            <Logo />
            <nav className="hidden items-center gap-5 text-sm font-medium text-ink-800 lg:flex">
              <Link href="/diensten" className="hover:text-water-600">
                Diensten
              </Link>
              <Link href="/gemeenten" className="hover:text-water-600">
                Gemeenten
              </Link>
              <Link href="/prijzen" className="hover:text-water-600">
                Prijzen
              </Link>
              <Link href="/kennis" className="hover:text-water-600">
                Kennisbank
              </Link>
            </nav>
            <a
              href={site.telefoonHref}
              className="hidden rounded-lg bg-flame-500 px-4 py-2 text-sm font-semibold text-white hover:bg-flame-600 sm:inline-block"
            >
              <span aria-hidden>&#9742;</span> {site.telefoonLabel}
            </a>
          </div>
        </header>

        <main className="flex-1 pb-20 sm:pb-0">{children}</main>

        <footer className="border-t border-water-100 bg-ink-950 text-white">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-6 md:grid-cols-4">
            <div>
              <div className="mb-3 flex items-center gap-2.5">
                <LogoMark size={34} />
                <p className="text-base font-extrabold leading-tight">{site.naam}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Ontstopping, camera-inspectie en rioolherstel in heel de provincie Limburg. Wij werken vanuit de regio en
                hebben geen vaste baliewerking: u bereikt ons het snelst per telefoon.
              </p>
              <p className="mt-3 text-sm">
                <a href={site.telefoonHref} className="font-semibold text-flame-400 hover:underline">
                  <span aria-hidden>&#9742;</span> {site.telefoonLabel}
                </a>
                <br />
                <OfferteKnop variant="kaal" className="text-white/70 underline-offset-2 hover:underline">
                  of vraag een prijsindicatie via het formulier
                </OfferteKnop>
              </p>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white/60">Diensten</p>
              <ul className="space-y-1.5 text-sm text-white/80">
                {menuServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/diensten/${s.slug}`} className="hover:text-white hover:underline">
                      {s.naam}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white/60">Grootste kernen</p>
              <ul className="space-y-1.5 text-sm text-white/80">
                {hoofdSteden.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/${c.slug}`} className="hover:text-white hover:underline">
                      Ontstopping {c.naam}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/gemeenten" className="font-semibold text-water-400 hover:underline">
                    Alle 41 gemeenten en kernen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white/60">Kennisbank</p>
              <ul className="space-y-1.5 text-sm text-white/80">
                <li>
                  <Link href="/kennis/wat-kost-riool-ontstoppen" className="hover:text-white hover:underline">
                    Wat kost riool ontstoppen?
                  </Link>
                </li>
                <li>
                  <Link href="/kennis/wie-betaalt-verstopte-riolering" className="hover:text-white hover:underline">
                    Wie betaalt een verstopping?
                  </Link>
                </li>
                <li>
                  <Link href="/kennis/rioolbeheerder-per-gemeente-limburg" className="hover:text-white hover:underline">
                    Rioolbeheerder per gemeente
                  </Link>
                </li>
                <li>
                  <Link href="/kennis/premies-riolering-limburg" className="hover:text-white hover:underline">
                    Premies 2026
                  </Link>
                </li>
                <li>
                  <Link href="/kennis" className="font-semibold text-water-400 hover:underline">
                    Alle gidsen
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-white/50 sm:px-6">
              <p>
                &copy; {new Date().getFullYear()} {site.naam}: actief in heel de provincie Limburg.
              </p>
              <nav className="flex flex-wrap gap-4">
                <Link href="/over-ons" className="hover:text-white hover:underline">
                  Over deze dienst
                </Link>
                <Link href="/privacy" className="hover:text-white hover:underline">
                  Privacyverklaring
                </Link>
                <Link href="/prijzen" className="hover:text-white hover:underline">
                  Richtprijzen
                </Link>
              </nav>
            </div>
            <div className="mx-auto w-full max-w-6xl px-5 pb-5 text-xs text-white/40 sm:px-6">
              Alle vermelde bedragen zijn richtprijzen op basis van gepubliceerde marktprijzen, geen vaste tarieven.
            </div>
          </div>
        </footer>

        {/* Sticky mobiele balk */}
        <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-water-100 bg-white p-2 sm:hidden">
          <a
            href={site.telefoonHref}
            className="rounded-lg bg-flame-500 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Bellen
          </a>
          <OfferteKnop className="w-full rounded-lg border-2 border-water-500 px-4 py-3 text-center text-sm font-semibold text-water-600">
            Prijsindicatie
          </OfferteKnop>
        </div>
        </OfferteProvider>
      </body>
    </html>
  );
}
