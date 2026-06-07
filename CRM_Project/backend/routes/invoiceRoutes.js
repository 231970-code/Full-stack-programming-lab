const express = require('express');
const router  = express.Router();
const {
  getInvoices,
  getInvoiceById,
  createInvoice,
  deleteInvoice
} = require('../controllers/invoiceController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/',       getInvoices);
router.get('/:id',    getInvoiceById);
router.post('/',      createInvoice);
router.delete('/:id', deleteInvoice);

module.exports = router;
