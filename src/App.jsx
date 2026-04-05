import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="font-poppins">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Internship />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
