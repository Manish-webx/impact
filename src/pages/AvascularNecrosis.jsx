import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiClock, FiDollarSign, FiAward, FiShield, FiCheckCircle, FiBone, FiPhone, FiCalendar, FiChevronDown, FiPlay, FiX, FiStar, FiTrendingUp, FiCrosshair, FiLayers, FiZap, FiSearch, FiUsers } = FiIcons;

const AvascularNecrosis = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: FiBone,
      title: "Hip Preservation",
      description: "Our primary goal is to save your natural hip joint, preventing or delaying the need for a total hip replacement."
    },
    {
      icon: FiActivity,
      title: "Effective Pain Relief",
      description: "Advanced treatments target the source of AVN pain, providing significant and lasting relief from groin and hip pain."
    },
    {
      icon: FiClock,
      title: "Restored Mobility & Function",
      description: "By restoring blood flow and structural integrity, we help you return to an active, pain-free lifestyle."
    },
    {
      icon: FiAward,
      title: "Halt Disease Progression",
      description: "Early and accurate intervention can stop the progression of bone death, preventing joint collapse and arthritis."
    }
  ];

  const stages = [
    { stage: "Stage I", title: "Pre-Radiographic", description: "X-rays are normal, but an MRI can detect early signs of AVN. The patient may have mild pain or be asymptomatic.", treatment: "Best stage for non-surgical options or core decompression." },
    { stage: "Stage II", title: "Pre-Collapse", description: "X-rays show cystic changes, but the femoral head is still round. Pain becomes more consistent.", treatment: "Ideal for hip preservation with core decompression or bone grafting." },
    { stage: "Stage III", title: "Early Collapse", description: "The femoral head begins to flatten (crescent sign). This leads to increased pain, limping, and limited motion.", treatment: "May require advanced bone grafts, osteotomy, or total hip replacement." },
    { stage: "Stage IV", title: "Advanced Collapse", description: "The joint is severely damaged with advanced arthritis. Pain is often constant and debilitating.", treatment: "Total Hip Replacement is the definitive treatment." }
  ];

  const treatments = [
    { icon: FiZap, title: "Core Decompression", description: "A minimally invasive procedure where small channels are drilled into the femoral head to relieve pressure and stimulate new blood vessel growth. Highly effective in Stages I and II." },
    { icon: FiLayers, title: "Bone Grafting", description: "Healthy bone tissue (often with its blood supply) is transplanted to the damaged area to provide structural support and promote healing. Used in Stages II and III." },
    { icon: FiCrosshair, title: "Osteotomy", description: "A surgical procedure to reshape the bone, shifting the weight-bearing force away from the damaged area to a healthier part of the joint. Suitable for specific cases in early stages." },
    { icon: FiActivity, title: "Total Hip Replacement", description: "The gold standard for late-stage AVN (III and IV) where the joint has collapsed. The damaged joint is replaced with a durable artificial implant, eliminating pain and restoring function." }
  ];

  const processSteps = [
    {
      icon: FiSearch,
      title: "Comprehensive Diagnosis",
      description: "We start with a thorough evaluation, including an MRI scan, to accurately determine the stage and extent of avascular necrosis and rule out other conditions."
    },
    {
      icon: FiUsers,
      title: "Personalized Treatment Plan",
      description: "Our multidisciplinary team reviews your case to create a tailored treatment plan, focusing on hip preservation techniques like core decompression or bone grafting based on your AVN stage."
    },
    {
      icon: FiActivity,
      title: "Minimally Invasive Surgery",
      description: "Our expert surgeons perform the procedure using advanced, minimally invasive techniques to relieve pressure, restore blood flow, and promote healing with minimal scarring."
    },
    {
      icon: FiTrendingUp,
      title: "Structured Rehabilitation",
      description: "A dedicated physiotherapist guides you through a personalized rehabilitation program to restore strength, flexibility, and function, ensuring a smooth and rapid recovery."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Treatment",
      points: [
        "Persistent groin or hip pain",
        "Limping and difficulty walking",
        "Limited range of motion in the hip",
        "Pain that worsens with activity"
      ]
    },
    {
      title: "After Treatment",
      points: [
        "Significant pain reduction and relief",
        "Improved ability to walk without a limp",
        "Restored hip function for daily activities",
        "Prevention of further joint deterioration"
      ]
    }
  ];


  const faqs = [
    {
      question: "What is Avascular Necrosis (AVN)?",
      answer: "Avascular Necrosis, also known as osteonecrosis, is the death of bone tissue due to a lack of blood supply. This can lead to tiny breaks in the bone and cause the bone to collapse. It most commonly affects the hip joint."
    },
    {
      question: "What are the common causes of AVN?",
      answer: "AVN can be caused by joint or bone trauma, long-term use of high-dose steroid medications, excessive alcohol consumption, and certain medical conditions like sickle cell anemia or Gaucher's disease. In many cases, the cause is unknown."
    },
    {
      question: "Can AVN be treated without surgery?",
      answer: "In the very early stages (Stage I), non-surgical treatments like medications, rest, and reduced weight-bearing may help slow the progression. However, for most patients, surgical intervention is required to restore blood flow and prevent joint collapse."
    },
    {
      question: "What is the success rate for core decompression?",
      answer: "Core decompression has a high success rate, often over 85%, when performed in the early stages (I and II) of AVN before the femoral head collapses. Early diagnosis and treatment are crucial for the success of hip preservation surgery."
    },
    {
      question: "Am I a candidate for hip preservation surgery?",
      answer: "Candidates for hip preservation are typically younger, active patients in the early stages of AVN (I or II) without significant joint collapse. A thorough evaluation, including an MRI, by our orthopedic specialists will determine the best treatment for your specific condition."
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
        <title>Avascular Necrosis Treatment in India | Impact Ortho Centre</title>
        <meta name='description' content='Advanced AVN treatment in India. Impact Ortho Centre offers core decompression, bone grafting & hip preservation for avascular necrosis. Save your hip!' />
        <meta name='keywords' content='avascular necrosis treatment in india, avascular necrosis in india' />
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
                <SafeIcon icon={FiBone} className="w-4 h-4 mr-2" />
                Advanced Hip Preservation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Avascular Necrosis <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">(AVN) Treatment</span> in India
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Find lasting relief from hip pain with advanced avascular necrosis treatment in India. Our leading orthopedic surgeons specialize in hip preservation techniques like core decompression to restore function and prevent joint collapse.
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
                  src="https://impactorthocenter.com/photos/Avascular-Necrosis.webp"
                  alt="Avascular Necrosis Treatment in India"
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
              Why Choose Avascular Necrosis Treatment in India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expert surgeons utilize advanced techniques to preserve your natural hip joint and restore your quality of life.
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

      {/* Stages of AVN Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Understanding the Stages of Avascular Necrosis</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early diagnosis is key to successful hip preservation. We classify AVN into stages to determine the most effective treatment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl font-bold text-blue-600 mr-3">{item.stage}</div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-3 text-sm rounded-r-lg">
                  <p className="font-semibold">Best Treatment:</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Avascular Necrosis Treatment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From preserving the natural joint to total hip replacement, we offer a full spectrum of AVN treatments tailored to your stage.
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
              Our Avascular Necrosis Treatment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined, patient-centric approach from your initial consultation to full recovery.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
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
                  {/* Step Number Circle for Mobile */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10 lg:hidden">
                    {index + 1}
                  </div>

                  {/* Left Side Content for Desktop */}
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

                  {/* Step Number Circle for Desktop */}
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10">
                    {index + 1}
                  </div>

                  {/* Right Side Content for Desktop & Main for Mobile */}
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
              Life Transformation: Before and After AVN Treatment
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See the difference our specialized avascular necrosis treatment in India can make.
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
              Your questions about avascular necrosis treatment in India, answered.
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
              Get Expert Avascular Necrosis Treatment in India
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Don't let AVN limit your life. Contact our specialists for a personalized treatment plan and start your journey to recovery.
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

export default AvascularNecrosis;