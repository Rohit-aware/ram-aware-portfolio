import { LayoutDashboard, GraduationCap, Handshake } from 'lucide-react';

export const LEADERSHIP_CARDS = [
  {
    id: 'team',
    icon: LayoutDashboard,
    title: 'Team Management',
    gradient: 'bg-gradient-ap',
    items: [
      'Daily task allocation based on workload and priority',
      'Productivity monitoring and performance tracking',
      'Dashboard reviews and KPI reporting',
      'Shift planning and capacity management',
    ],
  },
  {
    id: 'mentor',
    icon: GraduationCap,
    title: 'Mentorship & Training',
    gradient: 'bg-gradient-rep',
    items: [
      'Onboarding and training new joiners',
      'SOP documentation and knowledge base creation',
      'Knowledge sharing sessions across teams',
      'Competency development and skill assessments',
    ],
  },
  {
    id: 'stakeholder',
    icon: Handshake,
    title: 'Stakeholder Management',
    gradient: 'bg-gradient-lead',
    items: [
      'Vendor communications and relationship management',
      'Client calls and escalation handling',
      'Cross-functional query resolution',
      'Executive reporting and status updates',
    ],
  },
];

export const LEADERSHIP_STATS = [
  { label: 'Task Allocation', value: 'Daily', emoji: '📋' },
  { label: 'SOPs Created', value: 'Multiple', emoji: '📄' },
  { label: 'Stakeholder Scope', value: 'Cross-Org', emoji: '🤝' },
];
