import type { City } from "./city-types";

/** Groep B — Noord-Limburg, de Kempen en het Maasland. */
export const citiesB: City[] = [
  {
    slug: "pelt",
    naam: "Pelt",
    postcode: "3900",
    inwoners: 34690,
    inwonersJaar: 2026,
    streek: "Noord-Limburg, noordelijk deel van het Kempisch Plateau",
    deelgemeenten: ["Neerpelt", "Overpelt", "Sint-Huibrechts-Lille", "Grote Heide", "Broeseinde", "Boseind", "Herent"],
    buurgemeenten: ["Hamont-Achel", "Bocholt", "Peer", "Hechtel-Eksel", "Lommel"],
    waterlopen: ["de Dommel", "de Warmbeek", "de Eindergatloop", "de Holvenloop", "het Kempisch Kanaal"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Noord)",
    bodem: "Lemige zandgronden in de beekdalen, duinvorming in het westen en veengebieden in het noorden.",
    bouwprofiel:
      "Overpelt-centrum is een straatdorp met aaneengesloten lintbebouwing rond drie pleinen: het westelijke deel is dicht bebouwd, het oostelijke bestaat uit villa's en open bebouwing. Neerpelt groeide uit vier middeleeuwse gehuchten in de Dommelvallei. De woonwijken dateren grotendeels van na 1960; de industrialisering begon al in 1888.",
    landmarks: ["het Sint-Hubertuscollege", "industrieterrein Nolimpark", "Natuurgrenspark De Groote Heide", "de Dommelvallei"],
    werken:
      "Er lopen dossiers voor de Kaulillerweg en zijstraten, Lommelsakker, Grote Heide, de Tussenstraat en Broeseinderdijk. Op het Marktplein kwam een infiltratievoorziening, het Kerkplein werd blauw-groen heringericht en Nolimpark werd afgekoppeld. Bij de gemeentewerf ligt een collectieve hemelwateropvangput van ongeveer 1.000 kubieke meter.",
    probleem:
      "Het centrum van Pelt staat in het Wateruitvoeringsprogramma als kritieke overstromingsgevoelige zone langs de Dommel, met vernauwingen in de kern. In buitengebieden zoals Kolisbos werkt men met drukriolering — een stelseltype dat gevoeliger is voor verstopping en foutieve lozingen dan klassieke zwaartekrachtriolering.",
    uniek:
      "Pelt combineert een dichte lintkern en zware industrie op zandgrond met buitengebieden op drukriolering. Zit u aan drukriolering, dan is een verstopping bij u een ander verhaal dan bij een buur die gewoon op zwaartekracht loost.",
    faq: [
      {
        v: "Wat is drukriolering en waarom is dat in Pelt belangrijk?",
        a: "In verspreide buitengebieden zoals Kolisbos ligt geen klassieke zwaartekrachtriolering maar drukriolering: een pompunit op uw perceel duwt het afvalwater onder druk naar het hoofdnet. Zo'n systeem is gevoeliger voor wat u erin gooit. Vochtige doekjes, vet en zand blokkeren de pomp veel sneller dan een gewone buis. Merkt u een alarm of stilstaande pomp, laat dan eerst de put en de pomp nakijken voor u iets in de leiding steekt.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "maaseik",
    naam: "Maaseik",
    postcode: "3680",
    inwoners: 25881,
    inwonersJaar: 2026,
    streek: "het Limburgse Maasland",
    deelgemeenten: ["Neeroeteren", "Opoeteren", "Aldeneik", "Heppeneert", "Wurfeld", "'t Ven", "Voorshoven", "Geisteren", "Dorne"],
    buurgemeenten: ["Kinrooi", "Dilsen-Stokkem", "Bree", "Oudsbergen"],
    waterlopen: ["de Maas", "de Bosbeek", "de Witbeek", "de Zanderbeek", "de Zuid-Willemsvaart"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Oost)",
    bodem: "Maasterrassen in het oosten, de moerassige Vlakte van Bocholt in het noorden en het Kempisch Plateau in het zuiden.",
    bouwprofiel:
      "Maaseik heeft een middeleeuwse stadsplattegrond rond de Markt, met resten van stadsmuren, een 18e-eeuws stadhuis en renaissancegevels. De stad ligt op een hoger Maasterras, wat historisch bescherming tegen overstroming bood. Neeroeteren is daarentegen een keten van straatdorpkernen langs de Bosbeek, met watermolens.",
    landmarks: ["de Markt met het standbeeld van de gebroeders Van Eyck", "Aldeneik", "de Zuid-Willemsvaart", "de Bosbeekvallei met de Neermolen en de Slagmolen"],
    werken:
      "Er lopen of liepen rioleringsdossiers in onder meer de Javanastraat, de Acht Meilaan, de Gruitroderlaan, de Kapelweg en de Houwstraat. Voor de Bosbeek komt een nieuwe collector op de zuidflank en in Opoeteren een RWA-leiding.",
    probleem:
      "Neeroeteren-centrum staat aangeduid als hoogrisico-overstromingszone door de Witbeek en de Bosbeek, met knelpunten bij de vernauwing aan de Neermolen en overtopping bij de Slagmolen. Ook verdunning van afvalwater is een genoemd probleem.",
    uniek:
      "In Maaseik ligt de historische kern hoog en droog op een Maasterras, terwijl Neeroeteren stroomopwaarts juist als hoogrisicozone geldt. Twee kernen van dezelfde stad, twee compleet verschillende waterverhalen.",
    faq: [
      {
        v: "Waarom heeft Neeroeteren meer wateroverlast dan Maaseik-centrum?",
        a: "Maaseik-centrum ligt op een hoger Maasterras — dat bood historisch al bescherming tegen de Maas. Neeroeteren ligt lager, aan de Bosbeek en de Witbeek, en staat officieel aangeduid als hoogrisico-overstromingszone, met knelpunten bij de oude watermolens waar het water opstuwt. In Neeroeteren speelt riool- en beekwater dus letterlijk door elkaar; in het centrum van Maaseik is een verstopping vrijwel altijd een zuiver rioolprobleem.",
      },
    ],
    volgorde: ["problemen", "netwerk", "diensten", "prijzen", "wetgeving", "werkwijze", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "dilsen-stokkem",
    naam: "Dilsen-Stokkem",
    postcode: "3650",
    inwoners: 21663,
    inwonersJaar: 2026,
    streek: "het Maasland, met de westflank op het Kempisch Plateau",
    deelgemeenten: ["Dilsen", "Elen", "Lanklaar", "Rotem", "Stokkem"],
    buurgemeenten: ["Maaseik", "As", "Maasmechelen"],
    waterlopen: ["de Maas", "de Oude Maas", "de Vrietselbeek", "de Kogbeek", "de Bosbeek", "de Zuid-Willemsvaart"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Oost)",
    bodem:
      "Een gemeente van twee helften: het oosten ligt laag en vochtig in de Maasvallei, het westen klimt vrij steil naar het Kempisch Plateau met een hoogteverschil van 55 meter.",
    bouwprofiel:
      "Twee historische kernen: Oud-Dilsen als hoopdorp aan de Oude Maas en Houtissen als straatdorp in het westen, dat uitgroeide tot het huidige centrum. Langs de Rijksweg ontstond vanaf het einde van de 19e eeuw lintbebouwing, met nieuwere wijken rond het nieuwe centrum.",
    landmarks: ["Oud-Dilsen aan de Oude Maas", "de Zuid-Willemsvaart", "het natuurgebied Negenoord", "de historische kern van Stokkem"],
    werken:
      "Er lopen dossiers voor Hoogbaan-Kogbeek, de Zandstraat en omgeving, de Kapelstraat en een groot centrumdossier rond de Middenstraat, Botermarkt en Kasteelstraat.",
    probleem:
      "De Vrietselbeek kreeg aanhoudende geur- en overstortproblemen doordat rioolwater via het bestaande gemengde stelsel in de beek terechtkomt. De provincie verlengde de beek om het debiet te verhogen; op termijn moet een gescheiden stelsel het rioolwater eruit houden.",
    uniek:
      "Dilsen-Stokkem heeft binnen één gemeente 55 meter hoogteverschil. Hemelwater stroomt snel af naar een laag, nat oostelijk deel — en het overstortprobleem op de Vrietselbeek is daar het letterlijk ruikbare gevolg van.",
    faq: [
      {
        v: "Ik woon laag in de Maasvallei. Waar moet ik op letten?",
        a: "Bij een hoge grondwaterstand dringt water via defecte voegen uw leiding binnen — dat heet infiltratie. Uw afvoer loopt dan traag zonder dat er een prop zit, en na een ontstopping komt de klacht snel terug. Een camera-inspectie toont of het om instromend grondwater gaat. Is dat zo, dan is relining of plaatselijk herstel de oplossing, niet een jaarlijkse ontstopping.",
      },
    ],
    volgorde: ["problemen", "diensten", "netwerk", "werkwijze", "prijzen", "wetgeving", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "lanaken",
    naam: "Lanaken",
    postcode: "3620",
    inwoners: 26490,
    inwonersJaar: 2026,
    streek: "de zuidelijke rand van het Kempens Plateau, Maasland",
    deelgemeenten: ["Gellik", "Neerharen", "Rekem", "Veldwezelt", "Smeermaas", "Kesselt", "Briegden", "Herbricht"],
    buurgemeenten: ["Maasmechelen", "Zutendaal", "Bilzen", "Riemst", "Maastricht"],
    waterlopen: ["de Ziepbeek", "de Kikbeek", "de Asbeek", "het Albertkanaal", "de Zuid-Willemsvaart", "het kanaal Briegden-Neerharen"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Oost)",
    bodem: "Zandig plateau met steile plateauranden, gevormd door de Kikbeek en de Asbeek; hoogte tot 100 meter in het noordwesten.",
    bouwprofiel:
      "Rekem bestaat uit drie zones: de ommuurde middeleeuwse stad met kasteel, de gehuchten Bovenwezet en Daalwezet, en moderne woonzones. De bouwperiodes lopen van middeleeuwse vestingwerken via 19e-eeuwse burgerhuizen tot suburbane ontwikkeling na de aanleg van de Zuid-Willemsvaart.",
    landmarks: ["Oud-Rekem", "kasteel Pietersheim", "Nationaal Park Hoge Kempen", "het Albertkanaal"],
    werken:
      "Er zijn werken uitgevoerd of gepland in de H. Dunantstraat en Molenstraat, de Bessemerstraat, de Veldstraat, de Paalsteenlaan en een pakket rond de Lijsterstraat en Beukendreef.",
    probleem:
      "In juli 2024 liep Oud-Rekem zwaar onder water langs de Ziepbeek. De gemeente wees onder meer op riolering die vervuild water in de beek loost en op onvoldoende doorstromingscapaciteit. Aquafin zette drie mobiele pompen met een gezamenlijke capaciteit van 1.240 kubieke meter per uur in.",
    uniek:
      "Lanaken zit ingeklemd tussen drie kanalen en een steile plateaurand. Beken als de Ziepbeek en de Kikbeek voeren in korte tijd veel water af naar laaggelegen Oud-Rekem — bij de overstroming van 2024 wees de gemeente uitdrukkelijk mee naar de riolering.",
    faq: [
      {
        v: "Wat kan ik doen tegen terugstroom bij hevige regen in Lanaken?",
        a: "In laaggelegen delen zoals Oud-Rekem is een terugslagklep op uw afvoer de meest effectieve ingreep. Die laat afvalwater weg maar blokkeert water dat vanuit het stelsel terugkomt. Belangrijk: een terugslagklep vraagt onderhoud, want een klep die door vuil openblijft staan biedt geen bescherming. Laat ze om de paar jaar nakijken, zeker als u in de vallei woont.",
      },
    ],
    volgorde: ["problemen", "netwerk", "diensten", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "bree",
    naam: "Bree",
    postcode: "3960",
    inwoners: 17370,
    inwonersJaar: 2026,
    streek: "de noordoostelijke steilrand van het Kempisch Plateau",
    deelgemeenten: ["Beek", "Gerdingen", "Opitter", "Tongerlo"],
    buurgemeenten: ["Bocholt", "Maaseik", "Peer", "Oudsbergen", "Kinrooi"],
    waterlopen: ["de Abeek", "de Itterbeek", "de Breeërstadsbeek", "de Vulterbeek", "de Boneputterbeek"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Noord)",
    bodem:
      "Contrastrijk: op de hoogste delen een dikke grindlaag met grof zand, zeer droog; in de lagere, geërodeerde delen dikke pakketten fijn zandleem met plaatselijk klei langs de beken.",
    bouwprofiel:
      "Het middeleeuwse stratenpatroon van Bree wijkt nauwelijks af van de huidige aanleg. De stad was omgeven door muren, poorten en een brede gracht met een omtrek van ongeveer 1.229 meter. De ontwikkeling loopt van de 10e tot de 17e eeuw, met sterke uitbreiding in de 13e tot 16e eeuw.",
    landmarks: ["de Markt en de historische wallen", "het Stadsmuseum in het oude stadhuis", "cultuurcentrum De Zeepziederij", "de Sint-Niklaasmarkt"],
    werken:
      "Er loopt een afkoppelingsproject voor de Breeërstadsbeek aan de Grauwe Torenwal, een groot centrumdossier rond de Markt en de Nieuwstadstraat, een project voor Tongerlo Centrum en de Kuilenstraat, plus de doortocht van Opitter.",
    probleem:
      "De historische stadsgracht en de Breeërstadsbeek zijn nog altijd fysiek verweven met het rioolstelsel — vandaar dat er meerdere afkoppelingsdossiers precies op de wallen lopen. Daarnaast wordt gewerkt aan de optimalisatie van overstorten.",
    uniek:
      "In Bree ligt het rioolnet deels bovenop een middeleeuwse grachtenstructuur die nooit helemaal verdwenen is. Boven op de steilrand is de bodem kurkdroog grind, in de beekdalen zandleem en klei — twee heel verschillende ondergronden binnen één gemeente.",
    faq: [
      {
        v: "Ik woon in de Breese binnenstad. Waarom loopt de leiding daar zo grillig?",
        a: "Het middeleeuwse stratenpatroon van Bree is nagenoeg ongewijzigd gebleven, en de oude stadsgracht met de Breeërstadsbeek is deels in het rioolstelsel opgegaan. Leidingen volgen daar historische tracés in plaats van rechte lijnen. Wij starten in de kern daarom liefst met een camera met zender, zodat we exact weten waar en hoe diep de buis loopt voor er gegraven wordt.",
      },
    ],
    volgorde: ["netwerk", "diensten", "problemen", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "peer",
    naam: "Peer",
    postcode: "3990",
    inwoners: 16784,
    inwonersJaar: 2026,
    streek: "het Kempisch Plateau, het Land van Peer en Meeuwen",
    deelgemeenten: ["Grote-Brogel", "Kleine-Brogel", "Wijchmaal", "Wauberg", "Erpekom", "Linde", "Bokt"],
    buurgemeenten: ["Houthalen-Helchteren", "Oudsbergen", "Hechtel-Eksel", "Pelt", "Bree", "Bocholt"],
    waterlopen: ["de Dommel", "de Peerderloop", "de Jongemansbeek", "de Bolissenbeek"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Noord)",
    bodem: "Zandbodem op het Kempisch Plateau, met een hoogteverschil van ongeveer 80 meter in het zuiden tot 50 meter in het noorden.",
    bouwprofiel:
      "De ommuurde stad met een omtrek van ongeveer 1.700 meter ontstond na 1367; het ellipsvormige vesttracé is nog altijd zichtbaar als de huidige ring. Na de stadsbrand van 1619 werd verplicht meer in steen gebouwd. Daarbuiten domineert lintbebouwing in de gehuchten.",
    landmarks: ["de historische vesten rond het centrum", "vliegbasis Kleine-Brogel", "industriezone Bokt", "Grote-Brogel"],
    werken:
      "Er zijn werken in uitvoering op industriezone Bokt en aan de Ekselsebaan, met verdere dossiers voor de Kiezel Kleine Brogel, de Deusterstraat, de Molenstraat en de Spoorwegstraat.",
    probleem:
      "Het Wateruitvoeringsprogramma noemt de overstortwerking op de Peerderloop en verdunning in het zuiveringsstelsel als knelpunten. Verdunning betekent dat te veel regenwater in de vuilwaterleiding komt, waardoor de zuivering minder efficiënt werkt.",
    uniek:
      "Peer ligt op de waterscheiding waar de Dommel ontspringt, en het middeleeuwse vesttracé werkt nog altijd als ring én als waterstructuur. De grote knelpunten hier zijn overstorten en verdunning — typisch voor een stad met veel verhard industrieterrein op zandgrond.",
    faq: [
      {
        v: "Wat is verdunning en waarom is dat mijn probleem?",
        a: "Verdunning betekent dat regenwater in de vuilwaterleiding terechtkomt, bijvoorbeeld via een grachtinlaat of een dakgoot die verkeerd is aangesloten. Voor de zuiveringsinstallatie is dat slecht nieuws. Voor u ook: bij een bui zit uw leiding vol regenwater, wat de kans op terugstuwing verhoogt. Bij de keuring van de privéwaterafvoer wordt precies daarop gecontroleerd.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "wetgeving", "prijzen", "werkwijze", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "hamont-achel",
    naam: "Hamont-Achel",
    postcode: "3930",
    inwoners: 14563,
    inwonersJaar: 2026,
    streek: "Noord-Limburg, noordelijk Kempisch Plateau",
    deelgemeenten: ["Hamont", "Achel", "Achel Statie", "Beverbeek", "Lo", "Mulk", "Koleneinde"],
    buurgemeenten: ["Pelt", "Bocholt"],
    waterlopen: ["de Warmbeek", "de Beverbeek", "de Lookbeek", "de Walbeek", "de Erkbeek"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Noord)",
    bodem: "Overgang van een eerder moerassig zuiden naar drogere noordelijke zandgronden — toponiemen als Beek, Broek en Dijk verwijzen naar dat natte karakter.",
    bouwprofiel:
      "De historische kern van Hamont bewaart het middeleeuwse stratenpatroon rond de langgerekte markt. De eerste omwalling liep ter hoogte van de huidige Hoogstraat, een tweede muur volgde later; de Achelpoort en Budelpoort werden rond 1856-1861 gesloopt. Middeleeuwse gehuchten zijn opgegaan in het moderne weefsel.",
    landmarks: ["de Trappistenabdij van Achel", "de langgerekte markt in Hamont", "Achel Statie", "de hermeanderde Warmbeekvallei"],
    werken:
      "Er loopt een afkoppelingsdossier voor Achel Statie en de Beukenlaan. Eerder koppelde Aquafin in Mulk, Dijk en de Teutenstraat hemelwater af van de riolering, met aparte regenwaterleidingen naar de Walbeek, de Lookbeek en de Beverbeek.",
    probleem:
      "Hamont-Achel is een schoolvoorbeeld van verdunningsproblematiek: het afkoppelingsproject werd opgezet omdat grachtinlaten en hemelwater het afvalwater te sterk verdunden, waardoor de zuivering minder efficiënt werd.",
    uniek:
      "Hier kreeg elke beek zijn eigen oplossing: het regenwater uit Mulk gaat via een buffergracht naar de Walbeek, dat uit de Teutenstraat naar de Lookbeek, en dat uit Dijk naar de Beverbeek. Uw straat bepaalt letterlijk waar uw regenwater eindigt.",
    faq: [
      {
        v: "In mijn straat is hemelwater afgekoppeld. Wat betekent dat voor mijn eigen leidingen?",
        a: "Dat u nu twee aansluitingen hebt in plaats van één: een voor afvalwater en een voor regenwater. Sluit u per ongeluk een dakgoot aan op de vuilwaterleiding, dan verdunt u de zuivering en verhoogt u de kans op terugstuwing bij u thuis. Omgekeerd is een wc op de regenwaterleiding een lozingsinbreuk. Bij twijfel toont een rookproef of kleurstoftest binnen een uur welke buis waar naartoe loopt.",
      },
    ],
    volgorde: ["netwerk", "wetgeving", "problemen", "diensten", "prijzen", "werkwijze", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "oudsbergen",
    naam: "Oudsbergen",
    postcode: "3670",
    inwoners: 24004,
    inwonersJaar: 2026,
    streek: "het Kempisch laagplateau",
    deelgemeenten: ["Opglabbeek", "Meeuwen", "Gruitrode", "Neerglabbeek", "Ellikom", "Louwel", "Het Laar"],
    buurgemeenten: ["Peer", "Maaseik", "Bree", "Genk", "As", "Houthalen-Helchteren"],
    waterlopen: ["de Bosbeek", "de Abeek"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Oost)",
    bodem: "Zandgrond met een reliëf dat van zuidwest naar noordoost daalt richting de Bosbeekvallei.",
    bouwprofiel:
      "Met 116 vierkante kilometer is Oudsbergen de grootste gemeente van deze regio en de dunst bebouwde. Historisch domineerden langgerekte vakwerkhoeves, die grotendeels verdwenen of heropgebouwd zijn in veldsteen of cementblokken. Meeuwen is een Kempense beekvalleinederzetting waar lintbebouwing de vroegere gehuchten heeft doen vervagen.",
    landmarks: ["de Duinengordel van Opglabbeek-Gruitrode", "de Sint-Lambertuskerk op het driehoekige plein", "de Bosbeekvallei met de Slagmolen"],
    werken:
      "Er lopen dossiers voor de Bedrijfsstraat en Nijverheidslaan, de Weg naar Opoeteren met de Schansstraat en Heyweg, de Betonweg in Ellikom, de Dwarsstraat en de Heidestraat.",
    probleem:
      "De Slagmolen op de Bosbeek staat in het Wateruitvoeringsprogramma als kritieke locatie voor wateroverlast. Verder is dit een uitgestrekt, landelijk grondgebied met veel lintbebouwing en verspreide hoeves op zandgrond, wat lange private huisaansluitingen oplevert.",
    uniek:
      "Oudsbergen is dun bebouwd en uitgestrekt. Dat betekent lange private leidingen tussen woning en straat — soms tientallen meters. Precies op die lange stukken ontstaan de meeste verzakkingen en wortelingroeiingen, en daar rekent u zelf voor.",
    faq: [
      {
        v: "Mijn huisaansluiting is heel lang. Wie betaalt bij een probleem?",
        a: "Alles tot en met het huisaansluitputje is voor uw rekening, ongeacht de lengte. In een landelijke gemeente als Oudsbergen kan dat gemakkelijk twintig tot veertig meter privéleiding zijn. Bij zulke lengtes is een camera-inspectie meestal de goedkoopste eerste stap: die zegt precies op welke meter het probleem zit, zodat er niet blind gegraven wordt.",
      },
    ],
    volgorde: ["gebied", "problemen", "diensten", "prijzen", "netwerk", "werkwijze", "wetgeving"],
    prioriteit: 2,
  },
  {
    slug: "kinrooi",
    naam: "Kinrooi",
    postcode: "3640",
    inwoners: 12552,
    inwonersJaar: 2026,
    streek: "het Limburgse Maasland",
    deelgemeenten: ["Kessenich", "Molenbeersel", "Ophoven", "Geistingen"],
    buurgemeenten: ["Maaseik", "Bree", "Bocholt"],
    waterlopen: ["de Maas", "de Abeek", "de Lossing", "de Horstgaterbeek", "de Ziepbroekrenne"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Oost)",
    bodem:
      "Van nature moerassig veen- en broekgebied met een hoge grondwaterstand. Het gebied waterde zo slecht af dat er vanaf 1865 lossingen gegraven moesten worden; 's winters lagen de gehuchten door overstroming van elkaar gescheiden.",
    bouwprofiel:
      "Kinrooi en Molenbeersel zijn typische Kempendorpen, Kessenich en Ophoven zijn Maasvalleinederzettingen. Molenbeersel ontstond pas na 1839 uit samengroeiende gehuchten. De bebouwing bestaat uit langgevelhoeves van eind 19e eeuw en hedendaagse bebouwing rond de kerk en de Weertersteenweg.",
    landmarks: ["de jachthaven van Ophoven", "de Lemmensmolen", "de Abeekvallei met het Stramprooierbroek", "Domein Jagersborg"],
    werken:
      "Er loopt een project Afvalwaterinzameling buitengebied dat elf straten omvat, waaronder de Basdonkstraat, Hoeveweg en Vlaslei. Verder zijn er dossiers voor de schoolomgeving, de Lakerweg en de Fosheistraat, plus saneringsprojecten rond de Lossing en de Horstgaterbeek.",
    probleem:
      "De grondwaterstand is hier structureel hoog. Dat betekent dat een defecte voeg in uw leiding niet alleen lekt maar ook grondwater binnenlaat, waardoor de afvoer permanent traag blijft. Bij Maashoogwater komt daar drijfvuil bovenop.",
    uniek:
      "Kinrooi is grotendeels drooggelegd veen- en moerasgebied dat alleen functioneert dankzij gegraven lossingen. De buitengebieden zijn zo verspreid dat de afvalwaterinzameling er als apart project met elf straten moest worden aangepakt.",
    faq: [
      {
        v: "Mijn afvoer blijft traag ook na een ontstopping. Kan het grondwater de oorzaak zijn?",
        a: "In Kinrooi is dat een reële mogelijkheid. Door de van nature hoge grondwaterstand kan water via defecte voegen of scheuren uw leiding binnendringen. De buis staat dan permanent gedeeltelijk vol, waardoor afvalwater traag wegloopt zonder dat er een echte prop zit. Een camera-inspectie toont dit meteen: u ziet het water letterlijk binnensijpelen. De oplossing is dan herstel of relining, niet opnieuw ontstoppen.",
      },
    ],
    volgorde: ["problemen", "gebied", "diensten", "netwerk", "prijzen", "werkwijze", "wetgeving"],
    prioriteit: 3,
  },
  {
    slug: "bocholt",
    naam: "Bocholt",
    postcode: "3950",
    inwoners: 13879,
    inwonersJaar: 2026,
    streek: "de Kempen, in het landschap van de Vlakte van Bocholt",
    deelgemeenten: ["Kaulille", "Reppel", "Lozen", "Goolder", "Hees", "Kreiel", "Veldhoven", "Lechten"],
    buurgemeenten: ["Bree", "Pelt", "Hamont-Achel", "Kinrooi", "Peer"],
    waterlopen: ["de Abeek", "de Warmbeek", "de Laak", "de Balkerbeek", "de Oude Beek"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Noord)",
    bodem: "Zandgrond; de westgrens van de gemeente valt samen met de geologische Feldbissbreuk.",
    bouwprofiel:
      "Bocholt is een relatief jong cultuurlandschap, gevormd door 19e-eeuwse landbouwontginning met intensieve veeteelt. Historisch een dorpskern rond de kerk plus zes gehuchten, alle beekvalleinederzettingen met woonkernen op de helling tussen de hoger gelegen heidegronden en de valleigronden.",
    landmarks: ["de Abeekvallei", "het Stramprooierbroek", "de Zuid-Willemsvaart", "Kaulillerdorp"],
    werken:
      "Het grootste dossier is de optimalisatie van de riolering in Bocholt-Centrum, goed voor bijna 2,95 miljoen euro. Verder lopen projecten voor Dorperheide, de Winterdijkweg-Molenstraat en de Oude Hostieweg met de Biesekampweg, plus de optimalisatie van het overstort aan de Lillerbaan.",
    probleem:
      "Het overstort aan de Lillerbaan op de Warmbeek is een genoemd knelpunt. De dorpskernen liggen precies op de overgang van droge heiderug naar natte beekvallei, wat zorgt voor sterk wisselende omstandigheden over korte afstand.",
    uniek:
      "In Bocholt ligt uw woning waarschijnlijk op de helling tussen droge heiderug en natte beekvallei. Boven op de helling is zandinspoeling het probleem, onderaan is het grondwater en terugstuwing — soms binnen dezelfde straat.",
    faq: [
      {
        v: "Waarom heeft mijn buur wel last en ik niet, in dezelfde straat?",
        a: "In Bocholt liggen de woonkernen op de helling tussen hoge heidegronden en lage valleigronden. Enkele meters hoogteverschil bepalen of uw leiding boven of onder de grondwaterstand ligt en of u het laagste punt van het stelsel bent. Bij terugstuwing loopt altijd het laagste aangesloten punt als eerste over — vaak een kelderafvoer of een garageput bij de buur en niet bij u.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "gebied", "werkwijze", "wetgeving"],
    prioriteit: 3,
  },
  {
    slug: "hechtel-eksel",
    naam: "Hechtel-Eksel",
    postcode: "3940",
    inwoners: 13075,
    inwonersJaar: 2026,
    streek: "de Kempen, Kempisch laagplateau",
    deelgemeenten: ["Hechtel", "Eksel", "Hoksent", "Vlasmeer", "Winner", "Locht"],
    buurgemeenten: ["Peer", "Pelt", "Houthalen-Helchteren", "Leopoldsburg", "Lommel"],
    waterlopen: ["de Grote Nete", "de Zwarte Beek", "de Dommel", "de Dorperloop", "de Bolissenbeek"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Noord)",
    bodem: "Droge, sterk infiltrerende zand- en stuifzandbodem met landduinen tot 40 meter hoog, vooral binnen het militair domein.",
    bouwprofiel:
      "Bij de gevechten in de Tweede Wereldoorlog werden in Hechtel 121 huizen verwoest, ongeveer de helft van het woningbestand. Het gros van de kern dateert dus van de heropbouw na 1944. Eksel heeft een opvallende ladderformige wegenstructuur met een hoofdas tussen twee driehoekige schaapsdriften.",
    landmarks: ["het Kamp van Beverlo met de landduinen", "de Begijnenvijvers", "de dubbele dorpspleinen van Hechtel", "de RWZI van Eksel"],
    werken:
      "Er zijn werken in uitvoering aan de Eikelbosstraat richting de RWZI en er loopt een saneringsdossier voor de Grote Nete met de Weyerbrugstraat en Kiefhoekstraat, goed voor ruim 2 miljoen euro. De RWZI van Eksel werd in 2025 gerenoveerd met bijkomende fosforverwijdering.",
    probleem:
      "Anders dan de meeste Limburgse gemeenten kampt Hechtel-Eksel met waterschaarste in de bovenlopen in plaats van wateroverlast. Het overstromingsrisico in het Zwarte Beek-gebied wordt als laag ingeschat.",
    uniek:
      "Hechtel-Eksel is de droogste gemeente van Noord-Limburg: zeer doorlatend stuifzand met landduinen. Het bouwhistorisch feit dat ongeveer de helft van de Hechtelse woningen in 1944 verwoest werd, betekent bovendien dat veel afvoerleidingen dateren uit de wederopbouw.",
    faq: [
      {
        v: "Wat betekent stuifzand voor mijn rioolaansluiting?",
        a: "Zeer doorlatend zand voert water snel af, maar het spoelt ook makkelijk mee door een kleine barst of een slecht sluitende voeg. Het zand verzamelt zich onderin de leiding en bouwt daar een vaste laag op. Typisch symptoom: uw afvoer wordt traag zonder duidelijke aanleiding en na een spiraalontstopping is het binnen enkele maanden terug. Hogedrukreiniging haalt de zandbank wel weg; de oorzaak lost u pas op door de lekkende plek te herstellen.",
      },
    ],
    volgorde: ["problemen", "diensten", "netwerk", "prijzen", "werkwijze", "gebied", "wetgeving"],
    prioriteit: 3,
  },
  {
    slug: "leopoldsburg",
    naam: "Leopoldsburg",
    postcode: "3970",
    inwoners: 16959,
    inwonersJaar: 2026,
    streek: "de Zuiderkempen, op de westelijke rand van het Kempisch laagplateau",
    deelgemeenten: ["Heppen", "Hengstbergen"],
    buurgemeenten: ["Ham", "Beringen", "Hechtel-Eksel"],
    waterlopen: ["het Kanaal van Beverlo", "de Zwarte Beek"],
    rioolbeheerder: "Fluvius (rioolbeheercentrum Noord)",
    bodem: "Vochtige tot droge zandgronden, typisch Kempens, met het Zwarte Beek-veengebied als aangrenzende waterloop.",
    bouwprofiel:
      "Leopoldsburg is geen gegroeid dorp maar een 19e-eeuwse garnizoensnederzetting bij het Kamp van Beverlo. Dat verklaart de rechtlijnige laanstructuur met de Koningin Louisa-Marialaan, de Vlaanderenlaan en de Delannoylaan. Heppen ontstond wel organisch, op een driehoekige wegsplitsing.",
    landmarks: ["het Kamp van Beverlo", "het Kanaal van Beverlo", "het driehoekige dorpsplein van Heppen", "de garnizoenslanen van het centrum"],
    werken:
      "De vernieuwing verloopt per laan: de Koningin Louisa-Marialaan, de Vlaanderenlaan en Delannoylaan, en een groot dossier rond de Kanaalstraat, Tunnelstraat, Olmenweg en Leukenstraat van ruim 3 miljoen euro — het zwaarste rioleringsdossier van Noord-Limburg.",
    probleem:
      "Het aangrenzende Zwarte Beek-veengebied moet tegen 2027 een goede ecologische toestand bereiken, waardoor waterkwaliteit hier zwaarder weegt dan overstromingsrisico. Er geldt ook een tijdelijk onttrekkingsverbod op bepaalde waterlopen.",
    uniek:
      "Leopoldsburg is aangelegd als militaire stad met een rechtlijnig lanenpatroon, en het rioolvernieuwingsprogramma volgt diezelfde logica: laan per laan. Woont u in een van de garnizoenslanen, dan is de kans groot dat uw straat de komende jaren aan de beurt komt.",
    faq: [
      {
        v: "Mijn laan wordt heraangelegd met gescheiden riolering. Wanneer moet ik afkoppelen?",
        a: "Zodra het gescheiden stelsel in uw straat operationeel is, moet u uw eigen leidingen scheiden tot aan de perceelsgrens en volgt een keuring van de privéwaterafvoer. Die keuring is in dit geval wettelijk verplicht, tenzij u al een conform attest hebt dat jonger is dan vijf jaar. Fluvius geeft voor bestaande woningen een forfaitaire premie van 500 euro, aan te vragen binnen zes maanden na afronding van de werken.",
      },
    ],
    volgorde: ["netwerk", "wetgeving", "diensten", "problemen", "prijzen", "werkwijze", "gebied"],
    prioriteit: 3,
  },
];
