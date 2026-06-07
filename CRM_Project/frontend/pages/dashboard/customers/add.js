import { useState }  from 'react';
import { useRouter }  from 'next/router';
import Head           from 'next/head';
import Link           from 'next/link';
import Layout         from '../../../components/layout/Layout';
import ProtectedRoute from '../../../components/layout/ProtectedRoute';
import { createCustomer } from '../../../lib/api';
import toast from 'react-hot-toast';
import { FiArrowLeft } from 'react-icons/fi';

const emptyForm = {
  name: '', email: '', phone: '', company: '',
  address: '', status: 'Lead', notes: '', totalRevenue: ''
};

export default function AddCustomerPage() {
  const router = useRouter();
  const [form,    setForm]    = useState(emptyForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      return toast.error('Name, email, and phone are required');
    }
    setLoading(true);
    try {
      await createCustomer({ ...form, totalRevenue: Number(form.totalRevenue) || 0 });
      toast.success('Customer added successfully!');
      router.push('/dashboard/customers');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add customer');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <Head><title>Add Customer – CRM System</title></Head>
        <div className="page-enter" style={{ maxWidth: '640px' }}>
          <Link href="/dashboard/customers" className="btn btn-outline" style={{ marginBottom: '1.5rem' }}>
            <FiArrowLeft /> Back to Customers
          </Link>
          <div className="card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="+92 300 1234567" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Company</label>
                  <input name="company" value={form.company} onChange={handleChange} className="form-input" placeholder="Company name" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Address</label>
                  <input name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="Full address" />
                </div>
                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select name="status" value={form.status} onChange={handleChange} className="form-input">
                    <option value="Lead">Lead</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Total Revenue (PKR)</label>
                  <input type="number" name="totalRevenue" value={form.totalRevenue} onChange={handleChange} className="form-input" placeholder="0" min="0" />
                </div>
                <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                  <label className="form-label">Notes</label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} className="form-input" rows={3} placeholder="Any additional notes..." />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <Link href="/dashboard/customers" className="btn btn-outline">Cancel</Link>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Saving...' : 'Add Customer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
