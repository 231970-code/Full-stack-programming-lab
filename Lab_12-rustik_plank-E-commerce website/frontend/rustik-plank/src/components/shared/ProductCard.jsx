import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-200 rounded overflow-hidden hover:shadow-md transition-shadow bg-white group">
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 h-36 flex items-center justify-center overflow-hidden">
        <div className="text-amber-700 text-4xl group-hover:scale-110 transition-transform">🪑</div>
      </div>
      <div className="p-3 text-right">
        <p className="text-xs text-gray-500 truncate">{product.name}</p>
        <p className="text-xs text-gray-400">Version: Lorem</p>
        <p className="font-bold text-gray-800">£{product.price}</p>
        <Link
          href={`/product/${product.id}`}
          className="mt-2 inline-block bg-gray-700 text-white text-xs px-3 py-1 rounded hover:bg-orange-500 transition-colors"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}