import React, { useState } from 'react';
import { X, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONTACT, getWhatsAppLink } from '../../data/siteData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocation?: string;
}

export default function ContactModal({ isOpen, onClose, defaultLocation }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: defaultLocation || 'Mangaon',
    purpose: 'Long-Term Land Holding',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state clean
    }, 4000);
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hello AKARBHUMI, I am interested in exploring land opportunities in ${formData.location || 'Maharashtra'}. Name: ${formData.name || 'Visitor'}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#E3E8DF] p-6 sm:p-8 overflow-hidden text-[#163828]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#57685D] hover:text-[#163828] hover:bg-[#F4F6F1] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#EBF3EE] text-[#163828] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-[#163828]">Thank You</h3>
            <p className="text-[#57685D] text-sm leading-relaxed max-w-sm mx-auto">
              Your inquiry has been received. Our land advisory team will connect with you with authentic location insights.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-medium hover:bg-[#1EBE5B] transition-all text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Connect on WhatsApp Instantly
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl border border-[#E3E8DF] text-[#163828] font-medium hover:bg-[#F4F6F1] transition-all text-sm"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold tracking-widest text-[#2E6A4B] uppercase block mb-1">
                Land Consultation
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-[#163828]">
                Enquire with AKARBHUMI
              </h3>
              <p className="text-[#57685D] text-xs sm:text-sm mt-1">
                Share your requirements to receive objective land data and regional location briefings.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#163828] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#163828] mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#163828] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#163828] mb-1">
                    Preferred Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                  >
                    <option value="Mangaon">Mangaon</option>
                    <option value="Roha">Roha</option>
                    <option value="Pali">Pali</option>
                    <option value="Karjat">Karjat</option>
                    <option value="Other">Other Western Maharashtra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#163828] mb-1">
                    Primary Purpose
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                  >
                    <option value="Long-Term Land Holding">Long-Term Land Holding</option>
                    <option value="Farmhouse / Country Retreat">Farmhouse / Country Retreat</option>
                    <option value="Second Home">Second Home</option>
                    <option value="Future Development Interest">Future Development Interest</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#163828] mb-1">
                  Message / Specific Requirement
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any questions regarding locations, connectivity, or land advisory..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#163828] text-white font-medium hover:bg-[#0E241A] transition-all text-sm shadow-md"
                >
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </button>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[#25D366] text-[#163828] hover:bg-[#25D366]/10 font-medium transition-all text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
