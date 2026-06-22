import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-20 px-4 bg-slate-50 dark:bg-dark-bg transition-colors duration-300 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-gray-100">
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-primary dark:bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details (Left side) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 bg-white dark:bg-dark-card rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-gray-100">
                Let's discuss your next project
              </h3>
              <p className="text-sm sm:text-base text-muted dark:text-slate-400 leading-relaxed">
                I'm currently looking for full-time Full Stack Development or AI/ML roles. Feel free to shoot me an email, give me a call, or use the contact form to reach out. I will get back to you as soon as possible!
              </p>

              {/* Direct Info Links */}
              <div className="space-y-4 pt-4">
                <a
                  href="mailto:sahilshinde2402@gmail.com"
                  className="flex items-center gap-3.5 group text-slate-650 dark:text-slate-350 hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                  <span className="p-3 bg-blue-50 dark:bg-blue-950/45 text-primary dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                    <FaEnvelope className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted dark:text-slate-500 font-semibold uppercase tracking-wider">Email Me</p>
                    <p className="text-sm font-semibold">sahilshinde2402@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+91-7028221624"
                  className="flex items-center gap-3.5 group text-slate-650 dark:text-slate-350 hover:text-primary dark:hover:text-blue-400 transition-colors"
                >
                  <span className="p-3 bg-blue-50 dark:bg-blue-950/45 text-primary dark:text-blue-400 rounded-xl group-hover:scale-110 transition-transform">
                    <FaPhoneAlt className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <p className="text-xs text-muted dark:text-slate-500 font-semibold uppercase tracking-wider">Call Me</p>
                    <p className="text-sm font-semibold">+91-70282 21624</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center gap-4 pt-8 lg:pt-0 border-t border-slate-100 dark:border-slate-800 mt-8 lg:mt-0">
              <a
                href="https://github.com/sahilshinde-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-bg text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5.5 h-5.5" />
              </a>
              <a
                href="https://linkedin.com/in/sahil-shinde"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-bg text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5.5 h-5.5" />
              </a>
              <a
                href="mailto:sahilshinde2402@gmail.com"
                className="p-3 rounded-xl bg-slate-100 dark:bg-dark-bg text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-5.5 h-5.5" />
              </a>
            </div>
          </motion.div>

          {/* Form (Right side) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 bg-white dark:bg-dark-card rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-250 dark:border-slate-850 bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-gray-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/25 dark:focus:ring-blue-500/25 focus:border-primary dark:focus:border-blue-500 transition-all duration-205"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-250 dark:border-slate-850 bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-gray-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/25 dark:focus:ring-blue-500/25 focus:border-primary dark:focus:border-blue-500 transition-all duration-205"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-250 dark:border-slate-850 bg-slate-50 dark:bg-dark-bg text-slate-800 dark:text-gray-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/25 dark:focus:ring-blue-500/25 focus:border-primary dark:focus:border-blue-500 transition-all duration-205 resize-none"
                  placeholder="Your Message..."
                />
              </div>

              {/* Status Indicator */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-4 text-sm font-semibold rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450 border border-emerald-100 dark:border-emerald-950/50"
                  >
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Thanks for reaching out! Your message was sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-white bg-primary hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 shadow-md shadow-blue-500/15 dark:shadow-blue-900/20 disabled:opacity-70 transition-all duration-300"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
