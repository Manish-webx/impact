import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiClock, FiDollarSign, FiAward, FiShield, FiCheckCircle, FiBone, FiPhone, FiCalendar, FiChevronDown, FiPlay, FiX, FiStar, FiTrendingUp, FiSearch, FiUsers, FiHeart, FiSmile } = FiIcons;

const FootAndAnklePain = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    { icon: FiHeart, title: "Pain-Free Walking", description: "Our primary goal is to resolve your foot and ankle pain, allowing you to walk, stand, and run comfortably." },
    { icon: FiActivity, title: "Restored Mobility", description: "Treatments aim to restore full range of motion, stability, and function to your foot and ankle." },
    { icon: FiTarget, title: "Correction of Deformities", description: "Surgical options can correct issues like bunions and flat feet, improving both aesthetics and function." },
    { icon: FiShield, title: "Return to Active Lifestyle", description: "We help you get back to sports, exercise, and the activities you love without being held back by pain." }
  ];

  const causes = [
    { title: "Plantar Fasciitis", description: "Inflammation of the thick band of tissue (plantar fascia) that runs across the bottom of your foot, causing heel pain.", treatment: "Stretching, orthotics, and physical therapy are highly effective. Injections or surgery are rarely needed." },
    { title: "Ankle Sprains & Instability", description: "Stretching or tearing of the ligaments that support the ankle, often leading to chronic instability if not treated properly.", treatment: "RICE protocol followed by physiotherapy. Surgery may be required to repair or reconstruct ligaments in severe cases." },
    { title: "Bunions (Hallux Valgus)", description: "A bony bump that forms on the joint at the base of the big toe, causing the toe to deviate inwards.", treatment: "Wider shoes and orthotics can help. Bunionectomy surgery is performed to correct the deformity and relieve pain." },
    { title: "Achilles Tendonitis", description: "Overuse injury of the Achilles tendon, the band of tissue that connects calf muscles at the back of the lower leg to your heel bone.", treatment: "Rest, ice, and specific exercises are key. More advanced treatments like ESWT or surgery may be considered for chronic cases." }
  ];

  const treatments = [
    { icon: FiAward, title: "Custom Orthotics", description: "Prescription shoe inserts designed to support and comfort your feet, correcting alignment and reducing strain." },
    { icon: FiActivity, title: "Advanced Physiotherapy", description: "Specialized exercises to improve strength, flexibility, and balance, crucial for recovery and prevention." },
    { icon: FiTarget, title: "Minimally Invasive Surgery", description: "Techniques like ankle arthroscopy allow surgeons to diagnose and treat joint problems with small incisions and faster recovery." },
    { icon: FiBone, title: "Reconstructive Foot & Ankle Surgery", description: "Complex procedures to correct deformities, repair fractures, or address severe arthritis, including ankle replacement." }
  ];

  const processSteps = [
    { icon: FiSearch, title: "Comprehensive Diagnosis", description: "We use a combination of physical examination, gait analysis, and advanced imaging (X-ray, MRI, CT) to get a precise diagnosis." },
    { icon: FiUsers, title: "Personalized Treatment Plan", description: "Our foot and ankle specialists create a tailored plan, prioritizing non-surgical options whenever possible." },
    { icon: FiActivity, title: "Expert Intervention", description: "Whether it's custom orthotics or complex surgery, our team provides expert care using the latest techniques and technology." },
    { icon: FiTrendingUp, title: "Structured Rehabilitation", description: "A dedicated physical therapist guides you through a recovery program to ensure you regain full function and mobility." }
  ];

  const beforeAfter = [
    { title: "Before Treatment", points: ["Chronic foot or heel pain", "Difficulty walking or standing", "Ankle instability and frequent sprains", "Painful deformities like bunions"] },
    { title: "After Treatment", points: ["Pain-free walking and running", "Stable and strong ankles", "Correction of deformities", "Return to desired activities"] }
  ];

  const faqs = [
    { question: "What are custom orthotics and how do they help?", answer: "Custom orthotics are prescription medical devices that you wear inside your shoes to correct biomechanical foot issues. They can help with problems like flat feet, plantar fasciitis, and bunions by providing support, absorbing shock, and improving foot alignment." },
    { question: "When is surgery necessary for foot or ankle pain?", answer: "Surgery is typically considered after conservative treatments—such as physical therapy, medication, and orthotics—have failed to provide relief. It may also be the first-line treatment for severe injuries like complex fractures, major tendon ruptures, or significant deformities." },
    { question: "What is ankle arthroscopy?", answer: "Ankle arthroscopy is a minimally invasive surgical procedure where a small camera (arthroscope) is inserted into the ankle joint. It allows the surgeon to view the joint on a screen and treat problems like cartilage damage, bone spurs, and ligament tears with small instruments, leading to a faster recovery." },
    { question: "How can I prevent common foot and ankle problems?", answer: "Prevention includes wearing supportive shoes that fit well, maintaining a healthy weight, stretching regularly (especially your calf muscles), gradually increasing exercise intensity, and listening to your body by not pushing through pain." }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Helmet>
        <title>Foot & Ankle Pain Treatment in India | Impact Ortho Centre</title>
        <meta name='description' content='Seeking Foot & Ankle Pain Treatment in India? Impact Ortho Centre offers accurate diagnosis, personalized care, and effective relief for injuries & chronic pain.' />
        <meta name='keywords' content='ankle pain treatment in india, best treatment for foot pain in india, foot pain hospital in india, foot pain treatment in india' />
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
                <SafeIcon icon={FiAward} className="w-4 h-4 mr-2" />
                Specialized Foot & Ankle Care
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Foot & Ankle Pain Treatment <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Step away from pain with expert foot and ankle care in India. Our specialists treat everything from common sprains and plantar fasciitis to complex fractures and deformities.
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
            >
              <img
                src="https://impactorthocenter.com/photos/Foot-Ankle-Pain.webp"
                alt="Foot and Ankle Pain Treatment in India"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
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
              Benefits of Our Foot & Ankle Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to getting you back on your feet, stronger and more stable than before.
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

      {/* Common Causes Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Foot & Ankle Conditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialists are experienced in diagnosing and treating a wide array of foot and ankle issues.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {causes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-3 text-sm rounded-r-lg">
                  <p className="font-semibold">Treatment Approach:</p>
                  <p>{item.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Foot & Ankle Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From conservative care to complex reconstructive surgery, we provide comprehensive solutions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={treatment.icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{treatment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Foot & Ankle Treatment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step guide to your recovery, from initial diagnosis to full mobility.
            </p>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 h-full w-0.5 bg-blue-200 top-0 lg:left-1/2 lg:-translate-x-1/2"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10 lg:hidden">
                    {index + 1}
                  </div>
                  <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : ''}`}>
                    {index % 2 === 0 && (
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full">
                        <div className="flex items-center space-x-4 mb-4 justify-end">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-600 text-right">{step.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10">
                    {index + 1}
                  </div>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="lg:hidden pl-8">
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="hidden lg:block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full ml-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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
              Life Transformation: Before and After Foot & Ankle Treatment
            </h2>
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
      <section className="py-10 bg-white">
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
              Your questions about foot and ankle pain treatment, answered.
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
              Get Expert Foot & Ankle Treatment in India
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Take the first step towards a pain-free life. Contact our foot and ankle specialists for a comprehensive evaluation.
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

export default FootAndAnklePain;