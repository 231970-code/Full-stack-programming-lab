import { useEffect, useState } from 'react';
import Head              from 'next/head';
import Layout            from '../../components/layout/Layout';
import ProtectedRoute    from '../../components/layout/ProtectedRoute';
import { useAuth }       from '../../context/AuthContext';
import { getCustomerStats, getCustomers } from '../../lib/api';
import { FiUsers, FiUserCheck, FiUserMinus, FiDollarSign } from 'react-icons/fi';

const StatCard = ({ icon: Icon, label, value, color }) => (
  <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div style={{
      width: '48px', height: '48px', borderRadius: '12px',
      background: color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <Icon size={24} color={color} />
    </div>
    <div>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</p>
      <p style={{ fontSize: '1.5rem', fontWeight: 700 }}>{value}</p>
    </div>
  </div>
);

export default function DashboardPage() {
  const { user }              = useAuth();
  const [stats,    setStats]  = useState(null);
  const [recent,   setRecent] = useState([]);
  const [loading,  setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const [statsRes, custRes] = await Promise.all([
          getCustomerStats(),
          getCustomers()
        ]);
        setStats(statsRes.data);
        setRecent(custRes.data.customers.slice(0, 5));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <ProtectedRoute>
      <Layout>
        <Head><title>Dashboard – CRM System</title></Head>
        <div className="page-enter">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            Welcome back, {user?.name} 👋
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Here&apos;s what&apos;s happening with your customers today.
          </p>

          {loading ? (
            <div className="spinner" />
          ) : (
            <>
              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <StatCard icon={FiUsers}      label="Total Customers" value={stats?.total    || 0} color="var(--primary)" />
                <StatCard icon={FiUserCheck}  label="Active"          value={stats?.active   || 0} color="var(--success)" />
                <StatCard icon={FiDollarSign} label="Leads"           value={stats?.leads    || 0} color="var(--warning)" />
                <StatCard icon={FiUserMinus}  label="Inactive"        value={stats?.inactive || 0} color="var(--danger)"  />
              </div>

              {/* Recent Customers */}
              <div className="card">
                <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Recent Customers</h3>
                {recent.length === 0 ? (
                  <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '1rem' }}>No customers yet. Add your first customer!</p>
                ) : (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th><th>Email</th><th>Company</th><th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recent.map(c => (
                        <tr key={c._id}>
                          <td style={{ fontWeight: 500 }}>{c.name}</td>
                          <td style={{ color: 'var(--text-muted)' }}>{c.email}</td>
                          <td>{c.company || '—'}</td>
                          <td>
                            <span className={`badge badge-${c.status.toLowerCase()}`}>
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
