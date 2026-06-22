import React from 'react';
import { motion } from 'framer-motion';
import { MdWork } from 'react-icons/md';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Omegasoft Technologies Pvt. Ltd.',
      location: 'Pune, India',
      duration: 'Jun 2023 – Jul 2023',
      points: [
        'Shipped 4 React.js frontend modules contributing directly to client deliverables.',
        'Optimised MongoDB database queries by 77% (reducing load times from 420ms to 95ms).',
        'Managed 15+ Git branches in an Agile/Scrum team environment, ensuring smooth code reviews and integration.',
      ],
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-20 px-4 bg-slate-50 dark:bg-dark-bg transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-gray-100">
            Work Experience
          </h2>
          <div className="w-20 h-1.5 bg-primary dark:bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-32 py-4 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot with Icon */}
              <span className="absolute -left-5 top-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white border-4 border-white dark:border-dark-bg shadow-sm">
                <MdWork className="w-4 h-4" />
              </span>

              {/* Side Date Label (for larger screens) */}
              <div className="hidden md:block absolute -left-48 top-3 w-36 text-right">
                <span className="text-sm font-semibold text-primary dark:text-blue-400">
                  {exp.duration}
                </span>
                <p className="text-xs text-muted dark:text-slate-450">{exp.location}</p>
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 sm:p-8 border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-300">
                {/* Date/Location for Mobile */}
                <div className="block md:hidden mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/40 text-primary dark:text-blue-400 mb-1">
                    {exp.duration}
                  </span>
                  <p className="text-xs text-muted dark:text-slate-400">{exp.location}</p>
                </div>

                <h3 className="text-xl font-bold text-slate-850 dark:text-gray-150">
                  {exp.role}
                </h3>
                <h4 className="text-md font-semibold text-primary dark:text-blue-400 mt-1">
                  {exp.company}
                </h4>

                <ul className="mt-4 space-y-3.5">
                  {exp.points.map((point, pIdx) => {
                    // Check if it's the database optimization point to highlight it
                    const isDbPoint = point.includes('MongoDB');
                    return (
                      <li key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-350 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0" />
                        <span>
                          {isDbPoint ? (
                            <>
                              Optimised database queries by{' '}
                              <strong className="text-primary dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/20 px-1.5 py-0.5 rounded">
                                77%
                              </strong>{' '}
                              (reducing load times from{' '}
                              <span className="line-through text-slate-400">420ms</span> to{' '}
                              <strong className="text-emerald-600 dark:text-emerald-450 font-semibold">95ms</strong>).
                            </>
                          ) : (
                            point
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
