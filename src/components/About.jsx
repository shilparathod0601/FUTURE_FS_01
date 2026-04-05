import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 font-poppins">
            About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Seeking an entry-level opportunity to utilize my skills and enhance learning in the IT field.
            Passionate about web development and AI technologies, I strive to create innovative solutions
            that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;