import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import nestmateImg from '../assets/nestmate.png';
import bloodconnectImg from '../assets/bloodconnect.png';
import yelpcampImg from '../assets/yelpcamp.png';

const Work = () => {
  const projects = [
    {
      tag: 'PROJECT 01',
      title: 'NestMate',
      context: 'Flatmate and rental platforms lack real-time communication and secure data handling, making it hard for users to coordinate.',
      execution: 'Built a full-stack platform with React frontend, Node.js/Express backend, MongoDB, and WebSocket-based real-time chat under 150ms latency with JWT authorization.',
      impact: '300+ active listings, real-time chat under 150ms, and secure JWT-based data protection.',
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind'],
      github: 'https://github.com/Sahil3299/NestMate',
      live: null,
      image: nestmateImg,
    },
    {
      tag: 'PROJECT 02',
      title: 'BloodConnect',
      context: 'Emergency blood donors are hard to locate quickly during critical, time-sensitive situations.',
      execution: 'Engineered geospatial queries with MongoDB 2dsphere indexes to locate and notify nearest donors in under 3 seconds. Built with React, Node.js, and Geolocation API.',
      impact: 'Locates and notifies nearest donors in under 3 seconds. Adopted by 3 local hospitals for emergency use.',
      stack: ['React', 'Node.js', 'MongoDB', 'Geolocation API'],
      github: 'https://github.com/Sahil3299/Blood_connect',
      live: 'https://blood-connect-jwdg.vercel.app/',
      image: bloodconnectImg,
    },
    {
      tag: 'PROJECT 03',
      title: 'YelpCamp',
      context: 'Campground enthusiasts need a centralized platform to share and discover camping spots with reliable reviews.',
      execution: 'Developed a full CRUD application with Passport.js authentication, Cloudinary image storage, and Mapbox integration for interactive campground maps.',
      impact: 'Full-featured campground review platform with secure auth, rich media, and interactive map visualization.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
      github: 'https://github.com/Sahil3299/YelpCamp',
      live: 'https://yelpcamp-9qpe.onrender.com/',
      image: yelpcampImg,
    },
  ];

  return (
    <section id="work" className="relative px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="label">WORK</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1">Featured Projects</h2>
        </div>

        {/* 
          Sticky stacking: each card wrapper is position: sticky; top: 0 
          with a z-index that increases with index. Later cards stack on top.
          The container height is tall enough to scroll through all cards.
        */}
        <div className="relative" style={{ height: `${projects.length * 100 + 20}vh` }}>
          {projects.map((project, idx) => {
            const isDark = idx % 2 === 1;
            return (
              <div
                key={project.title}
                className="sticky top-0 h-screen flex items-start pt-8"
                style={{ zIndex: idx + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`w-full rounded-2xl p-8 lg:p-12 shadow-xl border ${
                    isDark
                      ? 'bg-black text-white border-white/10'
                      : 'bg-white text-black border-border'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-6 space-y-6">
                      <span className={`label ${isDark ? 'text-white/50' : ''}`}>{project.tag}</span>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">{project.title}</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="space-y-1.5">
                          <span className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-white/50' : 'text-muted'}`}>Context</span>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-muted'}`}>{project.context}</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-white/50' : 'text-muted'}`}>Execution</span>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-muted'}`}>{project.execution}</p>
                        </div>
                        <div className="space-y-1.5">
                          <span className={`text-[10px] font-semibold uppercase tracking-widest ${isDark ? 'text-white/50' : 'text-muted'}`}>Impact</span>
                          <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-muted'}`}>{project.impact}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 text-[11px] font-semibold rounded-full border ${
                              isDark
                                ? 'border-white/20 text-white/80'
                                : 'border-black/20 text-black/80'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold rounded-full transition-all ${
                              isDark
                                ? 'bg-white text-black hover:bg-white/90'
                                : 'bg-black text-white hover:bg-black/80'
                            }`}
                          >
                            <FaExternalLinkAlt className="w-3 h-3" />
                            Explore Live
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold rounded-full border transition-all ${
                            isDark
                              ? 'border-white/30 text-white/80 hover:border-white'
                              : 'border-black/30 text-black/80 hover:border-black'
                          }`}
                        >
                          <FaGithub className="w-3.5 h-3.5" />
                          Repository
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <div className="relative rounded-xl overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-[4/3] object-cover object-top brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Work;
