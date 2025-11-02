import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, PackageCheck, Clock, AlertCircle, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Retourneren() {
  const [, setLocation] = useLocation();
  const [cartItems] = useState([]);

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
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight" data-testid="heading-returns">
                Retourneren & Restitutie
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Uw tevredenheid en veiligheid staan bij ons voorop. Lees hieronder ons retourbeleid voor onderzoeksproducten.
              </p>
            </div>
          </div>
        </section>

        {/* Return Policy Overview */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Retourperiode</p>
                  <p className="font-semibold">14 dagen</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <PackageCheck className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Onbeschadigde verpakking</p>
                  <p className="font-semibold">Verzegeld</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <ShieldCheck className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Volledige restitutie</p>
                  <p className="font-semibold">Bij goedkeuring</p>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold mb-6">Algemene Voorwaarden</h2>
                <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                  Bij MEDINA Pharma Labs werken wij met farmaceutische onderzoeksproducten die aan strikte kwaliteits- en veiligheidseisen voldoen.
                  Vanwege de gevoelige aard van onze producten hanteren wij een duidelijk retourbeleid.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Retourrecht binnen 14 dagen</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        U heeft het recht om binnen 14 dagen na ontvangst van uw bestelling het product te retourneren, 
                        mits de verpakking ongeopend en verzegeld is. Dit geldt voor alle onderzoeksproducten die niet specifiek 
                        op maat zijn gemaakt.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Producten in originele staat</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Het product moet ongebruikt en in de originele, verzegelde verpakking worden geretourneerd. 
                        Producten waarvan de verzegeling is verbroken kunnen om veiligheids- en kwaliteitsredenen niet worden geaccepteerd.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Volledige restitutie</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Na goedkeuring van de retour ontvangt u binnen 14 werkdagen een volledige restitutie van het productbedrag. 
                        Eventuele verzendkosten voor retour zijn voor uw eigen rekening, tenzij het product defect of beschadigd was bij levering.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Special Conditions */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Uitzonderingen</h2>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-8 lg:p-12">
                <div className="flex gap-4 mb-6">
                  <AlertCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Producten die niet geretourneerd kunnen worden</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Vanwege de farmaceutische aard en veiligheidsvoorschriften gelden de volgende uitzonderingen:
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 ml-12">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Geopende producten:</strong> Producten waarvan de verzegeling is verbroken kunnen om hygiënische en veiligheidsredenen niet worden geretourneerd.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Op maat gemaakte formuleringen:</strong> Specifiek voor u bereide samenstellingen zijn uitgesloten van retour.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Producten met korte houdbaarheid:</strong> Peptiden en andere tijdgevoelige verbindingen die binnen 30 dagen vervallen kunnen niet worden geretourneerd.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span className="text-muted-foreground">
                      <strong>Sale artikelen:</strong> Producten aangeschaft tijdens speciale acties of uitverkoop zijn uitgesloten van retournering tenzij defect.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Defective Products */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Defecte of Beschadigde Producten</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg leading-relaxed mb-6">
                  Heeft u een product ontvangen dat defect of beschadigd is? Neem dan direct contact met ons op. 
                  Wij hanteren de volgende procedure:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Badge className="mb-2">Stap 1</Badge>
                    <h3 className="text-xl font-semibold">Melding binnen 48 uur</h3>
                    <p className="text-muted-foreground">
                      Meld het defect binnen 48 uur na ontvangst via e-mail met foto's van het product en de verpakking.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Badge className="mb-2">Stap 2</Badge>
                    <h3 className="text-xl font-semibold">Beoordeling</h3>
                    <p className="text-muted-foreground">
                      Ons kwaliteitsteam beoordeelt uw melding binnen 2 werkdagen en neemt contact met u op.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Badge className="mb-2">Stap 3</Badge>
                    <h3 className="text-xl font-semibold">Retourlabel</h3>
                    <p className="text-muted-foreground">
                      Bij goedkeuring ontvangt u een prepaid retourlabel om het product kosteloos terug te sturen.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Badge className="mb-2">Stap 4</Badge>
                    <h3 className="text-xl font-semibold">Vervanging of restitutie</h3>
                    <p className="text-muted-foreground">
                      U ontvangt een vervangend product of volledige restitutie inclusief verzendkosten.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Return Process */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">Hoe retourneren?</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Neem contact op</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Stuur een e-mail naar <a href="mailto:research@medinapharmalabs.eu" className="text-primary hover:underline">research@medinapharmalabs.eu</a> met 
                        uw bestelnummer en de reden voor retour.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ontvang retourgoedkeuring</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Binnen 2 werkdagen ontvangt u een RMA-nummer (Return Merchandise Authorization) en retourinstructies.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Verpak het product zorgvuldig</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Plaats het product in de originele verpakking en voeg het RMA-nummer toe. 
                        Zorg voor voldoende bescherming tijdens transport.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Verstuur het pakket</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Stuur het pakket naar het opgegeven retouradres met track & trace. 
                        Bewaar het verzendbewijs tot de restitutie is verwerkt.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Ontvang restitutie</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Na ontvangst en controle van het product wordt binnen 14 werkdagen het bedrag teruggestort 
                        op de oorspronkelijke betaalwijze.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Let op:</strong> Producten zonder RMA-nummer kunnen niet worden verwerkt en worden teruggestuurd naar de afzender.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Vragen over uw retour?</h2>
            
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-lg leading-relaxed mb-8 text-center">
                  Ons customer service team staat klaar om u te helpen met uw retour of eventuele vragen.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold mb-2">E-mail</p>
                    <a href="mailto:research@medinapharmalabs.eu" className="text-primary hover:underline">
                      research@medinapharmalabs.eu
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Reactie binnen 24 uur
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold mb-2">Retouradres</p>
                    <p className="text-muted-foreground">
                      MEDINA Pharma Labs<br />
                      Returns Department<br />
                      ul. Mokotowska 21<br />
                      00-640 Warszawa, Polen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Belangrijke mededeling</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Alle producten van MEDINA Pharma Labs zijn uitsluitend bedoeld voor laboratoriumonderzoek en 
                      onderwijsdoeleinden. Retourneringen worden verwerkt volgens farmaceutische veiligheidsprotocollen 
                      en EU-richtlijnen. Dit retourbeleid is conform de Europese wetgeving voor consumentenbescherming 
                      en farmaceutische producten.
                    </p>
                  </div>
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
