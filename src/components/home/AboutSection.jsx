import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCpu, FiMapPin, FiShield, FiArrowRight, FiGlobe, FiActivity } = FiIcons;

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pillars = [
    { icon: FiCpu, title: 'Robotic Precision', description: 'State-of-the-art Mako Robotic Technology for sub-millimeter accuracy', color: 'text-blue-600 bg-blue-50' },
    { icon: FiActivity, title: 'Rapid Recovery', description: 'Advanced protocols ensuring faster return to normal life', color: 'text-green-600 bg-green-50' },
    { icon: FiShield, title: 'World-Class Care', description: 'International standards of safety and hygiene', color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <section ref={ref} className="pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-[#1E97D9] font-semibold text-sm uppercase tracking-wide">
                About Impact Ortho Centre
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Pioneers in Robotic Joint Replacement
              </h2>
              <h3 className="text-xl text-gray-700 font-medium mb-6">
                20+ Years of Excellence | 5000+ Successful Surgeries
              </h3>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Impact Orthopedic & Joint Replacement Center using <strong>Robotic Technology</strong>, we are revolutionizing orthopedic care in Hyderabad. Led by Dr. Ratnakar Rao, we specialize in <strong>Robotic Knee & Hip Replacements</strong> that offer unparalleled precision and longevity.
              </p>
              <p>
                Our adoption of cutting-edge technology like the <strong>Mako Robotic-Arm</strong> ensures that every implant is placed with sub-millimeter accuracy, preserving healthy bone and soft tissue for a more natural feeling joint and quicker recovery.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-3"
                >
                  <div className={`w-16 h-16 ${pillar.color.split(' ')[1]} rounded-xl flex items-center justify-center mx-auto`}>
                    <SafeIcon icon={pillar.icon} className={`w-8 h-8 ${pillar.color.split(' ')[0]}`} />
                  </div>
                  <h3 className="font-bold text-gray-900">{pillar.title}</h3>
                  <p className="text-sm text-gray-600">{pillar.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 group"
              >
                More About Robotic Surgery
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://impactorthocenter.com/photos/impact-doctor-about.webp" alt="Dr Ratnakar Rao Robotic Surgeon" className="w-full h-[500px] object-cover" />
              </div>

              {/* Overlapping Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 border"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1E97D9]">Mako</div>
                    <div className="text-sm text-gray-600">Certified</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">100%</div>
                    <div className="text-sm text-gray-600">Precision</div>
                  </div>
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4 shadow-xl text-white"
              >
                <div className="flex items-center gap-2">
                  <SafeIcon icon={FiCpu} className="w-6 h-6" />
                  <div>
                    <div className="text-sm font-bold uppercase">Robotic</div>
                    <div className="text-xs">Centre of Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;