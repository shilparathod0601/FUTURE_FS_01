import { motion } from 'framer-motion';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 font-poppins"
        >
          Internship
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            EY Global Delivery Services & AICTE
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Web Development Intern
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Dec 2024 – Jan 2025
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Built full-stack MERN applications during the internship.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Internship;