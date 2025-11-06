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
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white" data-testid={`section-${title}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-gray-100">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-md">
            <span className="text-2xl">{icon}</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent" data-testid={`heading-${title}`}>
              {title}
            </h2>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              {products.length} {products.length === 1 ? 'product' : 'producten'} beschikbaar
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
