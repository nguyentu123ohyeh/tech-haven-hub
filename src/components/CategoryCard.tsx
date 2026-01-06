import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export function CategoryCard({ name, description, image, productCount }: CategoryCardProps) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(name)}`}
      className="group relative block overflow-hidden rounded-2xl"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-primary-foreground">{name}</h3>
        <p className="mt-1 text-sm text-primary-foreground/80">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-primary-foreground/90">
            {productCount} products
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-primary-foreground transition-transform group-hover:translate-x-1">
            Shop now <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
