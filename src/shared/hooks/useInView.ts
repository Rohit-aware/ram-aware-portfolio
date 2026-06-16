import { useEffect, useRef, useState, useCallback } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useInView<T extends Element>({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce && ref.current) {
          observerRef.current?.unobserve(ref.current);
        }
      } else if (!triggerOnce) {
        setInView(false);
      }
    },
    [triggerOnce],
  );

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersect, { threshold, rootMargin });
    const el = ref.current;
    if (el) observerRef.current.observe(el);
    return () => { if (el) observerRef.current?.unobserve(el); };
  }, [handleIntersect, threshold, rootMargin]);

  return { ref, inView };
}

export function useCountUp(target: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, inView]);

  return count;
}
