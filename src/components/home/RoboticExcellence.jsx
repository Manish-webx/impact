import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCpu, FiTarget, FiActivity, FiTrendingUp, FiAward, FiPlay, FiCheckCircle, FiClock, FiShield, FiZap, FiDollarSign } = FiIcons;

const RoboticExcellence = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      name: 'Mako Robotic System',
      description: 'Advanced robotic-arm assisted surgery technology',
      image: '/images/robotics-mako.svg',
      features: [
        '3D CT-based planning',
        'Real-time feedback',
        'Haptic boundaries',
      ],
      price: '$7,200',
    },
    {
      name: 'NAVIO Surgical System',
      description: 'Handheld robotics for precise knee replacement',
      image: '/images/robotics-navio.svg',
      features: [
        'No pre-operative CT',
        'Bone morphing technology',
        'Accurate implant positioning',
      ],
      price: '$6,800',
    },
    {
      name: 'Da Vinci Surgical System',
      description: 'Robotic platform for minimally invasive procedures',
      image: '/images/robotics-da-vinci.svg',
      features: [
        '3D HD visualization',
        'Wristed instruments',
        'Enhanced precision',
      ],
      price: '$8,500',
    },
  ];

  return (
    <section ref={ref} className="py-10 bg-gradient-to-br from-blue-50 to-cyan-50 text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-blue-100">
            <SafeIcon icon={FiCpu} className="w-4 h-4 mr-2 text-blue-600" /> Advanced Robotic Technology
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Robotic Surgery <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience the future of orthopedic surgery with cutting-edge robotic systems that ensure precision, safety, and faster recovery
          </p>
        </motion.div>

        {/* Technology Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Technology Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={tech.image} alt={tech.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <FiDollarSign className="w-4 h-4 mr-1" /> {tech.price}
                </div>
              </div>
              {/* Technology Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tech.description}</p>
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  <SafeIcon icon={FiActivity} className="w-4 h-4 mr-2" /> Schedule Consultation
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div initial={{opacity: 0, y: 30}} animate={inView ? {opacity: 1, y: 0} : {}} transition={{duration: 0.6, delay: 0.8}} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"><SafeIcon icon={FiTarget} className="w-6 h-6 text-white"/></div>
            <div className="text-2xl font-bold text-blue-600 mb-1">99.8%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </motion.div>
          <motion.div initial={{opacity: 0, y: 30}} animate={inView ? {opacity: 1, y: 0} : {}} transition={{duration: 0.6, delay: 0.9}} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"><SafeIcon icon={FiShield} className="w-6 h-6 text-white"/></div>
            <div className="text-2xl font-bold text-green-600 mb-1">50%</div>
            <div className="text-sm text-gray-600">Less Blood Loss</div>
          </motion.div>
          <motion.div initial={{opacity: 0, y: 30}} animate={inView ? {opacity: 1, y: 0} : {}} transition={{duration: 0.6, delay: 1.0}} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"><SafeIcon icon={FiClock} className="w-6 h-6 text-white"/></div>
            <div className="text-2xl font-bold text-purple-600 mb-1">3x</div>
            <div className="text-sm text-gray-600">Faster Recovery</div>
          </motion.div>
          <motion.div initial={{opacity: 0, y: 30}} animate={inView ? {opacity: 1, y: 0} : {}} transition={{duration: 0.6, delay: 1.1}} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"><SafeIcon icon={FiAward} className="w-6 h-6 text-white"/></div>
            <div className="text-2xl font-bold text-orange-600 mb-1">5000+</div>
            <div className="text-sm text-gray-600">Successful Surgeries</div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div initial={{opacity: 0, y: 30}} animate={inView ? {opacity: 1, y: 0} : {}} transition={{duration: 0.6, delay: 1.2}} className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Experience the Future of Surgery</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">Join thousands of international patients who have benefited from our advanced robotic surgery programs with transparent pricing and comprehensive support.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                <SafeIcon icon={FiActivity} className="w-5 h-5 mr-2"/> Schedule Robotic Consultation
              </Link>
              <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                <SafeIcon icon={FiPlay} className="w-5 h-5 mr-2"/> Watch Procedure Video
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoboticExcellence;