import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { OrbitingSkills } from './OrbitingSkills';
import { ParallaxBackground } from './ParallaxBackground';

const skills = [
  { name: 'Java', level: 90, color: 'hsl(185 100% 50%)' },
  { name: 'Spring Boot', level: 85, color: 'hsl(170 80% 45%)' },
  { name: 'React', level: 88, color: 'hsl(185 100% 50%)' },
  { name: 'TypeScript', level: 82, color: 'hsl(170 80% 45%)' },
  { name: 'PostgreSQL', level: 80, color: 'hsl(185 100% 50%)' },
  { name: 'AWS', level: 75, color: 'hsl(170 80% 45%)' },
];

const certifications = [
  { name: 'AWS Certified Cloud Practitioner', org: 'Amazon Web Services' },
  { name: 'Salesforce AI Associate', org: 'Salesforce Trailhead' },
];

const SkillOrb = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass-card p-6 hover:glow-border transition-all duration-500 cursor-pointer">
        <div className="flex items-center justify-between mb-4">
          <span className="text-foreground font-medium">{skill.name}</span>
          <span className="text-primary font-mono text-sm">{skill.level}%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${skill.color}, hsl(170 80% 45%))` }}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: [0.6, 0, 0.2, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Parallax Background Elements */}
      <ParallaxBackground variant="about" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest">01. WHO I AM</span>
          <h2 className="section-heading mt-2 text-2xl sm:text-3xl md:text-4xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Orbiting Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 md:order-1 flex justify-center"
          >
            <OrbitingSkills />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-medium">Computer Science student</span> at KL University with a passion for building elegant, scalable software solutions. My journey in tech started with curiosity and evolved into a deep love for{' '}
              <span className="text-primary">full-stack development</span> and{' '}
              <span className="text-accent">cloud technologies</span>.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              As Vice President of the <span className="text-foreground">Rubix Club</span>, I've led teams, organized hackathons, and fostered a community of tech enthusiasts. I believe in writing clean, efficient code that makes a real impact.
            </p>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Certifications</h3>
              <div className="space-y-2 sm:space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start sm:items-center gap-2 sm:gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full pulse-glow mt-1.5 sm:mt-0 flex-shrink-0" />
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="text-foreground font-medium text-sm sm:text-base">{cert.name}</span>
                      <span className="text-muted-foreground text-xs sm:text-sm sm:ml-2">— {cert.org}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skill Progress Bars */}
            <div className="pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Core Skills</h3>
              <div className="grid gap-2 sm:gap-3">
                {skills.map((skill, index) => (
                  <SkillOrb key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>

            <div className="pt-4 sm:pt-6 flex flex-wrap gap-2 sm:gap-3">
              {['Java', 'SQL', 'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Git', 'REST APIs'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className="tech-tag"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
