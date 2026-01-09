import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiDollarSign } = FiIcons;

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 'knee-replacement',
      image: '/images/service-knee-replacement.svg',
      title: 'Knee Replacement Surgery',
      description: 'Advanced total and partial knee replacement with rapid recovery protocols',
      price: '$5,500',
      features: ['3-5 Days Hospital Stay', 'Post-op Physiotherapy', 'Multilingual Support']
    },
    {
      id: 'robotic-knee',
      image: '/images/service-robotic-knee.svg',
      title: 'Robotic Knee Replacement',
      description: 'Precision-guided surgery for optimal implant positioning and outcomes',
      price: '$7,200',
      features: ['Sub-millimeter Accuracy', 'Faster Recovery', '99.8% Precision']
    },
    {
      id: 'hip-replacement',
      image: '/images/service-hip-replacement.svg',
      title: 'Hip Replacement Surgery',
      description: 'Minimally invasive hip replacement restoring mobility and eliminating pain',
      price: '$6,800',
      features: ['Minimally Invasive', '24/7 Care', 'International Cuisine']
    },
    {
      id: 'shoulder-replacement',
      image: '/images/service-shoulder-replacement.svg',
      title: 'Shoulder Replacement',
      description: 'Advanced shoulder arthroplasty for improved function and pain relief',
      price: '$6,200',
      features: ['Custom Implants', '3D Planning', 'Rapid Recovery']
    },
  ];

  return (
    <section ref={ref} className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#1E97D9] font-semibold text-sm uppercase tracking-wide">Our Specialities</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Orthopedic Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert treatment for all musculoskeletal conditions with transparent pricing for international patients
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <Link to={`/services/${service.id}`} className="block h-full">
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <FiDollarSign className="w-4 h-4 mr-1" /> {service.price}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E97D9] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <SafeIcon icon={FiArrowRight} className="w-3 h-3 mr-2 text-blue-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-[#1E97D9] font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Services
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;