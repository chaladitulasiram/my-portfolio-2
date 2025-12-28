import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Menu, Download, MessageCircle } from 'lucide-react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.6, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : ''
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TR<span className="text-primary">.</span>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-sm font-medium tracking-wide"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-primary mr-1 text-xs">0{index + 1}.</span>
                  {item.label}
                </motion.a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="/Tulasi_Ram_Resume.pdf"
                download="Tulasi_Ram_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-primary/50 rounded-full text-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px hsl(185 100% 50% / 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50 p-2 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5 text-primary" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-border/50 z-40 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Nav Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={handleNavClick}
                          className="flex items-center gap-3 py-3 px-4 rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                        >
                          <span className="text-primary text-sm font-mono">0{index + 1}.</span>
                          <span className="text-base font-medium">{item.label}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Action Buttons */}
                <motion.div
                  className="space-y-3 pt-6 border-t border-border/50"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a
                    href="/Tulasi_Ram_Resume.pdf"
                    download="Tulasi_Ram_Resume.pdf"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-medium border border-border rounded-xl text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </a>
                  <a
                    href="#contact"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-medium bg-primary/10 border border-primary/50 rounded-xl text-primary hover:bg-primary/20 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Let's Talk
                  </a>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-2xl font-bold gradient-text">TR</span>
                  <span className="text-primary text-2xl">.</span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
