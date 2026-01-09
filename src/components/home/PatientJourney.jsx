import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiGlobe, FiFileText, FiPlane, FiHome, FiHeart, FiCheckCircle, FiArrowRight, FiMapPin} = FiIcons;

const PatientJourney = () => {
  const [ref, inView] = useInView({triggerOnce: true, threshold: 0.1});

  const journeySteps = [
    {
      icon: FiGlobe,
      title: 'Consultation & Planning',
      description: 'Get a personalized treatment plan and cost estimate from home. We assist with all travel documents.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPlane,
      title: 'Arrival & Treatment',
      description: 'Receive a warm welcome at the airport and undergo your procedure in our state-of-the-art facility.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiHeart,
      title: 'Recovery & Rehab',
      description: 'Heal in comfort with personalized physiotherapy and 24/7 medical support.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiHome,
      title: 'Return Home & Follow-up',
      description: 'Travel back safely with our continued remote follow-up care to ensure your long-term wellness.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section ref={ref} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Seamless Journey to Recovery
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From your first inquiry to your return home, we ensure a smooth and stress-free experience in just 4 simple steps.
          </p>
        </motion.div>

        {/* Horizontal Journey Timeline */}
        <div className="relative">
          {/* Dashed line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-300 border-t border-dashed -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 30}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.6, delay: index * 0.2}}
                className="text-center"
              >
                <div className={`relative w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${step.color} shadow-lg z-10`}>
                  <SafeIcon icon={step.icon} className="w-10 h-10 text-white" />
                  <div className="absolute -bottom-3 bg-white px-2 py-1 text-sm font-bold text-blue-600 rounded-full border border-gray-200">
                    Step {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.8}}
          className="text-center mt-16"
        >
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <SafeIcon icon={FiMapPin} className="w-5 h-5 mr-2" />
            Start Your Medical Journey
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PatientJourney;