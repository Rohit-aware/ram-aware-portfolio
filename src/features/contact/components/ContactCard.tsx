import { memo } from 'react';
import { motion } from 'framer-motion';
import { LucideIcon, ExternalLink } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  resolvedHref: string | null;
  index: number;
}

export const ContactCard = memo(({ icon: Icon, label, value, resolvedHref, index }: ContactCardProps) => {
  const CardComponent = resolvedHref ? motion.a : motion.div;

  return (
    <CardComponent
      href={resolvedHref || undefined}
      target={resolvedHref && resolvedHref.startsWith('http') ? '_blank' : undefined}
      rel={resolvedHref && resolvedHref.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`card-glass flex items-center gap-4 p-4 hover:border-brand-500/30 transition-colors duration-150 text-left w-full border border-surface-200/60 ${
        resolvedHref ? 'cursor-pointer' : ''
      }`}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ x: 3 }}
      whileTap={resolvedHref ? { scale: 0.98 } : undefined}
    >
      <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center flex-shrink-0 shadow-sm">
        <Icon size={16} className="text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-ink-500 text-[10px] font-bold uppercase tracking-wider leading-none mb-1">{label}</p>
        <div className="text-ink-900 font-semibold text-sm flex items-center gap-1 truncate">
          <span className="truncate">{value}</span>
          {resolvedHref && resolvedHref.startsWith('http') && <ExternalLink size={11} className="flex-shrink-0 text-ink-500" />}
        </div>
      </div>
    </CardComponent>
  );
});

ContactCard.displayName = 'ContactCard';
