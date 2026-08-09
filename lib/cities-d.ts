import type { City } from "./city-types";

/** Groep D — Zuid-Limburg, de Voerstreek en de Zuiderkempen. */
export const citiesD: City[] = [
  {
    slug: "bilzen",
    naam: "Bilzen",
    fusie: "Sinds 1 januari 2025 vormt Bilzen samen met Hoeselt de gemeente Bilzen-Hoeselt.",
    postcode: "3740",
    inwoners: 32782,
    inwonersJaar: 2024,
    streek: "op de grens tussen Kempen en Haspengouw, met het centrum in de Demervallei",
    deelgemeenten: ["Beverst", "Eigenbilzen", "Grote-Spouwen", "Hees", "Hoelbeek", "Kleine-Spouwen", "Martenslinde", "Mopertingen", "Munsterbilzen", "Rijkhoven", "Rosmeer", "Waltwilder"],
    buurgemeenten: ["Genk", "Zutendaal", "Lanaken", "Riemst", "Tongeren", "Hoeselt", "Diepenbeek"],
    waterlopen: ["de Demer", "de Munsterbeek", "de Weyerkensbeek", "het Albertkanaal"],
    rioolbeheerder: "de stad Bilzen-Hoeselt zelf",
    rioolbeheerderNoot:
      "Voor postcode 3740 vermeldt AquaFlanders geen externe rioolbeheerder maar verwijst naar de gemeente. Bilzen-Hoeselt regelt rioolaansluitingen via een eigen aanvraagformulier en heeft een eigen subsidie voor een gescheiden afvoersysteem.",
    bodem: "Bodemgrens tussen zandig Kempen en lemig Vochtig-Haspengouw, met de Demervallei dwars door de kern.",
    bouwprofiel:
      "Bilzen ligt halverwege Hasselt en Maastricht, langs de E313 en de spoorlijn Hasselt-Luik. De stad groeide sinds 1990 met ruim een kwart en telt ruim 18.000 adressen — een mix van historische kernen en recentere verkavelingen.",
    landmarks: ["de Kattenberg", "Park Haffmans", "de Demervallei", "het Albertkanaal", "de landcommanderij Alden Biesen in Rijkhoven"],
    werken:
      "Aquafin legt gescheiden riolering aan in de Schalkhovenstraat en Lindenhofstraat. In Rosmeer, Munsterbilzen en Hoelbeek werden werven afgerond.",
    probleem:
      "Bilzen-Hoeselt is een van de weinige Limburgse gemeenten waar de riolering niet bij Fluvius zit maar bij het lokaal bestuur. Meldingen en aanvragen lopen dus via de stad. Daarbovenop ligt de gemeente op de bodemgrens Kempen-Haspengouw, met de Demervallei dwars door de kern.",
    uniek:
      "In Bilzen belt u voor het openbare riool de stad en niet Fluvius. En binnen één gemeente wisselt de ondergrond van zandig Kempen naar lemig Haspengouw — wat betekent dat infiltratie in Eigenbilzen realistisch kan zijn en in Rosmeer veel minder.",
    waterhardheid: 35,
    statusTool: { dekking: 95, risicovol: 38 },
    faq: [
      {
        v: "Bij wie meld ik in Bilzen een verstopping in de straatriolering?",
        a: "Bij de stad Bilzen-Hoeselt. Voor postcode 3740 verwijst AquaFlanders uitdrukkelijk naar de gemeente in plaats van naar Fluvius: het lokaal bestuur beheert de riolering zelf. De stad regelt ook rioolaansluitingen via een eigen aanvraagformulier en heeft een eigen subsidie voor de aanleg van een gescheiden afvoersysteem — die staat los van de Fluvius-premie.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "wetgeving", "werkwijze", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "riemst",
    naam: "Riemst",
    postcode: "3770",
    inwoners: 16938,
    inwonersJaar: 2025,
    streek: "Droog Haspengouw, grensgemeente met Nederland én Wallonië",
    deelgemeenten: ["Genoelselderen", "Herderen", "Kanne", "Membruggen", "Millen", "Val-Meer", "Vlijtingen", "Vroenhoven", "Zichen-Zussen-Bolder", "Lafelt", "Heukelom", "Elst"],
    buurgemeenten: ["Bilzen", "Lanaken", "Tongeren", "Bassenge", "Visé", "Maastricht"],
    waterlopen: ["de Jeker", "de Zouw", "de Voer", "het Heeswater", "de Molenbeek", "het Albertkanaal"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Tertiaire mergel- en krijtafzettingen met daarboven een lösspakket. Het krijt vertoont karstverschijnselen zoals orgelpijpen en verzakkingen. Het landschap kent droogdalen en holle wegen.",
    bouwprofiel:
      "Verspreide dorpskernen met vierkantshoeven; de bewoning gaat terug tot de Romeinse tijd, met de heirbaan Tongeren-Maastricht via de Valmeerstraat. De grootste kernen zijn Zichen-Zussen-Bolder en Vlijtingen.",
    landmarks: ["de brug van Vroenhoven met het Belevingscentrum WO II", "de mergelgrotten van Zichen-Zussen-Bolder", "het slagveld van Lafelt", "het Albertkanaal bij Kanne"],
    werken:
      "In de Smisstraat en Ophemmerstraat in Vlijtingen kwam gescheiden riolering, een investering van 1,5 miljoen euro waarvan 652.000 euro door de gemeente. Verder lopen herinrichtingen met riolering aan de Tongersesteenweg, de Elderenweg, de Maastrichtersteenweg en Avergat.",
    probleem:
      "Riemst ligt boven een uitgestrekt mergel- en grottengebied. De groeven van Val-Meer en Zichen-Zussen-Bolder beslaan een gekarteerd gebied van meer dan zes miljoen vierkante meter, vaak met privé-ingangen onder hoeves. In Kanne zorgen verzakkingen en scheuren geregeld voor problemen. Daarnaast investeerde de gemeente na de wolkbreuk van 2016 660.000 euro in bufferende infrastructuur, waaronder zes aarden dammen in de Hageveldstraat met meer dan 20.000 kubieke meter opvangcapaciteit.",
    uniek:
      "Nergens anders in Limburg ligt uw rioolaansluiting boven een netwerk van mergelgangen. Verzakkingsgevoelige ondergrond, holle ruimtes en onvoorspelbaar grondwatergedrag maken dat een verzakte leiding hier een reëler scenario is dan elders.",
    faq: [
      {
        v: "Mijn leiding is verzakt. Heeft dat met de mergelondergrond te maken?",
        a: "Dat kan. Het krijt onder Riemst vertoont karstverschijnselen zoals orgelpijpen en verzakkingen, en op sommige plaatsen liggen er mergelgangen onder de bebouwing. Voor uw afvoer betekent dat: zettingen kunnen plaatselijk optreden zonder dat de hele straat meezakt, waardoor er een knik of een tegenhelling in de buis ontstaat. Een camera-inspectie met hellingmeting toont dat. Bij zo'n knik is relining vaak beter dan opgraven, omdat er niet gegraven hoeft te worden in onzekere ondergrond.",
      },
    ],
    volgorde: ["problemen", "diensten", "netwerk", "werkwijze", "prijzen", "gebied", "wetgeving"],
    prioriteit: 2,
  },
  {
    slug: "voeren",
    naam: "Voeren",
    postcode: "3790",
    inwoners: 4412,
    inwonersJaar: 2025,
    streek: "de Voerstreek, een Vlaamse exclave tussen Wallonië en Nederland",
    deelgemeenten: ["'s-Gravenvoeren", "Sint-Martens-Voeren", "Sint-Pieters-Voeren", "Teuven", "Remersdaal", "Moelingen"],
    buurgemeenten: ["Visé", "Dalhem", "Aubel", "Plombières", "Nederlands Limburg"],
    waterlopen: ["de Voer", "de Gulp", "de Berwijn", "de Veurs", "de Noorbeek"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Heuvellandschap met asymmetrische dalen waar op steile hellingen de Gulpense kalk dagzoomt. Kalkrijk op veel plaatsen, maar zuur en voedselarm bovenop de hellingen. Hoogtes tot 240 meter.",
    bouwprofiel:
      "Voeren is met 91% onbebouwd oppervlak de dunst bebouwde gemeente van Limburg. Het landschap kent brongebieden, graften, holle wegen, grubben en hoogstamboomgaarden, met vakwerk- en mergelbouw, kastelen en historische kernen.",
    landmarks: ["de commanderij van Sint-Pieters-Voeren", "kasteel Altenbroek en de Voervallei", "de Gulpvallei", "het gehucht De Plank"],
    werken:
      "Aquafin voert de collector Voer fase 2 uit in Sint-Martens-Voeren, gestart in maart 2024. In juli 2026 was het deel tot en met het kruispunt in dienst genomen; huisaansluitingen, boordstenen, asfalt en voetpaden volgden daarna. Er loopt ook een collector Teuvenbeek.",
    probleem:
      "Voeren zit midden in een rioleringsinhaalbeweging. De burgemeester stelde in 2022 dat het nog zeker tot 2027 duurt voor alle hoofdleidingen in alle deelgemeenten liggen. Tot dan blijven septische putten en IBA's voor een deel van de woningen de eindoplossing.",
    uniek:
      "In Voeren bepaalt uw dorp of u al op collectieve riolering zit. De hellingen tot 240 meter zorgen bovendien voor hoge stroomsnelheden en voor bron- en kwelwater dat in het stelsel terechtkomt — twee dingen die u in vlak Limburg niet tegenkomt.",
    faq: [
      {
        v: "Ik zit in Voeren nog op een septische put of IBA. Wat moet ik onderhouden?",
        a: "Een septische put laat u het best om de drie à vijf jaar ledigen; hoe vaak precies hangt af van het volume en het aantal bewoners. Signalen dat ze vol zit: een trage wc- of doucheafvoer, geurhinder en een borrelend geluid in de leiding. Bij een IBA komt daar het beheer van de installatie zelf bij — controleer of dat via de rioolbeheerder loopt of via uzelf. Wacht niet tot de put overloopt: een volle put duwt terug richting uw woning.",
      },
    ],
    volgorde: ["gebied", "problemen", "diensten", "wetgeving", "prijzen", "werkwijze", "netwerk"],
    prioriteit: 3,
  },
  {
    slug: "zutendaal",
    naam: "Zutendaal",
    postcode: "3690",
    inwoners: 7404,
    inwonersJaar: 2025,
    streek: "het Kempens Plateau, Nationaal Park Hoge Kempen",
    deelgemeenten: ["Wiemesmeer", "Besmer", "Gewaai", "Broek", "Stalken", "Papendaal"],
    buurgemeenten: ["Genk", "As", "Maasmechelen", "Lanaken", "Bilzen"],
    waterlopen: ["de Zutendaalbeek", "de Broekerbeek", "de Bezoensbeek", "de Heiwickbeek"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Zandbodem met beperkte hellingen, in het hemelwaterplan omschreven als uiterst geschikt voor infiltratie. Het plateau ligt rond 102 meter, de Albertkanaalzone rond 61 meter — 41 meter hoogteverschil.",
    bouwprofiel:
      "Een jong woningpark met als dominante woningtype de eengezinswoning in open bebouwing, typisch landelijk. Appartementen nemen geleidelijk toe. Leegstand en verkrotting zijn verwaarloosbaar ten opzichte van het Vlaamse gemiddelde.",
    landmarks: ["Lieteberg als toegangspoort tot het Nationaal Park Hoge Kempen", "de vliegbasis en het tankmonument", "de watertoren", "de Hesselsberg"],
    werken:
      "Aan de Asserweg in Wiemesmeer legde Fluvius een gescheiden stelsel aan met drie innovatieve technieken: infiltratiestroken, poreuze betonbuizen en een doorlatend wegdek met infiltratiegaten, zodat regenwater maximaal ter plaatse infiltreert. De eindfase liep in maart 2025.",
    probleem:
      "Ondanks een aansluitingsgraad van 95,95% bestaat een groot deel van het rioleringsstelsel uit een gemengd stelsel dat regelmatig overstort op waterlopen. De zandgrond heeft een keerzijde: zand spoelt makkelijk in oude leidingen en putten.",
    uniek:
      "Zutendaal heeft een uitzonderlijk hoge aansluitingsgraad — 95,95% van de inwoners zit op waterzuivering — en is de plek waar Fluvius poreuze betonbuizen en doorlatend wegdek uittestte. Toch is het net grotendeels gemengd, met regelmatige overstorten.",
    faq: [
      {
        v: "Waar gaat mijn afvalwater in Zutendaal naartoe?",
        a: "Dat hangt af van waar u woont ten opzichte van het Albertkanaal. Boven het kanaal gaat het afvalwater naar de RWZI van Genk, onder het kanaal naar de RWZI van Bilzen. Ongeveer 95,95% van de Zutendaalse inwoners is aangesloten op waterzuivering; ongeveer 4% van de woningen niet. Op het zoneringsplan van de gemeente ziet u per adres wat voor u geldt.",
      },
    ],
    volgorde: ["netwerk", "diensten", "problemen", "prijzen", "wetgeving", "werkwijze", "gebied"],
    prioriteit: 3,
  },
  {
    slug: "as",
    naam: "As",
    postcode: "3665",
    inwoners: 8298,
    inwonersJaar: 2025,
    streek: "het Kempens Plateau, midden tussen Demer- en Maasvallei",
    deelgemeenten: ["Niel-bij-As", "Oeleinde", "Het Dorp", "Daalstraat", "Grotstraat"],
    buurgemeenten: ["Genk", "Zutendaal", "Maasmechelen", "Dilsen-Stokkem", "Oudsbergen"],
    waterlopen: ["de Bosbeek, hier ook Asbeek of Oeter genoemd"],
    rioolbeheerder: "Riopact",
    rioolbeheerderNoot:
      "As is sinds 1 januari 2023 Riopact-vennoot. Riopact is een samenwerking tussen De Watergroep en Aquafin. Een rioolaansluiting vraagt u hier minstens acht weken voor de start van de werken aan via Riopact, niet via Fluvius.",
    bodem: "Droge zandbodem op het Kempens Plateau, historisch grote heidevelden en bossen.",
    bouwprofiel:
      "De oude dorpskern bewaart karakteristieke langgevelhoeves haaks op de straat, in de 19e eeuw versteend met veldkeien. De mijnbouw en de industriële migratie vanuit Genk zorgden voor nieuwe woonwijken op voormalige landbouwgrond.",
    landmarks: ["het station van As uit 1877, het oudste van Limburg", "het André Dumontmonument", "de Sint-Aldegondiskerk op haar terp", "de watermolens op de Bosbeek", "het Heiderbos"],
    probleem:
      "Zandgrond zorgt voor inspoeling en verzakking rond putdeksels. In het buitengebied geldt voor een deel van de adressen een IBA-verplichting; de gemeente heeft daar een eigen subsidie voor.",
    uniek:
      "As is de enige Limburgse gemeente met Riopact als rioolbeheerder in plaats van Fluvius. Dat is geen detail: uw aanvraag loopt via een ander loket en u moet minstens acht weken op voorhand aanvragen.",
    faq: [
      {
        v: "Waarom is de rioolbeheerder in As anders dan in de buurgemeenten?",
        a: "As werd op 1 januari 2023 vennoot van Riopact, een samenwerking tussen drinkwaterbedrijf De Watergroep en waterzuiveringsbedrijf Aquafin. In Genk, Zutendaal en Maasmechelen is dat Fluvius. Praktisch gevolg: een rioolaansluiting in As vraagt u aan via Riopact en minstens acht weken voor de start van uw werken. Voor de keuring van de privéwaterafvoer aanvaardt de gemeente keurders erkend door Vlario of AquaFlanders.",
      },
    ],
    volgorde: ["netwerk", "wetgeving", "diensten", "problemen", "prijzen", "werkwijze", "gebied"],
    prioriteit: 3,
  },
  {
    slug: "hoeselt",
    naam: "Hoeselt",
    fusie: "Sinds 1 januari 2025 vormt Hoeselt samen met Bilzen de gemeente Bilzen-Hoeselt.",
    postcode: "3730",
    inwoners: 10080,
    inwonersJaar: 2024,
    streek: "Vochtig Haspengouw, de Bloesemstreek",
    deelgemeenten: ["Alt-Hoeselt", "Romershoven", "Schalkhoven", "Sint-Huibrechts-Hern", "Werm"],
    buurgemeenten: ["Bilzen", "Tongeren", "Kortessem", "Riemst", "Diepenbeek"],
    waterlopen: ["de Demer langs de oostgrens", "de Winterbeek langs de westgrens"],
    rioolbeheerder: "Fluvius",
    bodem: "Leembodem van Vochtig Haspengouw met beekvalleien en hoge grondwaterstanden in de valleien.",
    bouwprofiel:
      "De bewoning klimt op tot de prehistorie, met intense Romeinse bebouwing en een eerste vermelding in 1066. De Frankische erfenis is zichtbaar in het driehoekige dorpsplein met motheuvel. De kern is gestructureerd rond de Dorpsstraat, L. Lambrechtstraat en Stationsstraat, met acht historische wijken.",
    landmarks: ["de Sint-Stefanuskerk", "de motheuvel en het driehoekige dorpsplein", "de kerkdorpen Alt-Hoeselt, Werm en Schalkhoven"],
    werken:
      "In Romershoven legde Aquafin een gescheiden stelsel aan in de Hombroekstraat, Goosstraat en een deel van de Romershovenstraat, waarbij het afvalwater van ongeveer 700 inwoners bijkomend wordt opgevangen en gezuiverd in de RWZI van Bilzen. Verder loopt het project Schalkhovenstraat en Lindenhofstraat.",
    probleem:
      "Niet overal is er al een gescheiden rioleringsstelsel. In het meerjarenplan 2026-2031 trekt Bilzen-Hoeselt 43 miljoen euro uit voor wegen en riolering, met uitdrukkelijk een inhaaloperatie in Hoeselt.",
    uniek:
      "Hoeselt zit midden in een aangekondigde inhaaloperatie: het gemeentebestuur erkent zelf dat niet overal al een gescheiden stelsel ligt. Verspreide gehuchten met lange huisaansluitingen maken dat extra voelbaar.",
    faq: [
      {
        v: "Wat verandert er voor mij door de fusie met Bilzen?",
        a: "Administratief loopt alles nu via het bestuur van Bilzen-Hoeselt. Belangrijker is de praktische kant: voor postcode 3730 verwijst AquaFlanders naar de gemeente in plaats van naar Fluvius voor het rioolbeheer, en het meerjarenplan 2026-2031 voorziet uitdrukkelijk een inhaaloperatie in Hoeselt omdat er nog niet overal een gescheiden stelsel ligt. Vraag bij werken in uw straat na of u moet afkoppelen.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "wetgeving", "prijzen", "werkwijze", "gebied"],
    prioriteit: 3,
  },
  {
    slug: "tessenderlo",
    naam: "Tessenderlo",
    fusie: "Sinds 1 januari 2025 vormt Tessenderlo samen met Ham de gemeente Tessenderlo-Ham.",
    postcode: "3980",
    inwoners: 19011,
    inwonersJaar: 2024,
    streek: "de Zuiderkempen, waar Limburg, Vlaams-Brabant en Antwerpen samenkomen",
    deelgemeenten: ["Schoot", "Engsbergen", "Hulst", "Berg"],
    buurgemeenten: ["Ham", "Beringen", "Laakdal", "Diest", "Scherpenheuvel-Zichem"],
    waterlopen: ["de Grote Laak", "de Winterbeek", "de Vallei van de Drie Beken", "het Albertkanaal"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Voornamelijk lemig zand, afgewisseld met droge zandbodem en een kleiige ondergrond nabij de waterlopen, met slecht doorlatende zones uit ijzerhoudende zandsteen op de toppen. De grondwaterstand ligt op 1 à 2 meter onder het maaiveld.",
    bouwprofiel:
      "De traditionele dorpskern had een rechthoekige markt met de Sint-Martinuskerk. De explosie van ammoniumnitraat op 29 april 1942 doodde 189 mensen en verwoestte de historische kern — een groot deel van het centrum is dus naoorlogse wederopbouw. In de jaren 1960 werd Tessenderlo aangeduid als eerste industriezone van nationaal belang van België.",
    landmarks: ["de Sint-Martinuskerk en de Markt", "de fabriek van Tessenderlo Group", "het bos- en heidegebied Gerhagen", "de Sint-Luciakerk in Engsbergen"],
    werken:
      "Het project Wasseven werd in februari 2026 afgerond. Verder lopen projecten in Genebos, de Gerhoevenstraat, de Gerhagenstraat en een groot pakket rond de Laarbossenstraat, Molenstraat en Putstraat.",
    probleem:
      "Het hemelwaterplan noemt concrete knelpunten voor wateroverlast: Biesdelle, Molenstraat, Neerstraat, Transportstraat en Kanaalweg, plus overstorten bij Begijnenwinning en Paalseweg. Daarnaast werd de Winterbeek over 17 kilometer gesaneerd na historische verontreiniging met zware metalen en zouten uit de jaren 1960-1970.",
    uniek:
      "Tessenderlo is de enige Limburgse gemeente waar de historische kern in 1942 door een fabrieksexplosie verwoest werd — het centrum is grotendeels wederopbouw. En de grondwaterstand van 1 à 2 meter maakt dat een defecte leiding hier snel grondwater binnenlaat.",
    faq: [
      {
        v: "Mijn straat staat in het hemelwaterplan als knelpunt. Wat betekent dat?",
        a: "Het hemelwaterplan van Tessenderlo benoemt onder meer Biesdelle, de Molenstraat, de Neerstraat, de Transportstraat en de Kanaalweg als knelpunten voor wateroverlast. Dat betekent dat het stelsel daar bij zware regen zijn grenzen bereikt. Voor u is het belangrijkste gevolg: in zulke straten is een terugslagklep op uw aansluiting geen luxe, en is het extra zaak dat uw eigen leidingen niet bijkomend regenwater aanvoeren.",
      },
    ],
    volgorde: ["problemen", "netwerk", "diensten", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 2,
  },
  {
    slug: "ham",
    naam: "Ham",
    fusie: "Sinds 1 januari 2025 vormt Ham samen met Tessenderlo de gemeente Tessenderlo-Ham.",
    postcode: "3945",
    inwoners: 11338,
    inwonersJaar: 2024,
    streek: "de Zuiderkempen",
    deelgemeenten: ["Oostham", "Kwaadmechelen"],
    buurgemeenten: ["Tessenderlo", "Beringen", "Leopoldsburg", "Balen", "Meerhout", "Laakdal"],
    waterlopen: ["de Grote Laak", "de Grote Nete", "het Albertkanaal", "het kanaal Bocholt-Herentals"],
    rioolbeheerder: "Fluvius",
    bodem: "Natte zandgronden met lichte golvingen in het oosten, aflopend naar het zuidwesten.",
    bouwprofiel:
      "Ham groeide sinds 1990 met 34%, van 8.492 naar ruim 11.000 inwoners — de sterkste groeier van de Zuiderkempen. Dat betekent dat een aanzienlijk deel van de woningvoorraad relatief recent is, met bijbehorende recentere aansluitingen.",
    landmarks: ["de sluis van Kwaadmechelen-Ham op het Albertkanaal", "het kanaal Bocholt-Herentals", "de Grote Netevallei"],
    werken:
      "De sanering van de Grote Laak loopt van het lozingspunt in Ham tot de monding in de Grote Nete, over 18 kilometer. Deelgebied 1 was klaar in juni 2022, deelgebied 2 in juli 2025, deelgebied 4 startte in juli 2025 en deelgebied 3 volgt in 2026-2027.",
    probleem:
      "De Grote Laak draagt de erfenis van industriële lozingen: slib en vervuilde bodem worden tot twintig centimeter diepte afgegraven en afgevoerd naar een saneringsberging. Voor bewoners betekent dat werfverkeer en tijdelijke omleggingen, maar op termijn een gezondere waterloop.",
    uniek:
      "Ham groeide in vijfendertig jaar met een derde — sneller dan eender welke buurgemeente. Veel woningen hier zijn dus jonger dan het gemiddelde Limburgse huis, wat betekent dat een verstopping vaker aan gebruik ligt dan aan een versleten leiding.",
    faq: [
      {
        v: "Mijn woning is relatief nieuw. Waarom heb ik dan toch een verstopping?",
        a: "Bij nieuwere woningen ligt de oorzaak meestal niet bij de leiding zelf maar bij wat erin gaat: vochtige doekjes, vet, kattenbakvulling of bouwafval van een verbouwing. Een tweede klassieker bij recentere bouw is een te vlakke of verkeerd aangelegde leiding waardoor het verval te klein is. Dat ziet u niet, maar een camera-inspectie met hellingmeting toont het meteen — en dan weet u dat opnieuw ontstoppen alleen uitstel is.",
      },
    ],
    volgorde: ["diensten", "netwerk", "problemen", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 3,
  },
];
