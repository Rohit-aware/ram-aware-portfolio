import { useState, useCallback } from 'react';
import { EXPERIENCE_ITEMS } from '../../../shared/constants/data';
import { useTheme } from '../../../shared/context/ThemeContext';

export function useExperience() {
  const [activeId, setActiveId] = useState('ecolab');
  const handleSelect = useCallback((id: string) => setActiveId(id), []);
  const active = EXPERIENCE_ITEMS.find((e) => e.id === activeId) ?? EXPERIENCE_ITEMS[0];
  const { companies } = useTheme();

  return {
    activeId,
    handleSelect,
    active,
    companiesTheme: companies,
  };
}
