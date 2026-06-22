import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationList = [
    {
      degree: 'B.E. in Artificial Intelligence & Machine Learning',
      institution: 'PES Modern College of Engineering',
      location: 'Pune, India',
      duration: '2024 – 2027',
      scoreType: 'SGPA',
      score: '9.24 / 10',
      description: 'Specializing in advanced AI/ML models, deep learning, computer vision, and full-stack web applications development.',
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Jaihind Polytechnic',
      location: 'Pune, India',
      duration: '2021 – 2024',
      scoreType: 'Percentage',
      score: '89.94%',
      description: 'Gained solid foundational knowledge in computer programming, database systems, software engineering, and object-oriented paradigms.',
    },
  ];

  return (
    <section 
      id="education" 
      className="py-20 px-4 bg-slate-50 dark:bg-dark-bg transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-gray-100">
            Education
          </h2>
          <div className="w-20 h-1.5 bg-primary dark:bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between bg-white dark:bg-dark-card rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Header Icon & Date */}
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-xl text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {edu.duration}
                  </span>
                </div>

                {/* Institution & Degree */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-850 dark:text-gray-150 group-hover:text-primary dark:group-hover:text-blue-450 transition-colors duration-200">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
                    {edu.institution} • <span className="font-normal text-xs text-muted">{edu.location}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {/* Score Badge */}
              <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-medium text-muted dark:text-slate-450 uppercase tracking-wider">
                  Academic Performance
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-bold bg-blue-50 dark:bg-blue-950/30 text-primary dark:text-blue-400 border border-blue-100/50 dark:border-blue-950/50">
                  {edu.scoreType}: {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
