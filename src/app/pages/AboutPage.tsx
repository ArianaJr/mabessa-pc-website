import { Shield, Award, Users, Target, Heart, Zap, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

interface AboutPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0066ff] to-[#1a1d29] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Trusted Technology Partner in Tanzania
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              MABESSA PC COMPANY is committed to providing high-quality new and refurbished
              laptops at competitive prices, making technology accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="w-14 h-14 bg-[#0066ff]/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#0066ff]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide Tanzanians with access to reliable, high-quality laptops at
                affordable prices. We believe everyone deserves the right tools to succeed
                in their education, business, and personal endeavors.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="w-14 h-14 bg-[#0066ff]/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-[#0066ff]" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become Tanzania's most trusted laptop provider, known for quality
                products, excellent customer service, and empowering individuals and
                businesses through technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="leading-relaxed mb-6">
              Founded in Dar es Salaam, MABESSA PC COMPANY started with a simple goal: to
              make quality laptops accessible to everyone in Tanzania. We recognized that
              many students, professionals, and businesses needed reliable computing
              solutions but were held back by high prices.
            </p>
            <p className="leading-relaxed mb-6">
              By focusing on both new and professionally refurbished laptops from trusted
              brands like HP, Dell, and Lenovo, we've been able to offer premium technology
              at prices that work for our customers. Every laptop we sell undergoes rigorous
              testing and comes with a comprehensive warranty for your peace of mind.
            </p>
            <p className="leading-relaxed">
              Today, we're proud to have served over 1,000 satisfied customers across
              Tanzania. Our commitment to quality, transparency, and customer service has
              made us a trusted name in the technology market.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E5F3FF] rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-[#0078D4] rounded-full"></div>
              <span className="text-sm font-semibold text-[#0078D4]">Meet Our Team</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900"
            >
              Dedicated to Your Success
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Our experienced team brings years of expertise in technology and customer service, 
              committed to providing you with the best solutions for your computing needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Innocent Kija",
                position: "CEO and Founder",
                description: "Visionary leader with a passion for making technology accessible to everyone.",
                icon: "👔",
              },
              {
                name: "Joseph Kija",
                position: "Shop Technical Officer",
                description: "Technical expert ensuring every laptop meets our quality standards.",
                icon: "🔧",
              },
              {
                name: "Swalehe Suleiman",
                position: "Sales Officer",
                description: "Customer-focused professional dedicated to finding the perfect laptop for you.",
                icon: "💼",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/5 to-[#50A8E8]/5"></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0078D4] to-[#50A8E8]"></div>

                {/* Content */}
                <div className="relative p-12 text-center">
                  {/* Avatar */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-24 h-24 bg-gradient-to-br from-[#0078D4] to-[#50A8E8] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all"
                  >
                    <span className="text-5xl">{member.icon}</span>
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>

                  {/* Position */}
                  <div className="inline-block mb-4">
                    <span className="text-sm font-semibold text-[#0078D4] bg-[#E5F3FF] px-4 py-1.5 rounded-full">
                      {member.position}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, color: "#0078D4" }}
                      className="p-2 bg-gray-100 rounded-full hover:bg-[#E5F3FF] transition-all"
                    >
                      <Mail className="w-5 h-5 text-gray-700" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, color: "#0078D4" }}
                      className="p-2 bg-gray-100 rounded-full hover:bg-[#E5F3FF] transition-all"
                    >
                      <Linkedin className="w-5 h-5 text-gray-700" />
                    </motion.a>
                  </div>
                </div>

                {/* Floating background element */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br from-[#0078D4]/10 to-[#50A8E8]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose MABESSA PC?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We go beyond just selling laptops. We're committed to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Guaranteed",
                description:
                  "Every laptop is thoroughly tested and certified. All refurbished units meet strict quality standards.",
              },
              {
                icon: Award,
                title: "Comprehensive Warranty",
                description:
                  "Up to 12 months warranty on all laptops. We stand behind the quality of our products.",
              },
              {
                icon: Users,
                title: "Expert Support",
                description:
                  "Our knowledgeable team helps you find the perfect laptop for your needs and budget.",
              },
              {
                icon: Heart,
                title: "Customer First",
                description:
                  "We prioritize your satisfaction. From selection to delivery, we're here to help.",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description:
                  "Quick and reliable delivery across Tanzania. Get your laptop within 2-3 business days.",
              },
              {
                icon: Target,
                title: "Competitive Pricing",
                description:
                  "Best value for money. Quality laptops at prices that fit your budget.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#0066ff]" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description: "We operate with transparency and honesty in all our dealings.",
              },
              {
                title: "Quality",
                description: "We never compromise on the quality of our products and service.",
              },
              {
                title: "Innovation",
                description: "We continuously improve to serve our customers better.",
              },
              {
                title: "Community",
                description: "We're committed to supporting and empowering our local community.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066ff] to-[#00d9ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0066ff] to-[#1a1d29] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "500+", label: "Laptops Sold" },
              { number: "3", label: "Years Experience" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Laptop?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Browse our collection or contact us to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("shop")}
              className="px-8 py-4 bg-[#0066ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors font-semibold shadow-lg"
            >
              Browse Laptops
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
