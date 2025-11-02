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
    <section className="py-16 bg-background" data-testid={`section-${title}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-5xl">{icon}</span>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight" data-testid={`heading-${title}`}>
              {title}
            </h2>
            <p className="text-muted-foreground mt-1">
              {products.length} {products.length === 1 ? 'product' : 'producten'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
