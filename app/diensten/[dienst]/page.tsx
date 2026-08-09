import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { hoofdSteden } from "@/lib/cities";
import { site } from "@/lib/site";
import { Breadcrumbs, CallButton, FaqList, H2, Jsonld, PriceTable, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { OfferteKnop } from "@/components/Offerte";

export function generateStaticParams() {
  return services.map((s) => ({ dienst: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ dienst: string }> }): Promise<Metadata> {
  const { dienst } = await params;
  const s = getService(dienst);
  if (!s) return {};
  return {
    title: s.titel,
    description: s.beschrijving,
    alternates: { canonical: `/diensten/${s.slug}` },
  };
}

export default async function DienstPagina({ params }: { params: Promise<{ dienst: string }> }) {
  const { dienst } = await params;
  const s = getService(dienst);
  if (!s) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.naam,
      serviceType: s.naam,
      description: s.beschrijving,
      provider: { "@id": `${site.url}/#organisatie` },
      areaServed: { "@type": "AdministrativeArea", name: "Limburg", containedInPlace: { "@type": "Country", name: "België" } },
      url: `${site.url}/diensten/${s.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({
        "@type": "Question",
        name: f.v,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "Diensten", item: `${site.url}/diensten` },
        { "@type": "ListItem", position: 3, name: s.naam, item: `${site.url}/diensten/${s.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `Zo pakken wij ${s.naam.toLowerCase()} aan`,
      step: s.aanpak.map((a, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: a.stap,
        text: a.uitleg,
      })),
    },
  ];

  return (
    <>
      <Jsonld data={schema} />
      <Section>
        <Breadcrumbs
          items={[
            { naam: "Home", href: "/" },
            { naam: "Diensten", href: "/diensten" },
            { naam: s.naam, href: `/diensten/${s.slug}` },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-nl max-w-none">
            <h1 className="mb-4 text-[1.6rem] font-bold leading-[1.18] tracking-tight text-ink-900 sm:text-[1.95rem]">
              {s.naam} in Limburg
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-ink-800">
              <Link href="/" className="font-semibold text-water-600 underline underline-offset-2">
                Limburg Ontstoppingsdienst 24/7
              </Link>{" "}
              doet {s.naam.toLowerCase()} in alle Limburgse gemeenten, met een richtprijs vooraf en
              camera-controle achteraf.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-ink-800">{s.intro}</p>

            <H2>Wanneer dit aan de orde is</H2>
            <ul>
              {s.wanneer.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>

            <H2>Zo pakken wij het aan</H2>
            <ol className="space-y-4">
              {s.aanpak.map((a, i) => (
                <li key={a.stap} className="rounded-xl border border-water-100 bg-white p-5">
                  <p className="mb-1 font-bold text-ink-900">
                    {i + 1}. {a.stap}
                  </p>
                  <p className="text-[15px] leading-relaxed text-ink-800">{a.uitleg}</p>
                </li>
              ))}
            </ol>

            {s.prijs?.length ? (
              <>
                <H2>Wat het kost</H2>
                <PriceTable
                  kop={["Wat", "Richtprijs"]}
                  rijen={s.prijs.map((p) => [p.noot ? `${p.wat}: ${p.noot}` : p.wat, p.range])}
                  bijschrift="Richtprijzen op basis van gepubliceerde Belgische marktprijzen, stand 2026. Geen vaste tarieven."
                />
              </>
            ) : null}

            <FaqList items={s.faq} />

            <H2>In welke gemeente?</H2>
            <p>
              Wij komen voor {s.naam.toLowerCase()} in heel de provincie. De situatie verschilt wel per gemeente: bodem,
              waterhardheid en rioolbeheerder lopen sterk uiteen.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[15px]">
              {hoofdSteden.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="text-water-600 underline underline-offset-2">
                  {c.naam}
                </Link>
              ))}
              <Link href="/gemeenten" className="font-semibold text-water-600 underline underline-offset-2">
                alle gemeenten
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm compact />
            <div className="mt-4 rounded-2xl border border-water-100 bg-water-50/60 p-5">
              <p className="mb-2 font-bold text-ink-900">Liever meteen bellen?</p>
              <p className="mb-4 text-sm leading-relaxed text-ink-800">
                U krijgt aan de telefoon een realistische richtprijs en een eerlijk antwoord op de vraag of het dringend
                is.
              </p>
              <div className="flex flex-wrap gap-2">
                <CallButton klein />
                <OfferteKnop klein />
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
