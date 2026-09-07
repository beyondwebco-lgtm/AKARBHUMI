import React from 'react';
import SEO from '../components/common/SEO';
import { LEGAL_DISCLAIMER, SITE_CONTACT } from '../data/siteData';

export default function DisclaimerPage() {
  return (
    <>
      <SEO
        title="Statutory Disclaimer"
        description="Official statutory and legal disclaimer for AKARBHUMI website and land platform."
      />

      <main className="w-full pt-28 pb-20 bg-[#FBFBF9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-14 rounded-3xl border border-[#E3E8DF] shadow-xs">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E6A4B] block mb-2">
            Important Notice
          </span>
          <h1 className="editorial-title text-3xl sm:text-4xl font-bold text-[#163828] mb-6">
            Statutory Disclaimer
          </h1>

          <div className="space-y-6 text-[#57685D] text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#F4F6F1] border border-[#E3E8DF] text-[#163828] font-medium text-base sm:text-lg leading-relaxed">
              “{LEGAL_DISCLAIMER}”
            </div>

            <h2 className="text-xl font-bold text-[#163828] pt-4">Informational Nature of Content</h2>
            <p>
              The maps, distances, connectivity corridors, infrastructure descriptions, and regulatory overviews presented on this website are provided solely for general geographic orientation. While AKARBHUMI strives to maintain accurate and updated information, no warranty or guarantee of absolute completeness or official statutory authority is implied.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">No Investment Guarantee</h2>
            <p>
              Nothing on this website shall be construed as a promise of guaranteed financial returns, appreciation forecasts, or solicitation of deposits. Land values and real estate markets are subject to broader economic factors and regional regulations.
            </p>

            <h2 className="text-xl font-bold text-[#163828] pt-4">Upcoming Projects & Approvals</h2>
            <p>
              Any future development references remain conceptual until officially launched in accordance with all statutory approvals, local town planning permissions, and Real Estate (Regulation and Development) Act (RERA) compliance where applicable.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
