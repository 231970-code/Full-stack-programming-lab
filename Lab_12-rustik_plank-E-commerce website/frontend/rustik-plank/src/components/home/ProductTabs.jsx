"use client";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/shared/ProductCard";

const tabs = ["featured", "special", "popular"];
const tabLabels = { featured: "See All Feature", special: "See All Special", popular: "See All Popular" };

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("featured");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchProducts({ tag: activeTab });
      setProducts(Array.isArray(data) ? data.slice(0, 4) : []);
      setLoading(false);
    };
    load();
  }, [activeTab]);

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-black text-gray-800 mb-2 border-b-2 border-orange-500 pb-2 inline-block">
          Hot Deal
        </h2>
        <div className="flex gap-2 mb-6 mt-4 flex-wrap">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-semibold border rounded transition-colors ${
                activeTab === tab
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-300 hover:border-orange-400"
              }`}>
              {tabLabels[tab]}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border rounded overflow-hidden animate-pulse">
                <div className="bg-gray-200 h-36" />
                <div className="p-3 space-y-2">
                  <div className="bg-gray-200 h-3 rounded" />
                  <div className="bg-gray-200 h-3 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={{ ...product, id: product._id }} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}