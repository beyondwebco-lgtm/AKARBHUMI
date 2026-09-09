import type { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'land-buying-consultation',
    number: '01',
    title: 'Land Buying Consultation',
    shortTagline: 'Objective Evaluation & Suitability Assessment',
    description: 'Help clients evaluate land opportunities based on location, access, documentation, purpose and long-term suitability.',
    longDescription: 'Purchasing land requires rigorous, multi-layered scrutiny. We help you evaluate shortlisted parcels objectively—analyzing legal title clarity, physical and recorded road access, boundary demarcation, village map records, and micro-location growth dynamics to ensure you decide with absolute confidence.',
    keyAspects: [
      'Location and micro-market analysis',
      'Legal & recorded road access verification',
      'Preliminary revenue record scrutiny (7/12, Mutation, Title history)',
      'Purpose alignment (Farmhouse, Holding, Agro-use, Residence)',
      'Physical topography, drainage, and boundary confirmation'
    ],
    deliverables: [
      'Comprehensive Land Evaluation Matrix',
      'Right-of-Way & Approach Road Assessment',
      'Document Due-Diligence Checklist',
      'Site Suitability & Risk Advisory'
    ],
    iconName: 'Compass',
    idealFor: 'Prospective buyers looking to acquire land safely and verify suitability before finalizing.'
  },
  {
    id: 'land-investment-advisory',
    number: '02',
    title: 'Land Investment Advisory',
    shortTagline: 'Strategic Research & Infrastructure Growth Context',
    description: 'Help clients understand land investment opportunities through location research, infrastructure context, potential and long-term value considerations.',
    longDescription: 'Real land value is unlocked by strategic infrastructure catalysts, corridor connectivity, and evolving regional demand. We provide deep, research-driven advisory on Western Maharashtra growth corridors—helping you evaluate long-term value drivers without relying on market hype or speculative claims.',
    keyAspects: [
      'Macro infrastructure corridor mapping (Expressways, Rail, Ports, NMIA)',
      'Demand-driver and demographic expansion studies',
      'Holding timeframe & liquidity considerations',
      'Comparative location potential & regional benchmarks',
      'Prudent capital allocation across land formats'
    ],
    deliverables: [
      'Regional Growth & Infrastructure Brief',
      'Comparative Corridor Valuation Assessment',
      'Holding Horizon & Risk Profiling',
      'Long-Term Value Preservation Strategy'
    ],
    iconName: 'TrendingUp',
    idealFor: 'Individuals and family offices seeking long-term tangible wealth preservation in strategic growth belts.'
  },
  {
    id: 'land-potential-analysis',
    number: '03',
    title: 'Land Potential Analysis',
    shortTagline: 'Comprehensive Feasibility & Usability Studies',
    description: 'Study the characteristics and possibilities of land, including location, connectivity, development context, agricultural potential and future possibilities.',
    longDescription: 'Every land parcel possesses unique innate qualities. We study your land from multiple dimensions—topography, water resources, zoning classifications, soil characteristics, accessibility, and surrounding socio-economic context—to uncover its highest and most thoughtful utilization.',
    keyAspects: [
      'Contour, soil, and micro-climate evaluation',
      'Zoning, Regional Plan (RP), and UDCPR regulatory review',
      'Water resource availability & groundwater potential',
      'Utility infrastructure (Power lines, water connectivity, road networks)',
      'High-flood-level (HFL) and ecological buffer identification'
    ],
    deliverables: [
      'Comprehensive Land Potential Report',
      'Zoning & Regulatory Permissibility Matrix',
      'Terrain & Topography Utilization Map',
      'Strategic Possibilities Roadmap'
    ],
    iconName: 'SearchCheck',
    idealFor: 'Existing landowners or prospective purchasers wanting to identify what their land can truly achieve.'
  },
  {
    id: 'agricultural-income-planning',
    number: '04',
    title: 'Agricultural & Income Planning',
    shortTagline: 'Cultivation Possibilities & Productive Land Use',
    description: 'Help landowners understand suitable agricultural, cultivation, diversified income and value-creation possibilities based on the land and location.',
    longDescription: 'Transforming idle land into productive, value-generating acreage requires realistic, localized planning. We guide landowners on climate-appropriate horticulture, agro-forestry, sustainable farming models, and auxiliary lifestyle uses based strictly on soil type, water availability, and terrain feasibility.',
    keyAspects: [
      'Regional agro-climatic suitability studies (Konkan & Western Ghats)',
      'Horticulture & plantation feasibility (Mango, Cashew, Spices, Teak, Bamboo)',
      'Water harvesting, drip irrigation, and soil conservation models',
      'Farmstay & nature retreat lifestyle integration potential',
      'Practical labor and maintenance operational frameworks'
    ],
    deliverables: [
      'Agro-Suitability & Crop Recommendation Plan',
      'Water & Resource Management Strategy',
      'Productive Land Stewardship Plan',
      'Diversified Farm Utilization Blueprint'
    ],
    iconName: 'Sprout',
    idealFor: 'Landowners seeking productive, sustainable utilization of their agricultural and countryside parcels.'
  },
  {
    id: 'land-development-consultation',
    number: '05',
    title: 'Land Development Consultation',
    shortTagline: 'Thoughtful Master Planning & Statutory Structuring',
    description: 'Help clients understand development possibilities, planning considerations, access, surrounding infrastructure and potential ways land can be thoughtfully developed.',
    longDescription: 'Organised land development demands meticulous master-planning, statutory adherence, and harmonious integration with natural topography. We advise on layout structuring, internal road reservations, open space allocations, NA sanctioning pathways, and sustainable infrastructure integration.',
    keyAspects: [
      'Layout structuring & master-plan feasibility',
      'Non-Agricultural (NA) conversion regulatory pathways',
      'Internal road networks, storm drainage, and utility corridors',
      'Open space, amenity allocation, and environmental setbacks',
      'Phased development planning and execution advisory'
    ],
    deliverables: [
      'Master Layout Concept Framework',
      'Statutory Approvals & Compliance Roadmap',
      'Infrastructure Engineering Guideline',
      'Development Feasibility Dossier'
    ],
    iconName: 'Layers',
    idealFor: 'Landowners and developers planning to master-plan plotted communities or curated estates.'
  }
];
