import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ParallaxBackground } from './ParallaxBackground';

const projects = [
  {
    title: 'AI-Powered Quiz Application',
    description: 'Intelligent quiz platform using Grok AI for personalized learning experiences',
    longDesc: 'Accelerated data retrieval using TanStack Query caching, reducing response latency by 40%. Integrated Grok AI to generate personalized quizzes based on user errors.',
    tech: ['React', 'TypeScript', 'Supabase', 'Grok AI', 'TanStack Query'],
    metrics: ['500+ Users', '1000+ Quiz Attempts', '40% Faster Response'],
    gradient: 'from-primary to-accent',
    icon: '🧠',
  },
  {
    title: 'Academic Project Management',
    description: 'Comprehensive workflow platform for managing student projects',
    longDesc: 'Built a workflow platform to manage 50+ student projects across proposal, approval, and evaluation phases. Implemented JWT-based RBAC, reducing faculty approval turnaround by 30%.',
    tech: ['Java', 'Spring Boot', 'React', 'Supabase', 'JWT'],
    metrics: ['50+ Projects', '30% Faster Approvals', 'RBAC Security'],
    gradient: 'from-accent to-primary',
    icon: '📚',
  },
  {
    title: 'ZTNA Security Framework',
    description: 'Zero Trust Network Access system with dynamic security policies',
    longDesc: 'Built a Zero Trust Network Access (ZTNA) system enforcing dynamic security policies using custom security filters. Optimized backend using asynchronous processing.',
    tech: ['Java', 'Spring Boot', 'React', 'Vite', 'Tailwind CSS'],
    metrics: ['Zero Trust Architecture', 'Async Processing', 'Dynamic Policies'],
    gradient: 'from-primary via-accent to-primary',
    icon: '🔐',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="perspective-1000"
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="preserve-3d relative group"
      >
        <div className="glass-card p-5 sm:p-8 h-full hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
          {/* Gradient overlay on hover */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
          />

          {/* Glow effect */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute -inset-px bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-sm -z-10"
          />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4 sm:mb-6">
              <motion.span
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ type: "spring", delay: 0.3 + index * 0.1 }}
                className="text-3xl sm:text-4xl"
              >
                {project.icon}
              </motion.span>
              <motion.div
                whileHover={{ rotate: 45 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary cursor-pointer hover:bg-primary/10 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
              {project.longDesc}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary border border-primary/10"
                >
                  {metric}
                </span>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <ParallaxBackground variant="projects" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16"
        >
          <span className="text-primary font-mono text-xs sm:text-sm tracking-widest">03. MY WORK</span>
          <h2 className="section-heading mt-2 text-2xl sm:text-3xl md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-3 sm:mt-4">
            A selection of projects that showcase my expertise in building full-stack applications
            with modern technologies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
