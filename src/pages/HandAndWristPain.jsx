import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiClock, FiDollarSign, FiAward, FiShield, FiCheckCircle, FiBone, FiPhone, FiCalendar, FiChevronDown, FiPlay, FiX, FiStar, FiTrendingUp, FiSearch, FiUsers, FiHeart, FiSmile } = FiIcons;

const HandAndWristPain = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    { icon: FiHeart, title: "Relief from Pain & Numbness", description: "Targeted treatments for conditions like Carpal Tunnel Syndrome to alleviate pain, tingling, and numbness." },
    { icon: FiActivity, title: "Restored Hand Function", description: "Regain dexterity, grip strength, and the ability to perform fine motor tasks without discomfort." },
    { icon: FiTarget, title: "Correction of Deformities", description: "Surgical solutions for conditions like Dupuytren's contracture to restore finger movement." },
    { icon: FiShield, title: "Return to Work & Hobbies", description: "Our goal is to help you get back to your job, sports, and daily activities with confidence and comfort." }
  ];

  const causes = [
    { title: "Carpal Tunnel Syndrome", description: "Compression of the median nerve as it passes into the hand, causing numbness, tingling, and weakness in the hand and arm.", treatment: "Splinting, therapy, and injections are tried first. Carpal tunnel release surgery is a highly effective definitive treatment." },
    { title: "Trigger Finger", description: "A condition in which one of your fingers gets stuck in a bent position, caused by inflammation of the tendon sheath.", treatment: "Splinting and steroid injections are often effective. A simple outpatient procedure can release the tendon if symptoms persist." },
    { title: "De Quervain's Tenosynovitis", description: "A painful condition affecting the tendons on the thumb side of your wrist, often from overuse.", treatment: "Managed with splinting, anti-inflammatory medication, and therapy. Injections or surgery may be needed in severe cases." },
    { title: "Wrist Fractures", description: "A break in one of the bones of the wrist, most commonly the distal radius. Often requires casting or surgery to ensure proper healing.", treatment: "Treatment depends on the severity, ranging from casting for simple fractures to surgery with plates and screws for complex breaks." }
  ];

  const treatments = [
    { icon: FiAward, title: "Splinting and Bracing", description: "Custom or prefabricated splints to immobilize the wrist and hand, reducing inflammation and allowing tissues to heal." },
    { icon: FiActivity, title: "Hand Therapy", description: "Specialized physiotherapy and occupational therapy to improve strength, flexibility, and function after injury or surgery." },
    { icon: FiTarget, title: "Minimally Invasive Surgery", description: "Procedures like endoscopic carpal tunnel release use small incisions for less pain and faster recovery." },
    { icon: FiBone, title: "Fracture Fixation & Reconstruction", description: "Advanced surgical techniques to repair broken bones and reconstruct damaged joints in the hand and wrist." }
  ];

  const processSteps = [
    { icon: FiSearch, title: "Expert Diagnosis", description: "Our hand specialists perform a detailed physical exam, often using nerve conduction studies or imaging to identify the exact problem." },
    { icon: FiUsers, title: "Conservative-First Approach", description: "We begin with non-surgical treatments like therapy, splinting, and injections to manage your symptoms effectively." },
    { icon: FiActivity, title: "Precision Microsurgery", description: "When surgery is needed, our surgeons use microsurgical techniques for delicate procedures on nerves and tendons." },
    { icon: FiTrendingUp, title: "Specialized Rehabilitation", description: "Our certified hand therapists guide your recovery, ensuring you regain maximum function and strength." }
  ];

  const beforeAfter = [
    { title: "Before Treatment", points: ["Numbness and tingling in hands (Carpal Tunnel)", "Weak grip strength", "Painful clicking or locking of fingers", "Inability to perform fine motor tasks"] },
    { title: "After Treatment", points: ["Resolution of numbness and pain", "Restored grip and hand strength", "Smooth finger and wrist movement", "Ability to work and enjoy hobbies again"] }
  ];

  const faqs = [
    { question: "What is Carpal Tunnel Syndrome?", answer: "Carpal Tunnel Syndrome is a common condition that causes pain, numbness, and tingling in the hand and arm. It occurs when the median nerve, one of the major nerves to the hand, is squeezed or compressed as it travels through the wrist." },
    { question: "Do I need surgery for my hand or wrist pain?", answer: "Not necessarily. Many hand and wrist conditions can be successfully managed with non-surgical treatments like splinting, hand therapy, and medication. Surgery is generally recommended when conservative treatments fail or in cases of severe injury like a complex fracture." },
    { question: "What is endoscopic carpal tunnel release?", answer: "It is a minimally invasive surgical method to treat carpal tunnel syndrome. The surgeon makes one or two small incisions and uses a miniature camera (endoscope) to see inside your wrist. This allows them to cut the carpal ligament and relieve pressure on the nerve with minimal disruption to surrounding tissues, leading to a faster recovery." },
    { question: "What does a hand therapist do?", answer: "A hand therapist is a physical or occupational therapist who, through advanced study and experience, specializes in treating conditions affecting the hands and upper extremity. They help patients regain function, reduce pain, and prevent re-injury after an injury or surgery." }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Helmet>
        <title>Hand & Wrist Pain Treatment in India | Impact Otho Centre</title>
        <meta name='description' content='Seeking expert Hand & Wrist Pain Treatment in India? Impact Ortho Centre provides advanced diagnosis, personalized care, and effective relief for injuries.' />
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
                Specialized Hand & Wrist Care
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hand & Wrist Pain Treatment <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Regain the use of your hands with expert care in India. Our specialists treat a full range of conditions, from Carpal Tunnel Syndrome to complex fractures, using advanced microsurgical techniques.
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
                src="https://impactorthocenter.com/photos/Hand-Wrist-Pain.webp"
                alt="Hand and Wrist Pain Treatment in India"
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
              Benefits of Our Hand & Wrist Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized care is designed to restore intricate function and relieve debilitating pain.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Hand & Wrist Conditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide expert diagnosis and treatment for a variety of hand and wrist problems.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Hand & Wrist Treatments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizing the latest techniques to ensure the best possible outcomes for our patients.
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
              Our Hand & Wrist Treatment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A precise and caring pathway from diagnosis to full hand function.
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
              Life Transformation: Before and After Hand & Wrist Treatment
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
              Your questions about hand and wrist pain treatment, answered.
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
              Get Expert Hand & Wrist Treatment in India
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Don't let hand and wrist pain limit your life. Contact our specialists for a personalized consultation.
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

export default HandAndWristPain;