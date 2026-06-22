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
      subtitle: 'Flatmate & Rental Platform',
      description: 'A platform to find rooms and roommates. Features 300+ active listings, real-time WebSocket chat under 150ms latency, and JWT authorization for data security.',
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind'],
      github: 'https://github.com/Sahil3299/NestMate',
      live: null,
      image: nestmateImg,
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'BloodConnect',
      subtitle: 'Emergency Blood Donor Network',
      description: 'An emergency platform using geospatial indexing to locate and notify the nearest blood donor in under 3 seconds. Proudly adopted by 3 local hospitals.',
      stack: ['React', 'Node.js', 'MongoDB', 'Geolocation API'],
      github: 'https://github.com/Sahil3299/Blood_connect',
      live: 'https://blood-connect-jwdg.vercel.app/',
      image: bloodconnectImg,
      gradient: 'from-rose-600 to-red-600',
    },
    {
      title: 'YelpCamp',
      subtitle: 'Campground Review Platform',
      description: 'A full-stack CRUD application allowing users to share and review campgrounds. Features Passport.js authentication, Cloudinary image storage, and Mapbox maps.',
      stack: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Mapbox'],
      github: 'https://github.com/Sahil3299/YelpCamp',
      live: 'https://yelpcamp-9qpe.onrender.com/',
      image: yelpcampImg,
      gradient: 'from-amber-600 to-orange-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-white dark:bg-dark-card transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-gray-100">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary dark:bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col bg-slate-50 dark:bg-dark-bg rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.subtitle}`}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[10px] font-semibold text-white/80 uppercase tracking-widest">
                    Web Application
                  </span>
                  <h3 className="text-xl font-bold text-white drop-shadow-md leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Subtitle */}
                  <h4 className="text-sm font-semibold text-primary dark:text-blue-400 uppercase tracking-wide">
                    {project.subtitle}
                  </h4>
                  {/* Description */}
                  <p className="text-sm text-muted dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 space-y-5">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full border border-slate-300 hover:border-slate-800 dark:border-slate-700 dark:hover:border-slate-200 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all duration-200"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full text-white bg-primary hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-200"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Live Demo
                    </a>
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
