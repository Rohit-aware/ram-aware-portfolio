import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { useExpertise } from './hooks/useExpertise';
import { ExpertiseTabs } from './components/ExpertiseTabs';
import { ExpertiseBanner } from './components/ExpertiseBanner';
import { SkillsGrid } from './components/SkillsGrid';

const tabVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const Expertise = memo(() => {
  const {
    activeId,
    handleSelect,
    active,
    ActiveIcon,
    gradient,
    proficiency,
  } = useExpertise();

  return (
    <SectionWrapper id="expertise" className="section-bg-alt">
      <SectionHeader
        label="Expertise"
        title="Finance Operations "
        highlight="Command Center"
        description="Technical and functional competencies across enterprise finance platforms."
      />

      <div className="flex flex-col gap-5">
        <ExpertiseTabs
          activeId={activeId}
          handleSelect={handleSelect}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="card overflow-hidden"
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ExpertiseBanner
              ActiveIcon={ActiveIcon}
              title={active.title}
              description={active.description}
              gradient={gradient}
              proficiency={proficiency}
            />

            <SkillsGrid skills={active.skills} />
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
});

Expertise.displayName = 'Expertise';
export default Expertise;
