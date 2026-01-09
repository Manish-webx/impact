import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiCpu } = FiIcons;

const DoctorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const doctors = [
    {
      id: 1,
      name: 'Dr. Ratnakar Rao',
      specialty: 'Senior Robotic Joint Replacement Surgeon',
      image: 'https://impactorthocenter.com/photos/dr-ratnakar.webp',
      description: 'Expert in Robotic Knee & Hip Replacement with 20+ years of experience.',
      link: '/doctors/dr-ratnakar-rao'
    }        
  ];

  return (
    <section ref={ref} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
           <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-50 text-[#1E97D9] text-sm font-medium mb-4 border border-blue-100">
              <SafeIcon icon={FiCpu} className="w-4 h-4 mr-2" />
              Robotic Surgery Expert
            </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Lead Robotic Surgeon</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Ratnakar Rao is a pioneer in robotic-assisted orthopedic surgery, delivering precision and excellence in every procedure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 mx-auto gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow max-w-xs mx-auto"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#1E97D9] text-white text-xs font-bold px-2 py-1 rounded">
                  Robotic Expert
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-6">{doctor.description}</p>
                <Link
                  to={doctor.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  View Profile
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;