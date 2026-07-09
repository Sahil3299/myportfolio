import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaCheck } from 'react-icons/fa';
import profileImg from '../assets/me.jpg';

const leetcodeStats = { total: 80, easy: 50, med: 25, hard: 5 };

const Hero = () => {
  const [copied, setCopied] = useState(null);

  const handleScrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 1500);
  };

  const rightVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.5 + i * 0.15, duration: 0.4 } }),
  };

  return (
    <section id="hero" className="relative min-h-screen py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ──────── LEFT COLUMN ──────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 space-y-7"
          >
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-semibold uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              CURRENTLY SHIPPING // AVAILABLE
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                FROM PROTOTYPE<br />
                <span className="italic font-black">TO PRODUCTION.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted max-w-md">
                Full Stack Developer &amp; AI/ML student — I take rough ideas and turn them into software people actually use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <a
                href="#work"
                onClick={handleScrollTo('work')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-semibold hover:bg-black/80 transition-all"
              >
                See the work
                <FaArrowDown className="w-3 h-3" />
              </a>
            </motion.div>
          </motion.div>

          {/* ──────── RIGHT COLUMN — Photo + Cards Below ──────── */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-sm lg:max-w-md"
          >
            {/* Photo */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <img
                src={profileImg}
                alt="Sahil Shinde"
                className="w-full aspect-[4/5] object-cover object-center"
              />
            </div>

            {/* 3 Cards below photo */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {/* Card 1 — GitHub */}
              <motion.div
                custom={0}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-md border border-border p-4"
              >
                <div className="flex items-center gap-1.5 mb-2">
                  <FaGithub className="w-3 h-3" />
                  <span className="text-[8px] font-semibold uppercase tracking-wider">GitHub</span>
                </div>
                <p className="text-lg font-black">400+</p>
                <p className="text-[8px] text-muted mb-1.5">Commits</p>
                <div className="flex items-end gap-[2px] h-5">
                  {[40, 65, 35, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-black/10 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </motion.div>

              {/* Card 2 — LeetCode */}
              <motion.div
                custom={1}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-md border border-border p-4"
              >
                <span className="text-[8px] font-semibold uppercase tracking-wider mb-2 block">SOLVED</span>
                <div className="flex items-center gap-2">
                  <div className="relative w-10 h-10 shrink-0">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e5e3" strokeWidth="3" />
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#000" strokeWidth="3"
                        strokeDasharray={`${(leetcodeStats.easy / 951) * 94.2} 94.2`} strokeLinecap="round" />
                      <circle cx="18" cy="18" r="15" fill="none" stroke="#f59e0b" strokeWidth="3"
                        strokeDasharray={`${(leetcodeStats.med / 2074) * 94.2} 94.2`}
                        strokeDashoffset={`-${(leetcodeStats.easy / 951) * 94.2}`} strokeLinecap="round" />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[9px] font-black">{leetcodeStats.total}</span>
                  </div>
                  <div className="space-y-0.5">
                    {[
                      { label: 'E', count: leetcodeStats.easy, color: 'bg-black' },
                      { label: 'M', count: leetcodeStats.med, color: 'bg-amber-500' },
                      { label: 'H', count: leetcodeStats.hard, color: 'bg-red-500' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                        <span className="text-[7px] text-muted">{item.label}</span>
                        <span className="text-[7px] font-semibold">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Card 3 — INDEX 06 */}
              <motion.div
                custom={2}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl shadow-md border border-border p-4"
              >
                <span className="text-[8px] font-semibold uppercase tracking-widest mb-2 block">INDEX 06</span>
                <div className="space-y-1.5">
                  {[
                    { icon: FaEnvelope, label: 'Email' },
                    { icon: FaGithub, label: 'GitHub' },
                    { icon: FaLinkedin, label: 'LinkedIn' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => copyToClipboard(item.label === 'Email' ? 'sahilshinde2402@gmail.com' : item.label === 'GitHub' ? '/Sahil3299' : '/in/sahil-shinde')}
                      className="flex items-center gap-1.5 w-full hover:bg-black/5 rounded-lg p-1 transition-all group"
                    >
                      {copied && copied.includes(item.label) ? (
                        <FaCheck className="w-2.5 h-2.5 text-green-600" />
                      ) : (
                        <item.icon className="w-2.5 h-2.5 text-muted group-hover:text-black transition-colors" />
                      )}
                      <span className="text-[7px] text-muted group-hover:text-black transition-colors">{item.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL indicator */}
        <div className="hidden lg:flex flex-col items-center gap-2 absolute right-8 bottom-8">
          <span className="text-[8px] tracking-[0.25em] text-muted" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
          <div className="w-px h-12 bg-border" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
