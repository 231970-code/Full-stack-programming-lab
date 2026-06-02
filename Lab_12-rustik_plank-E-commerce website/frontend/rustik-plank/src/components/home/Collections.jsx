import Link from "next/link";
import { collections } from "@/data/mockData";

export default function Collections() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-black text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">
          Our Collections
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.name}
              href={`/shop?category=${col.category}`}
              className="relative bg-gradient-to-br from-amber-100 to-amber-200 rounded overflow-hidden h-48 flex items-end p-4 group hover:shadow-xl transition-shadow"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-white font-black text-xl uppercase leading-tight drop-shadow">
                  {col.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}