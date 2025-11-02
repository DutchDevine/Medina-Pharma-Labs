import medinaLogo from "@assets/Bez tytułu_1762047957578.png";
import endogenicLogo from "@assets/Endogenic peptydy_1762048163392.png";

export default function Footer() {
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
          </div>

          <div>
            <h3 className="font-semibold mb-4">Producten</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Injecteerbare Steroïden</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">HCG & Gonadotropinen</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tabletten & SARMs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Peptiden & Hormonen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Informatie</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Over Ons</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Verzending</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Betaling</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Klantenservice</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Retourneren</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Voorwaarden</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MEDINA PharmaLabs & ENDOGENIC. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
