import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiHeart, FiTrendingUp, FiPhone, FiCalendar, FiGraduationCap, FiStar, FiUsers, FiActivity } = FiIcons;

const DrSharathBabu = () => {
  const stats = [
    { icon: FiAward, value: '25,000+', label: 'Orthopaedic Surgeries' },
    { icon: FiHeart, value: '3,000+', label: 'Knee Replacements' },
    { icon: FiStar, value: '40+', label: 'Awards' },
    { icon: FiUsers, value: '40,000+', label: 'Happy Patients' },
  ];

  const credentials = [
    { year: '2009', text: 'Graduated from SVS Medical College' },
    { text: 'Pursued DNB (Ortho) at Yashoda Hospital, Hyderabad' },
    { year: '2014', text: 'Awarded Fellowship in Joint Replacement Surgery' },
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Dr. N. Sharath Babu | Joint Replacement Surgeon in Hyderabad</title>
        <meta name='description' content='Dr. N. Sharath Babu is a leading orthopedic surgeon in Hyderabad, specializing in joint replacement, sports injuries & trauma care. Book a consultation.' />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-1">
              <div className="w-full max-w-sm mx-auto aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://impactorthocenter.com/photos/dr-sharath.webp" alt="Dr. N. Sharath Babu" className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">Dr. N. Sharath Babu</h1>
              <p className="text-xl md:text-2xl text-blue-600 font-semibold">Consultant Orthopaedic & Joint Replacement Surgeon</p>
              <p className="text-lg md:text-xl text-cyan-700 font-medium mb-6">Orthopedic Sports Specialist</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Dr. N. Sharath Babu (MBBS, DNB (Ortho)) specializes in primary & revision Joint replacement surgeries. Recognized for his expertise in treating sports injuries and trauma injuries, he is one of the leading orthopedic surgeons of Hyderabad and a key member of the elite team of orthopedic surgeons lead by Dr. Ratnakar Rao.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                BOOK AN APPOINTMENT
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About Dr. N. Sharath Babu</h2>
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed text-justify">
              <p>Widely respected for his precision and application of groundbreaking Joint replacement & orthopedic surgical techniques, Dr. Sharath Babu’s treatment approach is based on a philosophy that every individual treatment is specific and should be tailor-made to the individual needs of every patient. He makes use advanced orthopedic surgical techniques to make sure that the downtime and immobility of patient are greatly reduced.</p>
              <p>Dr. Sharath Babu’s focus is not just the recovery of a patient but the speed of that recovery and the patients return to his normal life. His unmatched skill & dedication in treatment is backed up by his well-coordinated post-operative care team which often involves a multi-disciplinary approach to help the patient recover fast.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Credentials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">An alumnus of prestigious SVS Medical College, Dr. Sharath Babu had the privilege of studying & practicing under the guidance of India’s top doctors and healthcare professionals.</p>
          </motion.div>
          <div className="space-y-8">
            {credentials.map((cred, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={FiGraduationCap} className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  {cred.year && <p className="font-bold text-blue-600">{cred.year}</p>}
                  <h3 className="text-lg font-semibold text-gray-800">{cred.text}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Schedule a Consultation</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Take the first step towards a pain-free life. Book an appointment with Dr. N. Sharath Babu to discuss your orthopedic concerns and explore the best treatment options for you.
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

export default DrSharathBabu;