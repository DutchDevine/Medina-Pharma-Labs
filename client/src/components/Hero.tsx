import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Microscope } from "lucide-react";
import { useLocation } from "wouter";

interface HeroProps {
  onBrowseClick: () => void;
}

export default function Hero({ onBrowseClick }: HeroProps) {
  const [, setLocation] = useLocation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
        
        <div className="container mx-auto px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight" data-testid="text-hero-title">
                Vooruitgang in
                <span className="block text-primary mt-2">Farmaceutische Excellentie</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-subtitle">
                Wetenschappelijke innovatie en kwaliteit sinds 2014. Van herstel naar prestatie.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                onClick={onBrowseClick}
                className="text-lg px-8 py-6"
                data-testid="button-browse-catalog"
              >
                Verken Producten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setLocation("/over-ons")}
                className="text-lg px-8 py-6 backdrop-blur-sm"
                data-testid="button-about"
              >
                Ons Onderzoek
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
                <Award className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">10+ Jaren</p>
                  <p className="text-sm text-muted-foreground">Onderzoek</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
                <Shield className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">EU Certified</p>
                  <p className="text-sm text-muted-foreground">Kwaliteit</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border">
                <Microscope className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-semibold">80+ Producten</p>
                  <p className="text-sm text-muted-foreground">Catalogus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Mission Statement */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
                Van Herstel naar Prestatie
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Bij MEDINA Pharma Labs geloven we dat de toekomst van gezondheid niet ligt in genezing, maar in optimalisatie. 
                  Wij onderzoeken hoe het menselijk lichaam kan herstellen, aanpassingsvermogen kan vergroten en zijn grenzen op een gecontroleerde manier kan verleggen.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Onze taak is niet om de natuur te vervangen, maar om haar te verfijnen — met precisie, discipline en wetenschap als fundament.
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setLocation("/over-ons")}
                className="mt-6"
              >
                Lees Meer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-xl border shadow-sm">
                <p className="text-5xl font-bold text-primary mb-2">80+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Producten Ontwikkeld
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border shadow-sm">
                <p className="text-5xl font-bold text-primary mb-2">15+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Landen Bediend
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border shadow-sm">
                <p className="text-5xl font-bold text-primary mb-2">2014</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  Sinds Opgericht
                </p>
              </div>
              <div className="bg-background p-6 rounded-xl border shadow-sm">
                <p className="text-5xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wide">
                  EU Compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Onze Productcategorieën
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wetenschappelijk onderbouwde producten voor onderzoek en professioneel gebruik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Injecteerbare Steroïden",
                description: "Hoogwaardige testosteron en derivaten",
                icon: "💉",
              },
              {
                title: "Peptiden & Hormonen",
                description: "ENDOGENIC Series voor herstel",
                icon: "🧬",
              },
              {
                title: "Tabletten & SARMs",
                description: "Orale formuleringen en selectieve modulators",
                icon: "💊",
              },
              {
                title: "HCG & Gonadotropinen",
                description: "Hormonale ondersteuning en herstel",
                icon: "🔬",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="group p-6 rounded-xl border bg-card hover-elevate cursor-pointer transition-all"
                onClick={onBrowseClick}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
