export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-gray-800 mb-4">About Rustik Plank</h1>
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 mb-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          Rustik Plank is a premier handcrafted furniture brand dedicated to sustainable, reclaimed wood furniture.
          Every piece tells a story — crafted by skilled artisans using responsibly sourced materials.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {["Our Story", "Craftsmanship", "Sustainability"].map((title) => (
          <div key={title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <h3 className="font-black text-gray-800 text-lg mb-3 text-orange-500">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}