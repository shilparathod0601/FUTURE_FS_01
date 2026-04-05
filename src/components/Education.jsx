import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      institution: 'TKR College of Engineering and Technology',
      degree: 'IT',
      period: '2023–2027',
      grade: 'CGPA: 7.12'
    },
    {
      institution: 'GJC Junior College',
      degree: 'MPC',
      period: '2021–2023',
      grade: '85%'
    },
    {
      institution: 'TTWRES',
      degree: '',
      period: '2020–2021',
      grade: ''
    },
    {
      institution: 'SSC Board',
      degree: '',
      period: '',
      grade: 'CGPA: 9.3'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 font-poppins"
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.institution}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                {item.degree && `${item.degree} | `}{item.period}
              </p>
              {item.grade && (
                <p className="text-primary font-medium">{item.grade}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;