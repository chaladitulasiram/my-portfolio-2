import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ParallaxBackground } from './ParallaxBackground';

const experiences = [
  {
    title: 'Cloud Technologies Intern',
    company: 'AICTE',
    period: 'May 2024 – Jul 2024',
    description: [
      'Automated AWS provisioning using Python & Boto3, cutting server setup time from 60 minutes to under 5 minutes',
      'Configured EC2, RDS, and S3 instances with IAM least-privilege and VPC-based access control',
      'Developed robust deployment scripts with retry logic, improving deployment reliability by 70%',
    ],
    tech: ['AWS', 'Python', 'Boto3', 'EC2', 'RDS', 'S3'],
  },
  {
    title: 'Vice President',
    company: 'Rubix Club, KL University',
    period: '2023 – Present',
    description: [
      'Directed a 12-member team to host 6+ technical events and hackathons with 200+ participants',
      'Partnered with faculty mentors to secure sponsorships and promote innovation',
      'Led community initiatives fostering student tech education',
    ],
    tech: ['Leadership', 'Event Management', 'Team Building'],
  },
];

const education = {
  degree: 'B.Tech in Computer Science & Information Technology',
  institution: 'KL University',
  period: 'Aug 2022 – May 2026',
  cgpa: '8.9 / 10.0',
  location: 'Vaddeswaram, Andhra Pradesh',
};

const TimelineCard = ({ item, index }: { item: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Timeline Node */}
      <div className="hidden lg:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
          className="w-4 h-4 bg-primary rounded-full glow-border relative z-10"
        />
        <div className="w-0.5 h-full bg-gradient-to-b from-primary/50 to-transparent" />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -5, boxShadow: '0 20px 40px hsl(185 100% 50% / 0.1)' }}
        className="flex-1 glass-card p-5 sm:p-8 hover:border-primary/30 transition-all duration-500 group"
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4 mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-accent font-medium text-sm sm:text-base">{item.company}</p>
          </div>
          <span className="text-xs sm:text-sm text-muted-foreground font-mono bg-secondary/50 px-2 sm:px-3 py-1 rounded-full w-fit">
            {item.period}
          </span>
        </div>

        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {item.description.map((desc, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base"
            >
              <span className="text-primary mt-1">▹</span>
              <span>{desc}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <ParallaxBackground variant="experience" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest">02. MY JOURNEY</span>
          <h2 className="section-heading mt-2 text-2xl sm:text-3xl md:text-4xl">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-5 sm:p-8 mb-10 sm:mb-16 hover:glow-border transition-all duration-500"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs text-primary font-mono tracking-widest">EDUCATION</span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">{education.degree}</h3>
              <p className="text-accent font-medium text-sm sm:text-base">{education.institution}</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{education.cgpa}</div>
              <span className="text-xs sm:text-sm text-muted-foreground">CGPA</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-xs sm:text-sm">
            <span>{education.period}</span>
            <span className="hidden sm:inline text-primary">•</span>
            <span>{education.location}</span>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <TimelineCard key={exp.title} item={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
