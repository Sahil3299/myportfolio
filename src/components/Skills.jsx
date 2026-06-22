import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaServer, FaDocker } from 'react-icons/fa';
import { SiTensorflow } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java'],
      color: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      title: 'Frontend',
      icon: <FaReact className="w-6 h-6 text-sky-550 dark:text-sky-450" />,
      skills: ['React.js', 'Tailwind CSS', 'Bootstrap'],
      color: 'from-sky-500/10 to-blue-500/10',
    },
    {
      title: 'Backend / Database',
      icon: <FaServer className="w-6 h-6 text-emerald-600 dark:text-emerald-450" />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs'],
      color: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      title: 'DevOps / Tools',
      icon: <FaDocker className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
      skills: ['Docker', 'GitHub Actions', 'Git', 'Vercel', 'Socket.IO'],
      color: 'from-cyan-500/10 to-sky-500/10',
    },
    {
      title: 'Machine Learning / AI',
      icon: <SiTensorflow className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      skills: ['TensorFlow', 'OpenCV', 'scikit-learn', 'Hugging Face'],
      color: 'from-orange-500/10 to-amber-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="skills" 
      className="py-20 px-4 bg-white dark:bg-dark-card transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-gray-100">
            Technical Skills
          </h2>
          <div className="w-20 h-1.5 bg-primary dark:bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative rounded-2xl p-6 bg-slate-50 dark:bg-dark-bg border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Highlight Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0`} />

              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white dark:bg-dark-card rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-gray-200">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white dark:bg-dark-card text-slate-655 dark:text-slate-350 border border-slate-250/50 dark:border-slate-800 hover:border-primary/50 dark:hover:border-blue-500/50 hover:text-primary dark:hover:text-blue-450 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
