import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    'Generative AI – IBM SkillBuild',
    'Artificial Intelligence – Accenture',
    'AI for Business – HP LIFE'
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 font-poppins"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {cert}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;