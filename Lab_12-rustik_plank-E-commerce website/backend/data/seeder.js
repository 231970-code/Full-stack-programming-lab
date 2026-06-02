const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../models/productModel");
const User = require("../models/userModel");
dotenv.config();

const products = [
  { name: "Rustic Wooden Bed", description: "Handcrafted reclaimed wood bed frame.", price: 134.99, category: "beds", tag: "popular", image: "", countInStock: 10 },
  { name: "Oak Dining Table", description: "Solid oak dining table seats 6.", price: 134.99, category: "tables", tag: "special", image: "", countInStock: 5 },
  { name: "Lounge Chair", description: "Ergonomic reclaimed wood lounge chair.", price: 134.99, category: "chairs", tag: "featured", image: "", countInStock: 8 },
  { name: "Storage Bookcase", description: "Multi-shelf rustic bookcase.", price: 134.99, category: "bookcases", tag: "popular", image: "", countInStock: 6 },
  { name: "Wooden Cabinet", description: "Hand-crafted storage cabinet.", price: 134.99, category: "cabinets", tag: "special", image: "", countInStock: 4 },
  { name: "Side Table", description: "Small rustic side table.", price: 134.99, category: "tables", tag: "featured", image: "", countInStock: 12 },
  { name: "King Size Bed", description: "King size reclaimed wood bed.", price: 299.99, category: "beds", tag: "popular", image: "", countInStock: 3 },
  { name: "Accent Chair", description: "Stylish wooden accent chair.", price: 134.99, category: "chairs", tag: "special", image: "", countInStock: 7 },
  { name: "Wooden Box Set", description: "Set of 3 decorative wooden boxes.", price: 59.99, category: "boxes", tag: "featured", image: "", countInStock: 15 },
  { name: "Display Cabinet", description: "Glass front display cabinet.", price: 189.99, category: "cabinets", tag: "popular", image: "", countInStock: 5 },
  { name: "Coffee Table", description: "Low rustic coffee table.", price: 134.99, category: "tables", tag: "special", image: "", countInStock: 9 },
  { name: "Rocking Chair", description: "Classic wooden rocking chair.", price: 134.99, category: "chairs", tag: "featured", image: "", countInStock: 6 },
];

const seedDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Product.deleteMany();
  await User.deleteMany();

  // Create admin user
  await User.create({
    name: "Admin User",
    email: "admin@rustikplank.com",
    password: "admin123",
    isAdmin: true,
  });

  await Product.insertMany(products);
  console.log("✅ Data seeded successfully!");
  process.exit();
};

seedDB().catch((err) => {
  console.error(err);
  process.exit(1);
});