import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, CheckCircle } from 'lucide-react';
import { HERO_KPIS } from '@shared/constants/data';
import { useTheme } from '@shared/context/ThemeContext';
import { HERO_COMPANIES, KPI_ICONS } from './constants/heroData';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = memo(() => {
  const { gradients, shadows } = useTheme();

  return (
    <section className="relative bg-surface-0 overflow-hidden pt-14 sm:pt-16">
      <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: gradients.heroRight, transform: 'translate(30%, -30%)' }}
      />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: gradients.heroLeft, transform: 'translate(-30%, 30%)' }}
      />

    <div className="wrap relative z-10">
      <div className="py-12 sm:py-16 lg:py-20 grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

        <motion.div
          className="lg:col-span-3 space-y-5 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-light text-emerald-500 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              Open to New Opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-bold text-ink-900 leading-[1.1] tracking-tight text-balance"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.25rem)' }}
          >
            Driving Financial{' '}
            <span className="gradient-text">Accuracy,</span>
            <br />
            Operational{' '}
            <span className="gradient-text">Excellence,</span>
            <br />
            and Process{' '}
            <span className="gradient-text">Transformation.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="body-text max-w-xl">
            Senior Accounting Analyst (SME) with{' '}
            <span className="font-semibold text-ink-900">9+ years of experience</span>{' '}
            across Ecolab, Amazon and Infosys — delivering AP excellence, automation initiatives, and measurable process improvements.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-1.5 text-ink-500 text-sm">
            <MapPin size={13} className="text-brand-500" />
            Pune, Maharashtra, India
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-1">
            <motion.button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View Experience <ArrowRight size={15} />
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download size={15} /> Download Resume
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-1">
            {HERO_COMPANIES.map((co) => (
              <span key={co} className="inline-flex items-center gap-1.5 text-xs text-ink-500 font-medium">
                <CheckCircle size={12} className="text-brand-500" /> {co}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:col-span-2 grid grid-cols-2 gap-3"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {HERO_KPIS.map(({ value, label, sublabel }, i) => {
            const Icon = KPI_ICONS[i];
            return (
              <motion.div
                key={label}
                className="card-glass p-4 sm:p-5 flex flex-col gap-2.5"
                whileHover={{ y: -3, boxShadow: shadows.hoverBrandDefault }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                  <Icon size={15} className="text-white" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold gradient-text leading-none">{value}</p>
                <div className="text-left">
                  <p className="text-ink-900 text-xs sm:text-sm font-semibold leading-snug">{label}</p>
                  <p className="text-ink-500 text-[11px] mt-0.5">{sublabel}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-200 to-transparent" />
  </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
