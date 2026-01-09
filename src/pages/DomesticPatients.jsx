import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiPhone, FiCalendar, FiChevronDown, FiHeart, FiTrendingUp, FiSearch, FiUsers, FiAward, FiFileText, FiShield, FiActivity } = FiIcons;

const DomesticPatients = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const whyChooseUs = [
    { icon: FiAward, title: "Leading Surgeons", description: "Access some of India's top orthopedic and joint replacement surgeons right here in Hyderabad." },
    { icon: FiHeart, title: "Advanced Robotic Technology", description: "Benefit from the precision of Mako robotic-arm assisted surgery for better outcomes in knee and hip replacements." },
    { icon: FiShield, title: "Cashless & Insurance Facility", description: "We have tie-ups with all major insurance providers and TPAs for a hassle-free experience." },
    { icon: FiTrendingUp, title: "Comprehensive Care", description: "From your first consultation to post-operative physiotherapy, we provide complete care under one roof." },
  ];

  const services = [
    { icon: FiUsers, title: "OPD Consultations", description: "Easy-to-book appointments for expert evaluation of all orthopedic conditions." },
    { icon: FiFileText, title: "Insurance & TPA Desk", description: "A dedicated desk to assist you with all your insurance pre-authorization and claims processing." },
    { icon: FiSearch, title: "In-House Diagnostics", description: "Access to advanced imaging like MRI, CT, and Digital X-rays for quick and accurate diagnosis." },
    { icon: FiHome, title: "Comfortable In-Patient Care", description: "Modern, comfortable rooms and dedicated nursing care to make your hospital stay pleasant." },
    { icon: FiActivity, title: "Post-Operative Physiotherapy", description: "Our expert rehabilitation team works with you to ensure a fast and complete recovery." },
    { icon: FiPhone, title: "24/7 Emergency Support", description: "Our orthopedic trauma team is available round-the-clock to handle any emergency." }
  ];

  const journeySteps = [
    { icon: FiCalendar, title: "Book an Appointment", description: "Easily book your consultation online or by calling our dedicated appointment line." },
    { icon: FiSearch, title: "Consultation & Diagnosis", description: "Meet with our specialist for a thorough evaluation, followed by any necessary diagnostic tests." },
    { icon: FiShield, title: "Insurance & Admission", description: "Our team assists with your insurance paperwork while you are comfortably admitted for your procedure." },
    { icon: FiActivity, title: "Surgery & Recovery", description: "Undergo your surgery with our expert team and begin your recovery with personalized care." },
    { icon: FiTrendingUp, title: "Physiotherapy & Discharge", description: "Start your rehabilitation and receive a detailed discharge plan for your continued recovery at home." },
    { icon: FiHome, title: "Home Care & Follow-up", description: "We ensure you are well-supported at home and schedule follow-up appointments to monitor your progress." }
  ];

  const faqs = [
    { question: "How can I book an appointment?", answer: "You can book an appointment by calling us directly at +91 9494559848 or by filling out the appointment form on our contact page. Our team will get back to you to confirm the date and time." },
    { question: "Which insurance plans do you accept?", answer: "We accept all major health insurance plans and have a dedicated TPA desk to help you with cashless facilities. Please call our helpline to confirm if your specific plan is covered." },
    { question: "What should I bring for my first consultation?", answer: "Please bring any previous medical records, diagnostic reports (like X-rays or MRI scans), a list of your current medications, and your insurance card if you have one." },
    { question: "Do you provide emergency services?", answer: "Yes, our hospital partner provides 24/7 emergency services with an orthopedic trauma surgeon on call to handle all types of fractures and musculoskeletal injuries." }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Domestic Patient Services | Impact Ortho Centre Hyderabad</title>
        <meta name='description' content='Best orthopedic hospital in Hyderabad for domestic patients. Cashless insurance facility, advanced surgery & expert care. Book an appointment today.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiHome} className="w-4 h-4 mr-2" />
                World-Class Care, Closer to You
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Information for Domestic Patients
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Access India's best orthopedic care right here in Hyderabad. We provide comprehensive services, from expert consultations to advanced robotic surgery, with full insurance and cashless support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book an Appointment
                </Link>
                <button onClick={() => window.location.href = 'tel:+919494559848'} className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call Us Now
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://impactorthocenter.com/photos/domestic-patients.webp" alt="Domestic Patient Services" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us for Your Care</h2>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless & Comprehensive Services</h2>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Treatment Journey: A Clear Path</h2>
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
            <h2 className="text-4xl font-bold mb-6">Take the Next Step Towards a Pain-Free Life</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your journey to recovery starts here. Book a consultation with our expert orthopedic team today.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              Book Your Appointment Now
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default DomesticPatients;