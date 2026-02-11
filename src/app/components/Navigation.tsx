import { useState } from "react";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/90ae387f8e7a7e80707dd0dc761da8dcfc556ec5.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { name: "Home", path: "home" },
  { name: "Shop Laptops", path: "shop" },
  { name: "Student Packages", path: "student-packages" },
  { name: "Compare", path: "compare" },
  { name: "About Us", path: "about" },
  { name: "Contact", path: "contact" },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate("home")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="MABESSA PC COMPANY"
              className="h-10 w-auto"
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(link.path)}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                  currentPage === link.path
                    ? "text-white"
                    : "text-gray-700 hover:text-[#0078D4] hover:bg-gray-50"
                }`}
              >
                {currentPage === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#0078D4] to-[#50A8E8] rounded-lg shadow-lg shadow-[#0078D4]/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 120, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("order")}
              className="px-6 py-2.5 bg-gradient-to-r from-[#0078D4] to-[#50A8E8] text-white rounded-lg hover:from-[#005A9E] hover:to-[#0078D4] transition-all shadow-lg shadow-[#0078D4]/20 font-semibold text-sm flex items-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Order Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      onNavigate(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium text-sm ${
                      currentPage === link.path
                        ? "bg-gradient-to-r from-[#0078D4] to-[#50A8E8] text-white shadow-lg"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  onClick={() => {
                    onNavigate("order");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-[#0078D4] to-[#50A8E8] text-white rounded-lg hover:from-[#005A9E] hover:to-[#0078D4] transition-all shadow-lg font-semibold text-sm"
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
