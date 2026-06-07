const Invoice  = require('../models/Invoice');
const Customer = require('../models/Customer');

// ─── @GET /api/invoices ────────────────────────────────────────────────────────
const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice
      .find({ createdBy: req.user._id })
      .populate('customer', 'name email company')
      .sort({ createdAt: -1 });

    res.status(200).json({ count: invoices.length, invoices });
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching invoices' });
  }
};

// ─── @GET /api/invoices/:id ────────────────────────────────────────────────────
const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice
      .findOne({ _id: req.params.id, createdBy: req.user._id })
      .populate('customer', 'name email phone company address');

    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });

    res.status(200).json({ invoice });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// ─── @POST /api/invoices ───────────────────────────────────────────────────────
const createInvoice = async (req, res) => {
  try {
    const { customerId, items, tax, dueDate, notes, status } = req.body;

    if (!customerId || !items || items.length === 0) {
      return res.status(400).json({ message: 'Customer and at least one item are required' });
    }

    // Verify customer belongs to user
    const customer = await Customer.findOne({ _id: customerId, createdBy: req.user._id });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    // Calculate totals
    const processedItems = items.map(item => ({
      ...item,
      total: item.quantity * item.unitPrice
    }));

    const subtotal   = processedItems.reduce((sum, item) => sum + item.total, 0);
    const taxAmount  = (subtotal * (tax || 0)) / 100;
    const total      = subtotal + taxAmount;

    // Generate invoice number
    const count = await Invoice.countDocuments();
    const invoiceNumber = `INV-${String(count + 1).padStart(4, '0')}`;

    const invoice = await Invoice.create({
      invoiceNumber,
      customer:  customerId,
      items:     processedItems,
      subtotal,
      tax:       taxAmount,
      total,
      dueDate,
      notes,
      status:    status || 'Draft',
      createdBy: req.user._id
    });

    const populated = await invoice.populate('customer', 'name email company');

    res.status(201).json({ message: 'Invoice created successfully', invoice: populated });
  } catch (error) {
    console.error('Create invoice error:', error.message);
    res.status(500).json({ message: 'Server error creating invoice' });
  }
};

// ─── @DELETE /api/invoices/:id ─────────────────────────────────────────────────
const deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findOne({ _id: req.params.id, createdBy: req.user._id });
    if (!invoice) return res.status(404).json({ message: 'Invoice not found' });

    await Invoice.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Invoice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getInvoices, getInvoiceById, createInvoice, deleteInvoice };
