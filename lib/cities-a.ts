import type { City } from "./city-types";

/** Groep A — de grote kernen en de Mijnstreek. */
export const citiesA: City[] = [
  {
    slug: "hasselt",
    naam: "Hasselt",
    fusie: "Sinds 1 januari 2025 hoort ook Kortessem bij Hasselt.",
    postcode: "3500",
    inwoners: 80828,
    inwonersJaar: 2024,
    streek: "op de overgang van de Kempen naar Vochtig-Haspengouw",
    deelgemeenten: ["Kermt", "Kuringen", "Sint-Lambrechts-Herk", "Spalbeek", "Stevoort", "Stokrooie", "Wimmertingen", "Kortessem"],
    buurgemeenten: ["Heusden-Zolder", "Zonhoven", "Genk", "Diepenbeek", "Wellen", "Alken", "Nieuwerkerken", "Herk-de-Stad", "Lummen"],
    waterlopen: ["de Demer", "de Herk", "de Mombeek", "de Helbeek", "het Albertkanaal"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Het noorden van Hasselt ligt op Kempense zandbodem waar regenwater vlot wegzakt; het zuiden is kleiig leem van Vochtig-Haspengouw, waar dat nauwelijks lukt.",
    bouwprofiel:
      "Naast de historische binnenstad liggen de gehuchten Godsheide, Rapertingen en Kiewit en de naoorlogse wijken Runkst en Banneuxwijk. De stad groeide sinds 1990 met een kwart, van 64.509 naar ruim 80.000 inwoners — een groot deel van het aangesloten afvoernet is dus jonger dan de binnenstad, maar de kern zelf niet.",
    landmarks: ["de Kiezelstraat", "Runkst", "de Banneuxwijk", "Kiewit", "Godsheide", "de oevers van het Albertkanaal"],
    werken:
      "In de Kiezelstraat legt Aquafin gescheiden riolering aan: fase 1 startte in oktober 2025 tussen Universiteitslaan en Kleinstraat, fase 2 in maart 2026 tot de Platte-Vijversstraat, met einde voorzien eind 2026. Ook in de Paalsteenstraat wordt gewerkt. Na de aanleg van een gescheiden stelsel geldt een afkoppelingsplicht binnen ongeveer zes maanden.",
    probleem:
      "Het grootste deel van het Hasseltse rioolnet is nog altijd gemengd: regenwater en afvalwater zitten in dezelfde buis. De Demer is bovendien een echte regenrivier die razendsnel piekt, waardoor de Demer-, Herk- en Mombeekvallei fluviaal overstromingsgevoelig zijn. In sterk verharde straten komt daar oppervlakkig afstromend regenwater bovenop.",
    uniek:
      "Hasselt combineert een grotendeels gemengd rioolstelsel met een rivier die extreem snel op regen reageert én een bodem die in het noorden water slikt en in het zuiden niet. Een verstopping voelt hier in Runkst anders dan in Stevoort.",
    waterhardheid: 18,
    statusTool: { dekking: 93, risicovol: 42, noot: "1% van de leidingen staat als topkritisch geklasseerd" },
    faq: [
      {
        v: "Waarom loopt mijn afvoer in Hasselt trager bij zware regen?",
        a: "Omdat het grootste deel van het Hasseltse net nog gemengd is: hemelwater en afvalwater delen dezelfde leiding. Bij een felle bui zit die buis vol regenwater en kan uw afvalwater er nauwelijks bij. Merkt u dat enkel tijdens of vlak na regen, dan is er meestal geen verstopping maar een verzadigd stelsel. Blijft het probleem ook bij droog weer, dan zit er wél iets vast.",
      },
      {
        v: "Er wordt in mijn straat gescheiden riolering aangelegd. Wat moet ik zelf doen?",
        a: "Na de aanleg van een gescheiden stelsel moet u uw eigen leidingen binnen ongeveer zes maanden afkoppelen: regenwater apart, afvalwater apart, tot aan de perceelsgrens. Daarna volgt een keuring van de privéwaterafvoer. Fluvius geeft voor bestaande woningen een forfaitaire premie van 500 euro voor een gescheiden afvoersysteem.",
      },
    ],
    volgorde: ["problemen", "diensten", "netwerk", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "genk",
    naam: "Genk",
    postcode: "3600",
    inwoners: 68058,
    inwonersJaar: 2025,
    streek: "het Kempisch laagplateau, hart van de Mijnstreek",
    deelgemeenten: ["Winterslag", "Waterschei", "Zwartberg", "Gelieren", "Langerlo", "Sledderlo", "Boxbergheide", "Termien", "Kolderbos", "Bret"],
    buurgemeenten: ["Houthalen-Helchteren", "Oudsbergen", "As", "Zutendaal", "Bilzen", "Diepenbeek", "Hasselt", "Zonhoven"],
    waterlopen: ["de Stiemerbeek", "de Dorpsbeek met de Molenvijver", "het Albertkanaal"],
    rioolbeheerder: "Fluvius",
    bodem: "Zandig Kempens plateau, met de Stiemervallei als lager gelegen afvoeras dwars door de stad.",
    bouwprofiel:
      "De oude dorpskern werd in 1944 door een verkeerd uitgevoerd bombardement bijna volledig verwoest en naoorlogs heropgebouwd. Daarnaast liggen drie mijncités: Winterslag (mijn 1914-1917), Waterschei met ongeveer duizend woningen gebouwd tussen 1922 en 1929, en Zwartberg (1925). Die woningen zijn intussen zowat honderd jaar oud — en hun privéafvoer even oud.",
    landmarks: ["C-mine in Winterslag", "de Molenvijver", "Genk-Zuid en Genk-Noord", "de cité van Waterschei", "Bokrijk"],
    werken:
      "In de wijk Waterschei werd het project Waterrijk Waterschei afgerond: wadi's en ontharding in de Duivenstraat, Mezenstraat en het Talingpark vangen jaarlijks meer dan 6,6 miljoen liter regenwater op, voor ongeveer 1 miljoen euro met steun van Aquafin en Vlaanderen. Uitbreiding naar Winterslag, de tweede en vierde cité en Boxberg staat gepland. Eerder optimaliseerde Aquafin ongeveer 25 van de circa 70 overstorten in het zuiveringsgebied Genk.",
    probleem:
      "In lager gelegen Genkse straten liepen kelders onder omdat de riolering het volume niet aankon; bij hoogwater stroomde water van de Stiemer de collector ín in plaats van omgekeerd. Aquafin plaatste daarom terugslagkleppen tot in de huisaansluitingen.",
    uniek:
      "Genk is de Limburgse gemeente met een expliciet gedocumenteerd terugslagprobleem — er zijn terugslagkleppen geplaatst tot op huisaansluitingsniveau. Combineer dat met cité-woningen van rond 1925 en u krijgt straten waar verstopping en terugstroom vaak samen optreden.",
    waterhardheid: 17,
    statusTool: { dekking: 93, risicovol: 47, noot: "20 km leiding moet nog geïnspecteerd worden, het hoogste cijfer van Limburg" },
    faq: [
      {
        v: "Mijn kelder in Genk loopt onder bij hevige regen. Is dat een verstopping?",
        a: "Niet noodzakelijk. In Genk is gedocumenteerd dat water bij hoogwater vanuit de Stiemer de collector kan inlopen, waardoor het stelsel terugstuwt richting woningen. Aquafin plaatste daarom terugslagkleppen tot in huisaansluitingen. Loopt uw kelder onder tijdens een bui maar loopt uw afvoer bij droog weer normaal, dan is een terugslagklep meestal de juiste oplossing en niet een ontstopping. Wij controleren met camera wat er speelt voor u iets laat plaatsen.",
      },
      {
        v: "Wat is er bijzonder aan de afvoer in een Genkse cité-woning?",
        a: "De woningen in Winterslag, Waterschei en Zwartberg dateren grotendeels uit 1914-1929. De originele afvoer bestaat vaak uit gres met veel kortere buisstukken en dus veel voegen — precies de plekken waar wortels binnendringen en waar verzakking optreedt. Bij die woningen is een camera-inspectie bijna altijd zinvol: een spiraal maakt tijdelijk vrij, maar lost een gebroken voeg niet op.",
      },
    ],
    volgorde: ["problemen", "netwerk", "diensten", "werkwijze", "prijzen", "wetgeving", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "sint-truiden",
    naam: "Sint-Truiden",
    postcode: "3800",
    inwoners: 41743,
    inwonersJaar: 2025,
    streek: "het hart van Haspengouw, de Limburgse fruitstreek",
    deelgemeenten: ["Aalst", "Brustem", "Duras", "Engelmanshoven", "Gelinden", "Gorsem", "Groot-Gelmen", "Halmaal", "Kerkom", "Ordingen", "Runkelen", "Velm", "Wilderen", "Zepperen", "Kortenbos", "Melveren"],
    buurgemeenten: ["Nieuwerkerken", "Alken", "Wellen", "Borgloon", "Heers", "Gingelom", "Landen", "Zoutleeuw", "Geetbets"],
    waterlopen: ["de Cicindria", "de Melsterbeek", "de Molenbeek", "de Herk"],
    rioolbeheerder: "Fluvius",
    bodem: "Vruchtbaar leem over kalkhoudende ondergrond — en daardoor uitgesproken hard leidingwater.",
    bouwprofiel:
      "De stad groeide vanaf een abdij uit circa 655, met een omwalling uit 1060-1085 en vijf poorten. Het radiale stratenpatroon vanaf de Grote Markt bleef grotendeels intact, ook na de ontmanteling in 1675. Daarbuiten liggen veertien landelijke fruitdorpen en een 19e-eeuwse stationswijk.",
    landmarks: ["de Grote Markt met de beiaard", "de abdijsite", "het Sint-Agnesbegijnhof in Schurhoven", "de basiliek van Kortenbos", "de stationswijk"],
    werken:
      "In Maasrode legde Fluvius een gescheiden rioleringsstelsel aan met een nieuw pompstation, goed voor 1.021.041 euro exclusief btw; het pompstation ging in juni 2026 in gebruik. Verder lopen Aquafin-dossiers voor de collector Diestersteenweg, de verbindingsriolering Beursstraat, de J. en M. Sabbestraat en renovatie in de Tempelstraat en Abdijstraat.",
    probleem:
      "Sint-Truiden heeft het hardste leidingwater van Limburg: ongeveer 45 °fH. Dat is meer dan vijf keer zo hard als in Lommel. Kalkaanslag vernauwt hier afvoerleidingen sneller dan elders, zeker in combinatie met vet. Daarnaast staan de Cicindria bij Bevingen en de Melsterbeek als aandachtsgebied in de stroomgebiedbeheerplannen.",
    uniek:
      "Nergens anders in Limburg werkt kalk zo hard tegen u als in Sint-Truiden. Bij 45 °fH is een afvoer die traag wordt vaak geen klassieke prop maar een vernauwde buis — en dan helpt een spiraal minder dan hogedruk. Bovendien is 97% van het Truiense rioolnet nog nooit structureel beoordeeld.",
    waterhardheid: 45,
    statusTool: { dekking: 93, risicovol: 35, noot: "97% van het net is structureel nog onbepaald" },
    faq: [
      {
        v: "Speelt het harde water in Sint-Truiden mee bij verstoppingen?",
        a: "Ja, en meer dan de meeste mensen denken. Sint-Truiden zit rond 45 °fH — heel hard water. Kalk slaat neer op de binnenwand van afvoerbuizen en vormt samen met vet en zeepresten een laag die de buis stelselmatig vernauwt. Het gevolg is een afvoer die maanden traag wordt in plaats van plots dicht te slibben. In dat geval werkt hogedrukreiniging beter dan een spiraal: die haalt de aanslag weg in plaats van er een gat in te boren.",
      },
      {
        v: "Ik woon in een fruitdorp buiten het centrum. Heb ik een septische put?",
        a: "In de landelijke deelgemeenten rond Sint-Truiden is dat vaak nog het geval. Het zoneringsplan van de stad bepaalt per adres of u moet aansluiten op riolering dan wel zelf moet zuiveren. Ligt uw adres in collectief te optimaliseren buitengebied, dan gaat al uw afvalwater tot de aansluiting via de septische put. Die laat u het best om de drie à vijf jaar ledigen.",
      },
    ],
    volgorde: ["problemen", "diensten", "prijzen", "netwerk", "wetgeving", "werkwijze", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "tongeren",
    naam: "Tongeren",
    fusie: "Sinds 1 januari 2025 vormt Tongeren samen met Borgloon de gemeente Tongeren-Borgloon.",
    postcode: "3700",
    inwoners: 32138,
    inwonersJaar: 2024,
    streek: "Haspengouw, op de waterscheiding tussen het Maas- en het Scheldebekken",
    deelgemeenten: ["Berg", "Diets-Heur", "Henis", "'s Herenelderen", "Koninksem", "Lauw", "Mal", "Neerrepen", "Nerem", "Overrepen", "Piringen", "Riksingen", "Rutten", "Sluizen", "Vreren", "Widooie", "Herstappe"],
    buurgemeenten: ["Hoeselt", "Riemst", "Heers", "Borgloon", "Kortessem", "Bilzen"],
    waterlopen: ["de Jeker", "de bron van de Demer in Ketsingen"],
    rioolbeheerder: "Fluvius",
    bodem: "Haspengouws leem op een heuvel van ongeveer 105 meter, precies op de waterscheiding tussen twee stroomgebieden.",
    bouwprofiel:
      "Onder Tongeren liggen twee volledig verschillende stratenpatronen. Het Romeinse Atuatuca Tungrorum had een dambordplan binnen een wal van minstens 80 hectare, met een stenen omheining van 4.544 meter uit de 2e eeuw, in de 4e eeuw ingekort tot 2.680 meter. De middeleeuwse omwalling van 54 hectare negeerde dat patroon grotendeels. De ondergrond van de binnenstad is dus letterlijk gelaagd.",
    landmarks: ["de Onze-Lieve-Vrouwebasiliek", "de Moerenpoort", "het Gallo-Romeins Museum", "het begijnhof", "de Grote Markt"],
    werken:
      "In Rullecoven wordt gescheiden riolering aangelegd en Aquafin voert het project Afkoppeling Sluizen uit. Eerder werd de Jeker opnieuw opengelegd in het vernieuwde stadspark; sinds 2019 stroomt daar weer water.",
    probleem:
      "Tongeren-Borgloon heeft het hoogste aandeel als heel slecht beoordeelde rioolleidingen van de provincie: 5% van het geïnspecteerde net. Daarbovenop komt zeer hard water van ongeveer 42 °fH.",
    uniek:
      "Nergens anders in Limburg ligt een rioolnet bovenop twee historische stadsplattegronden tegelijk, en werd een centrale waterloop eerst overwelfd en daarna weer opengelegd. In de Tongerse binnenstad is de leiding onder uw huis zelden zo recht en zo modern als u denkt.",
    waterhardheid: 42,
    statusTool: { dekking: 93, risicovol: 39, noot: "5% van het geïnspecteerde net is als heel slecht beoordeeld" },
    faq: [
      {
        v: "Waarom zijn verstoppingen in de Tongerse binnenstad vaak lastiger?",
        a: "Omdat het leidingnet daar over eeuwen gegroeid is bovenop een Romeins en een middeleeuws stratenpatroon. Aansluitingen maken onverwachte bochten, oude gresbuizen en recentere pvc zitten door elkaar en er liggen gewelven en kelders in de weg. Een blinde spiraalpoging loopt hier vaker vast. Wij starten daarom in de kern bijna altijd met een camera zodat we weten waar de leiding echt loopt.",
      },
      {
        v: "Tongeren en Borgloon zijn gefuseerd. Verandert dat iets voor mijn riolering?",
        a: "Voor het openbare net niet: Fluvius blijft rioolbeheerder voor Tongeren-Borgloon. Wel loopt de administratie — aanvraag van een rioolaansluiting, meldingen op openbaar domein — nu via het gemeentebestuur Tongeren-Borgloon. Uw eigen verantwoordelijkheid blijft ongewijzigd: alles tot en met het huisaansluitputje is voor u.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "beringen",
    naam: "Beringen",
    postcode: "3580",
    inwoners: 48755,
    inwonersJaar: 2025,
    streek: "West-Limburg, Kempen en Mijnstreek",
    deelgemeenten: ["Paal", "Koersel", "Beverlo"],
    buurgemeenten: ["Leopoldsburg", "Hechtel-Eksel", "Houthalen-Helchteren", "Heusden-Zolder", "Lummen", "Diest", "Tessenderlo", "Ham"],
    waterlopen: ["de Zwarte Beek", "de Oude Beek", "het Albertkanaal"],
    rioolbeheerder: "Fluvius",
    bodem:
      "Zand- en lemige zandgrond met ijzerzandsteen op de heuvelrug van de Koerselse steenweg. Het hemelwater- en droogteplan noemt de bodem zandig met een diepe grondwatertafel: gunstig voor infiltratie.",
    bouwprofiel:
      "Naast de historische stadskern met driehoekig plein liggen de mijncités vanaf 1908: de arbeiderscité op Beverlo's grondgebied, de bedienden- en ingenieurswijk op Koersel, het Baltisch Kamp en de wijk Steenveld met ongeveer 70 woningen uit 1949-1951. Er werd gebouwd tot ongeveer 1963. De vroegste woningen van voor de Eerste Wereldoorlog zijn in betonblokken opgetrokken, de latere in baksteen uit de eigen steenbakkerij van de mijn.",
    landmarks: ["be-MINE, de best bewaarde mijnsite van Europa", "de mijnkathedraal met haar toren van 71,5 meter", "de Fathi-moskee", "de kolenhaven van Paal"],
    werken:
      "Beringen heeft een lange lijst lopende rioleringsdossiers, waaronder de sanering van de Zwarte Beek in de Beekstraat, Vaartstraat en Terhulzen, plus werken in de Katermeerstraat, Molendijk, Zandbergstraat en Langeneikenstraat. Het hemelwater- en droogteplan verdeelt de stad in zes deelzones op basis van natuurlijke afstroomgebieden en mikt op volledige scheiding van hemel- en afvalwater.",
    probleem:
      "Beringen heeft de grootste mijncité-woningvoorraad van Limburg: betonblokwoningen van voor 1918 naast baksteencités tot 1963, met privéafvoer van dezelfde leeftijd. Tegelijk is de zandbodem gunstig voor infiltratie, waardoor de stad resoluut op scheiding inzet.",
    uniek:
      "In Beringen bepaalt het bouwjaar van uw cité-woning wat er in de grond ligt. Een woning uit de betonblokperiode heeft een ander afvoerprofiel dan een baksteenwoning uit de jaren vijftig — en dat verschil bepaalt of frezen of hogedruk de juiste techniek is.",
    waterhardheid: 13,
    statusTool: { dekking: 95, risicovol: 44 },
    faq: [
      {
        v: "Wat kan ik verwachten in een mijncité-woning in Beringen?",
        a: "De cités werden gebouwd tussen 1908 en ongeveer 1963. Bij de oudste woningen liggen vaak nog gresleidingen met korte buisstukken en veel voegen; bij de naoorlogse wijken zoals Steenveld is dat al deels anders. In beide gevallen zit de originele huisaansluiting er meestal nog. Wortelingroei via de voegen en verzakte stukken zijn hier de twee klassiekers — niet vet.",
      },
      {
        v: "Beringen zet in op volledige scheiding. Wat betekent dat voor mij?",
        a: "Het hemelwater- en droogteplan verdeelt Beringen in zes deelzones en wil af van gemengde leidingen. Concreet: wanneer in uw straat een gescheiden stelsel komt, moet u uw eigen leidingen afkoppelen en volgt er een keuring. Dankzij de zandbodem met een diepe grondwatertafel is infiltratie op eigen terrein hier vaak wél realistisch, wat in leemgemeenten in Zuid-Limburg veel moeilijker ligt.",
      },
    ],
    volgorde: ["netwerk", "diensten", "problemen", "prijzen", "wetgeving", "werkwijze", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "lommel",
    naam: "Lommel",
    postcode: "3920",
    inwoners: 35208,
    inwonersJaar: 2025,
    streek: "Noord-Limburg, op de waterscheiding tussen Schelde- en Maasbekken",
    deelgemeenten: ["Lutlommel", "Lommel-Werkplaats", "Lommel-Kolonie", "Barrier", "Kattenbos", "Stevensvennen", "Kerkhoven", "Heeserbergen", "Heuvel"],
    buurgemeenten: ["Pelt", "Hechtel-Eksel", "Balen", "Mol"],
    waterlopen: ["de Dommel", "de Eindergatloop", "het Kempisch Kanaal"],
    rioolbeheerder: "de stad Lommel zelf",
    rioolbeheerderNoot:
      "Lommel heeft het rioolbeheer niet aan Fluvius overgedragen. Aansluitingen, keuringen en het retributiereglement lopen rechtstreeks via de stad.",
    bodem: "Uitgesproken zandbodem met de zachtste waterkwaliteit van Limburg: ongeveer 8 °fH.",
    bouwprofiel:
      "Lommel heeft geen deelgemeenten maar is opgedeeld in acht wijken en 55 buurten, met verspreide gehuchten over een uitgestrekt grondgebied. De stad groeide sinds 1990 met bijna een derde.",
    landmarks: ["de Lommelse Sahara", "het sas aan de Blauwe Kei", "de Duitse militaire begraafplaats", "natuurgebied De Grote Watering", "industriezone Lommel Barrier"],
    werken:
      "Aquafin renoveert de collector Lutlommel-Leuken. Voor de Eindergatloop aan industrieterrein Lommel Barrier en het NOLIM-Park loopt een apart actieplan.",
    probleem:
      "Met ongeveer 8 °fH heeft Lommel veruit het zachtste water van de provincie. Kalkaanslag speelt hier nauwelijks. De verstoppingen die wij in Lommel zien komen dan ook zelden van kalk en bijna altijd van vet, wortels of verzakking in zandgrond.",
    uniek:
      "Lommel is de enige Limburgse stad met zacht water én eigen rioolbeheer. Twee praktische gevolgen: kalkontkalking is hier zelden de oplossing, en voor het openbare deel belt u de stad en niet Fluvius.",
    waterhardheid: 8,
    statusTool: { dekking: 97, risicovol: 29, noot: "hoogste inspectiedekking van Limburg" },
    faq: [
      {
        v: "Bij wie meld ik in Lommel een probleem met de openbare riolering?",
        a: "Bij de stad Lommel zelf. Lommel heeft het rioolbeheer niet aan Fluvius overgedragen: aansluitingen, keuringen en de retributies verlopen rechtstreeks via de stadsdiensten. Dat scheelt tijd — u hoeft niet eerst bij Fluvius aan te kloppen om daarna doorverwezen te worden. Alles tot en met uw huisaansluitputje blijft wel uw eigen verantwoordelijkheid.",
      },
      {
        v: "Waarom slibt mijn afvoer in Lommel dicht als het water hier zo zacht is?",
        a: "Precies omdat kalk hier de oorzaak niet is. Bij 8 °fH zien wij in Lommel vooral drie andere zaken: vet dat in de keukenafvoer stolt, boomwortels die via voegen binnendringen, en zand dat via een defecte buis of put binnenspoelt en zich onderin verzamelt. Dat laatste is typisch voor de zandbodem hier en herkent u aan een afvoer die traag blijft ook na een grondige ontstopping.",
      },
    ],
    volgorde: ["problemen", "netwerk", "diensten", "werkwijze", "prijzen", "wetgeving", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "heusden-zolder",
    naam: "Heusden-Zolder",
    postcode: "3550",
    inwoners: 34985,
    inwonersJaar: 2025,
    streek: "West-Limburg, Kempen en Mijnstreek",
    deelgemeenten: ["Heusden", "Zolder", "Viversel", "Boekt", "Lindeman", "Bolderberg", "Berkenbos", "Eversel", "Schoot", "Ubbersel"],
    buurgemeenten: ["Beringen", "Houthalen-Helchteren", "Zonhoven", "Hasselt", "Lummen"],
    waterlopen: ["de Mangelbeek", "de Laambeek", "de Slangebeek", "de Echelbeek", "de Molenbeek", "het Albertkanaal"],
    rioolbeheerder: "de gemeente Heusden-Zolder zelf",
    rioolbeheerderNoot:
      "De openbare riolering in de straat wordt beheerd door Team Werkplaats van de gemeente. Een probleem op openbaar domein meldt u dus rechtstreeks bij de gemeente.",
    bodem: "Kempense zandgrond met een uitgesproken vijvergebied tussen de Laambeek en de Slangebeek.",
    bouwprofiel:
      "De mijn van Zolder was actief van 1923 tot 1992 en was de laatste kolenmijn van de Benelux. De mijngebouwen dateren van 1924-1925, de kantoren van 1937 en de koeltorens van 1952-1953. De mijnwijk op 't Einde en de naoorlogse instroom van Spaanse, Italiaanse en Turkse gezinnen bepalen nog altijd het woningbestand rond de site.",
    landmarks: ["Circuit Zolder", "kasteel Vogelsanck", "kasteel Meylandt", "Domein Bovy", "de Bolderberg met de Kluis"],
    werken:
      "In de Bloemenwijk lopen riolerings- en wegwerken. De gemeente heeft een eigen hemelwaterplan, een eigen atlas der waterlopen en een gemeentelijke subsidie voor afkoppeling.",
    probleem:
      "De woningvoorraad rond de mijn van Zolder is even oud als de mijn zelf: gebouwd tussen 1923 en 1953, met privéafvoer uit diezelfde periode. Daarnaast ligt de gemeente in een vijverrijk gebied met hoge waterstanden in de valleien.",
    uniek:
      "In Heusden-Zolder belt u voor het openbare riool de gemeentelijke Team Werkplaats en niet Fluvius. En de scheidingslijn is scherp: alles van uw woning tot aan de hoofdriolering in de straat is uw eigen zaak, tot aan de rooilijn.",
    waterhardheid: 14,
    statusTool: { dekking: 95, risicovol: 42 },
    faq: [
      {
        v: "Wie is in Heusden-Zolder verantwoordelijk voor welk stuk riolering?",
        a: "De gemeente stelt het zelf helder: u bent verantwoordelijk voor het stuk van uw woning tot aan de hoofdriolering in de straat, dus tot aan de rooilijn. Daarvoorbij beheert Team Werkplaats van de gemeente het net. Zit de verstopping in uw eigen leiding of in het huisaansluitputje, dan is dat voor u. Zit ze in de straatriolering, dan meldt u dat bij de gemeente.",
      },
      {
        v: "Hoe weet ik of de verstopping bij mij zit of in het openbare riool?",
        a: "Een eenvoudige test: loopt bij uw buren het water ook slecht weg, dan wijst dat op het openbare stelsel. Is het enkel bij u, dan zit het probleem in uw eigen leiding. Twijfelt u, dan opent u het huisaansluitputje aan de rooilijn. Staat dat vol, dan zit de verstopping stroomafwaarts; is het leeg terwijl uw afvoer niet doorloopt, dan zit ze bij u. Wij doen die controle standaard voor we beginnen.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "maasmechelen",
    naam: "Maasmechelen",
    postcode: "3630",
    inwoners: 40486,
    inwonersJaar: 2025,
    streek: "het Maasland, tussen Kempens Plateau en Grensmaas",
    deelgemeenten: ["Mechelen-aan-de-Maas", "Vucht", "Leut", "Meeswijk", "Uikhoven", "Eisden", "Opgrimbie", "Boorsem"],
    buurgemeenten: ["Dilsen-Stokkem", "Lanaken", "Zutendaal", "As"],
    waterlopen: ["de Grensmaas", "de Zuid-Willemsvaart", "het Julianakanaal", "de Kikbeek"],
    rioolbeheerder: "Fluvius",
    bodem:
      "De gemeente ligt op twee niveaus tegelijk: de westrand op het Kempens Plateau, het grootste deel in de Maasvallei, met een steilrand van ongeveer 45 meter hoogteverschil ertussen.",
    bouwprofiel:
      "Vanaf 1910 werd hier steenkool gewonnen, met cités in Engelse tuinwijkstijl als gevolg. De mijnwijk groeide tot 10.000 inwoners in 1963, met arbeiders uit meer dan twintig landen. De Sint-Barbarakerk in Eisden dateert van 1934-1936.",
    landmarks: ["Maasmechelen Village", "winkelcentrum Pauwengraaf", "de mijnsite van Eisden", "Nationaal Park Hoge Kempen en de Mechelse Heide", "de N78 langs de Grensmaas"],
    probleem:
      "Maasmechelen heeft de laagste inspectiedekking van de provincie — 91% — en met 48% een van de hoogste aandelen risicovolle leidingen. Het net moet bovendien een hoogteverschil van 45 meter overbruggen.",
    uniek:
      "Maasmechelen is de enige Limburgse gemeente waar het rioolnet twee landschappen tegelijk bedient: plateau en Maasvallei, met 45 meter ertussen. Boven speelt afstroomsnelheid, beneden speelt hoge grondwaterstand — twee compleet verschillende oorzaken van hetzelfde symptoom.",
    waterhardheid: 17,
    statusTool: { dekking: 91, risicovol: 48, noot: "laagste inspectiedekking van Limburg" },
    faq: [
      {
        v: "Waarom verschilt een verstopping in Opgrimbie van een verstopping in Boorsem?",
        a: "Door het hoogteverschil van ongeveer 45 meter tussen het Kempens Plateau en de Maasvallei. In de hoger gelegen delen zoals Opgrimbie stroomt water snel weg, wat betekent dat vaste delen achterblijven en zich ophopen. In de laaggelegen Maasvalleikernen zoals Boorsem en Meeswijk staat het grondwater hoog, wat infiltratie in defecte buizen en terugstuwing bij hoogwater in de hand werkt. Dezelfde klacht, andere oorzaak.",
      },
      {
        v: "Wat betekent de lage inspectiedekking van Maasmechelen voor mij?",
        a: "Op 31 maart 2026 stond de dekkingsgraad van de rioolinspectie in Maasmechelen op 91%, het laagste cijfer van Limburg, met 48% van de leidingen als risicovol geklasseerd en nog 8 kilometer na te inspecteren. Praktisch: de kans dat de staat van de leiding in uw straat nog niet in kaart is gebracht, is hier groter dan elders. Bij een terugkerende verstopping is een camera-inspectie van uw eigen deel daarom extra nuttig.",
      },
    ],
    volgorde: ["problemen", "diensten", "netwerk", "prijzen", "werkwijze", "wetgeving", "gebied"],
    prioriteit: 1,
  },
  {
    slug: "houthalen-helchteren",
    naam: "Houthalen-Helchteren",
    postcode: "3530",
    inwoners: 30945,
    inwonersJaar: 2025,
    streek: "het Kempisch laagplateau, Mijnstreek",
    deelgemeenten: ["Houthalen", "Helchteren", "Meulenberg", "Park-West", "Laak", "Lillo", "Tenhout", "Kwalaak", "Tenhaagdoorn"],
    buurgemeenten: ["Hechtel-Eksel", "Peer", "Oudsbergen", "Genk", "Zonhoven", "Heusden-Zolder", "Beringen"],
    waterlopen: ["de Mangelbeek", "de Roosterbeek", "de Laambeek", "de Winterbeek"],
    rioolbeheerder: "Fluvius",
    bodem: "Kempense zandgrond; de industrieterreinen liggen op genivelleerde mijnterrils.",
    bouwprofiel:
      "Tot het einde van de Eerste Wereldoorlog bestond het grondgebied bijna uitsluitend uit heide en bos. De steenkoolmijn opende in 1938, waarna de mijncité Meulenberg ontstond en de bevolking explodeerde. De steenkoolwinning liep tot 1965; daarna kwamen de industrieterreinen Europark en Centrum-Zuid op genivelleerde terrils.",
    landmarks: ["kasteel Ter Dolen", "de recreatiedomeinen Kelchterhoef, Hengelhoef en Molenheide", "Museum Ons Mijnverleden", "de industrieterreinen Europark en Centrum-Zuid"],
    probleem:
      "Houthalen-Helchteren heeft met 53% het hoogste aandeel als risicovol geklasseerde rioolleidingen van Limburg — opvallend voor een gemeente waarvan het bebouwde weefsel grotendeels van na 1938 dateert.",
    uniek:
      "Het bebouwde weefsel hier is jong: voor 1918 was dit vrijwel alleen heide en bos. Toch staat 53% van de rioolleidingen als risicovol geklasseerd, het hoogste cijfer van de provincie. Jong betekent in Houthalen-Helchteren dus niet probleemloos.",
    waterhardheid: 15,
    statusTool: { dekking: 94, risicovol: 53, noot: "hoogste aandeel risicovolle leidingen van Limburg" },
    faq: [
      {
        v: "Mijn woning in Meulenberg is niet oud. Waarom heb ik toch rioolproblemen?",
        a: "De cité Meulenberg ontstond vanaf 1938, dus de woningen zijn intussen ruim tachtig jaar oud — jong voor Limburgse begrippen, maar oud genoeg voor gresleidingen met voegen. Bovendien staat 53% van de rioolleidingen in Houthalen-Helchteren als risicovol geklasseerd, het hoogste aandeel van de provincie. Ouderdom van het huis en staat van de leiding lopen hier niet gelijk.",
      },
      {
        v: "Wat is bijzonder aan afvoer op de industrieterreinen hier?",
        a: "Europark en Centrum-Zuid liggen op genivelleerde mijnterrils. Die ondergrond zet zich over decennia nog na, wat verzakking van leidingen in de hand werkt. Bij bedrijfspanden op die terreinen zien wij vaker knikken en zakkingen in het tracé dan klassieke proppen. Een camera-inspectie met zender om de exacte diepte en plaats te bepalen is daar meestal de eerste stap.",
      },
    ],
    volgorde: ["netwerk", "problemen", "diensten", "prijzen", "wetgeving", "werkwijze", "gebied"],
    prioriteit: 1,
  },
];
