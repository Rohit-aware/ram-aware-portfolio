import { memo } from 'react';
import { motion } from 'framer-motion';

interface ExpertiseBannerProps {
  ActiveIcon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  proficiency: number;
}

export const ExpertiseBanner = memo(({ ActiveIcon, title, description, gradient, proficiency }: ExpertiseBannerProps) => (
  <div className={`${gradient} p-5 sm:p-6`}>
    <div className="flex items-center gap-4">
      <motion.div
        className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-sm border border-white/30"
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        <ActiveIcon size={22} className="text-white" />
      </motion.div>
      <div className="text-left">
        <h3 className="font-bold text-white text-lg leading-tight">{title}</h3>
        <p className="text-white/75 text-sm mt-0.5">{description}</p>
      </div>
    </div>

    <div className="mt-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white/80 text-xs font-medium">Proficiency</span>
        <span className="text-white text-xs font-bold">{proficiency}%</span>
      </div>
      <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  </div>
));

ExpertiseBanner.displayName = 'ExpertiseBanner';
