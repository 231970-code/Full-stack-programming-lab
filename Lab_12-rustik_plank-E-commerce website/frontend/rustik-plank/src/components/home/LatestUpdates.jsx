import { latestUpdates } from "@/data/mockData";
import Link from "next/link";

export default function LatestUpdates() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-black text-gray-800 mb-6 border-b-2 border-orange-500 pb-2 inline-block">
          Latest Updates
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestUpdates.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 h-48 flex items-center justify-center">
                <span className="text-amber-600 font-bold text-lg">{item.title}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.desc}</p>
                <Link href="#" className="border border-gray-400 text-gray-600 px-4 py-1 text-sm hover:bg-gray-800 hover:text-white transition-colors rounded">
                  READ MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}