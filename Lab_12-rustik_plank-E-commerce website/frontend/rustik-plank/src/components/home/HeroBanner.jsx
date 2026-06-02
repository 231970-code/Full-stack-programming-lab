import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="bg-amber-50 py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        {/* Left - Big Deal */}
        <div className="relative bg-gray-100 rounded overflow-hidden min-h-[280px] flex flex-col justify-end p-6"
          style={{ background: "linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%)" }}>
          <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold">Sale Off</span>
            <span className="text-2xl font-black">50%</span>
          </div>
          <h2 className="text-3xl font-black text-gray-800">Reclaimed and<br />hand crafted</h2>
          <p className="text-orange-500 text-xl font-bold mt-1">Sale OFF</p>
          <Link href="/shop" className="mt-4 inline-block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 font-semibold w-fit">
            Shop Now
          </Link>
        </div>

        {/* Right - Elite Collection */}
        <div className="relative bg-amber-100 rounded overflow-hidden min-h-[280px] flex flex-col justify-end p-6"
          style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)" }}>
          <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center">
            <span className="text-xs font-bold">Sale Off</span>
            <span className="text-2xl font-black">35%</span>
          </div>
          <h2 className="text-3xl font-black text-gray-800">Elite Collection</h2>
          <p className="text-gray-600 mt-1">Best Design Furniture</p>
          <Link href="/shop" className="mt-4 inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 font-semibold w-fit">
            View Collection
          </Link>
        </div>
      </div>

      {/* Buy Online Banner */}
      <div className="max-w-6xl mx-auto px-4 mt-6">
        <div className="bg-amber-100 border border-amber-200 rounded p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-green-600 uppercase">Buy Online</h3>
            <p className="text-gray-600">Pick Up In Store</p>
          </div>
          <div className="text-right">
            <p className="text-gray-700 font-semibold">Now Available In Our Store System</p>
            <p className="text-sm text-gray-500">Available On Select Products</p>
            <Link href="#" className="text-orange-500 font-bold text-sm hover:underline">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </section>
  );
}