import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/lib/cities";
import type { BlockKey, City } from "@/lib/city-types";
import { menuServices } from "@/lib/services";
import { site } from "@/lib/site";
import { Breadcrumbs, CallButton, FaqList, H2, Jsonld, PriceTable, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { RooilijnDiagram } from "@/components/Diagram";
import { HeroAchtergrond } from "@/components/Hero";
import { OfferteKnop } from "@/components/Offerte";

export function generateStaticParams() {
  return cities.map((c) => ({ gemeente: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ gemeente: string }>;
}): Promise<Metadata> {
  const { gemeente } = await params;
  const c = getCity(gemeente);
  if (!c) return {};
  return {
    title: `Ontstopping ${c.naam} | Riool & afvoer 24/7 | Limburg Ontstoppingsdienst`,
    description: `Riool of afvoer verstopt in ${c.naam}? Ontstopping, camera-inspectie en rioolherstel met richtprijs vooraf. ${c.rioolbeheerder.startsWith("Fluvius") ? "Fluvius" : c.rioolbeheerder} beheert hier het openbare net, wij doen alles tot en met uw huisaansluitputje.`,
    alternates: { canonical: `/${c.slug}` },
  };
}

/* ---------- inhoudsblokken ---------- */

function BlokDiensten({ c }: { c: City }) {
  return (
    <div>
      <H2>Wat wij in {c.naam} doen</H2>
      <p className="mb-5 leading-relaxed text-ink-800">
        Wij komen in {c.naam} en de deelgemeenten voor alles wat met afvoer en riolering te maken heeft. De techniek
        kiezen we op basis van wat de camera toont, niet op basis van wat het snelst gaat.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {menuServices.map((s) => (
          <Link
            key={s.slug}
            href={`/diensten/${s.slug}`}
            className="group rounded-xl border border-water-100 bg-white p-4 transition hover:border-water-500"
          >
            <p className="font-bold text-ink-900 group-hover:text-water-600">
              {s.naam} in {c.naam}
            </p>
            <p className="mt-1 text-sm text-ink-700">{s.kort}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function BlokPrijzen({ c }: { c: City }) {
  return (
    <div>
      <H2>Wat kost een ontstopping in {c.naam}?</H2>
      <p className="mb-2 leading-relaxed text-ink-800">
        In {c.naam} gelden dezelfde marktprijzen als in de rest van Limburg. Het uur waarop u belt weegt zwaarder door
        dan de gemeente waar u woont: het verschil tussen een dinsdagochtend en een zondagnacht loopt op tot het dubbele.
      </p>
      <PriceTable
        kop={["Ingreep", "Richtprijs incl. btw"]}
        rijen={[
          ["Standaard ontstopping overdag", "€140 - €200"],
          ["Wc of gootsteen ontstoppen", "€100 - €200"],
          ["Complexe hoofdriolering (1,5 - 3 uur)", "€250 - €400"],
          ["Camera-inspectie", "€80 - €180"],
          ["Septische put ledigen tot 3 m³", "ca. €250"],
          ["Zondag of feestdag", "+100% op de basisprijs"],
        ]}
        bijschrift="Richtprijzen op basis van gepubliceerde Belgische marktprijzen, stand 2026. 6% btw bij woningen ouder dan tien jaar."
      />
      <Link href="/prijzen" className="font-semibold text-water-600 underline underline-offset-2">
        Alle prijzen en toeslagen op een rij &rarr;
      </Link>
    </div>
  );
}

function BlokNetwerk({ c }: { c: City }) {
  return (
    <div>
      <H2>Het rioolnet van {c.naam}</H2>
      <p className="mb-4 leading-relaxed text-ink-800">
        Het openbare rioolnet in {c.naam} wordt beheerd door <strong>{c.rioolbeheerder}</strong>.
        {c.rioolbeheerderNoot ? ` ${c.rioolbeheerderNoot}` : ""} Uw eigen verantwoordelijkheid loopt tot en met het
        huisaansluitputje aan de rooilijn, ook wanneer dat putje op de stoep ligt.
      </p>
      {c.werken ? (
        <>
          <h3 className="mb-1.5 mt-6 text-lg font-bold text-ink-800">Rioleringswerken in {c.naam}</h3>
          <p className="mb-4 leading-relaxed text-ink-800">{c.werken}</p>
        </>
      ) : null}
      {c.statusTool ? (
        <div className="my-5 rounded-xl border border-water-100 bg-water-50/60 p-5">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-water-600">
            Toestand van het net, 31 maart 2026
          </p>
          <ul className="space-y-1 text-[15px] text-ink-800">
            <li>Dekkingsgraad rioolinspectie: {c.statusTool.dekking}%</li>
            <li>Als risicovol geklasseerde leidingen: {c.statusTool.risicovol}%</li>
            {c.statusTool.noot ? <li>{c.statusTool.noot}</li> : null}
          </ul>
          <p className="mt-3 text-xs text-ink-700">Bron: Aquafin StatusTool per gemeente.</p>
        </div>
      ) : null}
      <RooilijnDiagram beheerder={c.rioolbeheerder} />
      <Link
        href="/kennis/rioolbeheerder-per-gemeente-limburg"
        className="font-semibold text-water-600 underline underline-offset-2"
      >
        Wie is de rioolbeheerder in uw gemeente? &rarr;
      </Link>
    </div>
  );
}

function BlokProblemen({ c }: { c: City }) {
  return (
    <div>
      <H2>Wat er in {c.naam} het vaakst misgaat</H2>
      <p className="mb-4 leading-relaxed text-ink-800">{c.probleem}</p>
      <h3 className="mb-1.5 mt-6 text-lg font-bold text-ink-800">De bodem onder {c.naam}</h3>
      <p className="mb-4 leading-relaxed text-ink-800">{c.bodem}</p>
      {c.waterhardheid ? (
        <p className="mb-4 leading-relaxed text-ink-800">
          De waterhardheid ligt in {c.naam} rond {c.waterhardheid} °fH.{" "}
          {c.waterhardheid >= 30
            ? "Dat is hard tot heel hard water: kalk slaat neer op de binnenwand van uw afvoer en vernauwt de buis geleidelijk. Wordt uw afvoer over maanden trager in plaats van plots dicht te gaan, dan is hogedrukreiniging hier vaak effectiever dan een spiraal."
            : "Dat is zacht tot middelhard water. Kalkaanslag speelt hier dus een beperkte rol: verstoppingen komen hier meestal van vet, wortels of ingespoeld materiaal."}
        </p>
      ) : null}
      <h3 className="mb-1.5 mt-6 text-lg font-bold text-ink-800">De woningen in {c.naam}</h3>
      <p className="leading-relaxed text-ink-800">{c.bouwprofiel}</p>
    </div>
  );
}

function BlokWerkwijze({ c }: { c: City }) {
  return (
    <div>
      <H2>Onze werkwijze in {c.naam}</H2>
      <ol className="grid gap-3 sm:grid-cols-2">
        {[
          {
            t: "Huisaansluitputje eerst",
            d: `Wij openen het putje aan de rooilijn. Staat het vol terwijl het niet regent, dan zit de verstopping stroomafwaarts en meldt u dat bij ${c.rioolbeheerder}. Is het leeg, dan zit het bij u.`,
          },
          {
            t: "Techniek naar oorzaak",
            d: "Spiraal bij een lokale prop, hogedruk bij aanslag over langere afstand, frezen bij wortels. Die keuze maken we op basis van wat we vaststellen.",
          },
          {
            t: "Camera na het vrijmaken",
            d: "Zodat u weet of de buis intact is en of dit binnen het jaar terugkomt.",
          },
          {
            t: "Prijs en btw vooraf",
            d: "U hoort de richtprijs en het btw-tarief voor we beginnen. Bij een woning ouder dan tien jaar is dat 6%.",
          },
        ].map((s) => (
          <li key={s.t} className="rounded-xl border border-water-100 bg-white p-4">
            <p className="mb-1 font-bold text-ink-900">{s.t}</p>
            <p className="text-[15px] leading-relaxed text-ink-800">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BlokWetgeving({ c }: { c: City }) {
  return (
    <div>
      <H2>Regels en premies die in {c.naam} gelden</H2>
      <p className="mb-4 leading-relaxed text-ink-800">
        Sinds juli 2011 is een keuring van de privéwaterafvoer verplicht in Vlaanderen. Ze is nodig bij nieuwbouw of
        herbouw, bij een nieuwe of bijkomende huisaansluiting, bij de aanleg van gescheiden riolering in uw straat en na
        vaststelling van een inbreuk. Voor een gewone eengezinswoning kost een keuring 150 tot 250 euro inclusief btw.
      </p>
      <p className="mb-4 leading-relaxed text-ink-800">
        {c.rioolbeheerder.startsWith("Fluvius")
          ? "Omdat Fluvius hier rioolbeheerder is, komt u in aanmerking voor de Fluvius-premies: 500 euro forfaitair voor een gescheiden afvoersysteem, en telkens maximaal 250 euro voor een hemelwaterput met pompinstallatie of een infiltratievoorziening. Let op de aanvraagtermijn: bij een gemeentelijk rioleringsproject is dat zes maanden na afronding van de werken."
          : `Omdat ${c.rioolbeheerder} hier het rioolbeheer doet en niet Fluvius, verlopen aanvragen en eventuele premies via een ander loket. Informeer bij uw gemeente welke subsidies er lokaal gelden voor afkoppeling, een hemelwaterput of een infiltratievoorziening.`}
      </p>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
        <Link href="/diensten/keuring-privewaterafvoer" className="font-semibold text-water-600 underline underline-offset-2">
          Keuring privéwaterafvoer &rarr;
        </Link>
        <Link href="/kennis/premies-riolering-limburg" className="font-semibold text-water-600 underline underline-offset-2">
          Alle premies in 2026 &rarr;
        </Link>
        <Link href="/kennis/hemelwaterverordening-2023" className="font-semibold text-water-600 underline underline-offset-2">
          Hemelwaterverordening &rarr;
        </Link>
      </div>
    </div>
  );
}

function BlokGebied({ c }: { c: City }) {
  return (
    <div>
      <H2>Ons werkgebied rond {c.naam}</H2>
      <p className="mb-4 leading-relaxed text-ink-800">
        {c.naam} telt ongeveer {c.inwoners.toLocaleString("nl-BE")} inwoners ({c.inwonersJaar}) en ligt in {c.streek}.
        {c.deelgemeenten.length
          ? ` Wij komen in het centrum én in de deelgemeenten en gehuchten: ${c.deelgemeenten.join(", ")}.`
          : ""}
      </p>
      <p className="mb-4 leading-relaxed text-ink-800">
        Door {c.naam} lopen {c.waterlopen.join(", ")}. Herkenningspunten in ons werkgebied: {c.landmarks.join(", ")}.
      </p>
      <p className="mb-4 leading-relaxed text-ink-800">
        Werkt u liever met iemand die ook in de buurgemeenten komt? Wij zijn eveneens actief in{" "}
        {c.buurgemeenten.map((b, i) => {
          const buur = cities.find((x) => x.naam.toLowerCase() === b.toLowerCase());
          return (
            <span key={b}>
              {buur ? (
                <Link href={`/${buur.slug}`} className="text-water-600 underline underline-offset-2">
                  {b}
                </Link>
              ) : (
                b
              )}
              {i < c.buurgemeenten.length - 1 ? ", " : "."}
            </span>
          );
        })}
      </p>
    </div>
  );
}

const blokken: Record<BlockKey, (p: { c: City }) => React.ReactElement> = {
  diensten: BlokDiensten,
  prijzen: BlokPrijzen,
  netwerk: BlokNetwerk,
  problemen: BlokProblemen,
  werkwijze: BlokWerkwijze,
  wetgeving: BlokWetgeving,
  gebied: BlokGebied,
};

/* ---------- pagina ---------- */

export default async function GemeentePagina({ params }: { params: Promise<{ gemeente: string }> }) {
  const { gemeente } = await params;
  const c = getCity(gemeente);
  if (!c) notFound();

  const alleFaq = [
    ...c.faq,
    {
      v: `Wie betaalt een verstopping in ${c.naam}: ik of ${c.rioolbeheerder}?`,
      a: `Alles tot en met het huisaansluitputje is voor uw rekening, ook wanneer dat putje op de stoep ligt. Het technisch reglement van Fluvius stelt dat uitdrukkelijk: het onderhoud van de privéwaterafvoer en van de huisaansluiting tot en met het huisaansluitputje valt steeds ten laste van de klant. Pas voorbij dat putje is ${c.rioolbeheerder} aan zet.`,
    },
    {
      v: `Wat kost een ontstopping in ${c.naam}?`,
      a: `Een standaard ontstopping overdag kost 140 tot 200 euro inclusief btw. Een complexe hoofdriolering van anderhalf tot drie uur loopt op tot 250 à 400 euro. 's Avonds komt daar ongeveer 50% bij, op zondag 100% en 's nachts tot 150%. Bij een woning ouder dan tien jaar geldt 6% btw.`,
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Rioolontstopping in ${c.naam}`,
      serviceType: "Rioolontstopping",
      provider: { "@id": `${site.url}/#organisatie` },
      areaServed: {
        "@type": "City",
        name: c.naam,
        addressRegion: "Limburg",
        addressCountry: "BE",
        containsPlace: c.deelgemeenten.map((d) => ({ "@type": "Place", name: d })),
      },
      url: `${site.url}/${c.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: alleFaq.map((f) => ({
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
        { "@type": "ListItem", position: 2, name: "Gemeenten", item: `${site.url}/gemeenten` },
        { "@type": "ListItem", position: 3, name: c.naam, item: `${site.url}/${c.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `Ontstopping in ${c.naam}: rioolbeheer, bodem en veelvoorkomende problemen`,
      about: { "@type": "City", name: c.naam },
      author: { "@id": `${site.url}/#organisatie` },
      publisher: { "@id": `${site.url}/#organisatie` },
      inLanguage: "nl-BE",
      mainEntityOfPage: `${site.url}/${c.slug}`,
    },
  ];

  return (
    <>
      <Jsonld data={schema} />

      <div className="relative isolate overflow-hidden text-white">
        <HeroAchtergrond />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-water-400">
              {c.streek}
            </p>
            <h1 className="text-[1.6rem] font-bold leading-[1.18] tracking-tight sm:text-[1.95rem]">
              Ontstopping in {c.naam}: riool en afvoer vrij, met camera-controle
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{c.uniek}</p>
            <p className="mt-3 max-w-xl leading-relaxed text-white/70">
              Het openbare rioolnet in {c.naam} wordt beheerd door {c.rioolbeheerder}. Wij doen alles aan úw kant: van uw
              woning tot en met het huisaansluitputje aan de rooilijn.
              {c.fusie ? ` ${c.fusie}` : ""}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton />
              <OfferteKnop variant="wit" gemeente={c.naam} />
            </div>
          </div>
          <div id="prijsindicatie" className="lg:pt-2">
            <LeadForm gemeente={c.naam} />
          </div>
        </div>
      </div>

      <Section>
        <Breadcrumbs
          items={[
            { naam: "Home", href: "/" },
            { naam: "Gemeenten", href: "/gemeenten" },
            { naam: c.naam, href: `/${c.slug}` },
          ]}
        />
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-ink-800">
          <Link href="/" className="font-semibold text-water-600 underline underline-offset-2">
            Limburg Ontstoppingsdienst 24/7
          </Link>{" "}
          komt in {c.naam} en de deelgemeenten, dag en nacht. Hieronder leest u wat hier concreet speelt: wie
          het rioolnet beheert, wat de bodem met uw afvoer doet en welke problemen in {c.naam} het vaakst
          terugkomen.
        </p>
        <div className="prose-nl max-w-none space-y-12">
          {c.volgorde.map((key) => {
            const Blok = blokken[key];
            return <Blok key={key} c={c} />;
          })}
          <FaqList items={alleFaq} titel={`Veelgestelde vragen over ontstopping in ${c.naam}`} />
        </div>
      </Section>

      <div className="bg-ink-950">
        <Section className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Verstopping in {c.naam}?</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/75">
            Bel gerust: u krijgt meteen een realistische richtprijs en een eerlijk antwoord op de vraag of het dringend
            is. Kan het wachten tot morgen, dan zeggen we dat.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CallButton />
            <OfferteKnop variant="wit" gemeente={c.naam} />
          </div>
        </Section>
      </div>
    </>
  );
}
