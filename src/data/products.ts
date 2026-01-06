export interface Product {
  id: string;
  name: string;
  category: "Computer Monitors" | "Phone Accessories" | "Computer Accessories";
  description: string;
  specs: string[];
  price: number;
  originalPrice?: number;
  image: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // Computer Monitors (10 products)
{
    id: "mon-001",
    name: "Zentrix Pro Curve 32",
    category: "Computer Monitors",
    description: "Immerse yourself in a curved 32-inch display designed for productivity and entertainment. The 1500R curve provides an enveloping viewing experience.",
    specs: ["32-inch QHD (2560x1440)", "VA Curved Panel 1500R", "165Hz Refresh Rate", "1ms MPRT", "FreeSync Premium", "Built-in Speakers"],
    price: 379.99,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.6,
    reviews: 218
  },
  {
    id: "mon-002",
    name: "EtherFlow Studio 24",
    category: "Computer Monitors",
    description: "A professional-grade monitor with factory-calibrated colors for graphic design, photo editing, and video production workflows.",
    specs: ["24-inch FHD (1920x1080)", "IPS Panel 99% sRGB", "75Hz Refresh Rate", "5ms Response Time", "Pivot/Swivel/Tilt Stand", "VESA Mount Compatible"],
    price: 189.99,
    image: "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.5,
    reviews: 156
  },
  {
    id: "mon-003",
    name: "PixelPrime Compact 22",
    category: "Computer Monitors",
    description: "Space-saving 22-inch monitor ideal for home offices and small workspaces without compromising on image quality.",
    specs: ["22-inch FHD (1920x1080)", "IPS Panel", "60Hz Refresh Rate", "5ms Response Time", "Blue Light Filter", "Slim Bezel Design"],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: "mon-004",
    name: "NeonEdge Gaming 24",
    category: "Computer Monitors",
    description: "Entry-level gaming monitor with fast refresh rates and vivid colors, perfect for casual gamers upgrading their setup.",
    specs: ["24-inch FHD (1920x1080)", "VA Panel", "144Hz Refresh Rate", "1ms MPRT", "FreeSync", "Adjustable Stand"],
    price: 179.99,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.4,
    reviews: 267
  },
  {
    id: "mon-005",
    name: "Horizon View 15.6 Portable",
    category: "Computer Monitors",
    description: "Ultra-slim and convenient, this 15.6-inch portable monitor delivers crisp FHD resolution for work and entertainment anywhere.",
    specs: ["15.6-inch FHD (1920x1080)", "IPS Panel", "Ultra-Slim Design", "USB-C & HDMI Support", "Zero Bezel Screen"],
    price: 46.99,
    image: "https://m.media-amazon.com/images/I/71pI+yjcrFL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: "mon-006",
    name: "EliteCrystal 2K Travel Display",
    category: "Computer Monitors",
    description: "Experience ultimate 2K resolution on a 13.5-inch screen. 100% sRGB color coverage perfect for mobile graphics and design.",
    specs: ["13.5-inch 2K (2256x1504)", "100% sRGB Color Gamut", "IPS FHD Display", "USB-C & HDMI", "Compatible with Mac/PC/PS5"],
    price: 79.90,
    image: "https://m.media-amazon.com/images/I/51lsgT1bCuL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.8,
    reviews: 85
  },
  {
    id: "mon-007",
    name: "Velocity Pro Gaming 200Hz",
    category: "Computer Monitors",
    description: "Large 23.8-inch portable monitor with an ultra-fast 200Hz refresh rate, dedicated to professional gamers.",
    specs: ["23.8-inch FHD (1080P)", "200Hz Refresh Rate", "FreeSync Technology", "Dual Built-in Speakers", "Adjustable Kickstand"],
    price: 142.49,
    image: "https://m.media-amazon.com/images/I/71eRmVsMSIL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: "mon-008",
    name: "SlimLink 15.6 Zero-Frame",
    category: "Computer Monitors",
    description: "The perfect laptop extender with a bezel-less design, ultra-lightweight and easy to carry on any trip.",
    specs: ["15.6-inch 1080P FHD", "IPS Zero Frame", "Kickstand Integrated", "Lightweight Travel Edition", "Plug and Play USB-C"],
    price: 49.99,
    image: "https://m.media-amazon.com/images/I/71FUhUOg+ZL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.4,
    reviews: 96
  },
  {
    id: "mon-009",
    name: "Visionary OLED 3K Master",
    category: "Computer Monitors",
    description: "The pinnacle of display technology with an OLED 3K panel, 120Hz refresh rate, and absolute contrast for an unlimited visual experience.",
    specs: ["16-inch OLED 3K (2880x1800)", "120Hz / 0.1ms Response", "100% DCI-P3 Color", "500 Nits Brightness", "100,000:1 Contrast Ratio"],
    price: 329.99,
    image: "https://m.media-amazon.com/images/I/81-UxvwNPsL._AC_SX466_.jpg",
    inStock: true,
    rating: 5.0,
    reviews: 45
  },
  {
    id: "mon-010",
    name: "OmniDesk Office 120Hz",
    category: "Computer Monitors",
    description: "Standard office computer monitor with a 120Hz refresh rate for smooth motion and eye protection during long work hours.",
    specs: ["23.8-inch 1080P FHD", "120Hz Refresh Rate", "HDMI/DP/VGA Ports", "VESA Mount Compatible", "Eye Care Technology"],
    price: 79.99,
    image: "https://m.media-amazon.com/images/I/517Swl+BfkL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.3,
    reviews: 156
  },
  {
    id: "mon-011",
    name: "PivotStream 16 Rotating",
    category: "Computer Monitors",
    description: "Smart design with a rotating stand, 16-inch screen with 16:10 ratio helps increase vertical display space for content.",
    specs: ["16-inch FHD IPS (1200P)", "16:10 Aspect Ratio", "1500:1 Contrast Ratio", "360 Rotating Stand", "Full Function USB-C"],
    price: 69.99,
    image: "https://m.media-amazon.com/images/I/61DzBfgqpZL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 72
  },

  // Phone Accessories
  {
    id: "phone-001",
    name: "3-in-1 Wireless Charging Station",
    category: "Phone Accessories",
    description: "All-in-one wireless charging solution for iPhone, Apple Watch, and AirPods. Sleek design keeps your workspace professional.",
    specs: ["3-in-1 Wireless Charging", "Compatible with iPhone 12-17", "Supports Apple Watch & AirPods", "LED Status Indicator", "Smart Overheat Protection"],
    price: 25.99,
    image: "https://m.media-amazon.com/images/I/61HO7-q0JNL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 512
  },
  {
    id: "phone-002",
    name: "Foldable Keychain Phone Stand (4 Pack)",
    category: "Phone Accessories",
    description: "Set of 4 mini phone stands with integrated keychains. Perfect for travel, office use, or everyday convenience.",
    specs: ["4-Pack Mixed Colors", "Foldable Design", "Integrated Keychain", "Durable ABS Material", "Optimal Video Call Angle"],
    price: 7.99,
    image: "https://m.media-amazon.com/images/I/61-OHFPZSUL._AC_SY741_.jpg",
    inStock: true,
    rating: 4.3,
    reviews: 128
  },
  {
    id: "phone-003",
    name: "Magnetic Leather Card Holder Wallet",
    category: "Phone Accessories",
    description: "Premium leather magnetic wallet for phone backs. Integrated RFID blocking technology protects your bank card information.",
    specs: ["Ultra-Strong MagSafe Magnet", "Premium Leather Material", "RFID Blocking Technology", "Holds up to 3 Cards", "Ultra-Slim Design"],
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/71kzx+jL0qL._AC_SX679_.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 342
  },
  {
    id: "phone-004",
    name: "50-Inch Extendable Selfie Stick Tripod",
    category: "Phone Accessories",
    description: "Professional extendable selfie stick with integrated tripod for filming and photography. Includes a convenient Bluetooth remote.",
    specs: ["50-inch Max Length", "Included Bluetooth Remote", "360-degree Rotation", "Stable Tripod Base", "Universal Smartphone Compatibility"],
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/61GZzMcZxVL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.6,
    reviews: 890
  },
  {
    id: "phone-005",
    name: "3-in-2 Multi Charging Cable (4FT)",
    category: "Phone Accessories",
    description: "Versatile charging cable with Apple Watch charger and USB-C/Lightning ports. An essential accessory for travel or camping.",
    specs: ["4ft Length (1.2m)", "Simultaneous Charging", "Dedicated Apple Watch Charger", "Braided Tangle-Free Cable", "Fast Charge Support"],
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/71YPwcN-WiL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.4,
    reviews: 215
  },
  {
    id: "phone-006",
    name: "Universal Car Air Vent Phone Mount",
    category: "Phone Accessories",
    description: "Car phone holder with a durable metal hook clip. Keeps your phone absolutely stable even on bumpy roads.",
    specs: ["Durable Metal Hook Clip", "360-degree Rotation", "Compatible with All Air Vents", "One-Hand Operation", "Anti-Scratch Padding"],
    price: 12.34,
    image: "https://m.media-amazon.com/images/I/81woLlSmlHL._AC_SX679_.jpg",
    inStock: true,
    rating: 4.8,
    reviews: 673
  },
  {
    id: "phone-007",
    name: "PulseBuds Wireless Pro",
    category: "Phone Accessories",
    description: "True wireless earbuds with active noise cancellation, transparency mode, and premium audio drivers for immersive sound.",
    specs: ["Active Noise Cancellation", "30-Hour Battery Life", "IPX5 Water Resistant", "Touch Controls", "Wireless Charging Case", "Low Latency Gaming Mode"],
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.8,
    reviews: 678
  },
  {
    id: "phone-008",
    name: "ApexLink PowerDock Pro",
    category: "Phone Accessories",
    description: "Premium wireless charging station with fast charging support for multiple devices simultaneously. Sleek aluminum design complements any desk.",
    specs: ["15W Fast Wireless Charging", "3-Device Charging", "Qi Certified", "LED Indicators", "Anti-Slip Surface", "USB-C Input"],
    price: 79.99,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.6,
    reviews: 423
  },

  // Computer Accessories
  {
    id: "comp-001",
    name: "VelocityKeys RGB Mechanical",
    category: "Computer Accessories",
    description: "Full-size mechanical keyboard with customizable RGB lighting and tactile switches for the ultimate typing experience.",
    specs: ["Cherry MX Blue Switches", "Per-Key RGB Lighting", "Aluminum Frame", "Detachable USB-C Cable", "Macro Programming", "N-Key Rollover"],
    price: 149.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.8,
    reviews: 567
  },
  {
    id: "comp-002",
    name: "Fully Adjustable Dual Monitor Stand",
    category: "Computer Accessories",
    description: "Versatile dual monitor stand with flexible adjustment. Optimizes desk space and improves your sitting posture.",
    specs: ["Supports 13–32 inch Screens", "VESA 75x75/100x100 Standard", "2-9kg Weight Limit per Arm", "360-degree Rotation", "C-Clamp or Grommet Mount"],
    price: 74.99,
    image: "https://m.media-amazon.com/images/I/61dY3FYzJcL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 328
  },
  {
    id: "comp-003",
    name: "Acrylic Waterproof Keyboard Cover",
    category: "Computer Accessories",
    description: "Transparent acrylic keyboard protector. The perfect solution for dustproofing, spillproofing, and preventing pets from interfering with your keys.",
    specs: ["High-Quality Acrylic Material", "Elegant Transparent Design", "Waterproof & Dustproof", "Fits 15.6-inch Laptops", "Surface Scratch Protection"],
    price: 31.99,
    image: "https://m.media-amazon.com/images/I/51ya-CeSM0L._AC_SL1500_.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: "comp-004",
    name: "Adjustable Metal Laptop Riser",
    category: "Computer Accessories",
    description: "Foldable metal laptop stand. Smart design improves heat dissipation and elevates the screen to optimal eye level.",
    specs: ["Durable Alloy Material", "Portable Foldable Design", "Supports 10-15.6 inch Laptops", "Ventilated Cooling Design", "Anti-Slip Rubber Pads"],
    price: 17.99,
    image: "https://m.media-amazon.com/images/I/71Api8I7QML._AC_SX466_.jpg",
    inStock: true,
    rating: 4.6,
    reviews: 1240
  },
  {
    id: "comp-005",
    name: "Eye-Caring LED Desk Lamp with Clamp",
    category: "Computer Accessories",
    description: "Dedicated office LED desk lamp with a sturdy clamp. Maximum eye protection with multiple brightness modes and a flexible arm.",
    specs: ["3 Light Color Modes", "10 Brightness Levels", "360-degree Rotating Arm", "Convenient USB Power", "High-Quality Metal Material"],
    price: 22.99,
    image: "https://m.media-amazon.com/images/I/61RJ3ZzSURL._AC_SX679_.jpg",
    inStock: true,
    rating: 4.8,
    reviews: 562
  },
  {
    id: "comp-006",
    name: "Monitor Memo Board (2pcs Set)",
    category: "Computer Accessories",
    description: "Set of 2 memo boards that attach to the side of your monitor. Helps manage tasks and keeps sticky notes neatly in sight.",
    specs: ["2-Piece Set", "Transparent Plastic Material", "Strong 3M Adhesive", "Mounts on Monitor Edge", "Holds Notes & Business Cards"],
    price: 6.98,
    image: "https://m.media-amazon.com/images/I/61yjorGIhAL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.4,
    reviews: 175
  },
  {
    id: "comp-007",
    name: "Dual Monitor Stand Riser with Drawer",
    category: "Computer Accessories",
    description: "Dual monitor riser with an integrated drawer and pen holders. Excellent solution for a clean and organized workspace.",
    specs: ["Supports Two Monitors", "Storage Drawer", "Integrated 2 Pen Holders", "Engineered Wood Material", "Easy Assembly"],
    price: 35.97,
    image: "https://m.media-amazon.com/images/I/715+qntQ7xL._AC_SX679_.jpg",
    inStock: true,
    rating: 4.5,
    reviews: 218
  },
  {
    id: "comp-008",
    name: "Home Office Pro Lap Desk",
    category: "Computer Accessories",
    description: "Laptop lap desk with integrated wrist rest and mouse pad. Work comfortably from the sofa, bed, or while traveling.",
    specs: ["Fits up to 15.6 inch Laptops", "Integrated Mouse Pad", "Dedicated Phone Slot", "Comfortable Wrist Rest", "Black Carbon Fiber Surface"],
    price: 38.87,
    image: "https://m.media-amazon.com/images/I/81BrD6Y4ieL._AC_SX466_.jpg",
    inStock: true,
    rating: 4.7,
    reviews: 432
  },
  {
    id: "comp-009",
    name: "CloudRest Wrist Pad",
    category: "Computer Accessories",
    description: "Memory foam wrist rest with cooling gel layer for comfortable typing and reduced strain during long work hours.",
    specs: ["Memory Foam Core", "Cooling Gel Layer", "Anti-Slip Base", "Easy Clean Cover", "Keyboard & Mouse Set", "Ergonomic Design"],
    price: 29.99,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: "comp-010",
    name: "GlideMax XL Mouse Pad",
    category: "Computer Accessories",
    description: "Extended gaming mouse pad with micro-texture surface for precise tracking and stitched edges for durability.",
    specs: ["900x400mm Size", "Micro-Texture Surface", "Stitched Edges", "Anti-Slip Rubber Base", "3mm Thickness", "Machine Washable"],
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.6,
    reviews: 298
  },
  {
    id: "comp-011",
    name: "SonicWave Desktop Speakers",
    category: "Computer Accessories",
    description: "Premium 2.1 desktop speaker system with rich bass and clear highs. Perfect for gaming, movies, and music.",
    specs: ["50W Total Power", "Subwoofer Included", "Bluetooth 5.0", "Aux & USB Input", "Touch Volume Control", "LED Accent Lighting"],
    price: 89.99,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=400&fit=crop",
    inStock: true,
    rating: 4.6,
    reviews: 267
  }
];

export const categories = [
  {
    id: "computer-monitors",
    name: "Computer Monitors",
    description: "High-resolution displays for work and play",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&h=400&fit=crop",
    productCount: products.filter(p => p.category === "Computer Monitors").length
  },
  {
    id: "phone-accessories",
    name: "Phone Accessories",
    description: "Essential add-ons for your mobile devices",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=400&fit=crop",
    productCount: products.filter(p => p.category === "Phone Accessories").length
  },
  {
    id: "computer-accessories",
    name: "Computer Accessories",
    description: "Upgrade your workspace with premium peripherals",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=400&fit=crop",
    productCount: products.filter(p => p.category === "Computer Accessories").length
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.rating >= 4.6).slice(0, 8);
};
