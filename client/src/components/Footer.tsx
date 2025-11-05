import { useLocation } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import medinaLogo from "@assets/Bez tytułu_1762084726356.png";
import endogenicLogo from "@assets/Endogenic peptydy_1762084722094.png";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 lg:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={medinaLogo} 
                alt="MEDINA Pharma Labs" 
                className="h-12 w-12 object-contain"
              />
              <img 
                src={endogenicLogo} 
                alt="ENDOGENIC" 
                className="h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-3">MEDINA Pharma Labs</h3>
            <p className="text-sm text-muted-foreground mb-3 max-w-sm">
              Uw vertrouwde partner in geavanceerde farmaceutische oplossingen. 
              Gespecialiseerd in hoogwaardige formuleringen voor professioneel en klinisch gebruik sinds 2014.
            </p>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span>ul. Mokotowska 21, 00-640 Warszawa, Polen</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <a href="mailto:research@medinapharmalabs.eu" className="hover:text-primary transition-colors">
                  research@medinapharmalabs.eu
                </a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Producten</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-primary transition-colors text-left">
                  Injecteerbare Steroïden
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-primary transition-colors text-left">
                  HCG & Gonadotropinen
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-primary transition-colors text-left">
                  Tabletten & SARMs
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-primary transition-colors text-left">
                  Peptiden & Hormonen
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Bedrijf</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>
                <button onClick={() => setLocation("/over-ons")} className="hover:text-primary transition-colors text-left">
                  Over Ons
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-primary transition-colors text-left">
                  Onderzoek & Ontwikkeling
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-primary transition-colors text-left">
                  Kwaliteit & Compliance
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-primary transition-colors text-left">
                  Carrières
                </button>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Support</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              <li>
                <button onClick={() => {}} className="hover:text-primary transition-colors text-left">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-primary transition-colors text-left">
                  Verzending
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-primary transition-colors text-left">
                  Retourneren
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-primary transition-colors text-left">
                  Privacy & Voorwaarden
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 pt-6 border-t">
          <div className="max-w-md">
            <h4 className="font-semibold mb-1.5 text-sm">Blijf op de Hoogte</h4>
            <p className="text-xs text-muted-foreground mb-3">
              Ontvang exclusieve updates over nieuwe productlanceringen, wetenschappelijke ontwikkelingen en speciaal aanbod.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Uw e-mailadres" 
                className="flex-1 h-9 text-sm"
                data-testid="input-newsletter"
              />
              <Button size="sm" data-testid="button-subscribe">
                Inschrijven
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MEDINA Pharma Labs. Alle rechten voorbehouden.</p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <button onClick={() => {}} className="hover:text-primary transition-colors">
              Privacy
            </button>
            <button onClick={() => {}} className="hover:text-primary transition-colors">
              Voorwaarden
            </button>
            <button onClick={() => {}} className="hover:text-primary transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
