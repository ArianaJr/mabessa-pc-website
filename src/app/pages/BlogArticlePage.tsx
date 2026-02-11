import { ArrowLeft, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";

interface BlogArticlePageProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
  };
  onNavigate: (page: string, data?: any) => void;
}

export function BlogArticlePage({ article, onNavigate }: BlogArticlePageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => onNavigate("blog")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category */}
          <div className="text-sm font-semibold text-[#0066ff] uppercase tracking-wider mb-4">
            {article.category}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-3 pb-8 border-b border-gray-200">
            <span className="text-sm text-gray-600 font-medium">Share:</span>
            <button className="w-9 h-9 bg-[#3b5998] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
              <Facebook className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 bg-[#1DA1F2] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 bg-[#0077b5] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-xl border border-gray-200 p-8 sm:p-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              {article.excerpt}
            </p>

            {/* Sample Article Content */}
            <h2>Understanding Your Needs</h2>
            <p>
              Before diving into specifications and features, it's crucial to understand what
              you'll be using your laptop for. Different use cases require different
              capabilities, and identifying your primary needs will help narrow down your options.
            </p>

            <h3>For Business Professionals</h3>
            <p>
              If you're a business professional, you'll want a laptop that balances
              performance, portability, and battery life. Look for devices with:
            </p>
            <ul>
              <li>Intel Core i5 or i7 processors for smooth multitasking</li>
              <li>At least 8GB of RAM (16GB recommended)</li>
              <li>256GB SSD minimum for fast boot and load times</li>
              <li>Full HD display for crisp text and presentations</li>
              <li>8+ hours of battery life for all-day productivity</li>
            </ul>

            <h3>For Students</h3>
            <p>
              Students need reliable laptops that can handle research, writing, and multimedia
              without breaking the bank. Consider:
            </p>
            <ul>
              <li>Intel Core i3 or i5 processors</li>
              <li>8GB RAM for comfortable multitasking</li>
              <li>256GB SSD for adequate storage and speed</li>
              <li>Lightweight design (under 2kg) for easy transport</li>
              <li>Good keyboard for extended typing sessions</li>
            </ul>

            <h2>Key Specifications Explained</h2>
            <p>
              Let's break down the most important specifications you'll encounter when
              shopping for a laptop.
            </p>

            <h3>Processor (CPU)</h3>
            <p>
              The processor is the brain of your laptop. For general use, an Intel Core i5
              or AMD Ryzen 5 provides excellent performance. Power users should consider
              i7 or Ryzen 7 processors.
            </p>

            <h3>Memory (RAM)</h3>
            <p>
              RAM affects how many programs you can run simultaneously. 8GB is the minimum
              for comfortable use, while 16GB is ideal for professionals and power users.
            </p>

            <h3>Storage</h3>
            <p>
              SSDs (Solid State Drives) are much faster than traditional HDDs. A 256GB SSD
              is the minimum recommended, with 512GB being ideal for most users.
            </p>

            <div className="bg-blue-50 border-l-4 border-[#0066ff] p-6 my-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pro Tip</h4>
              <p className="text-gray-700 mb-0">
                Consider refurbished laptops from reputable sellers like MABESSA PC Company.
                You can get premium specifications at significantly lower prices, often with
                warranty coverage included.
              </p>
            </div>

            <h2>New vs Refurbished: Making the Right Choice</h2>
            <p>
              Both new and refurbished laptops have their place. New laptops offer the
              latest technology and full manufacturer warranty, while professionally
              refurbished units provide excellent value without compromising on quality.
            </p>

            <p>
              At MABESSA PC Company, all refurbished laptops undergo rigorous testing and
              come with up to 12 months warranty, giving you confidence in your purchase.
            </p>

            <h2>Final Thoughts</h2>
            <p>
              Choosing the right laptop doesn't have to be complicated. By understanding
              your needs, knowing which specifications matter most, and working with a
              trusted supplier, you can find the perfect device for your requirements and
              budget.
            </p>

            <p>
              Whether you're looking for a budget-friendly option for everyday tasks or a
              high-performance machine for demanding work, MABESSA PC Company has options
              to suit every need.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-br from-[#0066ff] to-[#1a1d29] rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Laptop?</h3>
          <p className="text-blue-100 mb-6">
            Browse our collection of quality laptops or contact us for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate("shop")}
              className="px-6 py-3 bg-white text-[#0066ff] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Browse Laptops
            </button>
            <button
              onClick={() => onNavigate("contact")}
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate("blog")}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </button>
        </div>
      </article>
    </div>
  );
}
