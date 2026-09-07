import type { SiteContactInfo } from '../types';

export const SITE_CONTACT: SiteContactInfo = {
  brandName: 'AKARBHUMI',
  tagline: 'Shaping Land. Creating Value.',
  whatsappNumber: '+91 70308 71292',
  whatsappDisplay: '+91 70308 71292',
  whatsappPrefill: 'Hello AKARBHUMI, I would like to know more about land opportunities.',
  companyPhonePlaceholder: '+91 (022) 2800 0000',
  companyEmailPlaceholder: 'info@akarbhumi.com',
  officeAddressPlaceholder: 'AKARBHUMI Corporate Hub, Mumbai-Pune Growth Corridor, Maharashtra, India',
  businessHoursPlaceholder: 'Monday – Saturday: 9:30 AM – 6:30 PM (IST)',
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/locations' },
  { label: 'Land Insights', path: '/land-insights' },
  { label: 'Upcoming Developments', path: '/upcoming-developments' },
  { label: 'Contact', path: '/contact' },
];

export const LEGAL_DISCLAIMER = `Information presented on this website is for general informational purposes only. Location, connectivity, infrastructure, development potential and other information should be independently verified before making any property or investment decision. Project-specific information, whenever published, will be subject to applicable approvals, documentation and statutory requirements.`;

export const getWhatsAppLink = (customText?: string) => {
  const text = encodeURIComponent(customText || SITE_CONTACT.whatsappPrefill);
  const cleanNumber = SITE_CONTACT.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${text}`;
};
