const Order = require("../models/orderModel");

// @POST /api/orders
const createOrder = async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;
  if (!orderItems?.length) return res.status(400).json({ message: "No order items" });
  const order = await Order.create({ user: req.user._id, orderItems, shippingAddress, paymentMethod, totalPrice });
  res.status(201).json(order);
};

// @GET /api/orders/myorders
const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

// @GET /api/orders/:id
const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user", "name email");
  if (order) res.json(order);
  else res.status(404).json({ message: "Order not found" });
};

// @PUT /api/orders/:id/pay
const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  order.isPaid = true;
  order.paidAt = Date.now();
  const updated = await order.save();
  res.json(updated);
};

// @GET /api/orders (admin)
const getAllOrders = async (req, res) => {
  const orders = await Order.find({}).populate("user", "name email");
  res.json(orders);
};

module.exports = { createOrder, getMyOrders, getOrderById, updateOrderToPaid, getAllOrders };