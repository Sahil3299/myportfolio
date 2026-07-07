import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Activity = () => {
  return (
    <section id="activity" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="label">ACTIVITY</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1">Development Metrics</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-white border border-border shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <FaGithub className="w-5 h-5" />
                <div>
                  <h3 className="font-bold text-sm">GitHub / Sahil3299</h3>
                  <p className="text-xs text-muted">Open Source Activity</p>
                </div>
              </div>
              <a
                href="https://github.com/Sahil3299"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-muted hover:text-black transition-colors"
              >
                View Profile <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="rounded-xl bg-[#f8f8f6] p-4 border border-border">
              <img
                src="https://ghchart.rshah.org/000000/Sahil3299"
                alt="GitHub Contributions"
                className="w-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <p className="text-xs text-muted mt-3">
              Contributions to core engines, packages, and developer workflows.
            </p>
          </motion.div>

          {/* LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-white border border-border shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <span className="font-bold text-sm">LeetCode</span>
                <div>
                  <h3 className="font-bold text-sm">/ GawULSVCu5</h3>
                  <p className="text-xs text-muted">Algorithmic Baseline</p>
                </div>
              </div>
              <a
                href="https://leetcode.com/u/GawULSVCu5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-medium text-muted hover:text-black transition-colors"
              >
                View Profile <FaExternalLinkAlt className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="flex items-center gap-8 py-4">
              {/* Donut */}
              <div className="relative w-32 h-32">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e5e3" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#000" strokeWidth="8"
                    strokeDasharray={`${(226/951) * 264} 264`} strokeLinecap="round" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#f59e0b" strokeWidth="8"
                    strokeDasharray={`${(166/2074) * 264} 264`}
                    strokeDashoffset={`-${(226/951) * 264}`} strokeLinecap="round" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#ef4444" strokeWidth="8"
                    strokeDasharray={`${(32/948) * 264} 264`}
                    strokeDashoffset={`-${((226/951) + (166/2074)) * 264}`} strokeLinecap="round" />
                  <text x="50" y="48" textAnchor="middle" dominantBaseline="central"
                    className="fill-black font-black text-2xl" transform="rotate(90, 50, 50)">424</text>
                  <text x="50" y="60" textAnchor="middle" dominantBaseline="central"
                    className="fill-muted text-[7px]" transform="rotate(90, 50, 50)">SOLVED</text>
                </svg>
              </div>

              {/* Legend */}
              <div className="space-y-2.5">
                {[
                  { label: 'Easy', count: '226', total: '951', color: 'bg-black' },
                  { label: 'Medium', count: '166', total: '2074', color: 'bg-amber-500' },
                  { label: 'Hard', count: '32', total: '948', color: 'bg-red-500' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
                    <span className="text-xs text-muted w-14">{item.label}</span>
                    <span className="text-xs font-semibold">{item.count}</span>
                    <span className="text-[10px] text-muted">/ {item.total}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted mt-2 text-center">
              Solved 424 problems (32 Hard) verifying computational complexity.
            </p>
          </motion.div>
        </div>

        {/* Open Source */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 p-6 rounded-2xl bg-white border border-border shadow-sm"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <FaGithub className="w-5 h-5" />
            <h3 className="font-bold text-sm">Open Source & Competitions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">01 / Ecosystem</span>
              <h4 className="font-semibold text-sm">Project Jupyter / JupyterLab</h4>
              <p className="text-sm text-muted">
                Patched font size handler editor bug preventing client-side freezes. Merged PR #18157.
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-black transition-colors">
                Merged PR #18157 <FaExternalLinkAlt className="w-2 h-2" />
              </a>
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted">02 / Hackathons</span>
              <h4 className="font-semibold text-sm">Competitive Engineering</h4>
              <p className="text-sm text-muted">
                Finalist at ADCET 2024 and DYPDPU 1.0 2025. Qualified for Avishkar State Championship.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Activity;
