import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group block overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:shadow-card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.originalPrice && (
          <Badge className="absolute left-3 top-3 bg-destructive text-destructive-foreground">
            Sale
          </Badge>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80">
            <Badge variant="secondary" className="text-sm">Out of Stock</Badge>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <p className="text-xs font-medium text-primary">{product.brand}</p>
        <h3 className="mt-1 line-clamp-1 font-semibold transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        
        <div className="mt-2 flex items-center gap-1">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          <Button
            size="icon"
            variant="secondary"
            className={cn(
              "h-9 w-9 shrink-0 transition-colors",
              product.inStock ? "hover:bg-primary hover:text-primary-foreground" : "opacity-50"
            )}
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic
            }}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
