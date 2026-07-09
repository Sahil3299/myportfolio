import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMedal, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      title: 'Solved 80+ Problems on LeetCode',
      detail: 'Consistently practicing data structures and algorithms to strengthen problem-solving skills.',
      icon: <FaCode className="w-8 h-8 text-amber-500" />,
      tag: 'Problem Solving',
      color: 'border-amber-500/20 hover:border-amber-500/40 dark:border-amber-500/10 dark:hover:border-amber-500/30',
      bg: 'bg-amber-500/5',
      link: 'https://leetcode.com/u/GawULSVCu5',
      linkLabel: 'View Profile',
    },
    {
      title: 'Selected for State-Level Project Expo at JCOE',
      detail: 'Selected among competing teams to present a technical project at a state-level Project Expo, representing the college against participants from across Maharashtra.',
      icon: <FaMedal className="w-8 h-8 text-blue-500" />,
      tag: 'State-Level',
      color: 'border-blue-500/20 hover:border-blue-500/40 dark:border-blue-500/10 dark:hover:border-blue-500/30',
      bg: 'bg-blue-500/5',
    },
    {
      title: 'The Web Developer Bootcamp — Udemy, Colt Steele, 2023',
      detail: 'Completed an industry-recognized 65+ hour full-stack web development course covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB.',
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
      className="pt-28 pb-24 px-4 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="label">ACHIEVEMENTS</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1">Achievements &amp; Certifications</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="flex flex-col p-6 sm:p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl ${ach.bg} flex items-center justify-center`}>
                    {ach.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-white border border-border text-muted shrink-0">
                    {ach.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-text leading-snug">
                    {ach.title}
                  </h3>
                </div>

                <p className="text-sm text-muted leading-relaxed flex-1">
                  {ach.detail}
                </p>
              </div>

              <div className="mt-4 min-h-[1.25rem]">
                {ach.link ? (
                  <a
                    href={ach.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-text transition-colors"
                  >
                    {ach.linkLabel || 'View'} <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
