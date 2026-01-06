import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Check, Truck, Shield, RotateCcw } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[50vh] items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Product Not Found</h1>
            <p className="mt-2 text-muted-foreground">
              The product you're looking for doesn't exist.
            </p>
            <Button asChild className="mt-6">
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Product Details */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl bg-secondary/50 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-300 hover:scale-105"
            />
            {product.originalPrice && (
              <Badge className="absolute left-4 top-4 bg-destructive text-destructive-foreground">
                {discount}% OFF
              </Badge>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-medium text-primary">{product.brand}</p>
              <h1 className="mt-1 text-3xl font-bold tracking-tight">{product.name}</h1>
              
              <div className="mt-4 flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  {product.reviews} reviews
                </span>
                <Badge variant={product.inStock ? "secondary" : "outline"}>
                  {product.inStock ? (
                    <><Check className="mr-1 h-3 w-3" /> In Stock</>
                  ) : (
                    "Out of Stock"
                  )}
                </Badge>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 text-muted-foreground">{product.description}</p>

            {/* Specs */}
            <div className="mt-6">
              <h3 className="font-semibold">Specifications</h3>
              <ul className="mt-3 space-y-2">
                {product.specs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="flex-1 gap-2 shadow-tech"
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl border p-4">
              <div className="text-center">
                <Truck className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-1 text-xs">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-1 text-xs">Secure Payment</p>
              </div>
              <div className="text-center">
                <RotateCcw className="mx-auto h-5 w-5 text-primary" />
                <p className="mt-1 text-xs">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
