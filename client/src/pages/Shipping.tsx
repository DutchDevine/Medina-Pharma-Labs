import { useLocation } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Package, Truck, Shield, Clock, MapPin, Euro, AlertCircle, CheckCircle, Globe } from "lucide-react";
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
                  <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
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
                  <p className="text-sm text-muted-foreground mb-1">Track & Trace</p>
                  <p className="font-semibold">Altijd beschikbaar</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Shipping Methods */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Truck className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Verzendmethoden</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="shadow-lg hover-elevate transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Standaard Verzending</h3>
                      <Badge variant="outline" className="font-normal">3-7 werkdagen</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">€15</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Track & Trace volgsysteem</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">100% discrete verpakking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Verzekerd tot €500</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Neutrale afzender</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-primary/50 hover-elevate transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Express Verzending</h3>
                      <Badge className="font-normal">1-3 werkdagen</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">€30</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
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
                      <span className="text-muted-foreground">100% discrete verpakking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Verzekerd tot €1000</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Prioritaire behandeling</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Euro className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Gratis Verzending</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Bij bestellingen vanaf €200 verzenden wij gratis binnen de EU met standaard verzending.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Shipping Regions */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Globe className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Verzendgebieden</h2>
            </div>

            <div className="space-y-6">
              <Card className="shadow-md hover-elevate transition-all">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div className="flex-1 min-w-[200px]">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-bold">Europese Unie</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Alle EU-landen, inclusief Nederland, België, Duitsland, Frankrijk, Spanje, Italië en meer
                      </p>
                    </div>
                    <Badge className="text-base px-4 py-2">Volledig Beschikbaar</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Standaard Verzending</p>
                      <p className="text-muted-foreground">3-7 werkdagen • €15</p>
                      <p className="text-sm text-muted-foreground">Gratis vanaf €200</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Express Verzending</p>
                      <p className="text-muted-foreground">1-3 werkdagen • €30</p>
                      <p className="text-sm text-muted-foreground">Versnelde afhandeling</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md hover-elevate transition-all">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div className="flex-1 min-w-[200px]">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-bold">Verenigd Koninkrijk</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Post-Brexit verzending met volledige douanedocumentatie en customs afhandeling
                      </p>
                    </div>
                    <Badge className="text-base px-4 py-2">Beschikbaar</Badge>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Standaard Verzending</p>
                      <p className="text-muted-foreground">5-10 werkdagen • €25</p>
                      <p className="text-sm text-muted-foreground">Incl. douanedocumenten</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">Express Verzending</p>
                      <p className="text-muted-foreground">3-5 werkdagen • €45</p>
                      <p className="text-sm text-muted-foreground">Versnelde douaneafhandeling</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-md opacity-90">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div className="flex-1 min-w-[200px]">
                      <div className="flex items-center gap-3 mb-2">
                        <Globe className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-bold">Internationale Verzending</h3>
                      </div>
                      <p className="text-muted-foreground">
                        VS, Canada, Australië, Zwitserland en andere landen buiten Europa
                      </p>
                    </div>
                    <Badge variant="outline" className="text-base px-4 py-2">Op Aanvraag</Badge>
                  </div>
                  <div className="pt-6 border-t">
                    <p className="text-muted-foreground leading-relaxed">
                      Verzending buiten Europa is mogelijk op aanvraag. Neem contact op met ons support team 
                      via <a href="mailto:research@medinapharmalabs.eu" className="text-primary hover:underline font-medium">research@medinapharmalabs.eu</a> voor 
                      informatie over levertijden, verzendkosten en lokale regelgeving.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Packaging & Discretion */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Shield className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Verpakking & Discretie</h2>
            </div>

            <Card className="shadow-lg">
              <CardContent className="p-8 lg:p-12">
                <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-foreground">
                  Wij begrijpen het belang van <strong className="text-primary">discretie en privacy</strong> bij de levering van onderzoeksmaterialen.
                  Alle bestellingen worden verwerkt en verzonden met de hoogste mate van vertrouwelijkheid.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Package className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">Neutrale verpakking</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Pakketten bevatten geen logo's, merknamen of inhoudsinformatie aan de buitenzijde. 
                          Volledig onherkenbare verpakking voor maximale privacy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">Veilige verpakking</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Producten worden beschermd verpakt met schokbestendige materialen en koelelementen indien nodig
                          om kwaliteit tijdens transport te garanderen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <AlertCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">Generieke afzender</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Op het adresetiket staat een neutrale bedrijfsnaam zonder verwijzing naar farmaceutische producten
                          of gevoelige inhoud.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <CheckCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">Verzegelde producten</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Alle producten zijn individueel verzegeld met tamper-evident seals voor maximale veiligheid
                          en kwaliteitsborging.
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
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="flex items-center gap-4 mb-12">
              <Clock className="h-10 w-10 text-primary" />
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">Tracking & Ondersteuning</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="shadow-md hover-elevate transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Track & Trace</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Na verzending ontvangt u direct een Track & Trace code via e-mail waarmee u uw pakket 
                    realtime kunt volgen van ons magazijn tot aan uw deur.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Automatische e-mail notificatie bij verzending</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Realtime tracking updates per SMS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Geschatte levertijd en locatie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">Bezorgnotificatie voorafgaand aan levering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-md hover-elevate transition-all">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Klantenservice</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Heeft u vragen over uw verzending of wenst u de status te controleren? 
                    Ons professionele support team staat voor u klaar.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm font-semibold mb-2 text-foreground">E-mail Support</p>
                      <a href="mailto:research@medinapharmalabs.eu" className="text-primary hover:underline font-medium">
                        research@medinapharmalabs.eu
                      </a>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-sm font-semibold mb-2 text-foreground">Reactietijd</p>
                      <p className="text-muted-foreground">Binnen 24 uur op werkdagen</p>
                      <p className="text-sm text-muted-foreground mt-1">Ma-Vr: 09:00 - 17:00 CET</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center tracking-tight">Belangrijke Informatie</h2>
            
            <Card className="shadow-lg border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">Onderzoeksdoeleinden</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Alle producten zijn uitsluitend bestemd voor laboratoriumonderzoek en niet voor menselijke consumptie.
                        Door een bestelling te plaatsen, bevestigt u dat u voldoet aan de lokale wet- en regelgeving en dat
                        de producten worden gebruikt conform de wettelijke richtlijnen in uw land.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">Douane & Import</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Bij verzending buiten de EU kunnen douanekosten en importbelastingen van toepassing zijn.
                        Deze kosten zijn voor rekening van de ontvanger. Wij adviseren om lokale importregels te controleren
                        voordat u een bestelling plaatst. MEDINA Pharma Labs voorziet alle zendingen van correcte documentatie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">Verwerkingstijd</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Bestellingen worden verwerkt binnen 1-2 werkdagen na ontvangst van de betaling. 
                        Na verzending ontvangt u binnen enkele uren een bevestiging met tracking informatie.
                        Bestellingen geplaatst op vrijdag worden verwerkt op de eerstvolgende werkdag.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">Temperatuurcontrole</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Producten die koeling vereisen worden verzonden met professionele koelelementen en geïsoleerde verpakking
                        om optimale kwaliteit te garanderen tijdens transport. Temperatuurgevoelige producten worden alleen
                        verzonden op maandag t/m woensdag om langdurige weekend transit te vermijden.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-center text-sm text-muted-foreground italic">
                    Voor vragen over verzending, douane of andere onderwerpen kunt u contact opnemen met{" "}
                    <a href="mailto:research@medinapharmalabs.eu" className="text-primary hover:underline font-medium">
                      research@medinapharmalabs.eu
                    </a>
                  </p>
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
