import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import EditorialStatement from '../components/home/EditorialStatement';
import WhyLandSection from '../components/home/WhyLandSection';
import FocusLocationsPreview from '../components/home/FocusLocationsPreview';
import ConnectivitySection from '../components/home/ConnectivitySection';
import LandInsightsPreview from '../components/home/LandInsightsPreview';
import UpcomingDevelopmentsPreview from '../components/home/UpcomingDevelopmentsPreview';
import FinalCTA from '../components/home/FinalCTA';
import ContactModal from '../components/common/ContactModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <SEO
        title="Shape Your Future With Land"
        description="AKARBHUMI is a trusted platform for land information, location insights and future land development opportunities in Mangaon, Roha, Pali, and Karjat."
      />

      <main className="w-full">
        {/* 1. Cinematic Hero */}
        <Hero onOpenEnquiry={() => setIsModalOpen(true)} />

        {/* 2. Editorial Statement */}
        <EditorialStatement />

        {/* 3. Why Land */}
        <WhyLandSection />

        {/* 4. Focus Locations */}
        <FocusLocationsPreview />

        {/* 5. Connectivity Framework */}
        <ConnectivitySection />

        {/* 6. Land Insights / Knowledge Centre Preview */}
        <LandInsightsPreview />

        {/* 7. Upcoming Developments (Coming Soon) */}
        <UpcomingDevelopmentsPreview onOpenRegister={() => setIsModalOpen(true)} />

        {/* 8. Final Deep Green CTA */}
        <FinalCTA onOpenEnquiry={() => setIsModalOpen(true)} />
      </main>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
