"use client";

import Link from "next/link";
import { useState } from "react";
import { menuServices } from "@/lib/services";
import { FORMSPREE_ACTION } from "@/lib/site";

type Status = "leeg" | "bezig" | "gelukt" | "mislukt";

const veld =
  "w-full rounded-lg border border-water-100 bg-white px-3 py-2.5 text-[15px] text-ink-900 outline-none placeholder:text-ink-700/60 focus:border-water-500 focus:ring-2 focus:ring-water-500/25";

/**
 * Lead-formulier. Zo licht mogelijk: enkel naam en telefoon verplicht.
 * Verstuurt via fetch naar Formspree zodat de bezoeker op de pagina blijft en
 * meteen een bedankbericht ziet. Zonder JavaScript valt het terug op een gewone
 * POST met doorverwijzing naar /bedankt, dus het werkt altijd.
 */
export function LeadForm({
  gemeente,
  compact = false,
  inModal = false,
}: {
  gemeente?: string;
  compact?: boolean;
  inModal?: boolean;
}) {
  const [status, setStatus] = useState<Status>("leeg");

  async function verstuur(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    setStatus("bezig");
    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("mislukt");
      form.reset();
      setStatus("gelukt");
    } catch {
      setStatus("mislukt");
    }
  }

  if (status === "gelukt") {
    return (
      <div
        className={`rounded-2xl border border-water-100 bg-white p-6 text-center shadow-sm ${compact ? "" : "sm:p-8"}`}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-water-100">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-water-600" aria-hidden>
            <path d="M9.6 16.6 5 12l1.6-1.6 3 3 7.8-7.8L19 7.2z" />
          </svg>
        </div>
        <p className="mb-2 text-xl font-bold text-ink-900">Bedankt, uw aanvraag is binnen</p>
        <p className="mb-5 text-[15px] leading-relaxed text-ink-800">
          Wij nemen snel contact met u op met een concrete richtprijs. Is het dringend en loopt er water uw woning
          binnen? Bel dan gerust meteen, dan gaan we niet wachten.
        </p>
        <button
          type="button"
          onClick={() => setStatus("leeg")}
          className="text-sm font-semibold text-water-600 underline underline-offset-2"
        >
          Nog een aanvraag doen
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={verstuur}
      action={FORMSPREE_ACTION}
      method="POST"
      className={`rounded-2xl bg-white p-5 ${inModal ? "" : "border border-water-100 shadow-sm"} ${
        compact || inModal ? "" : "sm:p-7"
      }`}
    >
      <input type="hidden" name="_subject" value={`Nieuwe aanvraag${gemeente ? `: ${gemeente}` : ""}`} />
      <input type="hidden" name="_next" value="https://www.ontstoppinglimburg.be/bedankt" />
      <input type="hidden" name="herkomst" value={gemeente ?? "algemeen"} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {!inModal ? (
        <>
          <p className="mb-1 text-lg font-bold text-ink-900">
            {gemeente ? `Prijsindicatie voor ${gemeente}` : "Vraag een gratis prijsindicatie"}
          </p>
          <p className="mb-4 text-sm text-ink-700">
            Naam en telefoon volstaan. Wij bellen u terug met een concrete richtprijs, gratis en vrijblijvend.
          </p>
        </>
      ) : null}

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink-800">Naam *</span>
          <input required name="naam" autoComplete="name" className={veld} />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink-800">Telefoon *</span>
          <input required name="telefoon" type="tel" autoComplete="tel" className={veld} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-ink-800">
            E-mail <span className="font-normal text-ink-700">(optioneel)</span>
          </span>
          <input name="email" type="email" autoComplete="email" className={veld} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-ink-800">Waarover gaat het?</span>
          <select name="dienst" defaultValue="" className={veld} style={{ color: "#0b1e2b" }}>
            <option value="">Kies een dienst</option>
            {menuServices.map((s) => (
              <option key={s.slug} value={s.naam}>
                {s.naam}
              </option>
            ))}
            <option value="Iets anders">Iets anders</option>
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-ink-800">
            Korte omschrijving <span className="font-normal text-ink-700">(optioneel)</span>
          </span>
          <textarea name="omschrijving" rows={3} className={veld} />
        </label>
      </div>

      <label className="mt-4 flex items-start gap-2 text-sm text-ink-700">
        <input required type="checkbox" name="gdpr" className="mt-1" />
        <span>
          Ik ga ermee akkoord dat mijn gegevens gebruikt worden om mij te contacteren over deze aanvraag, zoals
          beschreven in de{" "}
          <Link href="/privacy" className="text-water-600 underline underline-offset-2">
            privacyverklaring
          </Link>
          .
        </span>
      </label>

      {status === "mislukt" ? (
        <p className="mt-3 rounded-lg bg-flame-50 px-3 py-2 text-sm font-medium text-flame-600" role="alert">
          Het verzenden lukte niet. Probeer het opnieuw of bel ons rechtstreeks.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "bezig"}
        className="mt-4 w-full rounded-lg bg-flame-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-flame-600 disabled:opacity-70"
      >
        {status === "bezig" ? "Bezig met verzenden..." : "Vraag mijn prijsindicatie"}
      </button>
      <p className="mt-2 text-center text-xs text-ink-700">Gratis en vrijblijvend. Geen verkooppraatjes.</p>
    </form>
  );
}
