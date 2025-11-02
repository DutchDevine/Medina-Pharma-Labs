import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Mail, Globe, MapPin, Target, Lightbulb, Award, Shield, ArrowLeft, Microscope, Users, FlaskConical } from "lucide-react";
import { useState } from "react";

export default function About() {
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
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight" data-testid="heading-about">
                Over MEDINA Pharma Labs
              </h1>
              <p className="text-2xl lg:text-3xl text-primary italic font-light">
                From Recovery to Performance
              </p>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Toonaangevend in farmaceutisch onderzoek en productie sinds 2014
              </p>
            </div>

            {/* Company Info Cards */}
            <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Hoofdzetel</p>
                  <p className="font-semibold">Warschau, Polen</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Opgericht</p>
                  <p className="font-semibold">2014</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Oprichter</p>
                  <p className="font-semibold">Dr. Elias Medina</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Kwaliteit</p>
                  <p className="font-semibold">EU Richtlijnen</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Target className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold">Onze Missie</h2>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-xl lg:text-2xl leading-relaxed text-foreground">
                  Bij MEDINA Pharma Labs geloven we dat de toekomst van gezondheid niet ligt in genezing, maar in <strong className="text-primary">optimalisatie</strong>.
                  Wij onderzoeken hoe het menselijk lichaam kan herstellen, aanpassingsvermogen kan vergroten en zijn grenzen op een gecontroleerde manier kan verleggen.
                  Onze taak is niet om de natuur te vervangen, maar om haar te verfijnen — met precisie, discipline en wetenschap als fundament.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Lightbulb className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold">Onze Filosofie</h2>
            </div>
            
            <Card className="shadow-lg mb-8">
              <CardContent className="p-8 lg:p-12">
                <p className="text-xl leading-relaxed mb-8 text-foreground">
                  De medische wereld kijkt vaak terug; <strong>wij kijken vooruit</strong>.
                  Onze benadering van biochemisch onderzoek is gebaseerd op drie principes:
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-3">
                    <div className="h-1 w-12 bg-primary rounded" />
                    <h3 className="text-2xl font-bold text-foreground">Eerlijkheid in formule</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Geen marketing, geen ruis. Wat op het etiket staat, is wat in de flacon zit.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-1 w-12 bg-primary rounded" />
                    <h3 className="text-2xl font-bold text-foreground">Wetenschappelijke integriteit</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Elk product is traceerbaar, getest en chemisch geverifieerd.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-1 w-12 bg-primary rounded" />
                    <h3 className="text-2xl font-bold text-foreground">Toepasbare innovatie</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Wij ontwikkelen kennis die direct bruikbaar is voor herstel, onderzoek en prestatieverbetering.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mt-8 italic border-l-4 border-primary pl-6">
                  Wij bevinden ons bewust op het grensvlak tussen farmacie en functionele biochemie.
                  Niet om regels te omzeilen, maar om vooruitgang mogelijk te maken binnen ethische kaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Onze Expertisegebieden</h2>
              <p className="text-xl text-muted-foreground">Drie pijlers van wetenschappelijke innovatie</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover-elevate transition-all shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Microscope className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">1</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Endocrine Modulation</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Onderzoek naar hormoonanalogen, testosteronmetabolieten en groeifactoren.
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-primary">
                      Het herstellen van hormonale balans en het ondersteunen van fysiologisch herstel.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FlaskConical className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">2</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tissue Engineering</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Toepassing van synthetische verbindingen en peptiden voor spier-, kraakbeen- en botregeneratie.
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-primary">
                      Gebruikt in onderzoeksomgevingen en post-revalidatieprogramma's.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <Badge variant="outline">3</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Cognitive Bioenhancement</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Ontwikkeling van neuropeptiden en nootropische stoffen die cognitieve prestaties beïnvloeden.
                  </p>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-semibold text-primary">
                      Focus: mentale helderheid zonder overprikkeling.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Endogenic Series */}
        <section className="py-24 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <Card className="shadow-xl border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="text-lg px-4 py-2">ENDOGENIC Series</Badge>
                  <Badge variant="outline">Ons Vlaggenschip</Badge>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">De ENDOGENIC Series</h2>
                <p className="text-xl leading-relaxed mb-6">
                  Onze ENDOGENIC Series vertegenwoordigt het hart van ons onderzoek — een reeks verbindingen ontworpen om het natuurlijke herstelproces van het lichaam te ondersteunen.
                </p>
                <p className="text-muted-foreground italic leading-relaxed">
                  Deze producten zijn uitsluitend bedoeld voor laboratoriumonderzoek en onderwijsdoeleinden.
                  Ze symboliseren onze visie: wetenschap die grenzen opzoekt, maar niet overschrijdt.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">Onze Kernwaarden</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-1 bg-primary rounded" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Precisie</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Elk molecuul telt. Elk detail heeft een doel.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-1 bg-primary rounded" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Verantwoordelijkheid</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Wij werken met stoffen die krachtig zijn — en behandelen ze met respect.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-1 bg-primary rounded" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Vooruitgang</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Innovatie is geen hype, maar het resultaat van volharding.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-1 bg-primary rounded" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Neutraliteit</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Wij leveren kennis; de toepassing ligt bij de gebruiker.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quality & Integrity */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Integriteit en Kwaliteit</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-xl leading-relaxed mb-6">
                  MEDINA Pharma Labs werkt volgens strikte kwaliteitsnormen voor onderzoek en productie.
                  Onze laboratoria voldoen aan Europese richtlijnen voor analytische zuiverheid, batch-traceability en veiligheid in syntheseprocessen.
                </p>
                <div className="p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-xl font-semibold text-primary">
                    We geloven dat transparantie geen verplichting is, maar een morele plicht.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Contact en Partners</h2>
            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                  MEDINA Pharma Labs werkt samen met geselecteerde onderzoeksinstellingen, artsen en distributiepartners in Europa en Azië.
                  Wij leveren uitsluitend aan professionele onderzoeksfaciliteiten en erkende laboratoria.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold mb-2">Email</p>
                    <a href="mailto:research@medinapharmalabs.eu" className="text-primary hover:underline">
                      research@medinapharmalabs.eu
                    </a>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold mb-2">Website</p>
                    <a href="https://www.medinapharmalabs.eu" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      www.medinapharmalabs.eu
                    </a>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <p className="font-semibold mb-2">Adres</p>
                    <p className="text-muted-foreground">
                      ul. Mokotowska 21<br />
                      00-640 Warszawa, Polen
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
