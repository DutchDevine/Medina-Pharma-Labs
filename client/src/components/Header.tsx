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
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <div 
            onClick={() => setLocation("/")}
            className="cursor-pointer group flex items-center gap-3"
            data-testid="link-home"
          >
            <img 
              src={medinaLogo} 
              alt="MEDINA Pharma Labs" 
              className="h-12 w-12 object-contain"
            />
            <h1 className="hidden sm:block text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors" data-testid="text-site-title">
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
                data-testid={`button-nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {location === "/" && (
              <div className="relative hidden lg:block w-64">
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
            )}

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

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  variant={location === link.path ? "default" : "ghost"}
                  onClick={() => {
                    setLocation(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className="justify-start"
                >
                  {link.label}
                </Button>
              ))}
            </nav>
            {location === "/" && (
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Zoek producten..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-9"
                  data-testid="input-search-mobile"
                />
              </div>
            )}
          </div>
        )}

        {/* Category Filters - Only on homepage */}
        {location === "/" && (
          <div className="flex gap-2 overflow-x-auto pb-3 pt-2 border-t">
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
        )}
      </div>
    </header>
  );
}
