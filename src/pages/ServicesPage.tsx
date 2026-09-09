import React, { useState } from 'react';
import { 
  Compass, 
  TrendingUp, 
  SearchCheck, 
  Sprout, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import SEO from '../components/common/SEO';
import SectionHeading from '../components/common/SectionHeading';
import { SERVICES_DATA } from '../data/servicesData';
import { getWhatsAppLink } from '../data/siteData';
import FinalCTA from '../components/home/FinalCTA';
import ContactModal from '../components/common/ContactModal';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#2E6A4B]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-7 h-7 text-[#2E6A4B]" />;
      case 'SearchCheck':
        return <SearchCheck className="w-7 h-7 text-[#2E6A4B]" />;
      case 'Sprout':
        return <Sprout className="w-7 h-7 text-[#2E6A4B]" />;
      case 'Layers':
        return <Layers className="w-7 h-7 text-[#2E6A4B]" />;
      default:
        return <Compass className="w-7 h-7 text-[#2E6A4B]" />;
    }
  };

  return (
    <>
      <SEO
        title="Land Consultation & Advisory Services"
        description="Comprehensive land advisory across buying evaluation, investment research, potential analysis, agricultural planning, and development consultation."
      />

      <main className="w-full pt-24 sm:pt-28 bg-[#FBFBF9]">
        {/* Page Hero */}
        <section className="bg-white py-16 sm:py-24 border-b border-[#E3E8DF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3EE] text-[#163828] text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#2E6A4B]" />
                <span>Advisory Verticals</span>
              </div>
              <h1 className="editorial-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#163828] leading-[1.08]">
                Objective Land Consultation for Every Stage.
              </h1>
              <p className="text-lg sm:text-xl text-[#57685D] leading-relaxed font-light">
                We study land with analytical rigour, statutory clarity, and deep market context—guiding you to make informed, high-conviction decisions.
              </p>
            </div>
          </div>
        </section>

        {/* 5 Detailed Services List */}
        <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.id}
              id={srv.id}
              className={`bg-white rounded-3xl p-8 sm:p-12 border border-[#E3E8DF] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start`}
            >
              {/* Left Column: Number, Title, Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#EBF3EE] flex items-center justify-center">
                    {getIcon(srv.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-[#57685D]">
                      SERVICE {srv.number}
                    </span>
                    <h2 className="editorial-title text-2xl sm:text-3xl font-bold text-[#163828]">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-[#2E6A4B]">
                  {srv.shortTagline}
                </p>

                <p className="text-sm sm:text-base text-[#57685D] leading-relaxed">
                  {srv.longDescription}
                </p>

                <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E3E8DF]">
                  <p className="text-xs text-[#57685D]">
                    <strong className="text-[#163828]">Ideal For:</strong> {srv.idealFor}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => handleOpenConsultation(srv.title)}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#163828] hover:bg-[#0E241A] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    <span>Book This Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppLink(`Hello Aakar Bhumi, I would like to consult on "${srv.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#E3E8DF] text-xs font-bold text-[#163828] hover:bg-[#F4F6F1] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Key Scrutiny Aspects & Deliverables */}
              <div className="lg:col-span-6 bg-[#FBFBF9] rounded-2xl p-6 sm:p-8 border border-[#E3E8DF] space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#163828] mb-4">
                    Key Advisory Aspects Analyzed:
                  </h3>
                  <ul className="space-y-2.5">
                    {srv.keyAspects.map((aspect, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#57685D]">
                        <CheckCircle2 className="w-4 h-4 text-[#2E6A4B] mt-0.5 shrink-0" />
                        <span>{aspect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#E3E8DF]">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#163828] mb-4">
                    Advisory Deliverables:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="bg-white p-3 rounded-lg border border-[#E3E8DF] text-xs font-semibold text-[#163828]"
                      >
                        {del}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Final CTA */}
        <FinalCTA onOpenEnquiry={() => handleOpenConsultation()} />
      </main>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedService(undefined);
        }}
        prefilledService={selectedService}
      />
    </>
  );
}
