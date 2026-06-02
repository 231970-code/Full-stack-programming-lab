import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";

const footerLinks = {
  Information: ["Terms and Conditions", "About Us", "Sitemap", "Contact", "Return Policy"],
  "My Account": ["My Account", "Order History", "Wish List", "Newsletter"],
  "Help & More": ["Specials", "New Products", "Top Sellers", "Manufacturers"],
  Links: ["Delivery", "Service", "Gift Cards", "Media"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-12">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {Object.entries(footerLinks).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-white font-bold uppercase mb-4 border-b border-orange-500 pb-2">{title}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm hover:text-orange-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social + Copyright */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-400">© 2024 Rustik Plank Furniture. All Rights Reserved.</p>
          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube].map((Icon, i) => (
              <Link key={i} href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}