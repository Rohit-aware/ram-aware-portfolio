import { memo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@shared/components/SectionWrapper';
import SectionHeader from '@shared/components/SectionHeader';
import { EXPERTISE_AREAS, ABOUT_TEXTS } from './constants/aboutData';

const About = memo(() => (
  <SectionWrapper id="about" className="section-bg-alt">
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      <div>
        <SectionHeader
          label={ABOUT_TEXTS.label}
          title={ABOUT_TEXTS.title}
          highlight={ABOUT_TEXTS.highlight}
          description={ABOUT_TEXTS.description}
        />
        <motion.div
          className="space-y-4 body-text text-left"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p>{ABOUT_TEXTS.paragraphs[0]}</p>
          <p>
            At Amazon, I delivered automation projects saving{' '}
            <span className="font-semibold text-ink-900">898+ hours annually</span>. At Ecolab, I serve as the AP/T&E Subject Matter Expert, mentoring teams and driving process transformation with a Lean, data-driven mindset.
          </p>
        </motion.div>
      </div>

      <div>
        <motion.p
          className="label mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="w-3.5 h-px bg-brand-500 rounded-full" />
          {ABOUT_TEXTS.skillsLabel}
        </motion.p>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
          {EXPERTISE_AREAS.map((area, i) => (
            <motion.div
              key={area}
              className="flex items-center gap-2.5 p-3 bg-surface-0 rounded-xl border border-surface-200 hover:border-brand-500/40 hover:bg-brand-50 transition-all duration-150 cursor-default group"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ x: 2 }}
            >
              <CheckCircle2 size={14} className="text-brand-500 flex-shrink-0" />
              <span className="text-ink-700 text-sm font-medium group-hover:text-ink-900 transition-colors">{area}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
));

About.displayName = 'About';
export default About;
