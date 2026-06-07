import { useState, useEffect } from 'react';
import { useRouter }  from 'next/router';
import Head           from 'next/head';
import Link           from 'next/link';
import Layout         from '../../../../components/layout/Layout';
import ProtectedRoute from '../../../../components/layout/ProtectedRoute';
import { getCustomerById, updateCustomer } from '../../../../lib/api';
import toast from 'react-hot-toast';
import { FiArrowLeft } from 'react-icons/fi';

export default function EditCustomerPage() {
  const router = useRouter();
  const { id } = router.query;
  const [form,    setForm]    = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!id) return;
    getCustomerById(id)
      .then(({ data }) => setForm(data.customer))
      .catch(() => toast.error('Customer not found'))
      .finally(() => setFetching(false));
  }, [id]);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateCustomer(id, { ...form, totalRevenue: Number(form.totalRevenue) || 0 });
      toast.success('Customer updated!');
      router.push('/dashboard/customers');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <Head><title>Edit Customer – CRM System</title></Head>
        <div className="page-enter" style={{ maxWidth: '640px' }}>
          <Link href="/dashboard/customers" className="btn btn-outline" style={{ marginBottom: '1.5rem' }}>
            <FiArrowLeft /> Back
          </Link>
          <div className="card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Edit Customer</h2>
            {fetching ? (
              <div className="spinner" />
            ) : form ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input name="company" value={form.company} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label">Address</label>
                    <input name="address" value={form.address} onChange={handleChange} className="form-input" />
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
                    <input type="number" name="totalRevenue" value={form.totalRevenue} onChange={handleChange} className="form-input" min="0" />
                  </div>
                  <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                    <label className="form-label">Notes</label>
                    <textarea name="notes" value={form.notes} onChange={handleChange} className="form-input" rows={3} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                  <Link href="/dashboard/customers" className="btn btn-outline">Cancel</Link>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Customer'}
                  </button>
                </div>
              </form>
            ) : (
              <p>Customer not found.</p>
            )}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
