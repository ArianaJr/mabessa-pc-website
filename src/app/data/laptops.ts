export interface Laptop {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  condition: "new" | "refurbished";
  image: string;
  specs: {
    processor: string;
    ram: string;
    storage: string;
    screen: string;
    graphics?: string;
  };
  features: string[];
  inStock: boolean;
  discount?: number;
  badge?: "bestseller" | "new" | "limited" | "student-pick";
  useCase?: ("student" | "office" | "design" | "business")[];
  category?: "budget" | "mid-range" | "premium";
}

export const laptops: Laptop[] = [
  // Premium Business Laptops
  {
    id: "hp-elitebook-1040-g8",
    name: "HP EliteBook 1040 G8",
    brand: "HP",
    price: 1450000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Core i7 11th Gen",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      screen: "14\" FHD IPS",
      graphics: "Intel Iris Xe Graphics",
    },
    features: [
      "Premium aluminum build",
      "Thunderbolt 4 ports",
      "Long battery life",
      "Backlit keyboard",
      "Bang & Olufsen speakers",
      "IR webcam with privacy shutter",
    ],
    inStock: true,
    badge: "new",
    useCase: ["business", "design"],
    category: "premium",
  },
  {
    id: "surface-laptop-4",
    name: "Microsoft Surface Laptop 4",
    brand: "Microsoft",
    price: 1200000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&h=600&fit=crop",
    specs: {
      processor: "AMD Ryzen 5 / Intel Core i5",
      ram: "16GB LPDDR4x",
      storage: "512GB NVMe SSD",
      screen: "13.5\" PixelSense Touchscreen",
      graphics: "AMD Radeon / Intel Iris Xe",
    },
    features: [
      "Premium Alcantara keyboard",
      "Touchscreen display",
      "All-day battery life",
      "Sleek design",
      "Windows 11 ready",
      "Fast Face authentication",
    ],
    inStock: true,
    badge: "bestseller",
    useCase: ["business", "design", "student"],
    category: "premium",
  },

  // Mid-Range Business & Student Laptops
  {
    id: "hp-elitebook-845-g8-r7",
    name: "HP EliteBook 845 G8 (Ryzen 7)",
    brand: "HP",
    price: 770000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=600&fit=crop",
    specs: {
      processor: "AMD Ryzen 7 PRO 5850U",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      screen: "14\" FHD IPS",
      graphics: "AMD Radeon Graphics",
    },
    features: [
      "Business-class performance",
      "Lightweight design",
      "MIL-STD tested durability",
      "Fast charging",
      "Excellent keyboard",
      "12 months warranty",
    ],
    inStock: true,
    badge: "bestseller",
    useCase: ["business", "student", "office"],
    category: "mid-range",
  },
  {
    id: "hp-elitebook-845-g8-r5",
    name: "HP EliteBook 845 G8 (Ryzen 5)",
    brand: "HP",
    price: 770000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=600&fit=crop",
    specs: {
      processor: "AMD Ryzen 5 PRO 4650U",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      screen: "14\" FHD IPS",
      graphics: "AMD Radeon Graphics",
    },
    features: [
      "Great multitasking",
      "Professional build quality",
      "Long battery life",
      "Secure BIOS",
      "Good for productivity",
      "9 months warranty",
    ],
    inStock: true,
    useCase: ["office", "student"],
    category: "mid-range",
  },
  {
    id: "surface-laptop-3",
    name: "Microsoft Surface Laptop 3",
    brand: "Microsoft",
    price: 750000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Core i5 / i7 10th Gen",
      ram: "8GB / 16GB LPDDR4x",
      storage: "256GB / 512GB NVMe SSD",
      screen: "13.5\" PixelSense Touchscreen",
      graphics: "Intel Iris Plus Graphics",
    },
    features: [
      "Touchscreen display",
      "Premium materials",
      "Great speakers",
      "Windows Hello",
      "Lightweight",
      "6 months warranty",
    ],
    inStock: true,
    badge: "student-pick",
    useCase: ["student", "design", "office"],
    category: "mid-range",
  },
  {
    id: "surface-laptop-2",
    name: "Microsoft Surface Laptop 2",
    brand: "Microsoft",
    price: 750000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1564586497854-b96f8eb4bb3b?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Core i5 / i7 8th Gen",
      ram: "8GB LPDDR3",
      storage: "256GB NVMe SSD",
      screen: "13.5\" PixelSense Touchscreen",
      graphics: "Intel UHD Graphics 620",
    },
    features: [
      "Classic Surface design",
      "Vibrant touchscreen",
      "Comfortable typing",
      "Portable and light",
      "Good battery life",
      "6 months warranty",
    ],
    inStock: true,
    useCase: ["student", "office"],
    category: "mid-range",
  },
  {
    id: "hp-elitebook-835-g7",
    name: "HP EliteBook 835 G7",
    brand: "HP",
    price: 650000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=600&fit=crop",
    specs: {
      processor: "AMD Ryzen 5 PRO 4650U",
      ram: "8GB / 16GB DDR4",
      storage: "256GB / 512GB NVMe SSD",
      screen: "13.3\" FHD IPS",
      graphics: "AMD Radeon Graphics",
    },
    features: [
      "Ultra-portable 13.3\" design",
      "Business security features",
      "Fast performance",
      "Durable build",
      "Great for travel",
      "9 months warranty",
    ],
    inStock: true,
    useCase: ["business", "student"],
    category: "mid-range",
  },
  {
    id: "hp-pro-x2",
    name: "HP Pro x2 612 G2 (2-in-1)",
    brand: "HP",
    price: 650000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Core i5 7th Gen",
      ram: "8GB LPDDR3",
      storage: "256GB SSD",
      screen: "12\" FHD Touchscreen",
      graphics: "Intel HD Graphics 615",
    },
    features: [
      "Detachable keyboard included",
      "Touchscreen with stylus support",
      "2-in-1 versatility",
      "Perfect for presentations",
      "Compact and portable",
      "6 months warranty",
    ],
    inStock: true,
    badge: "student-pick",
    useCase: ["student", "design"],
    category: "mid-range",
  },
  {
    id: "hp-probook-640-g5",
    name: "HP ProBook 640 G5",
    brand: "HP",
    price: 640000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Core i5 8th Gen",
      ram: "8GB / 16GB DDR4",
      storage: "256GB / 512GB SSD",
      screen: "14\" HD / FHD",
      graphics: "Intel UHD Graphics 620",
    },
    features: [
      "Reliable performance",
      "Durable design",
      "Good connectivity",
      "Business features",
      "Value for money",
      "6 months warranty",
    ],
    inStock: true,
    useCase: ["office", "student"],
    category: "mid-range",
  },

  // Budget & Student Laptops
  {
    id: "hp-probook-11e-g5",
    name: "HP ProBook 11 EE G5",
    brand: "HP",
    price: 380000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Celeron N4100",
      ram: "4GB / 8GB DDR4",
      storage: "128GB / 256GB SSD",
      screen: "11.6\" HD",
      graphics: "Intel UHD Graphics 600",
    },
    features: [
      "Perfect for students",
      "Compact and lightweight",
      "Durable construction",
      "Long battery life",
      "Great for basic tasks",
      "6 months warranty",
    ],
    inStock: true,
    badge: "student-pick",
    useCase: ["student"],
    category: "budget",
  },
  {
    id: "hp-probook-mt22",
    name: "HP ProBook MT22",
    brand: "HP",
    price: 420000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&h=600&fit=crop",
    specs: {
      processor: "AMD A-Series A4/A6",
      ram: "8GB DDR4",
      storage: "256GB SSD",
      screen: "12.5\" HD",
      graphics: "AMD Radeon R4/R5",
    },
    features: [
      "Affordable and reliable",
      "Good for everyday use",
      "Compact 12.5\" form factor",
      "Decent performance",
      "Student-friendly",
      "6 months warranty",
    ],
    inStock: true,
    useCase: ["student", "office"],
    category: "budget",
  },
  {
    id: "nec-versapro-11e",
    name: "NEC VersaPro 11e",
    brand: "NEC",
    price: 350000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Celeron N3450",
      ram: "4GB DDR3L",
      storage: "128GB SSD",
      screen: "11.6\" HD",
      graphics: "Intel HD Graphics 500",
    },
    features: [
      "Budget-friendly option",
      "Japanese quality build",
      "Lightweight and portable",
      "Good for basic computing",
      "Great for students",
      "6 months warranty",
    ],
    inStock: true,
    badge: "student-pick",
    useCase: ["student"],
    category: "budget",
  },
  {
    id: "dell-latitude-3120",
    name: "Dell Latitude 3120",
    brand: "Dell",
    price: 350000,
    condition: "refurbished",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
    specs: {
      processor: "Intel Celeron N4500",
      ram: "4GB / 8GB DDR4",
      storage: "128GB / 256GB SSD",
      screen: "11.6\" HD",
      graphics: "Intel UHD Graphics",
    },
    features: [
      "Education-focused design",
      "Rugged and durable",
      "Spill-resistant keyboard",
      "Compact size",
      "Perfect for students",
      "6 months warranty",
    ],
    inStock: true,
    useCase: ["student"],
    category: "budget",
  },
];

export const featuredLaptops = laptops.filter(
  (laptop) => laptop.badge === "bestseller" || laptop.badge === "new"
).slice(0, 6);

export const studentLaptops = laptops.filter(
  (laptop) => laptop.useCase?.includes("student")
);

export const brands = Array.from(new Set(laptops.map((laptop) => laptop.brand))).sort();

export const budgetRanges = [
  { label: "Under 500K TZS", min: 0, max: 500000 },
  { label: "500K - 750K TZS", min: 500000, max: 750000 },
  { label: "750K - 1M TZS", min: 750000, max: 1000000 },
  { label: "Above 1M TZS", min: 1000000, max: Infinity },
];

export const ramOptions = ["4GB", "8GB", "16GB"];
export const storageOptions = ["128GB", "256GB", "512GB"];

// Student Package Bundles
export interface StudentPackage {
  id: string;
  title: string;
  subtitle: string;
  laptops: string[];
  price: number;
  features: string[];
  badge?: string;
}

export const studentPackages: StudentPackage[] = [
  {
    id: "secondary-starter",
    title: "Secondary School Starter",
    subtitle: "Perfect for O-Level & A-Level Students",
    laptops: ["nec-versapro-11e", "dell-latitude-3120", "hp-probook-11e-g5"],
    price: 350000,
    features: [
      "11.6\" portable laptops",
      "Perfect for research & assignments",
      "Microsoft Office compatible",
      "Long battery life",
      "Lightweight design",
      "6 months warranty",
    ],
    badge: "Most Popular",
  },
  {
    id: "university-essential",
    title: "University Essential Pack",
    subtitle: "Great for General Studies & Business Students",
    laptops: ["hp-probook-mt22", "hp-pro-x2", "hp-elitebook-835-g7"],
    price: 650000,
    features: [
      "Fast performance for multitasking",
      "Great for presentations",
      "Online learning ready",
      "Video call capable",
      "Solid build quality",
      "9 months warranty",
    ],
    badge: "Best Value",
  },
  {
    id: "programming-design",
    title: "Programming & Design Pro",
    subtitle: "For IT, Engineering & Creative Students",
    laptops: ["hp-elitebook-845-g8-r7", "surface-laptop-4", "hp-elitebook-1040-g8"],
    price: 1200000,
    features: [
      "Powerful processors",
      "16GB RAM for heavy tasks",
      "Large SSD storage",
      "Great for coding & design software",
      "Professional build quality",
      "12 months warranty",
    ],
    badge: "Premium Choice",
  },
];
