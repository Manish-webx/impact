import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiShield, FiCpu, FiUsers, FiCheckCircle, FiArrowRight } = FiIcons;

const ApolloAdvantage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    { icon: FiShield, text: 'JCI & NABH Accredited Facility' },
    { icon: FiCpu, text: 'Advanced Robotic Surgery Systems' },
    { icon: FiUsers, text: 'Dedicated International Patient Wing' },
    { icon: FiCheckCircle, text: 'World-Renowned Orthopedic Surgeons' },
  ];

  return (
    <section ref={ref} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/images/apollo-facility.svg"
              alt="Apollo Hospitals Hyderabad Facility"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 md:bottom-4 md:right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-xl shadow-lg">
              <p className="font-bold">A Centre of Excellence</p>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 mt-8 lg:mt-0"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Our Partnership with <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Apollo Hospitals</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We operate from Apollo Hospitals, Jubilee Hills, Hyderabad—one of Asia's most trusted and advanced healthcare institutions. This partnership ensures our international patients receive care that meets the highest global standards in a world-class environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a center of excellence for orthopedics, Apollo Hospitals is equipped with the latest in robotic surgery technology, including the Mako and Da Vinci systems, enabling us to perform complex procedures with unmatched precision and safety.
            </p>

            <div className="space-y-3 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={feature.icon} className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 group w-full sm:w-auto justify-center"
              >
                Learn More About Our Facility
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApolloAdvantage;