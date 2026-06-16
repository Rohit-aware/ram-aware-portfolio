import { memo } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../shared/context/ThemeContext';
import { AchievementItem } from '../../../shared/types';

interface AchievementCardProps {
  ach: AchievementItem;
  index: number;
  Icon: React.ElementType;
}

export const AchievementCard = memo(({ ach, index, Icon }: AchievementCardProps) => {
  const { shadows } = useTheme();

  return (
    <motion.div
      className="card-glass p-5 flex gap-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -3, boxShadow: shadows.hoverBrandLight }}
    >
      <motion.div
        className="w-11 h-11 rounded-2xl bg-gradient-brand flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        <Icon size={19} className="text-white" />
      </motion.div>
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-ink-900 text-sm sm:text-base leading-snug">{ach.title}</h3>
          {ach.count && (
            <span className="text-2xl font-bold gradient-text flex-shrink-0 leading-none">{ach.count}</span>
          )}
        </div>
        <p className="text-ink-500 text-xs font-semibold mb-2 uppercase tracking-wide">{ach.company}</p>
        <p className="text-ink-500 text-sm leading-relaxed">{ach.description}</p>
      </div>
    </motion.div>
  );
});

AchievementCard.displayName = 'AchievementCard';
