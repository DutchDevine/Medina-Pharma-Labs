import type { Product } from "./schema";

export const products: Product[] = [
  // Injectable Steroids (MEDINA)
  {
    id: "gh-endogenic",
    name: "GH Endogenic",
    chemicalName: "Somatotropina (HGH)",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 IU",
    quantity: "10×10 IU",
    priceEur: 222.05,
    image: "/attached_assets/Bez tytułu_1762047957578.png",
    description: "GH Endogenic is recombinant menselijk groeihormoon (HGH) van farmaceutische kwaliteit. Het bevordert spiergroei, vetverbranding en herstel.",
    usage: "Subcutane of intramusculaire injectie, dagelijks of meerdere keren per dag",
    dosage: "2-4 IU per dag voor anti-aging en herstel, 4-8 IU per dag voor bodybuilding doeleinden",
    benefits: [
      "Verbeterde vetverlies bij behoud van spiermassa",
      "Verhoogde spiergroei en recuperatie",
      "Verbeterde huidkwaliteit en anti-aging effecten",
      "Sterkere botten en gewrichten",
      "Verbeterde slaapkwaliteit",
      "Toegenomen energieniveaus"
    ],
    warnings: [
      "Medisch toezicht sterk aanbevolen",
      "Kan bloedsuikerspiegel beïnvloeden",
      "Niet gebruiken bij kanker of tumoren",
      "Langdurig gebruik vereist monitoring",
      "Bewaar gekoeld tussen 2-8°C"
    ],
    ingredients: "Somatropine (recombinant HGH) 10 IU per flacon, mannitol, natriumfosfaat buffer"
  },
  {
    id: "test-enan",
    name: "Test Enan",
    chemicalName: "Testosteron Enanthate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "300 mg/ml",
    quantity: "10 ml",
    priceEur: 34.16,
    image: "/attached_assets/image_1762051320696.png",
    description: "Test Enan (Testosteron Enanthate) is een langwerkend testosteron ester dat wordt gebruikt voor spiergroei en kracht. Het is een van de meest populaire anabole steroïden voor massa-opbouw.",
    usage: "Intramusculaire injectie, meestal 1-2 keer per week",
    dosage: "Typisch 300-600 mg per week voor gevorderde gebruikers. Beginners starten vaak met 300 mg per week.",
    benefits: [
      "Significante toename in spiermassa",
      "Verhoogde kracht en power output",
      "Verbeterd herstel na training",
      "Verhoogde eiwitynthese",
      "Verbeterde stikstofretentie"
    ],
    warnings: [
      "Alleen voor volwassenen boven 21 jaar",
      "Medisch toezicht vereist",
      "Kan bijwerkingen veroorzaken zoals aromatisatie",
      "Niet aanbevolen voor vrouwen",
      "Post Cycle Therapy (PCT) is noodzakelijk"
    ],
    ingredients: "Testosteron Enanthate 300mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "test-cypio",
    name: "Test Cypio",
    chemicalName: "Testosteron Cypionate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "300 mg/ml",
    quantity: "10 ml",
    priceEur: 34.16,
    image: "/attached_assets/image_1762051320696.png",
    description: "Test Cypio (Testosteron Cypionate) is een langwerkend testosteron ester vergelijkbaar met enanthate. Het wordt veel gebruikt voor spiergroei, kracht en algemene prestatieverbetering.",
    usage: "Intramusculaire injectie, meestal 1-2 keer per week",
    dosage: "300-600 mg per week voor gevorderde gebruikers. Beginners starten vaak met 300 mg per week.",
    benefits: [
      "Significante toename in spiermassa",
      "Verhoogde kracht en power",
      "Verbeterd herstel na training",
      "Verhoogde eiwitynthese",
      "Verbeterde stikstofretentie",
      "Langere halfwaardetijd dan propionate"
    ],
    warnings: [
      "Alleen voor volwassenen boven 21 jaar",
      "Medisch toezicht vereist",
      "Kan aromatiseren naar oestrogeen",
      "Niet aanbevolen voor vrouwen",
      "Post Cycle Therapy (PCT) is noodzakelijk"
    ],
    ingredients: "Testosteron Cypionate 300mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "test-susta",
    name: "Test Susta",
    chemicalName: "Testosteron mix (Sustanon 300)",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "300 mg/ml",
    quantity: "10 ml",
    priceEur: 34.16,
    image: "/attached_assets/image_1762051320696.png",
    description: "Test Susta is een krachtige mix van vier verschillende testosteron esters die een snelle en langdurige afgifte bieden. Ideaal voor constante bloedspiegels en optimale resultaten.",
    usage: "Intramusculaire injectie, 1-2 keer per week",
    dosage: "300-750 mg per week. Beginners starten met 300-500 mg per week.",
    benefits: [
      "Snelle en langdurige werking door ester mix",
      "Stabiele testosteron bloedspiegels",
      "Significante massa- en krachttoename",
      "Verbeterd libido en welzijn",
      "Verhoogde rode bloedcelproductie",
      "Optimale anabole omgeving"
    ],
    warnings: [
      "Alleen voor volwassenen boven 21 jaar",
      "Medisch toezicht sterk aanbevolen",
      "Aromatiseert naar oestrogeen - AI mogelijk nodig",
      "Niet geschikt voor vrouwen",
      "Vereist Post Cycle Therapy",
      "Monitor bloedwaarden regelmatig"
    ],
    ingredients: "Testosteron Propionate, Testosteron Phenylpropionate, Testosteron Isocaproate, Testosteron Decanoate (totaal 300mg/ml), Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "test-prop",
    name: "Test Prop",
    chemicalName: "Testosteron Propionate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 mg/ml",
    quantity: "10 ml",
    priceEur: 30.74,
    image: "/attached_assets/image_1762051320696.png",
    description: "Test Prop (Testosteron Propionate) is een snelwerkend testosteron ester met korte halfwaardetijd. Perfect voor cutting cycli en wanneer snelle bloedspiegelaanpassing gewenst is.",
    usage: "Intramusculaire injectie, om de dag of dagelijks voor stabiele bloedspiegels",
    dosage: "50-100 mg om de dag, of 100-200 mg om de 2-3 dagen. Totaal 300-700 mg per week.",
    benefits: [
      "Snelle werking - resultaten binnen dagen",
      "Minder vochtretentie dan langere esters",
      "Uitstekend voor cutting en definitie",
      "Snelle bloedspiegelaanpassing mogelijk",
      "Ideaal voor korte cycli",
      "Verhoogde kracht en spiermassa"
    ],
    warnings: [
      "Frequente injecties nodig",
      "Kan pijnlijk zijn bij injectie",
      "Alleen voor volwassenen boven 21 jaar",
      "Aromatiseert naar oestrogeen",
      "Post Cycle Therapy noodzakelijk",
      "Medisch toezicht aanbevolen"
    ],
    ingredients: "Testosteron Propionate 100mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "dekanian",
    name: "Dekanian",
    chemicalName: "Nandrolone Decanoate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "400 mg/ml",
    quantity: "10 ml",
    priceEur: 40.99,
    image: "/attached_assets/image_1762051320696.png",
    description: "Dekanian (Nandrolone Decanoate) is een hooggeconcentreerde versie van het populaire Deca Durabolin. Bekend om zijn excellente massa-opbouw en gewrichtsbeschermende eigenschappen.",
    usage: "Intramusculaire injectie, 1 keer per week",
    dosage: "400-600 mg per week voor massa-opbouw. Langere cycli van 12-16 weken zijn gebruikelijk.",
    benefits: [
      "Uitstekende massa-opbouw",
      "Verbetert gewrichtsgezondheid en collageen synthese",
      "Verhoogde stikstofretentie",
      "Minder androgene bijwerkingen dan testosteron",
      "Verbeterd herstel",
      "Langdurige werking"
    ],
    warnings: [
      "Kan prolactine verhogen - monitor dit",
      "Onderdrukt natuurlijke testosteron sterk",
      "Lange detectietijd in dopingtests",
      "Vereist testosteron base in cyclus",
      "Post Cycle Therapy is essentieel",
      "Niet aanbevolen voor vrouwen in hoge doses"
    ],
    ingredients: "Nandrolone Decanoate 400mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "tritest",
    name: "Tritest",
    chemicalName: "Testosteron blend (E/C/P)",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "450 mg/ml",
    quantity: "10 ml",
    priceEur: 40.99,
    image: "/attached_assets/image_1762051320696.png",
    description: "Tritest is een krachtige blend van drie testosteron esters (Enanthate, Cypionate en Propionate) in hoge concentratie. Biedt zowel snelle als langdurige testosteron afgifte.",
    usage: "Intramusculaire injectie, 1-2 keer per week",
    dosage: "450-900 mg per week voor gevorderde gebruikers. Minimaal 300 mg per week.",
    benefits: [
      "Zeer hoge testosteron concentratie",
      "Snelle en langdurige werking gecombineerd",
      "Extreme massa- en krachttoename",
      "Minder injectie volume nodig",
      "Verbeterde eiwitynthese en herstel",
      "Verhoogd libido en welzijn"
    ],
    warnings: [
      "Alleen voor zeer ervaren gebruikers",
      "Hoge concentratie kan pijnlijk zijn",
      "Sterke aromatisatie - AI vaak noodzakelijk",
      "Significant verhoogd risico op bijwerkingen",
      "Strikte Post Cycle Therapy vereist",
      "Medisch toezicht sterk aanbevolen"
    ],
    ingredients: "Testosteron Enanthate, Testosteron Cypionate, Testosteron Propionate (totaal 450mg/ml), Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "boldenon",
    name: "Boldenon",
    chemicalName: "Boldenone Undecylenate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "300 mg/ml",
    quantity: "10 ml",
    priceEur: 40.99,
    image: "/attached_assets/image_1762051320696.png",
    description: "Boldenon (Boldenone Undecylenate), ook bekend als Equipoise, is een veelzijdig anabool steroïde dat langzame maar kwalitatieve spiergroei bevordert met verhoogde eetlust en rode bloedcelproductie.",
    usage: "Intramusculaire injectie, 1-2 keer per week",
    dosage: "400-600 mg per week. Cycli van 12-16 weken vanwege lange ester.",
    benefits: [
      "Gestage, kwalitatieve spiergroei",
      "Verhoogde eetlust",
      "Verbeterde rode bloedcelproductie en uithoudingsvermogen",
      "Verbeterde vascularity",
      "Relatief milde bijwerkingen",
      "Goede massa/kracht verhouding"
    ],
    warnings: [
      "Lange detectietijd in dopingtests",
      "Kan angst verhogen bij gevoelige personen",
      "Matige aromatisatie mogelijk",
      "Langere cycli nodig voor optimale resultaten",
      "Post Cycle Therapy aanbevolen",
      "Monitor hematocriet waarden"
    ],
    ingredients: "Boldenone Undecylenate 300mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "deka",
    name: "Deka",
    chemicalName: "Nandrolone Decanoate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "300 mg/ml",
    quantity: "10 ml",
    priceEur: 40.99,
    image: "/attached_assets/image_1762051320696.png",
    description: "Deka (Nandrolone Decanoate) is de klassieke Deca Durabolin in standaard concentratie. Een van de meest betrouwbare en bewezen steroïden voor massa-opbouw en gewrichtsbescherming.",
    usage: "Intramusculaire injectie, 1-2 keer per week",
    dosage: "300-600 mg per week. Cycli van 10-16 weken zijn gebruikelijk.",
    benefits: [
      "Betrouwbare massa-opbouw",
      "Excellente gewrichtsbescherming",
      "Verbeterde collageen synthese",
      "Minder androgene bijwerkingen",
      "Verhoogde stikstofretentie",
      "Verbeterd herstel na training"
    ],
    warnings: [
      "Kan prolactine verhogen",
      "Onderdrukt testosteron productie sterk",
      "Lange detectietijd",
      "Gebruik met testosteron base",
      "Post Cycle Therapy essentieel",
      "Monitor bloedwaarden regelmatig"
    ],
    ingredients: "Nandrolone Decanoate 300mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "npp",
    name: "NPP",
    chemicalName: "Nandrolone Phenylpropionate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 mg/ml",
    quantity: "10 ml",
    priceEur: 37.59,
    image: "/attached_assets/image_1762051320696.png",
    description: "NPP (Nandrolone Phenylpropionate) is de snelwerkende versie van Nandrolone. Biedt dezelfde voordelen als Deca maar met snellere werking en kortere halfwaardetijd voor betere controle.",
    usage: "Intramusculaire injectie, om de 2-3 dagen voor stabiele bloedspiegels",
    dosage: "100 mg om de andere dag, of 300-500 mg per week verdeeld over meerdere injecties.",
    benefits: [
      "Snellere werking dan Deca",
      "Uitstekende gewrichtsbescherming",
      "Kwalitatieve spiergroei",
      "Minder vochtretentie dan lange esters",
      "Kortere cycli mogelijk (8-10 weken)",
      "Snellere bloedspiegelaanpassing"
    ],
    warnings: [
      "Frequente injecties vereist",
      "Kan prolactine verhogen",
      "Gebruik met testosteron base",
      "Post Cycle Therapy noodzakelijk",
      "Monitor bloedwaarden",
      "Niet geschikt voor vrouwen in hoge doses"
    ],
    ingredients: "Nandrolone Phenylpropionate 100mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "masteron-p",
    name: "Masteron P",
    chemicalName: "Drostanolone Propionate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 mg/ml",
    quantity: "10 ml",
    priceEur: 44.42,
    image: "/attached_assets/image_1762051320696.png",
    description: "Masteron P (Drostanolone Propionate) is een premium cutting steroïde die spier hardheid, definitie en een droog uiterlijk bevordert. Zeer populair voor competitie voorbereiding.",
    usage: "Intramusculaire injectie, om de dag of 3x per week",
    dosage: "100 mg om de andere dag, of 300-500 mg per week voor cutting cycli.",
    benefits: [
      "Extreme spier hardheid en definitie",
      "Anti-oestrogene eigenschappen",
      "Verbeterde vascularity",
      "Geen vochtretentie",
      "Verhoogde kracht bij laag lichaamsvet",
      "Ideaal voor competitie prep"
    ],
    warnings: [
      "Alleen effectief bij laag lichaamsvet (<12%)",
      "Frequent injecteren nodig",
      "Androgene bijwerkingen mogelijk",
      "Kan haaruitval versnellen bij genetische aanleg",
      "Niet geschikt voor massa-opbouw",
      "Post Cycle Therapy aanbevolen"
    ],
    ingredients: "Drostanolone Propionate 100mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "masteron-e",
    name: "Masteron E",
    chemicalName: "Drostanolone Enanthate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "200 mg/ml",
    quantity: "10 ml",
    priceEur: 51.24,
    image: "/attached_assets/image_1762051320696.png",
    description: "Masteron E (Drostanolone Enanthate) is de langwerkende versie van Masteron, ideaal voor cutting cycli met minder frequente injecties terwijl dezelfde hardheid en definitie wordt bereikt.",
    usage: "Intramusculaire injectie, 2 keer per week",
    dosage: "400-600 mg per week, verdeeld over 2 injecties.",
    benefits: [
      "Spier hardheid en definitie",
      "Langere halfwaardetijd dan propionate",
      "Minder frequente injecties",
      "Anti-oestrogene effecten",
      "Verbeterde vascularity en droog uiterlijk",
      "Verhoogde kracht tijdens cutting"
    ],
    warnings: [
      "Beste resultaten bij lichaamsvet <12%",
      "Androgene bijwerkingen mogelijk",
      "Kan haaruitval beïnvloeden",
      "Niet voor massa-opbouw",
      "Hogere prijs dan propionate versie",
      "Post Cycle Therapy aanbevolen"
    ],
    ingredients: "Drostanolone Enanthate 200mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "tren-a",
    name: "Tren A",
    chemicalName: "Trenbolone Acetate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 mg/ml",
    quantity: "10 ml",
    priceEur: 44.42,
    image: "/attached_assets/image_1762051320696.png",
    description: "Trenbolone Acetate is een van de krachtigste anabole steroïden beschikbaar. Het staat bekend om zijn vermogen om spiermassa en kracht dramatisch te verhogen.",
    usage: "Intramusculaire injectie, om de dag of dagelijks vanwege korte halfwaardetijd",
    dosage: "50-100 mg om de dag voor gevorderde gebruikers. Niet aanbevolen voor beginners.",
    benefits: [
      "Extreme toename in spiermassa en dichtheid",
      "Dramatische verhoging van kracht",
      "Geen aromatisatie naar oestrogeen",
      "Verhoogde vetverlies tijdens massa-opbouw",
      "Verbeterde vascularity en hardheid"
    ],
    warnings: [
      "Alleen voor zeer ervaren gebruikers",
      "Kan cardiovasculaire bijwerkingen veroorzaken",
      "Mogelijk nachtelijk zweten en slapeloosheid",
      "Sterk androgeen - niet voor vrouwen",
      "Medisch toezicht sterk aanbevolen"
    ],
    ingredients: "Trenbolone Acetate 100mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "tren-e",
    name: "Tren E",
    chemicalName: "Trenbolone Enanthate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "200 mg/ml",
    quantity: "10 ml",
    priceEur: 47.82,
    image: "/attached_assets/image_1762051320696.png",
    description: "Tren E (Trenbolone Enanthate) is de langwerkende versie van Trenbolone. Een van de krachtigste anabole steroïden voor extreme massa-opbouw en vetverlies tegelijkertijd.",
    usage: "Intramusculaire injectie, 2 keer per week",
    dosage: "200-400 mg per week voor zeer ervaren gebruikers. Niet voor beginners.",
    benefits: [
      "Extreme toename in spiermassa en kracht",
      "Simultaan vetverlies en spiergroei",
      "Geen aromatisatie naar oestrogeen",
      "Dramatisch verhoogde hardheid en vascularity",
      "Minder frequente injecties dan acetate",
      "Verhoogde IGF-1 niveaus"
    ],
    warnings: [
      "Alleen voor zeer ervaren gebruikers",
      "Kan ernstige cardiovasculaire effecten hebben",
      "Mogelijke nachtelijk zweten en slapeloosheid",
      "Verhoogde prolactine - monitor dit",
      "Sterk androgeen - niet voor vrouwen",
      "Kan 'tren cough' veroorzaken bij injectie"
    ],
    ingredients: "Trenbolone Enanthate 200mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "tren-hexa",
    name: "Tren Hexa",
    chemicalName: "Trenbolone Hexahydrobenzylcarbonate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 mg/ml",
    quantity: "10 ml",
    priceEur: 61.50,
    image: "/attached_assets/image_1762051320696.png",
    description: "Tren Hexa (Trenbolone Hexahydrobenzylcarbonate), ook bekend als Parabolan, is de meest langwerkende Trenbolone ester. Zeer gewild vanwege de langere halfwaardetijd en stabiele bloedspiegels.",
    usage: "Intramusculaire injectie, 2 keer per week",
    dosage: "200-400 mg per week voor zeer gevorderde gebruikers.",
    benefits: [
      "Langste werkende Trenbolone ester",
      "Extreme massa en kracht toename",
      "Stabiele bloedspiegels",
      "Minder frequente injecties",
      "Geen aromatisatie",
      "Premium kwaliteit resultaten"
    ],
    warnings: [
      "Alleen voor zeer ervaren gebruikers",
      "Hoogste prijs van alle Tren versies",
      "Cardiovasculaire stress",
      "Mogelijke ernstige bijwerkingen",
      "Niet voor beginners of intermediates",
      "Medisch toezicht essentieel"
    ],
    ingredients: "Trenbolone Hexahydrobenzylcarbonate 100mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "dhb",
    name: "DHB",
    chemicalName: "1-Testosterone Cypionate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 mg/ml",
    quantity: "10 ml",
    priceEur: 47.82,
    image: "/attached_assets/image_1762051320696.png",
    description: "DHB (Dihydroboldenone/1-Testosterone Cypionate) is een zeer krachtig anabool steroïde dat geen aromatisatie vertoont. Bekend om droge, kwalitatieve spiergroei en kracht zonder vochtretentie.",
    usage: "Intramusculaire injectie, 2-3 keer per week",
    dosage: "200-400 mg per week voor gevorderde gebruikers.",
    benefits: [
      "Droge, kwalitatieve spiergroei",
      "Geen aromatisatie naar oestrogeen",
      "Significante krachttoename",
      "Geen vochtretentie",
      "Verbeterde vascularity",
      "Goede massa/kracht ratio"
    ],
    warnings: [
      "Kan zeer pijnlijk zijn bij injectie",
      "PIP (Post Injection Pain) is gebruikelijk",
      "Androgene bijwerkingen mogelijk",
      "Kan cholesterol negatief beïnvloeden",
      "Post Cycle Therapy noodzakelijk",
      "Niet voor beginners"
    ],
    ingredients: "1-Testosterone Cypionate 100mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "ment",
    name: "MENT",
    chemicalName: "Trestolone Acetate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "50 mg/ml",
    quantity: "10 ml",
    priceEur: 61.50,
    image: "/attached_assets/image_1762051320696.png",
    description: "MENT (Trestolone Acetate) is een van de krachtigste anabole steroïden beschikbaar, 10x anabool sterker dan testosteron. Zeer effectief voor snelle massa-opbouw en kracht.",
    usage: "Intramusculaire injectie, dagelijks of om de dag",
    dosage: "10-50 mg per dag. Beginners starten met 10-20 mg per dag.",
    benefits: [
      "Extreem krachtig anabool effect",
      "Snelle massa en kracht toename",
      "Kan gebruikt worden zonder testosteron base",
      "Verbeterd libido",
      "Zeer efficiënt in lage doses",
      "Unieke anabole eigenschappen"
    ],
    warnings: [
      "Zeer krachtig - start met lage dosis",
      "Aromatiseert sterk - AI noodzakelijk",
      "Dagelijkse injecties vereist",
      "Kan bloeddruk verhogen",
      "Duur in vergelijking met andere steroïden",
      "Alleen voor zeer ervaren gebruikers"
    ],
    ingredients: "Trestolone Acetate 50mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "primabolan",
    name: "Primabolan",
    chemicalName: "Methenolone Enanthate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "100 mg/ml",
    quantity: "10 ml",
    priceEur: 64.91,
    image: "/attached_assets/image_1762051320696.png",
    description: "Primabolan (Methenolone Enanthate) is een premium mild steroïde dat bekend staat om zijn veiligheid en kwalitatieve, behoudbare resultaten. Zeer geliefd voor cutting en bij gezondheid-bewuste atleten.",
    usage: "Intramusculaire injectie, 2 keer per week",
    dosage: "400-600 mg per week voor optimale resultaten.",
    benefits: [
      "Zeer veilig profiel met milde bijwerkingen",
      "Kwalitatieve, behoudbare spiergroei",
      "Geen aromatisatie",
      "Uitstekend voor cutting",
      "Immuunsysteem boost",
      "Geschikt voor langere cycli"
    ],
    warnings: [
      "Relatief duur",
      "Hogere doseringen nodig voor significante resultaten",
      "Niet ideaal voor snelle massa-opbouw",
      "Kan cholesterol beïnvloeden",
      "Post Cycle Therapy aanbevolen",
      "Veelal vervalst - controleer bron"
    ],
    ingredients: "Methenolone Enanthate 100mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "meta-inj",
    name: "Meta Inj",
    chemicalName: "Methandienone (injecteerbaar)",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "50 mg/ml",
    quantity: "10 ml",
    priceEur: 37.59,
    image: "/attached_assets/image_1762051320696.png",
    description: "Meta Inj is de injecteerbare versie van Dianabol (Methandienone). Biedt dezelfde snelle massa-opbouw als de orale versie maar met verminderde levertoxiciteit en langere werkingsduur.",
    usage: "Intramusculaire injectie, dagelijks of om de dag",
    dosage: "50-100 mg per dag, pre-workout injectie voor optimale resultaten.",
    benefits: [
      "Snelle massa en kracht toename",
      "Minder levertoxisch dan orale vorm",
      "Directe werking bij pre-workout gebruik",
      "Verhoogde stikstofretentie",
      "Verbeterde eiwitynthese",
      "Goede prijs/kwaliteit verhouding"
    ],
    warnings: [
      "Dagelijkse injecties vereist",
      "Aromatiseert sterk naar oestrogeen",
      "Vochtretentie mogelijk",
      "Kan bloeddruk verhogen",
      "AI vaak noodzakelijk",
      "Post Cycle Therapy vereist"
    ],
    ingredients: "Methandienone 50mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "anapolon-inj",
    name: "Anapolon Inj",
    chemicalName: "Oxymetholone (injecteerbaar)",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "50 mg/ml",
    quantity: "10 ml",
    priceEur: 37.59,
    image: "/attached_assets/image_1762051320696.png",
    description: "Anapolon Inj is de injecteerbare vorm van Oxymetholone (Anadrol). Een van de krachtigste mass builders beschikbaar, met snelle en dramatische resultaten maar met verminderde levertoxiciteit versus oraal.",
    usage: "Intramusculaire injectie, dagelijks",
    dosage: "50-100 mg per dag. Maximum 4-6 weken.",
    benefits: [
      "Extreme massa-opbouw in korte tijd",
      "Dramatische krachttoename",
      "Minder hepatotoxisch dan orale vorm",
      "Verbeterde rode bloedcelproductie",
      "Verhoogde eetlust",
      "Snelle zichtbare resultaten"
    ],
    warnings: [
      "Zeer krachtig - alleen voor gevorderden",
      "Significante vochtretentie",
      "Kan bloeddruk sterk verhogen",
      "Oestrogene bijwerkingen zonder aromatisatie",
      "Korte cycli aanbevolen (4-6 weken)",
      "Strikte Post Cycle Therapy nodig"
    ],
    ingredients: "Oxymetholone 50mg/ml, Benzyl Alcohol, Benzyl Benzoate, Druivenpitolie"
  },
  {
    id: "winstrol-inj",
    name: "Winstrol Inj",
    chemicalName: "Stanozolol (injecteerbaar)",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "50 mg/ml",
    quantity: "10 ml",
    priceEur: 37.59,
    image: "/attached_assets/image_1762051320696.png",
    description: "Winstrol Inj (Stanozolol injecteerbaar) is ideaal voor cutting en atletische prestaties. Biedt droge spiergroei, vascularity en kracht zonder aromatisatie. Minder levertoxisch dan orale vorm.",
    usage: "Intramusculaire injectie, dagelijks of om de dag",
    dosage: "50 mg om de dag, of 50-100 mg dagelijks voor competitie.",
    benefits: [
      "Droge, harde spiergroei",
      "Geen aromatisatie of vochtretentie",
      "Verhoogde vascularity",
      "Verbeterde atletische prestaties",
      "Minder hepatotoxisch dan oraal",
      "Goede kracht toename"
    ],
    warnings: [
      "Kan gewrichten uitdrogen - gebruik met voorzichtigheid",
      "Negatieve impact op cholesterol",
      "Frequente injecties nodig",
      "Kan haaruitval versnellen",
      "Niet ideaal voor massa-opbouw",
      "Post Cycle Therapy aanbevolen"
    ],
    ingredients: "Stanozolol 50mg/ml (water-based suspension), Benzyl Alcohol"
  },
  // HCG
  {
    id: "hcg-endogenic",
    name: "HCG Endogenic",
    chemicalName: "Chorionic Gonadotropin",
    category: "hcg",
    brand: "ENDOGENIC",
    quantity: "5000 IU",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "HCG (Human Chorionic Gonadotropin) wordt gebruikt om de natuurlijke testosteronproductie te stimuleren, vooral belangrijk tijdens en na steroïde cycli.",
    usage: "Subcutane of intramusculaire injectie, 2-3 keer per week",
    dosage: "250-500 IU, 2-3 keer per week tijdens cyclus. 1000-1500 IU om de dag voor PCT.",
    benefits: [
      "Stimuleert natuurlijke testosteronproductie",
      "Voorkomt testikel atrofie tijdens cyclus",
      "Ondersteunt vruchtbaarheid",
      "Helpt LH en FSH niveaus te herstellen",
      "Essentieel voor effectieve Post Cycle Therapy"
    ],
    warnings: [
      "Niet te veel of te vaak gebruiken",
      "Kan oestrogeen verhogen - monitor dit",
      "Bewaar in koelkast na reconstitutie",
      "Gebruik binnen 60 dagen na reconstitutie",
      "Medisch advies aanbevolen"
    ],
    ingredients: "HCG 5000 IU, mannitol, natriumfosfaat buffer, steriel water (apart verpakt)"
  },
  {
    id: "hcg-pregnyl",
    name: "HCG Pregnyl",
    chemicalName: "Chorionic Gonadotropin (Pregnyl®)",
    category: "hcg",
    brand: "MEDINA",
    quantity: "5000 IU",
    priceEur: 27.33,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "HCG Pregnyl is een farmaceutisch grade Human Chorionic Gonadotropin van Organon. Gebruikt om de natuurlijke testosteronproductie te stimuleren en testiculaire atrofie te voorkomen tijdens steroïde gebruik.",
    usage: "Subcutane of intramusculaire injectie, 2-3 keer per week",
    dosage: "250-500 IU, 2-3 keer per week tijdens cyclus. 1000-2000 IU om de andere dag voor PCT.",
    benefits: [
      "Farmaceutische kwaliteit - zeer betrouwbaar",
      "Stimuleert natuurlijke testosteronproductie",
      "Voorkomt testikelatrofie",
      "Ondersteunt vruchtbaarheid",
      "Helpt bij hormonaal herstel",
      "Essentieel voor effectieve PCT"
    ],
    warnings: [
      "Niet overmatig gebruiken - kan desensitisatie veroorzaken",
      "Kan oestrogeen verhogen - monitor",
      "Bewaar in koelkast na menging",
      "Gebruik binnen 60 dagen na reconstitutie",
      "Steriel water vereist voor reconstitutie",
      "Volg reconstitutie instructies nauwkeurig"
    ],
    ingredients: "HCG 5000 IU (Chorionic Gonadotropin), mannitol, natriumfosfaat buffer, steriel water (apart verpakt)"
  },
  {
    id: "hcg-magnus",
    name: "HCG Magnus",
    chemicalName: "Chorionic Gonadotropin (Magnus)",
    category: "hcg",
    brand: "MEDINA",
    quantity: "5000 IU",
    priceEur: 27.33,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "HCG Magnus is een hoogwaardige Human Chorionic Gonadotropin van Magnus Pharmaceuticals. Betrouwbaar product voor het behoud van testiculaire functie en natuurlijke testosteronproductie.",
    usage: "Subcutane of intramusculaire injectie, 2-3 keer per week",
    dosage: "250-500 IU, 2-3 keer per week tijdens cyclus. 1000-1500 IU om de dag tijdens PCT.",
    benefits: [
      "Betrouwbare kwaliteit van Magnus",
      "Voorkomt testikel atrofie",
      "Stimuleert Leydig cellen",
      "Ondersteunt natuurlijke hormoonproductie",
      "Belangrijk voor vruchtbaarheid",
      "Effectief voor Post Cycle herstel"
    ],
    warnings: [
      "Dosering niet te hoog - risico op desensitisatie",
      "Monitor oestrogeen niveaus",
      "Koel bewaren na reconstitutie (2-8°C)",
      "Gebruik binnen 60 dagen",
      "Gebruik bacteriostatisch water voor reconstitutie",
      "Niet gebruiken bij hormoon-gevoelige kankers"
    ],
    ingredients: "HCG 5000 IU (Chorionic Gonadotropin), mannitol, fosfaatbuffer, bacteriostatisch water (apart)"
  },
  {
    id: "hcg-polfa",
    name: "HCG Polfa",
    chemicalName: "Chorionic Gonadotropin (Polfa)",
    category: "hcg",
    brand: "MEDINA",
    quantity: "5000 IU",
    priceEur: 40.99,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "HCG Polfa is een premium farmaceutisch grade Human Chorionic Gonadotropin van Polfa, een gerenommeerde Poolse farmaceutische producent. Hoge kwaliteit voor optimale resultaten.",
    usage: "Subcutane of intramusculaire injectie, 2-3 keer per week",
    dosage: "250-500 IU, 2-3 keer per week tijdens cyclus. 1000-2000 IU om de dag voor Post Cycle Therapy.",
    benefits: [
      "Premium farmaceutische kwaliteit",
      "Zeer effectief voor testosteron herstel",
      "Voorkomt testiculaire atrofie effectief",
      "Ondersteunt LH en FSH productie",
      "Belangrijk voor vruchtbaarheid behoud",
      "Gerenommeerd merk met goede reputatie"
    ],
    warnings: [
      "Gebruik niet te frequent of in te hoge doses",
      "Monitor oestrogeen - kan verhogen",
      "Koel bewaren na reconstitutie (koelkast)",
      "Gebruik binnen 60 dagen na menging",
      "Correcte reconstitutie is cruciaal",
      "Medisch advies aanbevolen bij twijfel"
    ],
    ingredients: "HCG 5000 IU (Chorionic Gonadotropin), mannitol, natriumfosfaat buffer, waterig oplosmiddel (apart verpakt)"
  },
  // Oral Tablets & SARMs
  {
    id: "meta",
    name: "Meta",
    chemicalName: "Methandienone (Dianabol)",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 30.74,
    image: "/attached_assets/image_1762051320696.png",
    description: "Methandienone, ook bekend als Dianabol, is een van de populairste orale anabole steroïden voor snelle massa-opbouw en krachttoename.",
    usage: "Oraal, met voedsel innemen voor betere maagvertraging",
    dosage: "20-50 mg per dag, verdeeld over meerdere doses. Cyclus van 4-6 weken.",
    benefits: [
      "Snelle toename in spiermassa",
      "Verhoogde kracht binnen enkele dagen",
      "Verbeterde stikstofretentie",
      "Verhoogde eiwitynthese",
      "Verbeterd herstel"
    ],
    warnings: [
      "Levertoxisch - gebruik leverondersteuning",
      "Aromatiseert naar oestrogeen",
      "Kan vochtretentie veroorzaken",
      "Niet langer dan 6 weken gebruiken",
      "Post Cycle Therapy noodzakelijk"
    ],
    ingredients: "Methandienone 10mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  {
    id: "winstrol",
    name: "Winstrol",
    chemicalName: "Stanozolol",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 34.16,
    image: "/attached_assets/image_1762051320696.png",
    description: "Winstrol (Stanozolol) is een populair oraal steroïde voor cutting, atletische prestaties en droge spiergroei. Bekend om het creëren van een hard, gedefinieerd uiterlijk zonder vochtretentie.",
    usage: "Oraal, met of zonder voedsel. Verspreid over de dag voor stabiele bloedspiegels",
    dosage: "30-50 mg per dag voor mannen, verdeeld over 2-3 doses. Cyclus van 6-8 weken.",
    benefits: [
      "Droge, harde spiergroei",
      "Geen aromatisatie naar oestrogeen",
      "Verhoogde vascularity en definitie",
      "Verbeterde atletische prestaties",
      "Geen vochtretentie",
      "Goede kracht zonder massa"
    ],
    warnings: [
      "Hepatotoxisch - gebruik leverondersteuning",
      "Kan gewrichten uitdrogen",
      "Negatieve impact op cholesterol",
      "Niet langer dan 8 weken gebruiken",
      "Veel water drinken",
      "Post Cycle Therapy aanbevolen"
    ],
    ingredients: "Stanozolol 10mg per tablet, microkristallijne cellulose, magnesiumstearaat, stearinezuur"
  },
  {
    id: "tura",
    name: "Tura",
    chemicalName: "Turinabol",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 40.99,
    image: "/attached_assets/image_1762051320696.png",
    description: "Tura (Turinabol/Chlorodehydromethyltestosterone) is een mild oraal steroïde dat kwalitatieve, droge spiergroei bevordert zonder vochtretentie. Vaak beschouwd als een mildere versie van Dianabol.",
    usage: "Oraal, bij voorkeur met voedsel",
    dosage: "40-60 mg per dag, verdeeld over 2-3 doses. Cycli van 6-8 weken.",
    benefits: [
      "Gestage, kwalitatieve spiergroei",
      "Geen aromatisatie",
      "Milde bijwerkingen",
      "Goede kracht toename",
      "Geen vochtretentie",
      "Geschikt voor langere cycli"
    ],
    warnings: [
      "Hepatotoxisch - leverondersteuning nodig",
      "Kan cholesterol negatief beïnvloeden",
      "Onderdrukt natuurlijke testosteron",
      "Maximum 8 weken per cyclus",
      "Post Cycle Therapy noodzakelijk",
      "Relatief duur vergeleken met Dianabol"
    ],
    ingredients: "Chlorodehydromethyltestosterone (Turinabol) 10mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  {
    id: "oxa",
    name: "Oxa",
    chemicalName: "Oxandrolone",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 61.50,
    image: "/attached_assets/image_1762051320696.png",
    description: "Oxa (Oxandrolone/Anavar) is een premium mild steroïde dat zeer gewaardeerd wordt om zijn veiligheid en effectiviteit. Uitstekend voor cutting, kracht en geschikt voor zowel mannen als vrouwen.",
    usage: "Oraal, verdeeld over de dag met voedsel",
    dosage: "40-80 mg per dag voor mannen, 10-20 mg voor vrouwen. Cycli van 6-8 weken.",
    benefits: [
      "Zeer veilig met milde bijwerkingen",
      "Droge spiergroei en vetverlies",
      "Geen aromatisatie",
      "Geschikt voor vrouwen in lage doses",
      "Verbeterde kracht",
      "Behoud van spiermassa tijdens cutting"
    ],
    warnings: [
      "Relatief duur",
      "Kan cholesterol beïnvloeden",
      "Milde hepatotoxiciteit",
      "Veelal vervalst - controleer bron",
      "Post Cycle Therapy aanbevolen",
      "Leverwaarden monitoren"
    ],
    ingredients: "Oxandrolone 10mg per tablet, microkristallijne cellulose, lactose, magnesiumstearaat"
  },
  {
    id: "anapolon",
    name: "Anapolon",
    chemicalName: "Oxymetholone",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "50 mg/tab",
    quantity: "100 tabletten",
    priceEur: 58.07,
    image: "/attached_assets/image_1762051320696.png",
    description: "Anapolon (Oxymetholone/Anadrol) is een van de krachtigste orale steroïden voor snelle en extreme massa-opbouw. Dramatische resultaten in korte tijd, maar met significante bijwerkingen.",
    usage: "Oraal, met voedsel om maagklachten te verminderen",
    dosage: "50-100 mg per dag. Maximum 4-6 weken vanwege hepatotoxiciteit.",
    benefits: [
      "Extreme massa-opbouw in korte tijd",
      "Dramatische krachttoename binnen dagen",
      "Verhoogde rode bloedcelproductie",
      "Verbeterde eetlust",
      "Snelle zichtbare resultaten",
      "Zeer effectief voor kickstart van cycli"
    ],
    warnings: [
      "Zeer hepatotoxisch - leverondersteuning essentieel",
      "Significante vochtretentie",
      "Kan bloeddruk sterk verhogen",
      "Oestrogene effecten zonder aromatisatie",
      "Niet langer dan 6 weken gebruiken",
      "Alleen voor ervaren gebruikers"
    ],
    ingredients: "Oxymetholone 50mg per tablet, microkristallijne cellulose, lactose, magnesiumstearaat, povidon"
  },
  {
    id: "yohimbina",
    name: "Yohimbina",
    chemicalName: "Yohimbine HCl",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 37.59,
    image: "/attached_assets/image_1762051320696.png",
    description: "Yohimbina (Yohimbine HCl) is een natuurlijke alfa-2 adrenerge antagonist dat helpt bij vetverlies, vooral stubborn fat. Ook gebruikt voor verhoogd libido en betere doorbloeding.",
    usage: "Oraal, op nuchtere maag voor optimale resultaten",
    dosage: "5-20 mg per dag, opgebouwd vanaf lage dosis. Neem voor cardio voor maximaal vetverbrandend effect.",
    benefits: [
      "Verhoogd vetverbranding, vooral stubborn fat",
      "Verbeterd libido en seksuele functie",
      "Verhoogde alertheid en focus",
      "Verbeterde doorbloeding",
      "Kan helpen bij erectiele disfunctie",
      "Synergistisch met cafeïne"
    ],
    warnings: [
      "Kan angst verhogen bij gevoelige personen",
      "Niet gebruiken met antidepressiva",
      "Kan bloeddruk beïnvloeden",
      "Start met lage dosis om tolerantie te testen",
      "Niet voor mensen met hartproblemen",
      "Neem niet 's avonds - kan slaap verstoren"
    ],
    ingredients: "Yohimbine HCl 10mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  {
    id: "sr9011",
    name: "SR9011",
    chemicalName: "SR9011 (Rev-ErbA Agonist)",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "5 mg/tab",
    quantity: "100 tabletten",
    priceEur: 47.82,
    image: "/attached_assets/image_1762051320696.png",
    description: "SR9011 is een Rev-ErbA agonist die het metabolisme verhoogt en de circadiaanse ritmes moduleert. Verhoogt uithoudingsvermogen, vetverbranding en energieniveaus zonder stimulerende effecten.",
    usage: "Oraal, verdeeld over meerdere doses door de dag",
    dosage: "10-20 mg per dag, verdeeld over 3-4 doses vanwege korte halfwaardetijd.",
    benefits: [
      "Verhoogd metabolisme en vetverbranding",
      "Verbeterd uithoudingsvermogen",
      "Verhoogde energieniveaus",
      "Verbeterde cholesterol waarden",
      "Ontstekingsremmende eigenschappen",
      "Geen stimulerende bijwerkingen"
    ],
    warnings: [
      "Onderzoekschemicalie - langetermijneffecten onbekend",
      "Korte halfwaardetijd - frequente dosering nodig",
      "Beperkte menselijke studies",
      "Kan slaappatroon beïnvloeden",
      "Niet voor competitie gebruik",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "SR9011 5mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  {
    id: "gw",
    name: "GW",
    chemicalName: "GW501516 (Cardarine)",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 51.24,
    image: "/attached_assets/image_1762051320696.png",
    description: "GW501516 (Cardarine) is een PPAR-delta agonist die uithoudingsvermogen dramatisch verhoogt en vetverbranding bevordert. Zeer populair voor cutting en atletische prestaties.",
    usage: "Oraal, 1-2 keer per dag",
    dosage: "10-20 mg per dag. Cyclus van 8-12 weken.",
    benefits: [
      "Dramatisch verhoogd uithoudingsvermogen",
      "Versnelde vetverbranding",
      "Verbeterde VO2 max",
      "Geen onderdrukking van testosteron",
      "Verbeterde cholesterol waarden",
      "Synergistisch met andere verbindingen"
    ],
    warnings: [
      "Onderzoekschemicalie - voor onderzoek alleen",
      "Langetermijnveiligheid bij mensen niet vastgesteld",
      "Dierenstudies toonden verhoogd kankerrisico bij zeer hoge doses",
      "Niet voor langdurig gebruik",
      "Niet voor competitie (getest)",
      "Raadpleeg medisch advies"
    ],
    ingredients: "GW501516 (Cardarine) 10mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  {
    id: "mk677",
    name: "MK677",
    chemicalName: "Ibutamoren (MK-677)",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 54.66,
    image: "/attached_assets/image_1762051320696.png",
    description: "MK677 (Ibutamoren) is een oraal actieve groeihormoon secretagogue die GH en IGF-1 niveaus verhoogt. Bevordert spiergroei, herstel, slaapkwaliteit en heeft anti-aging effecten.",
    usage: "Oraal, 1 keer per dag, bij voorkeur 's avonds",
    dosage: "10-25 mg per dag. Kan langdurig gebruikt worden (maanden).",
    benefits: [
      "Verhoogde GH en IGF-1 niveaus",
      "Verbeterde spiergroei en herstel",
      "Verbeterde slaapkwaliteit",
      "Verhoogde eetlust",
      "Anti-aging effecten",
      "Geen onderdrukking van testosteron"
    ],
    warnings: [
      "Kan bloedsuiker beïnvloeden - monitor bij diabetes",
      "Verhoogde eetlust kan gewichtstoename veroorzaken",
      "Mogelijk waterretentie in eerste weken",
      "Langdurig gebruik kan prolactine verhogen",
      "Kan lethargie veroorzaken overdag",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "Ibutamoren (MK-677) 10mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  {
    id: "ostarina",
    name: "Ostarina",
    chemicalName: "Ostarine (MK-2866)",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 44.42,
    image: "/attached_assets/image_1762051320696.png",
    description: "Ostarine (MK-2866) is de meest onderzochte en populaire SARM. Zeer effectief voor lean muscle mass opbouw, vetverlies en behoud van spiermassa tijdens cutting met minimale bijwerkingen.",
    usage: "Oraal, 1 keer per dag",
    dosage: "10-25 mg per dag. Cycli van 8-12 weken.",
    benefits: [
      "Lean muscle mass opbouw",
      "Vetverlies tijdens recomposition",
      "Verbeterd herstel",
      "Gewrichtsbeschermende eigenschappen",
      "Minimale onderdrukking van testosteron",
      "Goed onderzocht en betrouwbaar"
    ],
    warnings: [
      "Kan lichte testosteron onderdrukking veroorzaken",
      "Mini PCT aanbevolen na cyclus",
      "Alleen voor onderzoeksdoeleinden",
      "Verboden in competitie sport",
      "Bloedwaarden monitoren aanbevolen",
      "Niet voor vrouwen die zwanger zijn/willen worden"
    ],
    ingredients: "Ostarine (MK-2866) 10mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  {
    id: "sr9009",
    name: "SR9009",
    chemicalName: "SR9009 (Stenabolic)",
    category: "oral-sarms",
    brand: "MEDINA",
    concentration: "10 mg/tab",
    quantity: "100 tabletten",
    priceEur: 61.50,
    image: "/attached_assets/image_1762051320696.png",
    description: "SR9009 (Stenabolic) is een Rev-ErbA agonist die het metabolisme verhoogt, uithoudingsvermogen verbetert en vetverbranding bevordert door het beïnvloeden van circadiaanse ritmes en mitochondriale functie.",
    usage: "Oraal, verdeeld over 3-4 doses per dag vanwege korte halfwaardetijd",
    dosage: "20-30 mg per dag, verdeeld over 3-4 doses.",
    benefits: [
      "Dramatisch verhoogd uithoudingsvermogen",
      "Versneld metabolisme en vetverbranding",
      "Verbeterde mitochondriale functie",
      "Geen testosteron onderdrukking",
      "Verbeterde cholesterol en triglyceriden",
      "Verhoogde energieniveaus"
    ],
    warnings: [
      "Zeer korte halfwaardetijd - frequente dosering vereist",
      "Onderzoekschemicalie - beperkte menselijke data",
      "Orale bio-availability is laag",
      "Kan circadiaans ritme verstoren",
      "Alleen voor onderzoeksdoeleinden",
      "Niet voor langdurig gebruik zonder medisch toezicht"
    ],
    ingredients: "SR9009 (Stenabolic) 10mg per tablet, microkristallijne cellulose, magnesiumstearaat"
  },
  // Peptides (ENDOGENIC)
  {
    id: "bpc-157",
    name: "BPC 157",
    chemicalName: "Body Protection Compound-157",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "BPC-157 is een synthetisch peptide dat bestaat uit 15 aminozuren. Het is afgeleid van een beschermend maageiwit en staat bekend om zijn helende eigenschappen.",
    usage: "Subcutane of intramusculaire injectie, bij voorkeur nabij het te behandelen gebied",
    dosage: "200-500 mcg per dag, verdeeld over 1-2 injecties. Cyclus van 4-6 weken",
    benefits: [
      "Versneld herstel van pezen en ligamenten",
      "Bevordert wondgenezing",
      "Anti-inflammatoire eigenschappen",
      "Beschermt en geneest het maag-darmstelsel",
      "Ondersteunt vasculaire gezondheid",
      "Kan helpen bij gewrichtspijn"
    ],
    warnings: [
      "Alleen voor onderzoeksdoeleinden",
      "Raadpleeg een arts voor therapeutisch gebruik",
      "Bewaar in koelkast na reconstitutie",
      "Gebruik steriel water voor reconstitutie",
      "Niet geschikt tijdens zwangerschap"
    ],
    ingredients: "BPC-157 peptide 5mg, mannitol als stabilisator"
  },
  {
    id: "epithalon",
    name: "Epithalon",
    chemicalName: "Epitalon (Epithalamin)",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "10 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Epithalon is een tetrapeptide dat telomerase activeert en veroudering vertraagt. Bekend om zijn anti-aging eigenschappen, verbeterde slaap en mogelijke levensduurverlenging.",
    usage: "Subcutane injectie, cycli van 10-20 dagen",
    dosage: "5-10 mg verdeeld over 10-20 dagen. 2-4 cycli per jaar.",
    benefits: [
      "Anti-aging en verjongende effecten",
      "Activeert telomerase",
      "Verbeterde slaapkwaliteit en melatonine regulatie",
      "Mogelijke levensduurverlenging",
      "Verbeterde immuunfunctie",
      "Neuroprotectieve eigenschappen"
    ],
    warnings: [
      "Alleen voor onderzoeksdoeleinden",
      "Beperkte menselijke studies",
      "Langetermijneffecten niet volledig bekend",
      "Bewaar in koelkast na reconstitutie",
      "Gebruik steriel water",
      "Raadpleeg arts voor therapeutisch gebruik"
    ],
    ingredients: "Epitalon peptide 10mg, mannitol"
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    chemicalName: "Copper Peptide GHK-Cu",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "50 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "GHK-Cu is een koper peptide complex met krachtige regeneratieve eigenschappen voor huid, haar en weefselherstel. Bevordert collageen productie en heeft anti-aging effecten.",
    usage: "Subcutane injectie of topische toepassing na reconstitutie",
    dosage: "1-3 mg per dag subcutaan, of topisch gebruik volgens voorkeur.",
    benefits: [
      "Krachtige huidverjonging en anti-aging",
      "Stimuleert collageen en elastine productie",
      "Bevordert wondgenezing",
      "Verbetert haargroei",
      "Anti-inflammatoire eigenschappen",
      "Antioxidant effecten"
    ],
    warnings: [
      "Kan huidirritatie veroorzaken bij topisch gebruik",
      "Start met lage concentratie",
      "Bewaar in koelkast na menging",
      "Bescherm tegen licht",
      "Alleen voor cosmetisch/onderzoek gebruik",
      "Niet voor interne consumptie in hoge doses"
    ],
    ingredients: "GHK-Cu (Copper Peptide) 50mg, mannitol"
  },
  {
    id: "kisspeptin",
    name: "Kisspeptin",
    chemicalName: "Kisspeptin-10",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Kisspeptin-10 is een neuropeptide dat een cruciale rol speelt in de reproductieve hormoonregulatie. Stimuleert GnRH en kan libido, vruchtbaarheid en hormonale gezondheid verbeteren.",
    usage: "Subcutane injectie",
    dosage: "1-2 mcg per kg lichaamsgewicht, 1-2 keer per week.",
    benefits: [
      "Verbetert libido en seksuele functie",
      "Stimuleert GnRH en LH afgifte",
      "Ondersteunt vruchtbaarheid",
      "Kan testosteron niveaus verhogen",
      "Verbetert hormonale balans",
      "Onderzoek toont stemmingsverbetering"
    ],
    warnings: [
      "Onderzoekspeptide - beperkte menselijke data",
      "Kan hormoonspiegels beïnvloeden",
      "Niet voor zwangere vrouwen",
      "Monitor hormonale waarden",
      "Bewaar gekoeld na reconstitutie",
      "Raadpleeg medisch advies"
    ],
    ingredients: "Kisspeptin-10 peptide 5mg, mannitol"
  },
  {
    id: "ghrp-2",
    name: "GHRP-2",
    chemicalName: "Growth Hormone Releasing Peptide-2",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "GHRP-2 is een krachtige groeihormoon releasing peptide die GH pulsatiel verhoogt. Bevordert spiergroei, vetverlies, herstel en anti-aging met verhoogde honger als bijeffect.",
    usage: "Subcutane injectie, 2-3 keer per dag op lege maag",
    dosage: "100-300 mcg per injectie, 2-3 keer per dag.",
    benefits: [
      "Verhoogde groeihormoon afgifte",
      "Verbeterde spiergroei en herstel",
      "Versneld vetverlies",
      "Verbeterde slaapkwaliteit",
      "Anti-aging effecten",
      "Verhoogde IGF-1 niveaus"
    ],
    warnings: [
      "Kan significant hongergevoel veroorzaken",
      "Verhoogt cortisol en prolactine licht",
      "Neem op lege maag voor beste resultaten",
      "Bewaar gekoeld na reconstitutie",
      "Gebruik binnen 30 dagen na menging",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "GHRP-2 peptide 5mg, mannitol"
  },
  {
    id: "ghrp-6",
    name: "GHRP-6",
    chemicalName: "Growth Hormone Releasing Peptide-6",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "GHRP-6 is een eerste generatie groeihormoon releasing peptide met sterke GH stimulerende effecten. Bekend om extreme hongertoename, wat nuttig kan zijn voor massa-opbouw.",
    usage: "Subcutane injectie, 2-3 keer per dag",
    dosage: "100-300 mcg per injectie, op lege maag.",
    benefits: [
      "Krachtige GH afgifte stimulatie",
      "Extreme toename in eetlust",
      "Verbeterde spiergroei",
      "Versneld herstel",
      "Vetverlies",
      "Goedkoper dan andere GH peptiden"
    ],
    warnings: [
      "Zeer sterke hongertoename - moeilijk te controleren",
      "Verhoogt cortisol en prolactine meer dan GHRP-2",
      "Kan waterretentie veroorzaken",
      "Neem op lege maag",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "GHRP-6 peptide 5mg, mannitol"
  },
  {
    id: "fragment",
    name: "Fragment",
    chemicalName: "GH Fragment 176-191",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 40.99,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "HGH Fragment 176-191 is een gemodificeerd fragment van groeihormoon specifiek voor vetverlies. Bevordert lipolyse zonder de anabole effecten of bloedsuikerverhoging van volledig GH.",
    usage: "Subcutane injectie, bij voorkeur voor cardio",
    dosage: "250-500 mcg per dag, verdeeld over 1-2 injecties op lege maag.",
    benefits: [
      "Krachtige vetverbranding zonder spiergroei",
      "Geen invloed op bloedsuiker of insuline",
      "Geen GH-gerelateerde bijwerkingen",
      "Lokale vetverlies mogelijk",
      "Behoud van spiermassa tijdens cutting",
      "Geschikt voor langdurig gebruik"
    ],
    warnings: [
      "Alleen effectief op lege maag",
      "Resultaten zijn subtiel en geleidelijk",
      "Moet gecombineerd worden met dieet",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden",
      "Geen vervanging voor GH bij massa-opbouw"
    ],
    ingredients: "HGH Fragment 176-191 peptide 5mg, mannitol"
  },
  {
    id: "melanotan-ii",
    name: "Melanotan II",
    chemicalName: "Melanotan II",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "10 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Melanotan II is een synthetisch peptide dat melanine productie stimuleert voor een natuurlijke bruine teint. Ook bekend om zijn libido-verhogende en eetlust onderdrukkende effecten.",
    usage: "Subcutane injectie, dagelijks of om de dag",
    dosage: "250-500 mcg per dag totdat gewenste bruining bereikt is, daarna onderhoudsdosis van 250 mcg 2-3x per week.",
    benefits: [
      "Natuurlijke bruining zonder zon",
      "Bescherming tegen UV schade",
      "Verhoogd libido",
      "Eetlust onderdrukking",
      "Langdurige bruining",
      "Geschikt voor mensen met moeite bruinen"
    ],
    warnings: [
      "Kan misselijkheid veroorzaken - start laag",
      "Verhoogd risico op moedervlekken/sproeten",
      "Niet als vervanging voor zonbescherming",
      "Kan erecties veroorzaken (bij mannen)",
      "Bewaar gekoeld en beschermd tegen licht",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "Melanotan II peptide 10mg, mannitol"
  },
  {
    id: "selank",
    name: "Selank",
    chemicalName: "Selank Peptide",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Selank is een anxiolytisch en noötropisch peptide dat angst vermindert, focus verbetert en de stemming verhoogt zonder sedatie. Ontwikkeld in Rusland voor stress en angstreductie.",
    usage: "Subcutane injectie of intranasale toediening",
    dosage: "250-500 mcg per dag, voor 2-4 weken cycli.",
    benefits: [
      "Vermindert angst en stress",
      "Verbeterde focus en concentratie",
      "Verhoogde stemming",
      "Geen sedatie of afhankelijkheid",
      "Verbeterde leerprestaties",
      "Immuunmodulerende effecten"
    ],
    warnings: [
      "Onderzoekspeptide",
      "Kan hoofdpijn veroorzaken bij hoge doses",
      "Intranasale vorm heeft lagere bio-beschikbaarheid",
      "Bewaar gekoeld na reconstitutie",
      "Niet combineren met andere anxiolytica zonder advies",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "Selank peptide 5mg, mannitol"
  },
  {
    id: "semax",
    name: "Semax",
    chemicalName: "Semax Peptide",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 58.07,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Semax is een krachtig noötropisch peptide dat cognitieve functie, geheugen en focus dramatisch verbetert. Oorspronkelijk ontwikkeld in Rusland voor neurologische bescherming en cognitieve verbetering.",
    usage: "Subcutane injectie of intranasale toediening",
    dosage: "300-600 mcg per dag, voor 2-4 weken cycli.",
    benefits: [
      "Dramatisch verbeterde focus en concentratie",
      "Verbeterd geheugen en leren",
      "Neuroprotectieve eigenschappen",
      "Verhoogde BDNF productie",
      "Verbeterde stemming en motivatie",
      "Geen stimulerende bijwerkingen"
    ],
    warnings: [
      "Kan te stimulerend zijn voor sommigen",
      "Intranasale vorm effectiever maar moeilijker te doseren",
      "Bewaar gekoeld na reconstitutie",
      "Start met lage dosis",
      "Alleen voor onderzoeksdoeleinden",
      "Niet voor mensen met epilepsie zonder medisch advies"
    ],
    ingredients: "Semax peptide 5mg, mannitol"
  },
  {
    id: "tb-500",
    name: "TB-500",
    chemicalName: "Thymosin Beta-4",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "TB-500 (Thymosin Beta-4) is een krachtig regeneratief peptide dat weefselherstel, flexibiliteit en herstel van blessures bevordert. Zeer effectief voor pezen, ligamenten en spieren.",
    usage: "Subcutane of intramusculaire injectie",
    dosage: "2-2.5 mg, 2 keer per week voor 4-6 weken, daarna onderhoudsdosis.",
    benefits: [
      "Versneld herstel van blessures",
      "Verbeterde flexibiliteit",
      "Pees en ligament herstel",
      "Anti-inflammatoire effecten",
      "Bevordert nieuwe bloedvat formatie",
      "Beschermt en herstelt hartweefsel"
    ],
    warnings: [
      "Onderzoekspeptide",
      "Kan bestaande kankers verergeren - niet gebruiken bij kanker",
      "Bewaar gekoeld na reconstitutie",
      "Loading fase gevolgd door onderhoud",
      "Resultaten zijn gradueel over weken",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "TB-500 (Thymosin Beta-4) peptide 5mg, mannitol"
  },
  {
    id: "cjc-bez-dac",
    name: "CJC bez DAC",
    chemicalName: "CJC-1295 zonder DAC",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "CJC-1295 zonder DAC (Mod GRF 1-29) is een GHRH analoog met korte halfwaardetijd. Ideaal voor pulsatiele GH afgifte wanneer gecombineerd met GHRP's voor optimale resultaten.",
    usage: "Subcutane injectie, 2-3 keer per dag",
    dosage: "100-200 mcg per injectie, gecombineerd met GHRP voor synergistisch effect.",
    benefits: [
      "Verhoogde groeihormoon afgifte",
      "Synergistisch met GHRP's",
      "Verbeterde spiergroei en herstel",
      "Vetverlies",
      "Betere slaapkwaliteit",
      "Flexibele dosering schema's"
    ],
    warnings: [
      "Beste resultaten in combinatie met GHRP",
      "Neem op lege maag",
      "Korte halfwaardetijd - meerdere doses per dag",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden",
      "Niet verwarren met CJC-1295 met DAC"
    ],
    ingredients: "CJC-1295 (Mod GRF 1-29) peptide 5mg, mannitol"
  },
  {
    id: "cjc-z-dac",
    name: "CJC z DAC",
    chemicalName: "CJC-1295 met DAC",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 40.99,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "CJC-1295 met DAC heeft een Drug Affinity Complex voor langdurige GH verhoging. Biedt consistente groeihormoon afgifte gedurende dagen met minder frequente injecties.",
    usage: "Subcutane injectie, 1-2 keer per week",
    dosage: "1-2 mg per week, verdeeld over 1-2 injecties.",
    benefits: [
      "Langdurige GH verhoging (tot 1 week)",
      "Minder frequente injecties",
      "Consistente groeihormoon niveaus",
      "Verbeterde spiergroei en herstel",
      "Vetverlies",
      "Gemakkelijker protocol dan zonder DAC"
    ],
    warnings: [
      "Kan natuurlijke GH pulsatie verstoren",
      "Minder flexibel dan versie zonder DAC",
      "Mogelijk verhoogde prolactine",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden",
      "Sommigen prefereren versie zonder DAC"
    ],
    ingredients: "CJC-1295 met DAC peptide 5mg, mannitol"
  },
  {
    id: "pt-141",
    name: "PT-141",
    chemicalName: "Bremelanotide (PT-141)",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "10 mg",
    priceEur: 51.24,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "PT-141 (Bremelanotide) is een krachtig peptide specifiek voor het verhogen van seksuele opwinding en libido bij beide geslachten. Werkt via het centrale zenuwstelsel, niet vasculair.",
    usage: "Subcutane injectie of intranasale toediening",
    dosage: "1-2 mg, 30-60 minuten voor seksuele activiteit. Maximum 2x per week.",
    benefits: [
      "Krachtige libido verhoging",
      "Verbeterde seksuele opwinding",
      "Effectief voor beide geslachten",
      "Werkt via hersenen, niet vasculair",
      "Kan helpen bij seksuele dysfunctie",
      "Langdurig effect (tot 72 uur)"
    ],
    warnings: [
      "Kan misselijkheid veroorzaken - start laag",
      "Mogelijk gezichtsroodheid",
      "Niet meer dan 2x per week gebruiken",
      "Kan bloeddruk verhogen",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden"
    ],
    ingredients: "Bremelanotide (PT-141) peptide 10mg, mannitol"
  },
  {
    id: "peg-mgf",
    name: "PEG-MGF",
    chemicalName: "PEGylated Mechano Growth Factor",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 51.24,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "PEG-MGF is een gepegyleerde vorm van Mechano Growth Factor met verlengde halfwaardetijd. Stimuleert nieuwe spiervezelgroei (hyperplasia) en herstel, vooral post-workout.",
    usage: "Subcutane of intramusculaire injectie, post-workout of om de dag",
    dosage: "200-400 mcg per injectie, 3-5 keer per week.",
    benefits: [
      "Stimuleert nieuwe spiervezel creatie",
      "Verbeterd herstel post-workout",
      "Langere halfwaardetijd dan reguliere MGF",
      "Lokale spiergroei mogelijk",
      "Satelliet cel activatie",
      "Synergistisch met IGF-1"
    ],
    warnings: [
      "Relatief duur peptide",
      "Beste resultaten direct post-workout",
      "Beperkte menselijke studies",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden",
      "Resultaten variëren per individu"
    ],
    ingredients: "PEG-MGF peptide 5mg, mannitol"
  },
  {
    id: "oksytocyna",
    name: "Oksytocyna",
    chemicalName: "Oxytocin",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Oxytocin is het 'liefdes- en bonding hormoon' dat sociale verbindingen, vertrouwen en welzijn bevordert. Ook gebruikt voor herstel, ontstekingsremming en stressreductie.",
    usage: "Subcutane injectie of intranasale spray",
    dosage: "100-200 IU per dag, bij voorkeur intranasaal of subcutaan.",
    benefits: [
      "Verbeterde sociale verbindingen en empathie",
      "Stressreductie en angstvermindering",
      "Verbeterde stemming en welzijn",
      "Anti-inflammatoire eigenschappen",
      "Verbeterd herstel",
      "Kan slaapkwaliteit verbeteren"
    ],
    warnings: [
      "Intranasale toediening vaak effectiever",
      "Kan emotionele gevoeligheid verhogen",
      "Bewaar gekoeld na reconstitutie",
      "Korte halfwaardetijd",
      "Alleen voor onderzoeksdoeleinden",
      "Niet voor zwangere vrouwen"
    ],
    ingredients: "Oxytocin peptide 5mg, mannitol"
  },
  {
    id: "dsip",
    name: "DSIP",
    chemicalName: "Delta Sleep-Inducing Peptide",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 40.99,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "DSIP is een neuropeptide dat diepe slaap bevordert, stress vermindert en herstel verbetert. Helpt bij het reguleren van slaap-waak cycli en hormoonbalans.",
    usage: "Subcutane injectie, 's avonds voor het slapen",
    dosage: "100-300 mcg per dag, 30-60 minuten voor bedtijd.",
    benefits: [
      "Verbeterde slaapkwaliteit en diepe slaap",
      "Stressreductie",
      "Verbeterd herstel",
      "Mogelijke pijnverlichting",
      "Regulatie van circadiaans ritme",
      "Antioxidant eigenschappen"
    ],
    warnings: [
      "Onderzoekspeptide met beperkte data",
      "Kan slaperigheid overdag veroorzaken",
      "Start met lage dosis",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden",
      "Niet combineren met sterke slaapmiddelen"
    ],
    ingredients: "DSIP peptide 5mg, mannitol"
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    chemicalName: "Ipamorelin",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 37.59,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Ipamorelin is een zeer selectieve GHRP die groeihormoon verhoogt zonder cortisol of prolactine te beïnvloeden. De 'schoonste' en meest gewilde GHRP met minimale bijwerkingen.",
    usage: "Subcutane injectie, 2-3 keer per dag op lege maag",
    dosage: "200-300 mcg per injectie, 2-3 keer per dag.",
    benefits: [
      "Selectieve GH verhoging zonder bijwerkingen",
      "Geen cortisol of prolactine verhoging",
      "Geen honger toename (vs GHRP-6)",
      "Verbeterde spiergroei en vetverlies",
      "Beter herstel en slaap",
      "Zeer veilig profiel"
    ],
    warnings: [
      "Duurder dan andere GHRP's",
      "Neem op lege maag voor beste resultaten",
      "Beste resultaten met CJC-1295",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden",
      "Meest subtiele effecten van GHRP's"
    ],
    ingredients: "Ipamorelin peptide 5mg, mannitol"
  },
  {
    id: "thymosin-alpha",
    name: "Thymosin Alpha",
    chemicalName: "Thymosin Alpha-1",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 88.83,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Thymosin Alpha-1 is een krachtig immuunmodulator peptide dat de immuunfunctie versterkt, infecties bestrijdt en ontstekingen vermindert. Zeer waardevol voor algemene gezondheid en herstel.",
    usage: "Subcutane injectie",
    dosage: "1.6-3.2 mg, 2-3 keer per week voor immuunondersteuning.",
    benefits: [
      "Krachtige immuunsysteem versterking",
      "Antivirale en antibacteriële eigenschappen",
      "Ontstekingsremming",
      "Verbeterde T-cel functie",
      "Kan helpen bij chronische infecties",
      "Algemene gezondheidsverbetering"
    ],
    warnings: [
      "Premium peptide - relatief duur",
      "Kan mild griepachtige symptomen veroorzaken initieel",
      "Bewaar gekoeld na reconstitutie",
      "Langdurig gebruik mogelijk voor optimale resultaten",
      "Alleen voor onderzoeksdoeleinden",
      "Raadpleeg arts bij auto-immuun aandoeningen"
    ],
    ingredients: "Thymosin Alpha-1 peptide 5mg, mannitol"
  },
  {
    id: "adamax",
    name: "Adamax",
    chemicalName: "Adipotide (FTPP)",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 64.91,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Adipotide (FTPP) is een experimenteel peptide dat specifiek vetweefsel aanvalt door bloedtoevoer naar vetcellen te verminderen. Zeer krachtig maar met significante risico's.",
    usage: "Subcutane injectie",
    dosage: "250-500 mcg per dag. Start met lage dosis vanwege kracht.",
    benefits: [
      "Zeer krachtige vetreductie",
      "Specifiek gericht op vetweefsel",
      "Kan stubborn fat aanpakken",
      "Dramatische resultaten mogelijk",
      "Systemische vetverlies",
      "Uniek werkingsmechanisme"
    ],
    warnings: [
      "ZEER experimenteel - hoog risico",
      "Kan nieren belasten - veel water drinken",
      "Kan dehydratie veroorzaken",
      "Alleen voor zeer ervaren gebruikers",
      "Medisch toezicht sterk aanbevolen",
      "Alleen voor onderzoeksdoeleinden - gebruik op eigen risico"
    ],
    ingredients: "Adipotide (FTPP) peptide 5mg, mannitol"
  },
  {
    id: "cortagen",
    name: "Cortagen",
    chemicalName: "Cortagen Peptide",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "5 mg",
    priceEur: 64.91,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "Cortagen is een bioregulator peptide specifiek voor het immuunsysteem en de thymus klier. Helpt bij het herstellen van immuunfunctie en het vertragen van immuunveroudering.",
    usage: "Subcutane injectie of oraal (minder effectief)",
    dosage: "10-20 mg per cyclus, verdeeld over 10-20 dagen. 2-3 cycli per jaar.",
    benefits: [
      "Herstel van immuunfunctie",
      "Verjonging van thymus klier",
      "Verbeterde T-cel productie",
      "Anti-aging voor immuunsysteem",
      "Beschermt tegen infecties",
      "Algemene gezondheidsverbetering"
    ],
    warnings: [
      "Bioregulator met beperkte westerse studies",
      "Oorspronkelijk uit Russisch onderzoek",
      "Cycli aanbevolen, niet continu gebruik",
      "Bewaar gekoeld na reconstitutie",
      "Alleen voor onderzoeksdoeleinden",
      "Effecten zijn subtiel en cumulatief"
    ],
    ingredients: "Cortagen bioregulator peptide 5mg, mannitol"
  },
  {
    id: "igf-1-oxymedin",
    name: "IGF-1 Oxymedin",
    chemicalName: "Insulin-like Growth Factor-1",
    category: "peptides",
    brand: "ENDOGENIC",
    quantity: "1 mg",
    priceEur: 290.38,
    image: "/attached_assets/Endogenic peptydy_1762048163392.png",
    description: "IGF-1 (Insulin-like Growth Factor-1) is een van de krachtigste anabole hormonen voor spiergroei en herstel. Het is de primaire mediator van groeihormoon effecten en zeer effectief voor hyperplasia.",
    usage: "Subcutane of intramusculaire injectie, bij voorkeur post-workout",
    dosage: "40-80 mcg per dag, verdeeld over 1-2 injecties. Cycli van 4-6 weken.",
    benefits: [
      "Zeer krachtige anabole effecten",
      "Nieuwe spiervezel creatie (hyperplasia)",
      "Verbeterd herstel en recuperatie",
      "Verhoogde eiwitynthese",
      "Neuroprotectieve eigenschappen",
      "Kan lokaal toegepast worden voor specifieke spieren"
    ],
    warnings: [
      "Zeer duur en krachtig peptide",
      "Kan bloedsuiker verlagen - monitor dit",
      "Korte halfwaardetijd - dagelijkse injecties",
      "Risico op orgaangroei bij misbruik",
      "Bewaar in vriezer, koelkast na reconstitutie",
      "Alleen voor zeer ervaren gebruikers - medisch toezicht"
    ],
    ingredients: "IGF-1 LR3 of IGF-1 DES peptide 1mg, mannitol (specifieke variant kan variëren)"
  },
];

export const categoryNames: Record<string, string> = {
  "injectable-steroids": "Injecteerbare Steroïden",
  "hcg": "HCG & Gonadotropinen",
  "oral-sarms": "Tabletten & SARMs",
  "peptides": "Peptiden & Hormonen",
};

export const categoryIcons: Record<string, string> = {
  "injectable-steroids": "💉",
  "hcg": "🧪",
  "oral-sarms": "💊",
  "peptides": "🧬",
};
