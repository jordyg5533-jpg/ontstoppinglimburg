export type CityFaq = { v: string; a: string };

export type City = {
  slug: string;
  naam: string;
  /** Bestuurlijke context sinds de fusies van 1 januari 2025, indien van toepassing. */
  fusie?: string;
  postcode: string;
  inwoners: number;
  inwonersJaar: number;
  streek: string;
  deelgemeenten: string[];
  buurgemeenten: string[];
  waterlopen: string[];
  /** Wie beheert het openbare rioolnet: Fluvius, Riopact of het lokaal bestuur zelf. */
  rioolbeheerder: string;
  rioolbeheerderNoot?: string;
  bodem: string;
  bouwprofiel: string;
  landmarks: string[];
  werken?: string;
  probleem: string;
  uniek: string;
  /** Waterhardheid in °fH, indicatief, commerciële bron. Alleen ingevuld waar gevonden. */
  waterhardheid?: number;
  /** Aquafin StatusTool, toestand 31/03/2026. */
  statusTool?: { dekking: number; risicovol: number; noot?: string };
  faq: CityFaq[];
  /** Volgorde van de inhoudsblokken. Verschilt per gemeente zodat geen twee pagina's dezelfde opbouw hebben. */
  volgorde: BlockKey[];
  prioriteit: 1 | 2 | 3;
};

export type BlockKey =
  | "diensten"
  | "prijzen"
  | "netwerk"
  | "problemen"
  | "werkwijze"
  | "wetgeving"
  | "gebied";
