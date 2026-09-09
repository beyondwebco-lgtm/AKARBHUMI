import React from 'react';
import { 
  MapPin, 
  Target, 
  Route, 
  Building2, 
  Sprout, 
  TrendingUp, 
  FileText, 
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { Link } from 'react-router-dom';

const EVALUATION_AREAS = [
  {
    icon: MapPin,
    title: 'Location Potential',
    description: 'Analyzing surrounding infrastructure, micro-market growth, topography, and future connectivity catalysts.'
  },
  {
    icon: Target,
    title: 'Purpose of Purchase',
    description: 'Matching land attributes directly with your intention—whether personal retreat, farming, or long-term asset holding.'
  },
  {
    icon: Route,
    title: 'Access & Connectivity',
    description: 'Confirming recorded, legal right-of-way on Gaon Nakasha (village maps) to avoid landlocked property traps.'
  },
  {
    icon: Building2,
    title: 'Development Possibilities',
    description: 'Evaluating Regional Plans (RP), zoning classifications, FSI regulations, and NA conversion feasibility.'
  },
  {
    icon: Sprout,
    title: 'Agricultural Potential',
    description: 'Assessing soil fertility, natural drainage, seasonal water sources, and climate suitability for cultivation.'
  },
  {
    icon: TrendingUp,
    title: 'Future Value Creation',
    description: 'Understanding multi-modal transit corridors and demographic expansion driving organic long-term appreciation.'
  },
  {
    icon: FileText,
    title: 'Documentation Guidance',
    description: 'Verifying 7/12 extracts, mutation history (Ferfar), title chains, and survey demarcations systematically.'
  },
  {
    icon: AlertTriangle,
    title: 'Risk Identification',
    description: 'Detecting unrecorded claims, flood plain hazards (HFL), forest buffer restrictions, and pending litigation.'
  }
];

export default function BeforeYouBuySection() {
  return (
    <section className="py-24 sm:py-32 bg-white border-b border-[#E3E8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            badge="Due Diligence Framework"
            title="Land is a Big Decision. Make It an Informed One."
            description="Purchasing or developing land requires thorough multi-factor scrutiny. Understand first, decide better with our 8-pillar evaluation matrix."
          />
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#163828] hover:text-[#2E6A4B] group shrink-0"
          >
            <span>Read Due Diligence Guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8 Pillar Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVALUATION_AREAS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#FBFBF9] border border-[#E3E8DF] hover:border-[#163828]/30 hover:bg-white hover:shadow-lg transition-all duration-300 group space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF3EE] text-[#163828] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-[#2E6A4B]" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#163828] group-hover:text-[#2E6A4B] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#57685D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Callout Banner */}
        <div className="mt-12 bg-[#F4F6F1] rounded-2xl p-6 sm:p-8 border border-[#E3E8DF] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#163828]">
              Have a land parcel in mind that needs unbiased verification?
            </h4>
            <p className="text-xs sm:text-sm text-[#57685D]">
              Our advisory desk reviews documentation, road access, and zoning constraints before you commit capital.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-[#163828] hover:bg-[#0E241A] text-white text-xs font-bold transition-all shadow-sm shrink-0"
          >
            Request Evaluation
          </Link>
        </div>
      </div>
    </section>
  );
}
