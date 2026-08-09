import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacyverklaring | Limburg Ontstoppingsdienst 24/7",
  description:
    "Welke gegevens wij via het aanvraagformulier verzamelen, waarvoor we ze gebruiken, hoe lang we ze bewaren en welke rechten u heeft.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPagina() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { naam: "Home", href: "/" },
          { naam: "Privacyverklaring", href: "/privacy" },
        ]}
      />
      <div className="prose-nl max-w-3xl">
        <h1 className="mb-4 text-[1.6rem] font-bold leading-[1.18] tracking-tight text-ink-900 sm:text-[1.95rem]">Privacyverklaring</h1>
        <p className="text-lg leading-relaxed text-ink-800">
          Kort samengevat: wij verzamelen alleen wat nodig is om u terug te bellen met een prijsindicatie, we
          verkopen niets door en u kunt op elk moment vragen om uw gegevens te wissen.
        </p>

        <h2>Welke gegevens wij verzamelen</h2>
        <p>
          Wanneer u het aanvraagformulier op deze site invult, ontvangen wij de gegevens die u zelf invult:
          uw naam en telefoonnummer (verplicht), en optioneel uw e-mailadres, de gekozen dienst en uw
          omschrijving van het probleem. Daarnaast registreren wij van welke pagina uw aanvraag komt, zodat
          wij weten over welke gemeente of dienst het gaat.
        </p>
        <p>
          Belt u ons, dan hebben wij uw telefoonnummer omdat u ons belt. Wij nemen gesprekken niet op.
        </p>

        <h2>Waarvoor wij ze gebruiken</h2>
        <p>
          Uitsluitend om contact met u op te nemen over uw aanvraag en om u een richtprijs te geven. Wij
          gebruiken uw gegevens niet voor nieuwsbrieven of reclame, en wij verkopen of verhuren ze niet aan
          derden.
        </p>
        <p>
          De rechtsgrond is uw toestemming, die u geeft door het vakje bij het formulier aan te vinken. Wilt u
          die toestemming intrekken, dan volstaat één bericht.
        </p>

        <h2>Wie uw gegevens verwerkt</h2>
        <p>
          Het formulier draait op Formspree, een verwerker die de inzending doorstuurt naar onze mailbox. De
          site zelf wordt gehost bij Vercel. Beide partijen verwerken gegevens in onze opdracht. Wij plaatsen
          zelf geen tracking- of advertentiecookies op deze site.
        </p>

        <h2>Hoe lang wij ze bewaren</h2>
        <p>
          Aanvragen die niet tot een opdracht leiden, bewaren wij maximaal twaalf maanden. Leidt uw aanvraag
          wel tot een uitgevoerde opdracht, dan gelden de wettelijke bewaartermijnen voor administratie en
          facturatie.
        </p>

        <h2>Uw rechten</h2>
        <ul>
          <li>inzage in de gegevens die wij over u hebben</li>
          <li>verbetering van onjuiste gegevens</li>
          <li>verwijdering van uw gegevens</li>
          <li>beperking van of bezwaar tegen de verwerking</li>
          <li>overdracht van uw gegevens</li>
        </ul>
        <p>
          Een verzoek indienen kan via het{" "}
          <Link href="/offerte">aanvraagformulier</Link>: vermeld kort wat u wenst, dan handelen wij het af.
          Bent u niet tevreden over de afhandeling, dan kunt u klacht indienen bij de Belgische
          Gegevensbeschermingsautoriteit.
        </p>

        <h2>Beveiliging</h2>
        <p>
          Deze site draait volledig over een beveiligde verbinding (https) en het formulier bevat een
          spamcontrole. Toegang tot binnenkomende aanvragen is beperkt tot wie ze nodig heeft om u terug te
          bellen.
        </p>

        <h2>Wijzigingen</h2>
        <p>
          Verandert er iets aan deze verklaring, dan passen wij deze pagina aan. Laatste bijwerking: augustus
          2026.
        </p>
        <p className="text-sm text-ink-700">
          {site.naam}: actief in heel de provincie Limburg. Wij hebben geen baliewerking; contact verloopt via
          het formulier of telefonisch.
        </p>
      </div>
    </Section>
  );
}
