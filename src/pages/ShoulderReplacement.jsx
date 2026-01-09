import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiClock, FiDollarSign, FiAward, FiShield, FiCheckCircle, FiArrowRight, FiPhone, FiCalendar, FiChevronDown, FiPlay, FiX, FiStar } = FiIcons;

const ShoulderReplacement = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: FiTarget,
      title: "Restored Range of Motion",
      description: "Regain full shoulder mobility and functionality for daily activities"
    },
    {
      icon: FiActivity,
      title: "Pain Elimination",
      description: "Eliminate chronic shoulder pain caused by arthritis or severe injury"
    },
    {
      icon: FiClock,
      title: "Rapid Recovery",
      description: "Most patients return to normal activities within 3-6 months"
    },
    {
      icon: FiAward,
      title: "Long-term Solution",
      description: "Modern implants provide durable results for 15-20 years"
    }
  ];

  const stats = [
    { number: "96%", label: "Patient Satisfaction", icon: FiTarget },
    { number: "30%", label: "Less Blood Loss", icon: FiShield },
    { number: "2x", label: "Faster Recovery", icon: FiClock },
    { number: "3500+", label: "Successful Surgeries", icon: FiAward }
  ];

  const processSteps = [
    {
      step: "Pre-Operative Evaluation",
      description: "Comprehensive assessment to determine shoulder replacement candidacy"
    },
    {
      step: "Surgical Approach",
      description: "Delicate procedure preserving muscles and tendons for better recovery"
    },
    {
      step: "Implant Placement",
      description: "Precise positioning of prosthetic components for optimal function"
    },
    {
      step: "Rehabilitation",
      description: "Structured physiotherapy program to restore strength and mobility"
    }
  ];

  const beforeAfter = [
    {
      title: "Before Surgery",
      points: [
        "Severe shoulder pain limiting arm movement",
        "Difficulty with overhead activities or lifting",
        "Sleep disturbances due to pain",
        "Loss of independence in daily activities"
      ]
    },
    {
      title: "After Surgery",
      points: [
        "Significant pain reduction or elimination",
        "Restored shoulder mobility and strength",
        "Return to activities like swimming and tennis",
        "Improved quality of life and sleep"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is shoulder replacement surgery?",
      answer: "Shoulder replacement surgery is a procedure where damaged parts of the shoulder joint are removed and replaced with artificial components. This effectively eliminates pain and restores mobility for patients with severe shoulder arthritis or damage."
    },
    {
      question: "What is the difference between total and reverse shoulder replacement?",
      answer: "Total shoulder replacement replaces both the ball (humeral head) and socket (glenoid) with prosthetic components. Reverse shoulder replacement switches the positions of the ball and socket, allowing the deltoid muscle to power the arm when the rotator cuff is damaged. The choice depends on the specific condition of your shoulder."
    },
    {
      question: "Is shoulder replacement surgery safe in India?",
      answer: "Yes, shoulder replacement surgery in India is extremely safe when performed by experienced surgeons at internationally accredited hospitals. India's best shoulder surgeons follow global standards with advanced technology, skilled surgical teams, and comprehensive care protocols."
    },
    {
      question: "How long does recovery take after shoulder replacement surgery?",
      answer: "Initial healing takes 2-3 months, with most patients regaining significant function. Full recovery and return to all activities typically takes 4-6 months. Physical therapy is crucial and begins soon after surgery to restore mobility and strength."
    },
    {
      question: "What are the benefits of choosing shoulder surgery in India?",
      answer: "Shoulder surgery in India offers world-class orthopedic care at a fraction of the cost compared to Western countries. Benefits include access to internationally trained surgeons, advanced technology, comprehensive medical tourism support, and all-inclusive packages with no hidden costs."
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
        <title>Total Shoulder Replacement Surgery in India | Impact Ortho Centre</title>
        <meta name='description' content='Seeking Total Shoulder Replacement Surgery in India? Impact Ortho Centre offers expert orthopedic care, modern techniques, faster recovery & patient-focused treatment.' />
        <meta name='keywords' content='best shoulder replacement surgeon in india, shoulder replacement surgery in india, shoulder replacement in india, total shoulder replacement surgery in india' />
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
                Advanced Shoulder Replacement Technology
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Shoulder <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Replacement</span> in India
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Experience world-class shoulder replacement surgery in India with our internationally trained orthopedic surgeons. As one of the best shoulder replacement hospitals in India, we offer advanced techniques and personalized rehabilitation for exceptional outcomes.
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
                  src="https://impactorthocenter.com/photos/Shoulder-Replacement.webp"
                  alt="Shoulder Replacement Surgery in India"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Shoulder Replacement Surgery in India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As one of the best shoulder replacement hospitals in India, we combine advanced technology with expert surgical skills for exceptional outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center border border-blue-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

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

      {/* Process Section */}
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
              Our Shoulder Replacement Surgery Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step approach ensuring precision and optimal outcomes for shoulder replacement surgery in India
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-16 left-16 right-16 h-0.5 bg-blue-200 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                    <div className="text-white text-2xl font-bold">{index + 1}</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-blue-500">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.step}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
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
                Cutting-Edge Technology
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Advanced Technology for Shoulder Replacement Surgery in India
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our hospital utilizes the latest imaging technology and surgical techniques to ensure optimal implant positioning and alignment. This precision ensures better long-term outcomes and implant longevity.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                As one of the best shoulder replacement hospitals in India, we combine this advanced technology with the expertise of our internationally trained surgeons to deliver exceptional results.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">3D CT-based personalized planning</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Minimally invasive techniques preserving muscles</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Advanced pain management protocols</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Personalized rehabilitation programs</p>
                </div>
              </div>
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
                  src="https://impactorthocenter.com/photos/Shoulder-Replacement-Surgery.webp"
                  alt="Advanced Shoulder Replacement Technology in India"
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

      {/* Before and After Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life Transformation: Before and After Shoulder Replacement
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See how our patients' lives have changed with shoulder replacement surgery in India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {beforeAfter.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-lg ${index === 0 ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'}`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${index === 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${index === 0 ? 'bg-red-100' : 'bg-green-100'}`}>
                        <SafeIcon
                          icon={index === 0 ? FiX : FiCheckCircle}
                          className={`w-4 h-4 ${index === 0 ? 'text-red-600' : 'text-green-600'}`}
                        />
                      </div>
                      <span className="ml-3 text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about shoulder replacement surgery in India
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center bg-white p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <SafeIcon
                    icon={FiChevronDown}
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
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
              Ready for Shoulder Replacement Surgery in India?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Experience world-class orthopedic care with our internationally trained surgeons. Book your consultation today.
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

export default ShoulderReplacement;