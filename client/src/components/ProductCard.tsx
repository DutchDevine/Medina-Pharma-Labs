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
      className="hover-elevate overflow-hidden group cursor-pointer h-full flex flex-col shadow-sm"
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
          <Badge variant={getCategoryBadgeVariant()} className="text-xs">
            {product.category}
          </Badge>
          {product.brand && (
            <img 
              src={product.brand === "ENDOGENIC" ? endogenicLogo : medinaLogo} 
              alt={product.brand}
              className="h-6 object-contain"
            />
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>

        {/* Chemical Name */}
        {product.chemicalName && (
          <p className="text-xs font-mono text-muted-foreground mb-3" data-testid={`text-chemical-${product.id}`}>
            {product.chemicalName}
          </p>
        )}

        {/* Specifications */}
        {(product.concentration || product.quantity) && (
          <div className="flex flex-wrap gap-2 text-xs mb-3">
            {product.concentration && (
              <span className="font-medium text-muted-foreground">{product.concentration}</span>
            )}
            {product.concentration && product.quantity && <span className="text-muted-foreground">•</span>}
            {product.quantity && (
              <span className="text-muted-foreground">{product.quantity}</span>
            )}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1"></div>

        {/* Price and CTA */}
        <div className="mt-3 pt-3 border-t">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Prijs</p>
              <p className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
                €{product.priceEur.toFixed(2)}
              </p>
            </div>
          </div>
          
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full"
            size="sm"
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="mr-2 h-3 w-3" />
            In Winkelwagen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
