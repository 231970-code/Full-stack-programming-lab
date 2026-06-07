import { useEffect, useState } from 'react';
import Head           from 'next/head';
import Link           from 'next/link';
import Layout         from '../../../components/layout/Layout';
import ProtectedRoute from '../../../components/layout/ProtectedRoute';
import { getInvoices, deleteInvoice } from '../../../lib/api';
import toast from 'react-hot-toast';
import { FiPlus, FiDownload, FiTrash2 } from 'react-icons/fi';

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState([]);
  const [loading,  setLoading]  = useState(true);

  const fetchInvoices = async () => {
    try {
      const { data } = await getInvoices();
      setInvoices(data.invoices);
    } catch {
      toast.error('Failed to load invoices');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInvoices(); }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this invoice?')) return;
    try {
      await deleteInvoice(id);
      toast.success('Invoice deleted');
      fetchInvoices();
    } catch {
      toast.error('Failed to delete');
    }
  };

  const downloadPDF = async (inv) => {
    const { default: jsPDF }        = await import('jspdf');
    const { default: autoTable }    = await import('jspdf-autotable');

    const doc = new jsPDF();

    // Header
    doc.setFontSize(20);
    doc.setTextColor(79, 70, 229);
    doc.text('CRM System', 14, 20);
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(14);
    doc.text('INVOICE', 160, 20);

    // Invoice info
    doc.setFontSize(10);
    doc.text(`Invoice #: ${inv.invoiceNumber}`, 14, 35);
    doc.text(`Date: ${new Date(inv.createdAt).toLocaleDateString()}`, 14, 42);
    if (inv.dueDate) doc.text(`Due: ${new Date(inv.dueDate).toLocaleDateString()}`, 14, 49);
    doc.text(`Status: ${inv.status}`, 14, 56);

    // Customer info
    doc.setFontSize(12);
    doc.text('Bill To:', 14, 68);
    doc.setFontSize(10);
    doc.text(inv.customer?.name  || 'N/A', 14, 75);
    doc.text(inv.customer?.email || '',     14, 82);
    doc.text(inv.customer?.company || '',   14, 89);

    // Items table
    autoTable(doc, {
      startY: 100,
      head: [['Description', 'Qty', 'Unit Price', 'Total']],
      body: inv.items.map(item => [
        item.description,
        item.quantity,
        `PKR ${item.unitPrice.toLocaleString()}`,
        `PKR ${item.total.toLocaleString()}`
      ]),
      foot: [
        ['', '', 'Subtotal', `PKR ${inv.subtotal.toLocaleString()}`],
        ['', '', 'Tax',      `PKR ${inv.tax.toLocaleString()}`],
        ['', '', 'TOTAL',    `PKR ${inv.total.toLocaleString()}`]
      ],
      footStyles: { fontStyle: 'bold' }
    });

    if (inv.notes) {
      const y = doc.lastAutoTable.finalY + 10;
      doc.text(`Notes: ${inv.notes}`, 14, y);
    }

    doc.save(`${inv.invoiceNumber}.pdf`);
    toast.success('Invoice downloaded!');
  };

  return (
    <ProtectedRoute>
      <Layout>
        <Head><title>Invoices – CRM System</title></Head>
        <div className="page-enter">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Invoices</h2>
            <Link href="/dashboard/invoices/create" className="btn btn-primary">
              <FiPlus /> Create Invoice
            </Link>
          </div>

          <div className="card" style={{ padding: 0 }}>
            {loading ? <div className="spinner" /> : invoices.length === 0 ? (
              <p style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No invoices yet.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr><th>Invoice #</th><th>Customer</th><th>Date</th><th>Total</th><th>Status</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {invoices.map(inv => (
                    <tr key={inv._id}>
                      <td style={{ fontWeight: 500 }}>{inv.invoiceNumber}</td>
                      <td>{inv.customer?.name}</td>
                      <td style={{ color: 'var(--text-muted)' }}>{new Date(inv.createdAt).toLocaleDateString()}</td>
                      <td style={{ fontWeight: 600 }}>PKR {inv.total.toLocaleString()}</td>
                      <td><span className="badge badge-active">{inv.status}</span></td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <button className="btn btn-success" style={{ padding: '0.3rem 0.6rem' }}
                            onClick={() => downloadPDF(inv)}>
                            <FiDownload size={14} />
                          </button>
                          <button className="btn btn-danger" style={{ padding: '0.3rem 0.6rem' }}
                            onClick={() => handleDelete(inv._id)}>
                            <FiTrash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
