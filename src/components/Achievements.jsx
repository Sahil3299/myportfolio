import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: '4th Place, State-Level Technical Quiz',
      event: 'Maharashtra Technical Event 2023',
      detail: 'Competed against 500+ participants from all across Maharashtra, testing core computer science and programming speed.',
      icon: <FaTrophy className="w-8 h-8 text-amber-500" />,
      tag: 'State-Level',
      color: 'border-amber-500/20 hover:border-amber-500/40 dark:border-amber-500/10 dark:hover:border-amber-500/30',
      bg: 'bg-amber-500/5',
    },
    {
      title: 'Project Expo Participant',
      event: 'State-Level Project Competition 2023',
      detail: 'Selected to present a live engineering prototype. Competed with entries from over 50+ regional engineering colleges.',
      icon: <FaMedal className="w-8 h-8 text-blue-500" />,
      tag: 'State-Level',
      color: 'border-blue-500/20 hover:border-blue-500/40 dark:border-blue-500/10 dark:hover:border-blue-500/30',
      bg: 'bg-blue-500/5',
    },
    {
      title: 'The Web Developer Bootcamp',
      event: 'Udemy Certificate (Colt Steele)',
      detail: 'Completed a comprehensive 65+ hour curriculum covering full-stack technologies including HTML/CSS, JS, Node, Express, and MongoDB.',
      icon: <FaCertificate className="w-8 h-8 text-emerald-500" />,
      tag: '65+ Hours',
      color: 'border-emerald-500/20 hover:border-emerald-500/40 dark:border-emerald-500/10 dark:hover:border-emerald-500/30',
      bg: 'bg-emerald-500/5',
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
    hidden: { y: 40, opacity: 0 },
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
      id="achievements" 
      className="py-20 px-4 bg-white dark:bg-dark-card transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-gray-100">
            Achievements &amp; Certificates
          </h2>
          <div className="w-20 h-1.5 bg-primary dark:bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`flex flex-col justify-between p-6 sm:p-8 bg-slate-50 dark:bg-dark-bg rounded-2xl border ${ach.color} shadow-md hover:shadow-xl transition-all duration-300`}
            >
              <div className="space-y-4">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl ${ach.bg} flex items-center justify-center`}>
                    {ach.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                    {ach.tag}
                  </span>
                </div>

                {/* Achievement Titles */}
                <div>
                  <h3 className="text-lg font-extrabold text-slate-850 dark:text-gray-150 leading-snug">
                    {ach.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-primary dark:text-blue-450 mt-1">
                    {ach.event}
                  </h4>
                </div>

                {/* Details */}
                <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">
                  {ach.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
