import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    'hero', 'about', 'education', 'projects', 'skills', 'internship', 'certifications', 'contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Shilpa</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === section
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 transition-colors"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;