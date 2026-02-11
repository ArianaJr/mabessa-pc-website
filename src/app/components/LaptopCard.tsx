import { ShoppingCart, Eye, Star, Check } from "lucide-react";
import { motion } from "motion/react";
import { WhatsAppButton } from "./WhatsAppButton";

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

interface LaptopCardProps {
  laptop: Laptop;
  onViewDetails: (laptop: Laptop) => void;
  showCompare?: boolean;
  onCompareToggle?: (laptopId: string) => void;
  isComparing?: boolean;
}

const badgeConfig = {
  bestseller: {
    label: "Best Seller",
    color: "bg-gradient-to-r from-[#0078D4] to-[#50A8E8] text-white",
  },
  new: {
    label: "New Arrival",
    color: "bg-gradient-to-r from-[#10B981] to-[#059669] text-white",
  },
  limited: {
    label: "Limited",
    color: "bg-gradient-to-r from-[#FF9500] to-[#D97706] text-white",
  },
  "student-pick": {
    label: "Student Pick",
    color: "bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white",
  },
};

export function LaptopCard({ 
  laptop, 
  onViewDetails,
  showCompare = false,
  onCompareToggle,
  isComparing = false
}: LaptopCardProps) {
  const badgeInfo = laptop.badge ? badgeConfig[laptop.badge] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[#0078D4]/20 transition-all duration-300"
    >
      {/* Badge */}
      {badgeInfo && (
        <div className="absolute top-4 left-4 z-10">
          <div className={`${badgeInfo.color} px-3 py-1.5 rounded-full shadow-lg text-xs font-bold`}>
            {badgeInfo.label}
          </div>
        </div>
      )}

      {/* Compare Checkbox */}
      {showCompare && (
        <div className="absolute top-4 right-4 z-10">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => onCompareToggle?.(laptop.id)}
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
              isComparing
                ? "bg-[#0078D4] text-white shadow-lg"
                : "bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Check className="w-5 h-5" />
          </motion.button>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          src={laptop.image}
          alt={laptop.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Condition Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            laptop.condition === "new"
              ? "bg-[#10B981]/90 text-white"
              : "bg-[#0078D4]/90 text-white"
          }`}>
            {laptop.condition === "new" ? "Brand New" : "Certified Refurbished"}
          </span>
        </div>

        {/* Out of Stock Overlay */}
        {!laptop.inStock && (
          <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
            <div className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl shadow-xl">
              Out of Stock
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            {laptop.brand}
          </span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < 4
                    ? "fill-[#FF9500] text-[#FF9500]"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[#0078D4] transition-colors">
          {laptop.name}
        </h3>

        {/* Specs Grid */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Processor</span>
            <span className="font-semibold text-gray-900 text-right line-clamp-1 max-w-[60%]">
              {laptop.specs.processor.split(" ").slice(0, 4).join(" ")}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">RAM</span>
            <span className="font-semibold text-gray-900">{laptop.specs.ram}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Storage</span>
            <span className="font-semibold text-gray-900">{laptop.specs.storage}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Display</span>
            <span className="font-semibold text-gray-900">{laptop.specs.screen}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mb-4 pt-4 border-t border-gray-100">
          <div className="flex flex-col flex-1">
            <div className="text-2xl font-bold text-[#0078D4]">
              TZS {laptop.price.toLocaleString()}
            </div>
            {laptop.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                TZS {laptop.originalPrice.toLocaleString()}
              </div>
            )}
          </div>
          {laptop.discount && (
            <div className="px-2 py-1 bg-red-100 text-red-600 rounded-lg text-xs font-bold">
              Save {laptop.discount}%
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <WhatsAppButton laptopName={laptop.name} />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onViewDetails(laptop)}
            className="w-full px-4 py-3 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-[#0078D4] hover:text-[#0078D4] hover:bg-gray-50 transition-all font-semibold flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
