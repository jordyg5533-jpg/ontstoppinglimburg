/**
 * Eigen diagram: geen stockbeeld, geen AI-plaatje.
 * Toont waar de verantwoordelijkheid van de bewoner ophoudt: tot en met het
 * huisaansluitputje. Dat is het scherpste citeerbare feit van de hele site,
 * dus het verdient een beeld dat mensen begrijpen zonder de tekst te lezen.
 */
export function RooilijnDiagram({ beheerder = "de rioolbeheerder" }: { beheerder?: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-xl border border-water-100 bg-white">
      <svg
        viewBox="0 0 760 300"
        role="img"
        aria-labelledby="rooilijn-titel rooilijn-desc"
        className="h-auto w-full"
      >
        <title id="rooilijn-titel">Wie betaalt welk deel van de riolering?</title>
        <desc id="rooilijn-desc">
          Doorsnede van woning naar straat. De privéwaterafvoer en de huisaansluiting tot en met het
          huisaansluitputje aan de rooilijn zijn voor rekening van de bewoner. Het openbare riool
          daarvoorbij is voor de rioolbeheerder.
        </desc>

        {/* achtergrondvlakken */}
        <rect x="0" y="0" width="430" height="300" fill="#f2fafd" />
        <rect x="430" y="0" width="330" height="300" fill="#eef2f4" />

        {/* maaiveld */}
        <line x1="0" y1="150" x2="760" y2="150" stroke="#9db6c2" strokeWidth="2" />

        {/* woning */}
        <path d="M60 150 L60 88 L120 52 L180 88 L180 150 Z" fill="#12303f" />
        <rect x="100" y="105" width="40" height="45" fill="#38b6d3" />

        {/* rooilijn */}
        <line x1="430" y1="18" x2="430" y2="282" stroke="#d9531e" strokeWidth="2.5" strokeDasharray="8 6" />
        <text x="438" y="34" fill="#d9531e" fontSize="15" fontWeight="700">
          rooilijn
        </text>

        {/* leiding: privé */}
        <line x1="120" y1="196" x2="404" y2="212" stroke="#0e7490" strokeWidth="13" strokeLinecap="round" />
        {/* huisaansluitputje */}
        <rect x="404" y="176" width="52" height="62" rx="5" fill="#0e7490" />
        <rect x="412" y="184" width="36" height="46" rx="3" fill="#38b6d3" />
        {/* leiding: openbaar */}
        <line x1="456" y1="212" x2="720" y2="228" stroke="#5b7280" strokeWidth="13" strokeLinecap="round" />

        {/* labels */}
        <text x="60" y="252" fill="#0b1e2b" fontSize="16" fontWeight="700">
          Uw privéwaterafvoer
        </text>
        <text x="60" y="274" fill="#1f3945" fontSize="14">
          onderhoud en ontstopping: u
        </text>

        <text x="330" y="150" fill="#0e7490" fontSize="14" fontWeight="700" textAnchor="middle">
          huisaansluiting
        </text>

        <text x="470" y="118" fill="#0e7490" fontSize="15" fontWeight="700">
          huisaansluitputje
        </text>
        <text x="470" y="138" fill="#1f3945" fontSize="13">
          eigendom van de netbeheerder,
        </text>
        <text x="470" y="156" fill="#1f3945" fontSize="13">
          onderhoud tóch voor u
        </text>

        <text x="560" y="266" fill="#0b1e2b" fontSize="16" fontWeight="700" textAnchor="middle">
          Openbaar riool
        </text>
        <text x="560" y="288" fill="#1f3945" fontSize="14" textAnchor="middle">
          vanaf hier: {beheerder}
        </text>

        {/* pijl die de grens markeert */}
        <path d="M456 92 L456 172" stroke="#d9531e" strokeWidth="2" />
        <path d="M456 172 l-6 -10 h12 z" fill="#d9531e" />
        <text x="466" y="88" fill="#d9531e" fontSize="14" fontWeight="700">
          hier stopt uw kosten
        </text>
      </svg>
      <figcaption className="border-t border-water-100 px-4 py-3 text-sm leading-relaxed text-ink-800">
        Uw verantwoordelijkheid loopt tot en met het huisaansluitputje aan de rooilijn, ook wanneer dat
        putje op de stoep ligt en eigendom is van de netbeheerder. Zo staat het in het technisch reglement
        van Fluvius (versie juni 2025).
      </figcaption>
    </figure>
  );
}
