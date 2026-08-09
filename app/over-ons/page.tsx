import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Breadcrumbs, CallButton, H2, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Over Limburg Ontstoppingsdienst 24/7 | Werkgebied en werkwijze",
  description:
    "Wie wij zijn, hoe wij werken en waarom wij geen vaste baliewerking hebben. Werkgebied: alle Limburgse gemeenten. Richtprijzen vooraf, camera-controle achteraf.",
  alternates: { canonical: "/over-ons" },
};

export default function OverOns() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { naam: "Home", href: "/" },
          { naam: "Over ons", href: "/over-ons" },
        ]}
      />
      <div className="prose-nl max-w-3xl">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Over {site.naam}
        </h1>
        <p className="text-lg leading-relaxed text-ink-800">
          {site.naam} is een ontstoppingsdienst die werkt in heel de provincie Limburg. Wij hebben bewust geen
          baliewerking: al ons werk gebeurt bij mensen thuis of op de werf, en u bereikt ons het snelst per telefoon.
        </p>

        <H2>Waar wij anders in zijn</H2>
        <p>
          De meeste ontstoppingsdiensten behandelen Limburg als één gebied. Dat is het niet. De waterhardheid verschilt
          binnen de provincie met een factor vijf — rond 45 °fH in Sint-Truiden tegenover ongeveer 8 °fH in Lommel. De
          bodem gaat van doorlatend Kempens zand naar ondoorlatend Haspengouws leem. En niet overal is Fluvius de
          rioolbeheerder: in Lommel, Heusden-Zolder, Bilzen-Hoeselt en Wellen doet het lokaal bestuur dat zelf, in As is
          het Riopact.
        </p>
        <p>
          Die verschillen bepalen wat er in uw leiding gebeurt en wie u moet bellen. Daarom hebben wij per gemeente
          uitgezocht wat er speelt, in plaats van overal hetzelfde verhaal te vertellen.
        </p>

        <H2>Onze werkafspraken</H2>
        <ul>
          <li>U hoort de richtprijs en het btw-tarief voor we starten.</li>
          <li>Wij controleren eerst het huisaansluitputje, zodat u weet aan welke kant het probleem zit.</li>
          <li>Na het vrijmaken kijken we met camera of de buis intact is.</li>
          <li>Is een ingreep niet dringend, dan zeggen we dat — nachttarief is voor echte spoed.</li>
          <li>Slib gaat naar een erkende verwerker en u krijgt daar een bewijs van.</li>
        </ul>

        <H2>Werkgebied</H2>
        <p>
          Wij werken in alle Limburgse gemeenten, van Voeren tot Lommel en van Gingelom tot Kinrooi.{" "}
          <Link href="/gemeenten">Bekijk het volledige overzicht per gemeente</Link>, met telkens de lokale situatie:
          rioolbeheerder, bodem, waterlopen en de problemen die daar het vaakst spelen.
        </p>

        <H2>Contact</H2>
        <p>
          Telefoon:{" "}
          <a href={site.telefoonHref} className="font-semibold">
            {site.telefoonDisplay}
          </a>
          <br />
          E-mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <div className="mt-6">
          <CallButton />
        </div>
      </div>
    </Section>
  );
}
