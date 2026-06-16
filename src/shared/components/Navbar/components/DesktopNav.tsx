import { memo } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '@shared/constants/data';

interface DesktopNavProps {
  active: string;
  hoveredId: string | null;
  setHoveredId: (id: string | null) => void;
  scrollTo: (href: string) => void;
}

export const DesktopNav = memo(({ active, hoveredId, setHoveredId, scrollTo }: DesktopNavProps) => (
  <nav className="hidden md:flex items-center gap-0.5 relative" aria-label="Primary navigation">
    {NAV_ITEMS.map(({ id, label, href }) => {
      const isActive = active === id;
      return (
        <motion.button
          key={id}
          onClick={() => scrollTo(href)}
          onHoverStart={() => setHoveredId(id)}
          onHoverEnd={() => setHoveredId(null)}
          className={`nav-link relative ${isActive ? 'nav-link-active text-brand-500' : ''}`}
        >
          {hoveredId === id && !isActive && (
            <motion.span
              layoutId="nav-hover"
              className="absolute inset-0 rounded-lg bg-surface-100"
              initial={false}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          {isActive && (
            <motion.span
              layoutId="nav-active"
              className="absolute inset-0 rounded-lg bg-brand-50"
              initial={false}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{label}</span>
        </motion.button>
      );
    })}
  </nav>
));

DesktopNav.displayName = 'DesktopNav';
