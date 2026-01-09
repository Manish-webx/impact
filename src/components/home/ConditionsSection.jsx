import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {Link} from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiArrowRight} = FiIcons;

const ConditionsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const conditions = [
    {
      name: 'Knee Pain',
      image: 'https://impactorthocenter.com/photos/Knee-Pain-Treatment.webp', 
      url: '/services/knee-pain'
    },
    {
      name: 'Hip Pain',
      image: 'https://impactorthocenter.com/photos/Hip-Replacement.webp',
      url: '/services/total-hip-replacement'
    },
    {
      name: 'Shoulder Pain',
      image: 'https://impactorthocenter.com/photos/Shoulder-Pain.webp',
      url: '/services/shoulder-pain'
    },
    {
      name: 'Back Pain',
      image: 'https://impactorthocenter.com/photos/Back-Pain.webp',
      url: '/services/back-pain'
    },
    {
      name: 'Foot & Ankle Pain',
      image: 'https://impactorthocenter.com/photos/Foot-Ankle-Pain.webp',
      url: '/services/foot-ankle-pain'
    },
    {
      name: 'Arthritis',
      image: 'https://impactorthocenter.com/photos/Arthritis-Treatment.webp',
      url: '/services/arthritis'
    },
    {
      name: 'Neck Pain',
      image: 'https://impactorthocenter.com/photos/Neck-Pain.webp',
      url: '/services/neck-pain'
    },
    {
      name: 'Fractures',
      image: 'https://impactorthocenter.com/photos/Trauma-Fracture.webp',
      url: '/services/trauma-surgery'
    }
  ];

  return (
    <section ref={ref} className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Common Orthopedic Conditions We Treat
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive treatment for all musculoskeletal conditions with personalized care plans
          </p>
        </motion.div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {conditions.map((condition, index) => (
            <Link to={condition.url} key={index} className="block group">
              <motion.div
                initial={{opacity: 0, y: 30}}
                animate={inView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-64"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={condition.image} 
                    alt={condition.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#1E97D9] transition-colors">
                    {condition.name}
                  </h3>
                  <div className="flex items-center text-white/0 group-hover:text-white/100 transition-all duration-300 text-sm font-medium">
                    <span>Learn More</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={inView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.6, delay: 0.8}}
          className="text-center mt-12"
        >
          <Link
            to="/services/general-orthopedics"
            className="inline-flex items-center px-8 py-4 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            View All Conditions & Treatments
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ConditionsSection;