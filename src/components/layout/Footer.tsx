import { Link } from "react-router-dom";
import { Cpu, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg tech-gradient">
                <Cpu className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">MATTHEW SERRAN</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium technology products. We make smart tech accessible to everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="transition-colors hover:text-primary">Home</Link>
              </li>
              <li>
                <Link to="/products" className="transition-colors hover:text-primary">Products</Link>
              </li>
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/products?category=Computer+Monitors" className="transition-colors hover:text-primary">
                  Computer Monitors
                </Link>
              </li>
              <li>
                <Link to="/products?category=Phone+Accessories" className="transition-colors hover:text-primary">
                  Phone Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=Computer+Accessories" className="transition-colors hover:text-primary">
                  Computer Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>500 Palmerston LnWaxhaw, North Carolina 28173</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+1 2277275197</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>xlwtenhosr56235@hotmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MATTHEW SERRAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
