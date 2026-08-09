import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";
import { Breadcrumbs, Jsonld, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kennisbank riolering en afvoer in Limburg | Limburg Ontstoppingsdienst",
  description:
    "Gidsen over riolering in Vlaanderen en Limburg: prijzen 2026, wie betaalt een verstopping, rioolbeheerder per gemeente, hemelwaterverordening, premies en praktische stappenplannen.",
  alternates: { canonical: "/kennis" },
};

export default function KennisOverzicht() {
  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Kennisbank riolering Limburg",
          itemListElement: articles.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: a.h1,
            url: `${site.url}/kennis/${a.slug}`,
          })),
        }}
      />
      <Section>
        <Breadcrumbs
          items={[
            { naam: "Home", href: "/" },
            { naam: "Kennisbank", href: "/kennis" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Kennisbank: riolering en afvoer in Limburg
        </h1>
        <p className="mb-10 max-w-3xl leading-relaxed text-ink-800">
          Veel afvoerproblemen kosten onnodig geld doordat mensen de verkeerde vraag stellen — of de verkeerde partij
          bellen. Deze gidsen geven concrete cijfers, met de bron erbij, zodat u zelf kunt beslissen.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/kennis/${a.slug}`}
              className="group rounded-xl border border-water-100 bg-white p-6 transition hover:border-water-500 hover:shadow-sm"
            >
              <p className="text-lg font-bold leading-snug text-ink-900 group-hover:text-water-600">{a.h1}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{a.beschrijving}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-ink-700">Bijgewerkt {a.bijgewerkt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
