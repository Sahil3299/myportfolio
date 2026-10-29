
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import nestmateImg from '../assets/nestmate.png';
import bloodconnectImg from '../assets/bloodconnect.png';
import yelpcampImg from '../assets/yelpcamp.png';

// Explicit live URLs, independent of the project objects.
const LIVE_LINKS = {
  NestMate: 'https://nestmate-frontend.vercel.app/',
  BloodConnect: 'https://blood-connect-jwdg.vercel.app/',
  YelpCamp: 'https://yelpcamp-9qpe.onrender.com/',
};

const projects = [
  {
    title: 'NestMate',
    tag: 'PROJECT 01',
    context:
      'Flatmate and rental platforms lack real-time communication and secure data handling.',
    execution:
      'Built a full-stack platform with React frontend, Node.js/Express backend, MongoDB, and WebSocket-based real-time chat. Implemented JWT authorization and optimized queries.',
    impact:
      'Real-time chat, secure JWT-based authorization, and a platform for finding compatible flatmates.',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind'],
    github: 'https://github.com/Sahil3299/NestMate',
    image: nestmateImg,
    metrics: ['300+ Active Listings', '<150ms Chat Latency', 'JWT Auth'],
  },
  {
    title: 'BloodConnect',
    tag: 'PROJECT 02',
    context:
      'Emergency blood donors are hard to locate quickly during critical situations.',
    execution:
      'Developed a donor discovery platform using React, Node.js, Express, and MongoDB, with blood-group and location-based search functionality.',
    impact:
      'Helps users discover suitable blood donors based on blood group and location.',
    stack: ['React', 'Node.js', 'MongoDB', 'Geolocation API'],
    github: 'https://github.com/Sahil3299/Blood_connect',
    image: bloodconnectImg,
    metrics: ['Donor Search', 'Blood Group Filters', 'Location-Based'],
  },
  {
    title: 'YelpCamp',
    tag: 'PROJECT 03',
    context:
      'Campground enthusiasts need a platform to share and review camping spots.',
    execution:
      'Developed a full CRUD application with Passport.js authentication, Cloudinary image storage, and Mapbox integration for interactive campground maps.',
    impact:
      'A campground listing and review platform with authentication, image uploads, and map integration.',
    stack: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
    github: 'https://github.com/Sahil3299/YelpCamp',
    image: yelpcampImg,
    metrics: ['Full CRUD', 'Authentication', 'Map Integration'],
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

const Projects = () => {
  return (
    <section id="work" className="relative px-4 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center gap-4"
        >
          <span className="section-number font-mono">
            02 / FEATURED WORK
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 text-3xl font-bold sm:text-4xl"
        >
          Proof of Work.
        </motion.h2>

        {/* Project List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-20"
        >
          {projects.map((project) => {
            // Resolve live URL independently from project.live.
            const liveUrl = LIVE_LINKS[project.title];

            return (
              <motion.article
                key={project.title}
                variants={cardVariants}
                className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
              >
                {/* Left: Project Details */}
                <div className="space-y-6 lg:col-span-5">
                  <span className="font-mono text-xs tracking-wider text-primary/60">
                    {project.tag}
                  </span>

                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {project.title}
                  </h3>

                  <div className="grid grid-cols-1 gap-5 border-t border-border/50 pt-6 sm:grid-cols-3">
                    <div className="space-y-2">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
                        Context
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {project.context}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
                        Execution
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {project.execution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-accent">
                        Impact
                      </h4>
                      <p className="text-sm leading-relaxed text-muted">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[11px] text-primary/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Metrics */}
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-lg border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Links: always render the live link and repository */}
                  <div className="!mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Explore ${project.title} live`}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-gray-200"
                    >
                      Explore Live
                      <FaExternalLinkAlt className="h-3 w-3" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} repository on GitHub`}
                      className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-colors duration-300 hover:border-white hover:text-white"
                    >
                      <FaGithub className="h-4 w-4" />
                      Repository
                    </a>
                  </div>
                </div>

                {/* Right: Project Preview */}
                <div className="lg:col-span-7">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live website`}
                    className="group relative block"
                  >
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60" />

                    <div className="relative overflow-hidden rounded-2xl border border-border/50">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        className="aspect-video h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    </div>
                  </a>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
