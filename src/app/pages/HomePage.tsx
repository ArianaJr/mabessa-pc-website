import { ArrowRight, Shield, Truck, Award, CheckCircle, Star, Laptop, Users, TrendingUp, Package } from "lucide-react";
import { motion } from "motion/react";
import { LaptopCard, Laptop as LaptopType } from "../components/LaptopCard";
import { featuredLaptops, studentLaptops } from "../data/laptops";
import { ScrollReveal, StaggerContainer, StaggerItem, staggerItemVariants } from "../components/ScrollAnimations";
import { WhatsAppButton } from "../components/WhatsAppButton";

interface HomePageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const handleViewDetails = (laptop: LaptopType) => {
    onNavigate("product", laptop);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Apple/Microsoft Inspired */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E5F3FF] via-white to-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
              >
                <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Tanzania's Trusted Laptop Store</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900"
              >
                Quality Laptops.
                <span className="block mt-2 bg-gradient-to-r from-[#0078D4] to-[#50A8E8] bg-clip-text text-transparent">
                  Smart Prices.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                Built for students, professionals, and businesses across Tanzania. 
                <span className="font-semibold text-gray-900"> Quality tested, warranty included, </span>
                delivered to your doorstep.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <WhatsAppButton message="Hi! I want to order a laptop from Mabessa PC Company." />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate("student-packages")}
                  className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-[#0078D4] hover:bg-gray-50 transition-all font-semibold text-lg"
                >
                  Student Packages
                </motion.button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-8 pt-8 border-t border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#10B981]" />
                  <span className="text-sm font-medium text-gray-700">Quality Tested</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#0078D4]" />
                  <span className="text-sm font-medium text-gray-700">12 Months Warranty</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[#FF9500]" />
                  <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop"
                  alt="Premium Laptop"
                  className="rounded-3xl shadow-2xl"
                />
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0078D4] to-[#50A8E8] rounded-xl flex items-center justify-center">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1000+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-sm text-gray-600">Quality Tested</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assured",
                description: "Every laptop rigorously tested",
                color: "from-[#10B981] to-[#059669]",
              },
              {
                icon: Award,
                title: "Warranty Included",
                description: "Up to 12 months coverage",
                color: "from-[#0078D4] to-[#50A8E8]",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                description: "Delivered across Tanzania",
                color: "from-[#FF9500] to-[#D97706]",
              },
              {
                icon: Package,
                title: "Student Packages",
                description: "Special bundles for students",
                color: "from-[#7C3AED] to-[#5B21B6]",
              },
            ].map((feature, index) => (
              <StaggerItem
                key={index}
                variants={staggerItemVariants}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 text-center h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Laptops */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E5F3FF] rounded-full mb-4">
              <Star className="w-4 h-4 text-[#0078D4]" />
              <span className="text-sm font-semibold text-[#0078D4]">Popular Choices</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
              Best Selling Laptops
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by professionals and students across Tanzania
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {featuredLaptops.slice(0, 6).map((laptop) => (
              <StaggerItem key={laptop.id} variants={staggerItemVariants}>
                <LaptopCard
                  laptop={laptop}
                  onViewDetails={handleViewDetails}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal className="text-center mt-12" delay={0.3}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("shop")}
              className="px-10 py-4 bg-gradient-to-r from-[#0078D4] to-[#50A8E8] text-white rounded-xl hover:from-[#005A9E] hover:to-[#0078D4] transition-all font-bold text-lg inline-flex items-center gap-3 shadow-lg"
            >
              Browse All Laptops
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      {/* Student Packages CTA */}
      <ScrollReveal>
        <section className="py-20 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full mb-6">
              <Laptop className="w-5 h-5" />
              <span className="font-bold">Special Student Offers</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Student Packages Starting from TZS 350,000
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Specially curated bundles for secondary school, university, and programming students. 
              Get the perfect laptop for your studies at unbeatable prices.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate("student-packages")}
              className="px-10 py-4 bg-white text-[#7C3AED] rounded-xl hover:bg-gray-50 transition-all font-bold text-lg shadow-2xl"
            >
              View Student Packages
            </motion.button>
          </div>
        </section>
      </ScrollReveal>

      {/* Student Laptops Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 mb-4">
              <TrendingUp className="w-4 h-4 text-[#7C3AED]" />
              <span className="text-sm font-semibold text-gray-700">Budget-Friendly</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Perfect for Students
            </h2>
            <p className="text-lg text-gray-600">
              Affordable laptops that don't compromise on performance
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
            {studentLaptops.slice(0, 6).map((laptop) => (
              <StaggerItem key={laptop.id} variants={staggerItemVariants}>
                <LaptopCard
                  laptop={laptop}
                  onViewDetails={handleViewDetails}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Loved by Our Customers
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from students and professionals across Tanzania
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {[
              {
                name: "John Mwangi",
                role: "Business Owner, Dar es Salaam",
                content: "Got an HP EliteBook at an amazing price. Quality is excellent and the warranty gives me peace of mind. Highly recommend!",
                rating: 5,
              },
              {
                name: "Sarah Kimani",
                role: "University Student",
                content: "Perfect laptop for my studies! The team helped me find one within my budget. Fast delivery and great customer service!",
                rating: 5,
              },
              {
                name: "David Mtui",
                role: "Freelance Designer",
                content: "Best laptop store in Tanzania! Professional service, competitive prices, and my Surface Laptop works flawlessly.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <StaggerItem key={index} variants={staggerItemVariants}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#0078D4]/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#FF9500] text-[#FF9500]"
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed flex-grow text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0078D4] to-[#50A8E8] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-[#0078D4] to-[#50A8E8] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Find Your Perfect Laptop?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Visit our shop in Magomeni Mapipa or order online. 
              Fast delivery across Tanzania with quality guarantee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton message="Hi! I want to order a laptop from Mabessa PC Company." />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("shop")}
                className="px-10 py-4 bg-white text-[#0078D4] rounded-xl hover:bg-gray-50 transition-all font-bold text-lg"
              >
                Browse Collection
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton floating />
    </div>
  );
}
