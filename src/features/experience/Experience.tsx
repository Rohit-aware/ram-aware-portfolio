import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { useExperience } from './hooks/useExperience';
import { ExperienceTabs } from './components/ExperienceTabs';
import { ExperienceDetail } from './components/ExperienceDetail';

const panelVariants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, x: -8, transition: { duration: 0.2 } },
};

const Experience = memo(() => {
  const { activeId, handleSelect, active } = useExperience();

  return (
    <SectionWrapper id="experience" className="bg-surface-0">
      <SectionHeader
        label="Experience"
        title="Career "
        highlight="Timeline"
        description="9+ years of progressive responsibility across global finance organizations."
      />

      <div className="flex flex-col gap-4">
        <ExperienceTabs
          activeId={activeId}
          handleSelect={handleSelect}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="card p-5 sm:p-7"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ExperienceDetail active={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
});

Experience.displayName = 'Experience';
export default Experience;
