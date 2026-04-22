import Image from "next/image";

const products = [
  { id: 1, img: "/images/laptop.jpg", title: "Laptop", desc: "Good laptop", price: 1000 },
  { id: 2, img: "/images/phone.jpg", title: "Phone", desc: "Smart phone", price: 500 },
  { id: 3, img: "/images/headphones.jpg", title: "Headphones", desc: "Wireless", price: 200 },
];

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) return <h1>Product not found</h1>;

  return (
    <div>
      <Image src={product.img} alt={product.title} width={300} height={250} />
      <h1>{product.title}</h1>
      <p>{product.desc}</p>
      <p>${product.price}</p>
    </div>
  );
}