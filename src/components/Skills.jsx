import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    programming: ['Java', 'JavaScript', 'SQL'],
    databases: ['MongoDB', 'MySQL'],
    frameworks: ['ReactJS', 'NodeJS'],
    coursework: ['AI', 'Machine Learning'],
    soft: ['Leadership', 'Communication', 'Problem-solving']
  };

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-primary h-2 rounded-full"
        ></motion.div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 font-poppins"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Programming</h3>
            {skills.programming.map((skill, i) => (
              <SkillBar key={i} skill={skill} level={80 + i * 5} />
            ))}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">Databases</h3>
            {skills.databases.map((skill, i) => (
              <SkillBar key={i} skill={skill} level={75 + i * 5} />
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frameworks</h3>
            {skills.frameworks.map((skill, i) => (
              <SkillBar key={i} skill={skill} level={70 + i * 10} />
            ))}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">Course Work</h3>
            {skills.coursework.map((skill, i) => (
              <SkillBar key={i} skill={skill} level={60 + i * 10} />
            ))}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;