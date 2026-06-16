import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: 'awareram@gmail.com', href: 'mailto:awareram@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 XXXXX XXXXX', href: null },
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: null },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'ram-aware-423b25112',
    href: 'https://www.linkedin.com/in/ram-aware-423b25112',
  },
];

export const SEEKING_ROLES = ['AP SME', 'FinOps Analyst', 'Shared Services', 'Finance Operations'];

export const CONTACT_STATS = [
  { value: '9+', label: 'Years Exp.' },
  { value: '3', label: 'Companies' },
  { value: '10+', label: 'Awards' },
];
