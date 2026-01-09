import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiBookOpen, FiYoutube, FiDownload, FiChevronDown, FiHelpCircle, FiBone, FiHeart, FiActivity } = FiIcons;

const PatientEducation = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const resources = [
    { title: 'Understanding Osteoarthritis', icon: FiBone, link: '/services/arthritis' },
    { title: 'Guide to Knee Replacement', icon: FiBone, link: '/services/knee-replacement' },
    { title: 'Recovering from Hip Replacement', icon: FiBone, link: '/services/total-hip-replacement' },
    { title: 'ACL Injury & Reconstruction', icon: FiActivity, link: '/services/sports-medicine' },
    { title: 'Living with Back Pain', icon: FiActivity, link: '/services/back-pain' },
    { title: 'Managing Osteoporosis', icon: FiHeart, link: '/services/osteoporosis' }
  ];

  const videos = [
    { title: "What to Expect During Knee Replacement", youtubeId: "tSaZvq7K5Gc" },
    { title: "Exercises After Hip Replacement", youtubeId: "iR9vwr0yuDU" },
    { title: "Understanding Robotic Surgery", youtubeId: "BRkpeP4Sxlw" }
  ];

  const faqs = [
    { question: "How can I keep my joints healthy?", answer: "Maintain a healthy weight, stay active with low-impact exercises like swimming and cycling, eat a balanced diet rich in calcium and Vitamin D, and always use proper form when lifting heavy objects." },
    { question: "What is the difference between a sprain and a strain?", answer: "A sprain is a stretching or tearing of ligaments—the tough bands of fibrous tissue that connect two bones together in your joints. A strain is a stretching or tearing of a muscle or a tendon, which is a fibrous cord of tissue that connects muscles to bones." },
    { question: "When should I use ice versus heat for an injury?", answer: "Use ice for acute injuries (the first 24-48 hours) to reduce swelling and numb pain. Use heat for chronic muscle soreness and stiffness to relax muscles and improve blood flow. Do not use heat on a fresh injury as it can increase inflammation." },
    { question: "What is regenerative medicine in orthopedics?", answer: "Regenerative medicine, such as Platelet-Rich Plasma (PRP) therapy, uses your body's own healing properties to treat orthopedic conditions. It involves concentrating platelets from your blood and injecting them into the injured area to accelerate the healing of tendons, ligaments, and cartilage." }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Patient Education & Resources | Impact Ortho Centre</title>
        <meta name='description' content='Empower yourself with knowledge. Access patient guides, recovery tips, and educational videos from Impact Ortho Centre experts.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <SafeIcon icon={FiBookOpen} className="w-4 h-4 mr-2" />
              Your Health, Your Knowledge
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Education Resources
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              An informed patient is an empowered patient. We believe in providing you with clear, reliable information to help you understand your condition and make the best decisions for your health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Health Library</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <Link to={resource.link} className="block bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all group">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <SafeIcon icon={resource.icon} className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">{resource.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Library Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Video Library</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Visual guides to help you understand common orthopedic conditions and treatments.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="relative">
                  <img src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <SafeIcon icon={FiYoutube} className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">General Orthopedic FAQs</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center bg-white p-6 text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <SafeIcon icon={FiChevronDown} className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="p-6 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Have More Questions?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Our resources provide general information, but your condition is unique. Book a consultation with our specialists to get answers tailored to you.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <SafeIcon icon={FiHelpCircle} className="w-5 h-5 mr-2" />
              Ask Our Experts
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default PatientEducation;