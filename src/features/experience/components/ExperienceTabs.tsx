import { memo } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_ITEMS } from '../../../shared/constants/data';
import { useTheme } from '../../../shared/context/ThemeContext';
import { CompanyLogo } from './CompanyLogos';

interface ExperienceTabsProps {
  activeId: string;
  handleSelect: (id: string) => void;
}

export const ExperienceTabs = memo(({ activeId, handleSelect }: ExperienceTabsProps) => {
  const { companies } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row gap-2.5">
      {EXPERIENCE_ITEMS.map((exp, i) => {
        const isActive = exp.id === activeId;
        const companyTheme = companies[exp.company] ?? companies.default;
        return (
          <motion.button
            key={exp.id}
            onClick={() => handleSelect(exp.id)}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left flex-1 transition-colors duration-150 ${
              isActive
                ? 'border-brand-500/30 bg-brand-50 shadow-sm'
                : 'border-surface-200 bg-surface-0 hover:border-brand-500/20 hover:bg-surface-50'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-sm"
              style={{ background: companyTheme.color }}
              whileHover={{ scale: 1.05 }}
            >
              <CompanyLogo company={exp.company} className="w-5 h-5 text-white" />
            </motion.div>
            <div className="min-w-0">
              <p className={`font-bold text-sm ${isActive ? 'text-brand-500' : 'text-ink-900'}`}>
                {exp.company}
              </p>
              <p className="text-ink-500 text-xs truncate">{exp.period}</p>
              {exp.current && (
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-500 font-semibold mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                  Current
                </span>
              )}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
});

ExperienceTabs.displayName = 'ExperienceTabs';
