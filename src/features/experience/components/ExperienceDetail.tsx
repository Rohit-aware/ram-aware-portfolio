import { memo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { useTheme } from '../../../shared/context/ThemeContext';
import { ExperienceItem } from '../../../shared/types';
import { CompanyLogo } from './CompanyLogos';

interface ExperienceDetailProps {
  active: ExperienceItem;
}

export const ExperienceDetail = memo(({ active }: ExperienceDetailProps) => {
  const { companies } = useTheme();
  const companyTheme = companies[active.company] ?? companies.default;

  return (
    <div className="text-left">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 pb-5 mb-5 border-b border-surface-100">
        <motion.div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md"
          style={{ background: companyTheme.color }}
          layoutId={`company-logo-${active.id}`}
        >
          <CompanyLogo company={active.company} className="w-7 h-7 text-white" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-bold text-ink-900 text-lg">{active.company}</h3>
            {active.current && (
              <span className="px-2.5 py-0.5 bg-emerald-light text-emerald-500 text-xs font-bold rounded-full border border-emerald-500/20">
                Current
              </span>
            )}
          </div>
          <p className="text-brand-500 font-semibold text-sm sm:text-base">{active.role}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <span className="flex items-center gap-1.5 text-ink-500 text-xs sm:text-sm">
              <Calendar size={12} /> {active.period}
            </span>
            <span className="flex items-center gap-1.5 text-ink-500 text-xs sm:text-sm">
              <MapPin size={12} /> {active.location}
            </span>
          </div>
        </div>
      </div>

      <ul className="space-y-2.5 mb-5">
        {active.highlights.map((h, i) => (
          <motion.li
            key={h}
            className="flex items-start gap-2.5"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <CheckCircle2 size={14} className="text-brand-500 mt-0.5 flex-shrink-0" />
            <span className="text-ink-500 text-sm leading-relaxed">{h}</span>
          </motion.li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-surface-100">
        {active.tags.map((tag) => (
          <span key={tag} className="chip">{tag}</span>
        ))}
      </div>
    </div>
  );
});

ExperienceDetail.displayName = 'ExperienceDetail';
