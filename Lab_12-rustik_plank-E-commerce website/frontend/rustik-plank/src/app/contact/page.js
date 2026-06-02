"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-black text-gray-800 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-10">We'd love to hear from you. Send us a message!</p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Info */}
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Address", value: "123 Wood Street, Furniture District, London, UK" },
            { icon: Phone, label: "Phone", value: "+44 (0) 7564 023409" },
            { icon: Mail, label: "Email", value: "info@rustikplank.com" },
            { icon: Clock, label: "Hours", value: "Mon–Fri: 9am–6pm\nSat: 10am–4pm" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4">
              <div className="bg-orange-100 text-orange-500 rounded-full w-10 h-10 flex items-center justify-center shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="font-bold text-gray-800 text-sm">{label}</p>
                <p className="text-gray-500 text-sm whitespace-pre-line">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
          {sent && (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded p-4 mb-6 font-semibold">
              ✅ Message sent! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-orange-400"
                  placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-orange-400"
                  placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
              <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-orange-400"
                placeholder="How can we help?" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-orange-400 resize-none"
                placeholder="Write your message here..." />
            </div>
            <button type="submit"
              className="bg-orange-500 text-white px-8 py-3 rounded font-bold hover:bg-orange-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}