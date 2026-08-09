import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, CallButton, FaqList, H2, Jsonld, PriceTable, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { OfferteKnop } from "@/components/Offerte";

export const metadata: Metadata = {
  title: "Prijzen ontstopping en rioolwerken in Limburg (2026) | Limburg Ontstoppingsdienst",
  description:
    "Volledig prijsoverzicht 2026: ontstopping, nacht- en weekendtoeslagen, camera-inspectie, septische put, regenwaterput, relining en keuring. Met btw-regels en wie wat betaalt.",
  alternates: { canonical: "/prijzen" },
};

const faq = [
  {
    v: "Zijn dit vaste prijzen?",
    a: "Nee. Dit zijn marktprijzen uit gepubliceerde Belgische prijslijsten en prijsgidsen, stand 2026. De uiteindelijke kost hangt af van de aard van de verstopping, de bereikbaarheid van de leiding en het uur waarop u belt. U krijgt bij ons vooraf een richtprijs voor er gestart wordt.",
  },
  {
    v: "Wat is het verschil tussen 6% en 21% btw?",
    a: "Bij een woning ouder dan tien jaar die hoofdzakelijk als privéwoning wordt gebruikt, geldt 6% btw op ontstopping, camera-inspectie, hogedrukreiniging en rioolherstel. Sinds 1 juli 2022 volstaat een gespecificeerde vermelding op de factuur; er is geen apart attest meer nodig. Bij woningen jonger dan tien jaar en niet-residentiële panden is het 21%.",
  },
  {
    v: "Waarom is het ledigen van een septische put soms aan 21%?",
    a: "Omdat sommige aannemers dat behandelen als een ophaal- en verwerkingsdienst in plaats van als onderhoudswerk aan een onroerend goed. In dat geval geldt 21% ook bij een oudere woning, terwijl een ontstopping in datzelfde huis wel aan 6% kan. Vraag dit vooraf na zodat u niet verrast wordt.",
  },
  {
    v: "Wat kost een nieuwe rioolaansluiting?",
    a: "Het Fluvius-tarief voor de eerste ingebruikname van een rioolaansluiting bedraagt in 2026 945,66 euro exclusief btw, oftewel 1.144,25 euro inclusief 21% btw. Dat geldt ongeacht of het om een gescheiden of niet-gescheiden stelsel gaat. De standaarddiepte van een aansluiting is 80 centimeter.",
  },
];

export default function PrijzenPagina() {
  return (
    <>
      <Jsonld
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.v,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <Section>
        <Breadcrumbs
          items={[
            { naam: "Home", href: "/" },
            { naam: "Prijzen", href: "/prijzen" },
          ]}
        />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="prose-nl max-w-none">
            <h1 className="mb-4 text-[1.6rem] font-bold leading-[1.18] tracking-tight text-ink-900 sm:text-[1.95rem]">
              Prijzen voor ontstopping en rioolwerken in Limburg
            </h1>
            <p className="text-lg leading-relaxed text-ink-800">
              De meeste mensen bellen een ontstoppingsdienst op het slechtste moment: als het water al over de rand komt.
              Dan is er geen tijd om te vergelijken. Daarom staan alle richtprijzen hier op één pagina, inclusief de
              toeslagen die het verschil maken.
            </p>

            <H2>Ontstopping overdag</H2>
            <PriceTable
              kop={["Ingreep", "Richtprijs incl. btw"]}
              rijen={[
                ["Standaard ontstopping (30-60 min)", "€140 - €200"],
                ["Wc of gootsteen ontstoppen", "€100 - €200"],
                ["Bad- of doucheafvoer", "€100 - €150"],
                ["Complexe hoofdriolering (1,5 - 3 uur)", "€250 - €400"],
                ["Frezen bij wortelingroei (1-3 uur)", "€250 - €450"],
                ["Per bijkomende meter leiding", "€7 - €15"],
              ]}
            />

            <H2>Toeslagen buiten de kantooruren</H2>
            <p>
              Kunt u wachten tot de volgende ochtend, dan bespaart u vaak honderd euro of meer. Loopt er water uw woning
              binnen of is het uw enige toilet, dan is wachten geen optie, maar dan weet u tenminste wat u betaalt.
            </p>
            <PriceTable
              kop={["Moment", "Toeslag", "Totaalprijs"]}
              rijen={[
                ["Overdag (kantooruren)", "geen", "€140 - €200"],
                ["Avond 17u - 22u", "+50%", "€200 - €300"],
                ["Zaterdag", "+50% tot +75%", "€225 - €350"],
                ["Zondag of feestdag", "+100%", "€280 - €400"],
                ["Nacht 22u - 7u", "+100% tot +150%", "€300 - €500"],
              ]}
            />

            <H2>Onderzoek en reiniging</H2>
            <PriceTable
              kop={["Wat", "Richtprijs"]}
              rijen={[
                ["Camera-inspectie riool", "€80 - €180"],
                ["Zender voor lokalisatie", "+€25 - €50"],
                ["Rookproef bij geurhinder", "€75 - €190"],
                ["Kleurstofonderzoek", "vanaf €45"],
                ["Hogedrukreiniging bovenop basiswerk", "€100 - €200"],
                ["Inzet zuigunit", "+€90"],
              ]}
            />

            <H2>Putten ledigen en reinigen</H2>
            <PriceTable
              kop={["Wat", "Richtprijs"]}
              rijen={[
                ["Septische put tot 3 m³, binnen 20 m van de straat", "ca. €250 incl. btw"],
                ["Boven 3 m³", "+€30 per m³"],
                ["Meer dan 20 m afstand", "+ca. €20 per 10 m"],
                ["Regenwaterput tot 3.000 l", "€150 - €210"],
                ["Regenwaterput 3.000 - 5.000 l", "€200 - €260"],
                ["Regenwaterput 5.000 - 7.500 l", "€240 - €290"],
                ["Regenwaterput 7.500 - 10.000 l", "€285 - €325"],
                ["Regenwaterput meer dan 10.000 l", "offerte op maat"],
              ]}
            />

            <H2>Herstel van de leiding</H2>
            <PriceTable
              kop={["Methode", "Richtprijs"]}
              rijen={[
                ["Relining DN 100-125 (standaardwoning)", "€80 - €150 per meter"],
                ["Relining DN 150-200", "€120 - €200 per meter"],
                ["Relining DN 250-400", "€150 - €250 per meter"],
                ["Typisch relining-project woning", "€1.200 - €3.500"],
                ["Traditioneel vervangen met graafwerk", "€200 - €400 per meter"],
              ]}
              bijschrift="Relining ligt doorgaans 30 tot 40% lager dan volledige vervanging; werfduur ongeveer één dag tegenover drie tot vijf."
            />

            <H2>Keuring privéwaterafvoer</H2>
            <PriceTable
              kop={["Wat", "Richtprijs"]}
              rijen={[
                ["Eengezinswoning", "€150 - €250 incl. btw"],
                ["Meergezinswoning, 2 wooneenheden", "vanaf €150 excl. btw"],
                ["Per bijkomende wooneenheid", "+€40"],
                ["Herkeuring", "goedkoper dan de eerste keuring"],
              ]}
              bijschrift="Keurders bepalen hun eigen tarieven; de prijs hangt af van de complexiteit en de grootte van de installatie."
            />

            <H2>Vier manieren om de rekening te drukken</H2>
            <ul>
              <li>Bel overdag als het kan: het verschil met een zondagnacht is snel 150 euro.</li>
              <li>Weet waar uw huisaansluitputje ligt; een technicus die er meteen bij kan werkt sneller.</li>
              <li>Laat bij een tweede verstopping binnen het jaar meteen een camera meegaan.</li>
              <li>Vraag vooraf naar starttarief inclusief verplaatsing én naar het btw-tarief.</li>
            </ul>

            <FaqList items={faq} />

            <p className="mt-6">
              <Link href="/kennis/wat-kost-riool-ontstoppen" className="font-semibold text-water-600 underline underline-offset-2">
                Uitgebreide gids over de kosten, met bronnen &rarr;
              </Link>
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <LeadForm compact />
            <div className="mt-4 rounded-2xl border border-water-100 bg-water-50/60 p-5">
              <p className="mb-2 font-bold text-ink-900">Liever meteen een richtprijs?</p>
              <p className="mb-4 text-sm leading-relaxed text-ink-800">
                Beschrijf uw situatie aan de telefoon en u krijgt meteen een realistische indicatie.
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
