import Link from "next/link";
import Image from "next/image";

const products = [
  { id: 1, img: "/images/laptop.jpg", title: "Laptop", desc: "Good laptop", price: 1000 },
  { id: 2, img: "/images/phone.jpg", title: "Phone", desc: "Smart phone", price: 500 },
  { id: 3, img: "/images/headphones.jpg", title: "Headphones", desc: "Wireless", price: 200 },
];

export default function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          <Image src={p.img} alt={p.title} width={200} height={150} />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <p>${p.price}</p>
          <Link href={`/products/${p.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}