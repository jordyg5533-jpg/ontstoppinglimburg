import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { cities, hoofdSteden } from "@/lib/cities";
import { menuServices } from "@/lib/services";
import { articles } from "@/lib/articles";
import { CallButton, FaqList, H2, Jsonld, PriceTable, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { RooilijnDiagram } from "@/components/Diagram";

export const metadata: Metadata = {
  title: "Limburg Ontstoppingsdienst 24/7 | Riool & Afvoer Ontstoppen in Limburg",
  description:
    "Riool of afvoer verstopt in Limburg? Ontstopping, camera-inspectie, septische put en rioolherstel in alle Limburgse gemeenten. Richtprijs vooraf, dag en nacht bereikbaar.",
  alternates: { canonical: "/" },
};

const faq = [
  {
    v: "Wat kost een ontstopping in Limburg?",
    a: "Een standaard ontstopping overdag kost in België 140 tot 200 euro inclusief btw voor dertig tot zestig minuten werk. Een complexe ingreep op de hoofdriolering van anderhalf tot drie uur loopt op tot 250 à 400 euro. Buiten de kantooruren gelden toeslagen: ongeveer 50% 's avonds, 50 tot 75% op zaterdag, 100% op zondag en feestdagen en tot 150% 's nachts.",
  },
  {
    v: "Hoe snel kunnen jullie ter plaatse zijn?",
    a: "Bij een echt spoedgeval — water dat uw woning binnenkomt of uw enige toilet dat onbruikbaar is — streven we naar dezelfde dag. Een harde belofte doen we aan de telefoon en niet op een webpagina, want dat hangt af van het uur, de drukte en waar u woont. U hoort dus meteen bij het eerste contact wanneer we er kunnen zijn. Is het niet dringend, dan bespaart u vaak honderd euro of meer door tot de volgende ochtend te wachten, en dat zeggen we er eerlijk bij.",
  },
  {
    v: "Wie betaalt de verstopping: ik of de rioolbeheerder?",
    a: "Alles tot en met het huisaansluitputje is voor uw rekening, ook wanneer dat putje op de stoep ligt en eigendom is van de netbeheerder. Het technisch reglement van Fluvius stelt dat uitdrukkelijk. Pas voorbij dat putje, in het openbare riool, is de rioolbeheerder aan zet. Wij controleren dat putje standaard voor we beginnen, zodat u weet waar u aan toe bent.",
  },
  {
    v: "Betaal ik 6% of 21% btw?",
    a: "Is uw woning ouder dan tien jaar en hoofdzakelijk als privéwoning in gebruik, dan geldt 6% btw op ontstopping, camera-inspectie, hogedrukreiniging en rioolherstel. Sinds 1 juli 2022 is daarvoor geen apart attest meer nodig. Bij woningen jonger dan tien jaar en bij niet-residentiële panden is het 21%. Voor het ledigen van een septische put rekenen sommige firma's 21%, ook bij oudere woningen.",
  },
  {
    v: "Hoe lang duurt een ontstopping?",
    a: "Een gewone verstopping in een wc, gootsteen of doucheafvoer is meestal in dertig tot zestig minuten opgelost. Een verstopping in de hoofdriolering vraagt anderhalf tot drie uur. Frezen bij wortelingroei duurt één tot drie uur. Een camera-inspectie erbovenop kost gemiddeld twintig tot dertig minuten extra.",
  },
  {
    v: "Werken jullie in heel Limburg?",
    a: "Ja. Wij werken in alle 38 Limburgse gemeenten, van Voeren tot Lommel en van Gingelom tot Kinrooi. Voor elke gemeente hebben we een aparte pagina met de lokale situatie: wie er rioolbeheerder is, welke bodem er ligt en welke problemen daar het vaakst spelen.",
  },
  {
    v: "Wat doen jullie als de leiding beschadigd blijkt?",
    a: "Dan krijgt u de camerabeelden te zien en twee opties met een prijsindicatie per meter. Relining — een met hars gedrenkte kous die in de bestaande buis uithardt — ligt doorgaans 30 tot 40% lager dan volledige vervanging en vraagt ongeveer één werkdag in plaats van drie tot vijf. Vervangen met graafwerk is soms onvermijdelijk, bijvoorbeeld bij een volledig ingezakt stuk.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.v,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Rioolontstopping en afvoerreiniging",
  provider: { "@id": `${site.url}/#organisatie` },
  areaServed: cities.map((c) => ({ "@type": "City", name: c.naam, addressRegion: "Limburg", addressCountry: "BE" })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Diensten",
    itemListElement: menuServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.naam, description: s.kort },
      url: `${site.url}/diensten/${s.slug}`,
    })),
  },
};

export default function Home() {
  return (
    <>
      <Jsonld data={[faqSchema, serviceSchema]} />

      {/* HERO */}
      <div className="bg-gradient-to-b from-ink-950 to-ink-800 text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:py-20">
          <div>
            <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-water-400">
              Alle 38 Limburgse gemeenten · dag en nacht
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Ontstoppingsdienst in Limburg: snel ter plaatse, met camera-controle en een richtprijs vooraf
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              {site.naam} is een ontstoppingsdienst voor heel de provincie Limburg. Wij maken verstopte riolering,
              wc&apos;s en afvoeren vrij, ledigen septische en regenwaterputten en sporen met camera op waaróm het
              misging — zodat u niet elk jaar opnieuw voor hetzelfde probleem betaalt.
            </p>
            <p className="mt-3 max-w-xl leading-relaxed text-white/70">
              U hoort vooraf welke richtprijs geldt, welk btw-tarief van toepassing is en of het probleem aan uw kant of
              aan die van de rioolbeheerder ligt. Dat laatste scheelt in de praktijk het vaakst geld.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CallButton />
              <Link
                href="#prijsindicatie"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Gratis prijsindicatie
              </Link>
            </div>
            <ul className="mt-7 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
              <li>✓ Richtprijs en btw-tarief vooraf duidelijk</li>
              <li>✓ Camera-controle na het vrijmaken</li>
              <li>✓ Spiraal, frees of hogedruk — naar oorzaak</li>
              <li>✓ Slib afgevoerd naar erkende verwerker</li>
            </ul>
          </div>
          <div id="prijsindicatie" className="lg:pt-4">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* WAT WIJ DOEN */}
      <Section>
        <H2>Wat wij doen</H2>
        <p className="mb-6 max-w-3xl leading-relaxed text-ink-800">
          Een verstopping is zelden hetzelfde probleem. Een pak vochtige doekjes vraagt een spiraal, kalkaanslag vraagt
          hogedruk en ingroeiende wortels vragen een frees plus herstel van de voeg. Wij kiezen de techniek op basis van
          wat we zien, niet op basis van wat toevallig in de bus ligt.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menuServices.map((s) => (
            <Link
              key={s.slug}
              href={`/diensten/${s.slug}`}
              className="group rounded-xl border border-water-100 bg-white p-5 transition hover:border-water-500 hover:shadow-sm"
            >
              <p className="text-base font-bold text-ink-900 group-hover:text-water-600">{s.naam}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{s.kort}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* PRIJZEN */}
      <div className="bg-water-50/60">
        <Section>
          <H2>Wat kost het?</H2>
          <p className="mb-2 max-w-3xl leading-relaxed text-ink-800">
            Hieronder staan de marktprijzen zoals ze in België gepubliceerd worden. Het zijn richtprijzen, geen vaste
            tarieven: de uiteindelijke kost hangt af van de aard van de verstopping, de bereikbaarheid van de leiding en
            het uur waarop u belt.
          </p>
          <PriceTable
            kop={["Ingreep", "Richtprijs incl. btw"]}
            rijen={[
              ["Standaard ontstopping overdag (30-60 min)", "€140 - €200"],
              ["Wc of gootsteen ontstoppen", "€100 - €200"],
              ["Complexe hoofdriolering (1,5 - 3 uur)", "€250 - €400"],
              ["Frezen bij wortelingroei", "€250 - €450"],
              ["Camera-inspectie", "€80 - €180"],
              ["Septische put ledigen tot 3 m³", "ca. €250"],
              ["Regenwaterput reinigen (3.000 - 10.000 l)", "€150 - €325"],
              ["Relining per meter (standaardwoning)", "€80 - €150"],
            ]}
            bijschrift="Toeslagen buiten kantooruren: +50% 's avonds, +50 tot 75% op zaterdag, +100% op zon- en feestdagen, tot +150% 's nachts."
          />
          <Link href="/prijzen" className="font-semibold text-water-600 underline underline-offset-2">
            Volledig prijsoverzicht met alle toeslagen &rarr;
          </Link>
        </Section>
      </div>

      {/* WIE BETAALT WAT */}
      <Section>
        <H2>Tot waar is het uw kosten?</H2>
        <p className="mb-2 max-w-3xl leading-relaxed text-ink-800">
          Hier gaat in de praktijk de meeste discussie over. De grens ligt niet bij de stoeprand maar bij het
          huisaansluitputje — en dat putje is eigendom van de netbeheerder terwijl het onderhoud tóch bij u
          ligt. Wij controleren dat putje standaard voor we beginnen, zodat u weet aan welke kant het zit.
        </p>
        <RooilijnDiagram />
        <Link
          href="/kennis/wie-betaalt-verstopte-riolering"
          className="font-semibold text-water-600 underline underline-offset-2"
        >
          Volledige uitleg met de letterlijke reglementstekst &rarr;
        </Link>
      </Section>

      {/* HOE WE WERKEN */}
      <Section>
        <H2>Hoe we te werk gaan</H2>
        <ol className="grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "1. Eerst vaststellen aan welke kant het zit",
              d: "Wij openen het huisaansluitputje aan de rooilijn. Staat dat vol terwijl het niet regent, dan zit de verstopping stroomafwaarts. Is het leeg, dan zit ze tussen uw woning en dat putje — en dan is het voor uw rekening.",
            },
            {
              t: "2. De techniek kiezen die past",
              d: "Spiraal bij een lokale prop, hogedruk bij aanslag over een langere afstand, frezen bij wortels. Ging uw afvoer plots dicht, denk spiraal. Werd hij over maanden trager, denk hogedruk.",
            },
            {
              t: "3. Controleren met camera",
              d: "Na het vrijmaken kijken we of de buis intact is. Een terugkerende verstopping heeft bijna altijd een fysieke oorzaak: een gebroken voeg, wortels, een knik of te weinig verval.",
            },
            {
              t: "4. Eerlijk zeggen wat er nu nodig is",
              d: "Is de buis in orde, dan bent u klaar. Is ze beschadigd, dan krijgt u de beelden te zien plus een keuze tussen relining en vervangen, met een prijs per meter — geen paniekverhaal.",
            },
          ].map((s) => (
            <li key={s.t} className="rounded-xl border border-water-100 bg-white p-5">
              <p className="mb-1.5 font-bold text-ink-900">{s.t}</p>
              <p className="text-[15px] leading-relaxed text-ink-800">{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* WAAROM LIMBURG ANDERS IS */}
      <div className="bg-ink-950 text-white">
        <Section>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            Waarom een verstopping in Sint-Truiden iets anders is dan in Lommel
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <p className="mb-2 font-bold text-water-400">Waterhardheid verschilt met factor vijf</p>
              <p className="text-[15px] leading-relaxed text-white/75">
                In Sint-Truiden ligt de waterhardheid rond 45 °fH en in Tongeren rond 42 °fH — heel hard water. In Lommel
                is dat ongeveer 8 °fH. Kalk vernauwt in Haspengouw de buiswand stelselmatig; in de Kempen speelt dat
                nauwelijks. Dezelfde klacht, een andere oorzaak en dus een andere techniek.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold text-water-400">De bodem bepaalt wat er binnenspoelt</p>
              <p className="text-[15px] leading-relaxed text-white/75">
                Op Kempens zand spoelt zand mee door een kleine barst en bouwt het onderin een bank op. Op het leem van
                Droog Haspengouw komt bij elke stevige bui modder van de akkers en via holle wegen in kolken en
                aansluitingen terecht. In de Maasvallei is het grondwater het probleem.
              </p>
            </div>
            <div>
              <p className="mb-2 font-bold text-water-400">Niet overal belt u Fluvius</p>
              <p className="text-[15px] leading-relaxed text-white/75">
                In Lommel, Heusden-Zolder, Bilzen-Hoeselt en Wellen beheert het lokaal bestuur zelf de riolering, en in
                As doet Riopact dat. In de andere 33 gemeenten is het Fluvius. Wie dat weet, belt niet eerst het
                verkeerde nummer.
              </p>
            </div>
          </div>
          <Link
            href="/kennis/rioolbeheerder-per-gemeente-limburg"
            className="mt-6 inline-block font-semibold text-water-400 underline underline-offset-2"
          >
            Rioolbeheerder per Limburgse gemeente &rarr;
          </Link>
        </Section>
      </div>

      {/* GEMEENTEN */}
      <Section>
        <H2>Wij werken in heel Limburg</H2>
        <p className="mb-5 max-w-3xl leading-relaxed text-ink-800">
          Voor elke gemeente en kern schreven we een aparte pagina met de lokale situatie: de rioolbeheerder, de bodem,
          de waterlopen, de lopende rioleringswerken en de problemen die daar het vaakst spelen.
        </p>
        <div className="mb-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hoofdSteden.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-xl border border-water-100 bg-white p-4 transition hover:border-water-500"
            >
              <p className="font-bold text-ink-900">Ontstopping {c.naam}</p>
              <p className="mt-1 text-sm text-ink-700">{c.streek}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-ink-700">
          {cities
            .filter((c) => c.prioriteit !== 1)
            .map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="hover:text-water-600 hover:underline">
                {c.naam}
              </Link>
            ))}
        </div>
      </Section>

      {/* KENNIS */}
      <div className="bg-water-50/60">
        <Section>
          <H2>Kennisbank: eerst begrijpen, dan beslissen</H2>
          <p className="mb-5 max-w-3xl leading-relaxed text-ink-800">
            Veel afvoerproblemen kosten geld doordat mensen de verkeerde vraag stellen. Deze gidsen beantwoorden de
            vragen die er wél toe doen — met concrete cijfers en de bron erbij.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/kennis/${a.slug}`}
                className="group rounded-xl border border-water-100 bg-white p-5 transition hover:border-water-500"
              >
                <p className="font-bold text-ink-900 group-hover:text-water-600">{a.h1}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-700">{a.beschrijving}</p>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <FaqList items={faq} />
      </Section>

      <div className="bg-ink-950">
        <Section className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Verstopping in Limburg? Bel gerust.</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-white/75">
            U krijgt aan de telefoon meteen een realistische richtprijs en een eerlijk antwoord op de vraag of het
            dringend is. Kan het wachten tot morgen, dan zeggen we dat — dat scheelt u de nachttoeslag.
          </p>
          <div className="mt-6 flex justify-center">
            <CallButton />
          </div>
        </Section>
      </div>
    </>
  );
}
