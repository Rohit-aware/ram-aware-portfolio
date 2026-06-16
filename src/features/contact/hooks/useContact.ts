import { useState, useEffect, useMemo } from 'react';
import { CONTACT_ITEMS } from '@shared/constants/contact';

export function useContact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(max-width: 768px)').matches ||
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      );
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const resolvedContactItems = useMemo(() => {
    return CONTACT_ITEMS.map((item) => {
      let resolvedHref = item.href;
      if (item.label === 'Phone') {
        resolvedHref = isMobile ? `tel:${item.value.replace(/\s+/g, '')}` : null;
      }
      return {
        ...item,
        resolvedHref,
      };
    });
  }, [isMobile]);

  return {
    isMobile,
    contactItems: resolvedContactItems,
  };
}
