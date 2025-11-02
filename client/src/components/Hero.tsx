import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import medinaLogo from "@assets/Bez tytułu_1762047957578.png";
import endogenicLogo from "@assets/Endogenic peptydy_1762048163392.png";

interface HeroProps {
  onBrowseClick: () => void;
}

export default function Hero({ onBrowseClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 border-b">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <img src={medinaLogo} alt="MEDINA" className="h-16 w-16" />
              <span className="text-2xl text-muted-foreground">×</span>
              <img src={endogenicLogo} alt="ENDOGENIC" className="h-12" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-hero-title">
              Professionele Farmaceutische Producten
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="text-hero-subtitle">
              Hoogwaardige injecteerbare steroïden, peptiden, SARMs en supplementen van MEDINA PharmaLabs en ENDOGENIC.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={onBrowseClick}
                className="text-lg"
                data-testid="button-browse-catalog"
              >
                Bekijk Catalogus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                data-testid="button-about"
              >
                Over Ons
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t">
              <div>
                <p className="text-3xl font-bold text-primary">80+</p>
                <p className="text-sm text-muted-foreground">Producten</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">2</p>
                <p className="text-sm text-muted-foreground">Merken</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <img 
                src={medinaLogo} 
                alt="MEDINA PharmaLabs" 
                className="relative h-64 w-64 opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
