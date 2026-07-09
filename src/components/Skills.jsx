import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaCode, FaReact, FaServer, FaDatabase, FaCloud, FaTools } from 'react-icons/fa';

const Skills = () => {
  const prefersReducedMotion = useReducedMotion();

  const categories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java'],
    },
    {
      title: 'Frontend',
      icon: FaReact,
      skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS', 'Framer Motion', 'CSS Animations'],
    },
    {
      title: 'Backend',
      icon: FaServer,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'Socket.IO'],
    },
    {
      title: 'Database',
      icon: FaDatabase,
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis'],
    },
    {
      title: 'DevOps & Tools',
      icon: FaCloud,
      skills: ['Docker', 'Git', 'GitHub Actions', 'Vercel'],
    },
    {
      title: 'AI / ML',
      icon: FaTools,
      skills: ['TensorFlow', 'OpenCV', 'scikit-learn', 'Hugging Face'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="label">TECH STACK</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1">Technologies & Tools</h2>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          {...(prefersReducedMotion
            ? {}
            : {
                variants: containerVariants,
                initial: 'hidden',
                whileInView: 'visible',
                viewport: { once: true, margin: '-50px' },
              })}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              {...(prefersReducedMotion
                ? {}
                : {
                    variants: itemVariants,
                    whileHover: { scale: 1.05 },
                    transition: { type: 'spring', stiffness: 300, damping: 15 },
                  })}
              className="p-5 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <cat.icon className="w-5 h-5 text-black mb-3" />
              <h3 className="text-xs font-bold uppercase tracking-wider mb-3">{cat.title}</h3>
              <div className="space-y-1.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="block text-xs text-muted">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
