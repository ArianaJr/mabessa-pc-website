import { ArrowRight, Calendar, User, Clock } from "lucide-react";

interface BlogPageProps {
  onNavigate: (page: string, data?: any) => void;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Choose the Right Laptop for Your Business in 2026",
    excerpt:
      "A comprehensive guide to selecting the perfect laptop for your business needs. Learn about key specifications, features, and what to look for.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=500&fit=crop",
    author: "MABESSA Team",
    date: "Feb 1, 2026",
    readTime: "5 min read",
    category: "Buying Guide",
  },
  {
    id: "2",
    title: "Refurbished vs New Laptops: What's the Difference?",
    excerpt:
      "Understanding the benefits and differences between new and refurbished laptops. Make an informed decision that fits your budget.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=500&fit=crop",
    author: "MABESSA Team",
    date: "Jan 28, 2026",
    readTime: "4 min read",
    category: "Education",
  },
  {
    id: "3",
    title: "Top 5 Laptops for Students in Tanzania",
    excerpt:
      "Discover the best laptop options for students. From budget-friendly to high-performance, find the perfect device for your studies.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=500&fit=crop",
    author: "MABESSA Team",
    date: "Jan 25, 2026",
    readTime: "6 min read",
    category: "Reviews",
  },
  {
    id: "4",
    title: "Laptop Maintenance Tips: Keep Your Device Running Smoothly",
    excerpt:
      "Essential maintenance tips to extend your laptop's lifespan. Learn how to clean, optimize, and care for your device.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=500&fit=crop",
    author: "MABESSA Team",
    date: "Jan 20, 2026",
    readTime: "7 min read",
    category: "Tips & Tricks",
  },
  {
    id: "5",
    title: "Understanding Laptop Specifications: RAM, Storage, and Processors",
    excerpt:
      "Decode laptop specifications and understand what they mean for your daily use. A beginner-friendly guide to tech specs.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=500&fit=crop",
    author: "MABESSA Team",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Education",
  },
  {
    id: "6",
    title: "Why Buy from MABESSA PC Company?",
    excerpt:
      "Learn about our quality assurance process, warranty coverage, and what makes us Tanzania's trusted laptop provider.",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&h=500&fit=crop",
    author: "MABESSA Team",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    category: "Company News",
  },
];

export function BlogPage({ onNavigate }: BlogPageProps) {
  const handleReadPost = (post: BlogPost) => {
    onNavigate("blog-article", post);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Tips, guides, and insights about laptops, technology, and making the right
            purchase decisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-[16/10] lg:aspect-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-[#0066ff] text-white text-sm font-semibold rounded-full mb-4 self-start">
                  Featured
                </div>
                <h2 className="text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleReadPost(blogPosts[0])}
                  className="inline-flex items-center gap-2 text-[#0066ff] hover:gap-3 transition-all font-semibold"
                >
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              onClick={() => handleReadPost(post)}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category */}
                <div className="text-xs font-semibold text-[#0066ff] uppercase tracking-wider mb-3">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-[#0066ff] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#0066ff] to-[#1a1d29] rounded-xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get tips, guides, and exclusive offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            />
            <button className="px-6 py-3 bg-white text-[#0066ff] rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
