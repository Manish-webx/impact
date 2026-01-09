import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiBookOpen, FiMessageSquare, FiPhone, FiCalendar, FiGraduationCap, FiCheckCircle } = FiIcons;

const DrAshwinKumar = () => {
  const credentials = [
    { year: '2009 - 2014', text: 'M.B.B.S., Rajiv Gandhi Institute Medical Sciences (RIMS) Adilabad (NTRUHS).' },
    { year: '2014 - 2015', text: 'Internship, RIMS Adilabad (NTRUHS).' },
    { year: '2016 - 2019', text: 'M.S. Orthopaedics, Kakatiya Medical College, Warangal (KNRUHS).' },
  ];

  const research = [
    'Dissertation in “COMPARATIVE STUDY OF FUNCTIONAL OUTCOME OF DYNAMIC COMPRESSION PLATING AND INTERLOCKING NAILING FOR FRACTURE SHAFT OF HUMERUS IN ADULTS“',
  ];

  const conferences = [
    'IOACON 2018 conducted at Coimbatore from 26th November to 1st December 2018',
    'TOSACON 2018 conducted at Warangal in March 2018.',
    'Arthroplasty conference conducted at SVS Medical College, Mahabub Nagar in December 2017.',
    'TRAUMACON conducted at KMC Warangal in April 2018.',
    'Regional Clubfoot Conference – South India on “ Ponseti Method of Clubfoot Management” in March 2018',
  ];

  const specializations = [
    'Arthroscopy',
    'Arthroplasty',
    'Trauma Surgery',
    'Sports Injury Treatments',
    'Joint Replacement Surgery',
    'Spine Problems',
    'Pediatric Ortho',
    'Reconstructive Surgeries',
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Dr. Ashwin Kumar | Orthopedic Surgeon in Hyderabad</title>
        <meta name='description' content='Dr. Ashwin Kumar is an experienced orthopedic surgeon in Hyderabad, specializing in joint replacement, arthroscopy, sports injuries & trauma surgery.' />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-1">
              <div className="w-full max-w-sm mx-auto aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://impactorthocenter.com/photos/dr-ashwin.webp" alt="Dr. Ashwin Kumar" className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">Dr. Ashwin Kumar</h1>
              <p className="text-xl md:text-2xl text-blue-600 font-semibold">Orthopaedic Surgeon & Joint Replacement Specialist</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                A dedicated orthopedic surgeon specializing in joint replacement, sports injuries, and trauma surgery. Dr. Ashwin Kumar brings advanced techniques and a patient-centered approach to restore mobility and improve quality of life.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                BOOK AN APPOINTMENT
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specializations</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specializations.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }} className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
                <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Credentials</h2>
          </motion.div>
          <div className="space-y-8">
            {credentials.map((cred, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiGraduationCap} className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-blue-600">{cred.year}</p>
                  <h3 className="text-lg font-semibold text-gray-800">{cred.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Experience</h2>
          </motion.div>
          <ul className="space-y-4">
            {research.map((item, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start">
                <SafeIcon icon={FiBookOpen} className="w-5 h-5 text-cyan-600 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Conferences & Workshops */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conferences & Workshops</h2>
          </motion.div>
          <ul className="space-y-4">
            {conferences.map((item, index) => (
              <motion.li key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start">
                <SafeIcon icon={FiMessageSquare} className="w-5 h-5 text-blue-600 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Schedule a Consultation</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Take the first step towards a pain-free life. Book an appointment with Dr. Ashwin Kumar to discuss your orthopedic concerns and explore the best treatment options for you.
            </p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default DrAshwinKumar;