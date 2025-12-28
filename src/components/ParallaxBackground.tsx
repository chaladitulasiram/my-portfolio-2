import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBackgroundProps {
  variant?: 'hero' | 'about' | 'experience' | 'projects' | 'contact';
}

export const ParallaxBackground = ({ variant = 'hero' }: ParallaxBackgroundProps) => {
  const { scrollYProgress } = useScroll();
  
  // Different parallax speeds for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.8]);

  const renderElements = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            {/* Large floating gradient orb */}
            <motion.div
              style={{ y: y1, rotate }}
              className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
            />
            {/* Medium floating shape */}
            <motion.div
              style={{ y: y2, rotate: rotateReverse }}
              className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-accent/10 blur-2xl"
            />
            {/* Small floating particles */}
            <motion.div
              style={{ y: y3 }}
              className="absolute bottom-40 right-1/4 w-32 h-32 rounded-full bg-primary/15 blur-xl"
            />
            {/* Grid pattern */}
            <motion.div
              style={{ y: y4, opacity: 0.03 }}
              className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] bg-[size:60px_60px]"
            />
          </>
        );
      case 'about':
        return (
          <>
            <motion.div
              style={{ y: y1, scale }}
              className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl"
            />
            <motion.div
              style={{ y: y2, rotate }}
              className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl"
            />
            {/* Floating geometric shapes */}
            <motion.div
              style={{ y: y3, rotate: rotateReverse }}
              className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary/20 rotate-45"
            />
            <motion.div
              style={{ y: y4 }}
              className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-accent/20 rounded-full"
            />
          </>
        );
      case 'experience':
        return (
          <>
            {/* Central gradient line */}
            <motion.div
              style={{ scaleY: scale }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent"
            />
            {/* Floating orbs */}
            <motion.div
              style={{ y: y1 }}
              className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary/5 blur-2xl"
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute bottom-40 right-10 w-60 h-60 rounded-full bg-accent/5 blur-2xl"
            />
            {/* Geometric accent */}
            <motion.div
              style={{ y: y3, rotate }}
              className="absolute top-1/3 right-20 w-24 h-24 border border-primary/10 rounded-lg"
            />
          </>
        );
      case 'projects':
        return (
          <>
            {/* Large central glow */}
            <motion.div
              style={{ y: y1, scale }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl"
            />
            {/* Corner accents */}
            <motion.div
              style={{ y: y2, rotate }}
              className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-2xl"
            />
            <motion.div
              style={{ y: y3, rotate: rotateReverse }}
              className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-2xl"
            />
            {/* Floating squares */}
            <motion.div
              style={{ y: y4, rotate }}
              className="absolute top-1/4 right-10 w-16 h-16 border border-accent/20 rotate-12"
            />
            <motion.div
              style={{ y: y2, rotate: rotateReverse }}
              className="absolute bottom-1/4 left-10 w-12 h-12 border border-primary/20 rotate-45"
            />
          </>
        );
      case 'contact':
        return (
          <>
            {/* Bottom gradient wave */}
            <motion.div
              style={{ y: y1 }}
              className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent"
            />
            {/* Large bottom orb */}
            <motion.div
              style={{ y: y2, scale }}
              className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-3xl"
            />
            {/* Side accents */}
            <motion.div
              style={{ y: y3 }}
              className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-primary/5 blur-2xl"
            />
            <motion.div
              style={{ y: y4 }}
              className="absolute top-1/3 -right-20 w-48 h-48 rounded-full bg-accent/5 blur-2xl"
            />
            {/* Floating circles */}
            <motion.div
              style={{ y: y2, rotate }}
              className="absolute top-1/4 left-1/4 w-8 h-8 border border-primary/20 rounded-full"
            />
            <motion.div
              style={{ y: y3, rotate: rotateReverse }}
              className="absolute bottom-1/3 right-1/4 w-6 h-6 border border-accent/20 rounded-full"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {renderElements()}
    </div>
  );
};
