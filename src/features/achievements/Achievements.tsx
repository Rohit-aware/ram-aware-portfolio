import { memo } from 'react';
import { motion } from 'framer-motion';
import { Award, Star, ThumbsUp, BadgeCheck, Sparkles } from 'lucide-react';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { ACHIEVEMENTS } from '@shared/constants/data';
import { AchievementCard } from './components/AchievementCard';

const ICON_MAP: Record<string, React.ElementType> = { Award, Star, ThumbsUp, BadgeCheck };

const Achievements = memo(() => (
  <SectionWrapper id="achievements" className="bg-surface-0">
    <SectionHeader
      label="Recognition"
      title="Awards & "
      highlight="Achievements"
      description="Recognition from Amazon, Infosys and clients for exceptional financial operations."
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
      {ACHIEVEMENTS.map((ach, i) => {
        const Icon = ICON_MAP[ach.icon] ?? Award;
        return (
          <AchievementCard key={ach.id} ach={ach} index={i} Icon={Icon} />
        );
      })}
    </div>

    <motion.div
      className="card-glass p-5 sm:p-6 flex items-start gap-4 border-l-2 border-brand-500"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.35 }}
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 shadow-sm">
        <Sparkles size={18} className="text-white" />
      </div>
      <div className="text-left">
        <h4 className="font-bold text-ink-900 text-sm sm:text-base mb-1">Process Excellence Contributions</h4>
        <p className="text-ink-500 text-sm leading-relaxed">
          Recognized across teams for consistent delivery of process improvement initiatives, SOP standardization, and knowledge transfer programs that elevated team performance.
        </p>
      </div>
    </motion.div>
  </SectionWrapper>
));

Achievements.displayName = 'Achievements';
export default Achievements;
