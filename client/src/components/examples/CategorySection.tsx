import CategorySection from "../CategorySection";
import type { Product } from "@shared/schema";

export default function CategorySectionExample() {
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
      id: "test-cypio",
      name: "Test Cypio",
      chemicalName: "Testosteron Cypionate",
      category: "injectable-steroids",
      brand: "MEDINA",
      concentration: "300 mg/ml",
      quantity: "10 ml",
      priceEur: 34.16,
    },
    {
      id: "tren-a",
      name: "Tren A",
      chemicalName: "Trenbolone Acetate",
      category: "injectable-steroids",
      brand: "MEDINA",
      concentration: "100 mg/ml",
      quantity: "10 ml",
      priceEur: 44.42,
    },
  ];

  return (
    <CategorySection
      title="Injecteerbare Steroïden"
      icon="💉"
      products={sampleProducts}
      onAddToCart={(product) => console.log("Added:", product.name)}
    />
  );
}
