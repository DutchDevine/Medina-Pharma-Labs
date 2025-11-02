import type { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { useLocation } from "wouter";

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
      className="hover-elevate overflow-hidden group cursor-pointer h-full flex flex-col shadow-md"
      data-testid={`card-product-${product.id}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
    >
      <CardContent className="p-6 flex flex-col flex-1">
        {/* Header with Badge and Brand */}
        <div className="flex items-start justify-between mb-4">
          <Badge variant={getCategoryBadgeVariant()} className="text-xs">
            {product.category}
          </Badge>
          {product.brand && (
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {product.brand}
            </span>
          )}
        </div>

        {/* Product Name */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>

        {/* Chemical Name */}
        {product.chemicalName && (
          <p className="text-sm font-mono text-muted-foreground mb-4" data-testid={`text-chemical-${product.id}`}>
            {product.chemicalName}
          </p>
        )}

        {/* Specifications */}
        {(product.concentration || product.quantity) && (
          <div className="flex flex-wrap gap-3 text-sm mb-4">
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
        <div className="mt-4 pt-4 border-t">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Prijs</p>
              <p className="text-3xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
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
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            In Winkelwagen
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
