import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiHeart, FiTrendingUp, FiCheckCircle, FiPhone, FiCalendar, FiGraduationCap, FiStar, FiUserCheck, FiBookOpen, FiMessageSquare, FiShield, FiUsers } = FiIcons;

const DrRatnakarRao = () => {
  const stats = [
    { icon: FiAward, value: '25,000+', label: 'Orthopedic Surgeries' },
    { icon: FiHeart, value: '3,000+', label: 'Knee Replacements' },
    { icon: FiStar, value: '40+', label: 'Rewards' },
    { icon: FiUsers, value: '40,000+', label: 'Happy Patients' },
  ];

  const credentials = [
    { year: '1995 - 2001', text: 'M.B.B.S., Andhra Medical College, India.' },
    { year: '2003 - 2006', text: 'M.S. Orthopaedics, Andhra Medical College, India.' },
    { year: '2007 - 2008', text: 'Tutor, Christian Medical College, Vellore.' },
    { year: 'June 2009', text: 'Observership with Ross Crawford, Prince Charles Hospital, Brisbane, Australia.' },
    { year: 'Dec 2010 - Jun 2011', text: 'AR fellowship with Prof. Suresh Nathan at NUHS Singapore.' },
    { year: 'Jun 2015 - Jul 2015', text: 'A O TRAUMA Fellowship under PROF. Nobert Haas. Charithe University Berlin, Germany.' },
  ];

  const research = [
    'The incidence of Deep Vein Thrombosis following Total Knee Replacement in the Singapore population: A prospective study',
    'The use of a Tourniquet during the cementing phase of Total Knee Replacement and its impact on clinical outcomes: A prospective study',
    'Performance Of High Flexion Knee Designs In A South East Asian Patient Cohort – Zimmer',
    'LPS Flex versus the Scorpio NRG (on going)',
    'M.S Dissertation: Comparison between range of motion between bipolar and unipolar prosthesis in neck of femur fractures.',
  ];

  const conferences = [
    'Given talk in Tosacon January 24th 2020 at Nizamabad on fixation techniques in Tibial Bicondylar Fractures.',
    'Faculty in Anup Masters Course and presented a talk on Posterior Approach of Hip on 12th and 13th October 2019 in Patna, Bihar.',
    'Given talk on Management of Flexion Deformity in Total Knee Replacement in Arts Science Arthroplasty held in Vijayawada, on 6th July 2019.',
    'Faculty in Mid Term CME Global Trends in Management of Fractures on 27th January 2019 Hyderabad, KIMS Hospital.',
  ];

  const memberships = [
    { name: 'Indian Orthopaedic Association', icon: FiShield },
    { name: 'AO Trauma', icon: FiShield },
    { name: 'Orthopaedic Association of South Indian States', icon: FiShield },
    { name: 'Asia Pacific Arthroplasty Society Incorporated', icon: FiShield },
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Dr. Ratnakar Rao | Best Robotic Joint Replacement Surgeon in Hyderabad</title>
        <meta name='description' content='Dr. Ratnakar Rao is a leading orthopedic surgeon in Hyderabad with 20+ years of experience in robotic knee replacement, hip surgery & sports medicine.' />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-1">
              <div className="w-full max-w-sm mx-auto aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img src="https://impactorthocenter.com/photos/dr-ratnakar.webp" alt="Dr. Ratnakar Rao" className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">Dr. Ratnakar Rao</h1>
              <p className="text-xl md:text-2xl text-blue-600 font-semibold">Chief Consultant Orthopaedic & Joint Replacement Surgeon</p>
              <p className="text-lg md:text-xl text-cyan-700 font-medium mb-6">Sports Medicine Physician</p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                Dr. Ratnakar Rao (MBBS, MS (Ortho)) is one of the most renowned & leading orthopedic surgeons in Hyderabad. With an experience spanning over 20 years, he has performed over 25,000+ Orthopedic & Joint replacement surgeries and also specializes in sports medicine.
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
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">About Dr. Ratnakar Rao</h2>
            <div className="text-lg text-gray-700 space-y-6 leading-relaxed text-justify">
              <p>As a pioneer in Orthopedic & Joint replacement surgeries, he specializes in Knee & Hip Replacement Surgery, Trauma Surgery, Arthroplasty, Arthroscopy & Pediatric Orthopedics. He is a member of various prestigious national & international orthopedic associations like the Indian Orthopedic Association, AO Trauma Foundation, SICOT, and APAS India.</p>
              <p>He founded Impact Orthopaedic Center with the vision of expanding orthopedic treatments and reaching more people with the right treatments and helping them live pain-free and healthy live, for athletes and sports persons to improve the quality of the game and prevent injuries.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-10 bg-white">
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
      <section className="py-10 bg-gray-50">
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

      {/* Conferences & Presentation */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conferences & Presentations</h2>
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

      {/* Professional Memberships */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Memberships</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {memberships.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <SafeIcon icon={item.icon} className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Schedule a Consultation</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Take the first step towards a pain-free life. Book an appointment with Dr. Ratnakar Rao to discuss your orthopedic concerns and explore the best treatment options for you.
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

export default DrRatnakarRao;