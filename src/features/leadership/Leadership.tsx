import { memo } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { LeadershipCard } from './components/LeadershipCard';
import { LEADERSHIP_CARDS, LEADERSHIP_STATS } from './constants/leadershipData';

const Leadership = memo(() => (
  <SectionWrapper id="leadership" className="section-bg-alt">
    <SectionHeader
      label="Leadership"
      title="Leading with "
      highlight="Impact"
      description="Trusted as Subject Matter Expert to drive team performance, mentorship, and stakeholder outcomes."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      {LEADERSHIP_CARDS.map((card, i) => (
        <LeadershipCard key={card.id} card={card} index={i} />
      ))}
    </div>

    <div className="grid grid-cols-3 gap-3">
      {LEADERSHIP_STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="card-glass p-4 flex flex-col items-center text-center gap-1.5"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-xl sm:text-2xl" role="img" aria-label={stat.label}>{stat.emoji}</span>
          <p className="font-bold gradient-text text-sm sm:text-base">{stat.value}</p>
          <p className="text-ink-500 text-xs leading-snug">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
));

Leadership.displayName = 'Leadership';
export default Leadership;
