import type { City } from "./city-types";

/** Groep C — Haspengouw, de Demervallei en het Hageland. */
export const citiesC: City[] = [
  {
    slug: "diepenbeek",
    naam: "Diepenbeek",
    postcode: "3590",
    inwoners: 19788,
    inwonersJaar: 2025,
    streek: "de Demervallei, op de grens van Kempen en Haspengouw",
    deelgemeenten: ["Lutselus", "Rozendaal", "Dorpheide", "Rooierheide", "Bijenberg", "Pampert", "Reitje", "Keizel", "Zwartveld"],
    buurgemeenten: ["Hasselt", "Genk", "Bilzen", "Hoeselt"],
    waterlopen: ["de Demer", "de Stiemer", "de Mombeek", "de Keibeek", "de Paanhuisbeek (ingebuisd)", "het Albertkanaal"],
    rioolbeheerder: "Fluvius",
    bodem: "Overgangsbodem tussen zandig Kempen en lemig Haspengouw, met een sterk verhard centrum.",
    bouwprofiel:
      "Overwegend residentieel en verstedelijkt, met een sterk verhard centrum. Daarnaast historische hoeves, de Boeketwinning met het Hooghuis uit 1685 en een tiendenschuur uit 1650, en de Sint-Servaastoren van rond 1500.",
    landmarks: ["de Sint-Servaaskerk", "de rentmeesterij van Alden Biesen", "natuurgebied De Maten", "de Mombeekvallei"],
    werken:
      "In de Keistraat, delen van de Katteweidelaan en het Reitje kwam een gescheiden stelsel; het afvalwater gaat naar de RWZI van Hasselt. In de Bijenbergstraat kwam eveneens een gescheiden stelsel, met afvoer naar de RWZI van Genk. Voor die werken loosden er nog respectievelijk ongeveer 400 en 300 inwoners ongezuiverd op de beek.",
    probleem:
      "Het gemeentelijk hemelwaterplan spreekt over vele waterlopen die in het verleden aanleiding gaven tot wateroverlast, in combinatie met een sterk verhard centrum. In 2016 zorgden drie zware buien voor schade in het Reitje en het centrum; in juli 2021 volgde opnieuw wateroverlast.",
    uniek:
      "Diepenbeek combineert een verhard centrum met ingebuisde beken zoals de Paanhuisbeek en een landelijke rand die pas rond 2018 op riolering ging. Piekbuien slaan hier dus zowel door verharding als via recent aangesloten buitengebied door.",
    faq: [
      {
        v: "Wat is een ingebuisde beek en waarom is dat relevant?",
        a: "De Paanhuisbeek in Diepenbeek loopt over een deel van haar traject door een buis onder de grond. Zo'n ingebuisde beek gedraagt zich bij zware regen als een riool: ze kan vollopen en dan geen water meer opnemen. Woont u langs zo'n traject, dan kan uw afvoer of straatkolk bij een felle bui tijdelijk niet meer wegraken, ook al is er niets verstopt. Dat verschil is belangrijk voor u weet of u een ontstopper of de gemeente nodig hebt.",
      },
    ],
    volgorde: ["problemen", "netwerk", "diensten", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "zonhoven",
    naam: "Zonhoven",
    postcode: "3520",
    inwoners: 21923,
    inwonersJaar: 2025,
    streek: "de Kempen, in het hart van De Wijers",
    deelgemeenten: ["Termolen", "Halveweg", "Terdonk"],
    buurgemeenten: ["Hasselt", "Houthalen-Helchteren", "Genk", "Heusden-Zolder"],
    waterlopen: ["de Laambeek", "de Roosterbeek", "de Slangbeek"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Zandbodem met een noordoosten op het Limburgs Hoogplateau rond 78 meter en een zuidwesten op 30 tot 35 meter in de Demervallei. Het gebied telt ongeveer 1.175 vijvers over zo'n 700 hectare.",
    bouwprofiel:
      "Zonhoven ging van boerendorp via mijnwerkersgemeente naar verstedelijkte woongemeente. De landbouw is zo goed als verdwenen en de gehuchten Termolen, Halveweg en Terdonk zijn door lintbebouwing bijna aan elkaar gegroeid.",
    landmarks: ["natuurreservaat De Teut", "De Platwijers", "de Holsteen", "de Sint-Quintinuskerk", "industrieterrein De Waerde"],
    werken:
      "In de Tuinwijk werd langs de Beverzakbroekweg, Schutenseweg, Donkeindeweg en Turfstraat een gescheiden stelsel met pompstation aangelegd, mede tegen bestaande wateroverlast. Ook aan de Katschotseweg en Spierhoofseweg kwam een gescheiden stelsel. Daarvoor loosden nog ongeveer 150 en 200 inwoners ongezuiverd op de Roosterbeek en de Slangebeek.",
    probleem:
      "De Wijers is een vlak, vijver- en beekrijk gebied met hoge waterstanden. Op laaggelegen percelen was er al voor de werken structurele wateroverlast — dat werd bij het project aan de Beverzakbroekweg uitdrukkelijk vermeld.",
    uniek:
      "Zonhoven ligt volledig in De Wijers: 1.175 vijvers en drie beken richting de Demer. Afvoerproblemen zijn hier eerder een kwestie van hoge grond- en beekpeilen dan van leem of erosie zoals in Zuid-Limburg.",
    faq: [
      {
        v: "Waarom loopt mijn afvoer in Zonhoven bij nat weer altijd trager?",
        a: "In De Wijers staat het grondwater hoog en zijn de peilen in de vijvers en beken sterk wisselend. Ligt uw leiding rond of onder dat peil, dan krijgt ze bij natte periodes minder verval en loopt alles trager, zonder dat er iets vaststeekt. Zit er bovendien een defecte voeg in, dan sijpelt er grondwater binnen. Een camera-inspectie in een natte periode toont dat meteen — in een droge periode ziet u het niet.",
      },
    ],
    volgorde: ["problemen", "gebied", "diensten", "netwerk", "prijzen", "werkwijze", "wetgeving"],
    prioriteit: 2,
  },
  {
    slug: "alken",
    naam: "Alken",
    postcode: "3570",
    inwoners: 11937,
    inwonersJaar: 2025,
    streek: "Vochtig Haspengouw",
    deelgemeenten: ["Sint-Joris", "Terkoest", "Meerdegat"],
    buurgemeenten: ["Hasselt", "Wellen", "Sint-Truiden", "Nieuwerkerken"],
    waterlopen: ["de Herk", "de Kleine Herk", "de Mombeek", "de Simsebeek", "de Kozenbeek"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Ondoorlatende kleibodem met veel bronnen en een vlak reliëf dat zelden boven 60 meter uitkomt — regenwater zakt hier nauwelijks weg.",
    bouwprofiel:
      "Concentrische dorpsstructuur rond de Herk, met secundaire kernen langs de verbindingswegen en veel lintbebouwing. Alken telt nog talrijke vakwerkhoeven, van kleine langgerekte bedrijven tot grote gesloten hoeves, al is hun aantal sinds 1981 ongeveer gehalveerd.",
    landmarks: ["de brouwerij van Alken", "de Sint-Aldegondiskerk", "drie werkende watermolens op de Herk", "recreatiepark De Alk", "kasteel Dompas"],
    werken:
      "Aquafin voert riolerings- en wegeniswerken uit in de Pleinstraat, gefaseerd tussen de Bisschopsweyerstraat, Brabantsestraat en Knipscheerstraat, van april 2025 tot december 2026. Ook in de Bulsstraat wordt gewerkt. Daarnaast krijgen de Grote en Kleine Herk in Alken meer ruimte.",
    probleem:
      "In juli 2021 traden de Kleine Herk en de Herk lokaal buiten hun oevers. De ondoorlatende kleibodem met veel bronnen betekent dat regenwater oppervlakkig afstroomt in plaats van te infiltreren. In de Mombeek is fosfor een probleem, mede door overstorten.",
    uniek:
      "Alken ligt met drie watermolens pal in de Herkvallei op ondoorlatende klei. Het rioolstelsel moet hier tegelijk piekbuien én een snel reagerende beek verwerken — en de dijkwerken aan de Herk lopen door tot na 2026.",
    faq: [
      {
        v: "Kan ik in Alken regenwater op eigen terrein laten infiltreren?",
        a: "Vaak minder makkelijk dan in de Kempen. Alken ligt op ondoorlatende klei met veel bronnen, waardoor een klassieke infiltratieput hier veel trager werkt dan op zandgrond. De hemelwaterverordening voorziet daarom een alternatief: is infiltratie technisch onmogelijk, dan mag u bufferen met 43 liter per vierkante meter en een lozingsdebiet van maximaal 5 liter per seconde per hectare. Laat de doorlatendheid eerst ter plaatse testen voor u een systeem kiest.",
      },
    ],
    volgorde: ["problemen", "diensten", "netwerk", "wetgeving", "prijzen", "werkwijze", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "wellen",
    naam: "Wellen",
    postcode: "3830",
    inwoners: 7479,
    inwonersJaar: 2025,
    streek: "Vochtig Haspengouw, de Limburgse fruitstreek",
    deelgemeenten: ["Berlingen", "Herten", "Ulbeek", "Vrolingen", "Russelt", "Overbroek"],
    buurgemeenten: ["Alken", "Hasselt", "Borgloon", "Sint-Truiden"],
    waterlopen: ["de Herk", "de Winterbeek", "de Spaasbeek", "de Vloedgracht"],
    rioolbeheerder: "de gemeente Wellen zelf",
    rioolbeheerderNoot:
      "Wellen is een van de weinige Limburgse gemeenten die het rioolbeheer niet aan Fluvius heeft overgedragen. Aanvragen en meldingen lopen via de gemeente.",
    bodem: "Leem in de fruitstreek, met de Herkvallei als groen lint van canadabomen dwars door de gemeente.",
    bouwprofiel:
      "Lineaire nederzettingsvorm met geconcentreerde bebouwing in de gehuchten. De vakwerkbouw is grotendeels versteend of gerenoveerd; recente lintbebouwing wordt als storend ervaren in het landschap. Fruitteelt domineert vooral sinds na de Tweede Wereldoorlog.",
    landmarks: ["de stroopstokerij van Vrolingen", "brouwerijmuseum Ulbeca", "de romaanse Sint-Jan-de-Doperkerk", "de Sint-Agathakerk in Berlingen"],
    werken:
      "Aquafin voert riolerings- en wegenwerken uit in de Beursstraat, van februari 2025 tot november 2026.",
    probleem:
      "Wellen ligt in het speerpuntgebied Mombeek-Herk, waar fosfor de norm niet haalt en vervuild water uit bijbeken overstroomt. De zuiveringsgraad in deze regio blijft onder het Vlaamse gemiddelde.",
    uniek:
      "Wellen is een van de weinige Limburgse gemeenten met eigen gemeentelijk rioolbeheer in plaats van Fluvius. In een verspreid gehuchtenlandschap met oude versteende vakwerkhoeves betekent dat: uw aanvraag en melding lopen niet via de gebruikelijke Fluvius-route.",
    faq: [
      {
        v: "Bij wie moet ik in Wellen zijn voor een rioolaansluiting of keuring?",
        a: "Bij de gemeente Wellen zelf, niet bij Fluvius. Wellen heeft het rioolbeheer in eigen handen gehouden. Voor de keuring van uw privéwaterafvoer gebruikt u wel gewoon een keurder erkend door Vlario of AquaFlanders — dat staat los van wie het openbare net beheert.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "gebied", "werkwijze", "wetgeving"],
    prioriteit: 3,
  },
  {
    slug: "borgloon",
    naam: "Borgloon",
    fusie: "Sinds 1 januari 2025 vormt Borgloon samen met Tongeren de gemeente Tongeren-Borgloon.",
    postcode: "3840",
    inwoners: 11580,
    inwonersJaar: 2024,
    streek: "op de scheidingslijn tussen Droog en Vochtig Haspengouw",
    deelgemeenten: ["Bommershoven", "Broekom", "Gors-Opleeuw", "Gotem", "Groot-Loon", "Hendrieken", "Hoepertingen", "Jesseren", "Kerniel", "Kuttekoven", "Rijkel", "Voort"],
    buurgemeenten: ["Wellen", "Tongeren", "Heers", "Sint-Truiden", "Kortessem"],
    waterlopen: ["de bovenloop van de Herk", "de Molenbeek"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Vruchtbare lössbedekking over kalkhoudende ondergrond. Het massief van Borgloon reikt tot 131 meter, met de steilrand van Borgloon als noordgrens en hoogteverschillen tot ongeveer 65 meter door erosie.",
    bouwprofiel:
      "De bebouwing is geconcentreerd rond de middeleeuwse stadskern; daarbuiten is de dichtheid laag. Kenmerkend zijn de uitgebreide hoogstamboomgaarden en een grote dichtheid aan holle wegen. Van de twaalf kerkdorpen telt enkel Hoepertingen meer dan duizend inwoners.",
    landmarks: ["de burchtheuvel met het uitzicht over Haspengouw", "kasteel Rullingen", "de abdij van Colen in Kerniel", "de museumboomgaard van Rijkel"],
    werken:
      "Er loopt of liep aanleg van gescheiden riolering in Gors-Opleeuw met een kleinschalige waterzuivering, in Hendrieken en Voort, in Rullecoven en een verbindingsriolering in de Jesserenstraat. Meerdere van die projecten dienen om kleine kerkdorpen alsnog aan te sluiten.",
    probleem:
      "De erosiegevoelige leembodem op sterk hellend terrein met veel holle wegen zorgt voor modderstromen die riolen en waterlopen dichtslibben. Dat is een provinciale vaststelling voor heel Haspengouw en in Borgloon extra uitgesproken.",
    uniek:
      "Borgloon ligt letterlijk op de breuklijn tussen Droog en Vochtig Haspengouw, met 65 meter hoogteverschil en holle wegen die als afvoergeulen werken. Twaalf landelijke kerkdorpjes gaan hier pas de laatste jaren één voor één op riolering.",
    faq: [
      {
        v: "Mijn straatkolk en huisaansluiting slibben dicht met modder. Wat kan ik doen?",
        a: "Dat is in Borgloon een bekend patroon: leem spoelt bij een felle bui van de akkers en via de holle wegen naar beneden en zet zich af in kolken en leidingen. Modder laat zich niet met een spiraal verwijderen — die boort er een gat in dat weer dichtloopt. Hogedrukreiniging haalt de laag wel weg. Loopt het jaarlijks terug, dan is een zandvang of bezinkput voor uw aansluiting de duurzame oplossing.",
      },
    ],
    volgorde: ["problemen", "gebied", "diensten", "prijzen", "netwerk", "werkwijze", "wetgeving"],
    prioriteit: 2,
  },
  {
    slug: "kortessem",
    naam: "Kortessem",
    fusie: "Sinds 1 januari 2025 maakt Kortessem deel uit van de stad Hasselt.",
    postcode: "3720",
    inwoners: 8757,
    inwonersJaar: 2024,
    streek: "Vochtig Haspengouw, de poort van de fruitstreek",
    deelgemeenten: ["Wintershoven", "Guigoven", "Vliermaal", "Zammelen", "Vliermaalroot"],
    buurgemeenten: ["Diepenbeek", "Hoeselt", "Tongeren", "Borgloon", "Wellen", "Alken", "Hasselt"],
    waterlopen: ["de Mombeek", "de Fonteinbeek", "de Brikbeek", "de Harenbeek"],
    rioolbeheerder: "Fluvius",
    bodem: "Ondoorlatende klei met veel bronnen en sterker geërodeerde bodems dan in het zuiden van Haspengouw.",
    bouwprofiel:
      "Kortessem heeft een dichtere bebouwing dan het zuiden van Haspengouw, met vakwerkbouw die tot het begin van de 20e eeuw doorliep. Verder kastelen, pastorieën en fruitteelt, met bloesemtoerisme in april.",
    landmarks: ["de romaans-gotische Sint-Pieterskerk", "de Sint-Pietersbandenkerk in Wintershoven", "kasteel Printhagen", "kasteel Dessener"],
    probleem:
      "De Mombeek haalt al jaren de stikstofnorm maar niet de fosfornorm. Vervuild water uit de Fonteinbeek, Brikbeek, Harenbeek en Herk treedt buiten de oevers. Erosie op leem speelt hier eveneens mee.",
    uniek:
      "Kortessem is een echte Mombeek-gemeente: zes kerkdorpen op ondoorlatende klei met bronnen en oude watermolens. De Mombeek is een Vlaams speerpuntgebied waar overstorten en huishoudelijk afvalwater het fosforprobleem mee bepalen.",
    faq: [
      {
        v: "Kortessem hoort nu bij Hasselt. Bij wie moet ik zijn?",
        a: "Sinds 1 januari 2025 is Kortessem deel van de stad Hasselt. Voor administratie zoals een rioolaansluiting of een melding op openbaar domein gaat u dus naar de stad Hasselt. Het openbare rioolnet blijft in beheer bij Fluvius. Uw eigen verantwoordelijkheid verandert niet: alles tot en met het huisaansluitputje is voor u.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 3,
  },
  {
    slug: "heers",
    naam: "Heers",
    postcode: "3870",
    inwoners: 7574,
    inwonersJaar: 2025,
    streek: "Droog Haspengouw, golvend open-fieldlandschap",
    deelgemeenten: ["Batsheers", "Opheers", "Veulen", "Gutschoven", "Mettekoven", "Klein-Gelmen", "Heks", "Horpmaal", "Vechmaal", "Mechelen-Bovelingen", "Rukkelingen-Loon"],
    buurgemeenten: ["Borgloon", "Tongeren", "Gingelom", "Sint-Truiden"],
    waterlopen: ["de Heerse of Veulense Beek", "de Molenbeek"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Leem en löss boven kalkhoudende ondergrond, met een lage grondwatertafel maar een bodem die water nauwelijks doorlaat.",
    bouwprofiel:
      "Een typisch Haspengouws landbouwlandschap met grote vierkantshoeven, geconcentreerd rond kerk, pastorie en kasteel, en verspreide hoeves in het open akkerland. De verbindingswegen zijn vaak als holle wegen ingesneden.",
    landmarks: ["de vier kastelen van Heers, Heks, Veulen en Mechelen-Bovelingen", "de Drie Morenkerk in Gutschoven", "de Romeinse tumulus in Vechmaal"],
    werken:
      "Aquafin legde in de Wijngaardstraat en de Nieuwe Steenweg een gescheiden stelsel aan; daarbij werden ongeveer 200 inwoners van Gutschoven aangesloten die tot dan ongezuiverd op de Molenbeek loosden.",
    probleem:
      "Droge, hellende leembodem waar water slecht infiltreert zorgt voor snelle oppervlakteafstroming, erosie en modderstromen die riolen en beken dichtslibben. Holle wegen werken daarbij als afvoergeulen.",
    uniek:
      "Heers is met twaalf dorpjes de meest versnipperde gemeente van Haspengouw. Het probleem hier is zelden een volle beek, wel modder- en zandaanvoer van akkers en holle wegen richting uw huisaansluiting.",
    faq: [
      {
        v: "Waarom slibt mijn riool in Heers dicht na een onweer?",
        a: "Droog Haspengouw ligt op leem dat water nauwelijks doorlaat. Bij een felle bui stroomt het regenwater oppervlakkig over de akkers en door de holle wegen, en neemt daarbij grond mee. Die modder komt via kolken en opritten in uw leiding terecht en zakt daar naar beneden. Een spiraal helpt hier weinig: hogedruk met een terugspuitende kop spoelt de laag wel weg richting het hoofdriool.",
      },
    ],
    volgorde: ["problemen", "gebied", "diensten", "prijzen", "netwerk", "werkwijze", "wetgeving"],
    prioriteit: 3,
  },
  {
    slug: "gingelom",
    naam: "Gingelom",
    postcode: "3890",
    inwoners: 8788,
    inwonersJaar: 2025,
    streek: "Droog Haspengouw, leem- en lössstreek",
    deelgemeenten: ["Borlo", "Boekhout", "Buvingen", "Jeuk", "Kortijs", "Mielen-boven-Aalst", "Montenaken", "Muizen", "Niel-bij-Sint-Truiden", "Vorsen", "Klein-Vorsen"],
    buurgemeenten: ["Sint-Truiden", "Heers", "Landen"],
    waterlopen: ["de Molenbeek", "de Cicindria"],
    rioolbeheerder: "Fluvius",
    bodem: "Leem en löss in een open, geruilverkaveld akkerlandschap.",
    bouwprofiel:
      "Rechthoekig stratenpatroon in de kern, met kenmerkende bakstenen vierkanthoeven uit de 19e eeuw rond de Sint-Pieterskerk. In 1962 vond hier de eerste ruilverkaveling van Vlaanderen plaats, waardoor het kleinschalige bocagelandschap omsloeg naar open landschap.",
    landmarks: ["de neogotische Sint-Pieterskerk", "het kasteel van Gingelom", "de tumuli van Montenaken", "de Romeinse Nijvelse baan"],
    werken:
      "Aquafin bouwde een zuiveringsinstallatie aan de Kaneelstraat en legde gescheiden riolering aan in Kerkom-Dorp en de Heusdenstraat. Daarmee werden ongeveer 2.700 inwoners aangesloten die tot dan ongezuiverd op de Cicindria loosden.",
    probleem:
      "Een open, geruilverkaveld leemlandschap zonder hagen of holle wegen als buffer zorgt voor snelle afstroming en modderstromen. De Cicindria kreeg jarenlang ongezuiverd afvalwater te verwerken.",
    uniek:
      "Gingelom is het meest open leemlandschap van Haspengouw — de eerste ruilverkaveling van Vlaanderen in 1962 haalde de bufferende hagen en graften grotendeels weg. Pas sinds 2020 draait er een zuiveringsinstallatie aan de Kaneelstraat voor zo'n 2.700 inwoners.",
    faq: [
      {
        v: "Mijn woning is pas recent op de riolering aangesloten. Waar moet ik op letten?",
        a: "Bij een nieuwe aansluiting is een keuring van de privéwaterafvoer wettelijk verplicht. Verder is het belangrijk te weten wat er met uw oude septische put gebeurt. In veel gevallen bepaalt de rioolbeheerder dat die in dienst blijft voor het zwart water; soms mag ze buiten dienst. Blijft ze in dienst, laat ze dan om de drie à vijf jaar ledigen. Wordt ze buiten dienst gesteld, dan moet ze correct geleegd en gevuld of verwijderd worden.",
      },
    ],
    volgorde: ["wetgeving", "problemen", "diensten", "prijzen", "gebied", "werkwijze", "netwerk"],
    prioriteit: 3,
  },
  {
    slug: "nieuwerkerken",
    naam: "Nieuwerkerken",
    postcode: "3850",
    inwoners: 7328,
    inwonersJaar: 2025,
    streek: "Vochtig Haspengouw",
    deelgemeenten: ["Binderveld", "Kozen", "Wijer"],
    buurgemeenten: ["Herk-de-Stad", "Hasselt", "Alken", "Sint-Truiden", "Zoutleeuw", "Geetbets"],
    waterlopen: ["de Kelsbeek", "de Melsterbeek", "de Vlaamse Beek"],
    rioolbeheerder: "Fluvius",
    bodem: "Zand- en kleilagen op een terrein dat van zuidoost naar west afhelt.",
    bouwprofiel:
      "Een landschap van weiden, akkers en boomgaarden, met vakwerkhoeven in losse schikking bij de kerk. Sinds de aanleg van de steenweg Sint-Truiden-Herk-de-Stad in 1845 is er uitgesproken lintbebouwing aan weerszijden, met recentere verkavelingen ten zuiden van het kasteel.",
    landmarks: ["het waterkasteel van Binderveld", "het Duifhuishof in Kozen", "de schans van Wijer", "natuurreservaat het Muggenbosje"],
    werken:
      "Nieuwerkerken kende een ongewoon dichte opeenvolging van projecten: de Breestraat en Neercosenstraat, de Nieuwstraat, de Zwarteindestraat met bufferbekken, de Rode Haagstraat en omgeving, de Mierhoopweg en recent de Driesstraat en Kerkstraat.",
    probleem:
      "Nieuwerkerken ligt in het speerpuntgebied Mombeek-Herk, waar afvalwaterimpact en fosfor de knelpunten zijn. Het terrein helt af, wat afstroming versnelt.",
    uniek:
      "Nieuwerkerken is klein maar heeft in korte tijd erg veel rioleringsprojecten gekregen. Veel woningen zijn hier de voorbije jaren overgeschakeld van septische put of gracht naar gescheiden riolering — met alle overgangsproblemen die daarbij horen.",
    faq: [
      {
        v: "Ik ben overgeschakeld van gracht naar riolering. Waarom heb ik nu meer geurhinder?",
        a: "Dat komt vaker voor na een aansluiting. Bij een gracht ontsnapten geuren in de open lucht; in een gesloten stelsel moeten ze via uw dakontluchting weg. Is die verstopt, te kort of ontbreekt ze, dan zoekt de lucht een andere weg — meestal via een uitgedroogde sifon of een slecht afgedichte aansluiting. Controleer eerst of alle sifons water bevatten, ook die van zelden gebruikte toestellen. Blijft het probleem, dan brengt een rookproef binnen een uur het lek in beeld.",
      },
    ],
    volgorde: ["netwerk", "diensten", "problemen", "wetgeving", "prijzen", "werkwijze", "gebied"],
    prioriteit: 3,
  },
  {
    slug: "herk-de-stad",
    naam: "Herk-de-Stad",
    postcode: "3540",
    inwoners: 12927,
    inwonersJaar: 2025,
    streek: "de overgang van Vochtig Haspengouw naar de Demervallei",
    deelgemeenten: ["Berbroek", "Donk", "Schulen", "Schakkebroek"],
    buurgemeenten: ["Lummen", "Hasselt", "Nieuwerkerken", "Geetbets", "Halen"],
    waterlopen: ["de Herk", "de Demer", "het Schulensmeer"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Vochtig zandleem en natte riviklei, op een terrein dat daalt van 55 meter in het zuiden naar 22 meter in het noorden.",
    bouwprofiel:
      "Na de Tweede Wereldoorlog werd Herk-de-Stad een intensieve fruit- en groenteteeltgemeente. De historische kern draait rond de Sint-Maartenskerk en kasteel de Pierpont, dat nu als stadhuis dienstdoet.",
    landmarks: ["het Schulensmeer en het Schulensbroek", "kasteel de Pierpont", "de Sint-Maartenskerk", "het Amandinamuseum"],
    werken:
      "Er lopen dossiers voor de Reyerstraat en Broekstraat en voor de Korpsestraat met de Mielenveldweg, plus wegen- en rioleringswerken in Schulen. In 2023 kondigde de VMM extra overstromingsgebieden aan in Halen en Herk-de-Stad.",
    probleem:
      "In juli 2021 waren er lokale overstromingen en dijkbreuken langs de Herk en de Gete. Het Schulensbroek is als samenvloeiingspunt van meerdere valleien extreem overstromingsgevoelig.",
    uniek:
      "Herk-de-Stad ligt op het laagste punt waar de Herk en de Demer samenkomen, op natte riviklei. Riolering en afvoer moeten hier structureel rekening houden met hoge grondwaterstanden en periodiek water in de vallei.",
    faq: [
      {
        v: "Wat is het verschil tussen wateroverlast en een verstopping bij mij thuis?",
        a: "Een verstopping is lokaal: enkel uw toestellen lopen slecht weg, ook bij droog weer. Wateroverlast in de vallei is gebiedsdekkend: buren hebben hetzelfde, het valt samen met hoge waterstanden en verdwijnt als het water zakt. In Herk-de-Stad komen beide voor. De snelste test is uw huisaansluitputje aan de rooilijn openen: staat dat vol terwijl het niet regent, dan zit er wel degelijk iets vast.",
      },
    ],
    volgorde: ["problemen", "gebied", "diensten", "netwerk", "prijzen", "werkwijze", "wetgeving"],
    prioriteit: 2,
  },
  {
    slug: "halen",
    naam: "Halen",
    postcode: "3545",
    inwoners: 9490,
    inwonersJaar: 2025,
    streek: "het Hageland, met Zelem op de Kempense rand",
    deelgemeenten: ["Loksbergen", "Zelem"],
    buurgemeenten: ["Diest", "Lummen", "Herk-de-Stad", "Geetbets", "Kortenaken", "Bekkevoort"],
    waterlopen: ["de Gete", "de Velpe", "de Demer", "de Zwarte Beek"],
    rioolbeheerder: "Fluvius",
    bodem: "Hagelands landschap van holle wegen en getuigenheuvels; Zelem hoort geografisch al bij de Kempen.",
    bouwprofiel:
      "Halen en Loksbergen zijn typische Hagelanddorpen, historisch deel van het hertogdom Brabant, terwijl Zelem bij het prinsbisdom Luik hoorde en geografisch Kempens is. Het centrum ligt precies op de samenvloeiing van vier waterlopen.",
    landmarks: ["de Sint-Pietersbandenkerk", "de gedenkplaatsen van de Slag der Zilveren Helmen", "het Sint-Jansbergklooster in Zelem", "streekmuseum De Reinvoart"],
    werken:
      "De Velpe in het centrum wordt heraangelegd met dijken verder van de rivier — meer ruimte voor water. De ontwerpen dateren van begin 2025 en de start van de werken wordt eind 2026 verwacht. Eerder plaatste de stad al bufferbekkens en pompen.",
    probleem:
      "In juli 2021 stond het centrum van Halen onder water door de Gete én de Velpe; op 16 juli werd de Getedijk bewust doorgestoken en liepen zo'n dertig straten schade op. In 2023 werden extra natuurlijke overstromingsgebieden stroomopwaarts aangekondigd, samen met maatwerkadvies over schotten en terugslagkleppen.",
    uniek:
      "Halen is het samenvloeiingspunt van Gete, Velpe, Demer en Zwarte Beek en was in 2021 het zwaarst getroffen centrum van het Demerbekken. Terugslagkleppen en rioolterugstroming zijn hier geen theorie maar een erkend probleem.",
    faq: [
      {
        v: "Is een terugslagklep in Halen zinvol?",
        a: "In het centrum van Halen zeker het overwegen waard. Na de overstromingen van juli 2021 kregen bewoners uitdrukkelijk maatwerkadvies over schotten en terugslagkleppen. Een klep beschermt tegen water dat vanuit het stelsel terugkomt, maar niet tegen water dat via deuren of ramen binnenkomt. Belangrijk: laat de klep om de paar jaar controleren, want een klep die door vuil blijft openstaan beschermt niets.",
      },
    ],
    volgorde: ["problemen", "netwerk", "diensten", "werkwijze", "prijzen", "gebied", "wetgeving"],
    prioriteit: 3,
  },
  {
    slug: "lummen",
    naam: "Lummen",
    postcode: "3560",
    inwoners: 15347,
    inwonersJaar: 2025,
    streek: "het kruispunt van Hageland, Haspengouw en de Kempen",
    deelgemeenten: ["Linkhout", "Meldert", "Geneiken", "Genenbos", "Gestel", "Laren", "Schalbroek", "Thiewinkel", "Oostereinde"],
    buurgemeenten: ["Beringen", "Heusden-Zolder", "Hasselt", "Herk-de-Stad", "Halen", "Diest"],
    waterlopen: ["de Demer", "de Mangelbeek", "de Zwarte Beek"],
    rioolbeheerder: "Fluvius",
    bodem: "Overgangsgebied tussen drie streken, met het overstromingsgevoelige Schulensbroek aan de rand.",
    bouwprofiel:
      "Een verspreide gehuchtenstructuur met veel lintbebouwing tussen de kernen, vier bewoonde kastelen en vier industriezones langs de E313, E314 en het Albertkanaal.",
    landmarks: ["het Schulensmeer", "de duizendjarige eik", "de Kapel van de Beuk", "kasteel Hamel en kasteel de Burg"],
    werken:
      "In de Linkhoutstraat en tien zijstraten werd in drie fasen tot eind 2024 gescheiden riolering aangelegd. Verder kwamen er fietspaden met gescheiden riolering aan de Zelemsebaan en loopt een pakket rond de Geeneindestraat, Graafstraat en Schulensbroekstraat.",
    probleem:
      "Lummen wordt genoemd bij de wateroverlastmaatregelen rond Gete en Velpe, samen met Halen en Herk-de-Stad, en ligt aan het overstromingsgevoelige Schulensbroek.",
    uniek:
      "In Lummen wordt het gescheiden net in grote straatpakketten tegelijk aangelegd. Veel woningen zijn daardoor recent afgekoppeld en hebben nu twee afzonderlijke huisaansluitingen — verwar ze niet bij werken aan uw eigen leidingen.",
    faq: [
      {
        v: "Ik heb sinds de werken twee aansluitingen. Hoe weet ik welke welke is?",
        a: "Meestal ligt de vuilwaterleiding dieper dan de regenwaterleiding en zijn de deksels verschillend gemerkt. Zekerheid krijgt u met een kleurstoftest: kleurstof in uw wc en kijken waar het uitkomt. Dat duurt enkele minuten en voorkomt dat u later per ongeluk een dakgoot op de vuilwaterleiding aansluit — wat bij een keuring als niet-conform wordt beoordeeld.",
      },
    ],
    volgorde: ["netwerk", "diensten", "problemen", "prijzen", "wetgeving", "werkwijze", "gebied"],
    prioriteit: 3,
  },
];
