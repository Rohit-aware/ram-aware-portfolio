import { memo } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Logo = memo(() => (
  <motion.button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="flex items-center gap-2.5 tap"
    aria-label="Back to top"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
  >
    <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-btn flex-shrink-0">
      <Briefcase size={15} className="text-white" />
    </div>
    <div className="hidden sm:block text-left">
      <p className="font-bold text-ink-900 text-sm leading-none">Ram Aware</p>
      <p className="text-ink-500 text-[10px] mt-0.5">Finance Operations SME</p>
    </div>
  </motion.button>
));

Logo.displayName = 'Logo';
