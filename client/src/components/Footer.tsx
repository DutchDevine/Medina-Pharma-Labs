import { useLocation } from "wouter";
import medinaLogo from "@assets/Bez tytułu_1762047957578.png";
import endogenicLogo from "@assets/Endogenic peptydy_1762048163392.png";

export default function Footer() {
  const [, setLocation] = useLocation();

  return (
    <footer className="border-t bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col gap-4 mb-4">
              <img src={medinaLogo} alt="MEDINA PharmaLabs" className="h-12 w-12" />
              <img src={endogenicLogo} alt="ENDOGENIC" className="h-8" />
            </div>
            <p className="text-sm text-muted-foreground">
              Professionele farmaceutische producten van de hoogste kwaliteit.
            </p>
            <p className="text-xs text-muted-foreground italic mt-2">
              From Recovery to Performance
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Producten</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-foreground transition-colors text-left">
                  Injecteerbare Steroïden
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-foreground transition-colors text-left">
                  HCG & Gonadotropinen
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-foreground transition-colors text-left">
                  Tabletten & SARMs
                </button>
              </li>
              <li>
                <button onClick={() => setLocation("/")} className="hover:text-foreground transition-colors text-left">
                  Peptiden & Hormonen
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informatie</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => setLocation("/over-ons")} className="hover:text-foreground transition-colors text-left">
                  Over Ons
                </button>
              </li>
              <li>
                <a href="mailto:research@medinapharmalabs.eu" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-foreground transition-colors text-left">
                  Verzending
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-foreground transition-colors text-left">
                  Betaling
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Klantenservice</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => {}} className="hover:text-foreground transition-colors text-left">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-foreground transition-colors text-left">
                  Retourneren
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-foreground transition-colors text-left">
                  Privacy
                </button>
              </li>
              <li>
                <button onClick={() => {}} className="hover:text-foreground transition-colors text-left">
                  Voorwaarden
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MEDINA PharmaLabs & ENDOGENIC. Alle rechten voorbehouden.</p>
          <p className="mt-2 text-xs">
            ul. Mokotowska 21, 00-640 Warszawa, Polen | research@medinapharmalabs.eu
          </p>
        </div>
      </div>
    </footer>
  );
}
