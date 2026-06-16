import { memo } from 'react';
import { motion } from 'framer-motion';
import { EXPERTISE_CATEGORIES } from '../../../shared/constants/data';
import { useTheme } from '../../../shared/context/ThemeContext';
import { ICON_MAP } from '../hooks/useExpertise';

interface ExpertiseTabsProps {
  activeId: string;
  handleSelect: (id: string) => void;
}

export const ExpertiseTabs = memo(({ activeId, handleSelect }: ExpertiseTabsProps) => {
  const { expertise } = useTheme();

  return (
    <div className="flex flex-wrap gap-2">
      {EXPERTISE_CATEGORIES.map((cat, i) => {
        const Icon = ICON_MAP[cat.icon];
        const isActive = cat.id === activeId;
        const catGradient = expertise[cat.id]?.gradient ?? 'bg-gradient-ap';
        return (
          <motion.button
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className={`relative tap flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-150 overflow-hidden ${
              isActive
                ? 'text-white border-transparent shadow-btn'
                : 'text-ink-500 border-surface-200 bg-surface-0 hover:border-brand-500/40 hover:text-brand-500'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {isActive && (
              <motion.span
                layoutId="expertise-tab-bg"
                className={`absolute inset-0 ${catGradient}`}
                initial={false}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {Icon && <Icon size={14} />}
              <span className="hidden xs:inline">{cat.title}</span>
              <span className="xs:hidden">{cat.title.split(' ')[0]}</span>
            </span>
          </motion.button>
        );
      })}
    </div>
  );
});

ExpertiseTabs.displayName = 'ExpertiseTabs';
