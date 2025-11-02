import { useState, useMemo } from "react";
import type { CartItem, Product } from "@shared/schema";
import { products, categoryNames, categoryIcons } from "@/lib/products";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

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

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.chemicalName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const groupedProducts = useMemo(() => {
    const groups: Record<string, Product[]> = {};
    filteredProducts.forEach((product) => {
      if (!groups[product.category]) {
        groups[product.category] = [];
      }
      groups[product.category].push(product);
    });
    return groups;
  }, [filteredProducts]);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById("catalog");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        cartItemCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="flex-1">
        <Hero onBrowseClick={scrollToCatalog} />

        <div id="catalog" className="space-y-8">
          {selectedCategory === "all" ? (
            Object.entries(groupedProducts).map(([category, categoryProducts]) => (
              <CategorySection
                key={category}
                title={categoryNames[category]}
                icon={categoryIcons[category]}
                products={categoryProducts}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <CategorySection
              title={categoryNames[selectedCategory]}
              icon={categoryIcons[selectedCategory]}
              products={filteredProducts}
              onAddToCart={handleAddToCart}
            />
          )}

          {filteredProducts.length === 0 && (
            <div className="container mx-auto px-4 py-20 text-center">
              <p className="text-xl text-muted-foreground">
                Geen producten gevonden voor uw zoekopdracht.
              </p>
            </div>
          )}
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
