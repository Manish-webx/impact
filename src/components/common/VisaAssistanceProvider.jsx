import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiFileText, FiGlobe, FiCheckCircle, FiPhone, FiMail } = FiIcons;

const VisaAssistanceProvider = () => {
  const steps = [
    {
      icon: FiFileText,
      title: "Visa Invitation Letter",
      description: "We provide an official medical visa invitation letter addressed to the Indian High Commission in your country."
    },
    {
      icon: FiGlobe,
      title: "Embassy Support",
      description: "Direct coordination with Indian embassies to expedite your medical visa processing."
    },
    {
      icon: FiCheckCircle,
      title: "Document Assistance",
      description: "Guidance on all necessary documentation required for patient and attendant visas."
    }
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2" />
              International Patient Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hassle-Free <span className="text-[#1E97D9]">Medical Visa Assistance</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Traveling for medical treatment can be overwhelming. Our dedicated international patient team streamlines the entire visa process, ensuring you can focus on your health while we handle the paperwork.
            </p>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg mr-4">
                    <SafeIcon icon={step.icon} className="w-6 h-6 text-[#1E97D9]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative z-10">
              <div className="bg-[#1E97D9] p-6 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Need Visa Help?</h3>
                <p className="text-blue-100">Contact our International Desk directly</p>
              </div>
              <div className="p-6 md:p-8 space-y-6">
                <div className="text-center">
                  <p className="text-gray-500 mb-4">
                    Send us your passport copy and medical reports to initiate the process immediately.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <a href="tel:+919494559848" className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 group-hover:scale-110 transition-transform">
                      <SafeIcon icon={FiPhone} className="w-5 h-5 text-[#1E97D9]" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500 font-medium uppercase">Call / WhatsApp</div>
                      <div className="text-lg font-bold text-gray-900">+91 9494559848</div>
                    </div>
                  </a>

                  <a href="mailto:impactorthoc.dm@gmail.com" className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 group-hover:scale-110 transition-transform">
                      <SafeIcon icon={FiMail} className="w-5 h-5 text-[#1E97D9]" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-gray-500 font-medium uppercase">Email Us</div>
                      <div className="text-lg font-bold text-gray-900 break-all md:break-normal">impactorthoc.dm@gmail.com</div>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <Link 
                    to="/contact" 
                    className="block w-full py-4 bg-gray-900 text-white text-center font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    Request Invitation Letter
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements - properly contained to prevent overflow */}
            <div className="absolute top-10 -right-4 md:-right-10 w-20 h-20 bg-blue-200 rounded-full blur-2xl opacity-50 -z-10"></div>
            <div className="absolute -bottom-10 -left-4 md:-left-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl opacity-50 -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisaAssistanceProvider;