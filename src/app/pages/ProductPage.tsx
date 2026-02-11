import { useState } from "react";
import { ArrowLeft, ShoppingCart, Shield, Truck, Award, CheckCircle } from "lucide-react";
import { Laptop, LaptopCard } from "../components/LaptopCard";
import { laptops } from "../data/laptops";

interface ProductPageProps {
  laptop: Laptop;
  onNavigate: (page: string, data?: any) => void;
}

export function ProductPage({ laptop, onNavigate }: ProductPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  // Get related laptops (same brand, different model)
  const relatedLaptops = laptops
    .filter((l) => l.brand === laptop.brand && l.id !== laptop.id)
    .slice(0, 3);

  const handleViewDetails = (laptop: Laptop) => {
    onNavigate("product", laptop);
  };

  const handleOrder = (laptop: Laptop) => {
    onNavigate("order", laptop);
  };

  const images = [laptop.image, laptop.image, laptop.image]; // In real app, would have multiple images

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate("shop")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Shop
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
              <div className="aspect-[4/3] relative">
                <img
                  src={images[selectedImage]}
                  alt={laptop.name}
                  className="w-full h-full object-cover"
                />
                {/* Condition Badge */}
                <div className="absolute top-4 left-4">
                  {laptop.condition === "new" ? (
                    <span className="px-4 py-2 bg-[#00c853] text-white font-semibold rounded-full">
                      New
                    </span>
                  ) : (
                    <span className="px-4 py-2 bg-[#0066ff] text-white font-semibold rounded-full">
                      Refurbished
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#0066ff]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${laptop.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Brand */}
            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              {laptop.brand}
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {laptop.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <div className="text-4xl font-bold text-gray-900">
                TZS {laptop.price.toLocaleString()}
              </div>
              {laptop.originalPrice && (
                <>
                  <div className="text-xl text-gray-400 line-through">
                    TZS {laptop.originalPrice.toLocaleString()}
                  </div>
                  <div className="px-3 py-1 bg-[#ff3b30] text-white text-sm font-semibold rounded-full">
                    Save TZS {(laptop.originalPrice - laptop.price).toLocaleString()}
                  </div>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {laptop.inStock ? (
                <div className="flex items-center gap-2 text-[#00c853]">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">In Stock</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-[#ff3b30]">
                  <span className="font-semibold">Out of Stock</span>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-lg mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Processor</span>
                  <span className="font-semibold text-gray-900">
                    {laptop.specs.processor}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">RAM</span>
                  <span className="font-semibold text-gray-900">
                    {laptop.specs.ram}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Storage</span>
                  <span className="font-semibold text-gray-900">
                    {laptop.specs.storage}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Display</span>
                  <span className="font-semibold text-gray-900">
                    {laptop.specs.display}
                  </span>
                </div>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleOrder(laptop)}
              disabled={!laptop.inStock}
              className="w-full px-8 py-4 bg-[#0066ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed mb-6"
            >
              <ShoppingCart className="w-5 h-5" />
              {laptop.inStock ? "Order Now" : "Out of Stock"}
            </button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-[#0066ff]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#0066ff]" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Quality Tested</div>
                  <div className="text-xs text-gray-600">Certified & inspected</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-[#0066ff]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#0066ff]" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Warranty</div>
                  <div className="text-xs text-gray-600">Up to 12 months</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-[#0066ff]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-[#0066ff]" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Fast Delivery</div>
                  <div className="text-xs text-gray-600">2-3 business days</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-[#0066ff]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-[#0066ff]" />
                </div>
                <div>
                  <div className="font-semibold text-sm mb-1">Trusted Seller</div>
                  <div className="text-xs text-gray-600">1000+ happy customers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Product Description</h2>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              The {laptop.name} is a powerful and reliable laptop perfect for both professional
              work and everyday computing needs. Featuring a {laptop.specs.processor} processor,
              {laptop.specs.ram} of RAM, and {laptop.specs.storage} of storage, this laptop
              delivers excellent performance for multitasking, productivity, and entertainment.
            </p>
            <p className="mb-4">
              {laptop.condition === "new"
                ? "This brand new laptop comes with full manufacturer warranty and original packaging."
                : "This professionally refurbished laptop has been thoroughly tested and certified to work like new. It comes with our comprehensive warranty for your peace of mind."}
            </p>
            <p>
              Whether you're working on spreadsheets, browsing the web, streaming videos, or
              handling business tasks, this laptop provides the power and reliability you need.
              The {laptop.specs.display} display offers crisp visuals for comfortable viewing.
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedLaptops.length > 0 && (
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              More from {laptop.brand}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLaptops.map((relatedLaptop) => (
                <LaptopCard
                  key={relatedLaptop.id}
                  laptop={relatedLaptop}
                  onViewDetails={handleViewDetails}
                  onOrder={handleOrder}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
