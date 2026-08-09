import type { Metadata } from "next";
import Link from "next/link";
import { CallButton, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag | Limburg Ontstoppingsdienst 24/7",
  description: "Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact op met een richtprijs.",
  robots: { index: false, follow: true },
};

export default function BedanktPagina() {
  return (
    <Section className="text-center">
      <h1 className="mb-4 text-[1.6rem] font-bold leading-[1.18] tracking-tight text-ink-900 sm:text-[1.95rem]">Bedankt, uw aanvraag is binnen</h1>
      <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-ink-800">
        Wij nemen zo snel mogelijk contact met u op met een concrete richtprijs. Is het dringend en loopt er water uw
        woning binnen? Bel dan gerust meteen: dan gaan we niet wachten op een mailtje.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <CallButton />
        <Link
          href="/kennis/wc-verstopt-wat-doen"
          className="inline-flex items-center justify-center rounded-lg border-2 border-water-500 px-6 py-3.5 font-semibold text-water-600 hover:bg-water-50"
        >
          Wat u ondertussen zelf kunt doen
        </Link>
      </div>
    </Section>
  );
}
