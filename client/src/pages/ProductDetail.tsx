import { useQuery } from "@tanstack/react-query";
import { useRoute, useLocation } from "wouter";
import type { Product } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, ArrowLeft, CheckCircle2, AlertTriangle, Beaker } from "lucide-react";
import { useState } from "react";
import CartSidebar from "@/components/CartSidebar";
import type { CartItem } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { toast } = useToast();

  const { data: product, isLoading, error } = useQuery<Product>({
    queryKey: [`/api/products/${params?.id}`],
    enabled: !!params?.id,
  });

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    toast({
      title: "Toegevoegd aan winkelwagen",
      description: `${product.name} is toegevoegd aan uw winkelwagen.`,
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-muted-foreground">Product laden...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header
          cartItemCount={cartItemCount}
          onCartClick={() => setIsCartOpen(true)}
          searchQuery=""
          onSearchChange={() => {}}
          selectedCategory="all"
          onCategoryChange={() => {}}
        />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product niet gevonden</h1>
            <Button onClick={() => setLocation("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Terug naar overzicht
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery=""
        onSearchChange={() => {}}
        selectedCategory="all"
        onCategoryChange={() => {}}
      />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Terug naar overzicht
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="space-y-4">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain bg-gray-50"
                    />
                  ) : (
                    <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <Beaker className="h-24 w-24 text-primary/30" />
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="default" className="text-sm">
                    {product.category}
                  </Badge>
                  {product.brand && (
                    <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
                      {product.brand}
                    </span>
                  )}
                </div>
                
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                
                {product.chemicalName && (
                  <p className="text-lg font-mono text-muted-foreground mb-4">
                    {product.chemicalName}
                  </p>
                )}
              </div>

              {product.description && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Beschrijving</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}

              {/* Specifications */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Specificaties</h3>
                  <div className="space-y-3">
                    {product.concentration && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Concentratie:</span>
                        <span className="font-medium">{product.concentration}</span>
                      </div>
                    )}
                    {product.quantity && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Hoeveelheid:</span>
                        <span className="font-medium">{product.quantity}</span>
                      </div>
                    )}
                    {product.ingredients && (
                      <div className="pt-3 border-t">
                        <span className="text-muted-foreground block mb-2">Ingrediënten:</span>
                        <span className="text-sm">{product.ingredients}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Price and Add to Cart */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                        Prijs
                      </p>
                      <p className="text-4xl font-bold text-primary">
                        €{product.priceEur.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleAddToCart(product)}
                    size="lg"
                    className="w-full"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    In Winkelwagen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Usage & Dosage */}
            {(product.usage || product.dosage) && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Beaker className="mr-2 h-5 w-5" />
                    Gebruik & Dosering
                  </h3>
                  <div className="space-y-4">
                    {product.usage && (
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                          Gebruik:
                        </h4>
                        <p className="text-sm">{product.usage}</p>
                      </div>
                    )}
                    {product.dosage && (
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                          Dosering:
                        </h4>
                        <p className="text-sm">{product.dosage}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                    Voordelen
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Warnings */}
            {product.warnings && product.warnings.length > 0 && (
              <Card className="md:col-span-2 border-amber-200 bg-amber-50/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-amber-900">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Waarschuwingen & Voorzorgsmaatregelen
                  </h3>
                  <ul className="space-y-2">
                    {product.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="mr-2 h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-amber-900">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
