import { useState, useCallback } from 'react';
import { EXPERTISE_CATEGORIES } from '../../../shared/constants/data';
import { useTheme } from '../../../shared/context/ThemeContext';
import { FileText, Database, BarChart3, Shield, CreditCard, Users } from 'lucide-react';

export const ICON_MAP: Record<string, React.ElementType> = {
  FileText, Database, BarChart3, Shield, CreditCard, Users,
};

export function useExpertise() {
  const [activeId, setActiveId] = useState('ap');
  const handleSelect = useCallback((id: string) => setActiveId(id), []);
  const active = EXPERTISE_CATEGORIES.find((c) => c.id === activeId) ?? EXPERTISE_CATEGORIES[0];
  const { expertise } = useTheme();

  const ActiveIcon = ICON_MAP[active.icon] ?? FileText;
  const activeExpertiseTheme = expertise[active.id] ?? { gradient: 'bg-gradient-ap', proficiency: 90 };
  const gradient = activeExpertiseTheme.gradient;
  const proficiency = activeExpertiseTheme.proficiency;

  return {
    activeId,
    handleSelect,
    active,
    ActiveIcon,
    gradient,
    proficiency,
    expertiseTheme: expertise,
  };
}
