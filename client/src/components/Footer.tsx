import { useLocation } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="border-t bg-muted/30 mt-32">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">MEDINA Pharma Labs</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Toonaangevend in farmaceutisch onderzoek en productie. 
              Van herstel naar prestatie - met precisie en wetenschap.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>ul. Mokotowska 21, 00-640 Warszawa, Polen</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:research@medinapharmalabs.eu" className="hover:text-primary transition-colors">
                  research@medinapharmalabs.eu
                </a>
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold mb-4">Producten</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
            <h4 className="font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
        <div className="mt-12 pt-8 border-t">
          <div className="max-w-md">
            <h4 className="font-semibold mb-2">Blijf op de hoogte</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ontvang updates over nieuwe producten en onderzoek.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Uw e-mailadres" 
                className="flex-1"
                data-testid="input-newsletter"
              />
              <Button data-testid="button-subscribe">
                Inschrijven
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MEDINA Pharma Labs. Alle rechten voorbehouden.</p>
          <div className="flex items-center justify-center gap-6 mt-4">
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
