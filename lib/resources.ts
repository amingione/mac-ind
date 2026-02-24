import type { Resource } from '@/types'

export const resources: Resource[] = [
  // ── Company Overview ─────────────────────────────────────────────────────
  {
    id: 'company-deck',
    title: 'MAC Industrial Services – Company Deck',
    description:
      'Official company presentation deck from Jayr McLain, Florida Operations Manager. Covers full service offerings, capabilities, safety culture, certifications, and key differentiators. Use for client meetings, bids, and introductions.',
    category: 'Company Overview',
    fileType: 'pdf',
    filePath: '/downloads/company/MACInd-Jayr-OpManager-Co-Deck.pdf',
    fileSize: '2.2 MB',
    featured: true,
    tags: ['deck', 'presentation', 'overview', 'company', 'sales'],
  },
  {
    id: 'company-overview',
    title: 'MAC Industrial Services – Company Overview',
    description:
      'Full company profile covering service lines, capabilities, geographic reach, safety culture, and key differentiators. Ideal for initial client introductions.',
    category: 'Company Overview',
    fileType: 'pdf',
    filePath: '/downloads/company/mac-industrial-company-overview.pdf',
    fileSize: '1.2 MB',
    featured: true,
    tags: ['overview', 'company', 'intro'],
  },
  {
    id: 'capabilities-summary',
    title: 'Service Capabilities Summary Sheet',
    description:
      'Two-page summary of all six service lines and twelve technical capability areas. Quick-reference for sales conversations and RFQ submissions.',
    category: 'Company Overview',
    fileType: 'pdf',
    filePath: '/downloads/company/mac-capabilities-summary.pdf',
    fileSize: '640 KB',
    featured: true,
    tags: ['summary', 'capabilities', 'services'],
  },
  {
    id: 'certifications-list',
    title: 'Certifications & Qualifications List',
    description:
      'Active certifications including ASME stamps (S, R, U), NBIC, AWS CWI roster, NCCER credentials, OSHA compliance records, and insurance documentation.',
    category: 'Company Overview',
    fileType: 'pdf',
    filePath: '/downloads/company/mac-certifications.pdf',
    fileSize: '420 KB',
    tags: ['certifications', 'stamps', 'qualifications'],
  },

  // ── Capability Sheets ────────────────────────────────────────────────────
  {
    id: 'cs-air-preheater',
    title: 'Air Preheater Repair & Refurbishment',
    description:
      'Capability sheet covering Ljungström tri-sector/bi-sector APH, basket element replacement, seal refurbishment, and outage coordination for power plant clients.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/air-preheater.pdf',
    fileSize: '380 KB',
    tags: ['air preheater', 'power generation', 'APH'],
  },
  {
    id: 'cs-boiler-tube',
    title: 'Boiler Tube Repair & Replacement',
    description:
      'One-pager on emergency and planned boiler tube work: waterwall, superheater, reheater, economizer replacements using T91/T22/Super 304H with ASME Section I compliance.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/boiler-tube.pdf',
    fileSize: '355 KB',
    tags: ['boiler', 'tube repair', 'ASME Section I'],
  },
  {
    id: 'cs-hep',
    title: 'High Energy Piping (HEP) Inspection & Repair',
    description:
      'Covers P91/P22 creep damage assessment, ASME B31.1 CPS Chapter VII compliance, PAUT/TOFD NDE methods, and weld repair scope for critical power piping systems.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/hep.pdf',
    fileSize: '410 KB',
    tags: ['HEP', 'P91', 'high energy piping', 'ASME B31.1'],
  },
  {
    id: 'cs-so2-scrubber',
    title: 'SO2 Scrubber Repairs & Upgrades',
    description:
      'Wet FGD absorber internals, mist eliminator replacement, spray nozzle headers, tower lining in rubber/alloy/FRP, and EPA 40 CFR 60 compliance support.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/so2-scrubber.pdf',
    fileSize: '370 KB',
    tags: ['FGD', 'scrubber', 'environmental', 'EPA'],
  },
  {
    id: 'cs-heat-exchanger',
    title: 'Heat Exchanger Maintenance & Repair',
    description:
      'Shell-and-tube bundle pulls, eddy current/IRIS/RFT tube inspection, tube plugging to TEMA standards, and air-cooled fin-fan and plate-and-frame service.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/heat-exchanger.pdf',
    fileSize: '340 KB',
    tags: ['heat exchanger', 'TEMA', 'tube inspection'],
  },
  {
    id: 'cs-hdpe-piping',
    title: 'HDPE Piping Fabrication & Installation',
    description:
      'Butt fusion and electrofusion certified operators, calibrated equipment, ASTM D3261/F1055/F2620 compliance, PE4710 resin installations, and hydrostatic testing.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/hdpe-piping.pdf',
    fileSize: '360 KB',
    tags: ['HDPE', 'piping', 'fusion', 'ASTM'],
  },
  {
    id: 'cs-pressure-vessel',
    title: 'Pressure Vessel Inspection & Repair',
    description:
      'Nozzle repairs, weld overlay (stainless/nickel), R-Stamp documentation, API 579 Fitness-for-Service assessments, and full ASME Section VIII compliance.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/pressure-vessel.pdf',
    fileSize: '390 KB',
    tags: ['pressure vessel', 'R-Stamp', 'API 579', 'ASME VIII'],
  },
  {
    id: 'cs-catalyst',
    title: 'Catalyst Removal & Installation',
    description:
      'Pyrophoric material handling under nitrogen/passivation, vacuum unloading, dense loading, blind-to-blind scope, and OSHA PSM 1910.119 compliance procedures.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/catalyst.pdf',
    fileSize: '345 KB',
    tags: ['catalyst', 'pyrophoric', 'reactor', 'PSM'],
  },
  {
    id: 'cs-structural-steel',
    title: 'Structural Steel Erection & Refurbishment',
    description:
      'New erection and repair of boiler structure, stacks, and cooling tower steel. AWS D1.1/AISC 360 qualified with full engineering coordination capability.',
    category: 'Capability Sheets',
    fileType: 'pdf',
    filePath: '/downloads/capability-sheets/structural-steel.pdf',
    fileSize: '365 KB',
    tags: ['structural steel', 'AISC', 'AWS D1.1', 'erection'],
  },

  // ── Safety & Compliance ──────────────────────────────────────────────────
  {
    id: 'safety-policy',
    title: 'MAC Industrial Safety Policy Statement',
    description:
      'Corporate safety commitment, zero-incident philosophy, incident reporting requirements, and management accountability structure.',
    category: 'Safety & Compliance',
    fileType: 'pdf',
    filePath: '/downloads/safety/mac-safety-policy.pdf',
    fileSize: '290 KB',
    featured: true,
    tags: ['safety', 'policy', 'compliance', 'OSHA'],
  },
  {
    id: 'iipp',
    title: 'Injury & Illness Prevention Program (IIPP)',
    description:
      'Full IIPP document covering hazard identification, corrective action procedures, safety communication, training requirements, and recordkeeping.',
    category: 'Safety & Compliance',
    fileType: 'pdf',
    filePath: '/downloads/safety/iipp.pdf',
    fileSize: '510 KB',
    tags: ['IIPP', 'safety program', 'OSHA 3203'],
  },
  {
    id: 'hot-work-permit',
    title: 'Hot Work Permit Template',
    description:
      'Site-ready hot work authorization form covering fire watch requirements, atmospheric testing, equipment checks, and authorized signatory fields.',
    category: 'Safety & Compliance',
    fileType: 'pdf',
    filePath: '/downloads/safety/hot-work-permit.pdf',
    fileSize: '180 KB',
    tags: ['hot work', 'permit', 'welding', 'fire watch'],
  },
  {
    id: 'confined-space-entry',
    title: 'Confined Space Entry Permit',
    description:
      'OSHA 1910.146-compliant permit-required confined space entry form with atmospheric monitoring log, attendant/entrant assignments, and rescue procedures.',
    category: 'Safety & Compliance',
    fileType: 'pdf',
    filePath: '/downloads/safety/confined-space-entry.pdf',
    fileSize: '200 KB',
    tags: ['confined space', 'OSHA 1910.146', 'permit'],
  },
  {
    id: 'incident-rates',
    title: 'Safety Performance Metrics – Current Year',
    description:
      'TRIR, DART, and LTIR rates by quarter. Includes OSHA 300 summary, near-miss frequency, and safety observation statistics for prequalification submissions.',
    category: 'Safety & Compliance',
    fileType: 'csv',
    filePath: '/downloads/safety/safety-metrics.csv',
    fileSize: '45 KB',
    tags: ['TRIR', 'DART', 'safety metrics', 'EMR'],
  },

  // ── Technical Specifications ─────────────────────────────────────────────
  {
    id: 'welding-wps-summary',
    title: 'Welding Procedure Specification (WPS) Summary',
    description:
      'Index of active WPS/PQR documents covering P91, P22, P9, carbon steel, stainless steel, and duplex alloys. Includes qualified positions and base metal groups.',
    category: 'Technical Specifications',
    fileType: 'pdf',
    filePath: '/downloads/technical/wps-summary.pdf',
    fileSize: '475 KB',
    featured: true,
    tags: ['WPS', 'PQR', 'welding', 'ASME Section IX'],
  },
  {
    id: 'p91-welding-guide',
    title: 'P91 Alloy Steel Welding Guidelines',
    description:
      'Technical reference for Grade 91 (9Cr-1Mo-V) welding: preheat/PWHT requirements, filler metal selection, hardness acceptance criteria, and NDE hold points.',
    category: 'Technical Specifications',
    fileType: 'pdf',
    filePath: '/downloads/technical/p91-welding-guide.pdf',
    fileSize: '620 KB',
    tags: ['P91', 'PWHT', 'Grade 91', 'creep', 'ASME B31.1'],
  },
  {
    id: 'hdpe-fusion-parameters',
    title: 'HDPE Fusion Parameter Log Template',
    description:
      'Spreadsheet template for recording butt fusion and electrofusion parameters per ASTM F2620. Includes operator ID, pipe size, heater temperature, and pressure fields.',
    category: 'Technical Specifications',
    fileType: 'csv',
    filePath: '/downloads/technical/hdpe-fusion-log.csv',
    fileSize: '28 KB',
    tags: ['HDPE', 'fusion log', 'ASTM F2620', 'QC'],
  },
  {
    id: 'equipment-list',
    title: 'Major Equipment & Tooling Inventory',
    description:
      'Current inventory of owned heavy equipment: lifting gear, welding machines, fusion equipment, NDE instruments, and specialty tooling available for project deployment.',
    category: 'Technical Specifications',
    fileType: 'csv',
    filePath: '/downloads/technical/equipment-inventory.csv',
    fileSize: '62 KB',
    tags: ['equipment', 'tooling', 'inventory', 'cranes'],
  },

  // ── Forms & Templates ────────────────────────────────────────────────────
  {
    id: 'jha-template',
    title: 'Job Hazard Analysis (JHA) Template',
    description:
      'Blank JHA worksheet for field supervisors. Structured by job step, potential hazards, and required controls. Fillable PDF format.',
    category: 'Forms & Templates',
    fileType: 'pdf',
    filePath: '/downloads/forms/jha-template.pdf',
    fileSize: '195 KB',
    tags: ['JHA', 'safety', 'hazard analysis', 'field'],
  },
  {
    id: 'outage-scope-worksheet',
    title: 'Outage Scope Development Worksheet',
    description:
      'Pre-outage planning worksheet for capturing unit history, known deficiencies, inspection hold points, estimated labor hours, and material requirements.',
    category: 'Forms & Templates',
    fileType: 'csv',
    filePath: '/downloads/forms/outage-scope-worksheet.csv',
    fileSize: '38 KB',
    tags: ['outage', 'scope', 'planning', 'maintenance'],
  },
  {
    id: 'rfq-template',
    title: 'RFQ / Bid Package Template',
    description:
      'Standardized request-for-quote template for industrial maintenance and repair work. Includes scope fields, safety requirement checkboxes, and schedule inputs.',
    category: 'Forms & Templates',
    fileType: 'pdf',
    filePath: '/downloads/forms/rfq-template.pdf',
    fileSize: '230 KB',
    tags: ['RFQ', 'bid', 'quote', 'procurement'],
  },
  {
    id: 'equipment-inspection-checklist',
    title: 'Pre-Mobilization Equipment Inspection Checklist',
    description:
      'Field checklist for verifying equipment condition before site mobilization. Covers lifting gear, PPE, welding machines, calibrated instruments, and consumables.',
    category: 'Forms & Templates',
    fileType: 'csv',
    filePath: '/downloads/forms/equipment-inspection.csv',
    fileSize: '32 KB',
    tags: ['inspection', 'equipment', 'mobilization', 'checklist'],
  },
]

export const resourceCategories = [
  'Company Overview',
  'Capability Sheets',
  'Safety & Compliance',
  'Technical Specifications',
  'Forms & Templates',
] as const
