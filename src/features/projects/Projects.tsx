import { memo } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { PROJECTS } from '@shared/constants/data';
import { ProjectCard } from './components/ProjectCard';

const Projects = memo(() => (
  <SectionWrapper id="projects" className="section-bg-alt">
    <SectionHeader
      label="Process Improvement"
      title="Business Impact "
      highlight="Case Studies"
      description="Automation and process improvement projects delivering measurable operational outcomes."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>

    <motion.div
      className="mt-6 p-5 sm:p-6 card-glass flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex-1 text-left">
        <h4 className="font-bold text-ink-900 text-base mb-1">Total Automation Impact</h4>
        <p className="text-ink-500 text-sm">Combined hours saved across all automation projects at Amazon</p>
      </div>
      <div className="flex-shrink-0 text-left sm:text-right">
        <p className="text-4xl font-bold gradient-text leading-none">898+</p>
        <p className="text-ink-500 text-xs mt-1.5">Hours Saved Annually</p>
      </div>
    </motion.div>
  </SectionWrapper>
));

Projects.displayName = 'Projects';
export default Projects;
