export type Section = {
  h2: string;
  tekst?: string[];
  lijst?: string[];
  tabel?: { kop: string[]; rijen: string[][]; bijschrift?: string };
};

export type Article = {
  slug: string;
  titel: string;
  h1: string;
  beschrijving: string;
  bijgewerkt: string;
  intro: string[];
  secties: Section[];
  faq: { v: string; a: string }[];
  bronnen?: { naam: string; url: string }[];
};

export const articles: Article[] = [
  {
    slug: "wat-kost-riool-ontstoppen",
    titel: "Wat kost riool ontstoppen in Limburg? Prijzen 2026",
    h1: "Wat kost riool ontstoppen in Limburg?",
    beschrijving:
      "Volledig prijsoverzicht voor rioolontstopping in Limburg in 2026: dagtarief, nacht- en weekendtoeslagen, camera-inspectie, septische put en rioolherstel. Met btw-regels.",
    bijgewerkt: "augustus 2026",
    intro: [
      "De meeste mensen bellen een ontstoppingsdienst op het slechtste moment: als het water al over de rand komt. Dan is er geen tijd om prijzen te vergelijken. Daarom zetten we hier de marktprijzen voor Limburg en de rest van België op een rij, met de toeslagen die het verschil maken.",
      "Belangrijk vooraf: dit zijn marktprijzen uit gepubliceerde prijslijsten, geen vaste tarieven. De uiteindelijke kost hangt af van de aard van de verstopping, de bereikbaarheid van de leiding en het uur waarop u belt.",
    ],
    secties: [
      {
        h2: "Ontstopping: wat u betaalt overdag",
        tekst: [
          "Voor een gewone ontstopping tijdens de kantooruren, met een werkduur van dertig tot zestig minuten, ligt de Belgische marktprijs tussen 140 en 200 euro inclusief btw. Een verstopte wc of gootsteen valt daar meestal onder; een bad- of doucheafvoer ligt iets lager.",
          "Wordt het een complexe ingreep op de hoofdriolering die anderhalf tot drie uur duurt, dan loopt dat op tot 250 à 400 euro. Bij wortelingroei is frezen nodig, en daar staat 250 tot 450 euro tegenover.",
        ],
        tabel: {
          kop: ["Ingreep", "Richtprijs incl. btw"],
          rijen: [
            ["Standaard ontstopping overdag (30-60 min)", "€140 - €200"],
            ["Wc of gootsteen ontstoppen", "€100 - €200"],
            ["Bad- of doucheafvoer", "€100 - €150"],
            ["Complexe hoofdriolering (1,5 - 3 uur)", "€250 - €400"],
            ["Frezen bij wortelingroei (1-3 uur)", "€250 - €450"],
            ["Per bijkomende meter leiding", "€7 - €15"],
          ],
          bijschrift: "Marktprijzen België, stand 2026.",
        },
      },
      {
        h2: "Nacht- en weekendtoeslagen: hier zit het echte verschil",
        tekst: [
          "Een ontstopping op zondagnacht kan makkelijk het dubbele kosten van dezelfde ingreep op dinsdagochtend. Dat is geen willekeur: de toeslagen zijn in de sector vrij standaard.",
          "Kunt u wachten tot de volgende ochtend, dan bespaart u vaak honderd euro of meer. Loopt er water uw woning binnen of is het uw enige toilet, dan is wachten geen optie — maar weet dan wat u betaalt.",
        ],
        tabel: {
          kop: ["Moment", "Toeslag", "Totaalprijs"],
          rijen: [
            ["Overdag (kantooruren)", "geen", "€140 - €200"],
            ["Avond 17u - 22u", "+50%", "€200 - €300"],
            ["Zaterdag", "+50% tot +75%", "€225 - €350"],
            ["Zondag of feestdag", "+100%", "€280 - €400"],
            ["Nacht 22u - 7u", "+100% tot +150%", "€300 - €500"],
          ],
        },
      },
      {
        h2: "Camera-inspectie en onderzoek",
        tekst: [
          "Een camera-inspectie kost 80 tot 180 euro. Veel firma's rekenen ze aan een verlaagd tarief of gratis aan wanneer er meteen werken volgen boven de 200 euro.",
          "Voor moeilijker vast te stellen problemen bestaan er aanvullende technieken: een zender om de leiding exact te lokaliseren, een rookproef bij geurhinder en een kleurstoftest om te achterhalen welke buis waar naartoe loopt.",
        ],
        tabel: {
          kop: ["Onderzoek", "Richtprijs"],
          rijen: [
            ["Camera-inspectie riool", "€80 - €180"],
            ["Zender voor lokalisatie", "+€25 - €50"],
            ["Rookproef bij geurhinder", "€75 - €190"],
            ["Kleurstofonderzoek", "vanaf €45"],
            ["Hogedrukreiniging bovenop basiswerk", "€100 - €200"],
          ],
        },
      },
      {
        h2: "Septische put, regenwaterput en rioolherstel",
        tekst: [
          "Een septische put van maximaal drie kubieke meter binnen twintig meter van de straat kost ongeveer 250 euro inclusief btw om te ledigen. Boven dat volume komt er ongeveer 30 euro per kubieke meter bij, en per tien meter extra afstand ongeveer 20 euro.",
          "Een regenwaterput reinigen loopt van 150 euro voor een put tot 3.000 liter tot 325 euro voor een put van 10.000 liter. Grotere putten gaan op offerte.",
          "Moet de leiding hersteld worden, dan is relining bijna altijd voordeliger dan opgraven: 80 tot 150 euro per meter voor een standaardwoning, tegenover 200 tot 400 euro per meter bij traditioneel vervangen — en dan komt bij dat laatste het herstel van uw oprit, terras of tuin er nog bij.",
        ],
        tabel: {
          kop: ["Werk", "Richtprijs"],
          rijen: [
            ["Septische put ledigen tot 3 m³, binnen 20 m", "ca. €250 incl. btw"],
            ["Regenwaterput reinigen tot 3.000 l", "€150 - €210"],
            ["Regenwaterput reinigen 7.500 - 10.000 l", "€285 - €325"],
            ["Relining DN 100-125", "€80 - €150 per meter"],
            ["Typisch relining-project woning", "€1.200 - €3.500"],
            ["Traditioneel vervangen met graafwerk", "€200 - €400 per meter"],
          ],
        },
      },
      {
        h2: "6% of 21% btw: de vijf voorwaarden",
        tekst: [
          "Ontstopping, camera-inspectie, hogedrukreiniging en rioolherstel vallen onder herstelling en onderhoud aan een onroerend goed. Daardoor kan het verlaagde btw-tarief van 6% gelden.",
          "Let op één praktische uitzondering: het ledigen van een septische put wordt door sommige aannemers als ophaal- en verwerkingsdienst gefactureerd, en dan geldt 21% btw ook bij een oudere woning. Vraag dat vooraf na.",
        ],
        lijst: [
          "de woning is ouder dan tien jaar",
          "het gaat om omvorming, renovatie, verbetering, herstelling of onderhoud",
          "de woning wordt hoofdzakelijk als privéwoning gebruikt",
          "de werken worden rechtstreeks aan de eindgebruiker gefactureerd",
          "sinds 1 juli 2022 is er geen apart btw-attest meer nodig; een gespecificeerde vermelding op de factuur volstaat",
        ],
      },
      {
        h2: "Vier manieren om de rekening te drukken",
        lijst: [
          "Bel overdag als het kan. Het verschil tussen dinsdagochtend en zondagnacht is snel 150 euro.",
          "Weet waar uw huisaansluitputje ligt. Een technicus die er meteen bij kan, werkt sneller — en u betaalt per tijdseenheid.",
          "Laat bij een tweede verstopping binnen het jaar meteen een camera meegaan. Anders betaalt u elk jaar opnieuw voor hetzelfde symptoom.",
          "Vraag vooraf naar het btw-tarief en het starttarief inclusief verplaatsing. Die twee samen bepalen het gros van uw factuur.",
        ],
      },
    ],
    faq: [
      {
        v: "Wat is de gemiddelde prijs voor een ontstopping in Limburg?",
        a: "Reken op 140 tot 200 euro inclusief btw voor een standaardontstopping overdag. Buiten de kantooruren komen toeslagen: ongeveer 50% 's avonds, 50 tot 75% op zaterdag en 100% op zondag of feestdag. Een complexe ingreep op de hoofdriolering kost 250 tot 400 euro.",
      },
      {
        v: "Is een gratis camera-inspectie echt gratis?",
        a: "Meestal betekent het dat de camerakost wegvalt wanneer er in dezelfde beurt werken volgen boven ongeveer 200 euro. Op zich is dat correct, maar vraag het expliciet na: sommige firma's rekenen ze wel aan als er uiteindelijk geen werken nodig blijken. Een losse camera-inspectie kost 80 tot 180 euro.",
      },
      {
        v: "Krijg ik de kosten terug van mijn verzekering?",
        a: "De ontstopping zelf valt zelden onder een woningpolis; die is er voor schade, niet voor onderhoud. Waterschade als gevolg van een gesprongen of overlopende leiding kan wél gedekt zijn. Bewaar in dat geval de camerabeelden en het verslag — een verzekeraar vraagt bijna altijd bewijs van de oorzaak.",
      },
    ],
    bronnen: [
      { naam: "FOD Financiën — btw-tarief bij verbouwen", url: "https://fin.belgium.be/nl/particulieren/woning/bouwen-verbouwen/verbouwen/verbouwen-btw-tarief" },
    ],
  },
  {
    slug: "wie-betaalt-verstopte-riolering",
    titel: "Wie betaalt een verstopte riolering: u of de rioolbeheerder?",
    h1: "Wie betaalt een verstopte riolering in Vlaanderen?",
    beschrijving:
      "De grens ligt bij het huisaansluitputje, niet bij de stoeprand. Wat het Fluvius-reglement letterlijk zegt over wie betaalt bij een verstopping, en hoe u zelf vaststelt aan welke kant het probleem zit.",
    bijgewerkt: "augustus 2026",
    intro: [
      "Dit is de vraag waar in de praktijk de meeste discussie over ontstaat, en het antwoord is preciezer dan de meeste mensen denken. Het draait niet om de stoeprand en niet om wie eigenaar is van de put, maar om één specifiek punt: het huisaansluitputje.",
    ],
    secties: [
      {
        h2: "Wat het reglement letterlijk zegt",
        tekst: [
          "Het technisch reglement voor huisaansluiting en privéwaterafvoer van Fluvius, versie juni 2025, legt het overnamepunt vast op de rooilijn: dat is de scheiding tussen huisaansluiting en privéwaterafvoer.",
          "Maar dan volgt de zin die telt: het onderhoud van de privéwaterafvoer en een deel van de huisaansluiting tot en met het huisaansluitputje valt steeds ten laste van de klant. Ligt dat putje op het openbaar domein, dan valt het onderhoud van de huisaansluiting tot aan het putje nog altijd ten laste van de klant.",
          "Het huisaansluitputje blijft daarbij eigendom van de netbeheerder — maar het moet regelmatig door u geïnspecteerd en desgevallend vrijgemaakt worden. Eigendom en onderhoudsplicht liggen hier dus bewust uit elkaar.",
        ],
      },
      {
        h2: "In gewone taal",
        lijst: [
          "Alles vanaf uw woning tot en met het huisaansluitputje: uw kosten.",
          "Voorbij het huisaansluitputje, in het openbare riool: de rioolbeheerder.",
          "Het feit dat het putje op de stoep ligt, verandert daar niets aan.",
          "Muurdoorvoerstukken horen altijd bij de privéwaterafvoer, waar ze ook liggen.",
        ],
      },
      {
        h2: "Zelf vaststellen aan welke kant het zit",
        tekst: [
          "U kunt dit in vijf minuten zelf nagaan, en dat scheelt discussie én een verplaatsingskost.",
          "Open het huisaansluitputje aan de rooilijn. Staat het vol water terwijl het niet regent, dan zit de verstopping stroomafwaarts — richting het openbare net. Is het leeg terwijl uw afvoer binnen niet doorloopt, dan zit het probleem tussen uw woning en dat putje, en is het voor u.",
          "Een tweede aanwijzing: hebben uw buren hetzelfde probleem, dan wijst dat op het openbare stelsel. Bent u de enige, dan ligt het bij u.",
        ],
      },
      {
        h2: "Niet elke gemeente belt u dezelfde nummer",
        tekst: [
          "In het grootste deel van Limburg is Fluvius de rioolbeheerder. Maar er zijn uitzonderingen die veel mensen niet kennen, en die bepalen bij wie u het openbare deel moet melden.",
        ],
        tabel: {
          kop: ["Gemeente", "Rioolbeheerder"],
          rijen: [
            ["Lommel", "de stad zelf"],
            ["Heusden-Zolder", "de gemeente zelf (Team Werkplaats)"],
            ["Bilzen-Hoeselt", "het lokaal bestuur zelf"],
            ["Wellen", "de gemeente zelf"],
            ["As", "Riopact (De Watergroep en Aquafin)"],
            ["Alle overige Limburgse gemeenten", "Fluvius"],
          ],
          bijschrift: "Zoals vermeld door AquaFlanders per postcode en door de gemeenten zelf.",
        },
      },
      {
        h2: "En Aquafin dan?",
        tekst: [
          "Aquafin bouwt en beheert in opdracht van het Vlaamse Gewest de bovengemeentelijke zuiveringsinfrastructuur: de collectoren en de rioolwaterzuiveringsinstallaties. Dat is nog een niveau boven de gemeentelijke riolering.",
          "Voor een verstopping bij u thuis komt u met Aquafin dus nooit rechtstreeks in contact. Wel ziet u de naam terug bij rioleringswerken in uw straat, want die worden vaak door Aquafin uitgevoerd of gecoördineerd.",
        ],
      },
    ],
    faq: [
      {
        v: "Het huisaansluitputje is eigendom van de netbeheerder. Waarom betaal ik dan toch?",
        a: "Omdat eigendom en onderhoudsplicht in het reglement bewust uit elkaar liggen. Het putje blijft eigendom van de netbeheerder, maar het reglement stelt uitdrukkelijk dat het regelmatig door de klant geïnspecteerd en desgevallend vrijgemaakt moet worden. Het onderhoud tot en met dat putje is dus voor u, ook als het op openbaar domein ligt.",
      },
      {
        v: "Wat kost een nieuwe rioolaansluiting bij Fluvius?",
        a: "Het tarief voor de eerste ingebruikname van een rioolaansluiting bedraagt in 2026 945,66 euro exclusief btw, of 1.144,25 euro inclusief 21% btw. Dat geldt ongeacht of het om een gescheiden of niet-gescheiden stelsel gaat. De standaarddiepte van een aansluiting is 80 centimeter.",
      },
      {
        v: "Kan ik de rioolbeheerder aansprakelijk stellen voor waterschade?",
        a: "Alleen wanneer de oorzaak aantoonbaar in het openbare deel ligt. Daarom is het belangrijk om bij schade meteen vast te leggen wat u ziet: foto's van het huisaansluitputje, camerabeelden van uw eigen leiding en een verslag van de vaststelling. Zonder dat bewijs is de discussie achteraf vrijwel niet te winnen.",
      },
    ],
    bronnen: [
      { naam: "Fluvius — technisch reglement huisaansluiting en privéwaterafvoer", url: "https://www.fluvius.be/sites/fluvius/files/2025-06/aanvullende-technische-voorschriften-awvr.pdf" },
      { naam: "VMM — waterzuivering, een gedeelde verantwoordelijkheid", url: "https://vmm.vlaanderen.be/beleid/waterbeleid/riolering-en-waterzuivering/waterzuivering-gedeelde-verantwoordelijkheid" },
    ],
  },
  {
    slug: "rioolbeheerder-per-gemeente-limburg",
    titel: "Wie is de rioolbeheerder in uw Limburgse gemeente?",
    h1: "Rioolbeheerder per Limburgse gemeente",
    beschrijving:
      "Overzicht van de rioolbeheerder per Limburgse gemeente: Fluvius, Riopact of het lokaal bestuur zelf. Plus wat dat concreet verandert aan uw aanvraag, melding en premie.",
    bijgewerkt: "augustus 2026",
    intro: [
      "De meeste Limburgers gaan ervan uit dat Fluvius overal de riolering beheert. Dat klopt voor het grootste deel van de provincie, maar niet overal — en het verschil is niet academisch. Het bepaalt bij welk loket u een aansluiting aanvraagt, waar u een probleem op openbaar domein meldt en op welke premie u recht hebt.",
    ],
    secties: [
      {
        h2: "De uitzonderingen op Fluvius",
        tekst: [
          "Vijf Limburgse gemeenten wijken af van het Fluvius-model. In Lommel, Heusden-Zolder, Bilzen-Hoeselt en Wellen ligt het rioolbeheer bij het lokaal bestuur zelf. In As ligt het bij Riopact, een samenwerking tussen drinkwaterbedrijf De Watergroep en waterzuiveringsbedrijf Aquafin, waar de gemeente sinds 1 januari 2023 vennoot van is.",
          "Concreet in As: een rioolaansluiting vraagt u minstens acht weken voor de start van uw werken aan via Riopact, niet via Fluvius.",
        ],
        tabel: {
          kop: ["Gemeente", "Rioolbeheerder", "Praktisch gevolg"],
          rijen: [
            ["Lommel", "de stad Lommel", "aansluiting, keuring en retributies via de stad"],
            ["Heusden-Zolder", "gemeente, Team Werkplaats", "meldingen op openbaar domein via de gemeente"],
            ["Bilzen-Hoeselt", "het lokaal bestuur", "eigen aanvraagformulier én eigen subsidie gescheiden afvoer"],
            ["Wellen", "de gemeente Wellen", "aanvragen en meldingen via de gemeente"],
            ["As", "Riopact", "aanvraag minstens 8 weken vooraf via Riopact"],
            ["Overige 33 gemeenten", "Fluvius", "aanvraag, premies en meldingen via Fluvius"],
          ],
        },
      },
      {
        h2: "Waarom dit voor uw premie uitmaakt",
        tekst: [
          "De Fluvius-premies gelden alleen in gemeenten waar Fluvius het rioolbeheer heeft overgenomen. Woont u in As, dan komt u daar niet voor in aanmerking — maar de gemeente heeft wel een eigen subsidie voor een individuele waterzuiveringsinstallatie.",
          "Omgekeerd stapelen sommige gemeenten hun eigen premie bovenop die van Fluvius. Riemst heeft een aanvullende premie voor een hemelwaterput met pompinstallatie of een infiltratievoorziening, en Bilzen-Hoeselt heeft een eigen subsidie voor een hemelwaterinstallatie of infiltratievoorziening. Vraag de bedragen op bij uw gemeente: die staan lang niet altijd online.",
        ],
      },
      {
        h2: "Drie niveaus, drie verantwoordelijkheden",
        lijst: [
          "U als eigenaar: alles tot en met het huisaansluitputje, plus zelf zuiveren waar er geen riolering ligt.",
          "De gemeentelijke rioolbeheerder — Fluvius, Riopact of de gemeente: het openbare rioolnet, de aansluitingen en de septische-putvereisten.",
          "Aquafin, in opdracht van het Vlaamse Gewest: de bovengemeentelijke collectoren en de rioolwaterzuiveringsinstallaties.",
        ],
      },
      {
        h2: "Hoe staat Limburg ervoor?",
        tekst: [
          "Vlaanderen haalt een rioleringsgraad van 94,2% in april 2026, met een zuiveringsgraad van 88,6% en een saneringsgraad van 89,0% eind 2024. Ongeveer 2% van de Vlamingen woont te afgelegen voor collectieve riolering en is aangewezen op een verplichte individuele behandelingsinstallatie.",
          "Van de benodigde installaties is er 33,3% gerealiseerd — ongeveer 17.850 stuks. In landelijke Limburgse gemeenten zoals Voeren, Heers en delen van Borgloon is dat geen abstract cijfer: daar zit een deel van de woningen nog altijd op een septische put of een individuele installatie in afwachting van de collector.",
        ],
      },
    ],
    faq: [
      {
        v: "Hoe weet ik zeker wie mijn rioolbeheerder is?",
        a: "AquaFlanders publiceert dat per postcode op mijn drinkwaterbedrijf en rioolbeheerder. Krijgt u daar geen beheerder te zien maar de melding om contact op te nemen met uw gemeente, dan beheert het lokaal bestuur de riolering zelf — dat is bijvoorbeeld het geval voor Bilzen-Hoeselt.",
      },
      {
        v: "Verandert er iets door de gemeentefusies van 2025?",
        a: "Administratief wel: Limburg telt sinds 1 januari 2025 nog 38 gemeenten in plaats van 42, doordat Hasselt met Kortessem, Bilzen met Hoeselt, Tongeren met Borgloon en Tessenderlo met Ham fuseerden. Voor het rioolbeheer zelf blijft de indeling ongewijzigd; u richt zich enkel tot het nieuwe gemeentebestuur.",
      },
    ],
    bronnen: [
      { naam: "AquaFlanders — mijn drinkwaterbedrijf en rioolbeheerder", url: "https://www.aquaflanders.be/mijn-drinkwaterbedrijf-en-rioolbeheerder" },
      { naam: "VMM — riolerings- en zuiveringsgraad", url: "https://vmm.vlaanderen.be/feiten-cijfers/water/riolering-en-waterzuivering/indicator-zuiveringsgraad" },
    ],
  },
  {
    slug: "hemelwaterverordening-2023",
    titel: "Hemelwaterverordening 2023: welke put en welke infiltratie zijn verplicht?",
    h1: "De hemelwaterverordening van 2023 in concrete cijfers",
    beschrijving:
      "De gewestelijke hemelwaterverordening geldt sinds 2 oktober 2023. Welke minimumvolumes hemelwaterput gelden per dakoppervlakte, wanneer infiltratie verplicht is en wat de uitzondering is.",
    bijgewerkt: "augustus 2026",
    intro: [
      "De gewestelijke stedenbouwkundige verordening hemelwater trad op 2 oktober 2023 in werking voor particuliere bouwprojecten, en vanaf januari 2025 ook voor het openbaar domein. Ze verving de verordening van 5 juli 2013 en is op verschillende punten strenger.",
      "Ze geldt bij nieuwbouw, bij grondige verbouwingen en bij ingrepen aan uw afvalwater- of hemelwatervoorziening. Bij de keuring van de privéwaterafvoer wordt gecontroleerd of u ze naleeft.",
    ],
    secties: [
      {
        h2: "Verplicht volume hemelwaterput per dakoppervlakte",
        tekst: [
          "Het minimumvolume van uw hemelwaterput hangt af van de horizontale dakoppervlakte. Voor een gemiddelde nieuwbouwwoning komt dat neer op een put van 7.500 tot 10.000 liter.",
        ],
        tabel: {
          kop: ["Horizontale dakoppervlakte", "Minimumvolume hemelwaterput"],
          rijen: [
            ["minder dan 80 m²", "5.000 liter"],
            ["80 - 120 m²", "7.500 liter"],
            ["120 - 200 m²", "10.000 liter"],
            ["meer dan 200 m²", "minstens 100 liter per m²"],
            ["meergezinswoningen en andere gebouwen", "minstens 100 liter per m²"],
          ],
        },
      },
      {
        h2: "Hergebruik is geen vrije keuze",
        tekst: [
          "De verordening verplicht niet alleen het opvangen maar ook het maximaal gebruiken van het hemelwater. Concreet gaat het om toiletspoeling, poetswater, de wasmachine en buitengebruik zoals de tuin.",
          "Een put die er wel staat maar niet aangesloten is op minstens die toepassingen, voldoet dus niet. Dat is een van de punten die bij een keuring wordt nagekeken.",
        ],
      },
      {
        h2: "Infiltratie of buffering",
        lijst: [
          "Infiltratievoorziening: buffervolume van 33 liter per vierkante meter afwaterende oppervlakte, met een infiltratieoppervlakte van 8% van die afwaterende oppervlakte. Verplicht vanaf 120 vierkante meter.",
          "Buffervoorziening, wanneer infiltratie technisch onmogelijk is: buffervolume van 43 liter per vierkante meter, met een lozingsdebiet van maximaal 5 liter per seconde per hectare. Verplicht vanaf 1.000 vierkante meter.",
          "Uitzondering: de verordening is niet van toepassing wanneer het water op natuurlijke wijze op eigen terrein infiltreert, op voorwaarde dat de onverharde zone minstens een kwart van de afwaterende oppervlakte bedraagt.",
        ],
      },
      {
        h2: "Waarom dit in Limburg per streek anders uitpakt",
        tekst: [
          "Op de Kempense zandgronden — Lommel, Zutendaal, Hechtel-Eksel, Beringen — werkt infiltratie uitstekend. Het hemelwater- en droogteplan van Zutendaal noemt de bodem daar zelfs uiterst geschikt voor infiltratie, en Fluvius testte er poreuze betonbuizen en doorlatend wegdek uit.",
          "In Vochtig Haspengouw ligt dat anders. Alken heeft een ondoorlatende kleibodem met veel bronnen; Heers en Gingelom liggen op leem waar water nauwelijks doorheen zakt. Daar is de bufferoptie met 43 liter per vierkante meter vaak realistischer dan een klassieke infiltratieput.",
          "Laat de doorlatendheid daarom ter plaatse testen voor u een systeem kiest. Een infiltratieput die op papier voldoet maar in leem staat, loopt bij elke stevige bui over.",
        ],
      },
    ],
    faq: [
      {
        v: "Geldt de hemelwaterverordening ook bij een verbouwing?",
        a: "Ze geldt bij nieuwbouw, bij grondige verbouwingen en bij ingrepen aan de afvalwater- of hemelwatervoorziening. Vervangt u enkel een badkamer, dan valt dat er meestal buiten. Legt u een nieuwe afvoer aan, verhoogt u uw verharde oppervlakte of breekt u meer dan 40% van de buitenmuren af, dan komt u wel in het toepassingsgebied.",
      },
      {
        v: "Krijg ik nog een premie voor een hemelwaterput?",
        a: "Ja, maar enkel voor bestaande woningen waar de installatie niet wettelijk verplicht is. Fluvius geeft maximaal 250 euro, de helft van de factuur inclusief btw, voor een hemelwaterput met pompinstallatie bij een woning met een eerste bouwvergunning van voor 7 september 1999. De put moet minstens 50 liter per vierkante meter dak bevatten, met een minimum van 3.000 liter, en minstens de helft van het dak moet aangesloten zijn.",
      },
    ],
    bronnen: [
      { naam: "Departement Omgeving — de gewestelijke hemelwaterverordening 2023", url: "https://omgeving.vlaanderen.be/nl/verordeningen/de-gewestelijke-hemelwaterverordening-2023" },
    ],
  },
  {
    slug: "premies-riolering-limburg",
    titel: "Premies voor riolering, afkoppeling en hemelwater in Limburg (2026)",
    h1: "Welke premies krijgt u in 2026 voor riolering en hemelwater?",
    beschrijving:
      "Overzicht van de Fluvius-premies voor afkoppeling, hemelwaterput en infiltratie in 2026, met bedragen en voorwaarden, plus de Limburgse gemeenten met een eigen aanvullende premie.",
    bijgewerkt: "augustus 2026",
    intro: [
      "Wie afkoppelt, een hemelwaterput plaatst of een infiltratievoorziening aanlegt, kan daar geld voor terugkrijgen. De bedragen zijn niet spectaculair maar ze zijn reëel, en veel mensen laten ze liggen omdat ze de aanvraagtermijn missen.",
      "Let op één ding: de Fluvius-premies gelden alleen in gemeenten waar Fluvius rioolbeheerder is. In As, waar Riopact het beheer doet, komt u er niet voor in aanmerking.",
    ],
    secties: [
      {
        h2: "De drie Fluvius-premies",
        tabel: {
          kop: ["Premie", "Bedrag", "Kernvoorwaarde"],
          rijen: [
            ["Gescheiden afvoersysteem (afkoppeling)", "€500 forfaitair", "eerste bouwvergunning van voor 1 februari 2005; scheiding niet verplicht via bouwvoorschriften"],
            ["Hemelwaterput met pompinstallatie", "max. €250 (helft van de factuur)", "eerste bouwvergunning van voor 7 september 1999; put minstens 3.000 l en 50 l per m² dak"],
            ["Infiltratievoorziening", "max. €250 (50% van de factuur)", "eerste bouwvergunning van voor 1 februari 2005; minstens de helft van het dak aangesloten"],
          ],
        },
        tekst: [
          "De aanvraagtermijn is het punt waarop het vaakst misloopt. Voor de afkoppelingspremie geldt: binnen 24 maanden na een goedgekeurde keuring wanneer u op eigen initiatief afkoppelt, maar binnen 6 maanden na afronding van de werken wanneer het om een gemeentelijk rioleringsproject gaat. Voor de hemelwaterput en de infiltratievoorziening mogen de facturen maximaal twee jaar oud zijn.",
        ],
      },
      {
        h2: "Limburgse gemeenten met een eigen premie",
        lijst: [
          "Riemst: een aanvullende premie voor een hemelwaterput met pompinstallatie of een infiltratievoorziening bij een bestaande woning.",
          "Bilzen-Hoeselt: een subsidie voor een hemelwaterinstallatie of infiltratievoorziening, plus een eigen subsidie voor de aanleg van een gescheiden afvoersysteem.",
          "As: een gemeentelijke subsidie voor een individuele waterzuiveringsinstallatie, aangezien de Fluvius-premies hier niet gelden.",
          "Genk en de regio: een stedelijke premie voor hemelwaterput en infiltratievoorziening.",
          "Heusden-Zolder en Herk-de-Stad: een eigen gemeentelijke subsidie voor afkoppeling of gescheiden riolering.",
        ],
        tekst: [
          "De exacte bedragen van die gemeentelijke premies staan lang niet altijd online. Bel de milieudienst van uw gemeente voor u een aannemer aanstelt — sommige premies vereisen dat u de aanvraag indient voordat de werken starten.",
        ],
      },
      {
        h2: "En de individuele waterzuivering?",
        tekst: [
          "Voor een individuele behandelingsinstallatie bestaat er geen Vlaamse premie voor de burger. Wel krijgt de rioolbeheerder 1.750 euro subsidie per geplaatste installatie wanneer hij die zelf plaatst én beheert, op voorwaarde dat het project in het gemeentelijk investeringsprogramma is opgenomen.",
          "Praktisch betekent dat: informeer bij uw gemeente of de installatie via de rioolbeheerder loopt. Is dat zo, dan zit u meestal goedkoper dan wanneer u ze zelf laat plaatsen.",
        ],
      },
    ],
    faq: [
      {
        v: "Hoeveel krijg ik voor het afkoppelen van regenwater?",
        a: "Fluvius geeft een forfaitaire premie van 500 euro voor een gescheiden afvoersysteem bij een bestaande private woning, op voorwaarde dat de eerste bouwvergunning dateert van voor 1 februari 2005 en dat de scheiding niet al verplicht is via bouwvoorschriften. De afvalwaterleiding moet permanent gescheiden zijn van de hemelwaterleiding tot aan de perceelsgrens.",
      },
      {
        v: "Kan ik gemeentelijke en Fluvius-premies combineren?",
        a: "In veel gevallen wel — Fluvius bevestigt zelf dat sommige gemeenten een extra premie bovenop de hunne geven. Riemst en Bilzen-Hoeselt zijn daar Limburgse voorbeelden van. Controleer wel de voorwaarden van de gemeentelijke premie: die vraagt soms dat u aanvraagt vóór de start van de werken, terwijl Fluvius achteraf werkt.",
      },
    ],
    bronnen: [
      { naam: "Fluvius — premie gescheiden afvoersysteem", url: "https://www.fluvius.be/nl/premies/gescheiden-afvoersysteem" },
      { naam: "VMM — subsidies IBA", url: "https://vmm.vlaanderen.be/diensten-producten/subsidies-iba" },
    ],
  },
  {
    slug: "wc-verstopt-wat-doen",
    titel: "Wc verstopt? Dit doet u eerst, en dit doet u beter niet",
    h1: "Wc verstopt: wat u zelf kunt doen voor u belt",
    beschrijving:
      "Stap voor stap wat u bij een verstopte wc zelf kunt proberen, welke middelen averechts werken en waaraan u herkent dat de verstopping verderop in de leiding zit.",
    bijgewerkt: "augustus 2026",
    intro: [
      "Wc ontstoppen is met ongeveer 1.600 zoekopdrachten per maand een van de meest gestelde vragen in België, en afvoer ontstoppen scoort even hoog. In ongeveer de helft van de gevallen raakt u er zonder technicus uit. In de andere helft maakt doorspoelen het erger.",
    ],
    secties: [
      {
        h2: "Stap 1: stop met doorspoelen",
        tekst: [
          "Dit is de belangrijkste stap en de meest genegeerde. Elke extra spoeling voegt zeven tot negen liter toe aan een buis die het niet kwijt raakt. Wat een vervelend probleem was, wordt zo een overstroming.",
          "Blijft het water hoog staan, wacht dan tien tot vijftien minuten. Zakt het traag, dan is er nog doorgang en heeft u een goede kans met eenvoudige middelen. Zakt het helemaal niet, dan zit de leiding volledig dicht.",
        ],
      },
      {
        h2: "Stap 2: de juiste ontstopper op de juiste manier",
        lijst: [
          "Gebruik een ontstopper met een uitstulping, geen platte gootsteenzuiger. Alleen die sluit af op de bolle vorm van een wc.",
          "Zorg dat er genoeg water in de pot staat om de zuiger onder te dompelen; anders duwt u lucht in plaats van water.",
          "Duw rustig naar beneden en trek krachtig omhoog. De trekbeweging maakt de prop los, niet de duwbeweging.",
          "Herhaal tien tot vijftien keer voor u opgeeft. Eén poging is bijna nooit genoeg.",
        ],
      },
      {
        h2: "Wat u beter niet doet",
        lijst: [
          "Geen bijtende chemische ontstopper. Die lost haar en zeep op, maar bijna nooit vochtige doekjes, kalk of wortels — de drie oorzaken die wij het vaakst zien. Werkt het niet, dan staat er wel bijtend water in uw buis wanneer de technicus begint.",
          "Geen kleerhanger of metalen staaf. U beschadigt het porselein of duwt de prop verder de leiding in, waar hij lastiger te bereiken is.",
          "Geen kokend water in een keramische wc. Het risico op haarscheuren is reëel; lauw tot warm water is veilig.",
          "Geen tuinslang onder druk in de pot. U duwt vuil water terug in uw eigen leidingnet.",
        ],
      },
      {
        h2: "Zo weet u dat het probleem verderop zit",
        tekst: [
          "Er zijn drie duidelijke signalen dat de verstopping niet in de wc zelf zit maar in de hoofdleiding. Dan heeft blijven proberen geen zin.",
        ],
        lijst: [
          "De douche of het bad borrelt wanneer u de wc doorspoelt. Lucht die wordt weggeduwd zoekt de dichtstbijzijnde opening.",
          "Meerdere toestellen lopen tegelijk traag weg, of het laagste punt in huis loopt over.",
          "Er staat water in uw huisaansluitputje aan de rooilijn terwijl het niet regent.",
        ],
      },
      {
        h2: "Bij een derde keer dit jaar: stop met ontstoppen",
        tekst: [
          "Komt dezelfde verstopping binnen het jaar terug, dan is de prop het symptoom en niet het probleem. In vrijwel alle gevallen is er een fysieke oorzaak in de leiding: een gebroken voeg, ingroeiende wortels, een knik of te weinig verval.",
          "Een camera-inspectie kost 80 tot 180 euro en zegt u precies wat er aan de hand is. Dat is minder dan één extra ontstopping op een zondag.",
        ],
      },
    ],
    faq: [
      {
        v: "Zijn doorspoelbare doekjes echt doorspoelbaar?",
        a: "Nee, in de praktijk niet. Ze breken niet af zoals wc-papier en haken in de leiding aan elke oneffenheid — een voeg, een ruwe rand, een bocht. Daar vormen ze een net waarin vet en haar blijven hangen. Bij drukriolering, zoals in verspreide buitengebieden, blokkeren ze bovendien de pomp. Ook doekjes met de vermelding doorspoelbaar horen in de vuilnisbak.",
      },
      {
        v: "Helpt soda of azijn tegen een verstopte wc?",
        a: "Bij een lichte vet- of zeepaanslag in een gootsteen kan het helpen. Bij een echte prop in een wc niet: de reactie is te zwak om vast materiaal te verplaatsen en het middel verdunt meteen in het staande water. Het voordeel is wel dat u de leiding niet beschadigt en dat er geen bijtend product achterblijft.",
      },
      {
        v: "Mijn wc loopt traag weg maar verstopt nooit helemaal. Wat is dat?",
        a: "Dat wijst meestal op een geleidelijke vernauwing van de buis in plaats van een prop. In Haspengouwse gemeenten met hard water, zoals Sint-Truiden rond 45 °fH en Tongeren rond 42 °fH, is dat vaak kalkaanslag in combinatie met vet. In zandgemeenten is het eerder ingespoeld zand. In beide gevallen werkt hogedrukreiniging beter dan een spiraal, omdat de volledige wand schoongemaakt moet worden.",
      },
    ],
  },
  {
    slug: "ontstoppingsdienst-kiezen",
    titel: "Een ontstoppingsdienst kiezen in Limburg: 8 dingen om te controleren",
    h1: "Zo kiest u een ontstoppingsdienst in Limburg",
    beschrijving:
      "Acht concrete controlepunten voor u een ontstoppingsdienst belt in Limburg: van een duidelijk starttarief en btw-tarief tot camera-controle achteraf en afvoer van slib.",
    bijgewerkt: "augustus 2026",
    intro: [
      "Bij een verstopping belt u zelden rustig rond. Toch bepalen een paar vragen aan de telefoon of u een correcte factuur krijgt of een onaangename verrassing. Dit zijn de acht punten die het verschil maken — bruikbaar bij ons én bij eender welke andere firma.",
    ],
    secties: [
      {
        h2: "Een starttarief dat verplaatsing bevat",
        tekst: [
          "Vraag expliciet wat het eerste uur kost inclusief verplaatsing, en tot hoeveel kilometer dat geldt. In de Belgische markt ligt dat rond 140 euro exclusief btw voor het eerste werkuur met verplaatsing tot ongeveer 30 kilometer. Wordt daar apart kilometergeld bovenop gerekend, dan wilt u dat vooraf weten.",
        ],
      },
      {
        h2: "Duidelijkheid over het btw-tarief",
        tekst: [
          "Is uw woning ouder dan tien jaar en hoofdzakelijk privé in gebruik, dan hoort een ontstopping aan 6% btw gefactureerd te worden. Sinds 1 juli 2022 volstaat een gespecificeerde vermelding op de factuur; er is geen apart attest meer nodig. Krijgt u toch 21% aangerekend zonder uitleg, vraag dan waarom.",
        ],
      },
      {
        h2: "De toeslag voor het tijdstip, vooraf genoemd",
        tekst: [
          "Toeslagen van 50% 's avonds tot 150% 's nachts zijn normaal in de sector. Wat niet normaal is, is dat u ze pas op de factuur ontdekt. Laat het bedrag of het percentage aan de telefoon bevestigen.",
        ],
      },
      {
        h2: "Camera-controle na de ontstopping",
        tekst: [
          "Een ontstopping zonder nacontrole is een gok. Vraag of er na het vrijmaken met camera gekeken wordt of de buis intact is. Bij een tweede verstopping binnen het jaar zou dat standaard moeten zijn — anders betaalt u elk jaar opnieuw voor hetzelfde symptoom.",
        ],
      },
      {
        h2: "De juiste techniek voor uw situatie",
        lijst: [
          "Plotse verstopping met een duidelijke aanleiding: een spiraal volstaat.",
          "Geleidelijk trager wordende afvoer: hogedruk, want dan is de wand vernauwd.",
          "Terugkerende verstopping op dezelfde plek: eerst camera, dan pas beslissen.",
          "Wortels: frezen — maar weet dat ze terugkomen als de voeg niet hersteld wordt.",
        ],
      },
      {
        h2: "Bewijs van afvoer bij slib",
        tekst: [
          "Laat u een septische put of een regenwaterput ledigen, vraag dan een bewijs dat het slib naar een erkende verwerker gaat. Dat is niet alleen een wettelijke kwestie; het is ook uw enige bewijs dat het afval correct verwerkt is.",
        ],
      },
      {
        h2: "Kennis van uw gemeente",
        tekst: [
          "Een dienst die weet dat in Lommel, Heusden-Zolder, Bilzen-Hoeselt en Wellen de gemeente zelf het riool beheert, en dat As met Riopact werkt, bespaart u een verkeerd telefoontje. Datzelfde geldt voor de vaststelling wie waarvoor betaalt: alles tot en met het huisaansluitputje is voor u, ook als het op de stoep ligt.",
        ],
      },
      {
        h2: "Een schriftelijke prijsindicatie voor vervolgwerk",
        tekst: [
          "Blijkt de leiding beschadigd, dan volgt er een tweede beslissing: relining of vervangen. Vraag daarvoor een schriftelijke indicatie per meter. Relining ligt doorgaans 30 tot 40% lager dan volledige vervanging en vraagt ongeveer één werkdag in plaats van drie tot vijf.",
        ],
      },
    ],
    faq: [
      {
        v: "Wat is een redelijke wachttijd bij een spoedgeval?",
        a: "Voor een echt spoedgeval — water dat uw woning binnenkomt of uw enige toilet dat onbruikbaar is — is één tot twee uur in Limburg realistisch, afhankelijk van het uur en de drukte. Wordt u een halve dag later beloofd terwijl er water staat, vraag dan of er iemand dichterbij vrij is. Voor niet-dringende zaken wint u geld door tot de volgende ochtend te wachten.",
      },
      {
        v: "Moet ik aanwezig zijn tijdens de werken?",
        a: "Voor de vaststelling en de goedkeuring van de prijs wel. Wij tonen u ook liever zelf de camerabeelden — dat maakt de beslissing over eventueel vervolgwerk een stuk concreter dan een verslag achteraf. Bij een lediging van een put die vlot bereikbaar is, is aanwezigheid meestal niet strikt nodig.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
