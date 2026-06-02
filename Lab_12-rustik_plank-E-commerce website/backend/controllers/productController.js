const Product = require("../models/productModel");

// @GET /api/products
const getProducts = async (req, res) => {
  const { category, tag, search } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (tag) filter.tag = tag;
  if (search) filter.name = { $regex: search, $options: "i" };
  const products = await Product.find(filter);
  res.json(products);
};

// @GET /api/products/:id
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
};

// @POST /api/products (admin)
const createProduct = async (req, res) => {
  const { name, description, price, category, tag, image, countInStock } = req.body;
  const product = await Product.create({ name, description, price, category, tag, image, countInStock });
  res.status(201).json(product);
};

// @PUT /api/products/:id (admin)
const updateProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  Object.assign(product, req.body);
  const updated = await product.save();
  res.json(updated);
};

// @DELETE /api/products/:id (admin)
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  await product.deleteOne();
  res.json({ message: "Product removed" });
};

// @POST /api/products/:id/reviews
const createReview = async (req, res) => {
  const { rating, comment } = req.body;
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  const already = product.reviews.find((r) => r.user.toString() === req.user._id.toString());
  if (already) return res.status(400).json({ message: "Already reviewed" });
  product.reviews.push({ user: req.user._id, name: req.user.name, rating: Number(rating), comment });
  product.numReviews = product.reviews.length;
  product.rating = product.reviews.reduce((a, r) => a + r.rating, 0) / product.reviews.length;
  await product.save();
  res.status(201).json({ message: "Review added" });
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct, createReview };