import React from 'react';
import SEO from '../components/common/SEO';
import { SITE_CONTACT } from '../data/siteData';

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for utilizing the AKARBHUMI website and information platform."
      />

      <main className="w-full pt-28 pb-20 bg-[#FBFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-14 rounded-3xl border border-[#E3E8DF] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E6A4B] block mb-2">
            Terms of Use
          </span>
          <h1 className="editorial-title text-3xl sm:text-4xl font-bold text-[#163828] mb-6">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-[#57685D] text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to <strong>AKARBHUMI</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">1. Informational Platform Purpose</h2>
            <p>
              This website serves as an informational and educational platform regarding land opportunities, location insights, and future plotted developments. Content published here is for general orientation and knowledge sharing.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">2. Intellectual Property</h2>
            <p>
              All trademarks, logos, texts, editorial layouts, and branding assets on this website are the proprietary property of AKARBHUMI. Unauthorized duplication, modification, or reproduction is strictly prohibited.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">3. Independent Due Diligence</h2>
            <p>
              Users are advised to conduct independent title, legal, and statutory verification through qualified advocates before entering into any land or real estate transaction.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">4. Amendments</h2>
            <p>
              AKARBHUMI reserves the right to modify or update these terms at any time without prior notice. Continued use of the website constitutes acceptance of any revised terms.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
