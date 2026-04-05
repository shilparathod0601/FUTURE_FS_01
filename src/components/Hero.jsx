import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback } from 'react';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: '#aa3bff',
            },
            links: {
              color: '#aa3bff',
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Suspense fallback={<div>Loading 3D...</div>}>
            <Canvas className="w-32 h-32 mx-auto mb-4">
              <OrbitControls enableZoom={false} enablePan={false} />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Sphere args={[1, 64, 64]}>
                <meshStandardMaterial color="#aa3bff" wireframe />
              </Sphere>
            </Canvas>
          </Suspense>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-poppins"
        >
          Kethavath Shilpa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6"
        >
          Aspiring Web Developer | AI Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-gray-700 dark:text-gray-400 mb-2">📧 shilpa@example.com | 📱 +1234567890 | 💼 LinkedIn</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-x-4"
        >
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/80 transition-colors shadow-lg"
          >
            Hire Me
          </button>
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            View Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;