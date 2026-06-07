const Customer = require('../models/Customer');

// ─── @GET /api/customers ───────────────────────────────────────────────────────
// Get all customers with search & filter
const getCustomers = async (req, res) => {
  try {
    const { search, status } = req.query;

    // Build dynamic query
    let query = { createdBy: req.user._id };

    if (status && ['Lead', 'Active', 'Inactive'].includes(status)) {
      query.status = status;
    }

    if (search && search.trim() !== '') {
      query.name = { $regex: search.trim(), $options: 'i' }; // case-insensitive
    }

    const customers = await Customer.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      count: customers.length,
      customers
    });
  } catch (error) {
    console.error('Get customers error:', error.message);
    res.status(500).json({ message: 'Server error fetching customers' });
  }
};

// ─── @GET /api/customers/:id ───────────────────────────────────────────────────
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      _id:       req.params.id,
      createdBy: req.user._id
    });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ customer });
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching customer' });
  }
};

// ─── @POST /api/customers ──────────────────────────────────────────────────────
const createCustomer = async (req, res) => {
  try {
    const { name, email, phone, company, address, status, notes, totalRevenue } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required' });
    }

    // Check duplicate email
    const existing = await Customer.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Customer with this email already exists' });
    }

    const customer = await Customer.create({
      name, email, phone, company, address, status, notes, totalRevenue,
      createdBy: req.user._id
    });

    res.status(201).json({
      message: 'Customer created successfully',
      customer
    });
  } catch (error) {
    console.error('Create customer error:', error.message);
    res.status(500).json({ message: 'Server error creating customer' });
  }
};

// ─── @PUT /api/customers/:id ───────────────────────────────────────────────────
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      _id:       req.params.id,
      createdBy: req.user._id
    });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    const { name, email, phone, company, address, status, notes, totalRevenue } = req.body;

    const updated = await Customer.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, company, address, status, notes, totalRevenue },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: 'Customer updated successfully',
      customer: updated
    });
  } catch (error) {
    console.error('Update customer error:', error.message);
    res.status(500).json({ message: 'Server error updating customer' });
  }
};

// ─── @DELETE /api/customers/:id ───────────────────────────────────────────────
const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({
      _id:       req.params.id,
      createdBy: req.user._id
    });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    await Customer.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Delete customer error:', error.message);
    res.status(500).json({ message: 'Server error deleting customer' });
  }
};

// ─── @GET /api/customers/stats ────────────────────────────────────────────────
const getStats = async (req, res) => {
  try {
    const total    = await Customer.countDocuments({ createdBy: req.user._id });
    const active   = await Customer.countDocuments({ createdBy: req.user._id, status: 'Active' });
    const leads    = await Customer.countDocuments({ createdBy: req.user._id, status: 'Lead' });
    const inactive = await Customer.countDocuments({ createdBy: req.user._id, status: 'Inactive' });

    const revenueResult = await Customer.aggregate([
      { $match: { createdBy: req.user._id } },
      { $group: { _id: null, totalRevenue: { $sum: '$totalRevenue' } } }
    ]);
    const totalRevenue = revenueResult[0]?.totalRevenue || 0;

    res.status(200).json({ total, active, leads, inactive, totalRevenue });
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching stats' });
  }
};

module.exports = { getCustomers, getCustomerById, createCustomer, updateCustomer, deleteCustomer, getStats };
