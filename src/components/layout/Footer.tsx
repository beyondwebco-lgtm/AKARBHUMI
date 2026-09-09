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
            <Link to="/" className="inline-block">
              <img
                src="/assets/images/logo.png"
                alt="Aakar Bhumi - Shaping Land. Creating Value."
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#A3B8AD] leading-relaxed font-light">
              Aakar Bhumi is a trusted land consultation and research advisory platform. We help clients evaluate land opportunities, verify documentation, plan sustainable agriculture, and create enduring long-term value.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5B] transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {SITE_CONTACT.whatsappDisplay}</span>
              </a>
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
