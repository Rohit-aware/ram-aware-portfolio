import { memo } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { useTheme } from '../../../shared/context/ThemeContext';
import { ProjectItem } from '../../../shared/types';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  const { shadows } = useTheme();

  return (
    <motion.div
      className="card-glass p-5 sm:p-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: shadows.hoverBrandDeep }}
    >
    <div className="flex items-start justify-between gap-2">
      <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-sm flex-shrink-0">
        {project.impactValue ? (
          <Zap size={16} className="text-white" />
        ) : (
          <TrendingUp size={16} className="text-white" />
        )}
      </div>
      <span className="pill">{project.company}</span>
    </div>

    <div className="flex items-center gap-2 px-3 py-2 bg-brand-50 rounded-xl border border-brand-100">
      <Clock size={13} className="text-brand-500 flex-shrink-0" />
      <span className="text-brand-500 font-bold text-sm">{project.impact}</span>
    </div>

    <div className="text-left">
      <h3 className="font-bold text-ink-900 text-base leading-snug mb-2">{project.title}</h3>
      <p className="text-ink-500 text-sm leading-relaxed">{project.description}</p>
    </div>

    <ul className="space-y-1.5 flex-1 text-left">
      {project.outcomes.slice(0, 3).map((o) => (
        <li key={o} className="flex items-start gap-2">
          <CheckCircle2 size={13} className="text-brand-500 mt-0.5 flex-shrink-0" />
          <span className="text-ink-500 text-xs leading-relaxed">{o}</span>
        </li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-100">
      {project.tags.map((tag) => (
        <span key={tag} className="chip text-[11px]">{tag}</span>
      ))}
    </div>
  </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';
