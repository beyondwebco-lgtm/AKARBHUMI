import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import EditorialStatement from '../components/home/EditorialStatement';
import ServicesSection from '../components/home/ServicesSection';
import BeforeYouBuySection from '../components/home/BeforeYouBuySection';
import WhyAakarBhumiSection from '../components/home/WhyAakarBhumiSection';
import OurProcessSection from '../components/home/OurProcessSection';
import AgricultureIncomeSection from '../components/home/AgricultureIncomeSection';
import FocusLocationsPreview from '../components/home/FocusLocationsPreview';
import LandInsightsPreview from '../components/home/LandInsightsPreview';
import FutureDevelopmentNotice from '../components/home/FutureDevelopmentNotice';
import FinalCTA from '../components/home/FinalCTA';
import ContactModal from '../components/common/ContactModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenConsultation = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <>
      <SEO
        title="Aakar Bhumi | Land Consultation & Land Advisory"
        description="Expert land consultation for buying, investing, developing, and creating long-term value from land across emerging growth corridors in Western Maharashtra."
      />

      <main className="w-full">
        {/* 1. HERO */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* 2. BRAND STATEMENT & 4 LAND QUADRANTS */}
        <EditorialStatement />

        {/* 3. CORE SERVICES */}
        <ServicesSection onOpenConsultation={handleOpenConsultation} />

        {/* 4. BEFORE YOU BUY LAND */}
        <BeforeYouBuySection />

        {/* 5. WHY AAKAR BHUMI? */}
        <WhyAakarBhumiSection />

        {/* 6. OUR PROCESS */}
        <OurProcessSection />

        {/* 7. AGRICULTURE / LAND INCOME */}
        <AgricultureIncomeSection />

        {/* 8. FOCUS LOCATIONS CONTEXT */}
        <FocusLocationsPreview />

        {/* 9. INSIGHTS & KNOWLEDGE PREVIEW */}
        <LandInsightsPreview />

        {/* 10. FUTURE-READY DEVELOPMENT MESSAGE */}
        <FutureDevelopmentNotice onOpenConsultation={() => handleOpenConsultation('Future Plotted Opportunities')} />

        {/* 11. FINAL CONSULTATION CTA */}
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
