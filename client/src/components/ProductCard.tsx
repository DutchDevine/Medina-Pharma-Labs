import type { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useLocation } from "wouter";
import medinaLogo from "@assets/Bez tytułu_1762084726356.png";
import endogenicLogo from "@assets/Endogenic peptydy_1762084722094.png";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [, setLocation] = useLocation();

  const getCategoryBadgeVariant = () => {
    if (product.category.includes("Peptide")) return "default";
    if (product.category.includes("HCG")) return "secondary";
    return "outline";
  };

  const handleCardClick = () => {
    setLocation(`/product/${product.id}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setLocation(`/product/${product.id}`);
    }
  };

  return (
    <Card 
      className="hover-elevate overflow-hidden group cursor-pointer h-full flex flex-col bg-gradient-to-br from-white to-gray-50 border-2 hover:border-primary/30 transition-all duration-300"
      data-testid={`card-product-${product.id}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Bekijk details van ${product.name}`}
    >
      <CardContent className="p-4 flex flex-col flex-1">
        {/* Header with Badge and Brand Logo */}
        <div className="flex items-start justify-between mb-3">
          <Badge 
            variant={getCategoryBadgeVariant()} 
            className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary border-primary/20"
          >
            {product.category}
          </Badge>
          {product.brand && (
            <div className="bg-white rounded-md p-1 shadow-sm">
              <img 
                src={product.brand === "ENDOGENIC" ? endogenicLogo : medinaLogo} 
                alt={product.brand}
                className="h-5 object-contain"
              />
            </div>
          )}
        </div>

        {/* Product Image Placeholder with Gradient */}
        <div className="mb-3 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 h-32 flex items-center justify-center relative overflow-hidden group-hover:from-primary/10 group-hover:to-primary/20 transition-all">
          <div className="text-4xl opacity-20 group-hover:opacity-30 transition-opacity">💊</div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
        </div>

        {/* Product Name */}
        <h3 className="text-base font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>

        {/* Chemical Name */}
        {product.chemicalName && (
          <p className="text-xs font-mono text-muted-foreground mb-3 line-clamp-1" data-testid={`text-chemical-${product.id}`}>
            {product.chemicalName}
          </p>
        )}

        {/* Specifications */}
        {(product.concentration || product.quantity) && (
          <div className="flex flex-wrap gap-2 text-xs mb-3 pb-3 border-b border-dashed">
            {product.concentration && (
              <span className="bg-muted/50 px-2 py-1 rounded-md font-medium text-muted-foreground">
                {product.concentration}
              </span>
            )}
            {product.quantity && (
              <span className="bg-muted/50 px-2 py-1 rounded-md text-muted-foreground">
                {product.quantity}
              </span>
            )}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Price and CTA */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Prijs</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" data-testid={`text-price-${product.id}`}>
                €{product.priceEur.toFixed(2)}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ShoppingCart className="h-4 w-4 text-primary" />
            </div>
          </div>
          
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-md hover:shadow-lg transition-all"
            size="sm"
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="mr-2 h-3 w-3" />
            Toevoegen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
