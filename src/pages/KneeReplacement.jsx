import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiClock, FiDollarSign, FiAward, FiCheckCircle, FiArrowRight, FiPhone, FiCalendar } = FiIcons;

const KneeReplacement = () => {
  const benefits = [
    {
      icon: FiActivity,
      title: "Pain Relief",
      description: "Eliminate chronic knee pain caused by arthritis or injury"
    },
    {
      icon: FiTarget,
      title: "Improved Mobility",
      description: "Restore range of motion and regain independence in daily activities"
    },
    {
      icon: FiClock,
      title: "Long-term Solution",
      description: "Modern implants can last 15-20 years with proper care"
    },
    {
      icon: FiAward,
      title: "Enhanced Quality of Life",
      description: "Return to activities you love without pain or limitations"
    }
  ];

  const stats = [
    { number: "95%", label: "Patient Satisfaction", icon: FiAward },
    { number: "5000+", label: "Successful Surgeries", icon: FiTarget },
    { number: "20+", label: "Years Experience", icon: FiClock },
    { number: "98%", label: "Success Rate", icon: FiActivity }
  ];

  const types = [
    {
      title: "Total Knee Replacement",
      description: "Complete replacement of the knee joint for severe arthritis",
      image: "/images/service-knee-replacement.svg"
    },
    {
      title: "Partial Knee Replacement",
      description: "Replacement of only the damaged part of the knee joint",
      image: "/images/service-knee-replacement.svg"
    },
    {
      title: "Robotic Knee Replacement",
      description: "Advanced precision surgery using robotic technology for optimal results",
      image: "/images/service-robotic-knee.svg"
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Helmet>
        <title>Best Knee Replacement Hospital in India | Impact Otho Centre</title>
        <meta name='description' content='Seeking the Best Knee Replacement Hospital in India? Impact Ortho Centre offers advanced knee replacement surgery in modern facilities with a faster recovery.' />
        <meta name='keywords' content='best hospital for knee replacement surgery in india, best knee replacement hospital in india, knee replacement hospital in india, top 10 hospital for knee replacement in india, total knee replacement surgery hospital in india, best hospital for total knee replacement surgery in india, knee replacement surgery hospital in india, best hospitals in india for knee replacement' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiActivity} className="w-4 h-4 mr-2" />
                Leading Knee Replacement Hospital in India
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Knee Replacement <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Surgery in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                As one of the best knee replacement hospitals in India, we specialize in advanced joint replacement procedures with exceptional outcomes. Restore your mobility and live pain-free with our expert orthopedic surgeons.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
                <button
                  onClick={() => window.location.href = 'tel:+919494559848'}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://impactorthocenter.com/photos/Knee-Replacement.webp"
                  alt="Knee Replacement Surgery in India"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits of Knee Replacement Surgery in India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As one of the best knee replacement hospitals in India, we help patients regain their mobility and quality of life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={benefit.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Knee Replacement Surgery in India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hospital offers comprehensive knee replacement solutions tailored to your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {types.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <Link
                    to={type.title.includes("Robotic") ? "/services/robotic-knee-replacement" : "/contact"}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                  >
                    Learn More
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiAward} className="w-4 h-4 mr-2" />
                International Standards
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Knee Replacement Hospital in India?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                As one of the best knee replacement hospitals in India, we combine advanced technology with extensive surgical expertise to deliver superior outcomes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">NABH and JCI accredited facilities</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Internationally trained orthopedic surgeons</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Advanced imaging and diagnostic technology</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Personalized rehabilitation programs</p>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn About Our Expertise
                <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://impactorthocenter.com/photos/Why-Choose-Our-Knee-Replacement-Hospital.webp"
                  alt="Advanced Knee Replacement Technology in India"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-4 shadow-lg">
                <div className="font-bold">Advanced Technology</div>
                <div className="text-sm">Precision Surgery</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready for Knee Replacement Surgery in India?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              As one of the best knee replacement hospitals in India, we're here to help you restore your mobility and live pain-free. Schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <button
                onClick={() => window.location.href = 'tel:+919494559848'}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default KneeReplacement;