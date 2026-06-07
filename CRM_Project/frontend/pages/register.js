import { useState }  from 'react';
import { useAuth }   from '../context/AuthContext';
import { useRouter } from 'next/router';
import Link          from 'next/link';
import toast         from 'react-hot-toast';
import Head          from 'next/head';

export default function RegisterPage() {
  const { register, user } = useAuth();
  const router = useRouter();

  const [form,    setForm]    = useState({ name: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);

  if (user) { router.push('/dashboard'); return null; }

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) return toast.error('All fields are required');
    if (form.password.length < 6) return toast.error('Password must be at least 6 characters');
    if (form.password !== form.confirm)             return toast.error('Passwords do not match');

    setLoading(true);
    try {
      await register(form.name, form.email, form.password);
      toast.success('Account created successfully!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head><title>Register – CRM System</title></Head>
      <div style={{
        minHeight: '100vh', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg)', padding: '1rem'
      }}>
        <div className="card" style={{ width: '100%', maxWidth: '420px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--primary)' }}>Create Account</h1>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Start managing your customers</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange}
                className="form-input" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                className="form-input" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange}
                className="form-input" placeholder="Min. 6 characters" required />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input type="password" name="confirm" value={form.confirm} onChange={handleChange}
                className="form-input" placeholder="Repeat password" required />
            </div>

            <button type="submit" className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', marginTop: '0.5rem' }}
              disabled={loading}>
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </form>

          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 500 }}>Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
}
