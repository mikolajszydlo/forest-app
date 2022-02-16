const data = {
  cities: [
    'Alingsås',
    'Arboga',
    'Arvika',
    'Askersund',
    'Avesta',
    'Boden',
    'Bollnäs',
    'Borgholm',
    'Borlänge',
    'Borås',
    'Djursholm',
    'Eksjö',
    'Enköping',
    'Eskilstuna',
    'Eslöv',
    'Fagersta',
    'Falkenberg',
    'Falköping',
    'Falun',
    'Filipstad',
    'Flen',
    'Gothenburg',
    'Gränna',
    'Gävle',
    'Hagfors',
    'Halmstad',
    'Haparanda',
    'Hedemora',
    'Helsingborg',
    'Hjo',
    'Hudiksvall',
    'Huskvarna',
    'Härnösand',
    'Hässleholm',
    'Höganäs',
    'Jönköping',
    'Kalmar',
    'Karlshamn',
    'Karlskoga',
    'Karlskrona',
    'Karlstad',
    'Katrineholm',
    'Kiruna',
    'Kramfors',
    'Kristianstad',
    'Kristinehamn',
    'Kumla',
    'Kungsbacka',
    'Kungälv',
    'Köping',
    'Laholm',
    'Landskrona',
    'Lidingö',
    'Lidköping',
    'Lindesberg',
    'Linköping',
    'Ljungby',
    'Ludvika',
    'Luleå',
    'Lund',
    'Lycksele',
    'Lysekil',
    'Malmö',
    'Mariefred',
    'Mariestad',
    'Marstrand',
    'Mjölby',
    'Motala',
    'Nacka',
    'Nora',
    'Norrköping',
    'Norrtälje',
    'Nybro',
    'Nyköping',
    'Nynäshamn',
    'Nässjö',
    'Oskarshamn',
    'Oxelösund',
    'Piteå',
    'Ronneby',
    'Sala',
    'Sandviken',
    'Sigtuna',
    'Simrishamn',
    'Skara',
    'Skellefteå',
    'Skänninge',
    'Skövde',
    'Sollefteå',
    'Solna',
    'Stockholm',
    'Strängnäs',
    'Strömstad',
    'Sundbyberg',
    'Sundsvall',
    'Säffle',
    'Säter',
    'Sävsjö',
    'Söderhamn',
    'Söderköping',
    'Södertälje',
    'Sölvesborg',
    'Tidaholm',
    'Torshälla',
    'Tranås',
    'Trelleborg',
    'Trollhättan',
    'Trosa',
    'Uddevalla',
    'Ulricehamn',
    'Umeå',
    'Uppsala',
    'Vadstena',
    'Varberg',
    'Vaxholm',
    'Vetlanda',
    'Vimmerby',
    'Visby',
    'Vänersborg',
    'Värnamo',
    'Västervik',
    'Västerås',
    'Växjö',
    'Ystad',
    'Åmål',
    'Ängelholm',
    'Örebro',
    'Öregrund',
    'Örnsköldsvik',
    'Östersund',
    'Östhammar',
  ],

  streets: [
    'AbSvenskFilmindustri',
    'AbTravOchGalopp',
    'Adlerbethsgatan',
    'AdolfFredriksKyrkogata',
    'AfPontinsVäg',
    'Ahlsellvägen',
    'Akademigränd',
    'Aktergatan',
    'Akutvägen',
    'Älgpassgatan',
    'Ålkistevägen',
    'Allhelgonagatan',
    'AllmännaGränd',
    'Almlöfsgatan',
    'Alsnögatan',
    'Alstaviksvägen',
    'Alströmergatan',
    'Aluddsparken',
    'Aluddsvägen',
    'Älvkarleövägen',
    'Älvsborgsgatan',
    'Amanuensvägen',
    'Amarantergränd',
    'Åminnevägen',
    'Amiralitetsbacken',
    'AndersReimersVäg',
    'AndraBassängvägen',
    'AndraTvärvägen',
    'Andréegatan',
    'Ängsbruksgatan',
    'Ängsholmen',
    'Ängskärsgatan',
    'Ångströmsgatan',
    'Ankargränd',
    'AnnaStecksénsGata',
    'Ansgariegatan',
    'Apelbergsgatan',
    'Arbetargatan',
    'Årgångsgatan',
    'Arkivgatan',
    'Armfeltsgatan',
    'Arsenalsgatan',
    'ÅrstaHamnväg',
    'ÅrstaHolmar',
    'ÅrstaSkolgränd',
    'Årstaängsvägen',
    'Årstaängsvägen',
    'ÅrstaskogsVäg',
    'Artemisgatan',
    'Artillerigatan',
    'Artillerigatan',
    'Artillerigatan',
    'Askrikegatan',
    'Åsögatan',
    'Åsögatan',
    'Åsögatan',
    'Åsötorget',
    'Assessorsgatan',
    'Atlasgatan',
    'Atlasmuren',
    'Atterbomsvägen',
    'Atterbomsvägen',
    'Babordsgatan',
    'Badstrandsvägen',
    'Baggensgatan',
    'Bågljusvägen',
    'Baldersgatan',
    'Bältgatan',
    'BaltzarVonPlatensGata',
    'Banbrinken',
    'BanctecAktiebolag',
    'Banérgatan',
    'Banérgatan',
    'Banérgatan',
    'Banérgatan',
    'Banérgatan',
    'Bangårdsgången',
    'BarnängsTvärgränd',
    'Barnängsgatan',
    'Barnängsgatan',
    'Barnängsgränd',
    'Barnhusgatan',
    'BaronRålambsVäg',
    'Bastugatan',
    'Bastugatan',
    'Båtbyggargatan',
    'Båtbyggargatan',
    'Båtbyggargatan',
    'Båtklubbsgatan',
    'Batteriparken',
    'Beckbrännarbacken',
    'Beckholmen',
    'Beckholmsvägen',
    'Bedoirsgränd',
    'Bellevuevägen',
    'Bellmansgatan',
    'Bellmansgatan',
    'BengtEkehjelmsgatan',
    'Bergsgatan',
    'Bergsgatan',
    'Bergsgatan',
    'Bergsgränd',
    'Bergsjölundsvägen',
    'Bergsmarksvägen',
    'Bergsprängargränd',
    'BergsundsStrand',
    'Bergsundsgatan',
    'Beridarbansgatan',
    'Beridarebanan',
    'BertilOhlinsGata',
    'BerzeliiPark',
    'Biblioteksgatan',
    'Biblioteksgatan',
    'Bigarråvägen',
    'BirgerJarlsTorg',
    'BirgerJarlsgatan',
    'BirgerJarlsgatan',
    'BirgerJarlsgatan',
    'BirgerJarlsgatan',
    'BirgerJarlsgatan',
    'BirgerSjöbergsVäg',
    'Birkagatan',
    'Birkagatan',
    'Biskopsvägen',
    'Björngårdsgatan',
    'Björnnäsbacken',
    'Björnnäsvägen',
    'Björnnäsvägen',
    'BjörnsTrädgårdsgränd',
    'Bjurholmsgatan',
    'Bjurholmsgatan',
    'Bjurholmsplan',
    'BlåBodarna',
    'Blanchegatan',
    'Blasieholmsgatan',
    'Blasieholmstorg',
    'Blecktornsbrinken',
    'Blecktornsgränd',
    'Blecktornsstigen',
    'Blekegatan',
    'Blekholmsgatan',
    'Blekholmsterrassen',
    'Blekholmstorget',
    'Blekingegatan',
    'Blekingegatan',
    'Blockhusringen',
    'Blommensbergsvägen',
    'BoBergmansGata',
    'Bobergsgatan',
    'Bobergsgatan',
    'Bobergsgatan',
    'Bohusgatan',
    'BolindersPlan',
    'Bollhusgränd',
    'Bondegatan',
    'Bondegatan',
    'Bondegatan',
    'Bondesonsgatan',
    'Borgargatan',
    'Borgmästargatan',
    'Borgvägen',
    'Böttigervägen',
    'Bragevägen',
    'Bragevägen',
    'Brahegatan',
    'Brännerigatan',
    'Brännkyrkagatan',
    'Brännkyrkagatan',
    'Brännkyrkagatan',
    'Brännkyrkagatan',
    'Brännkyrkagatan',
    'Brantingsgatan',
    'Bråvallagatan',
    'BredaGatan',
    'Bredgränd',
    'Breitenfeldsgatan',
    'Brinellvägen',
    'BrommaBusinessParkAB',
    'Brunbärsvägen',
    'Brunkebergsgatan',
    'Brunkebergstorg',
    'Brunnsgatan',
    'Brunnsgränd',
    'Brunnsviksvägen',
    'Bryggargatan',
    'Bryggvägen',
    'Buteljgatan',
    'Buteljgatan',
    'Bysistorget',
    'CancercentrumKarolinska',
    'Cardellgatan',
    'CarlAkrellsGata',
    'CarlAlbertsGränd',
    'Carl-GustafLindstedtsGata',
    'Cedersdalsgatan',
    'Cedersdalsgatan',
    'Celsiusgatan',
    'Centralplan',
    'Chapmansgården',
    'Chapmansgatan',
    'ClearonAB',
    'Coldinutrappan',
    'CrafoordsVäg',
    'Creutzgatan',
    'DagHammarskjöldsVäg',
    'DagengruppenAB',
    'Dalagatan',
    'Dalagatan',
    'Dalagatan',
    'Dalagatan',
    'Dalagatan',
    'Dalagatan',
    'Dalslandsgatan',
    'Danderydsgatan',
    'Dannemoragatan',
    'DavidBagaresGata',
    'DeGeersgatan',
    'Dianavägen',
    'DidrikFicksGränd',
    'Disponentgatan',
    'Djurgårdsbrunnsvägen',
    'Djurgårdsbrunnsvägen',
    'Djurgårdsslätten',
    'Djurgårdsvägen',
    'Djurgårdsvägen',
    'Döbelnsgatan',
    'Döbelnsgatan',
    'Döbelnsgatan',
    'Docentbacken',
    'DoktorAbelinsGata',
    'Dörjgränd',
    'Drakenbergsgatan',
    'DrakensGränd',
    'Drejargatan',
    'Drevergatan',
    'DrottningKristinasVäg',
    'DrottningSofiasVäg',
    'Drottninggatan',
    'Drottninggatan',
    'Drottninggatan',
    'Drottninggatan',
    'Drottninggatan',
    'Drottningholmsvägen',
    'Drottningholmsvägen',
    'Drottningholmsvägen',
    'Drottninghusgränd',
    'Duvnäsgatan',
    'Eastmansvägen',
    'Ehrensvärdsgatan',
    'Ekedalsgatan',
    'Ekehjelmstorget',
    'Ekensbergsbryggan',
    'Ekensbergsvägen',
    'EkermansGränd',
    'Ekfatsgatan',
    'Ekhagsvägen',
    'Eknäsvägen',
    'Eldarvägen',
    'Elersvägen',
    'Elersvägen',
    'EngelbrektsKyrkogata',
    'Engelbrektsgatan',
    'Engelbrektsplan',
    'Ensittarvägen',
    'Eolsgatan',
    'Eremitvägen',
    'ErikDahlbergsallén',
    'ErikDahlbergsgatan',
    'ErikDahlbergsgatan',
    'ErikDahlbergsgatan',
    'Eriksbergsgatan',
    'Eriksdalsgatan',
    'ErnstAhlgrensVäg',
    'Erstagatan',
    'Erstagatan',
    'EssingeBrogata',
    'EssingeHögväg',
    'EssingeKyrkväg',
    'Essingekroken',
    'Essingeringen',
    'Essingestråket',
    'Essingetorget',
    'Exercisplan',
    'EyvindJohnsonsGata',
    'Fågelbärsgården',
    'Fågelhundsgatan',
    'FågelsångensGårdsväg',
    'Fågelsångsvägen',
    'Fagningsgatan',
    'Falkenbergsgatan',
    'Falugatan',
    'Färgargårdstorget',
    'Fartygsgatan',
    'FatbursBrunnsgata',
    'FatbursKvarngata',
    'Fatbursgatan',
    'Fatbursgatan',
    'Fatburstrappan',
    'Fendergatan',
    'FerkensGränd',
    'FinsensVäg',
    'FinskaKyrkogränd',
    'Fiskargatan',
    'Fisksjöängsvägen',
    'Fjäderholmen',
    'Fjällgatan',
    'FjärdeBassängvägen',
    'Flaggmansvägen',
    'Fleminggatan',
    'Fleminggatan',
    'Fleminggatan',
    'Fleminggatan',
    'Flintbacken',
    'Floragatan',
    'Flottbrovägen',
    'Folkskolegatan',
    'Folkungagatan',
    'Folkungagatan',
    'Folkungagatan',
    'Folkungatrappan',
    'Förmansvägen',
    'Förmansvägen',
    'Försändelsekontor/Reimersholmsgatan',
    'Forskarbacken',
    'Förskeppsgatan',
    'FörstaBassängvägen',
    'FranskaBukten',
    'Franzéngatan',
    'Franzéngatan',
    'Franzéngatan',
    'Franzéngatan',
    'Fredhällsgatan',
    'Fredmansgatan',
    'FredrikBlomsVäg',
    'Fredriksdalsgatan',
    'Fredrikshovsgatan',
    'Fredsborgsgatan',
    'Fredsborgsgatan',
    'Fredsborgsgatan',
    'Fredsborgstorget',
    'Fredsgatan',
    'Fregattvägen',
    'Frejgatan',
    'Frejgatan',
    'Frejgatan',
    'FrescatiHagväg',
    'Frescativägen',
    'Fridhemsgatan',
    'Fridhemsgatan',
    'Fridhemsplan',
    'Friggagatan',
    'Frihamnsgatan',
    'Friskvårdsvägen',
    'Frödingsvägen',
    'Fryxellsgatan',
    'FunckensGränd',
    'Furusundsgatan',
    'Fyrverkarbacken',
    'Gaffelgränd',
    'Galärvarvsvägen',
    'Gambrinusgatan',
    'GamlaBrogatan',
    'GamlaLundagatan',
    'Gammelgårdsgränd',
    'Gammelgårdsvägen',
    'Gärdesgatan',
    'GarvarLundinsGränd',
    'Garvargatan',
    'Gåsgränd',
    'Gästrikegatan',
    'Gasverksvägen',
    'Gaveliusgatan',
    'Gävlegatan',
    'Gävlegatan',
    'Geijersvägen',
    'Gillögagatan',
    'Gjörwellsgatan',
    'Gjutargatan',
    'Glasbruksgatan',
    'Glödlampsgränd',
    'Golvläggargränd',
    'GöranHälsingesGränd',
    'Götgatan',
    'Götgatan',
    'Götgatan',
    'Götgatan',
    'Götgatan',
    'Götgatan',
    'Götgatan',
    'Gotlandsgatan',
    'Gotlandsgatan',
    'Gräsgatan',
    'Grenljusbacken',
    'GrevMagnigatan',
    'GrevTuregatan',
    'GrevTuregatan',
    'GreveVonEssensVäg',
    'Grevgatan',
    'Grevgatan',
    'Grevgatan',
    'Grevgränd',
    'Grindsgatan',
    'Grönbrinksgatan',
    'Gröndalshamnen',
    'Gröndalsvägen',
    'Gröndalsvägen',
    'Gröndalsvägen',
    'GrubbensGata',
    'Grubbensringen',
    'Grubbenstorget',
    'Gruvbacken',
    'Grytgjutargången',
    'Grythundsgatan',
    'Gudöbroleden',
    'Guldgränd',
    'Gumshornsgatan',
    'GustafV:SForskningsinstitut',
    'Gustafsborgsvägen',
    'GustavAdolfsTorg',
    'Gyldéngatan',
    'Gyllenborgsgatan',
    'Gyllenstiernsgatan',
    'Hagaesplanaden',
    'Hagaesplanaden',
    'Hagagatan',
    'Hagagatan',
    'Hagagränd',
    'Hallandsgatan',
    'Hälsingegatan',
    'Hälsingegatan',
    'Hälsingegatan',
    'Hälsingehöjden',
    'Hälsobrunnsgatan',
    'Hamburgsvägen',
    'Hamlingsgatan',
    'HammarbyAllé',
    'HammarbyAllé',
    'HammarbyAllé',
    'HammarbyAllé',
    'HammarbyAllé',
    'HammarbyAllé',
    'HammarbyAllé',
    'HammarbyAllé',
    'HammarbyFabriksväg',
    'HammarbyFabriksväg',
    'HammarbyKaj',
    'HammarbyKaj',
    'HammarbyKaj',
    'HammarbyKaj',
    'HammarbyKajgata',
    'HammarbySlussväg',
    'Hammarbyterrassen',
    'Hammarbyterrassen',
    'Hammarbyterrassen',
    'Hammargatan',
    'Hamngatan',
    'Hamngatan',
    'Hamngatan',
    'Hangövägen',
    'Hantverkargatan',
    'Hantverkargatan',
    'Hantverkargatan',
    'Härdgången',
    'Hårdvallsgatan',
    'Hårdvallsgatan',
    'HarryMartinsonsGata',
    'Hästholmsvägen',
    'Havregatan',
    'Hazeliusbacken',
    'Hazeliusporten',
    'Hedbornsstigen',
    'Hedemoratäppan',
    'Hedinsgatan',
    'Heimdalsgatan',
    'Heleneborgsgatan',
    'Heleneborgsgatan',
    'HelgaLekamensGränd',
    'Helgagatan',
    'Helgalunden',
    'Heliosgatan',
    'Heliosgatan',
    'Heliosgatan',
    'Henriksdalsallén',
    'Henriksdalskajen',
    'Herkulesgatan',
    'Hildebergsvägen',
    'HjalmarCederströmsGata',
    'HjalmarSöderbergsVäg',
    'Hjärnegatan',
    'HögaStigen',
    'HögalidsKyrkväg',
    'Högalidsgatan',
    'Högbergsbacken',
    'Högbergsgatan',
    'Högbergsgatan',
    'Högbergsgatan',
    'Högvaktsterrassen',
    'Högviltsgatan',
    'Hojgränd',
    'HökensGata',
    'Holländargatan',
    'Holländargatan',
    'Holländargatan',
    'HolmamiralensTorg',
    'HolmamiralensVäg',
    'HornsbergsStrand',
    'HornsbergsStrand',
    'HornsbergsStrand',
    'Hornsbergsvägen',
    'Hornsbruksgatan',
    'Hornsgatan',
    'Hornsgatan',
    'Hornsgatan',
    'Hornsgatan',
    'Hornsgatan',
    'Hornsgatan',
    'Hornsgatan',
    'Hornsgatspåfarten',
    'Hornskroken',
    'HornstullsStrand',
    'Hornsviksstigen',
    'Hötorget',
    'Hötorgshallen',
    'Hovslagargatan',
    'Hubertusgatan',
    'Hudiksvallsgatan',
    'Humlegårdsgatan',
    'Hunduddsvägen',
    'Husarviksgatan',
    'Husarviksgatan',
    'Husarvikstorget',
    'Idaborgsvägen',
    'Idungatan',
    'Igeldammsgatan',
    'Ignatiigränd',
    'Industrigatan',
    'Inedalsgatan',
    'Ingemarsgatan',
    'Ingemarsgatan',
    'Ingenjörsvägen',
    'Ingenjörsvägen',
    'IngmarBergmansGata',
    'IpsStockholm',
    'IvanOljelundsGränd',
    'Iversonsgatan',
    'Jägargatan',
    'Jägmästargatan',
    'JakobMommasGata',
    'JakobWestinsgatan',
    'JakobsTorg',
    'Jakobsbergsgatan',
    'Jakobsgatan',
    'Jaktgatan',
    'Jaktgatan',
    'Jaktvarvsplan',
    'JanInghesTorg',
    'Jarlaplan',
    'Järntorget',
    'Järntorgsgatan',
    'JohannesPlan',
    'Johannesgatan',
    'Johannesgränd',
    'JohnBergsPlan',
    'JohnEricssonsgatan',
    'Josefinavägen',
    'Jungfrugatan',
    'Jungfrugatan',
    'Jungmansgränd',
    'Junohällsvägen',
    'JussiBjörlingsAllé',
    'JutasBacke',
    'Kadettgatan',
    'Kåkbrinken',
    'Kaknäsvägen',
    'Källargränd',
    'Källbergsvägen',
    'Kallskärsgatan',
    'Kammakargatan',
    'Kammakargatan',
    'Kammakargatan',
    'Kampementsgatan',
    'Kanalvägen',
    'Kanslikajen',
    'Kapellgränd',
    'Kaplansbacken',
    'Kaptensgatan',
    'Karaffgatan',
    'Karduansmakargatan',
    'KarlJohansTorg',
    'KarlXii:STorg',
    'Karlaplan',
    'Karlaplan',
    'Karlavägen',
    'Karlavägen',
    'Karlavägen',
    'Karlavägen',
    'Karlavägen',
    'Karlavägen',
    'Karlbergsvägen',
    'Karlbergsvägen',
    'Karlbergsvägen',
    'Karlbergsvägen',
    'Karlshällsvägen',
    'Karlsviksgatan',
    'KarolinskaUniversitetssjukhuset',
    'Kastellbacken',
    'Kastellholmskajen',
    'KatarinaBangata',
    'KatarinaBangata',
    'KatarinaKyrkobacke',
    'KatarinaÖstraKyrkogårdsgränd',
    'KatarinaVästraKyrkogata',
    'Katarinavägen',
    'Katrinebergsbacken',
    'Katrinebergsvägen',
    'Katrinebergsvägen',
    'Kattgränd',
    'Kellgrensgatan',
    'Kellgrensgatan',
    'Kindstugatan',
    'KlaraMälarstrand',
    'KlaraNorraKyrkogata',
    'KlaraÖstraKyrkogata',
    'KlaraSödraKyrkogata',
    'KlaraTvärgränd',
    'KlaraVästraKyrkogata',
    'KlaraVattugränd',
    'Klarabergsgatan',
    'Klarabergsviadukten',
    'Klarafaret',
    'Klarastrandsleden',
    'KlefbecksBacke',
    'Klevgränd',
    'Klippgatan',
    'Klockstapelsbacken',
    'Klyvarvägen',
    'Knaperstavägen',
    'Kocksgatan',
    'Kocksgatan',
    'Kocksgränd',
    'Kolargatan',
    'Kolmårdsgränd',
    'Kölnagatan',
    'Kommendörsgatan',
    'Kommendörsgatan',
    'Konradsbergsgatan',
    'Konvojgatan',
    'Konvojgatan',
    'Köpmanbrinken',
    'Köpmangatan',
    'Köpmantorget',
    'Korgmakargränd',
    'Kornhamnstorg',
    'Korphoppsgatan',
    'Korphoppsgatan',
    'Körsbärsvägen',
    'Kräftriket',
    'Kråkgränd',
    'Krångedevägen',
    'KristinebergsSlottsväg',
    'KristinebergsStrand',
    'Kristinebergsvägen',
    'Kristinehovsgatan',
    'Kronobergsgatan',
    'Kronobergsgatan',
    'Krukmakarbacken',
    'Krukmakargatan',
    'Krukmakargatan',
    'Krukmakargatan',
    'Kryssargatan',
    'KungligaSlottet',
    'KungsbroStrand',
    'Kungsbron',
    'Kungsbroplan',
    'Kungsgatan',
    'Kungsgatan',
    'Kungsgatan',
    'Kungsgatan',
    'Kungsgatan',
    'KungsholmsHamnplan',
    'KungsholmsKyrkoplan',
    'KungsholmsStrand',
    'KungsholmsStrand',
    'KungsholmsStrandstig',
    'KungsholmsStrandstig',
    'Kungsholmsgatan',
    'Kungsholmsgatan',
    'Kungsholmstorg',
    'Kungsklippan',
    'Kungstensgatan',
    'Kungstensgatan',
    'Kungstensgatan',
    'Kungstensgatan',
    'Kungsträdgården',
    'Kungsträdgårdsgatan',
    'Kuponginlösning/Unimon',
    'Kvarngatan',
    'Kvastmakarbacken',
    'Kvastmakartrappan',
    'Kyrkslingan',
    'Laboratoriegatan',
    'Laduviksvägen',
    'Lagerlöfsgatan',
    'Lanforsvägen',
    'LångaGatan',
    'LångaRaden',
    'Långholmsbacken',
    'Långholmsgatan',
    'Långholmsmuren',
    'Lantmäteribacken',
    'LarsForssellsGata',
    'Lästmakargatan',
    'LehusensGränd',
    'LejonstedtsGränd',
    'Lektorsstigen',
    'Lenngrensgatan',
    'LennmansTrappgränd',
    'Levertinsgatan',
    'Libertas',
    'Lidingövägen',
    'Lidingövägen',
    'Lidingövägen',
    'Lidingövägen',
    'Lidnersgatan',
    'Lidnersplan',
    'Lidovägen',
    'Lignagatan',
    'LiljasGata',
    'Liljeholmsbron',
    'Liljeholmsgränd',
    'Liljeholmshamnen',
    'Liljeholmsstranden',
    'Liljeholmstorget',
    'Liljeholmstorget',
    'Liljeholmsvägen',
    'LillaAllmännaGränd',
    'LillaBantorget',
    'LillaErstagatan',
    'LillaFrescativägen',
    'LillaHoparegränd',
    'LillaNygatan',
    'LillaSkinnarviksgränd',
    'LillaSkuggansVäg',
    'LillaVästerbron',
    'Lill-JansPlan',
    'Lindarängsvägen',
    'Lindhagensgatan',
    'Lindhagensgatan',
    'Lindhagensgatan',
    'Lindhagensgatan',
    'Lindhagensplan',
    'Lindhagensterrassen',
    'Lindstedtsvägen',
    'Lindvallsgatan',
    'Lindvallsplan',
    'Linnégatan',
    'Linnégatan',
    'Linnégatan',
    'Linnégatan',
    'Linnégatan',
    'Ljusslingan',
    'Ljusslingan',
    'Ljusstöparbacken',
    'Ljustergränd',
    'Ljusterögatan',
    'Lodgatan',
    'Lögebodavägen',
    'Löjtnantsgatan',
    'Lokstallsgatan',
    'Lorensbergsgatan',
    'Lotsgatan',
    'Loudden',
    'Louddsvägen',
    'Lövängsgatan',
    'Lövängsgatan',
    'LoveAlmqvistsVäg',
    'Lövholmsbrinken',
    'Lövholmsgränd',
    'Lövholmsvägen',
    'Lövholmsvägen',
    'Lovisagatan',
    'Lucidorsgatan',
    'Ludvigsbergsgatan',
    'LugnetsAllé',
    'LugnetsAllé',
    'LugnetsAllé',
    'LugnetsAllé',
    'LugnetsAllé',
    'LugnetsAllé',
    'Lumagatan',
    'Lumagatan',
    'Lumaparksvägen',
    'Lumaparksvägen',
    'Lundagatan',
    'Lundagatan',
    'Luntmakargatan',
    'Luntmakargatan',
    'Luntmakargatan',
    'Lustgårdsgatan',
    'Lustgårdsgatan',
    'Lustigkullavägen',
    'Lusuddsvägen',
    'LuthensGränd',
    'Lützengatan',
    'Luxgatan',
    'Madängsgatan',
    'Magnetvägen',
    'MagnusLadulåsgatan',
    'MagnusLadulåsgatan',
    'MagnusLadulåsgatan',
    'Majorsgatan',
    'Målargatan',
    'Mälartorget',
    'Mälarvarvsbacken',
    'Malmgårdsvägen',
    'Malmskillnadsgatan',
    'Malmskillnadsgatan',
    'Malmskillnadsgatan',
    'Malmtorgsgatan',
    'Malmvägen',
    'Maltgatan',
    'Manillavägen',
    'Manillavägen',
    'MariaBangata',
    'MariaPrästgårdsgata',
    'MariaSandelsGränd',
    'MariaSkolgata',
    'MariaTrappgränd',
    'Mariagränd',
    'Mariatorget',
    'Mariebergsavfarten',
    'Mariebergsgatan',
    'Mariebergsporten',
    'Mariedalsvägen',
    'Marieviksgatan',
    'Marieviksgatan',
    'Markvardsgatan',
    'Marmorgatan',
    'MårtenTrotzigsGränd',
    'Mårtensdalsgatan',
    'Maskinistgatan',
    'Maskinslingan',
    'MästerMikaelsGata',
    'MästerPersGränd',
    'MästerSamuelsgatan',
    'MästerSamuelsgatan',
    'MästerSamuelsgatan',
    'Masthamnen',
    'Matrosbacken',
    'Medborgarplatsen',
    'Medborgarplatsen',
    'Medevigatan',
    'Mejerivägen',
    'Mejerivägen',
    'Mellangatan',
    'Melodislingan',
    'Messeniusgatan',
    'Metargatan',
    'Midskeppsgatan',
    'Midskogsgränd',
    'Mitisgatan',
    'Mjärdgränd',
    'MoaMartinsonsTorg',
    'Montebellogatan',
    'Möregatan',
    'MörkaKroken',
    'Mörtvikskroken',
    'MosebackeTorg',
    'MosebackeTorg',
    'Motalavägen',
    'Munkbrogatan',
    'Munkbrohamnen',
    'Munkbroleden',
    'Munkbron',
    'Museikajen',
    'Museivägen',
    'Myntgatan',
    'Mynttorget',
    'Nackagatan',
    'Nackagatan',
    'Näckströmsgatan',
    'Närkesgatan',
    'Narvavägen',
    'Narvavägen',
    'Narvavägen',
    'Nätgränd',
    'Nicandervägen',
    'NilsEricsonsPlan',
    'Nimrodsgatan',
    'Nobelgatan',
    'NoeArksfaret',
    'NoeArksgränden',
    'NoeArksgränden',
    'Nordenflychtsvägen',
    'Nordenflychtsvägen',
    'Nordenflychtsvägen',
    'Nordenflychtsvägen',
    'Nordenskiöldsgatan',
    'NorrMälarstrand',
    'NorrMälarstrand',
    'NorraAgnegatan',
    'NorraBankogränd',
    'NorraBenickebrinken',
    'NorraDryckesgränd',
    'NorraFiskartorpsvägen',
    'NorraHammarbyhamnen',
    'NorraHamnvägen',
    'NorraJärngraven',
    'NorraKajvägen',
    'NorraRiddarholmshamnen',
    'NorraStationsgatan',
    'NorraStationsgatan',
    'NorraStationsgatan',
    'NorraStationsgatan',
    'Norrbackagatan',
    'Norrbackagatan',
    'Norrbro',
    'Norrlandsgatan',
    'Norrlandsgatan',
    'Norrlandsgatan',
    'Norrmalmstorg',
    'Norrskogsvägen',
    'Norrtullsgatan',
    'Norrtullsgatan',
    'Norrtullsgatan',
    'Notvarpsgränd',
    'Nybergsgatan',
    'Nybodaringen',
    'Nybohovsbacken',
    'Nybohovsbacken',
    'Nybohovsgränd',
    'Nybrogatan',
    'Nybrogatan',
    'Nybrogatan',
    'Nybrogatan',
    'Nybrohamnen',
    'Nybrokajen',
    'Nybroplan',
    'Nygränd',
    'Nytorget',
    'Nytorgsgatan',
    'Nytorgsgatan',
    'Observatoriegatan',
    'Odengatan',
    'Odengatan',
    'Odengatan',
    'Odenplan',
    'OlaHanssonsgatan',
    'Ölandsgatan',
    'OlausPetrigatan',
    'OlivecronasVäg',
    'OlofDalinsVäg',
    'OlofGjödingsgatan',
    'OlofPalmesGata',
    'OlofPalmesGata',
    'Olofsgatan',
    'OnkelAdamsVäg',
    'Ordenstrappan',
    'Öregrundsgatan',
    'Örlogsvägen',
    'Ormbergsvägen',
    'OrvarOddsVäg',
    'OsquarsBacke',
    'OsquldasVäg',
    'Österlånggatan',
    'Östermalmsgatan',
    'Östermalmsgatan',
    'Östermalmsgatan',
    'Östermalmsgatan',
    'Östermalmstorg',
    'Östgötagatan',
    'Östgötagatan',
    'Östhammarsgatan',
    'Östhammarsgatan',
    'ÖstraJärnvägsgatan',
    'ÖstraVarvsgatan',
    'ÖstraVarvsgatansGränd',
    'Överskärargränd',
    'Oxenstiernsgatan',
    'Oxtorget',
    'Oxtorgsgatan',
    'Oxtorgsgränd',
    'POHallmansGata',
    'Packhusgränd',
    'Palermogatan',
    'Palmbladsvägen',
    'Pålsundsgatan',
    'Pålsundsparken',
    'PärLagerkvistsGata',
    'Parkgatan',
    'Parmmätargatan',
    'Patentgatan',
    'Patientvägen',
    'Pelikansgränd',
    'PerLudvigLindgrensTerrass',
    'PeterMyndesBacke',
    'PeterMyndesBacke',
    'Pilgatan',
    'Pipersgatan',
    'Pipersgatan',
    'Planterhagsvägen',
    'Ploggatan',
    'Pokalvägen',
    'Polhemsgatan',
    'Polhemsgatan',
    'Pollargatan',
    'Pontonjärgatan',
    'Pontonjärgatan',
    'Porjusvägen',
    'Prästgatan',
    'Primusgatan',
    'Primusgatan',
    'PrinsEugensVäg',
    'PrinsessanIngeborgsVäg',
    'PrinsessanMärtasVäg',
    'Professorsslingan',
    'Pryssgränd',
    'Pustegränd',
    'Rådjursstigen',
    'Rådlösavägen',
    'Rådmansgatan',
    'Rådmansgatan',
    'Rådmansgatan',
    'Rådmansgatan',
    'Rådmansgatan',
    'Råggatan',
    'RagnarÖstbergsPlan',
    'Ragvaldsgatan',
    'Rålambshovsleden',
    'Rålambsvägen',
    'Rålambsvägen',
    'Räntmästartrappan',
    'Rapsgatan',
    'Rävgrytsbacken',
    'Redargatan',
    'Regattakajen',
    'Regeringsgatan',
    'Regeringsgatan',
    'Regeringsgatan',
    'Rehnsgatan',
    'Reimersholmsgatan',
    'RenstiernasGata',
    'RenstiernasGata',
    'Repslagargatan',
    'Repslagargatan',
    'Repslagargatan',
    'Riddargatan',
    'Riddargatan',
    'Riddargatan',
    'Riddarhusgränd',
    'Riddarhuskajen',
    'Riddarhustorget',
    'Rigagatan',
    'Riksgatan',
    'Rimbogatan',
    'Rindögatan',
    'Rindögatan',
    'Ringvägen',
    'Ringvägen',
    'Ringvägen',
    'Ringvägen',
    'Ringvägen',
    'Ringvägen',
    'Ringvägen',
    'Ringvägen',
    'Ringvägen',
    'RobertAlmströmsgatan',
    'Rödabergsbrinken',
    'Rödabergsgatan',
    'Rödbodgatan',
    'Rödbodtorget',
    'Roddargatan',
    'Rökubbsgatan',
    'Ropstensslingan',
    'Rorgängargatan',
    'Rorgängargatan',
    'Rörstrandsgatan',
    'Rörstrandsgatan',
    'Rosenbad',
    'Rosendalsterrassen',
    'Rosendalsvägen',
    'Rosengatan',
    'Rosenhillsvägen',
    'Rosenlundsgatan',
    'Rosenlundsgatan',
    'Roslagsgatan',
    'Roslagsgatan',
    'Roslagstullsbacken',
    'Roslagsvägen',
    'Rosterigränd',
    'Ruddammsbacken',
    'Ruddammsvägen',
    'Runebergsgatan',
    'Runiusgatan',
    'RutgerFuchsgatan',
    'Ryssviksvägen',
    'Sabbatsbergsvägen',
    'Sachsgatan',
    'Sågargatan',
    'Sällskapsvägen',
    'Saltmätargatan',
    'Saltmätargatan',
    'SaltsjöbanansStation',
    'Salviigränd',
    'Samaritgränd',
    'SamuelOwensGata',
    'Sandåsgatan',
    'Sandbacksgatan',
    'Sandelsgatan',
    'Sandelsgatan',
    'Sandhamnsgatan',
    'Sandhamnsgatan',
    'Sandhamnsgatan',
    'Sandhamnsplan',
    'SanktEriksgatan',
    'SanktEriksgatan',
    'SanktEriksgatan',
    'SanktEriksgatan',
    'SanktEriksgatan',
    'SanktEriksgatan',
    'SanktEriksgatan',
    'SanktEriksplan',
    'SanktEriksplan',
    'SanktEriksterrassen',
    'SanktGöransgatan',
    'SanktGöransgatan',
    'SanktGöransgatan',
    'SanktGöransgatan',
    'SanktGöransgatan',
    'SanktGöransplan',
    'SanktPaulsgatan',
    'SanktPaulsgatan',
    'Sannadalsvägen',
    'SantanderConsumerBankAB',
    'SaraLidmansGata',
    'Sätertäppan',
    'Scheelegatan',
    'Scheelegatan',
    'Scheffersgatan',
    'SchönfeldtsGränd',
    'Segelbåtsvägen',
    'Seglatsgatan',
    'Sehlstedtsgatan',
    'Separatorgränd',
    'Serafimergränd',
    'Sergelarkaden',
    'Sergelgången',
    'Sergelgatan',
    'SergelsTorg',
    'SfBioAB',
    'Siargatan',
    'Sibyllegatan',
    'Sibyllegatan',
    'Sibyllegatan',
    'SicklaKanalgata',
    'SicklaKanalgata',
    'Signalgränd',
    'Sigtunagatan',
    'Singelbacken',
    'Sirishovsvägen',
    'SistaStyvernsTrappor',
    'Själagårdsgatan',
    'Sjöbjörnsvägen',
    'Sjöfartsgatan',
    'Sjökortsgatan',
    'Sjömansgränd',
    'Sjöstugugränd',
    'Sjötullsbacken',
    'Sjöviksbacken',
    'Sjöviksbacken',
    'Sjöviksbacken',
    'Sjöviksbacken',
    'Sjövikskajen',
    'Sjövikskajen',
    'Sjövikstorget',
    'Sjövikstorget',
    'Sjöviksvägen',
    'Sjöviksvägen',
    'Sjöviksvägen',
    'Sjöviksvägen',
    'Sjukhusbacken',
    'Skånegatan',
    'Skånegatan',
    'Skansbacken',
    'Skansbrogatan',
    'Skansbron',
    'Skaraborgsgatan',
    'Skarpögatan',
    'Skarpskyttestigen',
    'SkepparKarlsGränd',
    'SkepparOlofsGränd',
    'Skeppargatan',
    'Skeppargatan',
    'Skeppargatan',
    'Skeppargatan',
    'Skeppargränd',
    'Skeppsbrokajen',
    'Skeppsbron',
    'Skeppsmäklargatan',
    'Skillinggränd',
    'Skinnarviksringen',
    'Skogsmarksvägen',
    'Skogvaktargatan',
    'Sköldgatan',
    'Sköldungagatan',
    'Skolgränd',
    'Skomakargatan',
    'Skonertvägen',
    'Skottgränd',
    'Skräddargränd',
    'Skrubbasandsvägen',
    'Skutskepparvägen',
    'Slåttervallsgatan',
    'Slipgatan',
    'Slöjdgatan',
    'Slottsbacken',
    'Slupskjulsvägen',
    'Slussplan',
    'SmalaGränd',
    'Smålandsgatan',
    'Smedsbacksgatan',
    'Smedsuddsvägen',
    'Snickarbacken',
    'Snipkroken',
    'Snoilskyvägen',
    'Sockerbruksgränd',
    'SöderMälarstrand',
    'SöderMälarstrand',
    'SöderMälarstrand',
    'SöderMälarstrand',
    'SöderMälarstrandsKajplatser',
    'SöderMälarstrandsKajplatser',
    'Söderhallarna',
    'Södermalmsallén',
    'Södermalmsallén',
    'Södermalmstorg',
    'Södermalmstorg',
    'Södermannagatan',
    'Södermannagatan',
    'Södermannagatan',
    'Södermannagatan',
    'Södertäljevägen',
    'SödraAgnegatan',
    'SödraAgnegatan',
    'SödraBankogränd',
    'SödraBassängkajen',
    'SödraBenickebrinken',
    'SödraBlasieholmshamnen',
    'SödraBrobänken',
    'SödraDryckesgränd',
    'SödraFiskartorpsvägen',
    'SödraHamnvägen',
    'SödraKajen',
    'SödraRiddarholmshamnen',
    'Sofiagatan',
    'Sofiebergsvägen',
    'Solgränd',
    'Solkraftsvägen',
    'Sollidsbacken',
    'Solnavägen',
    'SonjaKovalevskysGata',
    'SpektensGränd',
    'Stadsgården',
    'StadsgårdensKajplatser',
    'Stadsgårdshamnen',
    'Stadsgårdsleden',
    'StadshagensIdrottsväg',
    'Stadshagsplan',
    'Stadshagsvägen',
    'StaffanSassesGränd',
    'Stagneliusvägen',
    'Stagneliusvägen',
    'Stallgatan',
    'Stapelgatan',
    'Starrängsringen',
    'Stenbocksgatan',
    'Stenkullavägen',
    'Stenshällsvägen',
    'Stickelbärsvägen',
    'Stiernhielmsvägen',
    'Stigbergsgatan',
    'StoraEssingepåfarten',
    'StoraGråmunkegränd',
    'StoraHoparegränd',
    'StoraMejtensGränd',
    'StoraNygatan',
    'StoraSkuggansVäg',
    'Storängsgatan',
    'Storängskroken',
    'Storängstorget',
    'Storängsvägen',
    'Storgatan',
    'Storgatan',
    'Storgatan',
    'Storgatan',
    'Storkyrkobrinken',
    'Storskärsgatan',
    'Stortorget',
    'Strålgatan',
    'Strandbergsgatan',
    'Stranden',
    'Strandvägen',
    'Strandvägen',
    'Strandvägen',
    'Strandvägskajen',
    'Strindbergsgatan',
    'Strindbergsgatan',
    'Strömgatan',
    'Strömparterren',
    'Strömsborgsbron',
    'Strykerskevägen',
    'Stuckatörvägen',
    'Studentbacken',
    'Sturegatan',
    'Sturegatan',
    'Sturehillsvägen',
    'Stureparken',
    'Stureplan',
    'Stureplan',
    'Styckjunkargatan',
    'Styrbordsgatan',
    'Styrmansgatan',
    'Styrmansgatan',
    'Sundstabacken',
    'Surbrunnsgatan',
    'Surbrunnsgatan',
    'Surbrunnsgatan',
    'SvanteArrheniusVäg',
    'Svartensgatan',
    'Svartmangatan',
    'Svarvargatan',
    'Sveavägen',
    'Sveavägen',
    'Sveavägen',
    'Sveavägen',
    'Sveavägen',
    'Sveavägen',
    'Svedbergsplan',
    'Svedbergsstigen',
    'SvenRinmansGata',
    'SvenVintapparesGränd',
    'SvenskPingstmission',
    'SvenskaTravsportensCentralfö',
    'Svensksundsvägen',
    'Swedenborgsgatan',
    'Swedenborgsgatan',
    'Sysslomansgatan',
    'Tantogatan',
    'Tantogatan',
    'Taptogatan',
    'Tavastgatan',
    'Tavastgatan',
    'Taxgatan',
    'Teatergatan',
    'Tegelbacken',
    'Tegeluddsvägen',
    'Tegeluddsvägen',
    'Tegeluddsvägen',
    'Tegeluddsvägen',
    'Tegeluddsvägen',
    'Tegelviksgatan',
    'Tegelviksgatan',
    'Tegelviksplan',
    'Tegelviksslingan',
    'Tegnérgatan',
    'Tegnérgatan',
    'Tegnérgatan',
    'Tegnérgatan',
    'Tegnérgatan',
    'Tegnérlunden',
    'Tegnérlunden',
    'Teknikringen',
    'Teknologgatan',
    'Telegrafgränd',
    'Tempeltrappan',
    'Tengdahlsgatan',
    'Tengdahlsgatan',
    'Tengdahlsgatan',
    'Terminalslingan',
    'Textilgatan',
    'Thorildsplan',
    'Thorildsvägen',
    'Tideliusgatan',
    'Timmermansgatan',
    'Timmermansgatan',
    'Timmermansgränd',
    'Timotejgatan',
    'Tjärhovsgatan',
    'Tjärhovsgatan',
    'Tjärhovsplan',
    'Tjurbergsgatan',
    'Tjustgatan',
    'Tobaksspinnargatan',
    'Tomtebogatan',
    'Tomtebogatan',
    'TorbjörnKlockaresGata',
    'Torggatan',
    'TorkelKnutssonsgatan',
    'TorkelKnutssonsgatan',
    'Torkhusgatan',
    'Torphagsvägen',
    'Torsgatan',
    'Torsgatan',
    'Torsgatan',
    'Torsgatan',
    'Torsgränd',
    'Torsplan',
    'Torstenssonsgatan',
    'Trädgårdsgatan',
    'Trädgårdstvärgränd',
    'Trålgränd',
    'Trångsund',
    'Transportvägen',
    'TreLiljor',
    'TredjeBassängvägen',
    'TredjeTvärvägen',
    'Trekantsvägen',
    'Triewaldsgränd',
    'Trollhättevägen',
    'Tryckerigatan',
    'Tulegatan',
    'Tulegatan',
    'Tullgårdsgatan',
    'Tullgränd',
    'Tullvaktsvägen',
    'Tunnelgatan',
    'TureNermansGränd',
    'Tvätterskevägen',
    'Tyghusplan',
    'Tyrgatan',
    'TyskaBrinken',
    'TyskaBrunnsplan',
    'TyskaSkolgränd',
    'TyskaStallplan',
    'Tyskbagargatan',
    'TystaGatan',
    'TystaMarigången',
    'Uggelviksgatan',
    'Ugglegränd',
    'Uggleviksvägen',
    'Ulrikagatan',
    'Ulriksborgsgatan',
    'Universitetsvägen',
    'Untravägen',
    'Upplagsvägen',
    'Upplandsgatan',
    'Upplandsgatan',
    'Upplandsgatan',
    'Upplandsgatan',
    'Urvädersgränd',
    'Utkiksbacken',
    'ValentinSabbatsGata',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valhallavägen',
    'Valmyndigheten',
    'Vanadislunden',
    'Vanadisplan',
    'Vanadisvägen',
    'Vanadisvägen',
    'Vanadisvägen',
    'Vänskapsvägen',
    'Väpnargatan',
    'Värdshusbacken',
    'Värdshusslingan',
    'Vårdstigen',
    'Vårdvägen',
    'Väringgatan',
    'VärtansStationsväg',
    'Värtavägen',
    'Värtavägen',
    'Värtavägen',
    'Värtavägen',
    'Vartoftagatan',
    'Varvsgatan',
    'Vasagatan',
    'Vasaplan',
    'Västeråsgatan',
    'Västerbroplan',
    'Västerlånggatan',
    'Västgötagatan',
    'Västgötagatan',
    'Västgötagränd',
    'Västmannagatan',
    'Västmannagatan',
    'Västmannagatan',
    'Västmannagatan',
    'Västmannagatan',
    'VästraJärnvägsgatan',
    'VästraTrädgårdsgatan',
    'VästraVattugränd',
    'VattenfallAB',
    'VattenfallInsurance',
    'VattenfallSupportAB',
    'VattenfallTreasuryAB',
    'Vattenkraftsvägen',
    'Vattugatan',
    'VävarJohansGata',
    'VävarJohansGata',
    'VävarJohansGata',
    'Vegagatan',
    'VeitWittrocksVäg',
    'Verdandigatan',
    'Verkstadsgatan',
    'Vetegatan',
    'Vickergatan',
    'Vidargatan',
    'Vikingagatan',
    'Villagatan',
    'Vindkraftsvägen',
    'Vindragarvägen',
    'Vingårdsgatan',
    'Vingårdsgatan',
    'Vinodlargatan',
    'Vintertullstorget',
    'Vinterviksvägen',
    'Virkesvägen',
    'Vitalisvägen',
    'Völundsgatan',
    'Vulcanusgatan',
    'Vuxenvägen',
    'Wahrendorffsgatan',
    'Wallingatan',
    'Wallingatan',
    'WarfvingesVäg',
    'WarfvingesVäg',
    'Wargentinsgatan',
    'WelandersVäg',
    'Wennerbergsgatan',
    'Wenströmsvägen',
    'Wittstocksgatan',
    'Wittstocksgatan',
    'Wivalliusgatan',
    'WollmarYxkullsgatan',
    'Ynglingagatan',
    'YtterstaTvärgränd',
    'Yxsmedsgränd',
    'ZinkensVäg',
  ],
};

export default data;