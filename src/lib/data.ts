export const NAV_LINKS = [
  { label: 'Company', href: '#company' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Industries', href: '#industries' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const STATS = [
  { value: 30, suffix: '+', label: 'Years of engineering' },
  { value: 120, suffix: '+', label: 'Active part numbers' },
  { value: 98.6, suffix: '%', label: 'On-time delivery', decimals: 1 },
  { value: 15, suffix: 'M+', label: 'Components shipped' },
];

export const CAPABILITIES = [
  {
    num: '01',
    title: 'Pressure Die Casting',
    spec: '120T — 800T',
    desc: 'High-pressure aluminium & zinc die casting engineered for thin walls, complex geometry and tight repeatability across ADC-12 and ZAMAK alloys.',
  },
  {
    num: '02',
    title: 'Gravity Die Casting',
    spec: 'LM-6 · LM-25',
    desc: 'GDC for structural components demanding superior mechanical properties, pressure tightness and full heat-treatability.',
  },
  {
    num: '03',
    title: 'CNC Machining',
    spec: '±10 µm',
    desc: 'Multi-axis VMC and turning centres delivering finish-machined castings to ten-micron tolerances — washed, deburred, line-ready.',
  },
  {
    num: '04',
    title: 'Tooling & Fixtures',
    spec: 'In-house',
    desc: 'Die design, tool room and fixture builds under one roof, compressing lead time from drawing to first article.',
  },
  {
    num: '05',
    title: 'Sub-Assemblies',
    spec: '100% traced',
    desc: 'Poka-yoke assembly stations with integrated leak testing, torque validation and component-level traceability.',
  },
  {
    num: '06',
    title: 'Surface Treatment',
    spec: 'Single PO',
    desc: 'Shot blasting, powder coating, anodising and chromating through audited partners — managed end to end.',
  },
];

export interface Product {
  img: string;
  category: string;
  tolerance: string;
  title: string;
  desc: string;
  material: string;
  weightRange: string;
  machinery: string;
  clients: string[];
}

export const PRODUCTS: Product[] = [
  {
    img: '/images/parts.jpg',
    category: 'Aluminium HPDC',
    tolerance: '±0.015 mm',
    title: 'Aluminium Cylinder Head Assemblies',
    desc: 'High precision multi-valve automotive cylinder heads with integrated cooling jackets and ultra-smooth combustion chambers.',
    material: 'Aluminium Alloy ADC12 / A356-T6',
    weightRange: '2.5 kg – 14.0 kg',
    machinery: '800-Ton Toshiba High Pressure Die Casting Cell & 5-Axis VMC',
    clients: ['Mahindra & Mahindra', 'Harley Davidson'],
  },
  {
    img: '/images/automotive.jpg',
    category: 'Aluminium HPDC',
    tolerance: '±0.012 mm',
    title: 'Precision Crankcase & Engine Blocks',
    desc: 'Heavy duty aluminium crankcases with cast-in iron liners engineered for high compression ratios and minimal vibration.',
    material: 'Aluminium Die Cast ADC10 / LM25',
    weightRange: '4.0 kg – 22.0 kg',
    machinery: '1200-Ton Buhler Die Casting Press & Horizontal CNC Centers',
    clients: ['Mahindra & Mahindra', 'Tata Motors OEM division'],
  },
  {
    img: '/images/gears.jpg',
    category: 'Aluminium LPDC/GDC',
    tolerance: '±0.020 mm',
    title: 'High Performance Transmission Housings',
    desc: 'Complex thin-walled transmission gear cases engineered for maximum heat dissipation and weight optimization.',
    material: 'Low Pressure Die Cast AlSi7Mg',
    weightRange: '3.0 kg – 18.0 kg',
    machinery: 'LPDC Automatic Casting Station & High Speed Milling Machines',
    clients: ['Endurance Tech', 'Bajaj Auto'],
  },
  {
    img: '/images/factory.jpg',
    category: 'Ductile / SG Iron',
    tolerance: '±0.025 mm',
    title: 'Ductile & Cast Iron (CI) Heavy Brake Housings',
    desc: 'High tensile nodular cast iron brake callipers and steering knuckles designed for high impact loads and extreme thermal cycles.',
    material: 'Spheroidal Graphite Iron (SG Iron GGG50 / EN-GJS-500-7)',
    weightRange: '5.0 kg – 35.0 kg',
    machinery: 'Automatic Disamatic Moulding Line & Heavy VMC Cells',
    clients: ['Mahindra Heavy Commercials', 'Endurance Tech'],
  },
  {
    img: '/images/cnc.jpg',
    category: 'Tooling & Fixture',
    tolerance: '±0.005 mm (5 Microns)',
    title: 'Intricate Hydraulic Clamping Jigs & Fixtures',
    desc: 'Custom engineered high-density hydraulic clamping machining fixtures for multi-axis CNC production lines.',
    material: 'Hardened Tool Steel H13 / P20 / Alloy Steels',
    weightRange: '20 kg – 450 kg',
    machinery: '5-Axis CNC Precision Jig Borer & Wire-EDM Electro-discharge machines',
    clients: ['Mahindra & Mahindra', 'Harley Davidson Tier-1 Units'],
  },
  {
    img: '/images/gallery2.jpg',
    category: 'Aluminium HPDC',
    tolerance: '±0.010 mm',
    title: 'High-Speed Camshaft & Valve Gear Housings',
    desc: 'Compact lightweight valve train covers and camshaft carriers with integrated oil gallery paths.',
    material: 'Aluminium Die Cast ADC12',
    weightRange: '0.8 kg – 5.5 kg',
    machinery: '500-Ton High Speed Cold Chamber Die Casting Machine & Robot-loaded VMCs',
    clients: ['Harley Davidson', 'Royal Enfield'],
  },
  {
    img: '/images/quality.jpg',
    category: 'Tooling & Fixture',
    tolerance: '±0.005 mm',
    title: 'Custom Mould Die Inserts & Tooling Cores',
    desc: 'Precision CAD-designed die casting mould inserts, core sliders, and cooling channel cores with conformal cooling technology.',
    material: 'Premium Die Steel SKD61 / Dievar',
    weightRange: '10 kg – 1,200 kg',
    machinery: 'High-Speed CNC Milling (30,000 RPM) & Sinker EDM Machine',
    clients: ['In-house Foundries & External Tier-1 Tooling Clients'],
  },
  {
    img: '/images/hero.jpg',
    category: 'Aluminium HPDC',
    tolerance: '±0.008 mm',
    title: 'Connecting Rods & Engine Pistons Components',
    desc: 'Forged and die cast high-strength aluminium connecting rods and balanced piston assemblies.',
    material: 'High Silicon Aluminium Alloy AlSi12CuNiMg',
    weightRange: '0.3 kg – 2.8 kg',
    machinery: 'Rotary Transfer Automated Machining Line & Optical Profile Projector',
    clients: ['Mahindra Powertrains', 'Endurance Tech'],
  },
];

export const PROCESS = [
  { step: '01', title: 'RFQ & Feasibility', desc: 'DFM review, alloy selection and simulation-backed costing returned within 72 hours.' },
  { step: '02', title: 'Tooling & Trials', desc: 'In-house die build, T0–T2 trials and full dimensional layout reports.' },
  { step: '03', title: 'PPAP & Validation', desc: 'Complete PPAP documentation, capability studies and customer sign-off.' },
  { step: '04', title: 'Serial Production', desc: 'SPC-monitored production with kanban scheduling and JIT dispatch.' },
];

export const INDUSTRIES = [
  { name: 'Automotive OEM', detail: '2W · 4W · CV platforms' },
  { name: 'Electric Mobility', detail: 'Motor housings · Battery enclosures' },
  { name: 'Industrial Equipment', detail: 'Pumps · Compressors · Gearboxes' },
  { name: 'Electricals', detail: 'Switchgear · LED thermal housings' },
  { name: 'Agri Machinery', detail: 'Transmission & hydraulic parts' },
];

export const TICKER_ITEMS = [
  'Pressure Die Casting', 'CNC Machining', 'Gravity Die Casting',
  'Tooling & Fixtures', 'Sub-Assemblies', 'ADC-12', 'LM-25', 'ZAMAK',
];
