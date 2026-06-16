import type {
  MetricCard,
  ExperienceItem,
  ProjectItem,
  AchievementItem,
  ExpertiseCategory,
  NavItem,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'metrics', label: 'Impact', href: '#metrics' },
  { id: 'expertise', label: 'Expertise', href: '#expertise' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'achievements', label: 'Awards', href: '#achievements' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const HERO_KPIS = [
  { value: '9+', label: 'Years Experience', sublabel: 'AP & FinOps' },
  { value: '3', label: 'Global Organizations', sublabel: 'Fortune 500' },
  { value: '10+', label: 'Process Improvements', sublabel: 'Documented' },
  { value: '898+', label: 'Hours Saved', sublabel: 'Through Automation' },
];

export const METRICS: MetricCard[] = [
  { id: 'exp', value: '9+', label: 'Years Experience', sublabel: 'In Finance Operations' },
  { id: 'companies', value: '3', label: 'Enterprise Companies', sublabel: 'Ecolab · Amazon · Infosys' },
  { id: 'awards', value: '10+', label: 'Individual Awards', sublabel: 'RnR & Extra Mile' },
  { id: 'hours', value: '898+', label: 'Hours Saved', sublabel: 'Automation Projects' },
  { id: 'platforms', value: '5+', label: 'Major Platforms', sublabel: 'SAP · Oracle · Concur' },
  { id: 'roles', value: '3', label: 'Senior Roles', sublabel: 'Progressively Promoted' },
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: 'ap',
    title: 'Accounts Payable',
    icon: 'FileText',
    description: 'End-to-end invoice lifecycle management',
    skills: [
      '2-Way & 3-Way Matching',
      'Invoice Processing',
      'Vendor Payments',
      'Reconciliation',
      'EDI Management',
      'Manual Payment Resolution',
    ],
  },
  {
    id: 'systems',
    title: 'Financial Systems',
    icon: 'Database',
    description: 'Enterprise platform expertise',
    skills: ['SAP S/4HANA', 'Oracle ERP', 'Concur T&E', 'Amazon QuickSight', 'FactBI', 'MS Excel Advanced'],
  },
  {
    id: 'reporting',
    title: 'Reporting & Analytics',
    icon: 'BarChart3',
    description: 'Data-driven financial insights',
    skills: ['Aging Reports', 'Vendor Analysis', 'P&L Dashboards', 'Accrual Reporting', 'Supplier Analytics', 'KPI Dashboards'],
  },
  {
    id: 'compliance',
    title: 'Compliance & Controls',
    icon: 'Shield',
    description: 'Regulatory adherence and risk management',
    skills: ['SOX Compliance', 'GST Compliance', 'Audit Support', 'Internal Controls', 'Citibank Reconciliation', 'P2P Controls'],
  },
  {
    id: 'te',
    title: 'Travel & Expense',
    icon: 'CreditCard',
    description: 'T&E policy enforcement and processing',
    skills: [
      'T&E Policy Management',
      'Concur Administration',
      'Expense Auditing',
      'Policy Compliance',
      'Employee Support',
      'Reimbursement Processing',
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & SME',
    icon: 'Users',
    description: 'Team development and knowledge management',
    skills: ['SME Operations', 'Team Allocation', 'Mentorship', 'SOP Documentation', 'Training', 'Stakeholder Management'],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'ecolab',
    company: 'Ecolab',
    role: 'Senior Accounting Analyst – AP/T&E SME',
    period: 'Nov 2024 – Present',
    location: 'Pune, India',
    current: true,
    highlights: [
      'End-to-end AP operations ownership across global vendor base',
      'Vendor reconciliation and dispute resolution at enterprise scale',
      'SOX compliance controls implementation and monitoring',
      'Citibank corporate card reconciliation and exception handling',
      'Team mentorship and new joiner onboarding as Subject Matter Expert',
      'Process optimization initiatives reducing cycle times',
    ],
    tags: ['AP Operations', 'SOX Compliance', 'Vendor Reconciliation', 'T&E', 'SME'],
    color: '#0F766E',
  },
  {
    id: 'amazon',
    company: 'Amazon',
    role: 'Senior FinOps Analyst – AP SME',
    period: 'Oct 2019 – Nov 2024',
    location: 'Hyderabad, India',
    current: false,
    highlights: [
      'FinOps operations for high-volume invoice processing environment',
      'P&L dashboard reporting and analytics via Amazon QuickSight',
      'Supplier analytics and vendor performance management',
      'Led process transitions across multiple operational teams',
      'Automation projects saving 898+ hours annually',
      'Manual payment exception resolution and root cause analysis',
      'Vendor performance improvement programs',
    ],
    tags: ['FinOps', 'P&L Reporting', 'Automation', 'Analytics', 'Process Transition'],
    color: '#FF9900',
  },
  {
    id: 'infosys',
    company: 'Infosys',
    role: 'Senior Account Assistant',
    period: 'Jun 2017 – Oct 2019',
    location: 'Pune, India',
    current: false,
    highlights: [
      'P2P operations lifecycle management in shared services',
      'SAP invoice processing for global client accounts',
      'Travel & expense claims processing and audit',
      'GST compliance monitoring and reporting',
      'Vendor support and query resolution',
    ],
    tags: ['P2P', 'SAP', 'GST Compliance', 'T&E', 'Shared Services'],
    color: '#1A73E8',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'invoice-automation',
    title: 'Invoice Priority Automation',
    company: 'Amazon',
    impact: '627 Hours Saved Annually',
    impactValue: '627',
    description:
      'Designed and implemented an automated invoice prioritization system eliminating manual extraction workflows, reducing batch cancellation cycles, and improving payment accuracy across the AP operation.',
    outcomes: [
      'Reduced batch cancellation cycle time significantly',
      'Improved payment accuracy and on-time vendor payments',
      'Eliminated manual extraction work for priority invoices',
      'Standardized prioritization logic across processing teams',
    ],
    tags: ['Automation', 'Invoice Processing', 'Process Design', 'AP Operations'],
  },
  {
    id: 'purchase-variance',
    title: 'Purchase Variance Reduction Initiative',
    company: 'Amazon',
    impact: 'Improved Matching Accuracy',
    description:
      'Led a cross-functional initiative to identify root causes of purchase quantity variances and implement corrective controls. Reduced shortages and improved 3-way matching accuracy, delivering measurable efficiency gains.',
    outcomes: [
      'Reduced quantity variance rates across vendor categories',
      'Reduced invoice shortages through upstream controls',
      'Improved 3-way matching process accuracy',
      'Enhanced operational efficiency metrics',
    ],
    tags: ['3-Way Matching', 'Variance Analysis', 'Process Improvement', 'Vendor Management'],
  },
  {
    id: 'edi-rejection',
    title: 'EDI Invoice Rejection Reduction',
    company: 'Amazon',
    impact: '271 Hours Saved Annually',
    impactValue: '271',
    description:
      'Analyzed EDI invoice rejection patterns and implemented systemic fixes reducing automated rejection rates. Minimized manual intervention, freeing analyst capacity for higher-value financial operations work.',
    outcomes: [
      '271 hours saved annually through reduced manual intervention',
      'Reduced EDI invoice rejection rates substantially',
      'Improved straight-through processing rates',
      'Minimized manual intervention in automated workflows',
    ],
    tags: ['EDI', 'Automation', 'Invoice Processing', 'Efficiency'],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'amazon-extra-mile',
    title: 'Amazon Extra Mile Award',
    company: 'Amazon',
    count: '4×',
    description:
      'Recognized four times for exceptional contributions beyond role expectations including automation delivery and process improvement leadership.',
    icon: 'Award',
  },
  {
    id: 'infosys-rnr',
    title: 'Infosys Recognition & Rewards',
    company: 'Infosys',
    count: '6×',
    description:
      'Six-time recipient of R&R awards for consistent excellence in AP operations, client satisfaction, and process quality.',
    icon: 'Star',
  },
  {
    id: 'client-appreciation',
    title: 'Client Appreciations',
    company: 'Cross-Company',
    description:
      'Formal appreciation from client stakeholders for outstanding service delivery, vendor management, and issue resolution.',
    icon: 'ThumbsUp',
  },
  {
    id: 'sme-recognition',
    title: 'SME Recognition',
    company: 'Amazon & Ecolab',
    description:
      'Formally designated Subject Matter Expert in AP/T&E operations, trusted to lead transitions, mentor teams, and define SOPs.',
    icon: 'BadgeCheck',
  },
];
