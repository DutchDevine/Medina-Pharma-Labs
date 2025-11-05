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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand - Enhanced with gradient */}
          <div 
            onClick={() => setLocation("/")}
            className="cursor-pointer group flex items-center gap-3"
            data-testid="link-home"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-lg group-hover:blur-xl transition-all"></div>
              <img 
                src={medinaLogo} 
                alt="MEDINA Pharma Labs" 
                className="relative h-11 w-11 object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-600 transition-all" data-testid="text-site-title">
                MEDINA Pharma Labs
              </h1>
              <p className="text-xs text-gray-500 font-medium">Farmaceutische excellentie</p>
            </div>
          </div>

          {/* Desktop Navigation - Modern pills */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.path}
                variant={location === link.path ? "default" : "ghost"}
                onClick={() => setLocation(link.path)}
                size="sm"
                className={location === link.path 
                  ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-md hover:shadow-lg transition-all" 
                  : "hover:bg-primary/10 hover:text-primary transition-all"
                }
                data-testid={`button-nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </Button>
            ))}
          </nav>

          {/* Right Actions - Enhanced */}
          <div className="flex items-center gap-2">
            {location === "/" && (
              <div className="relative hidden lg:block w-64">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Zoek producten..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-9 h-10 text-sm bg-gray-50/50 border-gray-200 focus:bg-white focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                  data-testid="input-search"
                />
              </div>
            )}

            <Button
              variant="outline"
              size="icon"
              onClick={onCartClick}
              className="relative h-10 w-10 border-2 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              data-testid="button-cart"
            >
              <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-2 -top-2 h-5 min-w-5 rounded-full px-1 text-xs bg-gradient-to-r from-red-500 to-red-600 shadow-lg animate-pulse"
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Toggle - Enhanced */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-10 w-10 hover:bg-primary/10 transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Modern design */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 bg-gradient-to-b from-gray-50/50 to-white">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  variant={location === link.path ? "default" : "ghost"}
                  onClick={() => {
                    setLocation(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`justify-start ${
                    location === link.path 
                      ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-sm" 
                      : "hover:bg-primary/10 hover:text-primary"
                  } transition-all`}
                  size="sm"
                >
                  {link.label}
                </Button>
              ))}
            </nav>
            {location === "/" && (
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Zoek producten..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-9 text-sm bg-gray-50 border-gray-200 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
                  data-testid="input-search-mobile"
                />
              </div>
            )}
          </div>
        )}

        {/* Category Filters - Modern pills with gradients */}
        {location === "/" && (
          <div className="flex gap-2 overflow-x-auto pb-3 pt-3 border-t border-gray-100 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(cat.id)}
                className={`whitespace-nowrap text-xs px-4 h-9 transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-md hover:shadow-lg scale-105"
                    : "border-gray-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                }`}
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
