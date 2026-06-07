import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

// Attach JWT token to every request automatically
API.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('crm_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Auth ──────────────────────────────────────────────────────────────────────
export const registerUser  = (data) => API.post('/auth/register', data);
export const loginUser     = (data) => API.post('/auth/login', data);
export const getMe         = ()     => API.get('/auth/me');

// ─── Customers ────────────────────────────────────────────────────────────────
export const getCustomers     = (params) => API.get('/customers', { params });
export const getCustomerById  = (id)     => API.get(`/customers/${id}`);
export const createCustomer   = (data)   => API.post('/customers', data);
export const updateCustomer   = (id, data) => API.put(`/customers/${id}`, data);
export const deleteCustomer   = (id)     => API.delete(`/customers/${id}`);
export const getCustomerStats = ()       => API.get('/customers/stats');

// ─── Invoices ─────────────────────────────────────────────────────────────────
export const getInvoices    = ()       => API.get('/invoices');
export const getInvoiceById = (id)     => API.get(`/invoices/${id}`);
export const createInvoice  = (data)   => API.post('/invoices', data);
export const deleteInvoice  = (id)     => API.delete(`/invoices/${id}`);

export default API;
