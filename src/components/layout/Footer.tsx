import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SITE_CONTACT, getWhatsAppLink, LEGAL_DISCLAIMER } from '../../data/siteData';
import { SERVICES_DATA } from '../../data/servicesData';

export default function Footer() {
  const whatsappUrl = getWhatsAppLink(
    'Hello Aakar Bhumi, I would like to know more about land consultation.'
  );

  return (
    <footer className="bg-[#0A1A12] text-white border-t border-[#122B1E] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Overview Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              to="/"
              className="inline-block bg-white px-3.5 py-2 rounded-xl shadow-sm hover:opacity-95 transition-opacity"
            >
              <img
                src="/assets/images/logo.png"
                alt="AKARBHUMI Logo - Shaping Land. Creating Value."
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#A3B8AD] leading-relaxed font-light">
              Aakar Bhumi is a trusted land consultation and research advisory platform. We help clients evaluate land opportunities, verify documentation, plan sustainable agriculture, and create enduring long-term value.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5B] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {SITE_CONTACT.whatsappDisplay}</span>
              </a>

              {/* Official Social Links */}
              {SITE_CONTACT.facebookUrl && (
                <a
                  href={SITE_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all shadow-md"
                  aria-label="Official Facebook Account"
                  title="Follow Aakar Bhumi on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}

              {SITE_CONTACT.instagramUrl && (
                <a
                  href={SITE_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all shadow-md"
                  aria-label="Official Instagram Account"
                  title="Follow Aakar Bhumi on Instagram (@akarbhumioffice)"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Consultation Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
              Advisory Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1DCD5]">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services#${srv.id}`}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Knowledge & Navigation Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1DCD5]">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors block py-0.5">
                  About Aakar Bhumi
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Consultation Services
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link to="/locations" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Growth Corridors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Advisory Hub Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
              Advisory Hub
            </h4>
            <div className="space-y-3 text-xs text-[#D1DCD5]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#86EFAC] shrink-0 mt-0.5" />
                <span>Western Maharashtra Strategic Growth Corridor (Mangaon • Roha • Pali • Karjat)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <a href={`tel:${SITE_CONTACT.companyPhonePlaceholder.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {SITE_CONTACT.companyPhonePlaceholder}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <a href={`mailto:${SITE_CONTACT.companyEmailPlaceholder}`} className="hover:text-white">
                  {SITE_CONTACT.companyEmailPlaceholder}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Advisory Disclaimer */}
        <div className="py-8 border-b border-white/10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#86EFAC] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Advisory Notice & Statutory Disclaimer</span>
          </div>
          <p className="text-[11px] text-[#A3B8AD] leading-relaxed">
            {LEGAL_DISCLAIMER}
          </p>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A3B8AD]">
          <p>© {new Date().getFullYear()} Aakar Bhumi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Statutory Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
