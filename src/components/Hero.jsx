import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaFileAlt, FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import profileImg from '../assets/me.jpg';

const Hero = () => {
  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 px-4 overflow-hidden bg-slate-50 dark:bg-dark-bg transition-colors duration-300"
    >
      {/* ───── Background Blobs ───── */}
      <div className="absolute top-20 -left-32 w-[28rem] h-[28rem] bg-blue-500/8 dark:bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-32 w-[32rem] h-[32rem] bg-indigo-500/8 dark:bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-sky-400/5 dark:bg-sky-600/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">

          {/* ═══════════ Left — Text Content ═══════════ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left space-y-7"
          >
            {/* Status Badge */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/40 text-primary dark:text-blue-400 border border-blue-100 dark:border-blue-900/40"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              {/* Available for opportunities */}
            </motion.span>

            {/* Heading */}
            <div className="space-y-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg sm:text-xl font-medium text-slate-500 dark:text-slate-400"
              >
                {/* Hey there 👋, I'm */}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-800 dark:text-gray-50"
              >
                Sahil{' '}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400 bg-clip-text text-transparent">
                  Shinde
                </span>
              </motion.h1>
            </div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 min-h-[2.5rem] sm:min-h-[3rem]"
            >
              <span className="text-slate-400 dark:text-slate-500 mr-1">&lt;</span>
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'AI & ML Student',
                  2000,
                  'Open Source Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={45}
                deletionSpeed={55}
                repeat={Infinity}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
                cursor={true}
                style={{ display: 'inline-block' }}
              />
              <span className="text-slate-400 dark:text-slate-500 ml-0.5">/&gt;</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="max-w-xl text-base sm:text-lg text-muted dark:text-slate-400 leading-relaxed"
            >
              Full-stack developer and AI &amp; ML engineering student with hands-on
              experience shipping production-grade web apps. Skilled in the MERN
              stack, real-time systems with Socket.IO, and geolocation-driven
              platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={handleScrollTo('projects')}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 dark:shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <MdWork className="w-5 h-5" />
                View Projects
                <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold border-2 border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 dark:border-slate-700 dark:hover:border-blue-500 dark:text-slate-300 dark:hover:text-blue-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <FaFileAlt className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3 pt-4"
            >
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mr-2">
                Find me on
              </span>
              {[
                { icon: FaGithub, href: 'https://github.com/Sahil3299', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sahil-shinde-a30948329', label: 'LinkedIn' },
                { icon: FaEnvelope, href: 'mailto:sahilshinde2402@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="p-2.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══════════ Right — Profile Image ═══════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Animated glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-full opacity-40 group-hover:opacity-60 blur-lg transition-all duration-700 animate-[spin_8s_linear_infinite]" />

              {/* Image container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Sahil Shinde — Full Stack Developer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
