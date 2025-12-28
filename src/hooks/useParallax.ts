import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  offset?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { offset = 100, direction = 'up' } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const getTransform = (): MotionValue<number> => {
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      default:
        return useTransform(scrollYProgress, [0, 1], [offset, -offset]);
    }
  };

  const y = direction === 'up' || direction === 'down' ? getTransform() : undefined;
  const x = direction === 'left' || direction === 'right' ? getTransform() : undefined;

  return { ref, y, x, scrollYProgress };
};

export const useParallaxMultiple = () => {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  
  return { y1, y2, y3, y4, rotate, scale, scrollYProgress };
};
