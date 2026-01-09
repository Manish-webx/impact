import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiHome, FiCalendar, FiPhone, FiArrowRight } = FiIcons;

const ThankYou = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 pt-20 pb-12"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-gray-100 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-green-50 rounded-full blur-2xl"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner"
          >
            <SafeIcon icon={FiCheckCircle} className="w-12 h-12 text-green-500" />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            We have successfully received your inquiry. Our medical coordination team will review your details and contact you shortly.
          </p>

          <div className="space-y-4">
            <Link 
              to="/" 
              className="group flex items-center justify-center w-full px-8 py-4 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <SafeIcon icon={FiHome} className="w-5 h-5 mr-2" />
              Return to Home
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
            </Link>
            
            <div className="grid grid-cols-2 gap-4">
               <a 
                href="tel:+919494559848"
                className="flex items-center justify-center px-4 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm hover:shadow-md"
              >
                <SafeIcon icon={FiPhone} className="w-4 h-4 mr-2 text-[#1E97D9]" />
                Call Now
              </a>
              <Link 
                to="/contact" 
                className="flex items-center justify-center px-4 py-3 bg-white text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm hover:shadow-md"
              >
                <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2 text-[#1E97D9]" />
                Book Appt
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-gray-500 text-sm text-center"
      >
        Need immediate assistance? <br className="sm:hidden" />
        Call our 24/7 International Helpline: <a href="tel:+919494559848" className="text-[#1E97D9] font-bold hover:underline">+91 9494559848</a>
      </motion.p>
    </motion.div>
  );
};

export default ThankYou;