import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiShield, FiCheckCircle, FiPhone, FiCalendar, FiChevronDown, FiHeart, FiTrendingUp, FiSearch, FiUsers, FiBone, FiAward, FiX } = FiIcons;

const Arthroscopy = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    { icon: FiHeart, title: "Less Pain & Scarring", description: "Small incisions mean significantly less post-operative pain and minimal scarring compared to open surgery." },
    { icon: FiTrendingUp, title: "Faster Recovery", description: "Reduced trauma to surrounding tissues allows for a quicker rehabilitation process and return to activities." },
    { icon: FiTarget, title: "High Diagnostic Accuracy", description: "Allows the surgeon to directly visualize the inside of the joint for a precise diagnosis and treatment." },
    { icon: FiShield, title: "Lower Risk of Complications", description: "Minimally invasive nature often leads to a lower risk of infection and other complications." }
  ];

  const procedures = [
    { title: "Knee Arthroscopy", description: "Used to treat meniscus tears, reconstruct ACLs, and remove damaged cartilage.", details: "One of the most common orthopedic procedures performed worldwide." },
    { title: "Shoulder Arthroscopy", description: "Ideal for repairing rotator cuff tears, treating shoulder impingement, and addressing instability.", details: "Effectively restores function and relieves pain in the shoulder." },
    { title: "Hip Arthroscopy", description: "Treats conditions like labral tears and hip impingement (FAI), often preserving the hip joint.", details: "A highly specialized procedure to address pain in younger, active patients." },
    { title: "Ankle & Wrist Arthroscopy", description: "Used to address cartilage damage, impingement, and remove loose bodies in smaller joints.", details: "Provides a minimally invasive solution for complex small joint problems." }
  ];

  const conditionsTreated = [
    { icon: FiCheckCircle, title: "Ligament Tears (e.g., ACL)", description: "Reconstructing torn ligaments to restore joint stability, particularly in the knee." },
    { icon: FiCheckCircle, title: "Cartilage Damage & Meniscus Tears", description: "Repairing or trimming torn cartilage to relieve pain, clicking, and locking in the joint." },
    { icon: FiCheckCircle, title: "Rotator Cuff Repair", description: "Re-attaching torn tendons in the shoulder to restore strength and reduce pain." },
    { icon: FiCheckCircle, title: "Joint Impingement", description: "Removing bone spurs or inflamed tissue that is causing painful rubbing within the joint." }
  ];

  const processSteps = [
    { icon: FiSearch, title: "Diagnostic Evaluation", description: "Your journey begins with a thorough clinical exam and an MRI to accurately diagnose your joint problem." },
    { icon: FiUsers, title: "Pre-operative Planning", description: "Our team discusses the procedure with you, explaining the goals and what to expect during recovery." },
    { icon: FiActivity, title: "Minimally Invasive Procedure", description: "The surgeon performs the arthroscopy through small 'keyhole' incisions using a camera and specialized instruments." },
    { icon: FiTrendingUp, title: "Accelerated Rehabilitation", description: "A personalized physiotherapy program starts soon after surgery to help you quickly and safely regain function." }
  ];

  const beforeAfter = [
    { title: "Before Arthroscopy", points: ["Joint pain, locking, or instability", "Limited range of motion", "Inability to play sports", "Swelling and discomfort after activity"] },
    { title: "After Arthroscopy", points: ["Repaired joint with reduced pain", "Restored stability and smooth motion", "Faster recovery than open surgery", "A clear path to returning to an active lifestyle"] }
  ];

  const faqs = [
    { question: "What is arthroscopy?", answer: "Arthroscopy is a minimally invasive surgical procedure on a joint in which a surgeon looks inside the joint with a tiny camera and can treat problems through small incisions. It is often called 'keyhole surgery'." },
    { question: "Is arthroscopy painful?", answer: "Because it is minimally invasive, arthroscopy is generally less painful than traditional open surgery. You will be under anesthesia during the procedure, and post-operative pain is managed with medication. Most patients experience discomfort rather than severe pain." },
    { question: "How long is the recovery after arthroscopic surgery?", answer: "Recovery time varies depending on the joint and the specific procedure performed. Simple procedures may allow a return to most activities in a few weeks, while more complex reconstructions (like an ACL) can take several months of rehabilitation." },
    { question: "What are the advantages of arthroscopy over open surgery?", answer: "The main advantages include smaller incisions, less pain, less joint stiffness, a lower risk of complications, and a faster recovery time. This often allows for the procedure to be done on an outpatient basis." }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Arthroscopy Surgery in India | Impact Ortho Centre</title>
        <meta name='description' content='Advanced Arthroscopy Surgery in India. Impact Ortho Centre offers minimally invasive keyhole surgery for knee, shoulder, hip & more with faster recovery.' />
        <meta name='keywords' content='arthroscopy surgery in india, arthroscopy in india' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiTarget} className="w-4 h-4 mr-2" />
                Minimally Invasive Surgery
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Arthroscopy Surgery <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Experience faster recovery and less pain with advanced arthroscopic 'keyhole' surgery in India. Our expert surgeons treat a wide range of joint conditions affecting the knee, shoulder, hip, and more.
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
              <img src="https://impactorthocenter.com/photos/Arthroscopy-Surgery.webp" alt="Arthroscopy Surgery" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advantages of Arthroscopic Surgery</h2>
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

      {/* Procedures Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Arthroscopic Procedures</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedures.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-3 text-sm rounded-r-lg">
                  <p>{item.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Can Be Treated with Arthroscopy?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conditionsTreated.map((treatment, index) => (
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Arthroscopy Journey</h2>
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
              Life Transformation: Before and After Arthroscopy
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
            <h2 className="text-4xl font-bold mb-6">Explore Minimally Invasive Options</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Find out if arthroscopic surgery is the right solution for your joint pain. Contact our team for a comprehensive evaluation.
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

export default Arthroscopy;