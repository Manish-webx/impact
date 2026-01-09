import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import * as FaIcons from 'react-icons/fa';
import SafeIcon from '../../common/SafeIcon';

const {FiGlobe,FiUsers,FiMessageCircle,FiHome,FiPlane,FiShield,FiCreditCard,FiFileText,FiWifi,FiVideo,FiPhone,FiArrowRight}=FiIcons;
const {FaHospital, FaUtensils} = FaIcons;

const InternationalServices = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: FiFileText,
      title: 'Medical Visa Assistance',
      description: 'Complete support for medical visa application and documentation',
      features: ['Visa application guidance', 'Document preparation', 'Embassy coordination'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPlane,
      title: 'Travel Planning',
      description: 'End-to-end travel arrangements for patients and companions',
      features: ['Flight booking assistance', 'Airport transfers', 'Local transportation'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiHome,
      title: 'Accommodation',
      description: 'Comfortable stay options near the hospital',
      features: ['Partner hotels', 'Service apartments', 'Guest houses'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiMessageCircle,
      title: 'Language Support',
      description: 'Multilingual staff and interpreter services',
      features: ['Arabic interpreters', 'French translators', 'Local language support'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaUtensils,
      title: 'Dietary Support',
      description: 'International cuisine and special dietary requirements',
      features: ['Halal food options', 'International menu', 'Custom diet plans'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiCreditCard,
      title: 'Payment Solutions',
      description: 'Flexible payment options and insurance coordination',
      features: ['International payments', 'Insurance support', 'Installment plans'],
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const facilities = [
    {icon: FaHospital, title: 'International Patient Wing', description: 'Dedicated wing with international standards'},
    {icon: FiWifi, title: 'High-Speed Internet', description: 'Free WiFi for video calls with family'},
    {icon: FiVideo, title: 'Virtual Consultations', description: 'Pre and post-treatment online consultations'},
    {icon: FiPhone, title: '24/7 Support', description: 'Round-the-clock helpline for international patients'}
  ];

  return (
    <section ref={ref} className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2" />
            International Patient Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Care for <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">International Patients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From visa assistance to recovery support - we make your medical journey to India seamless and comfortable
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 30}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className="group relative"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden h-full">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative bg-white rounded-2xl p-8 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Facilities Section */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.8}}         
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Facilities for International Patients</h3>
            <p className="text-gray-600">Experience world-class healthcare with comfort and convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={facility.icon} className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{facility.title}</h4>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <SafeIcon icon={FiUsers} className="w-5 h-5 mr-2" />
              Speak to International Patient Coordinator
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternationalServices;