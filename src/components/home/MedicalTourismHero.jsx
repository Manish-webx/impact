import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiGlobe, FiPlane, FiShield, FiAward, FiActivity, FiPlay, FiCheckCircle } = FiIcons;

const MedicalTourismHero = () => {
  const handleCallClick = () => {
    window.location.href = 'tel:+919494559848';
  };

  return (
    <section className="relative min-h-fit py-10 md:py-20 flex items-center bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-blue-100">
                <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2 text-blue-600" />
                Medical Tourism Excellence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Leading Orthopedic Hospital in India |  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Impact Ortho Centre</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                Apollo Hospitals Hyderabad, recognised as one of the Best Orthopedic Hospitals in India, is led by renowned orthopedic specialist Dr. Ratnakar Rao. With advanced technology, expert care, and proven results, we provide trusted treatment for joint, bone, and sports injury conditions.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-blue-50">
                <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">High Success Rate</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-sm border border-blue-50">
                <SafeIcon icon={FiShield} className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">NABH Accredited</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <SafeIcon icon={FiPlane} className="w-5 h-5 mr-2" />
                Plan Your Medical Journey
              </Link>
              <button
                onClick={handleCallClick}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <SafeIcon icon={FiActivity} className="w-5 h-5 mr-2" />
                Free Consultation
              </button>
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://impactorthocenter.com/photos/hero-section-imgi.webp"
                alt="Advanced Robotic Surgery"
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
    </section>
  );
};

export default MedicalTourismHero;