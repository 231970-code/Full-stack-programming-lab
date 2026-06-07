const express = require('express');
const router  = express.Router();
const {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getStats
} = require('../controllers/customerController');
const { protect } = require('../middleware/authMiddleware');

// All routes are protected
router.use(protect);

router.get('/stats',  getStats);
router.get('/',       getCustomers);
router.get('/:id',    getCustomerById);
router.post('/',      createCustomer);
router.put('/:id',    updateCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
