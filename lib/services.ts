export type Service = {
  slug: string;
  naam: string;
  kort: string;
  titel: string;
  beschrijving: string;
  intro: string;
  wanneer: string[];
  aanpak: { stap: string; uitleg: string }[];
  prijs?: { wat: string; range: string; noot?: string }[];
  faq: { v: string; a: string }[];
  inMenu: boolean;
};

export const services: Service[] = [
  {
    slug: "riool-ontstoppen",
    naam: "Riool ontstoppen",
    kort: "Hoofdriolering vrijmaken met spiraal of hogedruk",
    titel: "Riool ontstoppen in Limburg | Dag en nacht bereikbaar",
    beschrijving:
      "Verstopte hoofdriolering in Limburg? Wij ontstoppen met spiraal, frees of hogedruk, met camera-controle achteraf. Richtprijzen, btw-regels en wie waarvoor betaalt.",
    intro:
      "Een verstopte hoofdriolering merkt u meestal aan meerdere toestellen tegelijk: de wc loopt traag weg, de douche borrelt en de laagste afvoer in huis loopt als eerste over. Dat is een ander probleem dan één verstopte gootsteen, en het vraagt een andere aanpak.",
    wanneer: [
      "meerdere toestellen lopen tegelijk traag weg",
      "de laagste afvoer in huis (kelder, garage, buitenkraan) loopt over",
      "u hoort borrelen in de wc wanneer de wasmachine leegloopt",
      "er staat water in het huisaansluitputje aan de rooilijn",
    ],
    aanpak: [
      { stap: "Vaststellen waar het zit", uitleg: "Wij openen eerst het huisaansluitputje aan de rooilijn. Staat dat vol, dan zit de verstopping stroomafwaarts. Is het leeg terwijl uw afvoer niet doorloopt, dan zit ze bij u." },
      { stap: "Techniek kiezen", uitleg: "Een spiraal doorboort een prop en werkt snel. Hogedruk spoelt de volledige buiswand schoon en is beter bij aanslag, vet, zand en modder. Bij wortels gebruiken we een frees." },
      { stap: "Controleren met camera", uitleg: "Na het vrijmaken kijken we of de buis heel is. Een terugkerende verstopping heeft bijna altijd een oorzaak in de leiding zelf: een breuk, een knik, een tegenhelling of ingroeiende wortels." },
      { stap: "Advies over wat nu", uitleg: "Is de buis intact, dan volstaat het vrijmaken. Is ze beschadigd, dan krijgt u een keuze tussen relining en vervangen, met een prijsindicatie per meter." },
    ],
    prijs: [
      { wat: "Standaard ontstopping overdag (30-60 min)", range: "€140 - €200 incl. btw" },
      { wat: "Wc of gootsteen ontstoppen", range: "€100 - €200" },
      { wat: "Complexe hoofdriolering (1,5 - 3 uur)", range: "€250 - €400 incl. btw" },
      { wat: "Frezen bij wortelingroei (1-3 uur)", range: "€250 - €450" },
      { wat: "Per bijkomende meter leiding", range: "€7 - €15" },
    ],
    faq: [
      {
        v: "Wat kost een rioolontstopping in Limburg?",
        a: "Een standaard ontstopping overdag ligt in België tussen 140 en 200 euro inclusief btw voor een half uur tot een uur werk. Een complexe hoofdriolering die anderhalf tot drie uur vraagt, kost 250 tot 400 euro. Frezen bij wortelingroei loopt op tot 450 euro. Buiten de kantooruren komen toeslagen: ongeveer 50% 's avonds, 50 tot 75% op zaterdag en 100% op zondag of een feestdag.",
      },
      {
        v: "Betaal ik 6% of 21% btw op een ontstopping?",
        a: "Is uw woning ouder dan tien jaar en wordt ze hoofdzakelijk als privéwoning gebruikt, dan geldt 6% btw op ontstopping, camera-inspectie, hogedrukreiniging en rioolherstel. Sinds 1 juli 2022 is daarvoor geen apart btw-attest meer nodig: een gespecificeerde vermelding op de factuur volstaat. Voor woningen jonger dan tien jaar en voor niet-residentiële panden is het 21%.",
      },
      {
        v: "Wie betaalt: ik of de rioolbeheerder?",
        a: "Het Fluvius-reglement is duidelijk: het overnamepunt tussen huisaansluiting en privéwaterafvoer ligt aan de rooilijn, maar het onderhoud van de privéwaterafvoer én van de huisaansluiting tot en met het huisaansluitputje valt steeds ten laste van de klant. Ligt dat putje op de stoep, dan blijft het toch uw verantwoordelijkheid, ook al is het eigendom van de netbeheerder. Pas voorbij het huisaansluitputje is de rioolbeheerder aan zet.",
      },
    ],
    inMenu: true,
  },
  {
    slug: "wc-ontstoppen",
    naam: "Wc ontstoppen",
    kort: "Verstopt toilet, snel en zonder schade",
    titel: "Wc ontstoppen in Limburg | Verstopt toilet snel opgelost",
    beschrijving:
      "Wc verstopt in Limburg? Ontdek eerst wat u zelf kunt doen, wanneer u beter belt en wat een professionele wc-ontstopping kost in 2026.",
    intro:
      "Een verstopte wc is het meest gemelde afvoerprobleem in Vlaanderen: alleen al op de zoekterm wc ontstoppen zoeken maandelijks duizenden mensen. In de helft van de gevallen zit de prop in de wc zelf en raakt u er zonder gereedschap uit. In de andere helft zit ze verderop, en dan maakt doorspoelen het erger.",
    wanneer: [
      "het water stijgt bij doorspoelen en zakt daarna traag",
      "u hoort borrelen in de douche als u doorspoelt",
      "er komt geur uit de wc die er eerder niet was",
      "meerdere toiletten in huis lopen tegelijk slecht weg",
    ],
    aanpak: [
      { stap: "Eerst: niet blijven doorspoelen", uitleg: "Elke extra spoeling voegt water toe aan een buis die het niet kwijt raakt. Stop met spoelen zodra u merkt dat het water blijft staan." },
      { stap: "Ontstopper of zuiger", uitleg: "Een klassieke rubberen ontstopper werkt bij een prop in de sifon van de wc zelf. Zorg dat er genoeg water in de pot staat zodat de zuiger echt afsluit." },
      { stap: "Spiraal via de wc", uitleg: "Zit de prop verderop, dan gaan wij met een spiraal via de wc of via een inspectiepunt. Nooit met scherp gereedschap in de porseleinen pot: dat kost u een nieuwe wc." },
      { stap: "Oorzaak bepalen", uitleg: "Is het al de derde keer dit jaar, dan is de prop het symptoom en niet het probleem. Dan kijken we met camera naar verval, wortels en breuken." },
    ],
    prijs: [
      { wat: "Wc ontstoppen overdag", range: "€100 - €200" },
      { wat: "Bad- of doucheafvoer", range: "€100 - €150" },
      { wat: "Avondtarief 17-22u", range: "+50%" },
      { wat: "Zondag of feestdag", range: "+100%" },
    ],
    faq: [
      {
        v: "Mag ik chemische ontstopper gebruiken in de wc?",
        a: "Liever niet. Bijtende producten lossen haar en zeep op, maar bijna nooit vochtige doekjes, kalk of wortels: precies de oorzaken die wij in Limburg het vaakst zien. Werkt het product niet, dan staat er wel een laag bijtend water in uw buis wanneer een technicus eraan begint. Zeg het altijd als u iets gebruikt hebt.",
      },
      {
        v: "Waarom veroorzaken vochtige doekjes zoveel verstoppingen?",
        a: "Ze breken niet af zoals wc-papier. In de leiding haken ze aan een oneffenheid: een voeg, een ruwe rand, een bocht, en vormen daar een net waarin vet en haar blijven hangen. Bij drukriolering, zoals in verspreide buitengebieden in Pelt, blokkeren ze bovendien de pomp. Ook doekjes met de vermelding doorspoelbaar horen in de vuilnisbak.",
      },
    ],
    inMenu: true,
  },
  {
    slug: "camera-inspectie",
    naam: "Camera-inspectie",
    kort: "Zien wat er echt in de leiding gebeurt",
    titel: "Camera-inspectie riool in Limburg | Oorzaak vinden, niet gokken",
    beschrijving:
      "Camera-inspectie van uw riolering in Limburg: wat het kost, wanneer het zinvol is en wat u op de beelden ziet. Inclusief zenderlokalisatie en hellingmeting.",
    intro:
      "Een ontstopping maakt de buis vrij. Een camera-inspectie vertelt u waarom ze dichtging. Dat verschil is geld waard: bij een terugkerende verstopping betaalt u anders elk jaar opnieuw voor hetzelfde symptoom.",
    wanneer: [
      "dezelfde verstopping komt binnen het jaar terug",
      "u wil weten of een leiding nog goed is voor u een oprit of terras aanlegt",
      "er is verzakking of wateroverlast zonder duidelijke oorzaak",
      "u koopt een woning en wil de staat van de riolering kennen",
      "u moet aantonen waar uw leiding loopt voor werken",
    ],
    aanpak: [
      { stap: "Camera door de leiding", uitleg: "Wij voeren een camera in via een inspectieput, een dakontluchting of het huisaansluitputje en filmen het volledige traject." },
      { stap: "Zender voor lokalisatie", uitleg: "Met een zender in de camerakop bepalen wij op de centimeter waar en hoe diep een probleem zit. Dat voorkomt dat er blind gegraven wordt." },
      { stap: "Hellingmeting", uitleg: "Te weinig verval of een tegenhelling zorgt voor blijvende problemen die geen enkele ontstopping oplost. De meting toont dat objectief aan." },
      { stap: "Rapport met beelden", uitleg: "U krijgt de beelden en een korte beschrijving van wat er te zien is: bruikbaar bij een verzekering, een aankoop of een discussie met de rioolbeheerder." },
    ],
    prijs: [
      { wat: "Camera-inspectie", range: "€80 - €180", noot: "vaak gratis of aan verminderd tarief bij werken boven €200" },
      { wat: "Zender voor lokalisatie", range: "+€25 - €50" },
      { wat: "Rookproef bij geurhinder", range: "€75 - €190" },
      { wat: "Kleurstofonderzoek", range: "vanaf €45" },
    ],
    faq: [
      {
        v: "Wanneer is een camera-inspectie de moeite waard?",
        a: "Zodra dezelfde verstopping binnen het jaar terugkomt. Dan is er vrijwel altijd een fysieke oorzaak: een gebroken voeg, ingroeiende wortels, een knik of te weinig verval. Voor 80 tot 180 euro weet u dat, in plaats van elk jaar 150 euro te betalen voor een tijdelijke oplossing. Ook bij aankoop van een oudere woning is het een van de goedkoopste manieren om een dure verrassing te vermijden.",
      },
      {
        v: "Wat is een tegenhelling en waarom is dat erg?",
        a: "Een afvoerleiding moet gelijkmatig aflopen. Bij een tegenhelling loopt een stuk buis omhoog, waardoor er permanent water blijft staan. In dat stilstaande water zakken vaste delen naar de bodem en bouwen ze een bank op. U kunt die wegspoelen, maar ze komt terug omdat de oorzaak de vorm van de buis is. Een hellingmeting tijdens de camera-inspectie toont dit in één beweging.",
      },
    ],
    inMenu: true,
  },
  {
    slug: "septische-put-ledigen",
    naam: "Septische put ledigen",
    kort: "Ruimen en controleren, met afvoer van het slib",
    titel: "Septische put ledigen in Limburg | Prijs, frequentie en regels",
    beschrijving:
      "Septische put laten ledigen in Limburg: hoe vaak het moet, wat het kost in 2026, welk btw-tarief geldt en wanneer een put wettelijk verplicht is.",
    intro:
      "Septische put ledigen is een van de meest gezochte afvoerdiensten in België: logisch, want in het landelijke buitengebied van Haspengouw, de Voerstreek en Noord-Limburg zijn duizenden woningen er nog van afhankelijk. Toch weten weinig mensen hoe vaak het echt moet.",
    wanneer: [
      "uw wc of douche loopt traag weg zonder verstopping in huis",
      "u ruikt een onaangename geur rond de put of binnen",
      "u hoort een borrelend geluid in de afvoer",
      "de laatste lediging is meer dan vijf jaar geleden",
    ],
    aanpak: [
      { stap: "Deksel vrijmaken en controleren", uitleg: "Wij openen de put en beoordelen de drijflaag en de sliblaag. Dat bepaalt of een gewone lediging volstaat." },
      { stap: "Leegzuigen", uitleg: "Het slib gaat naar een erkende verwerker. U krijgt een bewijs van afvoer." },
      { stap: "Naspoelen en nazicht", uitleg: "Wij spoelen de put na en controleren de in- en uitlaat op verstopping: dat is vaak de echte oorzaak van een trage afvoer." },
      { stap: "Advies over frequentie", uitleg: "Op basis van het volume, het aantal bewoners en de toestand geven we u een realistisch interval mee." },
    ],
    prijs: [
      { wat: "Standaardput tot 3 m³ binnen 20 m van de straat", range: "ca. €250 incl. btw" },
      { wat: "Algemene richtprijs", range: "€100 - €300" },
      { wat: "Boven 3 m³", range: "+€30 per m³" },
      { wat: "Meer dan 20 m afstand tot de straat", range: "+ca. €20 per 10 m" },
      { wat: "Avond of weekend", range: "+ca. €150" },
    ],
    faq: [
      {
        v: "Hoe vaak moet een septische put geledigd worden?",
        a: "Er is geen wettelijk vastgelegde frequentie. De praktijkaanbeveling is gemiddeld om de drie à vijf jaar, afhankelijk van het volume van de put en het aantal bewoners. Duidelijke signalen dat het tijd is: een verstopte afvoer van toilet of douche, geurhinder in huis en een borrelend geluid in de leiding. Wacht daar liever niet op: een volle put duwt terug richting uw woning.",
      },
      {
        v: "Is een septische put in Vlaanderen verplicht?",
        a: "Dat hangt af van twee dingen: de inkleuring op het zoneringsplan van uw gemeente en de lokale regels. Ligt uw adres in collectief te optimaliseren buitengebied zonder riolering in de straat, dan moet u in afwachting van aansluiting al uw afvalwater via een septische put lozen: zowel zwart als grijs water. Bent u wél aangesloten, dan beslist de rioolbeheerder of een put verplicht blijft; dan gaat er meestal enkel zwart water door.",
      },
      {
        v: "Welke minimumvolumes gelden er?",
        a: "De VMM houdt twee minimumvolumes aan: 2.000 liter wanneer er enkel zwart water door de put gaat, en 3.000 liter wanneer ook grijs water, bad, douche, keuken, wasmachine, erop is aangesloten.",
      },
      {
        v: "Waarom rekenen sommige firma's 21% btw op het ledigen?",
        a: "Omdat het ledigen van een put door sommige aannemers als een ophaal- en verwerkingsdienst wordt behandeld en niet als onderhoudswerk aan een onroerend goed. In dat geval geldt 21% btw, ook bij een woning ouder dan tien jaar, terwijl een ontstopping in datzelfde huis wél aan 6% kan. Vraag dit vooraf na zodat u niet verrast wordt op de factuur.",
      },
    ],
    inMenu: true,
  },
  {
    slug: "regenwaterput-reinigen",
    naam: "Regenwaterput reinigen",
    kort: "Slib eruit, hergebruik terug op peil",
    titel: "Regenwaterput reinigen in Limburg | Prijs per inhoud en frequentie",
    beschrijving:
      "Regenwaterput laten reinigen in Limburg: richtprijzen per inhoud, hoe vaak het nodig is met of zonder voorfilter, en waar u op moet letten bij hergebruik.",
    intro:
      "Sinds de hemelwaterverordening van 2023 is een hemelwaterput bij nieuwbouw en grondige verbouwing verplicht, met minimumvolumes die oplopen tot 10.000 liter bij een dak boven 120 vierkante meter. Al dat opgevangen water moet ook echt gebruikt worden, en daarvoor moet de put schoon zijn.",
    wanneer: [
      "het pompwater ruikt of ziet er troebel uit",
      "uw pomp slaat vaker aan of loopt droog",
      "uw voorfilter is verstopt of ontbreekt",
      "de laatste reiniging is meer dan vijf jaar geleden",
    ],
    aanpak: [
      { stap: "Leegpompen", uitleg: "De put wordt volledig leeggepompt zodat we de bodem kunnen beoordelen." },
      { stap: "Slib verwijderen", uitleg: "Bladresten, zand en fijn stof zakken naar de bodem en vormen een sliblaag die het water bederft en uw pomp beschadigt." },
      { stap: "Wanden reinigen", uitleg: "De wanden en de aanzuigleiding worden nagespoeld, zodat er geen aanslag achterblijft." },
      { stap: "Filter en pomp nakijken", uitleg: "Een voorfilter verlengt het interval van jaarlijks naar drie à vijf jaar. Ontbreekt hij, dan raden we hem aan." },
    ],
    prijs: [
      { wat: "tot 3.000 liter", range: "€150 - €210", noot: "45-60 minuten" },
      { wat: "3.000 - 5.000 liter", range: "€200 - €260" },
      { wat: "5.000 - 7.500 liter", range: "€240 - €290" },
      { wat: "7.500 - 10.000 liter", range: "€285 - €325" },
      { wat: "meer dan 10.000 liter", range: "offerte op maat" },
    ],
    faq: [
      {
        v: "Hoe vaak moet een regenwaterput gereinigd worden?",
        a: "Zonder voorfilter jaarlijks, met voorfilter om de drie à vijf jaar, en in elk geval minimaal om de vijf jaar. Een voorfilter houdt bladeren en grof vuil tegen voor ze in de put belanden: dat is de goedkoopste ingreep om uw reinigingsinterval te verlengen.",
      },
      {
        v: "Welk volume hemelwaterput is verplicht bij nieuwbouw?",
        a: "De hemelwaterverordening die sinds 2 oktober 2023 geldt, koppelt het minimumvolume aan de horizontale dakoppervlakte: 5.000 liter onder 80 vierkante meter dak, 7.500 liter tussen 80 en 120, 10.000 liter tussen 120 en 200, en minstens 100 liter per vierkante meter boven 200. Voor meergezinswoningen en andere gebouwen geldt eveneens minstens 100 liter per vierkante meter.",
      },
    ],
    inMenu: true,
  },
  {
    slug: "hogedrukreiniging",
    naam: "Hogedrukreiniging",
    kort: "De volledige buiswand schoon, niet alleen een gat",
    titel: "Hogedrukreiniging riolering in Limburg | Wanneer dit beter werkt dan een spiraal",
    beschrijving:
      "Hogedrukreiniging van riolering in Limburg: wanneer hogedruk beter werkt dan een spiraal, wat het kost en bij welke bodem- en watersituaties het aangewezen is.",
    intro:
      "Een spiraal boort een gat door een prop; hogedruk spoelt de volledige binnenwand schoon. Dat verschil is groot bij kalkaanslag, vet, zand en modder, en precies dat zijn de drie oorzaken die in Limburg per streek verschillen.",
    wanneer: [
      "uw afvoer wordt geleidelijk trager in plaats van plots dicht te gaan",
      "u woont in Haspengouw met hard water en kalkaanslag",
      "er spoelt zand of modder in uw leiding, typisch in zand- of leemgebied",
      "een spiraalontstopping hield het maar enkele weken vol",
    ],
    aanpak: [
      { stap: "Beoordelen van de aanslag", uitleg: "Met camera bekijken we of de vernauwing komt van aanslag op de wand of van een lokale prop. Dat bepaalt de keuze." },
      { stap: "Kop kiezen", uitleg: "Een terugspuitende kop werkt de leiding uit naar het hoofdriool toe; een frezende kop pakt wortels en harde aanslag." },
      { stap: "Spoelen op werkdruk", uitleg: "De druk wordt afgestemd op het buismateriaal. Oude gres en beton verdragen minder dan modern pvc." },
      { stap: "Nacontrole", uitleg: "Achteraf controleren we het resultaat met camera zodat u ziet dat de wand echt vrij is." },
    ],
    prijs: [
      { wat: "Hogedrukreiniging bovenop het basiswerk", range: "€100 - €200" },
      { wat: "Inzet zuigunit", range: "+€90" },
    ],
    faq: [
      {
        v: "Spiraal of hogedruk: wat heb ik nodig?",
        a: "Een spiraal is de juiste keuze bij een duidelijke, lokale prop: een handdoek, een speelgoedje, een pak doekjes. Hogedruk is beter wanneer de buis over een lange afstand vernauwd is door kalk, vet, zand of modder. Vuistregel: ging uw afvoer plots dicht, denk spiraal. Werd hij over maanden trager, denk hogedruk.",
      },
      {
        v: "Waarom speelt kalk in Sint-Truiden meer dan in Lommel?",
        a: "Door de waterhardheid. In Sint-Truiden ligt die rond 45 °fH en in Tongeren rond 42 °fH: heel hard water. In Lommel is het ongeveer 8 °fH, zacht water. Kalk slaat neer op de binnenwand en vormt samen met vet en zeep een laag die de buis stelselmatig vernauwt. In Haspengouw is een geleidelijk tragere afvoer daarom vaak een kalkverhaal; in de Kempen bijna nooit.",
      },
    ],
    inMenu: true,
  },
  {
    slug: "rioolherstel-relining",
    naam: "Rioolherstel en relining",
    kort: "Gebroken of verzakte leiding herstellen zonder graven",
    titel: "Rioolherstel en relining in Limburg | Prijs per meter en werkwijze",
    beschrijving:
      "Gebroken, verzakte of ingegroeide riolering in Limburg herstellen: relining zonder graafwerk versus volledige vervanging, met richtprijzen per meter voor 2026.",
    intro:
      "Wanneer een camera-inspectie een breuk, een knik of ingroeiende wortels toont, is opnieuw ontstoppen uitstel. Er zijn dan twee routes: relining vanuit een bestaande opening, of de leiding openleggen en vervangen. Het verschil in prijs, hinder en werfduur is aanzienlijk.",
    wanneer: [
      "camerabeelden tonen een breuk, scheur of ingezakt stuk",
      "wortels groeien via voegen naar binnen en komen na het frezen terug",
      "er is een tegenhelling of knik waardoor water blijft staan",
      "de leiding ligt onder een oprit, terras of aanbouw die u niet wil opbreken",
    ],
    aanpak: [
      { stap: "Diagnose met camera en zender", uitleg: "Eerst exact bepalen waar en hoe diep het probleem zit, en over welke lengte." },
      { stap: "Voorbereiden van de buis", uitleg: "De leiding wordt gefreesd en gereinigd zodat de kous overal aan de wand hecht." },
      { stap: "Kousrenovatie", uitleg: "Een met hars gedrenkte kous wordt in de bestaande buis gebracht en uitgehard. Zo ontstaat er een nieuwe buis in de oude, zonder graafwerk." },
      { stap: "Eindcontrole", uitleg: "Na uitharding volgt een camera-controle van het volledige gerenoveerde traject." },
    ],
    prijs: [
      { wat: "Relining DN 100-125 (standaardwoning)", range: "€80 - €150 per meter" },
      { wat: "Relining DN 150-200", range: "€120 - €200 per meter" },
      { wat: "Relining DN 250-400", range: "€150 - €250 per meter" },
      { wat: "Typisch relining-project bij een woning", range: "€1.200 - €3.500" },
      { wat: "Traditioneel vervangen met graafwerk", range: "€200 - €400 per meter", noot: "plus herstel van oprit, terras of tuin" },
    ],
    faq: [
      {
        v: "Wat is kousrenovatie of relining precies?",
        a: "Er wordt een met hars gedrenkte kous in uw bestaande leiding gebracht en ter plaatse uitgehard. Het resultaat is een nieuwe, naadloze buis binnenin de oude. Er hoeft niet gegraven te worden, wat vooral telt wanneer de leiding onder een oprit, terras of aanbouw ligt.",
      },
      {
        v: "Hoeveel bespaart relining tegenover vervangen?",
        a: "Relining ligt doorgaans 30 tot 40% lager dan volledige vervanging en de werfduur is ongeveer één werkdag in plaats van drie tot vijf. Daar komt bij dat u geen oprit, terras of tuin hoeft te herstellen: een kost die bij graafwerk vaak wordt onderschat. De levensduur van een correct uitgevoerde relining is minstens vijftig jaar.",
      },
      {
        v: "Geldt hier 6% btw op?",
        a: "Ja, rioolherstel valt onder herstelling en onderhoud aan een onroerend goed. Is uw woning ouder dan tien jaar en hoofdzakelijk privé in gebruik, dan geldt het verlaagde tarief van 6%. Bij nieuwbouw jonger dan tien jaar is het 21%.",
      },
    ],
    inMenu: true,
  },
  {
    slug: "keuring-privewaterafvoer",
    naam: "Keuring privéwaterafvoer",
    kort: "Verplicht bij nieuwbouw, aansluiting en afkoppeling",
    titel: "Keuring privéwaterafvoer in Limburg | Wanneer verplicht en wat kost het",
    beschrijving:
      "Keuring van de privéwaterafvoer in Vlaanderen: in welke vier gevallen ze verplicht is, wie mag keuren, wat gecontroleerd wordt en wat het kost in 2026.",
    intro:
      "Sinds juli 2011 is een keuring van de privéwaterafvoer verplicht in Vlaanderen. De keuringsplicht staat in artikel 12/1 van het Algemeen Waterverkoopreglement, met technische specificaties die AquaFlanders jaarlijks bijwerkt: de recentste versie dateert van januari 2026.",
    wanneer: [
      "bij nieuwbouw of herbouw",
      "bij een nieuwe of bijkomende huisaansluiting, of plaatsing van een IBA",
      "bij aanleg van gescheiden riolering op het openbaar domein, tenzij u een conform attest hebt dat jonger is dan vijf jaar",
      "na vaststelling van een inbreuk of na herstelwerken volgend op een niet-conform attest",
    ],
    aanpak: [
      { stap: "Scheiding controleren", uitleg: "Is afvalwater volledig gescheiden van hemelwater op uw privéterrein, tot aan de perceelsgrens?" },
      { stap: "Toestellen en verhardingen nakijken", uitleg: "Zijn wc, lavabo, douche en de afvoer van verharde oppervlakken correct aangesloten?" },
      { stap: "Verplichte installaties", uitleg: "Aanwezigheid en correcte werking van hemelwaterput, septische put of IBA en van infiltratie- of buffervoorzieningen waar die vereist zijn." },
      { stap: "Hergebruik beoordelen", uitleg: "Wordt het opgevangen hemelwater effectief hergebruikt voor wc, poetswater, wasmachine en buitengebruik?" },
    ],
    prijs: [
      { wat: "Eengezinswoning", range: "vanaf €150 excl. btw", noot: "ongeveer €181,50 incl. 21%; realistische marktrange €150 - €250 incl. btw" },
      { wat: "Meergezinswoning, 2 wooneenheden", range: "vanaf €150 excl. btw" },
      { wat: "Per bijkomende wooneenheid", range: "+€40" },
      { wat: "Herkeuring", range: "goedkoper dan een eerste keuring" },
    ],
    faq: [
      {
        v: "Wie mag mijn privéwaterafvoer keuren?",
        a: "Keurders die erkend zijn door Vlario of AquaFlanders, en ook het drinkwaterbedrijf zelf. Fluvius aanvaardt alle door Fluvius erkende keurders. Keurders volgen een opleiding met jaarlijkse bijscholing en moeten onmiddellijk na de keuring een conform digitaal keuringsdossier afleveren. Vraag dat dossier altijd op: u hebt het nodig bij de aansluiting en bij een latere verkoop.",
      },
      {
        v: "Wat als mijn keuring niet conform is?",
        a: "Dan krijgt u een niet-conform attest met de vastgestelde gebreken. U voert de herstelwerken uit en laat opnieuw keuren; die herkeuring is doorgaans goedkoper dan de eerste. Zolang er geen conform attest is, kan de rioolbeheerder de aansluiting weigeren of de ingebruikname uitstellen. De meest voorkomende fout is een dakgoot of terrasafvoer die op de vuilwaterleiding is aangesloten.",
      },
    ],
    inMenu: false,
  },
];

export const menuServices = services.filter((s) => s.inMenu);

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
