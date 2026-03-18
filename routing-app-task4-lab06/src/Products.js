import React, { useState } from "react";

function Products() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Laptop",
      desc: "High performance laptop for students.",
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 2,
      name: "Headphones",
      desc: "Noise cancelling headphones.",
      img: "https://images.unsplash.com/photo-1518443895914-7c1b8b6f7e52"
    },
    {
      id: 3,
      name: "Smartphone",
      desc: "Latest smartphone with great features.",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + " added to cart");
  };

  return (
    <div style={styles.container}>
      <h2>Products</h2>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.img} alt={p.name} style={styles.img} />
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <button style={styles.btn} onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h3>Cart Items: {cart.length}</h3>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    width: "250px",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    background: "white"
  },
  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px"
  },
  btn: {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#6c63ff",
    color: "white",
    cursor: "pointer"
  }
};

export default Products;