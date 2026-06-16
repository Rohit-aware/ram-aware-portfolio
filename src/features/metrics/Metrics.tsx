import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Building2, Award, Clock, Cpu, Briefcase } from 'lucide-react';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { METRICS } from '@shared/constants/data';
import { useTheme } from '@shared/context/ThemeContext';
import { useCountUp } from '@shared/hooks/useInView';

const ICONS = [TrendingUp, Building2, Award, Clock, Cpu, Briefcase];

interface MetricItemProps {
  value: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  index: number;
}

const MetricItem = memo(({ value, label, sublabel, icon: Icon, index }: MetricItemProps) => {
  const { shadows } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
  const numericPart = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const counted = useCountUp(numericPart, 1600, inView);

  return (
    <motion.div
      ref={ref}
      className="card-glass p-5 sm:p-6 flex flex-col gap-3 group cursor-default"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: shadows.hoverBrandLight }}
    >
      <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shadow-sm">
        <Icon size={17} className="text-white" />
      </div>
      <div>
        <p className="text-3xl sm:text-4xl font-bold gradient-text leading-none tabular-nums">
          {inView ? `${counted}${suffix}` : value}
        </p>
        <p className="text-ink-900 font-semibold text-sm mt-2">{label}</p>
        {sublabel && <p className="text-ink-500 text-xs mt-0.5">{sublabel}</p>}
      </div>
    </motion.div>
  );
});
MetricItem.displayName = 'MetricItem';

const Metrics = memo(() => (
  <SectionWrapper id="metrics" className="bg-surface-0">
    <SectionHeader
      label="Key Impact"
      title="Measurable "
      highlight="Results"
      description="Numbers that define a decade of financial operations excellence."
    />
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
      {METRICS.map((m, i) => (
        <MetricItem key={m.id} {...m} icon={ICONS[i]} index={i} />
      ))}
    </div>
  </SectionWrapper>
));

Metrics.displayName = 'Metrics';
export default Metrics;
