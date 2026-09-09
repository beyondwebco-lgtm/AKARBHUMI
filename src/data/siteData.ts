import type { SiteContactInfo } from '../types';

export const SITE_CONTACT: SiteContactInfo = {
  brandName: 'Aakar Bhumi',
  tagline: 'Shaping Land. Creating Value.',
  whatsappNumber: '+91 70308 71292',
  whatsappDisplay: '+91 70308 71292',
  whatsappPrefill: 'Hello Aakar Bhumi, I would like to know more about land consultation.',
  companyPhonePlaceholder: '+91 70308 71292',
  companyEmailPlaceholder: 'advisory@akarbhumi.com',
  officeAddressPlaceholder: 'Aakar Bhumi Advisory Cell, Western Maharashtra Growth Corridor, India',
  businessHoursPlaceholder: 'Monday – Saturday: 9:30 AM – 6:30 PM (IST)',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
];

export const LEGAL_DISCLAIMER = `Aakar Bhumi operates as a specialized land consultation and research advisory brand. Information presented on this website is for general educational and advisory orientation only. Land evaluations, zoning regulations, infrastructure timelines, agricultural suitability, and legal documentation must be independently examined for specific parcels. Aakar Bhumi does not provide guaranteed financial returns or speculative appreciation assurances. Future project-specific developments, when introduced, will strictly comply with statutory approvals, RERA mandates where applicable, and revenue documentation.`;

export const getWhatsAppLink = (customText?: string) => {
  const text = encodeURIComponent(customText || SITE_CONTACT.whatsappPrefill);
  const cleanNumber = SITE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${text}`;
};
