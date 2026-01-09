import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHome, FiUsers, FiTarget, FiHeart } = FiIcons;

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { icon: FiHome, title: 'World Class Infrastructure', description: 'Cutting-edge diagnostic and joint replacement technologies with modern facilities' },
    { icon: FiUsers, title: 'Orthopedic Experts', description: 'Global exposure and unparalleled experience in treating all types of orthopedic conditions' },
    { icon: FiTarget, title: 'Multidisciplinary Care', description: 'Team collaboration with pain specialists, physiotherapists, and neurologists' },
    { icon: FiHeart, title: 'Seamless After Care', description: 'Comprehensive care from hospital admission to full recovery and beyond' },
  ];

  return (
    <section ref={ref} className="py-10 relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/why-choose-us-bg.svg"
          alt="Medical Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E97D9]/90 to-gray-900/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Choose Impact Ortho Centre?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                <SafeIcon icon={feature.icon} className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full">
            <SafeIcon icon={FiTarget} className="w-6 h-6 text-white mr-3" />
            <span className="text-xl font-semibold text-white">
              Get back to your routine with full strength & confidence!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;