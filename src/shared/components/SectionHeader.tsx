import { memo } from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader = memo(({ label, title, highlight, description, align = 'left' }: SectionHeaderProps) => {
  const parts = highlight ? title.split(highlight) : [title];
  const centerClass = align === 'center' ? 'text-center items-center' : '';

  return (
    <motion.div
      className={`flex flex-col gap-2 mb-10 sm:mb-12 ${centerClass}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="label">
        <span className="w-3.5 h-px bg-brand-500 rounded-full" />
        {label}
      </span>
      <h2 className="section-title text-balance">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {description && (
        <p className="body-text max-w-xl mt-1">{description}</p>
      )}
    </motion.div>
  );
});

SectionHeader.displayName = 'SectionHeader';
export default SectionHeader;
