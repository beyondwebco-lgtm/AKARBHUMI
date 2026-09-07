import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Clock, Send, CheckCircle2, Compass } from 'lucide-react';
import SEO from '../components/common/SEO';
import { SITE_CONTACT, getWhatsAppLink } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: 'Mangaon',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const waUrl = getWhatsAppLink(
    `Hello AKARBHUMI, I am contacting you regarding land inquiries. Name: ${formData.fullName || 'Visitor'}.`
  );

  return (
    <>
      <SEO
        title="Contact Us — Let’s Talk About Land"
        description="Connect with AKARBHUMI for location insights, land intelligence, and upcoming development notifications. WhatsApp: +91 70308 71292."
      />

      <main className="w-full pt-24 sm:pt-28">
        {/* Header */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase mb-4">
                <Compass className="w-3.5 h-3.5" />
                Direct Communication
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                Let’s Talk About Land
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#57685D] leading-relaxed">
                Have a location in mind? Reach out to our advisory desk for factual regional briefings, documentation guidance, and land inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid: Details + Form */}
        <section className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h2 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828] mb-2">
                    Official Advisory Channels
                  </h2>
                  <p className="text-sm text-[#57685D]">
                    Choose your preferred communication channel to speak directly with our team.
                  </p>
                </div>

                {/* WhatsApp Direct Card */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-[#163828] text-white hover:bg-[#0E241A] transition-all shadow-md group border border-white/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#86EFAC]">
                      Instant WhatsApp Channel
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold">{SITE_CONTACT.whatsappDisplay}</h3>
                  <p className="text-xs text-[#D1DCD5] mt-1">
                    Click to initiate a real-time WhatsApp conversation with AKARBHUMI.
                  </p>
                </a>

                {/* Info Cards Grid */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E3E8DF] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#57685D] uppercase tracking-wider block">
                        Email Advisory
                      </span>
                      <a
                        href={`mailto:${SITE_CONTACT.companyEmailPlaceholder}`}
                        className="text-base font-bold text-[#163828] hover:underline"
                      >
                        {SITE_CONTACT.companyEmailPlaceholder}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E3E8DF] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#57685D] uppercase tracking-wider block">
                        Advisory Phone
                      </span>
                      <p className="text-base font-bold text-[#163828]">
                        {SITE_CONTACT.companyPhonePlaceholder}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E3E8DF] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#57685D] uppercase tracking-wider block">
                        Regional Location
                      </span>
                      <p className="text-sm font-medium text-[#163828]">
                        {SITE_CONTACT.officeAddressPlaceholder}
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E3E8DF] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#57685D] uppercase tracking-wider block">
                        Operating Hours
                      </span>
                      <p className="text-sm font-medium text-[#163828]">
                        {SITE_CONTACT.businessHoursPlaceholder}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E3E8DF] shadow-xl">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2E6A4B] block mb-1">
                    Send Direct Message
                  </span>
                  <h2 className="editorial-title text-3xl font-bold text-[#163828]">
                    Contact Form
                  </h2>
                  <p className="text-sm text-[#57685D] mt-1">
                    Please provide your contact information and query details.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#EBF3EE] text-[#163828] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#163828]">Message Sent Successfully</h3>
                    <p className="text-sm text-[#57685D] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting AKARBHUMI. A member of our land advisory team will get in touch with you shortly.
                    </p>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#1EBE5B] transition-all mt-4"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Open WhatsApp Chat
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#163828] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#163828] mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#163828] mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#163828] mb-1.5">
                        Preferred Location / Region of Interest
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                      >
                        <option value="Mangaon">Mangaon (Raigad / NH 66)</option>
                        <option value="Roha">Roha (Kundalika Valley)</option>
                        <option value="Pali">Pali (Sudhagad Foothills)</option>
                        <option value="Karjat">Karjat (Sahyadri Belt)</option>
                        <option value="General Consultation">General Land Advisory Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#163828] mb-1.5">
                        Message / Query Details *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about the land information or location insights you are looking for..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#163828] text-white font-bold text-sm hover:bg-[#0E241A] transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
