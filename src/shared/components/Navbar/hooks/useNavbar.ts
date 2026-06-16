import { useState, useEffect, useCallback, useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { NAV_ITEMS } from '@shared/constants/data';

export function useNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const navBg = useTransform(scrollY, [0, 60], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.88)']);
  const navBlur = useTransform(scrollY, [0, 60], ['blur(0px)', 'blur(20px)']);
  const navShadow = useTransform(scrollY, [0, 60], ['0 0 0 rgba(0,0,0,0)', '0 1px 0 rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)']);
  const navBorder = useTransform(scrollY, [0, 60], ['rgba(226,232,240,0)', 'rgba(226,232,240,0.8)']);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -40% 0px' },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = useCallback((href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }, []);

  return {
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
  };
}
