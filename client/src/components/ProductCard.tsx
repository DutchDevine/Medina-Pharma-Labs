import type { Product } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const brandColor = product.brand === "ENDOGENIC" 
    ? "bg-orange-500 text-white" 
    : "bg-primary text-primary-foreground";

  return (
    <Card className="flex flex-col hover-elevate transition-all" data-testid={`card-product-${product.id}`}>
      <CardContent className="flex-1 p-6">
        <div className="mb-4 flex items-start justify-between">
          <Badge className={`${brandColor} text-xs`} data-testid={`badge-brand-${product.id}`}>
            {product.brand}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold mb-1" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground italic mb-4" data-testid={`text-chemical-${product.id}`}>
          {product.chemicalName}
        </p>

        {(product.concentration || product.quantity) && (
          <div className="mb-4 space-y-1">
            {product.concentration && (
              <p className="font-mono text-xs text-foreground">
                <span className="text-muted-foreground">Concentratie:</span>{" "}
                {product.concentration}
              </p>
            )}
            {product.quantity && (
              <p className="font-mono text-xs text-foreground">
                <span className="text-muted-foreground">Hoeveelheid:</span>{" "}
                {product.quantity}
              </p>
            )}
          </div>
        )}

        <div className="mt-auto">
          <p className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
            €{product.priceEur.toFixed(2)}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full"
          data-testid={`button-add-to-cart-${product.id}`}
        >
          <Plus className="mr-2 h-4 w-4" />
          Toevoegen
        </Button>
      </CardFooter>
    </Card>
  );
}
