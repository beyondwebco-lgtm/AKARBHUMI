import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LandInsightsPage from './pages/LandInsightsPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import LocationsPage from './pages/LocationsPage';
import UpcomingDevelopmentsPage from './pages/UpcomingDevelopmentsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#163828] font-sans antialiased selection:bg-[#163828] selection:text-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Insights canonical & aliases */}
            <Route path="/insights" element={<LandInsightsPage />} />
            <Route path="/insights/:slug" element={<ArticleDetailPage />} />
            <Route path="/land-insights" element={<Navigate to="/insights" replace />} />
            <Route path="/land-insights/:slug" element={<ArticleDetailPage />} />

            {/* Regional & Contact routes */}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/upcoming-developments" element={<UpcomingDevelopmentsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Statutory & Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
