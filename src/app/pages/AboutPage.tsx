import { Shield, Award, Users, Target, Heart, Zap } from "lucide-react";

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
