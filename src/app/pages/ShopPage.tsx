import { useState } from "react";
import { Filter, X, SlidersHorizontal, Search } from "lucide-react";
import { LaptopCard, Laptop } from "../components/LaptopCard";
import { laptops, brands, budgetRanges, ramOptions, storageOptions } from "../data/laptops";

interface ShopPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function ShopPage({ onNavigate }: ShopPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [selectedRam, setSelectedRam] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedCondition, setSelectedCondition] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  // Filter laptops
  const filteredLaptops = laptops.filter((laptop) => {
    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        laptop.name.toLowerCase().includes(query) ||
        laptop.brand.toLowerCase().includes(query) ||
        laptop.specs.processor.toLowerCase().includes(query);
      if (!matchesSearch) return false;
    }

    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(laptop.brand)) {
      return false;
    }

    // Budget filter
    if (selectedBudget) {
      const range = budgetRanges.find((r) => r.label === selectedBudget);
      if (range && (laptop.price < range.min || laptop.price > range.max)) {
        return false;
      }
    }

    // RAM filter
    if (selectedRam.length > 0 && !selectedRam.some((ram) => laptop.specs.ram.includes(ram))) {
      return false;
    }

    // Storage filter
    if (selectedStorage.length > 0 && !selectedStorage.some((storage) => laptop.specs.storage.includes(storage))) {
      return false;
    }

    // Condition filter
    if (selectedCondition.length > 0 && !selectedCondition.includes(laptop.condition)) {
      return false;
    }

    return true;
  });

  // Sort laptops
  const sortedLaptops = [...filteredLaptops].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const handleViewDetails = (laptop: Laptop) => {
    onNavigate("product", laptop);
  };

  const handleOrder = (laptop: Laptop) => {
    onNavigate("order", laptop);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleRam = (ram: string) => {
    setSelectedRam((prev) =>
      prev.includes(ram) ? prev.filter((r) => r !== ram) : [...prev, ram]
    );
  };

  const toggleStorage = (storage: string) => {
    setSelectedStorage((prev) =>
      prev.includes(storage) ? prev.filter((s) => s !== storage) : [...prev, storage]
    );
  };

  const toggleCondition = (condition: string) => {
    setSelectedCondition((prev) =>
      prev.includes(condition) ? prev.filter((c) => c !== condition) : [...prev, condition]
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedBudget("");
    setSelectedRam([]);
    setSelectedStorage([]);
    setSelectedCondition([]);
    setSearchQuery("");
  };

  const activeFiltersCount =
    selectedBrands.length +
    selectedRam.length +
    selectedStorage.length +
    selectedCondition.length +
    (selectedBudget ? 1 : 0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 dark:text-white">Shop Laptops</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse our collection of {laptops.length} laptops
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#0066ff] hover:underline"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Brand Filter */}
              <div>
                <h4 className="font-medium mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Filter */}
              <div>
                <h4 className="font-medium mb-3">Budget Range</h4>
                <div className="space-y-2">
                  {budgetRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="budget"
                        checked={selectedBudget === range.label}
                        onChange={() => setSelectedBudget(range.label)}
                        className="w-4 h-4 border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                      />
                      <span className="text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* RAM Filter */}
              <div>
                <h4 className="font-medium mb-3">RAM</h4>
                <div className="space-y-2">
                  {ramOptions.map((ram) => (
                    <label key={ram} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedRam.includes(ram)}
                        onChange={() => toggleRam(ram)}
                        className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                      />
                      <span className="text-sm text-gray-700">{ram}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Storage Filter */}
              <div>
                <h4 className="font-medium mb-3">Storage</h4>
                <div className="space-y-2">
                  {storageOptions.map((storage) => (
                    <label key={storage} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedStorage.includes(storage)}
                        onChange={() => toggleStorage(storage)}
                        className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                      />
                      <span className="text-sm text-gray-700">{storage}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div>
                <h4 className="font-medium mb-3">Condition</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCondition.includes("new")}
                      onChange={() => toggleCondition("new")}
                      className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                    />
                    <span className="text-sm text-gray-700">New</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCondition.includes("refurbished")}
                      onChange={() => toggleCondition("refurbished")}
                      className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                    />
                    <span className="text-sm text-gray-700">Refurbished</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search laptops..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                  />
                </div>

                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent bg-white"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden px-4 py-2.5 bg-[#0066ff] text-white rounded-lg flex items-center justify-center gap-2"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="bg-white text-[#0066ff] text-xs font-semibold px-2 py-0.5 rounded-full">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                Showing {sortedLaptops.length} of {laptops.length} laptops
              </p>
            </div>

            {/* Laptop Grid */}
            {sortedLaptops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedLaptops.map((laptop) => (
                  <LaptopCard
                    key={laptop.id}
                    laptop={laptop}
                    onViewDetails={handleViewDetails}
                    onOrder={handleOrder}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">No laptops found matching your filters</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-[#0066ff] dark:bg-[#3b82f6] text-white rounded-lg hover:bg-[#0052cc] dark:hover:bg-[#2563eb] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="font-semibold text-lg">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Same filters as desktop sidebar */}
              <div>
                <h4 className="font-medium mb-3">Brand</h4>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Budget Range</h4>
                <div className="space-y-2">
                  {budgetRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="budget-mobile"
                        checked={selectedBudget === range.label}
                        onChange={() => setSelectedBudget(range.label)}
                        className="w-4 h-4 border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Condition</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCondition.includes("new")}
                      onChange={() => toggleCondition("new")}
                      className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                    />
                    <span className="text-sm">New</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedCondition.includes("refurbished")}
                      onChange={() => toggleCondition("refurbished")}
                      className="w-4 h-4 rounded border-gray-300 text-[#0066ff] focus:ring-[#0066ff]"
                    />
                    <span className="text-sm">Refurbished</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="flex-1 px-4 py-3 bg-[#0066ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}