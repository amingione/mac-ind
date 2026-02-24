import type {
  Service,
  Capability,
  Client,
  Stat,
  NavLink,
  SafetyPillar,
  WeldingSpec,
  TeamMember,
} from '@/types'

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Capabilities', href: '/capabilities' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Safety & Quality', href: '/safety' },
  { label: 'Contact', href: '/contact' },
]

export const stats: Stat[] = [
  {
    value: '40',
    suffix: 'K+',
    label: 'Professionals in Network',
    description: 'Skilled tradespeople ready to deploy',
  },
  {
    value: '100',
    suffix: '+',
    label: 'Years Combined Experience',
    description: 'Across industrial maintenance & repair',
  },
  {
    value: '24',
    suffix: '/7',
    label: 'Emergency Response',
    description: 'Rapid deployment for forced outages',
  },
  {
    value: '100',
    suffix: '%',
    label: 'Safety Commitment',
    description: 'Zero-compromise approach to safety',
  },
]

export const services: Service[] = [
  {
    id: 'industrial-maintenance',
    title: 'Industrial Maintenance',
    description:
      'Comprehensive maintenance services designed to maximize uptime, reduce operational costs, and extend the life of your industrial assets.',
    icon: 'wrench',
    imagePath: '/images/services/industrial-maintenance.png',
    items: [
      'Preventive & predictive maintenance programs',
      'Scheduled shutdown maintenance',
      'Rotating equipment repair',
      'Mechanical & electrical systems',
      'Heat exchanger maintenance',
      'Pump and compressor overhauls',
    ],
  },
  {
    id: 'outage-services',
    title: 'Outage Services',
    description:
      'Expert management of planned and forced outages, delivering rapid mobilization and efficient execution to minimize your downtime.',
    icon: 'lightning',
    imagePath: '/images/services/outage-services.png',
    items: [
      'Planned outage management & execution',
      'Forced outage emergency response',
      'Outage scope development',
      'Workforce mobilization (local & national)',
      'Outage coordination & scheduling',
      'Post-outage reporting & documentation',
    ],
  },
  {
    id: 'welding-fabrication',
    title: 'Welding & Fabrication',
    description:
      'High-quality welding and fabrication services meeting the most stringent industrial codes and standards, including specialty alloy work.',
    icon: 'fire',
    imagePath: '/images/services/welding-fabrication.png',
    items: [
      'P91 & P22 chrome-moly alloy welding',
      'Super Duplex stainless steel',
      'Post-Weld Heat Treatment (PWHT)',
      'Ferrite testing & quality control',
      'Custom structural fabrication',
      'Pressure vessel repair',
    ],
  },
  {
    id: 'emergency-response',
    title: 'Emergency Response',
    description:
      'Rapid 24/7 emergency response teams ready to mobilize immediately when forced outages or critical failures occur.',
    icon: 'alert',
    imagePath: '/images/services/emergency-response.png',
    items: [
      '24/7 rapid response teams',
      'Nationwide mobilization capability',
      'Emergency boiler tube repair',
      'Critical piping failures',
      'Structural emergency stabilization',
      'Insurance & documentation support',
    ],
  },
  {
    id: 'capital-projects',
    title: 'Capital Projects',
    description:
      'Full-lifecycle capital project delivery from concept through completion, with dedicated project management and skilled craft labor.',
    icon: 'building',
    imagePath: '/images/services/capital-projects.png',
    items: [
      'Project scoping & estimating',
      'Construction management',
      'Equipment setting & alignment',
      'Structural steel erection',
      'Mechanical installation',
      'Commissioning support',
    ],
  },
  {
    id: 'resource-solutions',
    title: 'Resource Solutions',
    description:
      'Flexible workforce solutions providing skilled craft professionals on demand — from single placements to full project crews.',
    icon: 'users',
    imagePath: '/images/services/resource-solutions.png',
    items: [
      'Skilled craft staffing (local & travel)',
      'Millwrights, pipefitters, boilermakers',
      'Electricians & instrumentation',
      'Project supervision & management',
      'Short-term & long-term placements',
      '40,000+ vetted professionals in network',
    ],
  },
]

export const capabilities: Capability[] = [
  { id: 'air-preheater', name: 'Air Preheater Repair & Refurbishment', category: 'Power Generation', imagePath: '/images/capabilities/air-preheater.png' },
  { id: 'boiler-tube', name: 'Boiler Tube Repair & Replacement', category: 'Power Generation', imagePath: '/images/capabilities/boiler-tube.png' },
  { id: 'hep', name: 'High Energy Piping (HEP)', category: 'Power Generation', imagePath: '/images/capabilities/hep.png' },
  { id: 'papermill', name: 'Papermill Maintenance', category: 'Industrial', imagePath: '/images/capabilities/papermill.png' },
  { id: 'equipment-setting', name: 'Equipment Setting & Alignment', category: 'Industrial', imagePath: '/images/capabilities/equipment-setting.png' },
  { id: 'firewater-piping', name: 'Firewater Piping Systems', category: 'Infrastructure', imagePath: '/images/capabilities/firewater-piping.png' },
  { id: 'structural-steel', name: 'Structural Steel Erection & Refurbishment', category: 'Structural', imagePath: '/images/capabilities/structural-steel.png' },
  { id: 'so2-scrubber', name: 'SO2 Scrubber Repairs & Upgrades', category: 'Environmental', imagePath: '/images/capabilities/so2-scrubber.png' },
  { id: 'catalyst', name: 'Catalyst Removal & Installation', category: 'Process', imagePath: '/images/capabilities/catalyst.png' },
  { id: 'hdpe-piping', name: 'HDPE Piping Fabrication & Installation', category: 'Piping', imagePath: '/images/capabilities/hdpe-piping.png' },
  { id: 'heat-exchanger', name: 'Heat Exchanger Maintenance & Repair', category: 'Industrial', imagePath: '/images/capabilities/heat-exchanger.png' },
  { id: 'pressure-vessel', name: 'Pressure Vessel Inspection & Repair', category: 'Industrial', imagePath: '/images/capabilities/pressure-vessel.png' },
]

export const weldingSpecs: WeldingSpec[] = [
  { label: 'P91 Chrome-Moly', description: 'Grade 91 alloy steel for high-temp/high-pressure applications' },
  { label: 'P22 Alloy Steel', description: 'Chrome-moly alloy for steam piping systems' },
  { label: 'Super Duplex Stainless', description: 'High-strength, corrosion-resistant specialty alloys' },
  { label: 'Post-Weld Heat Treatment (PWHT)', description: 'Stress relieving per ASME code requirements' },
  { label: 'Ferrite Testing', description: 'Metallurgical verification to ASME standards' },
  { label: 'ASME Code Compliance', description: 'Section I, Section VIII, B31.1, B31.3' },
]

export const safetyPillars: SafetyPillar[] = [
  {
    title: 'Commitment',
    subtitle: 'Zero-Compromise Safety Culture',
    description:
      'Every member of the MAC team is personally committed to returning home safely every day. Safety is not a priority that competes with production — it is the non-negotiable foundation of everything we do.',
    items: [
      'Rigorous pre-task planning (JSA/JHA)',
      'Daily safety briefings on every job site',
      'Stop-work authority for every employee',
      'Incident-free performance targets',
    ],
  },
  {
    title: 'Care',
    subtitle: 'People-First Approach',
    description:
      "We genuinely care about the well-being of our workforce, our clients' teams, and the communities where we work. That care drives our continuous investment in safety training and personal protective programs.",
    items: [
      'Comprehensive safety onboarding',
      'Ongoing training & certification programs',
      'Mental health & wellness awareness',
      'Community safety advocacy',
    ],
  },
  {
    title: 'Courage',
    subtitle: 'Speak Up. Act Up.',
    description:
      "We cultivate the courage to speak up when something isn't right — whether it's an unsafe condition, a procedural shortcut, or pressure to move faster than safety allows. Every voice matters.",
    items: [
      'Empowered stop-work culture',
      'Anonymous safety reporting',
      'Leadership accountability',
      'Recognition for safe behavior',
    ],
  },
]

export const clients: Client[] = [
  { name: 'Florida Power & Light', industry: 'Utility / Power Generation' },
  { name: 'Duke Energy', industry: 'Utility / Power Generation' },
  { name: 'Tampa International Airport', industry: 'Infrastructure' },
  { name: 'Hydro Aluminum Metals', industry: 'Manufacturing' },
  { name: 'DuPont Pine Lumber Mill', industry: 'Industrial / Pulp & Paper' },
  { name: 'Cemex', industry: 'Construction Materials' },
  { name: 'Stratus Foods', industry: 'Food & Beverage' },
  { name: 'Georgia Automatic Sprinkler', industry: 'Fire Protection' },
  { name: 'Ozinga', industry: 'Construction / Ready-Mix' },
]

export const contact: TeamMember = {
  name: 'Jayr McLain',
  title: 'Florida Operations Manager',
  phone: '+1-812-801-1391',
  email: 'JMclain@macindustrialsvcs.com',
}
