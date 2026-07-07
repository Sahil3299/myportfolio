import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import nestmateImg from '../assets/nestmate.png';
import bloodconnectImg from '../assets/bloodconnect.png';
import yelpcampImg from '../assets/yelpcamp.png';

const Projects = () => {
  const projects = [
    {
      title: 'NestMate',
      tag: 'PROJECT 01',
      context: 'Flatmate and rental platforms lack real-time communication and secure data handling.',
      execution: 'Built a full-stack platform with React frontend, Node.js/Express backend, MongoDB, and WebSocket-based real-time chat. Implemented JWT authorization and optimized queries.',
      impact: '300+ active listings, real-time chat under 150ms latency, and secure JWT-based data protection.',
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind'],
      github: 'https://github.com/Sahil3299/NestMate',
      live: null,
      image: nestmateImg,
      metrics: ['300+ Active Listings', '<150ms Chat Latency', 'JWT Secured'],
    },
    {
      title: 'BloodConnect',
      tag: 'PROJECT 02',
      context: 'Emergency blood donors are hard to locate quickly during critical situations.',
      execution: 'Engineered a geospatial query system with MongoDB 2dsphere indexes to find and notify nearest blood donors. Built with React, Node.js, and Geolocation API.',
      impact: 'Locates and notifies nearest donors in under 3 seconds. Adopted by 3 local hospitals.',
      stack: ['React', 'Node.js', 'MongoDB', 'Geolocation API'],
      github: 'https://github.com/Sahil3299/Blood_connect',
      live: 'https://blood-connect-jwdg.vercel.app/',
      image: bloodconnectImg,
      metrics: ['<3s Donor Location', '3 Hospitals', 'Real-time Alerts'],
    },
    {
      title: 'YelpCamp',
      tag: 'PROJECT 03',
      context: 'Campground enthusiasts need a platform to share and review camping spots.',
      execution: 'Developed a full CRUD application with Passport.js authentication, Cloudinary image storage, and Mapbox integration for interactive campground maps.',
      impact: 'Full-featured campground review platform with secure auth and rich media support.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
      github: 'https://github.com/Sahil3299/YelpCamp',
      live: 'https://yelpcamp-9qpe.onrender.com/',
      image: yelpcampImg,
      metrics: ['Full CRUD', 'Auth System', 'Map Integration'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="work"
      className="py-24 px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="section-number font-mono">02 / FEATURED WORK</span>
          <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold mb-16"
        >
          Proof of Work.
        </motion.h2>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-20"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
            >
              {/* Left - Project Info */}
              <div className="lg:col-span-5 space-y-6">
                <span className="font-mono text-xs text-primary/60 tracking-wider">{project.tag}</span>

                <h3 className="text-2xl sm:text-3xl font-bold">{project.title}</h3>

                {/* Context */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider">Context</h4>
                  <p className="text-sm text-muted leading-relaxed">{project.context}</p>
                </div>

                {/* Execution */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider">Execution</h4>
                  <p className="text-sm text-muted leading-relaxed">{project.execution}</p>
                </div>

                {/* Impact */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-accent uppercase tracking-wider">Impact</h4>
                  <p className="text-sm text-muted leading-relaxed">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-[11px] font-mono rounded-md bg-primary/5 border border-primary/20 text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-accent/5 border border-accent/20 text-accent"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-primary hover:bg-blue-700 text-white transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Explore Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border border-border hover:border-primary/50 text-muted hover:text-text transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    Repository
                  </a>
                </div>
              </div>

              {/* Right - Project Image */}
              <div className="lg:col-span-7">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-border/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
