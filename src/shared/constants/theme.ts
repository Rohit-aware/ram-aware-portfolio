export interface CompanyTheme {
  initials: string;
  color: string;
}

export interface ExpertiseTheme {
  gradient: string;
  proficiency: number;
}

export const DESIGN_SYSTEM = {
  colors: {
    brand: '#0A66C2',
    brandDark: '#004182',
    accent: '#0ea5e9',
    emerald: '#10b981',
  },
  companies: {
    Ecolab: { initials: 'EC', color: '#007B5E' },
    Amazon: { initials: 'AZ', color: '#FF9900' },
    Infosys: { initials: 'IN', color: '#1A73E8' },
    default: { initials: 'CO', color: '#64748b' },
  } as Record<string, CompanyTheme>,
  expertise: {
    ap: { gradient: 'bg-gradient-ap', proficiency: 95 },
    systems: { gradient: 'bg-gradient-sys', proficiency: 90 },
    reporting: { gradient: 'bg-gradient-rep', proficiency: 88 },
    compliance: { gradient: 'bg-gradient-comp', proficiency: 92 },
    te: { gradient: 'bg-gradient-te', proficiency: 87 },
    leadership: { gradient: 'bg-gradient-lead', proficiency: 93 },
  } as Record<string, ExpertiseTheme>,
  gradients: {
    heroLeft: 'radial-gradient(circle, rgba(14, 165, 233, 0.04) 0%, transparent 70%)',
    heroRight: 'radial-gradient(circle, rgba(10, 102, 194, 0.05) 0%, transparent 70%)',
  },
  shadows: {
    hoverBrandLight: '0 8px 30px rgba(10, 102, 194, 0.08)',
    hoverBrandDefault: '0 8px 30px rgba(10, 102, 194, 0.12)',
    hoverBrandDeep: '0 12px 40px rgba(10, 102, 194, 0.1)',
  },
};
