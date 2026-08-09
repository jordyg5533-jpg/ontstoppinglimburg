export const site = {
  naam: "Limburg Ontstoppingsdienst 24/7",
  naamKort: "Limburg Ontstoppingsdienst",
  domein: "ontstoppinglimburg.be",
  url: "https://www.ontstoppinglimburg.be",
  // Het nummer staat bewust nergens als zichtbare tekst op de site — enkel als
  // tel:-link achter een belknop. `telefoon` wordt wel in het schema gebruikt,
  // omdat AI-modellen je gegevens over bronnen kruischecken (NAP-consistentie).
  telefoon: "+32 456 19 13 60",
  telefoonLabel: "Bel ons",
  telefoonHref: "tel:+32456191360",
  email: "info@jgscale.be",
  regio: "Limburg",
  provincie: "Limburg",
  land: "BE",
  taal: "nl-BE",
  slogan: "Riool of afvoer verstopt in Limburg? Wij staan er dag en nacht.",
  // Bewust GEEN adres: dit is een service-area bedrijf zonder vaste vestiging.
  // Nooit een adres verzinnen — zie rank-zonder-gbp playbook.
} as const;

/**
 * Formspree-endpoint voor het lead-formulier.
 * >>> VERVANG "xxxxxxxx" door je eigen form-ID uit het Formspree-dashboard. <<<
 * Je vindt het bij je formulier onder "Integration": https://formspree.io/f/abcdwxyz
 * Enkel het laatste stuk hoort hier — dus "abcdwxyz", niet de volledige URL.
 */
export const FORMSPREE_ID = "xdenenvg";
export const FORMSPREE_ACTION = `https://formspree.io/f/${FORMSPREE_ID}`;
