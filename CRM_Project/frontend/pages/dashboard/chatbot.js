import { useState, useRef, useEffect } from 'react';
import Head           from 'next/head';
import { useRouter }  from 'next/router';
import Layout         from '../../components/layout/Layout';
import ProtectedRoute from '../../components/layout/ProtectedRoute';
import { getCustomers } from '../../lib/api';
import { FiSend, FiMessageSquare } from 'react-icons/fi';

// ── Rule-based response engine ─────────────────────────────────────────────────
const getBotReply = async (input, navigate) => {
  const text = input.toLowerCase().trim();

  if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
    return 'Hello! 👋 I am the CRM assistant. Type "help" to see what I can do.';
  }

  if (text.includes('help') || text === '?') {
    return `Here are the commands I support:\n• "list customers" – Show all customers\n• "add customer" – Go to add customer page\n• "invoices" – Go to invoices page\n• "create invoice" – Go to create invoice\n• "dashboard" – Go to dashboard\n• "stats" – Show customer stats\n• "hello" – Greeting`;
  }

  if (text.includes('list customer') || text.includes('show customer') || text.includes('all customer')) {
    try {
      const { data } = await getCustomers();
      const list = data.customers.slice(0, 8).map((c, i) =>
        `${i + 1}. ${c.name} (${c.status}) – ${c.email}`
      ).join('\n');
      return `Found ${data.count} customer(s):\n\n${list}${data.count > 8 ? `\n...and ${data.count - 8} more` : ''}`;
    } catch {
      return 'Sorry, I could not fetch customers right now.';
    }
  }

  if (text.includes('add customer') || text.includes('new customer')) {
    setTimeout(() => navigate('/dashboard/customers/add'), 1200);
    return 'Sure! Taking you to the Add Customer page... 🚀';
  }

  if (text.includes('create invoice') || text.includes('new invoice')) {
    setTimeout(() => navigate('/dashboard/invoices/create'), 1200);
    return 'Opening the invoice creation form... 📄';
  }

  if (text.includes('invoice')) {
    setTimeout(() => navigate('/dashboard/invoices'), 1200);
    return 'Taking you to the Invoices page... 📋';
  }

  if (text.includes('dashboard') || text.includes('home')) {
    setTimeout(() => navigate('/dashboard'), 1000);
    return 'Navigating to Dashboard... 🏠';
  }

  if (text.includes('stat') || text.includes('summary')) {
    try {
      const { data } = await getCustomers();
      const total    = data.count;
      const active   = data.customers.filter(c => c.status === 'Active').length;
      const leads    = data.customers.filter(c => c.status === 'Lead').length;
      return `📊 Quick Stats:\n• Total Customers: ${total}\n• Active: ${active}\n• Leads: ${leads}\n• Inactive: ${total - active - leads}`;
    } catch {
      return 'Could not load stats right now.';
    }
  }

  return `I didn't understand "${input}". Type "help" to see available commands.`;
};

// ── Component ──────────────────────────────────────────────────────────────────
export default function ChatbotPage() {
  const router  = useRouter();
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m your CRM assistant 🤖\nType "help" to see what I can do.' }
  ]);
  const [input,   setInput]   = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(p => [...p, { role: 'user', text: userMsg }]);
    setLoading(true);
    const reply = await getBotReply(userMsg, router.push.bind(router));
    setMessages(p => [...p, { role: 'bot', text: reply }]);
    setLoading(false);
  };

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } };

  return (
    <ProtectedRoute>
      <Layout>
        <Head><title>Chatbot – CRM System</title></Head>
        <div className="page-enter" style={{ maxWidth: '640px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <FiMessageSquare size={24} color="var(--primary)" />
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>CRM Chatbot</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Rule-based assistant – type "help" for commands</p>
            </div>
          </div>

          {/* Chat Window */}
          <div className="card" style={{ padding: 0 }}>
            <div style={{
              height: '400px', overflowY: 'auto', padding: '1rem',
              display: 'flex', flexDirection: 'column', gap: '0.75rem'
            }}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
                }}>
                  <div style={{
                    maxWidth: '75%',
                    padding: '0.625rem 0.875rem',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? 'var(--primary)' : 'var(--bg)',
                    color:      msg.role === 'user' ? '#fff' : 'var(--text)',
                    fontSize:   '0.875rem',
                    lineHeight: 1.5,
                    whiteSpace: 'pre-wrap',
                    border:     msg.role === 'bot' ? '1px solid var(--border)' : 'none'
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    padding: '0.625rem 1rem', borderRadius: '16px 16px 16px 4px',
                    fontSize: '0.875rem', color: 'var(--text-muted)'
                  }}>
                    Typing...
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <div style={{
              display: 'flex', gap: '0.5rem', padding: '0.75rem',
              borderTop: '1px solid var(--border)'
            }}>
              <input
                className="form-input"
                placeholder='Type a command or "help"...'
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={loading}
              />
              <button className="btn btn-primary" onClick={handleSend} disabled={loading || !input.trim()}>
                <FiSend size={16} />
              </button>
            </div>
          </div>

          {/* Quick Commands */}
          <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['help', 'list customers', 'stats', 'add customer', 'invoices'].map(cmd => (
              <button key={cmd} className="btn btn-outline" style={{ fontSize: '0.75rem', padding: '0.25rem 0.6rem' }}
                onClick={() => { setInput(cmd); }}>
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
