import { useState } from "react";
import { ShoppingCart, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { Laptop } from "../components/LaptopCard";

interface OrderPageProps {
  laptop?: Laptop;
  onNavigate: (page: string, data?: any) => void;
}

export function OrderPage({ laptop, onNavigate }: OrderPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to backend
    console.log("Order submitted:", { ...formData, laptop });
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-xl border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-[#00c853] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Order Received!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest! We'll contact you shortly to confirm your order and
            arrange delivery.
          </p>
          {laptop && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <div className="text-sm text-gray-500 mb-1">Selected Product</div>
              <div className="font-semibold">{laptop.name}</div>
              <div className="text-[#0066ff] font-bold mt-1">
                TZS {laptop.price.toLocaleString()}
              </div>
            </div>
          )}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>We'll call you within 24 hours</span>
            </div>
            <button
              onClick={() => onNavigate("home")}
              className="w-full px-6 py-3 bg-[#0066ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors font-semibold"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Place Your Order</h1>
          <p className="text-gray-600">Fill in your details and we'll contact you to confirm</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>

              <div className="space-y-5 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                    placeholder="+255 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-6">Delivery Information</h3>

              <div className="space-y-5 mb-8">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                    placeholder="Dar es Salaam"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                    placeholder="Street address, building name, etc."
                  />
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent resize-none"
                    placeholder="Any special requests or delivery instructions..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#0066ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                Submit Order Request
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

              {laptop ? (
                <div className="mb-6">
                  <img
                    src={laptop.image}
                    alt={laptop.name}
                    className="w-full aspect-video object-cover rounded-lg mb-3"
                  />
                  <div className="text-sm text-gray-500 mb-1">{laptop.brand}</div>
                  <div className="font-semibold mb-2">{laptop.name}</div>
                  <div className="text-2xl font-bold text-[#0066ff]">
                    TZS {laptop.price.toLocaleString()}
                  </div>
                </div>
              ) : (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg text-center text-gray-600">
                  No laptop selected
                </div>
              )}

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00c853] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Quality tested and certified</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00c853] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Warranty included</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#00c853] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Fast delivery (2-3 days)</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-3">Or contact us directly:</div>
                <div className="space-y-2">
                  <a
                    href="tel:+255XXXXXXXXX"
                    className="flex items-center gap-2 text-sm text-[#0066ff] hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +255 XXX XXX XXX
                  </a>
                  <a
                    href="https://wa.me/255XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#25D366] hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
