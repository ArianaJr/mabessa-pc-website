import { GraduationCap, Check, ArrowRight, Sparkles, Code, Book } from "lucide-react";
import { motion } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem, staggerItemVariants } from "../components/ScrollAnimations";
import { studentPackages, laptops } from "../data/laptops";
import { WhatsAppButton } from "../components/WhatsAppButton";

interface StudentPackagesPageProps {
  onNavigate: (page: string, data?: any) => void;
}

const packageIcons = {
  "secondary-starter": Book,
  "university-essential": GraduationCap,
  "programming-design": Code,
};

const packageGradients = {
  "secondary-starter": "from-[#10B981] to-[#059669]",
  "university-essential": "from-[#0078D4] to-[#50A8E8]",
  "programming-design": "from-[#7C3AED] to-[#5B21B6]",
};

export function StudentPackagesPage({ onNavigate }: StudentPackagesPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full mb-6"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="font-bold">Special Student Offers</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            Student Laptop Packages
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Specially curated laptop bundles designed for students at every level. 
            Quality laptops at prices that won't break the bank.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            {[
              "Starting from TZS 350,000",
              "6-12 Months Warranty",
              "Fast Delivery",
              "Expert Support",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
            {studentPackages.map((pkg) => {
              const Icon = packageIcons[pkg.id as keyof typeof packageIcons];
              const gradient = packageGradients[pkg.id as keyof typeof packageGradients];
              const packageLaptops = laptops.filter(l => pkg.laptops.includes(l.id));
              
              return (
                <StaggerItem key={pkg.id} variants={staggerItemVariants}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                  >
                    {/* Package Header */}
                    <div className={`bg-gradient-to-br ${gradient} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                      
                      <div className="relative">
                        {pkg.badge && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-4">
                            <Sparkles className="w-3.5 h-3.5" />
                            {pkg.badge}
                          </div>
                        )}
                        
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="w-8 h-8" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                        <p className="text-white/90 text-sm mb-4">{pkg.subtitle}</p>
                        
                        <div className="text-4xl font-bold">
                          TZS {pkg.price.toLocaleString()}
                        </div>
                        <div className="text-white/80 text-sm">Starting price</div>
                      </div>
                    </div>

                    {/* Package Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                      <ul className="space-y-3 mb-8 flex-1">
                        {pkg.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Sample Laptops */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 mb-3 text-sm">Available Models:</h5>
                        <div className="space-y-2">
                          {packageLaptops.slice(0, 2).map((laptop) => (
                            <div key={laptop.id} className="text-sm text-gray-600 flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-[#0078D4] rounded-full"></div>
                              {laptop.name}
                            </div>
                          ))}
                          {packageLaptops.length > 2 && (
                            <button
                              onClick={() => onNavigate("shop")}
                              className="text-sm text-[#0078D4] hover:text-[#005A9E] font-medium flex items-center gap-1"
                            >
                              +{packageLaptops.length - 2} more options
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <WhatsAppButton 
                        message={`Hi! I'm interested in the ${pkg.title} package. Can you provide more details?`}
                      />
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Student Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Why Choose Our Student Packages?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed specifically for students in Tanzania with affordability and performance in mind
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Budget-Friendly",
                description: "Prices designed for student budgets without compromising quality",
                icon: "💰",
              },
              {
                title: "Quality Tested",
                description: "Every laptop rigorously tested and certified before delivery",
                icon: "✅",
              },
              {
                title: "Warranty Included",
                description: "6-12 months warranty coverage for peace of mind",
                icon: "🛡️",
              },
              {
                title: "Expert Guidance",
                description: "Our team helps you choose the perfect laptop for your studies",
                icon: "🎯",
              },
            ].map((benefit, index) => (
              <StaggerItem key={index} variants={staggerItemVariants}>
                <div className="text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <StaggerContainer className="space-y-4">
            {[
              {
                question: "Are student packages only for students?",
                answer: "While designed with students in mind, anyone can purchase these packages. They're perfect for anyone looking for quality laptops at affordable prices.",
              },
              {
                question: "What warranty do I get?",
                answer: "All laptops come with 6-12 months warranty depending on the model. This covers hardware defects and functionality issues.",
              },
              {
                question: "Can I get a different laptop than the ones listed?",
                answer: "Yes! The packages show sample models. We have multiple options in each price range. Contact us to discuss your specific needs.",
              },
              {
                question: "Do you deliver to my location?",
                answer: "We deliver across Tanzania! Delivery time is typically 2-3 days depending on your location.",
              },
            ].map((faq, index) => (
              <StaggerItem key={index} variants={staggerItemVariants}>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-24 bg-gradient-to-br from-[#0078D4] to-[#50A8E8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Your Student Laptop?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Contact us today and let our team help you find the perfect laptop for your studies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton message="Hi! I'm interested in your student packages. Can you help me choose?" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("shop")}
                className="px-10 py-4 bg-white text-[#0078D4] rounded-xl hover:bg-gray-50 transition-all font-bold text-lg"
              >
                Browse All Laptops
              </motion.button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Floating WhatsApp */}
      <WhatsAppButton floating />
    </div>
  );
}
