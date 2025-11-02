import { useState } from "react";
import CartSidebar from "../CartSidebar";
import type { CartItem, Product } from "@shared/schema";
import { Button } from "@/components/ui/button";

export default function CartSidebarExample() {
  const [isOpen, setIsOpen] = useState(true);
  
  const sampleProducts: Product[] = [
    {
      id: "test-enan",
      name: "Test Enan",
      chemicalName: "Testosteron Enanthate",
      category: "injectable-steroids",
      brand: "MEDINA",
      concentration: "300 mg/ml",
      quantity: "10 ml",
      priceEur: 34.16,
    },
    {
      id: "bpc-157",
      name: "BPC 157",
      chemicalName: "Body Protection Compound-157",
      category: "peptides",
      brand: "ENDOGENIC",
      quantity: "5 mg",
      priceEur: 37.59,
    },
  ];

  const [items, setItems] = useState<CartItem[]>([
    { product: sampleProducts[0], quantity: 2 },
    { product: sampleProducts[1], quantity: 1 },
  ]);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    setItems(items.map(item => 
      item.product.id === productId 
        ? { ...item, quantity: Math.max(1, newQuantity) }
        : item
    ));
  };

  const handleRemoveItem = (productId: string) => {
    setItems(items.filter(item => item.product.id !== productId));
  };

  return (
    <div className="relative h-screen">
      <Button onClick={() => setIsOpen(true)}>Open Cart</Button>
      <CartSidebar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
