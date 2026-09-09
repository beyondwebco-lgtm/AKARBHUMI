import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { SITE_CONTACT, getWhatsAppLink } from '../data/siteData';
import { SERVICES_DATA } from '../data/servicesData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceRequired: 'Land Buying Consultation',
    preferredLocation: 'Mangaon',
    purpose: 'Investment',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hello Aakar Bhumi, I would like to book a land consultation regarding "${formData.serviceRequired}".`
  );

  return (
    <>
      <SEO
        title="Contact & Consultation Desk | Aakar Bhumi"
        description="Book a dedicated land consultation with Aakar Bhumi. Inquire via WhatsApp, schedule an advisory discussion, or submit your land requirement."
      />

      <main className="w-full pt-24 sm:pt-28 bg-[#FBFBF9]">
        {/* Editorial Header */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5 text-[#2E6A4B]" />
                <span>Advisory Desk</span>
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                Connect With Our Advisory Cell.
              </h1>
              <p className="text-lg sm:text-xl text-[#57685D] leading-relaxed font-light">
                Whether you require documentary scrutiny, agricultural feasibility, or location potential analysis, we are here to provide clear, unbiased guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Main Consultation Form & Channels Grid */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Channels & Advisory Desk Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828]">
                  Direct Advisory Channels
                </h3>
                <p className="text-sm text-[#57685D] leading-relaxed">
                  We encourage prospective land owners and investors to initiate consultation directly via WhatsApp or by scheduling a formal discussion.
                </p>
              </div>

              {/* Priority WhatsApp Card */}
              <div className="bg-[#122B1E] text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#0E241A] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
                    Fastest Response
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </div>

                <h4 className="text-xl font-bold">Instant WhatsApp Advisory</h4>
                <p className="text-xs sm:text-sm text-[#D1DCD5] leading-relaxed">
                  Connect with our senior land analyst directly for preliminary questions, document inquiries, and location guidance.
                </p>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink('Hello Aakar Bhumi, I would like to book a land consultation.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp ({SITE_CONTACT.whatsappDisplay})</span>
                  </a>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E3E8DF] shadow-xs space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#2E6A4B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#57685D]">Direct Advisory Line</p>
                    <a href={`tel:${SITE_CONTACT.companyPhonePlaceholder.replace(/[^0-9+]/g, '')}`} className="text-sm font-bold text-[#163828] hover:text-[#2E6A4B] transition-colors">
                      {SITE_CONTACT.companyPhonePlaceholder}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#2E6A4B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#57685D]">Advisory Email</p>
                    <a href={`mailto:${SITE_CONTACT.companyEmailPlaceholder}`} className="text-sm font-bold text-[#163828] hover:text-[#2E6A4B] transition-colors">
                      {SITE_CONTACT.companyEmailPlaceholder}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#2E6A4B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#57685D]">Regional Presence</p>
                    <p className="text-xs sm:text-sm text-[#163828]">{SITE_CONTACT.officeAddressPlaceholder}</p>
                    <p className="text-[11px] text-[#57685D] mt-0.5">Mangaon • Roha • Pali • Karjat Corridor</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#2E6A4B]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#57685D]">Consultation Hours</p>
                    <p className="text-xs sm:text-sm text-[#163828]">{SITE_CONTACT.businessHoursPlaceholder}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Consultation Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E3E8DF] shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-[#EBF3EE] text-[#2E6A4B] rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="editorial-title text-3xl font-bold text-[#163828]">
                    Consultation Request Registered
                  </h3>
                  <p className="text-sm text-[#57685D] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our advisory cell has logged your request regarding <em>{formData.serviceRequired}</em>. A senior land analyst will review your notes and reach out shortly.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5B] transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue on WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-[#E3E8DF] text-[#163828] text-xs font-bold hover:bg-[#F4F6F1] transition-all cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2E6A4B]">
                      Structured Inquiry
                    </span>
                    <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828]">
                      Request a Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57685D]">
                      Please complete the details below so our advisory cell can prepare relevant context prior to our discussion.
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                        Consultation Service Required *
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>
                            {srv.title} — {srv.shortTagline}
                          </option>
                        ))}
                        <option value="General Land Advisory">General Land Advisory</option>
                        <option value="Future Plotted Opportunities">Future Plotted Opportunities</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Mehta"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                          Mobile / WhatsApp *
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
                          Regional Belt of Interest
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
                          <option value="General Western Maharashtra">General Western Maharashtra</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#163828] mb-1.5">
                        Tell Us About Your Requirement or Parcel Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please share land size, current status, key objectives, or specific legal/revenue questions you would like evaluated..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] text-sm text-[#163828] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2 space-y-4">
                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-xl bg-[#163828] hover:bg-[#0E241A] text-white text-xs font-bold tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Consultation Request</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#57685D]">
                      <ShieldCheck className="w-4 h-4 text-[#2E6A4B]" />
                      <span>Advisory-first platform. No unsolicited broker calls or spam.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
