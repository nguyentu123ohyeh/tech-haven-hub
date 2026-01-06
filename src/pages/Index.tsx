import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, Headphones, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { categories, getFeaturedProducts } from "@/data/products";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% protected transactions"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer service"
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day return policy"
  }
];

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden tech-gradient-subtle">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Welcome to MATTHEW SERRAN
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Discover the Future of{" "}
              <span className="tech-gradient-text">Smart Technology</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Explore our curated collection of premium tech products. From stunning displays 
              to essential accessories, find everything you need to elevate your digital life.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="gap-2 shadow-tech">
                <Link to="/products">
                  Shop Latest Tech
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Features Bar */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Shop by Category</h2>
              <p className="mt-2 text-muted-foreground">
                Browse our wide range of tech categories
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden gap-1 sm:flex">
              <Link to="/products">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                name={category.name}
                description={category.description}
                image={category.image}
                productCount={category.productCount}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
              <p className="mt-2 text-muted-foreground">
                Our top-rated products loved by customers
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden gap-1 sm:flex">
              <Link to="/products">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl tech-gradient p-8 lg:p-16">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground lg:text-4xl">
                Ready to Upgrade Your Tech?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Join thousands of satisfied customers who trust MATTHEW SERRAN for their technology needs. 
                Free shipping on all orders over $50.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-8"
              >
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-primary-foreground/5" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
