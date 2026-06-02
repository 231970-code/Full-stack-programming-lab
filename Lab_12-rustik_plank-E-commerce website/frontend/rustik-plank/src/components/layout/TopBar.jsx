"use client";
import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [open, setOpen] = useState(null);

  const menus = {
    INFORMATIONS: ["Terms and conditions", "About us", "Sitemap", "Contact", "Return Policy", "Suppliers"],
    "MY ACCOUNT": ["Your Account", "Information", "Addresses", "Orders History", "Delivery Instructions", "Search Terms"],
    "HELP AND MORE": ["Specials", "New products", "Top sellers", "Manufacturers", "Suppliers", "Gift Cards"],
    LINKS: ["Delivery", "Service", "Gift Cards", "Media", "Manufacturers"],
  };

  return (
    <div className="bg-gray-200 text-xs text-gray-600 border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap justify-between gap-2">
        {Object.entries(menus).map(([title, items]) => (
          <div key={title} className="relative group">
            <button
              className="font-bold uppercase text-gray-700 hover:text-orange-500"
              onMouseEnter={() => setOpen(title)}
              onMouseLeave={() => setOpen(null)}
            >
              {title}
            </button>
            {open === title && (
              <div
                className="absolute top-full left-0 bg-white shadow-lg z-50 min-w-[160px] border border-gray-200"
                onMouseEnter={() => setOpen(title)}
                onMouseLeave={() => setOpen(null)}
              >
                {items.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="block px-4 py-2 hover:bg-orange-50 hover:text-orange-500"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}