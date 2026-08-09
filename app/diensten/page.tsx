import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import { Breadcrumbs, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Diensten: ontstopping, camera-inspectie en rioolherstel | Limburg Ontstoppingsdienst",
  description:
    "Alle diensten van Limburg Ontstoppingsdienst 24/7: riool ontstoppen, wc ontstoppen, camera-inspectie, septische put ledigen, regenwaterput reinigen, hogedrukreiniging en relining.",
  alternates: { canonical: "/diensten" },
};

export default function DienstenOverzicht() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { naam: "Home", href: "/" },
          { naam: "Diensten", href: "/diensten" },
        ]}
      />
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
        Onze diensten in Limburg
      </h1>
      <p className="mb-10 max-w-3xl leading-relaxed text-ink-800">
        Een verstopping is zelden hetzelfde probleem. Een plotse prop vraagt een spiraal, een geleidelijk tragere afvoer
        vraagt hogedruk, en wortels vragen een frees plus herstel van de voeg. Hieronder staat per dienst wat we doen,
        wanneer het aangewezen is en wat het kost.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/diensten/${s.slug}`}
            className="group rounded-xl border border-water-100 bg-white p-6 transition hover:border-water-500 hover:shadow-sm"
          >
            <p className="text-lg font-bold text-ink-900 group-hover:text-water-600">{s.naam}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-700">{s.intro.slice(0, 160)}…</p>
            {s.prijs?.[0] ? (
              <p className="mt-3 text-sm font-semibold text-ink-800">
                Vanaf {s.prijs[0].range.split(" - ")[0]}
              </p>
            ) : null}
          </Link>
        ))}
      </div>
    </Section>
  );
}
