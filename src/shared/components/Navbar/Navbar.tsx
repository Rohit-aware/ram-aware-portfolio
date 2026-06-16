import { memo } from 'react';
import { motion } from 'framer-motion';
import { useNavbar } from './hooks/useNavbar';
import { Logo } from './components/Logo';
import { DesktopNav } from './components/DesktopNav';
import { MobileNav } from './components/MobileNav';

import { EMAIL } from '@shared/constants/contact';

const Navbar = memo(() => {
  const {
    menuOpen,
    setMenuOpen,
    active,
    hoveredId,
    setHoveredId,
    navRef,
    navBg,
    navBlur,
    navShadow,
    navBorder,
    scrollTo,
  } = useNavbar();

  return (
    <motion.header
      style={{
        backgroundColor: navBg,
        backdropFilter: navBlur,
        WebkitBackdropFilter: navBlur,
        boxShadow: navShadow,
        borderBottomColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="wrap flex items-center justify-between h-14 sm:h-16" ref={navRef}>
        <Logo />

        <DesktopNav
          active={active}
          hoveredId={hoveredId}
          setHoveredId={setHoveredId}
          scrollTo={scrollTo}
        />

        <div className="flex items-center gap-2.5">
          <motion.a
            href={`mailto:${EMAIL}`}
            className="btn-primary hidden sm:inline-flex text-xs px-4 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>

          <MobileNav
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            active={active}
            scrollTo={scrollTo}
          />
        </div>
      </div>
    </motion.header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;
