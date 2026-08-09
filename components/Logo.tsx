import Link from "next/link";

const SPIRAAL =
  "M32.0 7.0 Q37.2 7.9 42.0 9.9 Q46.2 12.7 49.7 16.4 Q52.3 20.6 53.9 25.3 Q54.5 30.1 54.0 34.8 Q52.6 39.2 50.3 43.2 Q47.3 46.6 43.7 49.2 Q39.7 51.0 35.5 51.8 Q31.2 51.7 27.2 50.8 Q23.5 49.0 20.3 46.6 Q17.8 43.6 16.0 40.2 Q14.9 36.5 14.7 32.8 Q15.3 29.2 16.6 25.9 Q18.5 23.0 20.9 20.6 Q23.8 18.8 26.9 17.7 Q30.0 17.3 33.1 17.5 Q36.1 18.4 38.6 19.9 Q40.8 21.8 42.5 24.1 Q43.6 26.7 44.1 29.3 Q44.0 31.9 43.5 34.4 Q42.4 36.6 40.9 38.5";

/**
 * Beeldmerk: een afvoerkolk. De spiraal loopt naar binnen naar een oranje kern: 
 * dezelfde drie kleuren als de site (donkere structuur, water-tint, warme CTA).
 * Blijft leesbaar op 16 px, daarom één dikke lijn en geen fijne details.
 */
export function LogoMark({
  size = 40,
  metVlak = true,
  className = "",
}: {
  size?: number;
  metVlak?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Limburg Ontstoppingsdienst"
    >
      {metVlak ? <rect width="64" height="64" rx="14" className="fill-ink-950" /> : null}
      <path d={SPIRAAL} fill="none" stroke="#38b6d3" strokeWidth="9" strokeLinecap="round" />
      <circle cx="32" cy="32" r="6.5" fill="#f2691f" />
    </svg>
  );
}

/**
 * Volledig logo: merk + woordmerk. De merknaam staat hier exact zoals overal
 * elders op de site en straks op de socials: NAP-consistentie telt dubbel
 * voor AI-zichtbaarheid, dus één schrijfwijze, altijd.
 */
export function Logo({ variant = "licht" }: { variant?: "licht" | "donker" }) {
  const donker = variant === "donker";
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Naar de homepage">
      <LogoMark size={38} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-merk text-[15px] font-bold tracking-tight sm:text-base ${
            donker ? "text-white" : "text-ink-900"
          }`}
        >
          Limburg Ontstoppingsdienst
        </span>
        <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-water-600">
          24/7 · heel Limburg
        </span>
      </span>
    </Link>
  );
}
