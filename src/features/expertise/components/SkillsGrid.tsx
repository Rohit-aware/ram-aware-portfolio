import { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCheck } from 'lucide-react';

interface SkillsGridProps {
  skills: string[];
}

export const SkillsGrid = memo(({ skills }: SkillsGridProps) => (
  <div className="p-5 sm:p-6">
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
      {skills.map((skill, i) => (
        <motion.div
          key={skill}
          className="flex items-center gap-2.5 p-3 bg-surface-50 rounded-xl border border-surface-200 hover:border-brand-500/30 hover:bg-brand-50 transition-all duration-150 group"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04, duration: 0.3 }}
          whileHover={{ x: 2 }}
        >
          <CheckCheck size={13} className="text-brand-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
          <span className="text-ink-700 text-xs sm:text-sm font-medium">{skill}</span>
        </motion.div>
      ))}
    </div>
  </div>
));

SkillsGrid.displayName = 'SkillsGrid';
