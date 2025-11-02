import ProductCard from "../ProductCard";
import type { Product } from "@shared/schema";

export default function ProductCardExample() {
  const sampleProduct: Product = {
    id: "test-enan",
    name: "Test Enan",
    chemicalName: "Testosteron Enanthate",
    category: "injectable-steroids",
    brand: "MEDINA",
    concentration: "300 mg/ml",
    quantity: "10 ml",
    priceEur: 34.16,
  };

  return (
    <div className="p-8 max-w-sm">
      <ProductCard
        product={sampleProduct}
        onAddToCart={(product) => console.log("Added to cart:", product.name)}
      />
    </div>
  );
}
