import React, { useState } from 'react';
import { Sparkles, Layers, ShieldCheck, CheckCircle2, MessageCircle, Send, Compass, Trees, Award } from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { SITE_CONTACT, getWhatsAppLink } from '../data/siteData';

export default function UpcomingDevelopmentsPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Mangaon',
    budget: 'Under ₹25 Lakhs',
    purpose: 'Long-Term Land Holding',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappInquiryUrl = getWhatsAppLink(
    `Hello AKARBHUMI, I am registering interest for upcoming developments in ${formData.location}. Name: ${formData.name || 'Visitor'}, Purpose: ${formData.purpose}.`
  );

  return (
    <>
      <SEO
        title="AKARBHUMI Developments — Coming Soon"
        description="AKARBHUMI is identifying and planning selected land development opportunities across Mangaon, Roha, Pali, and Karjat. Register your interest for future launches."
      />

      <main className="w-full pt-24 sm:pt-28">
        {/* Header */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163828] text-[#86EFAC] text-xs font-bold tracking-widest uppercase mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Coming Soon
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                AKARBHUMI Developments
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-[#57685D] leading-relaxed">
                AKARBHUMI is identifying and planning selected land development opportunities across emerging destinations in Western Maharashtra.
              </p>
            </div>
          </div>
        </section>

        {/* Development Philosophy & Core Standards */}
        <section className="py-20 sm:py-28 bg-[#FBFBF9] border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="editorial-title text-3xl sm:text-4xl font-bold text-[#163828]">
                  Planned with Purpose, Governed with Integrity
                </h2>

                <p className="text-base sm:text-lg text-[#57685D] leading-relaxed">
                  Our upcoming developments will focus on organised plotting, clear accessibility, natural surroundings, and thoughtful land planning.
                </p>

                <p className="text-base sm:text-lg text-[#57685D] leading-relaxed">
                  Our first AKARBHUMI developments will be announced soon. Every upcoming layout is subjected to extensive cadastral surveying, title vetting, and regulatory alignment prior to release.
                </p>

                {/* Planned Standards List */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E3E8DF]">
                    <Layers className="w-5 h-5 text-[#163828] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#163828]">Organised Master Planning</h4>
                      <p className="text-xs text-[#57685D] mt-0.5">Demarcated boundaries, internal road systems, and open green zones.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E3E8DF]">
                    <ShieldCheck className="w-5 h-5 text-[#163828] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#163828]">Statutory Title Clarity</h4>
                      <p className="text-xs text-[#57685D] mt-0.5">Unencumbered freehold ownership backed by 30-year legal searches.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E3E8DF]">
                    <Trees className="w-5 h-5 text-[#163828] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#163828]">Topographical Harmony</h4>
                      <p className="text-xs text-[#57685D] mt-0.5">Respecting natural water contours, native foliage, and scenic vistas.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form: Register Interest */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#E3E8DF] shadow-xl">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#2E6A4B] block mb-1">
                    Priority Intimation
                  </span>
                  <h3 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828]">
                    Register Your Interest
                  </h3>
                  <p className="text-xs sm:text-sm text-[#57685D] mt-1">
                    Receive early notifications and research briefings as new land opportunities are finalized.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 bg-[#EBF3EE] text-[#163828] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#163828]">Registration Received</h4>
                    <p className="text-xs sm:text-sm text-[#57685D] max-w-sm mx-auto leading-relaxed">
                      Thank you for registering with AKARBHUMI. Our advisory desk will provide priority announcements as soon as official developments are published.
                    </p>
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-md hover:bg-[#1EBE5B] transition-all mt-4"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Connect on WhatsApp
                    </a>
                  </div>
                ) : (
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
                          <option value="Other">Other Region</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#163828] mb-1">
                          Approximate Budget
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                        >
                          <option value="Under ₹25 Lakhs">Under ₹25 Lakhs</option>
                          <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                          <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                          <option value="₹1 Crore+">₹1 Crore+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#163828] mb-1">
                        Purpose
                      </label>
                      <select
                        value={formData.purpose}
                        onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all"
                      >
                        <option value="Long-Term Land Holding">Long-Term Land Holding</option>
                        <option value="Farmhouse">Farmhouse</option>
                        <option value="Second Home">Second Home</option>
                        <option value="Investment">Investment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#163828] mb-1">
                        Notes / Preferences (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Any specific preferences regarding terrain, view, or road width..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-[#E3E8DF] bg-[#FBFBF9] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163828]/20 focus:border-[#163828] text-sm text-[#163828] transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#163828] text-white font-bold text-sm hover:bg-[#0E241A] transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      Register Your Interest
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
