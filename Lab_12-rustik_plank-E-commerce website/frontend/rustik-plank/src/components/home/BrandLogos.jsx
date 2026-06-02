import { brands } from "@/data/mockData";

export default function BrandLogos() {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div
              key={brand}
              className="text-gray-400 font-bold text-lg hover:text-orange-500 transition-colors cursor-pointer tracking-wide"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}