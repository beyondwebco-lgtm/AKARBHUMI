import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LocationsPage from './pages/LocationsPage';
import LandInsightsPage from './pages/LandInsightsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import UpcomingDevelopmentsPage from './pages/UpcomingDevelopmentsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FBFBF9] text-[#163828] font-sans antialiased">
        <Header />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/land-insights" element={<LandInsightsPage />} />
            <Route path="/land-insights/:slug" element={<ArticleDetailPage />} />
            <Route path="/upcoming-developments" element={<UpcomingDevelopmentsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
