import Link from "next/link";

export default function FeaturedProduct() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Product visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-8xl">🪑</span>
          </div>
        </div>
        {/* Info */}
        <div className="flex-1">
          <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2">Our Price</p>
          <h2 className="text-5xl font-black text-gray-800">£129<span className="text-lg text-gray-400">.99</span></h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.
          </p>
          <div className="mt-6 flex gap-4">
            <Link
              href="/product/1"
              className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition-colors"
            >
              ADD TO CART
            </Link>
            <Link
              href="/product/1"
              className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded font-bold hover:bg-gray-800 hover:text-white transition-colors"
            >
              DETAILS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}