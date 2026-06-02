"use client";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { createOrder } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQty, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);

  const handleCheckout = async () => {
    if (!user) return router.push("/login");
    setPlacing(true);
    const orderData = {
      orderItems: cartItems.map((i) => ({
        name: i.name, qty: i.qty, image: i.image || "",
        price: i.price, product: i.id,
      })),
      shippingAddress: { address: "TBD", city: "TBD", postalCode: "TBD", country: "UK" },
      paymentMethod: "PayPal",
      totalPrice,
    };
    const order = await createOrder(orderData, user.token);
    if (order._id) {
      clearCart();
      router.push(`/orders/${order._id}`);
    }
    setPlacing(false);
  };

  if (cartItems.length === 0) return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-black text-gray-800 mb-8">Your Cart</h1>
      <div className="bg-white border border-gray-200 rounded-xl p-12">
        <p className="text-6xl mb-4">🛒</p>
        <p className="text-gray-500 text-lg mb-6">Your cart is empty.</p>
        <Link href="/shop" className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600">
          Continue Shopping
        </Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black text-gray-800 mb-8">Your Cart</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <div className="bg-amber-100 rounded-lg w-20 h-20 flex items-center justify-center text-4xl shrink-0">🪑</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-orange-500 font-bold">£{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100"><Minus size={12} /></button>
                  <span className="font-semibold w-6 text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-7 h-7 border rounded flex items-center justify-center hover:bg-gray-100"><Plus size={12} /></button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-gray-800">£{(item.price * item.qty).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="mt-2 text-red-400 hover:text-red-600"><Trash2 size={18} /></button>
              </div>
            </div>
          ))}
          <button onClick={clearCart} className="text-sm text-red-400 hover:text-red-600 underline">Clear Cart</button>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm h-fit">
          <h2 className="text-xl font-black text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between"><span>Subtotal</span><span>£{totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="text-green-500">Free</span></div>
            <div className="border-t pt-2 flex justify-between font-black text-gray-800 text-base">
              <span>Total</span><span>£{totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button onClick={handleCheckout} disabled={placing}
            className="w-full mt-6 bg-orange-500 text-white py-3 rounded font-bold hover:bg-orange-600 transition-colors disabled:opacity-50">
            {placing ? "Placing Order..." : user ? "Proceed to Checkout" : "Login to Checkout"}
          </button>
          <Link href="/shop" className="block text-center mt-3 text-sm text-gray-500 hover:text-orange-500">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}