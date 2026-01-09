import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiClock, FiStar, FiCalendar, FiMapPin, FiCheckCircle, FiCpu } = FiIcons;

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ratnakar Rao",
      specialty: "Senior Consultant Robotic Joint Replacement & Arthroscopic Surgeon",
      qualification: "MBBS, MS (Ortho), M.Ch (Ortho) UK",
      experience: "24+ Years Experience",
      image: "https://impactorthocenter.com/photos/dr-ratnakar.webp",
      location: "Apollo Hospitals, Jubilee Hills, Hyderabad",
      expertise: [
        "Robotic Knee Replacement (Mako)",
        "Robotic Hip Replacement",
        "Complex Revision Surgeries",
        "Arthroscopy & Sports Medicine"
      ],
      achievements: [
        "Pioneer in Robotic Joint Replacement",
        "Performed 5000+ Joint Surgeries",
        "Certified Mako Robotic Surgeon",
        "Fellowship from Royal College of Surgeons, UK"
      ],
      education: [
        "MBBS - Osmania Medical College, Hyderabad",
        "MS (Orthopedics) - Gandhi Medical College",
        "M.Ch (Orthopedics) - University of Dundee, UK",
        "Robotic Surgery Certification - USA"
      ]
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
        <title>Best Orthopedic Doctors in India | Impact Ortho Centre Hyderabad</title>
        <meta name='description' content='Meet Dr. Ratnakar Rao & our team of expert orthopedic surgeons in Hyderabad. Specialists in robotic joint replacement, arthroscopy & trauma care.' />
      </Helmet>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-white text-[#1E97D9] text-sm font-medium mb-6 border border-blue-100 shadow-sm">
              <SafeIcon icon={FiCpu} className="w-4 h-4 mr-2" />
              Advanced Robotic Surgery Expert
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our <span className="text-[#1E97D9]">Robotic Joint Specialist</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the way in precision orthopedics with international expertise in Robotic-Assisted Joint Replacement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors List */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-16 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Doctor Image */}
                <div className="lg:col-span-1 bg-gray-50 relative group">
                  <div className="absolute inset-0 bg-[#1E97D9]/10 group-hover:bg-[#1E97D9]/20 transition-colors duration-300"></div>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top min-h-[400px]"
                  />
                  <div className="absolute top-6 left-6 bg-[#1E97D9] text-white px-4 py-2 rounded-lg font-bold shadow-lg flex items-center gap-2">
                    <SafeIcon icon={FiCpu} className="w-5 h-5" />
                    Robotic Expert
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center text-white space-x-2 mb-2">
                      <SafeIcon icon={FiAward} className="w-5 h-5 text-yellow-400" />
                      <span className="font-semibold">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center text-white/90 space-x-2">
                      <SafeIcon icon={FiMapPin} className="w-5 h-5" />
                      <span className="text-sm">{doctor.location}</span>
                    </div>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="lg:col-span-2 p-8 md:p-12">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                          <p className="text-[#1E97D9] font-medium text-lg">{doctor.specialty}</p>
                          <p className="text-gray-500 mt-1">{doctor.qualification}</p>
                        </div>
                        <div className="mt-4 md:mt-0 flex items-center bg-yellow-50 px-4 py-2 rounded-lg border border-yellow-100">
                          <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500 fill-current mr-2" />
                          <span className="font-bold text-gray-900">4.9/5</span>
                          <span className="text-gray-500 ml-1 text-sm">(500+ Reviews)</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <SafeIcon icon={FiCpu} className="w-5 h-5 text-[#1E97D9] mr-2" />
                            Robotic Expertise
                          </h3>
                          <ul className="space-y-3">
                            {doctor.expertise.map((item, idx) => (
                              <li key={idx} className="flex items-start text-gray-600">
                                <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                            <SafeIcon icon={FiAward} className="w-5 h-5 text-[#1E97D9] mr-2" />
                            Key Achievements
                          </h3>
                          <ul className="space-y-3">
                            {doctor.achievements.map((item, idx) => (
                              <li key={idx} className="flex items-start text-gray-600">
                                <SafeIcon icon={FiAward} className="w-4 h-4 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <SafeIcon icon={FiClock} className="w-5 h-5 text-[#1E97D9] mr-2" />
                          Education & Robotic Training
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {doctor.education.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 border border-gray-100">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                        Book Robotic Consultation
                      </Link>
                      <button
                        onClick={() => window.location.href = 'tel:+919494559848'}
                        className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1E97D9] text-[#1E97D9] font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
                      >
                        <SafeIcon icon={FiIcons.FiPhone} className="w-5 h-5 mr-2" />
                        Call For Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-[#1E97D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Pain-Free Movement?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule a consultation with Dr. Ratnakar Rao to discuss how Robotic Surgery can help you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#1E97D9] font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
              Book Your Visit Today
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Doctors;