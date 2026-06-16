import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export const EMAIL = 'awareram@gmail.com';
export const PHONE = '+91 9975580416';
export const LOCATION = 'Pune, Maharashtra, India';
export const LINKEDIN_USER = 'ram-aware-423b25112';
export const LINKEDIN_URL = `https://www.linkedin.com/in/${LINKEDIN_USER}`;

export const SOCIAL_LINKS = [
  { href: `mailto:${EMAIL}`, icon: Mail, label: 'Email' },
  { href: LINKEDIN_URL, icon: Linkedin, label: 'LinkedIn' },
];

export const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Phone', value: PHONE, href: null },
  { icon: MapPin, label: 'Location', value: LOCATION, href: null },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: `linkedin.com/in/${LINKEDIN_USER}`,
    href: LINKEDIN_URL,
  },
];
