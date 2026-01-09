import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiShield, FiCheckCircle, FiPhone, FiCalendar, FiChevronDown, FiHeart, FiTrendingUp, FiSearch, FiUsers, FiBone, FiAward, FiX, FiRadio } = FiIcons;

const DiagnosticServices = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    { icon: FiTarget, title: "Accurate Diagnosis", description: "Pinpoint the exact source of your orthopedic issue for effective treatment planning." },
    { icon: FiHeart, title: "Personalized Treatment", description: "Imaging results allow our surgeons to create a surgical or non-surgical plan tailored to you." },
    { icon: FiShield, title: "Early Detection", description: "Identify conditions like osteoporosis or early-stage arthritis before they become severe." },
    { icon: FiAward, title: "Minimally Invasive Planning", description: "Advanced imaging is crucial for planning minimally invasive procedures like arthroscopy." }
  ];

  const services = [
    { title: "Magnetic Resonance Imaging (MRI)", description: "Provides detailed images of soft tissues like ligaments, tendons, muscles, and cartilage.", usage: "Ideal for diagnosing sports injuries, spinal issues, and joint problems." },
    { title: "Computed Tomography (CT) Scan", description: "Creates cross-sectional images of bones, offering more detail than regular X-rays.", usage: "Excellent for complex fractures, bone tumors, and pre-surgical planning." },
    { title: "Digital X-Ray", description: "The first step in diagnosing most orthopedic conditions, providing clear images of bones.", usage: "Used to detect fractures, arthritis, and bone alignment issues." },
    { title: "DEXA Scan (Bone Densitometry)", description: "Measures bone mineral density to diagnose osteoporosis and assess fracture risk.", usage: "The gold standard for screening and monitoring osteoporosis." }
  ];

  const processSteps = [
    { icon: FiUsers, title: "Consultation & Referral", description: "Your orthopedic surgeon determines the most appropriate imaging test based on your symptoms and clinical examination." },
    { icon: FiRadio, title: "Advanced Imaging Procedure", description: "Our state-of-the-art equipment captures high-resolution images, performed by skilled technologists." },
    { icon: FiSearch, title: "Expert Radiologist Interpretation", description: "Experienced radiologists analyze your scans and provide a detailed report for your surgeon." },
    { icon: FiCheckCircle, title: "Collaborative Treatment Plan", description: "Your surgeon uses the diagnostic report to confirm your diagnosis and develop a precise treatment plan." }
  ];

  const beforeAfter = [
    { title: "Before Diagnosis", points: ["Unexplained pain and symptoms", "Uncertainty about the root cause", "Delayed or ineffective treatment", "Anxiety about the condition"] },
    { title: "After Diagnosis", points: ["A clear and precise diagnosis", "Understanding of the exact issue", "A targeted and effective treatment plan", "Confidence and peace of mind"] }
  ];

  const faqs = [
    { question: "What is an MRI and is it safe?", answer: "MRI uses a powerful magnetic field and radio waves to create detailed images of organs and tissues. It is very safe as it does not use ionizing radiation. You will be asked to remove all metal objects before the scan." },
    { question: "What is the difference between an MRI and a CT scan?", answer: "An MRI is better for examining soft tissues (ligaments, tendons, spinal cord), while a CT scan is better for looking at bones and is often used for complex fractures. A CT scan uses X-rays, whereas an MRI does not." },
    { question: "Why do I need a diagnostic scan before treatment?", answer: "Diagnostic scans provide your doctor with a clear, internal view of your musculoskeletal system. This is essential for an accurate diagnosis, which is the foundation for an effective and successful treatment plan. It helps avoid unnecessary procedures and ensures the treatment targets the actual problem." },
    { question: "What is a DEXA scan and who should get one?", answer: "A DEXA scan is a low-dose X-ray that measures bone density to diagnose osteoporosis. It is recommended for women over 65, men over 70, or younger individuals with significant risk factors for fractures." }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Advanced Diagnostic Services in India | Impact Ortho Centre</title>
        <meta name='description' content='Precision orthopedic diagnostics in India. Impact Ortho offers MRI, CT, X-ray & DEXA scans for accurate diagnosis & personalized treatment planning.' />
        <meta name='keywords' content='diagnostic services in india' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiSearch} className="w-4 h-4 mr-2" />
                Precision Diagnostics
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Advanced Diagnostic Services <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Accurate diagnosis is the first step to effective treatment. Our center is equipped with state-of-the-art imaging technology, including MRI, CT, and Digital X-rays, to provide a precise understanding of your condition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book a Consultation
                </Link>
                <button onClick={() => window.location.href = 'tel:+919494559848'} className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Inquire Now
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://impactorthocenter.com/photos/Advanced-Diagnostic-Services.webp" alt="Advanced Diagnostic Imaging" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Importance of Advanced Diagnostics</h2>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Diagnostic Modalities</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-3 text-sm rounded-r-lg">
                  <p className="font-semibold">Commonly Used For:</p>
                  <p>{item.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Diagnostic Process</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 h-full w-0.5 bg-blue-200 top-0 lg:left-1/2 lg:-translate-x-1/2"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="relative flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white z-10 lg:hidden">{index + 1}</div>
                  <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : ''}`}>
                    {index % 2 === 0 && (
                      <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 w-full">
                        <div className="flex items-center space-x-4 mb-4 justify-end">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
                        </div>
                        <p className="text-gray-600 text-right">{step.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full items-center justify-center text-white text-2xl font-bold border-4 border-white z-10">{index + 1}</div>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="lg:hidden pl-8">
                      <div className="p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="hidden lg:block p-6 bg-gray-50 rounded-2xl shadow-lg border border-gray-100 w-full ml-8">
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
              Life Transformation: From Uncertainty to Clarity
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
            <h2 className="text-4xl font-bold mb-6">Get a Clear Picture of Your Health</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Contact us to schedule a consultation and learn how our advanced diagnostic services can help you find the right path to recovery.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default DiagnosticServices;