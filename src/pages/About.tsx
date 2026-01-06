import { Cpu, Target, Heart, Zap } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make cutting-edge technology accessible to everyone, empowering individuals and businesses to thrive in the digital age.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make is guided by our commitment to providing exceptional customer experiences and genuine value.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously seek out the latest technological advancements to bring you products that push boundaries and exceed expectations.",
  },
];

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "500+", label: "Products" },
  { value: "99%", label: "Satisfaction Rate" },
  { value: "24/7", label: "Customer Support" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden tech-gradient-subtle py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl tech-gradient">
              <Cpu className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="tech-gradient-text">MATTHEW SERRAN</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We're passionate about bringing the best in technology to your fingertips. 
              Founded with a vision to democratize access to premium tech products, MATTHEW SERRAN 
              has grown to become a trusted destination for tech enthusiasts worldwide.
            </p>
          </div>
        </div>
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </section>

      {/* Story */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  MATTHEW SERRAN began with a simple observation: quality technology products were 
                  often inaccessible due to high prices or complicated purchasing experiences. 
                  We set out to change that.
                </p>
                <p>
                  Today, we curate a carefully selected range of computer monitors, phone 
                  accessories, and computer peripherals that meet our strict standards for 
                  quality, value, and reliability. Each product in our catalog has been 
                  vetted by our team of tech experts.
                </p>
                <p>
                  Our commitment goes beyond just selling products. We provide comprehensive 
                  support, detailed product information, and a seamless shopping experience 
                  that puts you, the customer, first.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl bg-secondary/50">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=600&fit=crop"
                  alt="Technology workspace"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 flex h-32 w-32 items-center justify-center rounded-2xl tech-gradient shadow-tech">
                <div className="text-center text-primary-foreground">
                  <p className="text-3xl font-bold">5+</p>
                  <p className="text-sm">Years of Trust</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">What We Stand For</h2>
            <p className="mt-4 text-muted-foreground">
              Our core values guide everything we do
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border bg-card p-8 transition-shadow hover:shadow-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl tech-gradient p-8 lg:p-16">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-primary-foreground lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-secondary/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              We envision a world where everyone has access to the technology they need 
              to succeed. Whether you're a professional looking for the perfect monitor, 
              a student needing reliable accessories, or an enthusiast seeking the latest 
              gear—MATTHEW SERRAN is here to help you find exactly what you need at a price 
              that makes sense.
            </p>
            <p className="mt-4 text-lg font-medium text-primary">
              Smart Technology. Accessible to All.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
