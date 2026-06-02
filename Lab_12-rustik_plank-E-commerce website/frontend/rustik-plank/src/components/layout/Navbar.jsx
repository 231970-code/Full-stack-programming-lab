"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Search, Menu, X, Heart, User, LogOut } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Beds", href: "/shop?category=beds" },
  { label: "Bookcases", href: "/shop?category=bookcases" },
  { label: "Cabinets", href: "/shop?category=cabinets" },
  { label: "Boxes", href: "/shop?category=boxes" },
  { label: "Chairs", href: "/shop?category=chairs" },
  { label: "Tables", href: "/shop?category=tables" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-black text-gray-800 tracking-wide">Rustik</span>
          <span className="text-sm font-semibold text-orange-500 tracking-widest uppercase">Plank</span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-lg hidden md:flex items-center border-2 border-orange-400 rounded overflow-hidden">
          <input type="text" placeholder="Search products..." className="flex-1 px-3 py-2 text-sm outline-none" />
          <button className="bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
            <Search size={16} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          {/* Wishlist */}
          <Link href="/wishlist" className="relative hidden md:flex flex-col items-center text-gray-600 hover:text-orange-500 text-xs">
            <Heart size={20} />
            <span>Wishlist</span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative flex flex-col items-center text-gray-600 hover:text-orange-500 text-xs">
            <ShoppingCart size={20} />
            <span>{totalItems} Item{totalItems !== 1 ? "s" : ""}</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Auth */}
          {user ? (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/account" className="flex flex-col items-center text-gray-600 hover:text-orange-500 text-xs">
                <User size={20} />
                <span className="max-w-[60px] truncate">{user.name}</span>
              </Link>
              <button onClick={logout} className="flex flex-col items-center text-gray-600 hover:text-red-500 text-xs">
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link href="/login" className="hidden md:flex flex-col items-center text-gray-600 hover:text-orange-500 text-xs">
              <User size={20} />
              <span>Login</span>
            </Link>
          )}

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="bg-gray-800 hidden md:block">
        <div className="max-w-6xl mx-auto px-4 flex items-center">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}
              className="text-white text-sm px-4 py-3 hover:bg-orange-500 transition-colors whitespace-nowrap">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-4 py-2 flex items-center border-b border-gray-700">
            <input type="text" placeholder="Search..." className="flex-1 px-3 py-2 text-sm outline-none rounded-l" />
            <button className="bg-orange-500 px-3 py-2 text-white rounded-r"><Search size={16} /></button>
          </div>
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}
              className="block text-white px-4 py-3 border-b border-gray-700 hover:bg-orange-500"
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          {user ? (
            <button onClick={logout} className="block w-full text-left text-red-400 px-4 py-3 border-b border-gray-700">
              Logout ({user.name})
            </button>
          ) : (
            <Link href="/login" className="block text-white px-4 py-3 hover:bg-orange-500" onClick={() => setMenuOpen(false)}>
              Login / Register
            </Link>
          )}
        </div>
      )}
    </header>
  );
}