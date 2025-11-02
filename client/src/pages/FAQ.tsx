import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, HelpCircle, Package, ShieldCheck, Truck, CreditCard, FileText, Users } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [, setLocation] = useLocation();
  const [cartItems] = useState([]);

  const faqCategories = [
    {
      title: "Algemene Vragen",
      icon: HelpCircle,
      questions: [
        {
          question: "Wat is MEDINA Pharma Labs?",
          answer:
            "MEDINA Pharma Labs is een toonaangevend farmaceutisch onderzoeks- en productiebedrijf gevestigd in Warschau, Polen. Opgericht in 2014 door Dr. Elias Medina, zijn wij gespecialiseerd in endocrine modulatie, tissue engineering en cognitive bioenhancement. Onze missie is om het menselijk lichaam te helpen herstellen en optimaliseren met precisie, discipline en wetenschap.",
        },
        {
          question: "Voor wie zijn jullie producten bedoeld?",
          answer:
            "Onze producten zijn uitsluitend bedoeld voor professionele onderzoeksfaciliteiten, erkende laboratoria en geselecteerde onderzoeksinstellingen. Wij leveren alleen aan geregistreerde partners met de juiste certificering en documentatie. Alle producten zijn bedoeld voor laboratoriumonderzoek en onderwijsdoeleinden.",
        },
        {
          question: "Zijn jullie producten legaal?",
          answer:
            "Al onze producten worden geproduceerd volgens strikte Europese richtlijnen voor analytische zuiverheid en veiligheid. Ze zijn bedoeld voor onderzoeksdoeleinden binnen wettelijke kaders. Het is de verantwoordelijkheid van de koper om te zorgen dat het gebruik van onze producten voldoet aan de lokale wet- en regelgeving in hun jurisdictie.",
        },
        {
          question: "Waar worden jullie producten gemaakt?",
          answer:
            "Al onze producten worden geproduceerd in onze eigen laboratoria in Warschau, Polen. Onze faciliteiten voldoen aan EU-richtlijnen voor farmaceutische productie, met volledige batch-traceability en kwaliteitscontrole bij elke stap van het proces.",
        },
      ],
    },
    {
      title: "Producten & Kwaliteit",
      icon: Package,
      questions: [
        {
          question: "Hoe weet ik dat jullie producten zuiver zijn?",
          answer:
            "Elk product wordt getest en chemisch geverifieerd voordat het ons laboratorium verlaat. Wij bieden volledige transparantie: wat op het etiket staat, is wat in de flacon zit. Op verzoek kunnen wij Certificate of Analysis (CoA) documenten leveren die de zuiverheid en samenstelling van elke batch bevestigen.",
        },
        {
          question: "Wat is de ENDOGENIC Series?",
          answer:
            "De ENDOGENIC Series is ons vlaggenschipproductlijn — een reeks verbindingen ontworpen om het natuurlijke herstelproces van het lichaam te ondersteunen. Deze producten vertegenwoordigen het hart van ons onderzoek naar endocrine modulatie en fysiologisch herstel. Ze zijn uitsluitend bedoeld voor laboratoriumonderzoek.",
        },
        {
          question: "Hoe lang zijn jullie producten houdbaar?",
          answer:
            "De houdbaarheid varieert per product en staat vermeld op het etiket. Over het algemeen zijn onze producten 2-3 jaar houdbaar wanneer ze correct worden bewaard (koel, droog en uit de buurt van direct zonlicht). Voor optimale resultaten raden we aan producten binnen 12 maanden na opening te gebruiken.",
        },
        {
          question: "Leveren jullie certificaten bij de producten?",
          answer:
            "Ja, elk product wordt geleverd met een Certificate of Analysis (CoA) dat de chemische samenstelling, zuiverheid en batch-nummer documenteert. Voor institutionele klanten kunnen we ook aanvullende documentatie leveren zoals Material Safety Data Sheets (MSDS) en GMP-certificering.",
        },
      ],
    },
    {
      title: "Bestellen & Betalen",
      icon: CreditCard,
      questions: [
        {
          question: "Hoe plaats ik een bestelling?",
          answer:
            "Momenteel accepteren we alleen bestellingen van geregistreerde onderzoekspartners. Nieuwe klanten moeten eerst een verificatieproces doorlopen waarbij wij uw onderzoekscredentials en juridische status verifiëren. Neem contact op via research@medinapharmalabs.eu voor meer informatie over het registratieproces.",
        },
        {
          question: "Welke betaalmethoden accepteren jullie?",
          answer:
            "Wij accepteren bankoverschrijvingen (SEPA voor EU-klanten), cryptocurrency betalingen (Bitcoin, USDT) en voor grotere institutionele orders kunnen speciale betalingsregelingen worden getroffen. Alle prijzen zijn exclusief BTW en worden in EUR aangegeven.",
        },
        {
          question: "Is er een minimale bestelwaarde?",
          answer:
            "Voor reguliere orders geldt een minimale bestelwaarde van €250. Voor institutionele partners met een actief partnerschap kunnen aangepaste voorwaarden worden overeengekomen. Contacteer ons verkoopteam voor meer informatie.",
        },
        {
          question: "Kan ik een factuur krijgen?",
          answer:
            "Ja, alle orders worden automatisch voorzien van een officiële factuur die binnen 24 uur na betaling wordt verzonden. Voor institutionele klanten kunnen we facturen aanpassen aan specifieke administratieve vereisten.",
        },
      ],
    },
    {
      title: "Verzending & Levering",
      icon: Truck,
      questions: [
        {
          question: "Naar welke landen verzenden jullie?",
          answer:
            "Wij verzenden naar alle EU-landen en geselecteerde internationale markten. Voor landen buiten de EU is aanvullende documentatie vereist en moeten klanten zelf verantwoordelijk zijn voor import-vergunningen en douaneformaliteiten. Sommige landen staan op onze uitsluitingslijst vanwege regelgeving.",
        },
        {
          question: "Hoe lang duurt de verzending?",
          answer:
            "Binnen de EU: 3-5 werkdagen via express courier. Voor internationale verzendingen kan dit oplopen tot 7-14 werkdagen afhankelijk van de bestemming en douaneprocedures. Alle verzendingen worden getraceerd en discreet verpakt zonder externe branding.",
        },
        {
          question: "Hoe worden de producten verpakt?",
          answer:
            "Al onze producten worden discreet en veilig verpakt in neutrale dozen zonder externe indicatie van de inhoud of afzender. Temperatuurgevoelige producten worden verzonden met koelelementen of dry ice indien nodig. Elke zending bevat alle benodigde documentatie voor douanecontrole.",
        },
        {
          question: "Wat als mijn bestelling beschadigd aankomt?",
          answer:
            "In het zeldzame geval dat een product beschadigd arriveert, neem dan onmiddellijk contact met ons op (binnen 48 uur na ontvangst) met foto's van de schade. Wij zullen de situatie beoordelen en waar nodig een vervangende zending of terugbetaling regelen.",
        },
      ],
    },
    {
      title: "Veiligheid & Compliance",
      icon: ShieldCheck,
      questions: [
        {
          question: "Zijn jullie producten veilig?",
          answer:
            "Onze producten zijn bedoeld voor onderzoeksdoeleinden en moeten worden behandeld door gekwalificeerd personeel in gecontroleerde laboratoriumumgevingen. Wij leveren gedetailleerde veiligheidsinformatie en handleidingen bij elk product. Het is de verantwoordelijkheid van de gebruiker om alle veiligheidsprotocollen te volgen.",
        },
        {
          question: "Welke regelgeving volgen jullie?",
          answer:
            "MEDINA Pharma Labs voldoet aan alle relevante EU-regelgeving voor farmaceutische productie, inclusief Good Manufacturing Practice (GMP) richtlijnen. Onze laboratoria worden regelmatig geïnspecteerd en gecertificeerd. We onderhouden volledige traceerbaarheid van grondstoffen tot eindproduct.",
        },
        {
          question: "Hebben jullie dierproeven uitgevoerd?",
          answer:
            "Wij houden ons aan EU-regelgeving aangaande dierproeven en passen het 3R-principe toe (Replace, Reduce, Refine). Waar mogelijk gebruiken we alternatieve testmethoden zoals in-vitro studies en computermodellen. Alle noodzakelijke studies worden uitgevoerd door gecertificeerde externe laboratoria volgens strikte ethische protocollen.",
        },
        {
          question: "Hoe gaan jullie om met privacy?",
          answer:
            "Wij nemen privacy zeer serieus en voldoen volledig aan de GDPR. Alle klantgegevens worden versleuteld opgeslagen en worden nooit gedeeld met derden zonder expliciete toestemming. Bestellingen worden discreet verwerkt en verzonden zonder identificeerbare informatie over de inhoud.",
        },
      ],
    },
    {
      title: "Ondersteuning & Contact",
      icon: Users,
      questions: [
        {
          question: "Hoe kan ik contact opnemen met jullie?",
          answer:
            "Voor algemene vragen: research@medinapharmalabs.eu. Voor technische ondersteuning of productinformatie kunt u ons ook bereiken via onze website. Ons team reageert doorgaans binnen 24-48 uur op werkdagen. Voor dringende zaken kunt u dit in uw onderwerpregel vermelden.",
        },
        {
          question: "Bieden jullie technische ondersteuning?",
          answer:
            "Ja, ons team van wetenschappers en chemici is beschikbaar om technische vragen te beantwoorden over productgebruik, dosering voor onderzoek, en protocollen. Deze service is beschikbaar voor alle geregistreerde partners en kan worden bereikt via ons support-emailadres.",
        },
        {
          question: "Kan ik jullie laboratorium bezoeken?",
          answer:
            "Faciliteitsbezoeken zijn mogelijk voor erkende onderzoekspartners en potentiële institutionele klanten. Dit moet vooraf worden geregeld en vereist NDA-ondertekening en verificatie van credentials. Contacteer ons voor meer informatie over het plannen van een bezoek.",
        },
        {
          question: "Werken jullie samen met universiteiten?",
          answer:
            "Ja, wij werken samen met geselecteerde onderzoeksinstellingen, universiteiten en artsen in Europa en Azië. We ondersteunen academisch onderzoek met productdonaties, technische expertise en samenwerkingsverbanden. Voor samenwerkingsmogelijkheden kunt u contact opnemen met ons partnership team.",
        },
      ],
    },
    {
      title: "Retourneren & Garantie",
      icon: FileText,
      questions: [
        {
          question: "Kan ik een product retourneren?",
          answer:
            "Vanwege de aard van onze producten accepteren wij geen retouren op geopende of gebruikte producten om veiligheids- en kwaliteitsredenen. Ongeopende producten kunnen binnen 14 dagen na ontvangst worden geretourneerd voor terugbetaling, mits in originele staat en verpakking.",
        },
        {
          question: "Wat als ik het verkeerde product heb ontvangen?",
          answer:
            "In het zeldzame geval dat u het verkeerde product ontvangt, neem dan onmiddellijk contact met ons op. Wij zullen de situatie verifiëren en het correcte product zo snel mogelijk verzenden, inclusief ophaling van het verkeerd verzonden product indien nodig.",
        },
        {
          question: "Bieden jullie garantie op producten?",
          answer:
            "Wij garanderen de zuiverheid en kwaliteit van al onze producten zoals aangegeven op het Certificate of Analysis. Als een product niet voldoet aan de gespecificeerde kwaliteitsnormen, bieden wij volledige vervanging of terugbetaling aan. Claims moeten worden ondersteund door onafhankelijke laboratoriumtests.",
        },
        {
          question: "Wat is jullie terugbetalingsbeleid?",
          answer:
            "Voor ongeopende producten bieden wij volledige terugbetaling binnen 14 dagen na aankoop. Voor producten die niet voldoen aan kwaliteitsspecificaties (gedocumenteerd door onafhankelijke tests) bieden wij vervanging of volledige terugbetaling aan. Verzendkosten worden niet terugbetaald tenzij de fout aan ons te wijten is.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemCount={cartItems.length}
        onCartClick={() => {}}
        searchQuery=""
        onSearchChange={() => {}}
        selectedCategory="all"
        onCategoryChange={() => {}}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="container mx-auto px-6 lg:px-8">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="mb-8"
              data-testid="button-back-home"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar Home
            </Button>

            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <HelpCircle className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight" data-testid="heading-faq">
                Veelgestelde Vragen
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Vind antwoorden op de meest gestelde vragen over onze producten, diensten en bedrijfsvoering
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="space-y-16">
              {faqCategories.map((category, categoryIndex) => {
                const Icon = category.icon;
                return (
                  <div key={categoryIndex}>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold">{category.title}</h2>
                    </div>

                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <Accordion type="single" collapsible className="w-full">
                          {category.questions.map((faq, faqIndex) => (
                            <AccordionItem
                              key={`${categoryIndex}-${faqIndex}`}
                              value={`item-${categoryIndex}-${faqIndex}`}
                            >
                              <AccordionTrigger className="text-left hover:no-underline">
                                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                              </AccordionTrigger>
                              <AccordionContent>
                                <p className="text-muted-foreground leading-relaxed text-base pt-2">
                                  {faq.answer}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <Card className="shadow-xl border-primary/20">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Staat uw vraag er niet tussen?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Ons team staat klaar om al uw vragen te beantwoorden. Neem contact met ons op voor meer informatie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => window.location.href = "mailto:research@medinapharmalabs.eu"}
                    className="text-lg px-8"
                  >
                    Stuur ons een email
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => setLocation("/over-ons")}
                    className="text-lg px-8"
                  >
                    Meer over ons
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
