import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'EDUMANAGE PRO',
      description: 'Automates attendance using QR codes, geolocation, and face recognition',
      tech: ['ReactJS', 'Python', 'Django/Flask', 'SQL']
    },
    {
      title: 'ECHOVERSE',
      description: 'Web app that converts text into audiobooks using AI',
      tech: ['ReactJS', 'Python', 'Django/Flask', 'SQL']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 font-poppins"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;