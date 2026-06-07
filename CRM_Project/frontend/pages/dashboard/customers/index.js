import { useEffect, useState, useCallback } from 'react';
import Head           from 'next/head';
import Link           from 'next/link';
import Layout         from '../../../components/layout/Layout';
import ProtectedRoute from '../../../components/layout/ProtectedRoute';
import { getCustomers, deleteCustomer } from '../../../lib/api';
import toast from 'react-hot-toast';
import { FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [search,    setSearch]    = useState('');
  const [status,    setStatus]    = useState('');

  const fetchCustomers = useCallback(async () => {
    try {
      const params = {};
      if (search.trim()) params.search = search.trim();
      if (status)        params.status = status;
      const { data } = await getCustomers(params);
      setCustomers(data.customers);
    } catch {
      toast.error('Failed to load customers');
    } finally {
      setLoading(false);
    }
  }, [search, status]);

  // Fetch whenever search/status changes (dynamic, no reload)
  useEffect(() => {
    const delay = setTimeout(fetchCustomers, 300); // debounce
    return () => clearTimeout(delay);
  }, [fetchCustomers]);

  const handleDelete = async (id, name) => {
    if (!confirm(`Delete customer "${name}"? This cannot be undone.`)) return;
    try {
      await deleteCustomer(id);
      toast.success('Customer deleted');
      fetchCustomers();
    } catch {
      toast.error('Failed to delete customer');
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <Head><title>Customers – CRM System</title></Head>
        <div className="page-enter">
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Customers</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{customers.length} record(s) found</p>
            </div>
            <Link href="/dashboard/customers/add" className="btn btn-primary">
              <FiPlus /> Add Customer
            </Link>
          </div>

          {/* Search & Filter */}
          <div className="card" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px', position: 'relative' }}>
              <FiSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                className="form-input"
                style={{ paddingLeft: '2rem' }}
                placeholder="Search by name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className="form-input"
              style={{ width: 'auto', minWidth: '160px' }}
              value={status}
              onChange={e => setStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="Lead">Lead</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            {(search || status) && (
              <button className="btn btn-outline" onClick={() => { setSearch(''); setStatus(''); }}>
                Clear
              </button>
            )}
          </div>

          {/* Table */}
          <div className="card" style={{ padding: 0 }}>
            {loading ? (
              <div className="spinner" />
            ) : customers.length === 0 ? (
              <p style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No customers found. Try adjusting your search.
              </p>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th><th>Name</th><th>Email</th><th>Phone</th>
                      <th>Company</th><th>Status</th><th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((c, i) => (
                      <tr key={c._id}>
                        <td style={{ color: 'var(--text-muted)' }}>{i + 1}</td>
                        <td style={{ fontWeight: 500 }}>{c.name}</td>
                        <td style={{ color: 'var(--text-muted)' }}>{c.email}</td>
                        <td>{c.phone}</td>
                        <td>{c.company || '—'}</td>
                        <td>
                          <span className={`badge badge-${c.status.toLowerCase()}`}>{c.status}</span>
                        </td>
                        <td>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <Link href={`/dashboard/customers/edit/${c._id}`} className="btn btn-outline" style={{ padding: '0.3rem 0.6rem' }}>
                              <FiEdit2 size={14} />
                            </Link>
                            <button className="btn btn-danger" style={{ padding: '0.3rem 0.6rem' }}
                              onClick={() => handleDelete(c._id, c.name)}>
                              <FiTrash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
