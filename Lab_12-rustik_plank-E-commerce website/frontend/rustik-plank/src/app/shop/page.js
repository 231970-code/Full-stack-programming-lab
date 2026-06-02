"use client";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/shared/ProductCard";

const categories = ["all", "beds", "chairs", "tables", "bookcases", "cabinets", "boxes"];

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState("all");
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const filters = {};
      if (selected !== "all") filters.category = selected;
      if (search) filters.search = search;
      const data = await fetchProducts(filters);
      setProducts(Array.isArray(data) ? data : []);
      setLoading(false);
    };
    load();
  }, [selected, search]);

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-black text-gray-800 mb-6">Shop</h1>

      {/* Search */}
      <div className="flex gap-2 mb-4">
        <input
          type="text" placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-orange-400 flex-1 max-w-sm"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelected(cat)}
              className={`px-4 py-1.5 rounded text-sm font-semibold capitalize border ${
                selected === cat
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300 text-gray-600 hover:border-orange-400"
              }`}>
              {cat}
            </button>
          ))}
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1.5 text-sm">
          <option value="default">Sort: Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border rounded-xl overflow-hidden animate-pulse">
              <div className="bg-gray-200 h-36" />
              <div className="p-3 space-y-2">
                <div className="bg-gray-200 h-3 rounded w-3/4" />
                <div className="bg-gray-200 h-3 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sorted.map((product) => (
            <ProductCard key={product._id} product={{ ...product, id: product._id }} />
          ))}
        </div>
      )}

      {!loading && sorted.length === 0 && (
        <p className="text-center text-gray-400 py-16">No products found.</p>
      )}
    </div>
  );
}