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
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100/50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 opacity-40" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 lg:px-6 py-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-3">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4 backdrop-blur-sm">
                <Shield className="h-3.5 w-3.5" />
                <span>EU gecertificeerd • Farmaceutische kwaliteit • Wetenschappelijk gevalideerd</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight" data-testid="text-hero-title">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Pioniers in
                </span>
                <span className="block bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent mt-1 animate-gradient">
                  Farmaceutische Innovatie
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto" data-testid="text-hero-subtitle">
                Sinds 2014 ontwikkelen we geavanceerde farmaceutische oplossingen die de grenzen van menselijke prestaties en herstel verleggen. Van wetenschappelijk onderzoek naar klinische excellentie.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Button 
                size="lg" 
                onClick={onBrowseClick}
                className="px-6 py-5 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
                data-testid="button-browse-catalog"
              >
                Bekijk productcatalogus
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => setLocation("/over-ons")}
                className="px-6 py-5 backdrop-blur-sm border-2 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                data-testid="button-about"
              >
                Wetenschappelijk onderzoek
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-6 max-w-3xl mx-auto">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-gray-100 text-sm hover:shadow-lg transition-shadow">
                <Award className="h-4 w-4 text-primary" />
                <span className="font-semibold text-gray-700">10+ jaren expertise</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-gray-100 text-sm hover:shadow-lg transition-shadow">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-gray-700">ISO & EU gecertificeerd</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md border border-gray-100 text-sm hover:shadow-lg transition-shadow">
                <Microscope className="h-4 w-4 text-blue-600" />
                <span className="font-semibold text-gray-700">80+ premium producten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Mission Statement */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Onze visie
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Van herstel naar optimale prestatie
              </h2>
              <div className="prose max-w-none">
                <p className="text-base text-gray-600 leading-relaxed">
                  Bij MEDINA Pharma Labs zijn we ervan overtuigd dat de toekomst van gezondheid niet draait om genezing alleen, maar om continue optimalisatie. 
                  Wij ontwikkelen geavanceerde farmaceutische formuleringen die het natuurlijke herstelvermogen van het lichaam ondersteunen, 
                  de fysieke prestaties verbeteren en grenzen op veilige, gecontroleerde wijze verleggen.
                </p>
                <p className="text-sm text-gray-500 mt-2 italic">
                  Elke formule wordt ondersteund door uitgebreid wetenschappelijk onderzoek en voldoet aan de strengste EU-kwaliteitsnormen.
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setLocation("/over-ons")}
                size="sm"
                className="border-2 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                Ontdek onze missie
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📦</span>
                  </div>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-1">80+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                  Premium formuleringen
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">🌍</span>
                  </div>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-1">15+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                  Landen wereldwijd
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">📅</span>
                  </div>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-1">2014</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                  Jaar van oprichting
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-1">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                  EU gecertificeerd
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Productportfolio
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Premium productcategorieën
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Wetenschappelijk ontwikkelde farmaceutische oplossingen voor professioneel gebruik en klinisch onderzoek
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                title: "Injecteerbare Steroïden",
                description: "Farmaceutisch zuivere testosteron esters en anabole verbindingen",
                icon: "💉",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100/50"
              },
              {
                title: "Peptiden & Hormonen",
                description: "ENDOGENIC Premium Series voor herstel en regeneratie",
                icon: "🧬",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100/50"
              },
              {
                title: "Tabletten & SARMs",
                description: "Orale anabolica en selectieve androgeenreceptor modulators",
                icon: "💊",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100/50"
              },
              {
                title: "HCG & Gonadotropinen",
                description: "Hormonale ondersteuning voor post-cycle therapie en herstel",
                icon: "🔬",
                gradient: "from-orange-500 to-orange-600",
                bgGradient: "from-orange-50 to-orange-100/50"
              },
            ].map((category) => (
              <div
                key={category.title}
                className={`group p-5 rounded-xl border-2 border-gray-100 bg-gradient-to-br ${category.bgGradient} hover:shadow-xl hover:border-primary/30 cursor-pointer transition-all duration-300 hover:-translate-y-1`}
                onClick={onBrowseClick}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-base font-bold mb-1.5 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-3 flex items-center text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Bekijk assortiment</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
