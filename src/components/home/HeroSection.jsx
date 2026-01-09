import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCalendar, FiPhone, FiCheckCircle, FiArrowRight } = FiIcons;

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#1E97D9] text-sm font-semibold mb-4 border border-blue-100">
                  Advanced Robotic Joint Replacement Center
                </span>
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Precision Care with</span>{' '}
                  <span className="block text-[#1E97D9] xl:inline">Robotic Technology</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience the future of orthopedics with Mako Robotic-Arm Assisted Surgery. We specialize in minimally invasive robotic knee and hip replacements for faster recovery, less pain, and superior outcomes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4"
              >
                <div className="rounded-md shadow">
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#1E97D9] hover:bg-blue-600 md:py-4 md:text-lg transition-all duration-300"
                  >
                    <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/services/robotic-knee-replacement"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#1E97D9] bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg transition-all duration-300"
                  >
                    Robotic Surgery Info
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500"
              >
                <div className="flex items-center">
                  <SafeIcon icon={FiCheckCircle} className="text-green-500 mr-2" />
                  <span>Higher Accuracy</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCheckCircle} className="text-green-500 mr-2" />
                  <span>Faster Recovery</span>
                </div>
                 <div className="flex items-center">
                  <SafeIcon icon={FiCheckCircle} className="text-green-500 mr-2" />
                  <span>Less Pain</span>
                </div>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://impactorthocenter.com/photos/hero-section-imgi.webp"
          alt="Robotic Joint Replacement Surgery"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent lg:hidden"></div>
      </div>
    </div>
  );
};

export default HeroSection;