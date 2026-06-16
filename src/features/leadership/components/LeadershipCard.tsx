import { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface LeadershipCardProps {
  card: {
    id: string;
    icon: React.ElementType;
    title: string;
    gradient: string;
    items: string[];
  };
  index: number;
}

export const LeadershipCard = memo(({ card, index }: LeadershipCardProps) => {
  const Icon = card.icon;
  return (
    <motion.div
      className="card-glass p-5 sm:p-6 flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className={`w-11 h-11 rounded-2xl ${card.gradient} flex items-center justify-center shadow-sm`}>
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="font-bold text-ink-900 text-base text-left">{card.title}</h3>
      <ul className="space-y-2.5 flex-1 text-left">
        {card.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckCircle2 size={13} className="text-brand-500 mt-0.5 flex-shrink-0" />
            <span className="text-ink-500 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <motion.div
        className={`h-0.5 rounded-full ${card.gradient}`}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
      />
    </motion.div>
  );
});

LeadershipCard.displayName = 'LeadershipCard';
