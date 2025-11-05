import type { Product } from "@shared/schema";
import ProductCard from "./ProductCard";

interface CategorySectionProps {
  title: string;
  icon: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export default function CategorySection({
  title,
  icon,
  products,
  onAddToCart,
}: CategorySectionProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-8 bg-background" data-testid={`section-${title}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{icon}</span>
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight" data-testid={`heading-${title}`}>
              {title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {products.length} {products.length === 1 ? 'product' : 'producten'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
