import { useState }   from 'react';
import { useAuth }    from '../context/AuthContext';
import { useRouter }  from 'next/router';
import Link           from 'next/link';
import toast          from 'react-hot-toast';
import Head           from 'next/head';

export default function LoginPage() {
  const { login, user } = useAuth();
  const router = useRouter();

  const [form,    setForm]    = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  // If already logged in, go to dashboard
  if (user) { router.push('/dashboard'); return null; }

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return toast.error('Please fill in all fields');
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success('Welcome back!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head><title>Login – CRM System</title></Head>
      <div style={{
        minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg)', padding: '1rem'
      }}>
        <div className="card" style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)' }}>CRM System</h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email" name="email" value={form.email}
                onChange={handleChange} className="form-input"
                placeholder="you@example.com" required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password" name="password" value={form.password}
                onChange={handleChange} className="form-input"
                placeholder="Enter your password" required
              />
            </div>

            <button
              type="submit" className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', marginTop: '0.5rem' }}
              disabled={loading}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Don&apos;t have an account?{' '}
            <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 500 }}>Register here</Link>
          </p>
        </div>
      </div>
    </>
  );
}
