import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle2 } from "lucide-react";

interface ContactPageProps {
  onNavigate: (page: string, data?: any) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
          <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            }}
            className="w-full px-6 py-3 bg-[#0066ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors font-semibold mb-3"
          >
            Send Another Message
          </button>
          <button
            onClick={() => onNavigate("home")}
            className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">
            Have questions? We're here to help!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#0066ff]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Call us Monday to Saturday</p>
              <a
                href="tel:+255716909094"
                className="text-[#0066ff] hover:underline font-medium"
              >
                +255 716 909 094
              </a>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-2">Chat with us instantly</p>
              <a
                href="https://wa.me/255716909094"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-medium"
              >
                Message on WhatsApp
              </a>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#0066ff]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email anytime</p>
              <a
                href="mailto:info@mabessapc.com"
                className="text-[#0066ff] hover:underline font-medium"
              >
                info@mabessapc.com
              </a>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#0066ff]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Location</h3>
              <p className="text-gray-600">
                Magomeni Mapipa<br/>Dar es Salaam, Tanzania
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="w-12 h-12 bg-[#0066ff]/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#0066ff]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <div className="space-y-1 text-gray-600">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
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
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent bg-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-status">Order Status</option>
                    <option value="warranty">Warranty & Support</option>
                    <option value="delivery">Delivery Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066ff] focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#0066ff] text-white rounded-lg hover:bg-[#0052cc] transition-colors font-semibold shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* FAQ Section */}
            <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Do you offer warranty on refurbished laptops?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes! All our refurbished laptops come with up to 12 months warranty.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">How long does delivery take?</h4>
                  <p className="text-gray-600 text-sm">
                    We deliver within 2-3 business days to major cities in Tanzania.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Can I test the laptop before buying?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, you can visit our office to test laptops before making a purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
