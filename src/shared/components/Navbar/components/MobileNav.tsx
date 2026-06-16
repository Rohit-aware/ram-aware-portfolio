import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@shared/constants/data';

interface MobileNavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  active: string;
  scrollTo: (href: string) => void;
}

export const MobileNav = memo(({ menuOpen, setMenuOpen, active, scrollTo }: MobileNavProps) => (
  <>
    <motion.button
      onClick={() => setMenuOpen((v) => !v)}
      className="md:hidden tap flex items-center justify-center w-10 h-10 rounded-lg border border-surface-200 text-ink-500 hover:text-brand-500 hover:border-brand-500 hover:bg-brand-50 transition-colors bg-white/80"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      whileTap={{ scale: 0.93 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={menuOpen ? 'x' : 'menu'}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>

    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-ink-900/30 md:hidden backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </AnimatePresence>

    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="fixed top-14 sm:top-16 left-3 right-3 z-40 md:hidden card-glass overflow-hidden"
          initial={{ opacity: 0, y: -12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <nav className="p-3 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map(({ id, label, href }, i) => (
              <motion.button
                key={id}
                onClick={() => scrollTo(href)}
                className={`tap w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active === id ? 'text-brand-500 bg-brand-50' : 'text-ink-700 hover:text-ink-900 hover:bg-surface-100'
                }`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {label}
              </motion.button>
            ))}
            <div className="pt-2 mt-1 border-t border-surface-200">
              <a href="mailto:awareram@gmail.com" className="btn-primary w-full text-sm">
                Get in Touch
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  </>
));

MobileNav.displayName = 'MobileNav';
