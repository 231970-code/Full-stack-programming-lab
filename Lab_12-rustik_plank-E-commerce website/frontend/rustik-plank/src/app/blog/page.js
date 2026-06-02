import Link from "next/link";

const posts = [
  { id: 1, title: "How to Care for Reclaimed Wood Furniture", date: "Dec 10, 2024", category: "Tips", excerpt: "Reclaimed wood furniture adds character to any space. Here's how to keep it looking beautiful for years to come.", readTime: "5 min read" },
  { id: 2, title: "The Art of Hand Crafting Furniture", date: "Dec 5, 2024", category: "Craftsmanship", excerpt: "Each piece in our collection is crafted by skilled artisans with decades of experience working with natural wood.", readTime: "7 min read" },
  { id: 3, title: "Sustainable Furniture: Why It Matters", date: "Nov 28, 2024", category: "Sustainability", excerpt: "We believe furniture can be both beautiful and eco-friendly. Learn about our commitment to sustainable sourcing.", readTime: "4 min read" },
  { id: 4, title: "Top 5 Living Room Furniture Trends 2024", date: "Nov 20, 2024", category: "Trends", excerpt: "From minimalist designs to bold statement pieces, discover the top furniture trends shaping homes this year.", readTime: "6 min read" },
  { id: 5, title: "Choosing the Right Wood for Your Home", date: "Nov 12, 2024", category: "Guide", excerpt: "Oak, pine, walnut — each wood type has unique characteristics. Here's how to choose the right one for your space.", readTime: "8 min read" },
  { id: 6, title: "Behind the Scenes: Our Workshop Tour", date: "Nov 5, 2024", category: "Behind the Scenes", excerpt: "Take a virtual tour of our workshop and see how our artisans bring raw reclaimed wood to life.", readTime: "3 min read" },
];

const categories = ["All", "Tips", "Craftsmanship", "Sustainability", "Trends", "Guide"];

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-gray-800 mb-2">Our Blog</h1>
      <p className="text-gray-500 mb-8">Stories, tips and news from Rustik Plank</p>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button key={cat}
            className="px-4 py-1.5 rounded-full text-sm font-semibold border border-gray-300 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors">
            {cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-48 flex items-center justify-center group-hover:from-amber-200 group-hover:to-amber-300 transition-colors">
              <span className="text-5xl">🪵</span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded font-semibold">{post.category}</span>
                <span className="text-xs text-gray-400">{post.readTime}</span>
              </div>
              <h2 className="font-black text-gray-800 text-lg leading-snug mb-2 group-hover:text-orange-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.date}</span>
                <Link href={`/blog/${post.id}`}
                  className="text-orange-500 font-bold text-sm hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}