/**
 * Hero-achtergrond. Drie lagen die samen naar het onderwerp verwijzen zonder
 * één foto te gebruiken:
 *   1. rimpelringen die uit het beeldmerk lijken te lopen (water in een afvoer)
 *   2. contourlijnen zoals op een hoogtekaart, want het hele verhaal van deze
 *      site draait om bodem, hellingen en waar het water naartoe stroomt
 *   3. een zachte gloed die het formulier naar voren haalt
 * Alles is SVG en CSS, dus geen extra netwerkverzoek en geen laadtijd.
 */
export function HeroAchtergrond() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* basisverloop */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#06131c_0%,#0b2130_45%,#123244_100%)]" />

      {/* contourlijnen */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.24]" preserveAspectRatio="none" viewBox="0 0 1200 600">
        <defs>
          <linearGradient id="lijnfade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38b6d3" stopOpacity="0" />
            <stop offset="45%" stopColor="#38b6d3" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38b6d3" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path
            key={i}
            d={`M-50 ${90 + i * 62} C 180 ${40 + i * 62}, 330 ${160 + i * 62}, 560 ${112 + i * 62} S 940 ${
              38 + i * 62
            }, 1260 ${104 + i * 62}`}
            fill="none"
            stroke="url(#lijnfade)"
            strokeWidth={i % 3 === 0 ? 1.6 : 1}
          />
        ))}
      </svg>

      {/* rimpelringen rechtsboven, echo van het beeldmerk */}
      <svg
        className="absolute -right-28 -top-40 h-[620px] w-[620px] opacity-[0.4] sm:-right-16"
        viewBox="0 0 400 400"
      >
        {[52, 84, 116, 148, 180].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="#38b6d3"
            strokeWidth={i === 0 ? 2.4 : 1.2}
            strokeOpacity={0.85 - i * 0.14}
          />
        ))}
        <circle cx="200" cy="200" r="26" fill="#f2691f" fillOpacity="0.5" />
      </svg>

      {/* gloed achter het formulier */}
      <div className="absolute -right-10 top-10 h-[460px] w-[460px] rounded-full bg-water-500/25 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-[340px] w-[340px] rounded-full bg-water-600/15 blur-3xl" />

      {/* zachte overgang naar de witte pagina eronder */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white/10" />
    </div>
  );
}

/** Kleine vertrouwensmarkers onder de hero-knoppen. */
export function HeroPunten({ punten }: { punten: string[] }) {
  return (
    <ul className="mt-7 grid gap-x-6 gap-y-2 text-sm text-white/75 sm:grid-cols-2">
      {punten.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 fill-water-400" aria-hidden>
            <path d="M8.2 14.4 4 10.2l1.5-1.5 2.7 2.7 6.3-6.3L16 6.6z" />
          </svg>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}
