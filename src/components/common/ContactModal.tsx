import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';
import { SERVICES_DATA } from '../../data/servicesData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
  defaultLocation?: string;
}

export default function ContactModal({ isOpen, onClose, prefilledService, defaultLocation }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: prefilledService || 'Land Buying Consultation',
    preferredLocation: defaultLocation || 'Mangaon',
    purpose: 'Investment',
    message: '',
  });

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
    if (defaultLocation) {
      setFormData((prev) => ({ ...prev, preferredLocation: defaultLocation }));
    }
  }, [prefilledService, defaultLocation]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hello Aakar Bhumi, I would like to book a consultation for "${formData.serviceRequired}" regarding land in ${formData.preferredLocation}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#E3E8DF]">
        {/* Modal Header */}
        <div className="bg-[#0E241A] text-white p-6 sm:p-8 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#86EFAC] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Land Consultation Desk</span>
          </div>

          <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-white leading-tight">
            Book a Land Consultation
          </h3>
          <p className="text-xs sm:text-sm text-[#D1DCD5] mt-1 font-light">
            Share your requirements for an objective, research-backed evaluation.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-[#EBF3EE] text-[#2E6A4B] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-[#163828]">Consultation Request Received</h4>
              <p className="text-sm text-[#57685D] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our land research & advisory cell will review your requirement and connect within 24 business hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5B] transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Connect</span>
                </a>
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl border border-[#E3E8DF] text-[#163828] text-xs font-bold hover:bg-[#F4F6F1] transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                  Consultation Service
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="General Land Advisory">General Land Advisory</option>
                  <option value="Future Plotted Opportunities">Future Plotted Opportunities</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    value={formData.preferredLocation}
                    onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all"
                  >
                    <option value="Mangaon">Mangaon (NH 66 Corridor)</option>
                    <option value="Roha">Roha (Kundalika Basin)</option>
                    <option value="Pali">Pali (Expressway / Foothills)</option>
                    <option value="Karjat">Karjat (Mumbai-Pune Belt)</option>
                    <option value="Other Regional Zone">Other Growth Corridor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                  Brief Land Requirement or Query
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details such as parcel size, purpose (agricultural, retreat, investment), or specific legal/zoning questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-[#163828] hover:bg-[#0E241A] text-white text-xs font-bold tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Consultation Request</span>
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#57685D]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2E6A4B]" />
                <span>Strictly confidential advisory. No unsolicited marketing.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
