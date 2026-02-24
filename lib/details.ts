import type { ServiceDetail, CapabilityDetail } from '@/types'

// ── Service detail pages ────────────────────────────────────────────────────

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'industrial-maintenance',
    slug: 'industrial-maintenance',
    longDescription: [
      'Industrial maintenance is the backbone of reliable plant operations. MAC Industrial Services delivers comprehensive preventive, predictive, and corrective maintenance programs tailored to the unique demands of power generation, manufacturing, pulp & paper, and process industries. Our approach combines detailed asset management planning with certified craft labor — giving clients a single, accountable partner for all maintenance execution.',
      'Where other contractors treat maintenance as a reactive trade, MAC treats it as an engineered discipline. We begin every engagement with a scope assessment that maps critical assets, failure history, and downtime cost — then we build a maintenance schedule that aligns with your production calendar. Our crews are cross-trained across mechanical, structural, and specialty welding disciplines, which eliminates handoff delays and coordination overhead.',
      'From routine lube routes and filter changes to full pump-and-compressor overhauls, heat exchanger maintenance, and rotating equipment rebuilds, MAC deploys the right skill at the right time. We also partner with client reliability teams to implement condition-based monitoring programs that catch degradation before it becomes an unplanned outage.',
    ],
    highlights: [
      'Preventive and predictive maintenance program design',
      'Cross-trained crews reduce multi-contractor coordination',
      'Asset criticality mapping and maintenance scheduling',
      'Pump, compressor, and rotating equipment overhauls',
      'Heat exchanger bundle pulls and retube',
      'Condition-based monitoring integration',
      'Scheduled and emergency shutdown support',
    ],
    applications: [
      'Coal, gas, and combined-cycle power generation',
      'Pulp & paper mills',
      'Chemical and petrochemical facilities',
      'Food and beverage manufacturing',
      'Cement and aggregate plants',
      'Airport and transportation infrastructure',
    ],
    standards: [
      'ASME PCC-2 – Repair of Pressure Equipment and Piping',
      'API 510 – Pressure Vessel Inspection Code',
      'API 570 – Piping Inspection Code',
      'NFPA 70E – Electrical Safety in the Workplace',
      'OSHA 29 CFR 1910 General Industry Standards',
    ],
    faqs: [
      {
        question: 'How does MAC handle maintenance scheduling around our production calendar?',
        answer:
          'We work directly with your operations and reliability teams to build a maintenance schedule that fits planned production windows and minimizes impact on output. Our project managers coordinate labor, materials, and equipment pre-staging so every execution window is used efficiently.',
      },
      {
        question: 'Can MAC manage both routine maintenance and emergency breakdowns?',
        answer:
          'Yes. We maintain 24/7 emergency response capability alongside our planned maintenance programs. The same crews familiar with your facility respond to breakdowns, which accelerates diagnosis and repair times significantly.',
      },
      {
        question: 'Do you offer long-term maintenance contracts?',
        answer:
          'MAC offers both project-based and long-term site services agreements. Long-term contracts allow us to deeply understand your asset base, build site-specific procedures, and provide dedicated teams — typically delivering measurable reductions in unplanned downtime within the first contract year.',
      },
      {
        question: 'What types of rotating equipment does MAC service?',
        answer:
          'Our crews are qualified to service centrifugal and positive-displacement pumps, compressors, turbines, gearboxes, blowers, fans, and associated mechanical drives. We perform in-field repair as well as shop refurbishment and alignment verification.',
      },
    ],
    relatedCapabilityIds: [
      'heat-exchanger',
      'pressure-vessel',
      'equipment-setting',
      'boiler-tube',
    ],
  },
  {
    id: 'outage-services',
    slug: 'outage-services',
    longDescription: [
      'Planned outages are narrow, expensive windows — and execution quality determines whether a plant returns to service on time and on budget. MAC Industrial Services provides comprehensive outage management from scope development through post-outage documentation, integrating project management, craft labor, specialty welding, and equipment services under one contract.',
      'Our outage teams are built around experienced outage managers who have executed hundreds of scheduled and forced outages across utility, industrial, and process plants. We develop detailed work packages and sequencing logic before mobilization begins, so every crew arrives with a clear scope, the right tools, and zero ambiguity about what success looks like. National mobilization capability means we can scale headcount rapidly — drawing from our network of 40,000+ vetted craft professionals — without sacrificing crew quality.',
      'For forced outages, speed is everything. MAC maintains rapid-response teams with pre-mobilized consumables and tooling for the most common failure modes in boiler, piping, and structural systems. When a tube leak or piping failure shuts down a unit at 2 AM, MAC is the call that gets the plant back online — not on a work order queue.',
    ],
    highlights: [
      'Pre-outage scope development and work packaging',
      'Integrated outage management — one contract, one point of contact',
      'Rapid national mobilization from 40,000+ craft network',
      'Forced outage emergency response 24/7/365',
      'Outage coordination, sequencing, and scheduling',
      'Specialty welding integrated within outage execution',
      'Post-outage reporting and punchlist closeout',
    ],
    applications: [
      'Coal and gas-fired utility power plants',
      'Combined-cycle and HRSG outages',
      'Nuclear balance-of-plant outage support',
      'Pulp & paper mill shutdowns',
      'Refinery turnarounds',
      'Chemical plant turnaround support',
    ],
    standards: [
      'ASME B31.1 – Power Piping',
      'ASME Section I – Power Boilers',
      'ASME Section VIII – Unfired Pressure Vessels',
      'NBIC (National Board Inspection Code) – R-Stamp repairs',
      'OSHA 29 CFR 1910.147 – Lockout/Tagout',
    ],
    faqs: [
      {
        question: 'How far in advance should we engage MAC for a planned outage?',
        answer:
          'For major planned outages, we recommend engaging 6–12 months in advance to allow time for scope development, resource planning, and material procurement. For smaller scopes, 60–90 days is typically sufficient. The earlier we engage, the more value we can add through pre-outage planning.',
      },
      {
        question: 'Can MAC self-perform specialty welding within the outage scope?',
        answer:
          'Yes. Unlike general contractors who subcontract welding, MAC self-performs all specialty welding including P91/P22 alloy, Super Duplex, and PWHT. This eliminates a major coordination bottleneck and gives you a single accountable party for code-compliant weld quality.',
      },
      {
        question: 'What is your forced outage response time?',
        answer:
          'MAC targets a response time of 4 hours or less for emergency mobilization within the Southeast US. For broader deployments, we can have crews en route within hours of a call and begin executing within 24 hours in most cases.',
      },
      {
        question: 'Do you provide outage coordination software or reporting?',
        answer:
          'We use industry-standard project management tools for scheduling, daily reporting, and progress tracking. We adapt to client-preferred platforms and provide daily shift reports, headcount logs, and final completion packages for every outage.',
      },
    ],
    relatedCapabilityIds: ['boiler-tube', 'air-preheater', 'hep', 'so2-scrubber'],
  },
  {
    id: 'welding-fabrication',
    slug: 'welding-fabrication',
    longDescription: [
      'Welding quality in high-pressure, high-temperature industrial systems is not a commodity — it is a life-safety and regulatory compliance matter. MAC Industrial Services provides code-compliant welding and fabrication services for the most demanding applications in power generation, chemical processing, and heavy industry. Our welders are qualified to ASME and AWS standards across multiple processes and specialty alloy grades.',
      'MAC specializes in the chrome-moly alloys that define modern high-energy power plant systems — P91, P22, and P9 grade steels that require precise preheat control, interpass temperature monitoring, and post-weld heat treatment (PWHT) to achieve the microstructural properties required by ASME B31.1 and Section I. We also perform Super Duplex stainless welding for corrosive service applications common in FGD, chemical, and marine environments.',
      'Every weld we produce is supported by a documented Welding Procedure Specification (WPS), qualified Welding Procedure Qualification Record (PQR), and welder performance qualification records (WPQ). Our quality program includes in-process inspection, NDE coordination, hardness testing, ferrite testing, and PWHT documentation — ensuring that every weld is traceable, code-compliant, and defensible under third-party inspection.',
    ],
    highlights: [
      'P91, P22, P9, and P5 chrome-moly alloy welding',
      'Super Duplex stainless and exotic alloy capability',
      'Post-Weld Heat Treatment (PWHT) — field and shop',
      'Ferrite testing and metallurgical verification',
      'Full WPS/PQR/WPQ documentation',
      'ASME Section I, VIII, B31.1, and B31.3 compliance',
      'NDE coordination: RT, UT, MT, PT',
    ],
    applications: [
      'High-energy steam piping (HEP) in power plants',
      'Boiler pressure part repairs and tube-to-header welds',
      'Pressure vessel nozzle and shell repairs',
      'FGD/SO2 scrubber structural and process piping',
      'Custom structural and equipment fabrication',
      'Petrochemical and refinery piping systems',
    ],
    standards: [
      'ASME Section I – Power Boilers',
      'ASME Section IX – Welding and Brazing Qualifications',
      'ASME B31.1 – Power Piping',
      'ASME B31.3 – Process Piping',
      'AWS D1.1 – Structural Welding Code',
      'API 582 – Welding Guidelines for Chemical, Oil, and Gas Industries',
    ],
    faqs: [
      {
        question: 'Why does P91 welding require a specialist?',
        answer:
          'P91 (9Cr-1Mo-V) is a tempered martensitic steel with very specific metallurgical requirements. Improper preheat, interpass temperature control, or PWHT can result in Type IV creep cracking at weld heat-affected zones — a failure mode that has caused catastrophic piping failures in power plants. MAC crews are trained specifically on P91 procedures and use calibrated temperature monitoring throughout the weld cycle.',
      },
      {
        question: 'What is the purpose of ferrite testing on stainless welds?',
        answer:
          'Ferrite content in austenitic and duplex stainless welds must fall within a specific range to prevent hot cracking during welding and to ensure corrosion resistance and toughness in service. MAC performs ferrite measurement using calibrated ferritescopes and documents results as part of our weld quality record.',
      },
      {
        question: 'Do you perform PWHT in the field or only in a shop?',
        answer:
          'Both. MAC performs field PWHT using electric resistance heating methods with calibrated temperature recorders per ASME requirements. Field PWHT is common for large components and piping systems that cannot be transported, and we have the equipment and qualified personnel to execute it safely and in compliance with code.',
      },
      {
        question: 'Can MAC fabricate custom structural components?',
        answer:
          'Yes. Beyond pressure-part welding, MAC fabricates structural steel assemblies, pipe spools, platforms, supports, and custom equipment frames. We work from client drawings or collaborate with engineering partners to produce fabrication packages from scratch.',
      },
    ],
    relatedCapabilityIds: ['hep', 'boiler-tube', 'pressure-vessel', 'structural-steel'],
  },
  {
    id: 'emergency-response',
    slug: 'emergency-response',
    longDescription: [
      'Unplanned outages cost industrial facilities hundreds of thousands to millions of dollars per day in lost generation, production, and contractual penalties. When a boiler tube fails, a pipe ruptures, or structural damage threatens plant safety, the difference between a four-hour response and a 24-hour response can define the financial quarter. MAC Industrial Services maintains dedicated emergency response teams available 24/7/365 for rapid deployment across the Southeast and nationally.',
      'Our emergency response capability is built on pre-positioned personnel, tooling, and consumables — combined with documented emergency protocols for the most common failure types. Boiler tube leaks, high-energy piping failures, structural compromise, and fire protection system breaches all have pre-planned response frameworks that our crews execute on arrival. This eliminates the diagnostic lag that costs forced-outage customers hours of unnecessary downtime.',
      'Beyond execution, MAC supports the post-event documentation requirements that insurers and regulatory bodies require. Our project managers produce detailed root cause documentation, scope records, and repair certification packages that clients need to demonstrate code compliance and support insurance claims. We treat emergency response as a complete service — not just getting the plant running, but leaving the paper trail that protects the owner afterward.',
    ],
    highlights: [
      '24/7/365 emergency mobilization — 4-hour target response',
      'Pre-positioned tooling and consumables for common failure modes',
      'Emergency boiler tube repair and replacement',
      'High-energy piping emergency isolation and repair',
      'Structural emergency stabilization and repair',
      'Post-event root cause documentation and insurance support',
      'National deployment capability from 40,000+ craft network',
    ],
    applications: [
      'Forced outage boiler tube failures',
      'High-pressure steam piping leaks and ruptures',
      'Fire protection system failures',
      'Structural damage (storm, impact, or overload events)',
      'Pressure vessel emergency repair',
      'Process piping failures in chemical and manufacturing plants',
    ],
    standards: [
      'NBIC (National Board Inspection Code) – R-Stamp emergency repairs',
      'ASME PCC-2 – Repair of Pressure Equipment and Piping',
      'ASME B31.1 – Power Piping emergency repair provisions',
      'NFPA 25 – Inspection, Testing, and Maintenance of Water-Based Fire Protection',
      'OSHA 29 CFR 1910.147 – Emergency Lockout/Tagout compliance',
    ],
    faqs: [
      {
        question: 'What does a 4-hour response mean in practice?',
        answer:
          'It means a qualified crew lead or project manager is on-site within 4 hours of a confirmed emergency call in our primary service area. Our teams pre-stage PPE, tooling, and consumables so that productive work begins as soon as safe access is established — not after a trip to the supply house.',
      },
      {
        question: 'Can MAC respond to emergencies outside of Florida?',
        answer:
          "Yes. While our primary operations are Florida-based, we maintain national deployment capability through our craft network. Travel crews and local contract resources can be mobilized simultaneously for large or geographically distant emergencies. Contact us immediately and we'll assess deployment options in real time.",
      },
      {
        question: 'How does MAC handle a boiler tube emergency?',
        answer:
          'Upon arrival, our crew assesses the failure extent, identifies adjacent tube condition, prepares the work area for confined and/or hot work, and begins tube cutting, fitting, and welding operations per approved procedures. For complex alloy tubes (P91, T22), our welders are pre-qualified and carry their procedure documentation on-site.',
      },
      {
        question: 'Does MAC provide documentation for insurance claims?',
        answer:
          'Yes. We produce detailed work records including scope narrative, material traceability, weld records, NDE results, and completion certification — all formatted to support the documentation requirements of industrial insurers and provide the paper trail needed for regulatory compliance.',
      },
    ],
    relatedCapabilityIds: ['boiler-tube', 'hep', 'firewater-piping', 'pressure-vessel'],
  },
  {
    id: 'capital-projects',
    slug: 'capital-projects',
    longDescription: [
      'Capital projects in industrial facilities demand more than just construction execution — they require integration with live plant operations, coordination of multiple craft disciplines, and the engineering rigor to deliver on schedule, on budget, and with no impact to adjacent production systems. MAC Industrial Services delivers full-lifecycle capital project services with dedicated construction management, self-performed craft labor, and hands-on project leadership from concept through commissioning.',
      'Our capital project capability spans new equipment installation, structural steel erection, mechanical systems installation, and precision equipment setting and alignment. MAC project managers are experienced in managing concurrent scopes, phased construction in operating facilities, and the complexity that comes with multi-discipline integration. We develop detailed project schedules with hold points, quality inspection gates, and client handoff milestones built in from day one.',
      'Unlike large EPC contractors who layer subcontractors under administrative overhead, MAC self-performs the core craft work — delivering faster mobilization, direct quality control, and clear accountability. Our clients consistently cite schedule performance and direct access to decision-makers as the factors that differentiate MAC from larger competitors on capital project delivery.',
    ],
    highlights: [
      'Full-lifecycle capital project delivery',
      'Dedicated construction management and project supervision',
      'Self-performed craft labor — no subcontractor layers',
      'Structural steel erection and heavy equipment setting',
      'Mechanical installation and system tie-ins',
      'Precision alignment and commissioning support',
      'Schedule development, milestone tracking, and reporting',
    ],
    applications: [
      'New equipment installation in operating facilities',
      'Plant expansions and capacity upgrade projects',
      'Structural steel and platform construction',
      'Major equipment replacement (turbines, fans, pumps)',
      'Piping system installation and tie-ins',
      'Environmental compliance capital projects (FGD, SCR)',
    ],
    standards: [
      'AISC 360 – Specification for Structural Steel Buildings',
      'AWS D1.1 – Structural Welding Code',
      'ASME B31.1/B31.3 – Power and Process Piping',
      'OSHA 29 CFR 1926 – Construction Safety Standards',
      'API RP 686 – Machinery Installation and Installation Design',
    ],
    faqs: [
      {
        question: 'How does MAC manage capital projects in live operating facilities?',
        answer:
          'We begin every live-plant capital project with a detailed work-area hazard assessment and interface plan that defines the boundary between construction zones and operating systems. Our project managers work with client operations staff to sequence work around production requirements and establish clear lockout/tagout boundaries before any field work begins.',
      },
      {
        question: 'Does MAC provide its own construction management, or do you execute to a client PM?',
        answer:
          'Both models work. MAC can provide a full construction management team including PM, site superintendent, and QC inspector — or we can provide craft-only execution under a client-led project structure. Most clients prefer the MAC-managed model because it consolidates accountability and reduces the client coordination burden.',
      },
      {
        question: 'What size capital projects does MAC typically handle?',
        answer:
          'MAC has delivered capital projects ranging from single-equipment replacements (a few hundred thousand dollars) to multi-discipline plant construction projects exceeding $10 million in craft labor. Our project management systems scale accordingly, and we staff each project to match scope complexity.',
      },
      {
        question: 'Can MAC support equipment procurement and logistics?',
        answer:
          'While MAC is primarily a services company, we work closely with client procurement teams and equipment vendors to plan and execute heavy lifts, equipment receiving, and pre-installation inspection. We can coordinate rigging and crane services as part of an integrated project scope.',
      },
    ],
    relatedCapabilityIds: [
      'structural-steel',
      'equipment-setting',
      'pressure-vessel',
      'hdpe-piping',
    ],
  },
  {
    id: 'resource-solutions',
    slug: 'resource-solutions',
    longDescription: [
      'Industrial facilities increasingly face the challenge of scaling labor rapidly for outages, turnarounds, and capital projects — without the overhead of permanent headcount and without sacrificing craft quality. MAC Industrial Services Resource Solutions provides flexible, vetted craft staffing from a network of 40,000+ skilled industrial professionals, deployable on demand for single placements or full project crews.',
      'Every professional in the MAC network has been screened for trade certification, safety training, and prior industrial experience. We do not pull from general labor pools — our focus is exclusively on industrial craft: millwrights, pipefitters, boilermakers, welders, ironworkers, electricians, and instrumentation technicians. This specialization means clients get workers who know how to operate in hazardous industrial environments from day one.',
      'MAC Resource Solutions also provides craft supervision and project management personnel. Whether a client needs a single experienced foreman to lead a client-staffed crew, or a complete project management team for a multi-month turnaround, we can staff the leadership layer that keeps a project moving safely and efficiently. Long-term site services agreements include dedicated placement coordinators who understand each client facility and its specific requirements.',
    ],
    highlights: [
      '40,000+ vetted industrial craft professionals in network',
      'Exclusive focus on industrial trades — no general labor',
      'Millwrights, pipefitters, boilermakers, ironworkers',
      'Electricians, instrumentation, and E&I technicians',
      'Craft supervision, foremen, and project management',
      'Short-term outage support through long-term site agreements',
      'Rapid deployment — local and travel crews available',
    ],
    applications: [
      'Planned outage and turnaround labor augmentation',
      'Capital project craft execution crews',
      'Long-term facility maintenance staffing',
      'Skilled trade staffing for ramp-up periods',
      'Supervision and management for owner-directed projects',
      'Emergency response crew augmentation',
    ],
    standards: [
      'OSHA 10 / OSHA 30 – General Industry Safety Training',
      'NCCER (National Center for Construction Education & Research) – Craft Certifications',
      'AWS D1.1 / ASME Section IX – Welder Qualifications',
      'TWIC (Transportation Worker Identification Credential) – where applicable',
      'Client-specific site safety and competency requirements',
    ],
    faqs: [
      {
        question: 'How quickly can MAC deploy a crew?',
        answer:
          'For standard craft categories in the Southeast, MAC can mobilize workers within 24–72 hours for planned needs, and often same-day for emergency augmentation. National deployments with travel crews typically require 48–96 hours depending on scope and destination.',
      },
      {
        question: 'How does MAC verify craft competency before deployment?',
        answer:
          'Every worker in the MAC network is vetted through a combination of trade reference verification, NCCER certification review, safety training record check, and — for welders — a review of current WPQ documentation. We can also administer client-specific qualification tests as a pre-deployment requirement.',
      },
      {
        question: 'What is included in a long-term site services agreement?',
        answer:
          'Long-term agreements typically include dedicated placement coordinators, site-specific safety onboarding for all deployed workers, performance tracking, and priority access to craft resources during high-demand periods (like regional outage seasons). Pricing is structured for volume efficiency.',
      },
      {
        question: 'Can MAC provide craft workers who hold active ASME or R-Stamp qualifications?',
        answer:
          'Yes. For code-required welding work, we maintain a pool of welders with current ASME Section IX WPQ certifications in the alloys and positions most commonly required in power and process plant applications. Welder qualifications are provided to clients as part of the pre-mobilization package.',
      },
    ],
    relatedCapabilityIds: ['boiler-tube', 'structural-steel', 'hep', 'papermill'],
  },
]

// ── Capability detail pages ─────────────────────────────────────────────────

export const capabilityDetails: CapabilityDetail[] = [
  {
    id: 'air-preheater',
    slug: 'air-preheater',
    description:
      'Repair, refurbishment, and performance restoration of rotary regenerative and tubular air preheaters in coal, gas, and biomass-fired power generation facilities.',
    longDescription: [
      'Air preheaters are among the most maintenance-intensive components in a coal or gas-fired boiler system. These large heat exchangers recover thermal energy from flue gas by preheating combustion air — and their condition directly impacts overall boiler efficiency, emissions performance, and fan energy consumption. A degraded air preheater can reduce boiler efficiency by 1–3%, translating to millions of dollars in annual fuel cost increases for a large utility unit.',
      'MAC Industrial Services provides comprehensive air preheater repair and refurbishment services covering the full range of failure modes: seal wear and leakage, element fouling and plugging, basket element corrosion, structural basket plate damage, bearing wear, and drive mechanism issues. Our crews work in both tri-sector and bi-sector Ljungström-type rotary regenerative air heaters as well as tubular (recuperative) designs common in smaller industrial boilers.',
      'A typical MAC air preheater refurbishment scope includes pre-outage performance assessment (inlet and outlet gas temperature analysis, leakage quantification), element basket inspection and replacement, radial and axial seal replacement, hot-end and cold-end sector plate inspection, and post-refurbishment commissioning with leakage verification. We coordinate NDE services for structural components and provide a complete outage report with before/after performance data.',
    ],
    highlights: [
      'Rotary regenerative (Ljungström) and tubular APH experience',
      'Tri-sector and bi-sector configurations',
      'Basket element inspection, cleaning, and replacement',
      'Radial, axial, and bypass seal replacement',
      'Bearing inspection and lubrication system servicing',
      'Drive mechanism repair and alignment',
      'Pre- and post-refurbishment performance assessment',
    ],
    applications: [
      'Coal-fired utility boilers',
      'Gas and oil-fired industrial boilers',
      'Biomass and waste-to-energy boilers',
      'Combined-cycle HRSG auxiliary combustion air systems',
      'Cement kiln preheater towers (recuperative)',
    ],
    standards: [
      'ASME PTC 4 – Fired Steam Generators Performance Test Code',
      'ASME B31.1 – Power Piping (connected ductwork and expansion joints)',
      'OSHA 1910.146 – Permit Required Confined Space Entry',
      'Client-specific APH maintenance procedures and acceptance criteria',
    ],
    faqs: [
      {
        question: 'How do I know if my air preheater needs refurbishment?',
        answer:
          'Key indicators include rising outlet gas temperature (reduced heat transfer), increased air-to-gas leakage measured by O₂ differential across the APH, increased pressure drop across the element baskets, or visible physical damage during walkaround inspection. MAC can perform a pre-outage performance assessment to quantify degradation and build a refurbishment cost-benefit case.',
      },
      {
        question: 'Can MAC replace individual basket elements without a full refurbishment?',
        answer:
          'Yes. Partial element replacements are common where only specific sectors show elevated corrosion or plugging. We target replacement to the cold-end elements where low-temperature corrosion is most severe, allowing clients to stage refurbishment investment over multiple outage cycles.',
      },
      {
        question: 'How long does a typical air preheater refurbishment take?',
        answer:
          "A typical tri-sector regenerative APH refurbishment with element replacement and seal work takes 7–14 days depending on the unit size, the extent of basket damage, and concurrent mechanical work on the drive and bearing systems. MAC's outage planners can develop a detailed schedule as part of pre-outage planning.",
      },
    ],
    relatedServiceIds: ['outage-services', 'industrial-maintenance'],
  },
  {
    id: 'boiler-tube',
    slug: 'boiler-tube',
    description:
      'Emergency and planned boiler tube repair and full replacement for waterwall, superheater, reheater, and economizer tube banks in industrial and utility-grade boiler systems.',
    longDescription: [
      'Boiler tube failures are the leading cause of forced outages in coal-fired power plants and are a significant source of unplanned downtime in industrial boilers across all fuel types. A single tube leak can force a complete unit shutdown within hours, and in worst-case scenarios, adjacent tube damage and secondary failures can extend outage duration dramatically. MAC Industrial Services provides both emergency and planned boiler tube repair and replacement services with the speed and code compliance that clients require.',
      'Our boiler tube crews are experienced in all major boiler configurations — tangent waterwall panels, membrane waterwall, superheater and reheater pendant and platens, economizer tube bundles, and steam-cooled wall and roof systems. We work with carbon steel, low-alloy (T11, T22), and high-alloy (T91, T9, T22, Super 304H) tube materials, with appropriate preheat and PWHT applied per ASME Section I requirements for each material grade.',
      'For planned tube replacement projects, MAC provides complete work package development including tube layout drawings, material procurement coordination, NDE inspection planning, and weld procedure qualification review. For emergency repairs, our crews arrive with pre-staged materials and qualified procedures that allow immediate productive work — minimizing the diagnostic overhead that stretches forced outage duration.',
    ],
    highlights: [
      'Emergency 24/7 boiler tube failure response',
      'Waterwall, superheater, reheater, and economizer experience',
      'Carbon steel, T11, T22, T91, and Super 304H tube capability',
      'SMAW, GTAW, and semi-automatic welding processes',
      'In-situ tube fitting, roll, and seal-weld capability',
      'NDE coordination (UT, MT, PT, RT) post-repair',
      'ASME Section I code compliance and documentation',
    ],
    applications: [
      'Coal, gas, and oil-fired utility boiler tube repairs',
      'Industrial process steam boiler maintenance',
      'HRSG (Heat Recovery Steam Generator) tube repair',
      'Waste-to-energy boiler tube replacement',
      'Biomass boiler tube work',
    ],
    standards: [
      'ASME Section I – Power Boilers',
      'ASME Section IX – Welding and Brazing Qualifications',
      'NBIC NB-23 – National Board Inspection Code',
      'R-Stamp repair organization requirements',
      'ASME PCC-2 – Repair of Pressure Equipment and Piping',
    ],
    faqs: [
      {
        question: 'What causes boiler tube failures?',
        answer:
          'The most common failure mechanisms are fireside corrosion (sulfidation and oxidation), waterside corrosion (oxygen pitting, caustic attack, hydrogen damage), overheating (short-term and long-term creep), and erosion (fly ash impingement, sootblower erosion). MAC tube crews are trained to identify the failure mode at the repair site, which informs both the immediate repair approach and recommendations for preventing recurrence.',
      },
      {
        question: 'Does MAC hold an R-Stamp for boiler repairs?',
        answer:
          'MAC works under and coordinates with R-Stamp repair organizations as required by client and jurisdictional requirements. Our project teams ensure all repair documentation meets National Board Inspection Code requirements for post-repair inspection and documentation.',
      },
      {
        question: 'Can MAC access tube banks with limited clearance?',
        answer:
          'Yes. Boiler tube work routinely requires working in confined, hot, and height-restricted conditions. Our crews are qualified for permit-required confined space entry and equipped with the tooling — including pneumatic hammers, tube cutters, and flexible reamers — needed to work in tight boiler cavities.',
      },
    ],
    relatedServiceIds: ['emergency-response', 'outage-services', 'welding-fabrication'],
  },
  {
    id: 'hep',
    slug: 'hep',
    description:
      'Inspection, risk assessment, repair, and replacement of High Energy Piping (HEP) systems in power generation facilities, executed per ASME B31.1 Covered Piping System (CPS) program requirements.',
    longDescription: [
      'High Energy Piping (HEP) refers to steam piping systems operating at temperatures above 750°F (399°C) and pressures above 775 psi — conditions under which conventional carbon and low-alloy steels degrade through creep, fatigue, and flow-accelerated corrosion. Failures in HEP systems are catastrophic: high-energy steam releases cause fatalities, destroy adjacent equipment, and result in extended outages. The ASME B31.1 2020 code mandates formal Covered Piping System (CPS) inspection programs for these systems in power plants.',
      'MAC Industrial Services provides HEP repair and replacement services for the main steam, hot reheat, cold reheat, and boiler feedwater piping systems that form the circulatory system of a power plant. Our specialty is the P91, P22, and P9 chrome-moly alloy welds that are most prone to Type IV creep damage — and where improper repair welding has historically caused catastrophic in-service failures. Every P91 weld made by MAC crews is backed by material certificates, qualified procedures, calibrated preheat and PWHT records, and hardness test documentation.',
      'MAC also supports HEP program development for clients establishing or updating their ASME B31.1 CPS compliance programs. This includes system walkdowns, weld catalog development, risk-based inspection prioritization, and work scope development for repair outages — providing clients with a complete roadmap from inspection findings to certified repairs.',
    ],
    highlights: [
      'P91, P22, P9, and P5 alloy HEP weld repair capability',
      'Calibrated preheat, PWHT, and hardness testing documentation',
      'ASME B31.1 CPS program compliance support',
      'Weld catalog development and risk-based inspection support',
      'Creep damage assessment and fitness-for-service support',
      'In-situ pipe cutting, fitting, and welding',
      'NDE coordination: UT-phased array, TOFD, creep replication',
    ],
    applications: [
      'Main steam and hot reheat piping in utility power plants',
      'Superheater outlet and crossover piping',
      'Boiler feedwater and economizer inlet piping',
      'Extraction steam and auxiliary steam piping',
      'Industrial cogeneration and district heating HEP systems',
    ],
    standards: [
      'ASME B31.1 – Power Piping (including Chapter VII CPS requirements)',
      'ASME Section IX – Welding and Brazing Qualifications',
      'ASME PCC-2 – Repair of Pressure Equipment and Piping',
      'API 579-1/ASME FFS-1 – Fitness for Service',
      'EPRI Guidelines for P91 Welding and PWHT',
    ],
    faqs: [
      {
        question: 'What is Type IV creep cracking and why is it dangerous in P91 systems?',
        answer:
          'Type IV cracking occurs in the fine-grained heat-affected zone of welds in creep-resistant steels like P91. This zone is microstructurally weakened during welding, and under sustained high-temperature service, it degrades faster than the base metal or weld metal. Type IV failures are typically not detectable by visual inspection until catastrophic failure — making proper initial weld quality and periodic in-service inspection critical.',
      },
      {
        question: 'What NDE methods are used for HEP inspection?',
        answer:
          'The most effective NDE for HEP welds includes phased array UT (PAUT), time-of-flight diffraction (TOFD), and creep replication (metallographic replication) for surface condition assessment. Standard RT and MT are also used as appropriate. MAC coordinates with qualified NDE contractors or client inspection teams and uses findings to prioritize repair scope.',
      },
      {
        question: 'Can MAC execute HEP repairs while the plant is in service (online)?',
        answer:
          'Most HEP weld repairs require the system to be depressurized, drained, and isolated — they cannot be performed online. However, some upstream inspection and documentation activities can occur during operations. MAC works with clients to scope repair activities within planned outage windows and, where code-permitted, to execute temporary repair measures that allow extended operation until the next outage.',
      },
    ],
    relatedServiceIds: ['welding-fabrication', 'outage-services', 'emergency-response'],
  },
  {
    id: 'papermill',
    slug: 'papermill',
    description:
      'Specialized maintenance and outage services for the pulp and paper industry — covering digesters, evaporators, recovery boilers, washers, press rolls, and associated mechanical systems.',
    longDescription: [
      'Pulp and paper mills operate continuous processes where scheduled shutdowns — "paper machine downtime" — must be used with maximum efficiency and unplanned failures carry enormous production cost. MAC Industrial Services has direct experience maintaining the specialized equipment of the pulp and paper process: kraft recovery boilers, chemical recovery smelt systems, multi-effect evaporators, digesters, lime kilns, bleach plant equipment, and the paper machine itself.',
      "Recovery boiler maintenance is perhaps the most safety-critical discipline in the papermill environment. A recovery boiler explosion caused by water contact with smelt is among the most dangerous industrial accidents possible. MAC's crews are trained in the specific hazards of black liquor-fired recovery boiler work, including the lockout, draining, and purging procedures required before entry, and the tube inspection and replacement techniques used on the furnace walls, superheaters, and generating bank.",
      'Beyond recovery boilers, MAC provides maintenance services across the entire mill — from digester pressure vessel repairs and evaporator tube bundle cleaning and replacement, to paper machine press roll and dryer section mechanical maintenance, and piping and structural work throughout. Our teams work within the compressed shutdown windows typical of paper mills, with the craft depth to run multiple concurrent work packages efficiently.',
    ],
    highlights: [
      'Recovery boiler tube repair and inspection',
      'Digester and evaporator pressure vessel maintenance',
      'Paper machine mechanical maintenance',
      'Press roll and dryer section work',
      'Lime kiln mechanical and refractory support',
      'Bleach plant equipment and piping maintenance',
      'Compressed-window shutdown execution',
    ],
    applications: [
      'Kraft pulp recovery boilers',
      'Chemical recovery and evaporation systems',
      'Paper machine wet end and dryer section',
      'Lime kiln and causticizing plant equipment',
      'Bleach plant equipment and piping',
      'Pulp digester systems',
    ],
    standards: [
      'ASME Section I – Power Boilers (recovery boiler pressure parts)',
      'TAPPI Guidelines for Recovery Boiler Inspection',
      'API 510 – Pressure Vessel Inspection (digesters and evaporators)',
      'BLRBAC (Black Liquor Recovery Boiler Advisory Committee) – Safe Firing Guidelines',
      'OSHA 29 CFR 1910.146 – Confined Space Entry',
    ],
    faqs: [
      {
        question: 'What are the unique hazards of working in a kraft recovery boiler?',
        answer:
          "The primary hazard is water-smelt explosions, which occur if water contacts molten smelt (a mixture of sodium carbonate and sodium sulfide that pools at the boiler floor). All MAC crews working in or around recovery boilers are trained on BLRBAC safe firing guidelines, the specific lockout and draining procedures required before entry, and the emergency procedures for water intrusion events.",
      },
      {
        question: 'Can MAC execute paper machine maintenance within a weekend shutdown window?',
        answer:
          'Yes. Paper machine shutdowns are often 48–72 hours, and MAC has planned and executed complex mechanical maintenance scopes within these windows. Success depends on detailed pre-planning: all materials staged, work packages written, and crews briefed before the machine goes down. MAC project managers specialize in this type of compressed-window execution.',
      },
    ],
    relatedServiceIds: ['industrial-maintenance', 'outage-services', 'welding-fabrication'],
  },
  {
    id: 'equipment-setting',
    slug: 'equipment-setting',
    description:
      'Precision installation, setting, leveling, and alignment of rotating and static industrial equipment — ensuring optimal performance, reduced vibration, and extended bearing and seal life from day one.',
    longDescription: [
      'The long-term reliability of industrial rotating equipment — pumps, compressors, turbines, fans, gearboxes — is established at installation. Equipment that is improperly leveled, shimmed, or aligned from the outset suffers elevated vibration, accelerated bearing wear, coupling failures, and seal leaks from early in its service life. MAC Industrial Services provides precision equipment setting and alignment services that establish the correct foundation for reliable long-term operation.',
      'MAC crews use laser alignment systems and precision optical instruments to verify shaft alignment to the tolerances specified by OEM guidelines and industry standards including API RP 686. We perform both cold (static) alignment and — for critical rotating machinery — final hot alignment verification after the equipment has reached operating temperature, accounting for the thermal growth that shifts shaft centerlines during normal operation.',
      'Equipment setting encompasses more than alignment. MAC provides complete installation support including foundation chipping and cleaning, precision grouting, baseplate and sole plate leveling, anchor bolt tensioning, and coordination with piping stress analysis requirements. For large or heavy equipment, we work with rigging and crane contractors to execute safe, controlled lifts and final placement to the tolerances that precision alignment requires.',
    ],
    highlights: [
      'Laser shaft alignment to API RP 686 tolerances',
      'Hot alignment verification after thermal stabilization',
      'Precision grouting and baseplate leveling',
      'Foundation preparation and sole plate installation',
      'Anchor bolt tensioning and verification',
      'Heavy equipment setting and rigging coordination',
      'Pre- and post-installation alignment reports',
    ],
    applications: [
      'Centrifugal pump and compressor installation',
      'Gas and steam turbine generator sets',
      'Large industrial fans and blowers',
      'Gearbox and drive train installation',
      'Cooling tower fan deck equipment',
      'Pulp and paper machine roll alignment',
    ],
    standards: [
      'API RP 686 – Recommended Practice for Machinery Installation',
      'API 610 – Centrifugal Pumps for Petroleum, Petrochemical, and Natural Gas Industries',
      'ANSI/HI 1.4 – Centrifugal Pump Installation and Operation',
      'OEM alignment and tolerance specifications',
    ],
    faqs: [
      {
        question: 'What is the difference between cold and hot alignment?',
        answer:
          "Cold alignment is performed at ambient temperature before startup and sets the baseline for shaft concentricity between driver and driven equipment. Hot alignment is performed after the equipment reaches normal operating temperature, accounting for thermal growth in shaft, bearing, and support structures. Critical rotating machinery should have both performed — cold alignment to establish installation baseline, and hot alignment verification to confirm acceptable running condition after thermal stabilization.",
      },
      {
        question: 'Why does precision grouting matter for equipment alignment?',
        answer:
          'Grout transfers the static and dynamic loads from the equipment baseplate to the foundation, and voids or disbonds in grout allow the baseplate to flex under load — shifting alignment over time. MAC uses epoxy and cementitious grouting materials appropriate to the load and vibration environment, and follows ASTM and OEM requirements for mixing, placement, and curing to ensure solid, void-free support.',
      },
    ],
    relatedServiceIds: ['capital-projects', 'industrial-maintenance'],
  },
  {
    id: 'firewater-piping',
    slug: 'firewater-piping',
    description:
      'Design-assist, fabrication, installation, testing, and maintenance of industrial fire protection water distribution systems — ensuring NFPA 25 compliance and reliable emergency response capability.',
    longDescription: [
      'Industrial fire protection systems are passive infrastructure that must perform flawlessly on demand — after years of sitting dormant. A firewater system that fails to deliver adequate flow and pressure during an emergency has catastrophic consequences. MAC Industrial Services provides complete firewater piping services: new system installation, system extensions, riser and main replacement, sprinkler head maintenance, and testing and inspection programs aligned with NFPA 25 requirements.',
      'Industrial firewater systems present unique construction challenges: large-diameter carbon steel headers, underground distribution mains, above-ground rack piping, deluge systems for equipment protection, foam-water systems for flammable liquid hazards, and the tie-ins to fire pumps, tanks, and municipal water supply that form the system backbone. MAC crews are experienced across all of these system types and the code requirements governing their installation and testing.',
      "System integrity testing — including hydrostatic pressure testing, flow testing, and functional testing of detection and suppression systems — is a critical final step that MAC coordinates with client fire protection engineers and local AHJ (Authority Having Jurisdiction) representatives. We document every test per NFPA 25 requirements and provide turnover packages that support the plant's ongoing inspection and testing program.",
    ],
    highlights: [
      'New firewater system installation and system extensions',
      'Underground and above-ground distribution piping',
      'Sprinkler, deluge, and foam-water system experience',
      'Hydrostatic and flow testing per NFPA 13 and NFPA 25',
      'Firewater pump room piping and appurtenances',
      'Ongoing NFPA 25 inspection and testing support',
      'AHJ coordination and turnover documentation',
    ],
    applications: [
      'Power generation plant fire protection systems',
      'Industrial plant and chemical facility fire suppression',
      'Oil and gas facility firewater systems',
      'Warehouse and storage facility sprinkler systems',
      'Airport and transportation infrastructure fire protection',
      'Commercial and institutional building fire suppression',
    ],
    standards: [
      'NFPA 13 – Standard for the Installation of Sprinkler Systems',
      'NFPA 14 – Standard for the Installation of Standpipe and Hose Systems',
      'NFPA 15 – Standard for Water Spray Fixed Systems',
      'NFPA 25 – Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems',
      'NFPA 20 – Standard for the Installation of Stationary Pumps for Fire Protection',
    ],
    faqs: [
      {
        question: 'How often are industrial firewater systems required to be tested?',
        answer:
          'NFPA 25 establishes a tiered inspection and testing schedule: weekly, monthly, quarterly, annual, and 5-year testing requirements depending on the system component. Fire pumps are typically tested weekly for churn (no-flow) operation and annually for full-flow performance. MAC can develop and execute a complete NFPA 25 program to keep a facility in compliance.',
      },
      {
        question: 'Can MAC work on underground firewater mains without a facility shutdown?',
        answer:
          "Most underground main work requires temporary isolation of system segments, which is coordinated with the client's fire protection and safety teams. MAC develops isolation plans that minimize the time any portion of the facility is unprotected, and we coordinate with local fire departments when required by code or client policy.",
      },
    ],
    relatedServiceIds: ['emergency-response', 'capital-projects', 'industrial-maintenance'],
  },
  {
    id: 'structural-steel',
    slug: 'structural-steel',
    description:
      'Structural steel erection, refurbishment, and repair for industrial platforms, equipment supports, boiler structures, cooling towers, and other load-bearing steel frameworks in operating industrial facilities.',
    longDescription: [
      'Structural steel in industrial plants carries more than just static loads — it supports operating equipment under dynamic loads, thermal cycling, vibration, and in many cases, corrosive atmospheres that cause progressive section loss. MAC Industrial Services provides structural steel erection for new construction and capital projects, as well as repair and refurbishment of existing steel in operating facilities where degradation or damage has compromised structural integrity.',
      'In the power generation and heavy industrial environment, the most demanding structural work occurs in the boiler structure, stack structure, cooling tower structure, and the platforms and access systems that maintenance crews depend on. MAC has direct experience with all of these applications — including the combination of restricted access, elevated work, and concurrent plant operations that make industrial structural work more complex than commercial construction.',
      'MAC structural crews work from engineered drawings with the necessary qualifications for structural steel welding (AWS D1.1) and bolted connections (AISC 360). Where repairs involve existing code-designed structures, we work with engineers of record or provide structural engineering coordination to ensure that repairs restore structural capacity to the original design basis and satisfy applicable building and boiler codes.',
    ],
    highlights: [
      'New structural steel erection and capital projects',
      'Repair and refurbishment of corrosion-degraded steel',
      'Boiler structure, stack, and cooling tower structural work',
      'Industrial platform, walkway, and access system construction',
      'AWS D1.1 and AISC 360 qualified connections',
      'Heavy lift coordination for structural components',
      'Engineering coordination for code-compliant repairs',
    ],
    applications: [
      'Boiler structure and penthouse framing',
      'Stack structural repair and access system replacement',
      'Cooling tower structural refurbishment',
      'Industrial equipment platforms and mezzanines',
      'Pipe rack and cable tray support steel',
      'Plant expansion and greenfield structural erection',
    ],
    standards: [
      'AISC 360 – Specification for Structural Steel Buildings',
      'AWS D1.1 – Structural Welding Code – Steel',
      'AISC 303 – Code of Standard Practice for Steel Buildings and Bridges',
      'IBC (International Building Code) – structural loads and connection requirements',
      'ASME Boiler and Pressure Vessel Code – boiler structure support requirements',
    ],
    faqs: [
      {
        question: 'Can MAC repair structural steel while the plant remains in operation?',
        answer:
          'Yes, subject to engineering analysis that confirms structural capacity during the repair sequence and appropriate hazard controls for hot work, elevated work, and operation of adjacent equipment. MAC works with the engineering team to develop a staged repair plan that maintains structural integrity throughout the repair process.',
      },
      {
        question: 'How does MAC assess the extent of corrosion damage in structural steel?',
        answer:
          'Assessment begins with visual inspection to identify areas of visible section loss, then progresses to thickness measurement using UT or mechanical measurement tools. For structural members, section loss is evaluated against design basis loads to determine whether repair or replacement is required. MAC can coordinate with structural engineers to perform formal fitness-for-service evaluations.',
      },
    ],
    relatedServiceIds: ['capital-projects', 'outage-services', 'welding-fabrication'],
  },
  {
    id: 'so2-scrubber',
    slug: 'so2-scrubber',
    description:
      'Repair, upgrade, and maintenance of wet and dry flue gas desulfurization (FGD) scrubber systems — absorber towers, slurry recirculation systems, mist eliminators, and associated structural and process piping.',
    longDescription: [
      "Sulfur dioxide (SO₂) scrubbers — more formally called flue gas desulfurization (FGD) systems — are among the most complex and maintenance-intensive pollution control systems in coal-fired power generation. These systems handle highly corrosive limestone and gypsum slurries at elevated temperatures, making materials degradation a constant challenge. Unplanned FGD failures can force unit derate or shutdown and expose owners to regulatory penalties for emissions exceedances. MAC Industrial Services provides the repair and maintenance services to keep FGD systems performing reliably.",
      'The absorber tower is the heart of a wet FGD system — and the primary site of degradation. Tower internals including mist eliminator modules, spray header systems, oxidation air distribution headers, agitator mechanical systems, and the rubber or alloy lining systems that protect the steel shell all require regular inspection and maintenance. MAC crews work within absorber towers during outages to replace damaged mist eliminator modules, repair spray nozzle headers, patch or replace deteriorated liner systems, and perform structural repairs to the tower shell and support structure.',
      'Beyond the absorber, MAC provides maintenance and repair services for slurry recirculation pump sumps and piping, absorber bypass damper systems, gypsum dewatering equipment foundations, and the structural steel and FRP (fiber-reinforced plastic) platforms that provide access to FGD system components. We are experienced with the slurry-service piping materials used in FGD systems — rubber-lined carbon steel, alloy steel, and HDPE — and the joining methods appropriate to each.',
    ],
    highlights: [
      'Absorber tower internal replacement and repair',
      'Mist eliminator module replacement',
      'Spray nozzle header repair and replacement',
      'Tower lining inspection, patch, and replacement',
      'Slurry pump and piping system maintenance',
      'Oxidation air distribution system repair',
      'FGD structural steel and FRP platform work',
    ],
    applications: [
      'Wet limestone FGD scrubbers (coal-fired utility plants)',
      'Dry and semi-dry FGD systems',
      'SO₂ scrubbers in waste incineration facilities',
      'Industrial SO₂ control systems in smelters and refineries',
      'Acid gas control systems in cement and lime kilns',
    ],
    standards: [
      'NFPA 68 – Standard on Explosion Protection by Deflagration Venting',
      'EPA 40 CFR Part 60 – New Source Performance Standards (NSPS)',
      'ASME PCC-2 – Repair of Pressure Equipment and Piping',
      'ASTM D4787 – Standard Practice for Continuity Verification of Liquid or Sheet Linings',
      'Manufacturer/OEM maintenance specifications for FGD components',
    ],
    faqs: [
      {
        question: 'How corrosive is the environment inside a wet FGD absorber?',
        answer:
          "Very. The absorber interior is continuously exposed to acidic limestone slurry, saturated flue gas with SO₂, SO₃, HCl, and HF, and oxidized gypsum slurry. Carbon steel without protective lining degrades rapidly in this environment. Absorber shells are typically lined with rubber, fiberglass, or alloy coatings. MAC crews working inside absorbers follow client-specific PPE and air monitoring requirements, and use lining-compatible repair materials.",
      },
      {
        question: 'What causes mist eliminator failure and when do they need replacement?',
        answer:
          'Mist eliminators can fail from plugging by calcium scale or gypsum buildup, physical damage from debris or high-velocity flow, chemical degradation of the mist eliminator material, or warping from thermal cycling. Failed mist eliminators allow liquid carryover that can damage downstream ductwork and fans. MAC can assess mist eliminator condition during an absorber inspection and replace individual modules or full banks as required.',
      },
    ],
    relatedServiceIds: ['outage-services', 'industrial-maintenance', 'capital-projects'],
  },
  {
    id: 'catalyst',
    slug: 'catalyst',
    description:
      'Safe, efficient catalyst removal, handling, and fresh catalyst loading services for fixed-bed reactors, hydrotreaters, hydrodesulfurization units, and other catalytic process vessels in refinery and petrochemical facilities.',
    longDescription: [
      'Catalyst changeouts are among the most safety-critical and schedule-sensitive activities in a refinery or petrochemical turnaround. Spent catalyst removal and fresh catalyst loading must be executed safely — protecting workers from toxic and pyrophoric hazards — while meeting the tight loading specifications that determine reactor performance and catalyst guarantee compliance. MAC Industrial Services provides complete catalyst handling services with the safety programs, specialized equipment, and experienced personnel that catalyst vendors and facility operators require.',
      'Catalyst handling presents unique hazards that require specific protocols. Spent catalysts in hydrotreating and hydrocracking service typically contain metals sulfides that are pyrophoric — they ignite spontaneously when exposed to air unless properly passivated. Nitrogen inert atmospheres, proprietary passivation chemistry (such as CATnap® technology), and vacuum unloading systems are the tools used to manage pyrophoric risk while maintaining worker safety and schedule efficiency. MAC crews are trained in all standard pyrophoric handling protocols and work directly with catalyst vendors to ensure passivation is applied correctly.',
      'On the loading side, dense loading technology maximizes the volume of catalyst charged into each reactor — increasing reactor capacity and optimizing the contact time between process streams and catalyst. Accurate loading with proper density and orientation is critical to uniform flow distribution and catalyst performance. MAC uses calibrated loading equipment and provides loading reports that document fill heights, weights, and density measurements per catalyst vendor and client requirements.',
    ],
    highlights: [
      'Pyrophoric spent catalyst handling — inert and passivated protocols',
      'Vacuum unloading for non-free-flow catalyst',
      'Dense loading for maximum reactor capacity',
      'Nitrogen inert atmosphere management',
      'Complete "blind-to-blind" reactor scope available',
      'Catalyst screening, packaging, and disposal coordination',
      'Loading reports and density documentation',
    ],
    applications: [
      'Hydrotreater and hydrocracker catalyst changeouts',
      'Hydrodesulfurization (HDS) unit catalyst service',
      'Reformer catalyst handling',
      'Selective Catalytic Reduction (SCR) catalyst handling in power plants',
      'Industrial fixed-bed reactor turnarounds',
    ],
    standards: [
      'OSHA 1910.146 – Permit Required Confined Space Entry',
      'OSHA 1910.119 – Process Safety Management (PSM)',
      'API RP 577 – Welding Processes, Inspection, and Metallurgy',
      'Catalyst vendor technical specifications and handling guidelines',
      'Facility process safety procedures for pyrophoric materials',
    ],
    faqs: [
      {
        question: 'What is a pyrophoric catalyst and how is it handled safely?',
        answer:
          'Pyrophoric catalysts contain metal sulfides (typically nickel, cobalt, or molybdenum sulfides) that react exothermically with oxygen, generating enough heat to ignite spontaneously. Safe handling requires either maintaining an inert nitrogen atmosphere during unloading, or applying chemical passivation to stabilize the sulfide surface before exposure to air. MAC crews are trained in both approaches and work with catalyst vendors to apply the appropriate passivation treatment during reactor shutdown.',
      },
      {
        question: 'What is dense loading and why does it matter?',
        answer:
          "Dense loading uses specialized loading equipment (typically a sock loader or oriented loading technique) to orient and pack catalyst particles more uniformly than gravity sock loading. Properly dense-loaded reactors contain 10–20% more catalyst by weight, achieve better flow distribution, and exhibit less channeling — translating to improved conversion efficiency and longer catalyst life. MAC provides calibrated loading equipment and density measurements to verify target fill is achieved.",
      },
    ],
    relatedServiceIds: ['outage-services', 'capital-projects'],
  },
  {
    id: 'hdpe-piping',
    slug: 'hdpe-piping',
    description:
      'Fabrication and installation of High-Density Polyethylene (HDPE) piping systems for industrial water, chemical, and process service — using butt fusion and electrofusion joining methods to ASTM and ASME standards.',
    longDescription: [
      'High-Density Polyethylene (HDPE) piping has become the material of choice for a growing range of industrial applications where corrosion resistance, chemical compatibility, and long service life outweigh the higher initial material cost of thermoplastic versus steel. Industrial HDPE applications include cooling water systems, firewater systems, chemical service, mine dewatering, leachate collection, and scrubber process piping — anywhere that corrosion, scaling, or chemical attack would rapidly degrade steel pipe.',
      'HDPE pipe joints made by butt fusion or electrofusion are pressure-rated equal to the pipe itself when properly executed — they are not a mechanical joint that can loosen or corrode. Butt fusion involves heating pipe ends to melt temperature and pressing them together to form a molecular bond. Electrofusion uses a fitting with integral electrical heating elements to fuse the fitting to the pipe. Both methods require certified operators, calibrated fusion equipment, and proper procedure documentation. MAC crews maintain current fusion operator certifications and use calibrated equipment with traceable heat fusion records.',
      'For industrial applications, HDPE fabrication requires engineered spools, custom fittings, and integration with steel systems through flanged or mechanical transitions. MAC provides complete HDPE fabrication and installation services from material procurement through hydrostatic pressure testing and commissioning — with the documentation and quality records that industrial owners require.',
    ],
    highlights: [
      'Butt fusion and electrofusion certified operators',
      'Calibrated fusion equipment with traceable heat records',
      'Custom spool fabrication for industrial systems',
      'Steel-to-HDPE transition design and installation',
      'Hydrostatic pressure testing and commissioning',
      'ASTM D3261/F1055/F2206 compliant materials',
      'Industrial applications: cooling water, fire protection, chemical service',
    ],
    applications: [
      'Industrial cooling water distribution systems',
      'Firewater distribution and underground mains',
      'FGD/SO₂ scrubber process piping',
      'Chemical and acid distribution systems',
      'Leachate and landfill collection piping',
      'Mine dewatering and process water systems',
    ],
    standards: [
      'ASTM D3261 – Butt Heat Fusion Polyethylene (PE) Plastic Fittings',
      'ASTM F1055 – Electrofusion Type Polyethylene Fittings',
      'ASTM F2620 – Standard Practice for Heat Fusion Joining of Polyethylene Pipe and Fittings',
      'ASME B31.3 – Process Piping (for industrial process service)',
      'AWWA C906 – Polyethylene Pressure Pipe and Fittings',
    ],
    faqs: [
      {
        question: 'When should HDPE be specified over carbon steel piping?',
        answer:
          "HDPE is preferred over carbon steel in applications where corrosion from the fluid or external environment would reduce steel service life, where the fluid has a pH outside the range that carbon steel tolerates (approximately 5–10), or where scaling from hard water deposits would restrict flow in steel systems. HDPE is not appropriate for high-temperature service (above approximately 140°F / 60°C continuous) or high-pressure applications where steel is required by code.",
      },
      {
        question: 'How long does a butt fusion joint take, and what are the quality checks?',
        answer:
          'A standard butt fusion joint for 4–8 inch pipe takes approximately 30–45 minutes from pipe staging through completed joint. Quality verification includes visual inspection of the fusion bead for uniformity (both inner and outer bead must be present and symmetrical), bead height measurement, and review of the time/temperature/pressure data recorded by the fusion machine. For critical applications, destructive testing of sample joints is performed.',
      },
    ],
    relatedServiceIds: ['capital-projects', 'industrial-maintenance', 'emergency-response'],
  },
  {
    id: 'heat-exchanger',
    slug: 'heat-exchanger',
    description:
      'Maintenance, repair, retubing, and inspection of shell-and-tube, plate, air-cooled, and other industrial heat exchanger types — restoring thermal performance and pressure integrity to extend equipment service life.',
    longDescription: [
      'Heat exchangers are among the most universally deployed and maintenance-intensive pieces of equipment in industrial facilities. Whether they are cooling lubricating oil in a turbine, recovering heat in a process stream, or serving as the final condensers in a steam cycle, heat exchangers degrade through fouling, corrosion, erosion, and mechanical fatigue in both tube-side and shell-side systems. MAC Industrial Services provides comprehensive heat exchanger maintenance and repair services that restore thermal efficiency and pressure integrity.',
      'Shell-and-tube heat exchangers — the dominant type in industrial service — require periodic bundle pulling and cleaning, tube inspection (eddy current, remote field, IRIS), tube plugging or replacement, and tubesheet inspection. MAC crews perform complete bundle pulls with appropriate rigging and handling to prevent damage, then high-pressure water jet cleaning or mechanical cleaning of tube bores, followed by inspection and any required repair welding of tube-to-tubesheet joints or shell components.',
      'For air-cooled exchangers (fin-fan coolers), maintenance focuses on fin bundle cleaning, tube integrity inspection, nozzle and header box inspection, and fan drive and bearing system maintenance. MAC also services plate-and-frame heat exchangers, providing gasket replacement, plate inspection and cleaning, and nozzle repair. All heat exchanger repair work performed under pressure code jurisdiction is executed per ASME PCC-2 and appropriately documented.',
    ],
    highlights: [
      'Shell-and-tube bundle pulls and retube services',
      'High-pressure water jet and mechanical tube cleaning',
      'Eddy current, IRIS, and remote field tube inspection',
      'Tube plugging per ASME and TEMA standards',
      'Tube-to-tubesheet weld repair and seal welding',
      'Air-cooled (fin-fan) exchanger maintenance',
      'Plate-and-frame gasket replacement and cleaning',
    ],
    applications: [
      'Power plant feedwater heaters and condensers',
      'Lube oil and seal oil coolers for rotating equipment',
      'Refinery and petrochemical process exchangers',
      'Industrial cooling water and process cooling systems',
      'Pulp and paper mill evaporators and condensers',
      'Chemical plant reboilers and process coolers',
    ],
    standards: [
      'TEMA (Tubular Exchanger Manufacturers Association) Standards',
      'ASME Section VIII Div. 1 – Pressure Vessel Code',
      'ASME PCC-2 – Repair of Pressure Equipment and Piping',
      'API 510 – Pressure Vessel Inspection Code',
      'HEI Standards for Steam Surface Condensers',
    ],
    faqs: [
      {
        question: 'How do I know when a heat exchanger needs retubing versus cleaning?',
        answer:
          "Cleaning restores thermal performance degraded by fouling deposits — it doesn't address tube wall degradation. Eddy current or IRIS inspection reveals tube wall thinning from corrosion or erosion. The decision to retube is typically made when inspection finds >20% wall loss in a significant portion of the tube bundle, or when tube failure frequency increases beyond acceptable levels. MAC can provide inspection services and a retubing recommendation based on actual tube condition data.",
      },
      {
        question: 'Can a heat exchanger be retubed in the field, or must it go to a shop?',
        answer:
          'Field retubing is common for large exchangers that are impractical to transport, for in-service facilities that cannot lose the exchanger for an extended period, or where scheduling favors field execution. MAC performs field retubing for shell-and-tube exchangers, including tube extraction, new tube rolling and/or welding, and hydrotest — all executed at the plant site.',
      },
    ],
    relatedServiceIds: ['industrial-maintenance', 'outage-services'],
  },
  {
    id: 'pressure-vessel',
    slug: 'pressure-vessel',
    description:
      'Inspection, fitness-for-service assessment, repair welding, and code-compliant restoration of pressure vessels operating under ASME Section VIII, API 510, and related pressure equipment regulations.',
    longDescription: [
      'Pressure vessels — columns, drums, reactors, condensers, and accumulators — are among the most heavily regulated pieces of equipment in industrial plants. Their failure under pressure can be catastrophic, and the codes governing their inspection, repair, and alteration are correspondingly stringent. MAC Industrial Services provides pressure vessel inspection support, repair welding, and code-compliant restoration services for operating plants where vessel integrity is a critical reliability and safety concern.',
      'The most common pressure vessel repair needs involve nozzle repairs (cracking, corrosion at weld heat-affected zones), shell plate corrosion requiring weld overlay or patch plate installation, manway and handhole nozzle replacement, and internal attachment repairs. MAC repair welders are qualified to the materials and positions required for these repairs, and all work is executed under the requirements of ASME PCC-2 and, where applicable, under National Board R-Stamp repair authority.',
      'For aging vessels exhibiting general or localized corrosion, weld overlay — also called cladding or hard-facing — is a code-accepted technique for restoring wall thickness without complete replacement. MAC can perform corrosion-resistant weld overlay using stainless steel or nickel-alloy filler materials in vessels where the process fluid is corrosive to the base metal. We also provide fitness-for-service support in coordination with inspection engineers to evaluate whether a vessel with identified defects can remain in service until the next planned inspection opportunity.',
    ],
    highlights: [
      'ASME Section VIII code-compliant repair welding',
      'Nozzle repair, replacement, and reinforcement',
      'Shell plate patch installation and weld repair',
      'Corrosion-resistant weld overlay (stainless, nickel alloy)',
      'Internal inspection support and defect characterization',
      'Post-repair NDE and hydrotest coordination',
      'NBIC R-Stamp repair documentation support',
    ],
    applications: [
      'Power plant flash tanks, deaerators, and feedwater heaters',
      'Refinery and petrochemical reactor vessels',
      'Chemical plant storage and process vessels',
      'Industrial compressed air and gas receivers',
      'Steam drum and steam separator maintenance',
      'FGD absorber vessel structural repair',
    ],
    standards: [
      'ASME Section VIII Div. 1 – Rules for Construction of Pressure Vessels',
      'ASME Section IX – Welding and Brazing Qualifications',
      'API 510 – Pressure Vessel Inspection Code',
      'ASME PCC-2 – Repair of Pressure Equipment and Piping',
      'NBIC NB-23 – National Board Inspection Code (R-Stamp repairs)',
    ],
    faqs: [
      {
        question: 'What is the R-Stamp and why does it matter for pressure vessel repair?',
        answer:
          "The R-Stamp is issued by the National Board of Boiler and Pressure Vessel Inspectors and authorizes repair organizations to perform repairs and alterations on code-stamped pressure equipment. R-Stamp repair work is documented on National Board Form R-1 and involves Authorized Inspection Agency (AIA) oversight. Repairs performed without R-Stamp authorization may invalidate the vessel's code stamp and create liability for the vessel owner.",
      },
      {
        question: 'What is fitness-for-service (FFS) assessment and when is it needed?',
        answer:
          'FFS assessment, performed under API 579-1/ASME FFS-1, evaluates whether a vessel with known damage or defects can continue safe operation until the next planned inspection or repair opportunity. It is used when inspection finds conditions (pitting, cracking, corrosion, dents) that exceed the acceptance criteria for continued service under standard inspection codes. MAC provides repair services and coordinates with inspection engineers to support the FFS process.',
      },
    ],
    relatedServiceIds: ['welding-fabrication', 'outage-services', 'industrial-maintenance'],
  },
]
