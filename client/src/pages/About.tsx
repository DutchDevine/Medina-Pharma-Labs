import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import medinaLogo from "@assets/Bez tytułu_1762047957578.png";
import endogenicLogo from "@assets/Endogenic peptydy_1762048163392.png";
import { Building2, Mail, Globe, MapPin, Target, Lightbulb, Award, Shield, ArrowLeft } from "lucide-react";
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

      <main className="flex-1 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4 py-12">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-8"
            data-testid="button-back-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar Shop
          </Button>

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-6">
              <img src={medinaLogo} alt="MEDINA PharmaLabs" className="h-20 w-20" />
              <img src={endogenicLogo} alt="ENDOGENIC" className="h-16" />
            </div>
            <h1 className="text-5xl font-bold tracking-tight mb-4" data-testid="heading-about">
              Over Medina Pharma Labs
            </h1>
            <p className="text-2xl text-primary italic font-light">
              From Recovery to Performance
            </p>
          </div>

          {/* Company Info Cards */}
          <div className="grid md:grid-cols-4 gap-4 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Hoofdzetel</p>
                <p className="font-semibold">Warschau, Polen</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Opgericht</p>
                <p className="font-semibold">2014</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Oprichter</p>
                <p className="font-semibold">Dr. Elias Medina</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Kwaliteit</p>
                <p className="font-semibold">EU Richtlijnen</p>
              </CardContent>
            </Card>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Onze Missie</h2>
            </div>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground">
                  Bij Medina Pharma Labs geloven we dat de toekomst van gezondheid niet ligt in genezing, maar in optimalisatie.
                  Wij onderzoeken hoe het menselijk lichaam kan herstellen, aanpassingsvermogen kan vergroten en zijn grenzen op een gecontroleerde manier kan verleggen.
                  Onze taak is niet om de natuur te vervangen, maar om haar te verfijnen — met precisie, discipline en wetenschap als fundament.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Onze Filosofie</h2>
            </div>
            <Card className="mb-6">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6 text-foreground">
                  De medische wereld kijkt vaak terug; wij kijken vooruit.
                  Onze benadering van biochemisch onderzoek is gebaseerd op drie principes:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Eerlijkheid in formule</h3>
                    <p className="text-muted-foreground">
                      Geen marketing, geen ruis. Wat op het etiket staat, is wat in de flacon zit.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Wetenschappelijke integriteit</h3>
                    <p className="text-muted-foreground">
                      Elk product is traceerbaar, getest en chemisch geverifieerd.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">Toepasbare innovatie</h3>
                    <p className="text-muted-foreground">
                      Wij ontwikkelen kennis die direct bruikbaar is voor herstel, onderzoek en prestatieverbetering.
                    </p>
                  </div>
                </div>

                <p className="text-foreground mt-6 italic">
                  Wij bevinden ons bewust op het grensvlak tussen farmacie en functionele biochemie.
                  Niet om regels te omzeilen, maar om vooruitgang mogelijk te maken binnen ethische kaders.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Expertise Areas */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Onze Expertisegebieden</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <Badge className="mb-4">1</Badge>
                  <h3 className="text-xl font-bold mb-3">Endocrine Modulation</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Onderzoek naar hormoonanalogen, testosteronmetabolieten en groeifactoren.
                  </p>
                  <p className="text-sm font-semibold">
                    Doel: het herstellen van hormonale balans en het ondersteunen van fysiologisch herstel.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <Badge className="mb-4">2</Badge>
                  <h3 className="text-xl font-bold mb-3">Tissue Engineering</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Toepassing van synthetische verbindingen en peptiden voor spier-, kraakbeen- en botregeneratie.
                  </p>
                  <p className="text-sm font-semibold">
                    Onze protocollen worden gebruikt in onderzoeksomgevingen en post-revalidatieprogramma's.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-elevate transition-all">
                <CardContent className="p-6">
                  <Badge className="mb-4">3</Badge>
                  <h3 className="text-xl font-bold mb-3">Cognitive Bioenhancement</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Ontwikkeling van neuropeptiden en nootropische stoffen die cognitieve prestaties, concentratie en stressweerstand beïnvloeden.
                  </p>
                  <p className="text-sm font-semibold">
                    Focus: mentale helderheid zonder overprikkeling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Endogenic Series */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <img src={endogenicLogo} alt="ENDOGENIC" className="h-12" />
                  <div>
                    <h2 className="text-3xl font-bold mb-2">De Endogenic Series</h2>
                    <Badge variant="outline" className="mb-4">Ons Vlaggenschip</Badge>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  Onze Endogenic Series vertegenwoordigt het hart van ons onderzoek — een reeks verbindingen ontworpen om het natuurlijke herstelproces van het lichaam te ondersteunen.
                </p>
                <p className="text-sm text-muted-foreground italic">
                  Deze producten zijn uitsluitend bedoeld voor laboratoriumonderzoek en onderwijsdoeleinden.
                  Ze symboliseren onze visie: wetenschap die grenzen opzoekt, maar niet overschrijdt.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Onze Kernwaarden</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold mb-2">Precisie</h3>
                    <p className="text-muted-foreground">Elk molecuul telt. Elk detail heeft een doel.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold mb-2">Verantwoordelijkheid</h3>
                    <p className="text-muted-foreground">Wij werken met stoffen die krachtig zijn — en behandelen ze met respect.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold mb-2">Vooruitgang</h3>
                    <p className="text-muted-foreground">Innovatie is geen hype, maar het resultaat van volharding.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold mb-2">Neutraliteit</h3>
                    <p className="text-muted-foreground">Wij leveren kennis; de toepassing ligt bij de gebruiker.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Quality & Integrity */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Integriteit en Kwaliteit</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">
                  Medina Pharma Labs werkt volgens strikte kwaliteitsnormen voor onderzoek en productie.
                  Onze laboratoria voldoen aan Europese richtlijnen voor analytische zuiverheid, batch-traceability en veiligheid in syntheseprocessen.
                </p>
                <p className="text-lg leading-relaxed mt-4 font-semibold text-primary">
                  We geloven dat transparantie geen verplichting is, maar een morele plicht.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Contact en Partners</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Medina Pharma Labs werkt samen met geselecteerde onderzoeksinstellingen, artsen en distributiepartners in Europa en Azië.
                  Wij leveren uitsluitend aan professionele onderzoeksfaciliteiten en erkende laboratoria.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:research@medinapharmalabs.eu" className="text-sm text-primary hover:underline">
                        research@medinapharmalabs.eu
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Website</p>
                      <a href="https://www.medinapharmalabs.eu" className="text-sm text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                        www.medinapharmalabs.eu
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Adres</p>
                      <p className="text-sm text-muted-foreground">
                        ul. Mokotowska 21<br />
                        00-640 Warszawa, Polen
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
