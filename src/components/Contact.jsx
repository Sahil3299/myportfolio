import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import resume from '../assets/Sahil_Resume (4).pdf';

const Contact = () => {
  const channels = [
    { number: '01', name: 'Email', href: 'mailto:sahilshinde2402@gmail.com', detail: 'sahilshinde2402@gmail.com', icon: FaEnvelope },
    { number: '02', name: 'GitHub', href: 'https://github.com/Sahil3299', detail: 'github.com/Sahil3299', icon: FaGithub },
    { number: '03', name: 'LinkedIn', href: 'https://www.linkedin.com/in/sahil-shinde-a30948329', detail: 'linkedin.com/in/sahil-shinde', icon: FaLinkedin },
    { number: '04', name: 'LeetCode', href: 'https://leetcode.com/u/GawULSVCu5/', detail: 'leetcode.com/u/GawULSVCu5', icon: SiLeetcode },
    { number: '05', name: 'Blog', href: '/blog', detail: 'Read technical posts', icon: FaExternalLinkAlt },
    { number: '06', name: 'Resume', href: resume, detail: 'Download PDF', icon: FaExternalLinkAlt },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="label">INDEX // 06</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-1">Connect</h2>
          <p className="text-muted mt-3 max-w-lg">
            I'm open to engineering roles, consulting engagements, and technical collaborations.
            Let's talk about systems, products, and codebase architecture.
          </p>
        </div>

        {/* Directory list */}
        <div className="space-y-3">
          {channels.map((channel) => (
            <motion.a
              key={channel.number}
              href={channel.href}
              target={channel.name === 'Email' ? undefined : '_blank'}
              rel={channel.name === 'Email' ? undefined : 'noopener noreferrer'}
              whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 15 } }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs font-mono text-muted w-5">{channel.number}</span>
                <channel.icon className="w-4 h-4 text-muted group-hover:text-black transition-colors" />
                <div>
                  <p className="font-semibold text-sm group-hover:text-black transition-colors">{channel.name}</p>
                  <p className="text-xs text-muted">{channel.detail}</p>
                </div>
              </div>
              <FaExternalLinkAlt className="w-3 h-3 text-muted group-hover:text-black transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-black text-white text-center"
        >
          <p className="text-sm font-medium mb-3">Send a message directly</p>
          <a
            href="mailto:sahilshinde2402@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all"
          >
            <FaEnvelope className="w-4 h-4" />
            sahilshinde2402@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
