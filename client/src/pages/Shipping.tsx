import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Package, Truck, Shield, Clock, MapPin, Euro, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Shipping() {
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
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight" data-testid="heading-shipping">
                Verzending & Levering
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Discrete, veilige en betrouwbare levering van onderzoeksmaterialen
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Levertijd</p>
                  <p className="font-semibold">3-7 werkdagen</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Verpakking</p>
                  <p className="font-semibold">100% Discreet</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Euro className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Gratis verzending</p>
                  <p className="font-semibold">Vanaf €200</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Package className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-1">Tracking</p>
                  <p className="font-semibold">Altijd beschikbaar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Shipping Methods */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Truck className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold">Verzendmethoden</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Standaard Verzending</h3>
                      <Badge variant="outline">3-7 werkdagen</Badge>
                    </div>
                    <p className="text-3xl font-bold text-primary">€15</p>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Track & Trace</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Discrete verpakking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Verzekerd tot €500</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-primary/50">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Express Verzending</h3>
                      <Badge>1-3 werkdagen</Badge>
                    </div>
                    <p className="text-3xl font-bold text-primary">€30</p>
                  </div>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Versnelde levering</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Premium Track & Trace</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Discrete verpakking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Verzekerd tot €1000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Euro className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Gratis Verzending</h4>
                    <p className="text-muted-foreground">
                      Bij bestellingen vanaf €200 verzenden wij gratis binnen de EU met standaard verzending.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Shipping Regions */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <MapPin className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold">Verzendgebieden</h2>
            </div>

            <div className="space-y-6">
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Europese Unie</h3>
                      <p className="text-muted-foreground">Alle EU-landen, incl. Nederland, België, Duitsland, Frankrijk</p>
                    </div>
                    <Badge className="text-lg px-4 py-2">Beschikbaar</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <p className="text-sm font-semibold mb-2">Standaard Verzending</p>
                      <p className="text-muted-foreground">3-7 werkdagen • €15</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Express Verzending</p>
                      <p className="text-muted-foreground">1-3 werkdagen • €30</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Verenigd Koninkrijk</h3>
                      <p className="text-muted-foreground">Post-Brexit verzending met volledige douanedocumentatie</p>
                    </div>
                    <Badge className="text-lg px-4 py-2">Beschikbaar</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <p className="text-sm font-semibold mb-2">Standaard Verzending</p>
                      <p className="text-muted-foreground">5-10 werkdagen • €25</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-2">Express Verzending</p>
                      <p className="text-muted-foreground">3-5 werkdagen • €45</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md opacity-75">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Buiten Europa</h3>
                      <p className="text-muted-foreground">VS, Canada, Australië en andere landen</p>
                    </div>
                    <Badge variant="outline" className="text-lg px-4 py-2">Op aanvraag</Badge>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Verzending buiten Europa is mogelijk op aanvraag. Neem contact op met ons support team voor informatie over levertijden en verzendkosten.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Packaging & Discretion */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Shield className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold">Verpakking & Discretie</h2>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-xl leading-relaxed mb-8">
                  Wij begrijpen het belang van discretie en privacy bij de levering van onderzoeksmaterialen.
                  Alle bestellingen worden verwerkt en verzonden met de hoogste mate van vertrouwelijkheid.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Package className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Neutrale verpakking</h4>
                        <p className="text-muted-foreground">
                          Pakketten bevatten geen logo's, merknamen of inhoudsinformatie aan de buitenzijde.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Veilige verpakking</h4>
                        <p className="text-muted-foreground">
                          Producten worden beschermd verpakt met schokbestendige materialen en koelelementen indien nodig.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Generieke afzender</h4>
                        <p className="text-muted-foreground">
                          Op het adresetiket staat een neutrale bedrijfsnaam zonder verwijzing naar farmaceutische producten.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Binnenin verzegeld</h4>
                        <p className="text-muted-foreground">
                          Alle producten zijn individueel verzegeld met tamper-evident seals voor maximale veiligheid.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tracking & Support */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Clock className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold">Tracking & Ondersteuning</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Track & Trace</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Na verzending ontvangt u een Track & Trace code via e-mail waarmee u uw pakket realtime kunt volgen.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">E-mail notificatie bij verzending</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Realtime tracking updates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Geschatte levertijd</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Klantenservice</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Heeft u vragen over uw verzending? Ons support team staat voor u klaar.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm font-semibold mb-1">E-mail</p>
                      <a href="mailto:research@medinapharmalabs.eu" className="text-primary hover:underline">
                        research@medinapharmalabs.eu
                      </a>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm font-semibold mb-1">Reactietijd</p>
                      <p className="text-muted-foreground">Binnen 24 uur op werkdagen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Belangrijke Informatie</h2>
            
            <Card className="shadow-lg border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Onderzoeksdoeleinden</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Alle producten zijn uitsluitend bestemd voor laboratoriumonderzoek en niet voor menselijke consumptie.
                        Door een bestelling te plaatsen, bevestigt u dat u voldoet aan de lokale wet- en regelgeving.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Douane & Import</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Bij verzending buiten de EU kunnen douanekosten en importbelastingen van toepassing zijn.
                        Deze kosten zijn voor rekening van de ontvanger. Wij adviseren om lokale importregels te controleren.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Verwerkingstijd</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Bestellingen worden verwerkt binnen 1-2 werkdagen. Na verzending ontvangt u een bevestiging met tracking informatie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Temperatuurcontrole</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Producten die koeling vereisen worden verzonden met koelelementen en geïsoleerde verpakking
                        om optimale kwaliteit te garanderen tijdens transport.
                      </p>
                    </div>
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
