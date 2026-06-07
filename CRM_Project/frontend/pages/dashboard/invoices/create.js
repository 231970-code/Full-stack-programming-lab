import { useEffect, useState } from 'react';
import { useRouter }  from 'next/router';
import Head           from 'next/head';
import Link           from 'next/link';
import Layout         from '../../../components/layout/Layout';
import ProtectedRoute from '../../../components/layout/ProtectedRoute';
import { getCustomers, createInvoice } from '../../../lib/api';
import toast from 'react-hot-toast';
import { FiArrowLeft, FiPlus, FiTrash2 } from 'react-icons/fi';

const emptyItem = { description: '', quantity: 1, unitPrice: 0 };

export default function CreateInvoicePage() {
  const router = useRouter();
  const [customers, setCustomers] = useState([]);
  const [form,      setForm]      = useState({ customerId: '', tax: 0, dueDate: '', notes: '', status: 'Draft' });
  const [items,     setItems]     = useState([{ ...emptyItem }]);
  const [loading,   setLoading]   = useState(false);

  useEffect(() => {
    getCustomers().then(({ data }) => setCustomers(data.customers));
  }, []);

  const addItem = () => setItems(p => [...p, { ...emptyItem }]);
  const removeItem = (i) => setItems(p => p.filter((_, idx) => idx !== i));
  const updateItem = (i, field, value) => setItems(p => p.map((item, idx) =>
    idx === i ? { ...item, [field]: value } : item
  ));

  const subtotal = items.reduce((s, it) => s + (Number(it.quantity) * Number(it.unitPrice)), 0);
  const taxAmt   = (subtotal * Number(form.tax)) / 100;
  const total    = subtotal + taxAmt;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.customerId)        return toast.error('Please select a customer');
    if (items.some(it => !it.description || it.unitPrice <= 0)) return toast.error('Fill in all item details');
    setLoading(true);
    try {
      await createInvoice({ ...form, items });
      toast.success('Invoice created!');
      router.push('/dashboard/invoices');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create invoice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <Head><title>Create Invoice – CRM System</title></Head>
        <div className="page-enter" style={{ maxWidth: '760px' }}>
          <Link href="/dashboard/invoices" className="btn btn-outline" style={{ marginBottom: '1.5rem' }}>
            <FiArrowLeft /> Back
          </Link>
          <div className="card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Create Invoice</h2>
            <form onSubmit={handleSubmit}>
              {/* Customer & Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Customer *</label>
                  <select className="form-input" value={form.customerId}
                    onChange={e => setForm(p => ({ ...p, customerId: e.target.value }))} required>
                    <option value="">Select customer...</option>
                    {customers.map(c => <option key={c._id} value={c._id}>{c.name} – {c.company}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select className="form-input" value={form.status}
                    onChange={e => setForm(p => ({ ...p, status: e.target.value }))}>
                    <option>Draft</option><option>Sent</option><option>Paid</option><option>Overdue</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Due Date</label>
                  <input type="date" className="form-input" value={form.dueDate}
                    onChange={e => setForm(p => ({ ...p, dueDate: e.target.value }))} />
                </div>
                <div className="form-group">
                  <label className="form-label">Tax (%)</label>
                  <input type="number" className="form-input" value={form.tax} min="0" max="100"
                    onChange={e => setForm(p => ({ ...p, tax: e.target.value }))} />
                </div>
              </div>

              {/* Items */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontWeight: 600 }}>Line Items</h3>
                  <button type="button" className="btn btn-outline" onClick={addItem} style={{ fontSize: '0.8rem' }}>
                    <FiPlus /> Add Item
                  </button>
                </div>
                {items.map((item, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr auto', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'end' }}>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      {i === 0 && <label className="form-label">Description</label>}
                      <input className="form-input" placeholder="Service/product..." value={item.description}
                        onChange={e => updateItem(i, 'description', e.target.value)} required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      {i === 0 && <label className="form-label">Qty</label>}
                      <input type="number" className="form-input" value={item.quantity} min="1"
                        onChange={e => updateItem(i, 'quantity', e.target.value)} />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      {i === 0 && <label className="form-label">Unit Price</label>}
                      <input type="number" className="form-input" value={item.unitPrice} min="0"
                        onChange={e => updateItem(i, 'unitPrice', e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-danger" style={{ padding: '0.5rem' }}
                      onClick={() => removeItem(i)} disabled={items.length === 1}>
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius)', padding: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Subtotal</span><span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span>Tax ({form.tax}%)</span><span>PKR {taxAmt.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1.1rem' }}>
                  <span>Total</span><span>PKR {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Notes */}
              <div className="form-group">
                <label className="form-label">Notes</label>
                <textarea className="form-input" rows={2} value={form.notes}
                  onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} placeholder="Optional notes..." />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <Link href="/dashboard/invoices" className="btn btn-outline">Cancel</Link>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Invoice'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
