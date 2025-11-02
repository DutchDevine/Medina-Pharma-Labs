import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import medinaLogo from "@assets/Bez tytułu_1762047957578.png";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function Header({
  cartItemCount,
  onCartClick,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: HeaderProps) {
  const categories = [
    { id: "all", label: "Alle Producten" },
    { id: "injectable-steroids", label: "Injecteerbare Steroïden" },
    { id: "hcg", label: "HCG" },
    { id: "oral-sarms", label: "Tabletten & SARMs" },
    { id: "peptides", label: "Peptiden" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <img 
              src={medinaLogo} 
              alt="MEDINA PharmaLabs" 
              className="h-10 w-10"
              data-testid="img-logo"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground" data-testid="text-site-title">
                MEDINA PharmaLabs
              </h1>
              <p className="text-xs text-muted-foreground">
                Professionele Farmaceutische Producten
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-4 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Zoek producten..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9"
                data-testid="input-search"
              />
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={onCartClick}
            className="relative"
            data-testid="button-cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -right-2 -top-2 h-5 min-w-5 rounded-full px-1 text-xs"
                data-testid="badge-cart-count"
              >
                {cartItemCount}
              </Badge>
            )}
          </Button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 pt-2">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(cat.id)}
              className="whitespace-nowrap"
              data-testid={`button-category-${cat.id}`}
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
