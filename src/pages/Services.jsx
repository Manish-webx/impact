import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiCalendar } = FiIcons;

const Services = () => {
  const services = [
    {
      id: 'knee-replacement',
      image: '/images/service-knee-replacement.svg',
      title: 'Knee Replacement Surgery',
      description: 'Advanced total and partial knee replacement with rapid recovery protocols for arthritis and severe joint damage.',
    },
    {
      id: 'robotic-knee',
      image: '/images/service-robotic-knee.svg',
      title: 'Robotic Knee Replacement',
      description: 'Precision-guided surgery for optimal implant positioning, less pain, and quicker recovery.',
    },
    {
      id: 'hip-replacement',
      image: '/images/service-hip-replacement.svg',
      title: 'Hip Replacement Surgery',
      description: 'Minimally invasive hip replacement to restore mobility and eliminate pain caused by arthritis or injury.',
    },
    {
      id: 'arthroscopy',
      image: '/images/service-arthroscopy.svg',
      title: 'Arthroscopy',
      description: 'Minimally invasive joint surgery for diagnosis and treatment of conditions like torn ligaments and cartilage.',
    },
    {
      id: 'sports-injury',
      image: '/images/service-sports-injury.svg',
      title: 'Sports Injury Treatments',
      description: 'Get back in the game with expert sports medicine for ACL tears, rotator cuff injuries, and more.',
    },
    {
      id: 'shoulder-replacement',
      image: '/images/service-shoulder-replacement.svg',
      title: 'Shoulder Replacement',
      description: 'Advanced shoulder arthroplasty for improved function and pain relief from arthritis or severe fractures.',
    },
    {
      id: 'shoulder-surgery',
      image: '/images/service-shoulder-surgery.svg',
      title: 'Shoulder Surgery',
      description: 'Comprehensive shoulder care for conditions from rotator cuff tears to instability and impingement.',
    },
    {
      id: 'trauma-surgery',
      image: '/images/service-trauma-surgery.svg',
      title: 'Trauma Surgery',
      description: 'Expert fracture care and emergency orthopedic treatment for complex injuries and accidents.',
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Helmet>
        <title>Orthopedic Services & Treatments in India | Impact Ortho Centre</title>
        <meta name='description' content='Explore our comprehensive orthopedic services, including robotic knee & hip replacement, sports medicine, trauma care, and arthroscopy treatments in India.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-[#1E97D9] to-[#91EFF8] bg-clip-text text-transparent">Orthopedic Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of advanced orthopedic treatments to help you regain mobility and live pain-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E97D9] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#1E97D9] font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Learn More
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Take the First Step Towards a Pain-Free Life
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Don't let joint pain hold you back. Schedule a consultation with our orthopedic specialists today and explore your treatment options.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" /> Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Services;