# Audit ontstoppinglimburg.vercel.app — 9 augustus 2026

Getoetst aan de rank-zonder-gbp skill (bewijs-regels + praktijkhacks) en de blueprint voor winnende stadspagina's. Nagekeken: homepage, /gemeenten, /hasselt, /lommel, /as, /diensten/wc-ontstoppen, /prijzen, /offerte, /kennis, /kennis/wie-betaalt-verstopte-riolering, /kennis/ontstoppingsdienst-kiezen, robots.txt en sitemap. (De sandbox kan geen rauwe `curl` op vercel.app doen; head-elementen zoals canonicals en JSON-LD zijn dus getoetst via de bouwdocumentatie en moeten bij livegang één keer met `curl` op het echte domein herbevestigd worden.)

## Eindoordeel

Dit is inhoudelijk de sterkste van de drie sites. De content slaagt overtuigend voor de verwisseltest, de copy is concreet en menselijk (geen AI-slop-patronen), het extractieformaat is precies wat AI Overviews oppikken, en de gids-framing volgt het bewijs (guides +42% citaties). **De twee zwaktes zitten niet in de content maar ernaast: de site draait nog op het verkeerde domein, en er is bijna nul zichtbaar vertrouwen (geen visuals, geen bedrijfsgegevens, geen legal, en een e-mailadres van een ánder merk).** Dat laatste kost leads, niet rankings.

## Wat al klopt (niet aankomen)

Hyperlocal diepte die concurrenten niet kunnen kopiëren: Riopact in As, 8 °fH in Lommel vs 18 °fH in Hasselt, rioolbeheerder per gemeente, lopende werken met straatnamen (Kiezelstraat, Lutlommel-Leuken-collector). Blokvolgorde verschilt per gemeente (anti-doorway, hack 20). Vlakke URL-structuur vanaf de root (hack 19), schone URL's (+24% citaties), concrete prijstabellen mét bronvermelding en btw-uitleg (citeerbaar), vraag-geformatteerde FAQ's per pagina, "Bijgewerkt augustus 2026" + bronnenblok op de gidsen, de 8-punten-checklist als listicle (63% van citaties zijn lijsten), robots.txt met alle AI-crawlers open, en het Fluvius-huisaansluitputje-feit als scherpste citeerbare troef. Geen stockfoto's en geen verzonnen reviews — de schone route.

## Prioriteit 1 — Blokkerend vóór de nulmeting

**1. Domein koppelen — nu de grootste SEO-fout op de site.** `www.ontstoppinglimburg.be` resolvet niet (DNS niet gekoppeld), terwijl robots.txt op vercel.app al verwijst naar `https://www.ontstoppinglimburg.be/sitemap.xml`. Gevolg vandaag: crawlers die vercel.app vinden, krijgen een sitemap-verwijzing naar een dood domein, en als de canonicals ook al naar .be wijzen, verwijst elke pagina naar een onbereikbare URL. Risico als dit blijft hangen: Google indexeert vercel.app als het "echte" domein en je start je 3-5-maandenklok op een URL die je daarna weer moet verhuizen. Actie: DNS koppelen, `www` primair, vercel.app laat Vercel automatisch 308-redirecten. Pas dáárna GSC + Bing + IndexNow + nulmeting.

**2. `curl`-herverificatie op het echte domein** zodra .be live is: canonical wijst naar `www.ontstoppinglimburg.be`, JSON-LD aanwezig in de statische HTML, en `sitemap.xml` levert leesbare XML met juist content-type (de fetch gaf nu een binary/onleesbaar antwoord terug — mogelijk een compressie- of content-type-kwestie, één keer checken).

## Prioriteit 2 — Vertrouwen (kost nu leads)

**3. E-mailadres `info@jgscale.be` staat zichtbaar op de site.** Dit is de grootste vertrouwensbreuk: een bezoeker met een verstopte wc ziet een ontstoppingsdienst die mailt vanaf een marketingbedrijf-domein. Het breekt ook de NAP-regel (één naam, één schrijfwijze, overal identiek — AI kruischeckt dit). Actie: `info@ontstoppinglimburg.be` aanmaken met forward naar info@jgscale.be, of het adres van de site halen en alleen formulier + belknop tonen.

**4. Privacyverklaring ontbreekt terwijl het formulier een consent-checkbox heeft.** `/privacy` is een 404 en de footer heeft geen enkele legal-pagina. Een checkbox "ik ga akkoord met het gebruik van mijn gegevens" zonder verklaring waarnaar hij verwijst is GDPR-technisch mank én een zichtbaar trust-gat voor de kritische bezoeker (en die kritische bezoeker is precies je gids-publiek). Quick win: één sobere privacypagina, gelinkt vanuit checkbox en footer.

**5. Nul visuals op de hele site.** Geen stockfoto's is de juiste keuze, maar helemaal níets laten zien schaadt dwell time en conversie (hack 10). De schone tussenweg zonder huurder: **eigen diagrammen als SVG**. Eén tekening van rooilijn → huisaansluitputje → privéwaterafvoer met "wie betaalt wat" zou de meest citeerbare afbeelding in de hele Vlaamse niche zijn en versterkt exact je scherpste feit. Tweede kandidaat: een waterhardheidskaartje van Limburg (45 °fH Sint-Truiden vs 8 °fH Lommel). Uniek, feitelijk, geen AI-slop-look, en herbruikbaar op tientallen pagina's.

**6. Geen zichtbare entiteit achter de site.** Geen over-pagina, geen bedrijfsgegevens, footer alleen "© 2026 Limburg Ontstoppingsdienst 24/7". Zonder huurder kun je geen jaren ervaring of erkenningen claimen (terecht niet gedaan), maar een korte, eerlijke "Over deze dienst"-pagina kan wél: wat de dienst doet, werkgebied, de belofte richtprijs-vooraf, waarom de kennisbank bestaat, bereikbaarheid. Dat geeft Google en AI-modellen een entiteit om aan de `Organization` in het schema te hangen, en de bezoeker een reden om het nummer te bellen. Zodra er een huurder is: erkenningen, teamfoto, echte projectfoto's en ondernemingsnummer toevoegen.

## Prioriteit 3 — SEO-fijnslijperij (één wijziging tegelijk, loggen)

**7. H1 van de homepage dekt de hoofdterm niet.** Title en eerste alinea zetten "ontstoppingsdienst" goed neer, maar de H1 is "Riool ontstoppen in Limburg: …" — de winbare hoofdterm is `ontstoppingsdienst limburg` (hack 4: H1 ≈ title, stad + hoofdkeyword). Testkandidaat: "Ontstoppingsdienst in Limburg: snel ter plaatse, met camera-controle en een richtprijs vooraf". Riool/afvoer-varianten blijven via H2's en het dienstencluster gedekt.

**8. Gemeentepagina-titles: "Ontstopping Hasselt" vs "Ontstoppingsdienst Hasselt".** De volumes zitten op de -dienst-variant (ontstoppingsdienst hasselt 140/mnd, genk 90 met CPC €19,93). Overweeg "Ontstoppingsdienst Hasselt | Riool & afvoer 24/7 | …" — de kortere vorm blijft als substring gedekt. Eén ronde, loggen, na 4 weken hermeten.

**9. Merknaam-anchor naar de homepage in de eerste alinea van subpagina's** (hack 19): elke gemeente-, dienst- en kennispagina hoort in de openingszin via "Limburg Ontstoppingsdienst 24/7" naar de homepage te linken zodat de link juice omhoog stroomt. Op de nagekeken pagina's lijkt die anchor te ontbreken — controleren en waar nodig toevoegen; goedkoopste interne-link-fix die er is.

**10. De kiezen-gids kan doorgroeien naar het vergelijkingsformat** (Archetype A). Hij noemt nu geen enkele aanbieder. Een eerlijke, feitelijke sectie ("in Limburg actief: rioolbeheerder-loketten per gemeente + regionale diensten, dit zijn de tarieflogica's") richting "beste ontstoppingsdienst limburg"-queries is de zuiverste rank & rent-zet zonder GBP. Niet urgent; pas na domeinkoppeling en trust-fixes.

**11. Klein bugje: dubbele nummering in de inhoudsopgave** van /kennis/ontstoppingsdienst-kiezen ("1. 1. Een starttarief…"): het `<ol>` nummert en de headingtekst begint zelf óók met "1.". Slordig voor precies het extractieformaat waar AI-engines op leunen. Nummer uit de headingtekst of uit de lijst halen.

**12. FAQ-belofte "Hoe snel kunnen jullie ter plaatse zijn?"** — check dat het antwoord geen concrete responstijd belooft zolang er geen huurder is die ze waarmaakt. Richtlijn-taal ("bij spoed streven we naar dezelfde dag; u hoort het aan de telefoon") houdt het eerlijk zonder de vraag te schrappen.

## Niet doen

Geen reviews of aggregateRating verzinnen, geen adres in schema, geen extra woorden op de pagina's (1.000-2.000 is de bewezen band en daar zitten ze al in), geen map-pack-tactieken, geen goedkope linkpakketten. Content met rust laten tot na de nulmeting — anders is het effect van de titelwijziging (punt 7/8) niet meer te isoleren.

## Volgorde van uitvoering

| # | Actie | Type | Wanneer |
|---|---|---|---|
| 1 | DNS koppelen, www primair, redirect check | Infra | Nu, vóór alles |
| 2 | curl-verificatie canonicals/JSON-LD/sitemap op .be | Check | Direct na 1 |
| 3 | info@ontstoppinglimburg.be (of e-mail verbergen) | Trust | Vóór eerste lead |
| 4 | Privacypagina + footer-link + checkbox-link | Trust | Deze week |
| 5 | GSC + Bing + IndexNow + sitemap + nulmeting | Meten | Na 1-2 |
| 6 | Rooilijn/huisaansluitputje-diagram (SVG) | Content | Week 1-2 |
| 7 | H1 homepage → ontstoppingsdienst-variant | SEO-test | Loggen, alleen |
| 8 | Merknaam-anchor eerste alinea subpagina's | SEO | Samen met 7 uitvoerbaar |
| 9 | Over-deze-dienst-pagina | Trust | Week 2 |
| 10 | Titles gemeentepagina's -dienst-variant | SEO-test | Pas ná hermeting van 7 |
| 11 | ToC-nummering + FAQ-responstijd-check | Hygiëne | Bij eerstvolgende deploy |
| 12 | Socials + citations (hack 11) | Off-page | Na livegang .be |
