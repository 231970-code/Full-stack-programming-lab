"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProductById, fetchProducts } from "@/lib/api";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ShoppingCart, Check } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = await fetchProductById(id);
      setProduct(data);
      if (data?.category) {
        const rel = await fetchProducts({ category: data.category });
        setRelated(Array.isArray(rel) ? rel.filter((p) => p._id !== id).slice(0, 4) : []);
      }
      setLoading(false);
    };
    load();
  }, [id]);

  if (loading) return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-200 rounded-xl h-80" />
        <div className="space-y-4">
          <div className="bg-gray-200 h-8 rounded w-3/4" />
          <div className="bg-gray-200 h-6 rounded w-1/4" />
          <div className="bg-gray-200 h-4 rounded w-full" />
          <div className="bg-gray-200 h-4 rounded w-5/6" />
        </div>
      </div>
    </div>
  );

  if (!product || product.message) return (
    <div className="text-center py-20 text-gray-400">Product not found.</div>
  );

  const wishlisted = isWishlisted(product._id);

  const handleAddToCart = () => {
    addToCart({ ...product, id: product._id }, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-orange-500">Home</Link> &rsaquo;&nbsp;
        <Link href="/shop" className="hover:text-orange-500">Shop</Link> &rsaquo;&nbsp;
        <span className="text-gray-700">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl h-80 flex items-center justify-center shadow">
          <span className="text-9xl">🪑</span>
        </div>
        <div>
          <h1 className="text-3xl font-black text-gray-800">{product.name}</h1>
          <p className="text-orange-500 text-3xl font-bold mt-3">£{product.price}</p>
          <p className="text-gray-500 mt-4 leading-relaxed">{product.description}</p>
          <p className={`mt-2 text-sm font-semibold ${product.countInStock > 0 ? "text-green-500" : "text-red-500"}`}>
            {product.countInStock > 0 ? `✅ In Stock (${product.countInStock})` : "❌ Out of Stock"}
          </p>

          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-3 py-2 hover:bg-gray-100" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="px-4 py-2 font-semibold">{qty}</span>
              <button className="px-3 py-2 hover:bg-gray-100" onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button onClick={handleAddToCart} disabled={product.countInStock === 0}
              className={`flex items-center gap-2 px-8 py-2 rounded font-bold transition-colors ${
                added ? "bg-green-500 text-white" : "bg-orange-500 text-white hover:bg-orange-600"
              } disabled:opacity-50`}>
              {added ? <><Check size={16} /> Added!</> : <><ShoppingCart size={16} /> Add to Cart</>}
            </button>
            <button
              onClick={() => wishlisted ? removeFromWishlist(product._id) : addToWishlist({ ...product, id: product._id })}
              className={`p-2 rounded border transition-colors ${
                wishlisted ? "bg-red-50 border-red-300 text-red-500" : "border-gray-300 text-gray-500 hover:border-red-300"
              }`}>
              <Heart size={20} fill={wishlisted ? "currentColor" : "none"} />
            </button>
          </div>

          <div className="mt-4 flex gap-3">
            <span className="text-sm bg-gray-100 px-3 py-1 rounded capitalize">{product.category}</span>
            <span className="text-sm bg-orange-100 text-orange-600 px-3 py-1 rounded capitalize">{product.tag}</span>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-xl font-black text-gray-800 mb-5 border-b-2 border-orange-500 pb-2 inline-block">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <Link key={p._id} href={`/product/${p._id}`}
                className="border rounded p-3 hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-2">🪑</div>
                <p className="text-sm font-semibold text-gray-700">{p.name}</p>
                <p className="text-orange-500 font-bold">£{p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}