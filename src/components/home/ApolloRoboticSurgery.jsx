import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiCpu,FiTarget,FiActivity,FiTrendingUp,FiCheckCircle,FiZap,FiShield}=FiIcons;

const ApolloRoboticSurgery = () => {
  const [ref,inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      name: 'Mako Robotic-Arm Assisted Surgery',
      description: 'Precision planning and execution for total knee and hip replacements',
      features: [
        '3D CT-based personalized planning',
        'Real-time feedback during surgery',
        'Haptic boundaries to protect healthy bone',
        'Optimal implant positioning accuracy'
      ],
      benefits: [
        '99.8% accuracy in implant placement',
        'Reduced risk of misalignment',
        'Faster recovery and shorter hospital stays',
        'Longer lasting implants'
      ]
    }
  ];

  const surgicalProcess = [
    {
      step: 'Pre-Operative Planning',
      icon: FiTarget,
      description: 'Detailed CT scan creates 3D model of patient anatomy for personalized surgical plan'
    },
    {
      step: 'Robotic Arm Positioning',
      icon: FiCpu,
      description: 'Advanced registration technique aligns the robotic arm with the patient\'s unique anatomy'
    },
    {
      step: 'Precision Surgery',
      icon: FiActivity,
      description: 'Surgeon controls the robotic arm to execute the pre-planned procedure with submillimeter accuracy'
    },
    {
      step: 'Real-Time Adjustments',
      icon: FiTrendingUp,
      description: 'System provides real-time feedback allowing surgeons to make adjustments during the procedure'
    }
  ];

  return (
    <section ref={ref} className="py-10 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{opacity: 0,y: 30}} 
          animate={inView ? {opacity: 1,y: 0} : {}} 
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-blue-100">
            <SafeIcon icon={FiCpu} className="w-4 h-4 mr-2 text-blue-600" />
            Apollo Hospitals Robotic Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pioneering <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Robotic Surgery</span> in India
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Apollo Hospitals Hyderabad,our esteemed partner,brings cutting-edge robotic technology to deliver unparalleled precision in orthopedic procedures.
          </p>
        </motion.div>

        {/* Surgical Process */}
        <motion.div 
          initial={{opacity: 0,y: 30}} 
          animate={inView ? {opacity: 1,y: 0} : {}} 
          transition={{duration: 0.6,delay: 0.2}}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Robotic Surgical Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {surgicalProcess.map((process,index) => (
              <motion.div 
                key={index}
                initial={{opacity: 0,y: 30}} 
                animate={inView ? {opacity: 1,y: 0} : {}} 
                transition={{duration: 0.6,delay: 0.4 + index * 0.1}}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={process.icon} className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{process.step}</h4>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Robotic Technologies */}
        <div className="grid grid-cols-1 gap-8 mb-16">
          {technologies.map((tech,index) => (
            <motion.div 
              key={index}
              initial={{opacity: 0,y: 30}} 
              animate={inView ? {opacity: 1,y: 0} : {}} 
              transition={{duration: 0.6,delay: 0.6 + index * 0.2}}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mt-10"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                    <SafeIcon icon={FiZap} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature,idx) => (
                        <li key={idx} className="flex items-start">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Patient Benefits:</h4>
                    <ul className="space-y-2">
                      {tech.benefits.map((benefit,idx) => (
                        <li key={idx} className="flex items-start">
                          <SafeIcon icon={FiShield} className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApolloRoboticSurgery;