import { motion, useScroll, useTransform } from 'framer-motion';
import { Scene3D } from './3d/Scene3D';
import { ParallaxBackground } from './ParallaxBackground';
import heroBg from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-background/70" />
      </motion.div>

      {/* Parallax Background Elements */}
      <ParallaxBackground variant="hero" />

      {/* 3D Scene */}
      <Scene3D />

      {/* Hero Content with Parallax */}
      <motion.div style={{ y: contentY, opacity }} className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6"
          >
            <span className="text-primary text-sm sm:text-lg font-mono tracking-widest">
              &lt;Hello World /&gt;
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight"
          >
            <span className="text-foreground">I'm </span>
            <span className="gradient-text glow-text">Tulasi Ram</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              <span className="text-foreground font-medium">Full-Stack Developer</span>
              <span className="mx-2 sm:mx-3 text-primary">|</span>
              Cloud Enthusiast
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
          >
            Crafting robust software solutions with{' '}
            <span className="text-primary">Java</span>,{' '}
            <span className="text-accent">Spring Boot</span>, and{' '}
            <span className="text-primary">React</span>. Passionate about cloud technologies and delivering exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="/Tulasi_Ram_Resume.pdf"
              download="Tulasi_Ram_Resume.pdf"
              className="group px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px hsl(185 100% 50% / 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
