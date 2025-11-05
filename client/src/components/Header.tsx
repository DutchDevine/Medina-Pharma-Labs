import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { useState } from "react";
import medinaLogo from "@assets/Bez tytułu_1762084726356.png";

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
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Producten" },
    { path: "/over-ons", label: "Over Ons" },
  ];

  const categories = [
    { id: "all", label: "Alle Producten" },
    { id: "injectable-steroids", label: "Injecteerbare Steroïden" },
    { id: "hcg", label: "HCG" },
    { id: "oral-sarms", label: "Tabletten & SARMs" },
    { id: "peptides", label: "Peptiden" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Brand */}
          <div 
            onClick={() => setLocation("/")}
            className="cursor-pointer group flex items-center gap-2"
            data-testid="link-home"
          >
            <img 
              src={medinaLogo} 
              alt="MEDINA Pharma Labs" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="hidden sm:block text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors" data-testid="text-site-title">
              MEDINA Pharma Labs
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={location === link.path ? "default" : "ghost"}
                onClick={() => setLocation(link.path)}
                size="sm"
                data-testid={`button-nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {location === "/" && (
              <div className="relative hidden lg:block w-56">
                <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Zoek producten..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-8 h-9 text-sm"
                  data-testid="input-search"
                />
              </div>
            )}

            <Button
              variant="outline"
              size="icon"
              onClick={onCartClick}
              className="relative h-9 w-9"
              data-testid="button-cart"
            >
              <ShoppingCart className="h-4 w-4" />
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

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-9 w-9"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  variant={location === link.path ? "default" : "ghost"}
                  onClick={() => {
                    setLocation(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start"
                  size="sm"
                >
                  {link.label}
                </Button>
              ))}
            </nav>
            {location === "/" && (
              <div className="relative mt-3">
                <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Zoek producten..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-8 text-sm"
                  data-testid="input-search-mobile"
                />
              </div>
            )}
          </div>
        )}

        {/* Category Filters - Only on homepage */}
        {location === "/" && (
          <div className="flex gap-2 overflow-x-auto pb-2 pt-2 border-t">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(cat.id)}
                className="whitespace-nowrap text-xs px-3 h-8"
                data-testid={`button-category-${cat.id}`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
