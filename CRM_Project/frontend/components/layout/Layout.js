import Link        from 'next/link';
import { useRouter } from 'next/router';
import { useAuth }  from '../../context/AuthContext';
import {
  FiGrid, FiUsers, FiFileText, FiLogOut, FiMessageSquare
} from 'react-icons/fi';

const navLinks = [
  { href: '/dashboard',         icon: FiGrid,        label: 'Dashboard' },
  { href: '/dashboard/customers', icon: FiUsers,       label: 'Customers' },
  { href: '/dashboard/invoices',  icon: FiFileText,    label: 'Invoices' },
  { href: '/dashboard/chatbot',   icon: FiMessageSquare, label: 'Chatbot' },
];

export default function Layout({ children }) {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>

      {/* ── Sidebar ──────────────────────────────────────────────── */}
      <aside style={{
        width: '240px', background: 'var(--surface)',
        borderRight: '1px solid var(--border)',
        display: 'flex', flexDirection: 'column',
        position: 'fixed', height: '100vh', zIndex: 100
      }}>
        {/* Logo */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border)' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>
            CRM System
          </h1>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            {user?.name}
          </p>
        </div>

        {/* Navigation */}
        <nav style={{ flex: 1, padding: '1rem 0.75rem' }}>
          {navLinks.map(({ href, icon: Icon, label }) => {
            const active = router.pathname === href;
            return (
              <Link key={href} href={href} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.625rem 0.75rem', borderRadius: 'var(--radius)',
                marginBottom: '0.25rem', fontSize: '0.875rem', fontWeight: 500,
                color:      active ? 'var(--primary)' : 'var(--text-muted)',
                background: active ? 'var(--primary-light)' : 'transparent',
                transition: 'all 0.15s'
              }}>
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div style={{ padding: '1rem', borderTop: '1px solid var(--border)' }}>
          <button
            onClick={logout}
            className="btn btn-outline"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <FiLogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main style={{ flex: 1, marginLeft: '240px', padding: '2rem', minHeight: '100vh' }}>
        {children}
      </main>
    </div>
  );
}
