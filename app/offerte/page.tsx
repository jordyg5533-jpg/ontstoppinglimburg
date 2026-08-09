import type { Metadata } from "next";
import { Breadcrumbs, CallButton, Section } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Gratis prijsindicatie aanvragen | Limburg Ontstoppingsdienst 24/7",
  description:
    "Vraag een gratis en vrijblijvende prijsindicatie voor ontstopping, camera-inspectie of rioolherstel in Limburg. Naam en telefoon volstaan.",
  alternates: { canonical: "/offerte" },
};

export default function OffertePagina() {
  return (
    <Section>
      <Breadcrumbs
        items={[
          { naam: "Home", href: "/" },
          { naam: "Prijsindicatie", href: "/offerte" },
        ]}
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="prose-nl max-w-none">
          <h1 className="mb-4 text-[1.6rem] font-bold leading-[1.18] tracking-tight text-ink-900 sm:text-[1.95rem]">
            Gratis prijsindicatie voor uw situatie
          </h1>
          <p className="text-lg leading-relaxed text-ink-800">
            Laat uw naam en telefoonnummer achter en beschrijf kort wat er aan de hand is. Wij bellen u terug met een
            concrete richtprijs: gratis en vrijblijvend, zonder verkooppraatjes.
          </p>
          <h2>Wat helpt ons om u sneller een juiste prijs te geven</h2>
          <ul>
            <li>Welke toestellen lopen slecht weg: één afvoer of meerdere tegelijk?</li>
            <li>Sinds wanneer speelt het, en is het plots begonnen of geleidelijk erger geworden?</li>
            <li>Is dit de eerste keer of komt het terug?</li>
            <li>Weet u waar uw huisaansluitputje ligt, en staat er water in?</li>
            <li>Hoe oud is de woning? Dat bepaalt ook uw btw-tarief.</li>
          </ul>
          <h2>Is het dringend?</h2>
          <p>
            Loopt er water uw woning binnen of is dit uw enige toilet, bel dan meteen. Buiten de kantooruren gelden
            toeslagen van 50 tot 150%, dus als het kan wachten tot de volgende ochtend zeggen wij dat gewoon.
          </p>
          <div className="mt-6">
            <CallButton />
          </div>
        </div>
        <div>
          <LeadForm />
        </div>
      </div>
    </Section>
  );
}
