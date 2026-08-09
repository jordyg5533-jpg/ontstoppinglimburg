import Link from "next/link";
import { menuServices } from "@/lib/services";
import { FORMSPREE_ACTION, site } from "@/lib/site";

/**
 * Lead-formulier. Zo licht mogelijk: enkel naam en telefoon verplicht.
 * Post naar Formspree, zodat er geen server nodig is bij een statische export.
 * Het endpoint staat in lib/site.ts (FORMSPREE_ID) — daar één keer je form-ID zetten.
 */
export function LeadForm({ gemeente, compact = false }: { gemeente?: string; compact?: boolean }) {
  return (
    <form
      action={FORMSPREE_ACTION}
      method="POST"
      className={`rounded-2xl border border-water-100 bg-white p-5 shadow-sm ${compact ? "" : "sm:p-7"}`}
    >
      {/* Formspree-velden: _subject zet het onderwerp, _next stuurt door na verzending,
          _gotcha is de honeypot die Formspree zelf uitleest. */}
      <input type="hidden" name="_subject" value={`Nieuwe aanvraag${gemeente ? ` — ${gemeente}` : ""}`} />
      <input type="hidden" name="_next" value={`${site.url}/bedankt`} />
      <input type="hidden" name="herkomst" value={gemeente ?? "algemeen"} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <p className="mb-1 text-lg font-bold text-ink-900">
        {gemeente ? `Prijsindicatie voor ${gemeente}` : "Vraag een gratis prijsindicatie"}
      </p>
      <p className="mb-4 text-sm text-ink-700">
        Naam en telefoon volstaan. Wij bellen u terug met een concrete richtprijs — gratis en vrijblijvend.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink-800">Naam *</span>
          <input
            required
            name="naam"
            autoComplete="name"
            className="w-full rounded-lg border border-water-100 bg-water-50/50 px-3 py-2.5 text-[15px] outline-none focus:border-water-500"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-ink-800">Telefoon *</span>
          <input
            required
            name="telefoon"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-lg border border-water-100 bg-water-50/50 px-3 py-2.5 text-[15px] outline-none focus:border-water-500"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-ink-800">
            E-mail <span className="font-normal text-ink-700">(optioneel)</span>
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-lg border border-water-100 bg-water-50/50 px-3 py-2.5 text-[15px] outline-none focus:border-water-500"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-sm font-medium text-ink-800">Waarover gaat het?</span>
          <select
            name="dienst"
            defaultValue=""
            className="w-full rounded-lg border border-water-100 bg-water-50/50 px-3 py-2.5 text-[15px] outline-none focus:border-water-500"
          >
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
          <textarea
            name="omschrijving"
            rows={3}
            className="w-full rounded-lg border border-water-100 bg-water-50/50 px-3 py-2.5 text-[15px] outline-none focus:border-water-500"
          />
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

      <button
        type="submit"
        className="mt-4 w-full rounded-lg bg-flame-500 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-flame-600"
      >
        Vraag mijn prijsindicatie
      </button>
      <p className="mt-2 text-center text-xs text-ink-700">Gratis en vrijblijvend. Geen verkooppraatjes.</p>
    </form>
  );
}
