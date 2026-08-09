"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { LeadForm } from "./LeadForm";

type Ctx = { open: (gemeente?: string) => void };
const OfferteContext = createContext<Ctx>({ open: () => {} });

export function useOfferte() {
  return useContext(OfferteContext);
}

/**
 * Houdt de offerte-pop-up bij. Elke CTA op de site roept `open()` aan, zodat de
 * bezoeker nooit van de pagina weg hoeft. Het formulier op /offerte en in de
 * hero blijft gewoon in de HTML staan, dus crawlers zien het ook zonder JS.
 */
export function OfferteProvider({ children }: { children: React.ReactNode }) {
  const [gemeente, setGemeente] = useState<string | undefined>(undefined);
  const [aan, setAan] = useState(false);

  const open = useCallback((g?: string) => {
    setGemeente(g);
    setAan(true);
  }, []);

  const sluit = useCallback(() => setAan(false), []);

  useEffect(() => {
    if (!aan) return;
    const opEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") sluit();
    };
    document.addEventListener("keydown", opEsc);
    const vorige = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", opEsc);
      document.body.style.overflow = vorige;
    };
  }, [aan, sluit]);

  return (
    <OfferteContext.Provider value={{ open }}>
      {children}
      {aan ? (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink-950/70 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby="offerte-titel"
          onClick={(e) => {
            if (e.target === e.currentTarget) sluit();
          }}
        >
          <div className="relative my-6 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-water-100 px-5 pb-4 pt-5">
              <div>
                <p id="offerte-titel" className="text-lg font-bold text-ink-900">
                  {gemeente ? `Prijsindicatie voor ${gemeente}` : "Vraag een gratis prijsindicatie"}
                </p>
                <p className="mt-1 text-sm text-ink-700">
                  Naam en telefoon volstaan. Wij bellen u terug met een concrete richtprijs.
                </p>
              </div>
              <button
                type="button"
                onClick={sluit}
                aria-label="Sluiten"
                className="-mr-1 -mt-1 shrink-0 rounded-lg p-2 text-ink-700 transition hover:bg-water-50 hover:text-ink-900"
              >
                <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden>
                  <path d="M5.3 4.3 10 9l4.7-4.7 1 1L11 10l4.7 4.7-1 1L10 11l-4.7 4.7-1-1L9 10 4.3 5.3z" />
                </svg>
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto">
              <LeadForm gemeente={gemeente} inModal />
            </div>
          </div>
        </div>
      ) : null}
    </OfferteContext.Provider>
  );
}

/** CTA die de pop-up opent. Vervangt overal de oude link naar /offerte. */
export function OfferteKnop({
  gemeente,
  variant = "omlijnd",
  klein = false,
  className = "",
  children,
}: {
  gemeente?: string;
  variant?: "omlijnd" | "wit" | "vol" | "kaal";
  klein?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useOfferte();
  const basis = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition";
  const maat = klein ? "px-4 py-2 text-sm" : "px-6 py-3.5 text-base";
  const stijl =
    variant === "wit"
      ? "border-2 border-white/30 text-white hover:bg-white/10"
      : variant === "vol"
        ? "bg-flame-500 text-white hover:bg-flame-600"
        : variant === "kaal"
          ? "text-water-600 underline underline-offset-2"
          : "border-2 border-water-500 bg-white text-water-600 hover:bg-water-50";

  return (
    <button
      type="button"
      onClick={() => open(gemeente)}
      className={variant === "kaal" ? `${className}` : `${basis} ${maat} ${stijl} ${className}`}
    >
      {children ?? (gemeente ? `Prijsindicatie voor ${gemeente}` : "Gratis prijsindicatie")}
    </button>
  );
}
