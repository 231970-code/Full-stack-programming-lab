const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET all
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// ADD product
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// DELETE product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;