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
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
        
        <div className="container mx-auto px-4 lg:px-6 py-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight" data-testid="text-hero-title">
                Vooruitgang in
                <span className="block text-primary mt-1">Farmaceutische Excellentie</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-subtitle">
                Wetenschappelijke innovatie en kwaliteit sinds 2014. Van herstel naar prestatie.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={onBrowseClick}
                className="px-6 py-5"
                data-testid="button-browse-catalog"
              >
                Verken Producten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setLocation("/over-ons")}
                className="px-6 py-5 backdrop-blur-sm"
                data-testid="button-about"
              >
                Ons Onderzoek
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 backdrop-blur-sm border text-sm">
                <Award className="h-4 w-4 text-primary" />
                <span className="font-semibold">10+ Jaren</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 backdrop-blur-sm border text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span className="font-semibold">EU Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 backdrop-blur-sm border text-sm">
                <Microscope className="h-4 w-4 text-primary" />
                <span className="font-semibold">80+ Producten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Mission Statement */}
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Van Herstel naar Prestatie
              </h2>
              <div className="prose max-w-none">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Bij MEDINA Pharma Labs geloven we dat de toekomst van gezondheid niet ligt in genezing, maar in optimalisatie. 
                  Wij onderzoeken hoe het menselijk lichaam kan herstellen, aanpassingsvermogen kan vergroten en zijn grenzen op een gecontroleerde manier kan verleggen.
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setLocation("/over-ons")}
                size="sm"
              >
                Lees Meer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg border shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1">80+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Producten
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1">15+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Landen
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1">2014</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  Opgericht
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg border shadow-sm">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                  EU Compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2">
              Onze Productcategorieën
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Wetenschappelijk onderbouwde producten voor onderzoek en professioneel gebruik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
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
                className="group p-4 rounded-lg border bg-card hover-elevate cursor-pointer transition-all"
                onClick={onBrowseClick}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-muted-foreground">
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
