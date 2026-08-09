import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/lib/cities";
import { site } from "@/lib/site";
import { Breadcrumbs, H2, Jsonld, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Ontstopping in heel Limburg — alle gemeenten | Limburg Ontstoppingsdienst",
  description:
    "Overzicht van alle Limburgse gemeenten en kernen waar wij ontstoppen, met per gemeente de rioolbeheerder, de streek en de lokale situatie.",
  alternates: { canonical: "/gemeenten" },
};

export default function GemeentenOverzicht() {
  const perStreek = new Map<string, typeof cities>();
  for (const c of cities) {
    const sleutel = c.rioolbeheerder.startsWith("Fluvius") ? "Fluvius als rioolbeheerder" : `Eigen beheer of Riopact`;
    const lijst = perStreek.get(sleutel) ?? [];
    lijst.push(c);
    perStreek.set(sleutel, lijst);
  }

  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Limburgse gemeenten waar wij ontstoppen",
          itemListElement: cities.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Ontstopping ${c.naam}`,
            url: `${site.url}/${c.slug}`,
          })),
        }}
      />
      <Section>
        <Breadcrumbs
          items={[
            { naam: "Home", href: "/" },
            { naam: "Gemeenten", href: "/gemeenten" },
          ]}
        />
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Ontstopping in heel Limburg: alle gemeenten en kernen
        </h1>
        <p className="mb-3 max-w-3xl leading-relaxed text-ink-800">
          Limburg telt sinds 1 januari 2025 nog 38 gemeenten in plaats van 42, doordat Hasselt met Kortessem fuseerde,
          Bilzen met Hoeselt, Tongeren met Borgloon en Tessenderlo met Ham. Wij maakten een pagina per gemeente én per
          kern die mensen nog steeds apart opzoeken.
        </p>
        <p className="mb-10 max-w-3xl leading-relaxed text-ink-800">
          Elke pagina beschrijft de werkelijke lokale situatie: wie er rioolbeheerder is, welke bodem er onder ligt,
          welke waterlopen er lopen, welke rioleringswerken er bezig zijn en welke problemen daar het vaakst spelen.
        </p>

        <div className="overflow-x-auto rounded-xl border border-water-100">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-water-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-ink-800">Gemeente of kern</th>
                <th className="px-4 py-3 font-semibold text-ink-800">Streek</th>
                <th className="px-4 py-3 font-semibold text-ink-800">Rioolbeheerder</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((c, i) => (
                <tr key={c.slug} className={i % 2 ? "bg-white" : "bg-water-50/40"}>
                  <td className="px-4 py-3">
                    <Link href={`/${c.slug}`} className="font-semibold text-water-600 underline underline-offset-2">
                      Ontstopping {c.naam}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-ink-800">{c.streek}</td>
                  <td className="px-4 py-3 text-ink-800">{c.rioolbeheerder}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <H2>Niet overal is Fluvius de rioolbeheerder</H2>
          <p className="max-w-3xl leading-relaxed text-ink-800">
            In Lommel, Heusden-Zolder, Bilzen-Hoeselt en Wellen beheert het lokaal bestuur zelf de riolering. In As doet
            Riopact dat, een samenwerking tussen De Watergroep en Aquafin, waar de gemeente sinds 1 januari 2023 vennoot
            van is. In de overige gemeenten is het Fluvius. Dat bepaalt bij welk loket u een aansluiting aanvraagt en
            waar u een probleem op openbaar domein meldt.
          </p>
          <p className="mt-4">
            <Link
              href="/kennis/rioolbeheerder-per-gemeente-limburg"
              className="font-semibold text-water-600 underline underline-offset-2"
            >
              Volledig overzicht van de rioolbeheerders in Limburg &rarr;
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
