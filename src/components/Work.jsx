import {
  FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt, FaMapMarkerAlt, FaServer,
} from 'react-icons/fa';
import {
  SiMongodb, SiSocketdotio, SiTailwindcss, SiExpress, SiMapbox, SiCloudinary,
} from 'react-icons/si';
import nestmateImg from '../assets/nestmate.png';
import bloodconnectImg from '../assets/bloodconnect.png';
import yelpcampImg from '../assets/yelpcamp.png';

const techIconMap = {
  React: FaReact,
  'Node.js': FaNodeJs,
  MongoDB: SiMongodb,
  'Socket.IO': SiSocketdotio,
  Tailwind: SiTailwindcss,
  Express: SiExpress,
  'Geolocation API': FaMapMarkerAlt,
  Cloudinary: SiCloudinary,
  Mapbox: SiMapbox,
};

const ProjectCard = ({ project }) => {

  return (
    <div className="w-full rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 lg:p-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* ─── LEFT COLUMN ─── */}
        <div className="space-y-5">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-gray-500">
            {project.tag}
          </span>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            {project.title}
          </h3>

          <div className="w-full h-px bg-white/10" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'CONTEXT', text: project.context },
              { label: 'EXECUTION', text: project.execution },
              { label: 'IMPACT', text: project.impact },
            ].map((col) => (
              <div key={col.label} className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                  {col.label}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed">{col.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => {
              const Icon = techIconMap[tech] || FaServer;
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold rounded-full bg-gray-800 text-gray-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {tech}
                </span>
              );
            })}
          </div>

          <div className="w-full h-px bg-white/10" />

          <div className="grid grid-cols-3 gap-4">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl sm:text-2xl font-black text-white">{stat.metric}</p>
                <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-gray-500 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-all"
              >
                Explore Live <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold rounded-full border border-white/30 text-gray-300 hover:border-white hover:text-white transition-all"
            >
              <FaGithub className="w-3.5 h-3.5" />
              Repository
            </a>
          </div>
        </div>

        {/* ─── RIGHT COLUMN ─── */}
        <div className="space-y-3">
          <div className="p-3 bg-gray-900 rounded-xl border border-white/10">
            <div className="rounded-lg overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800/50 border-b border-white/5">
                <span className="w-2 h-2 rounded-full bg-red-500/80" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <span className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="ml-2 text-[9px] text-gray-500 font-mono truncate">
                  {project.live ? new URL(project.live).hostname : 'github.com'}
                </span>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/9] object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Work = () => {
  const projects = [
    {
      tag: 'PROJECT 01',
      title: 'NestMate',
      context: 'Flatmate and rental platforms lack real-time communication and secure data handling, making it hard for users to coordinate.',
      execution: 'Built a full-stack platform with React frontend, Node.js/Express backend, MongoDB, and WebSocket-based real-time chat under 150ms latency with JWT authorization.',
      impact: 'Real-time chat with secure JWT-based data protection backed by an active rental community.',
      stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'Tailwind'],
      stats: [
        { metric: '300+', label: 'ACTIVE LISTINGS' },
        { metric: '<150ms', label: 'CHAT LATENCY' },
        { metric: 'JWT', label: 'AUTH' },
      ],
      github: 'https://github.com/Sahil3299/NestMate',
      live: null,
      image: nestmateImg,
    },
    {
      tag: 'PROJECT 02',
      title: 'BloodConnect',
      context: 'Emergency blood donors are hard to locate quickly during critical, time-sensitive situations.',
      execution: 'Engineered geospatial queries with MongoDB 2dsphere indexes to locate and notify nearest donors in under 3 seconds. Built with React, Node.js, and Geolocation API.',
      impact: 'Geospatial donor notification system adopted by local hospitals for emergency blood requests.',
      stack: ['React', 'Node.js', 'MongoDB', 'Geolocation API'],
      stats: [
        { metric: '<3s', label: 'DONOR LOCATE' },
        { metric: '3', label: 'HOSPITALS' },
        { metric: 'Geo', label: 'QUERY' },
      ],
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
      stats: [
        { metric: 'CRUD', label: 'FULL STACK' },
        { metric: 'Cloud', label: 'MEDIA' },
        { metric: 'Mapbox', label: 'MAPS' },
      ],
      github: 'https://github.com/Sahil3299/YelpCamp',
      live: 'https://yelpcamp-9qpe.onrender.com/',
      image: yelpcampImg,
    },
  ];

  return (
    <section id="work" className="relative px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="label">WORK</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1">Featured Projects</h2>
        </div>

        <div className="relative" style={{ height: `${projects.length * 100 + 20}vh` }}>
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="sticky top-0 min-h-[80vh] flex items-start pt-8"
              style={{ zIndex: idx + 1, marginBottom: idx < projects.length - 1 ? '-5vh' : 0 }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
