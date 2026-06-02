"use client";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Trash2, ShoppingCart } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-black text-gray-800 mb-8">My Wishlist</h1>
        <div className="bg-white border border-gray-200 rounded-xl p-12">
          <p className="text-6xl mb-4">🤍</p>
          <p className="text-gray-500 text-lg mb-6">Your wishlist is empty.</p>
          <Link href="/shop" className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black text-gray-800 mb-8">My Wishlist ({wishlist.length})</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-amber-100 h-44 flex items-center justify-center text-6xl">🪑</div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{item.name}</h3>
              <p className="text-orange-500 font-bold mt-1">£{item.price}</p>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => { addToCart(item, 1); removeFromWishlist(item.id); }}
                  className="flex-1 flex items-center justify-center gap-2 bg-orange-500 text-white py-2 rounded font-semibold text-sm hover:bg-orange-600 transition-colors"
                >
                  <ShoppingCart size={14} /> Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="p-2 border border-red-200 text-red-400 rounded hover:bg-red-50 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}