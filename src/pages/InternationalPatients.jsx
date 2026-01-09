import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGlobe, FiPhone, FiCalendar, FiChevronDown, FiHeart, FiTrendingUp, FiSearch, FiUsers, FiDollarSign, FiAward, FiFileText, FiPlane, FiHome, FiMessageCircle, FiCheckCircle, FiX, FiActivity } = FiIcons;

const InternationalPatients = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whyChooseUs = [
    { icon: FiAward, title: "World-Class Surgeons", description: "Our orthopedic surgeons are internationally trained with vast experience in complex procedures." },
    { icon: FiDollarSign, title: "Affordable Excellence", description: "Receive top-tier medical care at a fraction of the cost in Western countries without compromising on quality." },
    { icon: FiHeart, title: "Advanced Technology", description: "We utilize cutting-edge technology, including Mako robotic-arm assisted surgery, for precision and better outcomes." },
    { icon: FiTrendingUp, title: "No Waiting Times", description: "Get timely medical attention without the long waiting lists common in many countries." },
  ];

  const services = [
    { icon: FiFileText, title: "Medical Visa Assistance", description: "Our dedicated team provides invitation letters and guides you through the entire visa application process." },
    { icon: FiPlane, title: "Travel & Accommodation", description: "We assist with flight bookings and arrange comfortable accommodation near the hospital for you and your family." },
    { icon: FiUsers, title: "Dedicated Patient Coordinator", description: "A single point of contact to manage all your needs, from appointments to local arrangements." },
    { icon: FiMessageCircle, title: "Language & Translation", description: "Complimentary interpreter services to ensure clear communication with your medical team." },
    { icon: FiHome, title: "Post-Treatment Care", description: "We arrange for your comfortable recovery in Hyderabad and provide a clear plan for your return home." },
    { icon: FiPhone, title: "Remote Follow-Up", description: "Stay connected with your surgeon through tele-consultations after you return to your home country." }
  ];

  const journeySteps = [
    { icon: FiSearch, title: "Initial Inquiry & Consultation", description: "Share your medical reports, and have a free tele-consultation with our specialist to get a personalized treatment plan." },
    { icon: FiFileText, title: "Visa & Travel Planning", description: "Our team assists you with the medical visa process, flight bookings, and accommodation." },
    { icon: FiPlane, title: "Arrival & Admission", description: "You will be received at the airport and transferred to your hotel or the hospital for a pre-operative evaluation." },
    { icon: FiActivity, title: "Surgery & In-Patient Care", description: "Undergo your procedure in our state-of-the-art facility with 24/7 nursing and medical support." },
    { icon: FiHeart, title: "Rehabilitation & Recovery", description: "Our expert physiotherapy team guides your recovery to ensure you regain function and strength." },
    { icon: FiHome, title: "Return Home & Follow-Up", description: "Travel back home with a complete discharge summary and stay connected with us for follow-up care." }
  ];

  const faqs = [
    { question: "How do I start the process?", answer: "The first step is to send us your inquiry and medical records through our contact form. Our international patient coordinator will then get in touch with you to schedule a free online consultation with the doctor." },
    { question: "Can my family accompany me?", answer: "Yes, absolutely. We can assist with visa invitation letters for attendants and help arrange suitable accommodation for your family near the hospital." },
    { question: "How do I handle payments?", answer: "We accept various payment methods, including bank transfers, credit cards, and cash. Our team will provide a detailed cost estimate upfront, and you can make payments in installments or as per the hospital's policy." },
    { question: "What about language barriers?", answer: "We provide complimentary interpreter services for various languages to ensure you can communicate comfortably with your doctors and our staff throughout your stay." }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>International Patient Care | Impact Ortho Centre Hyderabad</title>
        <meta name='description' content='World-class orthopedic treatment for international patients in India. Impact Ortho Centre provides medical visa assistance, airport pickup, and affordable healthcare.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2" />
                Your Global Healthcare Partner
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                International Patient Services <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Welcome to India's premier orthopedic center. We provide seamless, end-to-end care for international patients seeking world-class treatment at an affordable cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Start Your Medical Journey
                </Link>
                <button onClick={() => window.location.href = 'tel:+919494559848'} className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Inquire Now
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://impactorthocenter.com/photos/international-patients.webp" alt="International Patient Services" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why International Patients Choose Us</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={item.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">End-to-End Patient Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We take care of everything, so you can focus on your recovery.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Medical Journey with Us</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:justify-between mb-12">
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'order-2 md:order-1' : 'order-2 md:order-3'}`}>
                  <motion.div initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gray-50 p-6 rounded-lg shadow-md border">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>
                {/* Icon */}
                <div className="w-auto md:w-2/12 flex-shrink-0 flex justify-center my-4 md:my-0 order-1 md:order-2 relative z-10">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">
                    <SafeIcon icon={step.icon} />
                  </motion.div>
                </div>
                {/* Spacer */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
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
            <h2 className="text-4xl font-bold mb-6">Begin Your Journey to a Pain-Free Life</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Our team is ready to assist you. Contact us today for a free consultation and take the first step towards world-class orthopedic care in India.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              Request a Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default InternationalPatients;