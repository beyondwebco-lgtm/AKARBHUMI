import React from 'react';
import SEO from '../components/common/SEO';
import { SITE_CONTACT } from '../data/siteData';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and data protection terms for AKARBHUMI."
      />

      <main className="w-full pt-28 pb-20 bg-[#FBFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-14 rounded-3xl border border-[#E3E8DF] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E6A4B] block mb-2">
            Legal & Compliance
          </span>
          <h1 className="editorial-title text-3xl sm:text-4xl font-bold text-[#163828] mb-6">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-[#57685D] text-sm sm:text-base leading-relaxed">
            <p>
              At <strong>AKARBHUMI</strong>, we are committed to respecting and protecting the privacy of visitors to our website and individuals who reach out to us for land information and advisory services.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">1. Information Collection</h2>
            <p>
              We collect information that you voluntarily submit through our contact forms, registration forms, or direct WhatsApp inquiries. This may include your full name, phone number, email address, preferred geographic location, and specific land inquiries.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">2. Use of Information</h2>
            <p>
              The information you provide is utilized solely to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your queries and provide regional land intelligence.</li>
              <li>Notify you regarding upcoming AKARBHUMI development announcements where requested.</li>
              <li>Improve website content, user experience, and knowledge resources.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#163828] pt-4">3. Data Confidentiality</h2>
            <p>
              AKARBHUMI does not sell, trade, or transfer your personally identifiable information to external third parties. We implement reasonable administrative and technical security measures to maintain the safety of your personal information.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">4. Contact & Inquiries</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please contact our team at <strong>{SITE_CONTACT.companyEmailPlaceholder}</strong> or via WhatsApp at <strong>{SITE_CONTACT.whatsappDisplay}</strong>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
