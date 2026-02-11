import { useState } from "react";
import { ArrowRight, Check, X, Zap, Battery, Cpu, HardDrive, Monitor, Award } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { laptops, Laptop } from "../data/laptops";
import { WhatsAppButton } from "../components/WhatsAppButton";

interface ComparePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function ComparePage({ onNavigate }: ComparePageProps) {
  const [laptop1, setLaptop1] = useState<Laptop | null>(null);
  const [laptop2, setLaptop2] = useState<Laptop | null>(null);

  const getAIRecommendation = (l1: Laptop, l2: Laptop) => {
    const score1 = calculateScore(l1);
    const score2 = calculateScore(l2);
    
    if (score1 > score2) {
      return {
        winner: l1.name,
        reason: `${l1.name} offers better overall value with ${l1.specs.ram} RAM and ${l1.specs.storage} storage. ${
          l1.price < l2.price ? "It's also more affordable, " : ""
        }making it a great choice for ${l1.useCase?.join(", ") || "general use"}.`,
      };
    } else {
      return {
        winner: l2.name,
        reason: `${l2.name} provides superior performance with ${l2.specs.ram} RAM and ${l2.specs.storage} storage. ${
          l2.price > l1.price ? "While it costs more, " : ""
        }it's worth the investment for ${l2.useCase?.join(", ") || "demanding tasks"}.`,
      };
    }
  };

  const calculateScore = (laptop: Laptop) => {
    let score = 0;
    const ram = parseInt(laptop.specs.ram);
    const storage = parseInt(laptop.specs.storage);
    
    score += ram * 10;
    score += storage / 10;
    score += laptop.condition === "new" ? 50 : 30;
    score -= laptop.price / 10000;
    
    return score;
  };

  const compareFeature = (feature1: any, feature2: any, higherIsBetter: boolean = true) => {
    if (feature1 === feature2) return "equal";
    if (higherIsBetter) {
      return feature1 > feature2 ? "better" : "worse";
    } else {
      return feature1 < feature2 ? "better" : "worse";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#E5F3FF] to-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray-200 shadow-sm mb-6"
          >
            <Zap className="w-5 h-5 text-[#0078D4]" />
            <span className="font-bold text-gray-700">AI-Powered Comparison</span>
          </motion.div>
          
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Compare Laptops Side-by-Side
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select any two laptops to see detailed comparisons and get AI-powered recommendations
          </p>
        </div>
      </section>

      {/* Laptop Selection */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Laptop 1 Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select First Laptop
              </label>
              <select
                value={laptop1?.id || ""}
                onChange={(e) => setLaptop1(laptops.find(l => l.id === e.target.value) || null)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0078D4] focus:outline-none text-gray-900 bg-white"
              >
                <option value="">Choose a laptop...</option>
                {laptops.map((laptop) => (
                  <option key={laptop.id} value={laptop.id}>
                    {laptop.name} - TZS {laptop.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Laptop 2 Selector */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Select Second Laptop
              </label>
              <select
                value={laptop2?.id || ""}
                onChange={(e) => setLaptop2(laptops.find(l => l.id === e.target.value) || null)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0078D4] focus:outline-none text-gray-900 bg-white"
              >
                <option value="">Choose a laptop...</option>
                {laptops.map((laptop) => (
                  <option key={laptop.id} value={laptop.id}>
                    {laptop.name} - TZS {laptop.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Results */}
      <AnimatePresence>
        {laptop1 && laptop2 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-12"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* AI Recommendation */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-3xl p-8 text-white mb-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold">AI Recommendation</h3>
                  </div>
                  <p className="text-xl text-white/90 leading-relaxed mb-4">
                    <span className="font-bold">{getAIRecommendation(laptop1, laptop2).winner}</span> is the recommended choice.
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {getAIRecommendation(laptop1, laptop2).reason}
                  </p>
                </div>
              </motion.div>

              {/* Comparison Table */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
                {/* Headers */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 border-b border-gray-200">
                  <div className="text-sm font-semibold text-gray-500">FEATURE</div>
                  <div className="text-center">
                    <div className="bg-white rounded-2xl p-4 border border-gray-200">
                      <img src={laptop1.image} alt={laptop1.name} className="w-full h-32 object-cover rounded-xl mb-3" />
                      <h4 className="font-bold text-gray-900 mb-1">{laptop1.name}</h4>
                      <p className="text-sm text-gray-500">{laptop1.brand}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-2xl p-4 border border-gray-200">
                      <img src={laptop2.image} alt={laptop2.name} className="w-full h-32 object-cover rounded-xl mb-3" />
                      <h4 className="font-bold text-gray-900 mb-1">{laptop2.name}</h4>
                      <p className="text-sm text-gray-500">{laptop2.brand}</p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <CompareRow
                  icon={<Award className="w-5 h-5" />}
                  feature="Price"
                  value1={`TZS ${laptop1.price.toLocaleString()}`}
                  value2={`TZS ${laptop2.price.toLocaleString()}`}
                  comparison={compareFeature(laptop1.price, laptop2.price, false)}
                />

                {/* Processor */}
                <CompareRow
                  icon={<Cpu className="w-5 h-5" />}
                  feature="Processor"
                  value1={laptop1.specs.processor}
                  value2={laptop2.specs.processor}
                />

                {/* RAM */}
                <CompareRow
                  icon={<Zap className="w-5 h-5" />}
                  feature="RAM"
                  value1={laptop1.specs.ram}
                  value2={laptop2.specs.ram}
                  comparison={compareFeature(parseInt(laptop1.specs.ram), parseInt(laptop2.specs.ram))}
                />

                {/* Storage */}
                <CompareRow
                  icon={<HardDrive className="w-5 h-5" />}
                  feature="Storage"
                  value1={laptop1.specs.storage}
                  value2={laptop2.specs.storage}
                  comparison={compareFeature(parseInt(laptop1.specs.storage), parseInt(laptop2.specs.storage))}
                />

                {/* Screen */}
                <CompareRow
                  icon={<Monitor className="w-5 h-5" />}
                  feature="Display"
                  value1={laptop1.specs.screen}
                  value2={laptop2.specs.screen}
                />

                {/* Condition */}
                <CompareRow
                  feature="Condition"
                  value1={laptop1.condition === "new" ? "Brand New" : "Refurbished"}
                  value2={laptop2.condition === "new" ? "Brand New" : "Refurbished"}
                  comparison={laptop1.condition === "new" && laptop2.condition !== "new" ? "better" : 
                             laptop2.condition === "new" && laptop1.condition !== "new" ? "worse" : "equal"}
                />

                {/* Best For */}
                <CompareRow
                  feature="Best For"
                  value1={laptop1.useCase?.join(", ") || "General use"}
                  value2={laptop2.useCase?.join(", ") || "General use"}
                />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{laptop1.name}</h4>
                  <p className="text-3xl font-bold text-[#0078D4] mb-4">
                    TZS {laptop1.price.toLocaleString()}
                  </p>
                  <WhatsAppButton laptopName={laptop1.name} />
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <h4 className="font-bold text-lg mb-2 text-gray-900">{laptop2.name}</h4>
                  <p className="text-3xl font-bold text-[#0078D4] mb-4">
                    TZS {laptop2.price.toLocaleString()}
                  </p>
                  <WhatsAppButton laptopName={laptop2.name} />
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Empty State */}
      {(!laptop1 || !laptop2) && (
        <section className="py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Select Two Laptops to Compare
            </h3>
            <p className="text-gray-600 mb-8">
              Choose any two laptops from our collection to see a detailed side-by-side comparison
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("shop")}
              className="px-8 py-3 bg-gradient-to-r from-[#0078D4] to-[#50A8E8] text-white rounded-xl hover:from-[#005A9E] hover:to-[#0078D4] transition-all font-semibold inline-flex items-center gap-2"
            >
              Browse All Laptops
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </section>
      )}

      <WhatsAppButton floating />
    </div>
  );
}

interface CompareRowProps {
  icon?: React.ReactNode;
  feature: string;
  value1: string;
  value2: string;
  comparison?: "better" | "worse" | "equal";
}

function CompareRow({ icon, feature, value1, value2, comparison }: CompareRowProps) {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 font-semibold text-gray-700">
        {icon && <div className="text-gray-400">{icon}</div>}
        {feature}
      </div>
      <div className={`text-center font-medium ${
        comparison === "better" ? "text-[#10B981]" : 
        comparison === "worse" ? "text-gray-500" : 
        "text-gray-900"
      }`}>
        <div className="flex items-center justify-center gap-2">
          {comparison === "better" && <Check className="w-5 h-5 text-[#10B981]" />}
          {comparison === "worse" && <X className="w-5 h-5 text-gray-400" />}
          <span>{value1}</span>
        </div>
      </div>
      <div className={`text-center font-medium ${
        comparison === "worse" ? "text-[#10B981]" : 
        comparison === "better" ? "text-gray-500" : 
        "text-gray-900"
      }`}>
        <div className="flex items-center justify-center gap-2">
          {comparison === "worse" && <Check className="w-5 h-5 text-[#10B981]" />}
          {comparison === "better" && <X className="w-5 h-5 text-gray-400" />}
          <span>{value2}</span>
        </div>
      </div>
    </div>
  );
}
