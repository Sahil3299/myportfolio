import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdWork, MdSchool, MdKeyboardArrowDown } from 'react-icons/md';

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      date: '2024 — 2027 (Expected)',
      title: 'B.E. in Artificial Intelligence & Machine Learning',
      subtitle: 'PES Modern College of Engineering, Pune',
      tags: ['Education'],
      details: [
        'Specializing in advanced AI/ML models, deep learning, and computer vision',
        'Active participant in technical events and hackathons',
        'Building full-stack web applications alongside AI coursework',
      ],
    },
    {
      type: 'education',
      date: '2021 — 2024',
      title: 'Diploma in Computer Engineering',
      subtitle: 'Jaihind Polytechnic, Pune',
      tags: ['Education'],
      details: [
        'Solid foundation in programming, database systems, and software engineering',
        'Scored 89.94% with distinction',
        'Developed multiple full-stack projects during coursework',
      ],
    },
    {
      type: 'work',
      date: 'Jun 2023 — Jul 2023',
      title: 'Web Development Intern',
      subtitle: 'Omegasoft Technologies Pvt. Ltd., Pune',
      tags: ['Internship'],
      details: [
        'Shipped 4 React.js frontend modules contributing to client deliverables',
        'Optimised MongoDB queries by 77% (420ms → 95ms load times)',
        'Managed 15+ Git branches in Agile/Scrum environment',
      ],
    },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="label">EXPERIENCE</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1">Timeline</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const isOpen = hoveredIdx === idx;
              return (
                <motion.div
                  key={`${exp.title}-${idx}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center z-10 shadow-sm">
                    {exp.type === 'education' ? (
                      <MdSchool className="w-5 h-5" />
                    ) : (
                      <MdWork className="w-5 h-5" />
                    )}
                  </div>

                  {/* Date */}
                  <span className="text-xs font-semibold text-muted">{exp.date}</span>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="mt-1.5 p-5 rounded-2xl bg-white border border-border shadow-sm select-none"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="text-base font-bold">{exp.title}</h3>
                        <p className="text-sm text-muted mt-0.5">{exp.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-0.5 text-[9px] font-semibold rounded-full bg-black text-white">
                          {exp.tags[0]}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <MdKeyboardArrowDown className="w-4 h-4 text-muted" />
                        </motion.div>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2 pt-4 border-t border-border">
                            {exp.details.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2 text-sm text-muted">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-black/30 shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
