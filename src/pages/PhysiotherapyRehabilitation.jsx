import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiShield, FiCheckCircle, FiPhone, FiCalendar, FiChevronDown, FiHeart, FiTrendingUp, FiSearch, FiUsers, FiBone, FiAward, FiSmile, FiX } = FiIcons;

const PhysiotherapyRehabilitation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    { icon: FiTrendingUp, title: "Faster Recovery", description: "Accelerate your healing process after surgery or injury with a structured, evidence-based program." },
    { icon: FiHeart, title: "Effective Pain Management", description: "Utilize manual therapy and modalities to reduce pain and inflammation without over-reliance on medication." },
    { icon: FiActivity, title: "Improved Strength & Mobility", description: "Regain your strength, flexibility, and range of motion through personalized exercise prescriptions." },
    { icon: FiShield, title: "Injury Prevention", description: "Learn proper body mechanics and exercises to reduce the risk of future injuries or recurrence." }
  ];

  const services = [
    { title: "Post-Surgical Rehabilitation", description: "Essential for recovery after procedures like joint replacement, ACL reconstruction, or fracture fixation.", focus: "Focuses on restoring mobility, strength, and function safely and effectively." },
    { title: "Sports Injury Rehabilitation", description: "Specialized programs for athletes to recover from injuries and return to their sport at peak performance.", focus: "Includes sport-specific drills and injury prevention strategies." },
    { title: "Pain Management Programs", description: "Non-invasive treatment for chronic pain conditions like back pain, neck pain, and arthritis.", focus: "Uses a combination of manual therapy, exercise, and education." },
    { title: "Geriatric Physiotherapy", description: "Helps older adults improve balance, strength, and mobility to maintain independence and prevent falls.", focus: "Gentle exercises and functional training for daily activities." }
  ];

  const modalities = [
    { icon: FiUsers, title: "Manual Therapy", description: "Hands-on techniques including joint mobilization, massage, and soft tissue manipulation to reduce pain and improve mobility." },
    { icon: FiActivity, title: "Therapeutic Exercise", description: "Customized exercise programs prescribed by our therapists to target specific weaknesses and movement dysfunctions." },
    { icon: FiAward, title: "Electrotherapy", description: "Use of modalities like TENS (Transcutaneous Electrical Nerve Stimulation) and Ultrasound to manage pain and promote tissue healing." },
    { icon: FiCheckCircle, title: "Functional Training", description: "Exercises and activities designed to mimic daily tasks and sports movements to ensure a safe return to your lifestyle." }
  ];

  const processSteps = [
    { icon: FiSearch, title: "Comprehensive Assessment", description: "A one-on-one evaluation with our physiotherapist to assess your condition, movement patterns, and set clear goals." },
    { icon: FiTarget, title: "Customized Treatment Plan", description: "Based on the assessment, a personalized therapy plan is created, combining various modalities and exercises." },
    { icon: FiHeart, title: "Hands-On Treatment & Guidance", description: "You will receive dedicated attention during your sessions, with hands-on therapy and expert guidance through your exercises." },
    { icon: FiSmile, title: "Education & Home Program", description: "We empower you with the knowledge and tools to continue your recovery at home and prevent future problems." }
  ];

  const beforeAfter = [
    { title: "Before Rehabilitation", points: ["Limited mobility and stiffness post-surgery", "Chronic pain and weakness", "Difficulty with daily activities", "Risk of re-injury and poor outcomes"] },
    { title: "After Rehabilitation", points: ["Restored range of motion and flexibility", "Increased strength and reduced pain", "Independence in daily life", "Improved body mechanics and injury prevention"] }
  ];

  const faqs = [
    { question: "What should I expect during my first physiotherapy session?", answer: "Your first session will involve a detailed assessment where the therapist will ask about your medical history and symptoms, and perform a physical evaluation. Based on this, they will explain your diagnosis and work with you to create a treatment plan and goals." },
    { question: "How many sessions will I need?", answer: "The number of sessions varies greatly depending on your condition, its severity, and your personal goals. Your therapist will give you an estimated timeline after your initial assessment and will continually reassess your progress." },
    { question: "Is physiotherapy painful?", answer: "Physiotherapy aims to reduce pain, not cause it. Some exercises or manual techniques might cause temporary soreness as you work on improving mobility or strength, but your therapist will always work within your comfort level." },
    { question: "Do I need a doctor's referral to see a physiotherapist?", answer: "While a doctor's referral can be helpful, it is not always necessary to see a physiotherapist in India. You can book a direct appointment for an assessment. However, if you are claiming insurance, your provider may require a referral." }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Physiotherapy & Rehabilitation Services in India | Impact Ortho Centre</title>
        <meta name='description' content='Expert physiotherapy & rehabilitation in India. Impact Ortho offers personalized post-surgical, sports injury & chronic pain recovery programs.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiActivity} className="w-4 h-4 mr-2" />
                Your Partner in Recovery
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Physiotherapy & Rehabilitation <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Maximize your recovery and return to an active life with our expert physiotherapy team. We provide personalized, one-on-one rehabilitation for post-surgical recovery, sports injuries, and chronic pain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book an Appointment
                </Link>
                <button onClick={() => window.location.href = 'tel:+919494559848'} className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call for Info
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://impactorthocenter.com/photos/Physiotherapy-Rehabilitation.webp" alt="Physiotherapy & Rehabilitation" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Our Rehabilitation Programs</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

      {/* Services Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Specialized Physiotherapy Services</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-3 text-sm rounded-r-lg">
                  <p>{item.focus}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Treatment Modalities</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modalities.map((treatment, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-6">
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to Recovery</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 h-full w-0.5 bg-blue-200 top-0 lg:left-1/2 lg:-translate-x-1/2"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="relative flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10 lg:hidden">{index + 1}</div>
                  <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : ''}`}>
                    {index % 2 === 0 && (
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full">
                        <div className="flex items-center space-x-4 mb-4 justify-end">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
                        </div>
                        <p className="text-gray-600 text-right">{step.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10">{index + 1}</div>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="lg:hidden pl-8">
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="hidden lg:block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full ml-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
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
              Life Transformation: Before and After Rehabilitation
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center bg-white p-6 text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <SafeIcon icon={FiChevronDown} className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Start Your Rehabilitation Journey Today</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Whether you're recovering from surgery or dealing with a chronic injury, our team is here to help you get back to your best.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              Book Your Assessment
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default PhysiotherapyRehabilitation;