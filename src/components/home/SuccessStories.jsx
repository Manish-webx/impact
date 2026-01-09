import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiHeart, FiActivity, FiChevronLeft, FiChevronRight, FiQuote, FiStar, FiGlobe, FiDollarSign } = FiIcons;

const SuccessStories = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: 'Ahmed Hassan',
      country: 'Nigeria',
      flag: '🇳🇬',
      procedure: 'Robotic Knee Replacement',
      image: '/images/success-ahmed-hassan.svg',
      quote: 'The robotic surgery was incredible! I was walking the same day and back to Nigeria pain-free in just 3 weeks. The medical tourism support was exceptional.',
      rating: 5,
      recoveryTime: '3 weeks',
      cost: '$7,200',
      highlights: ['Pain-free walking', 'Quick recovery', 'Excellent support'],
    },
    {
      name: 'Fatima Al-Rashid',
      country: 'UAE',
      flag: '🇦🇪',
      procedure: 'Hip Replacement Surgery',
      image: '/images/success-fatima-al-rashid.svg',
      quote: 'From Dubai to Hyderabad for my hip replacement was the best decision. The hospital\'s international patient wing made everything seamless.',
      rating: 5,
      recoveryTime: '4 weeks',
      cost: '$6,800',
      highlights: ['Professional care', 'Multilingual staff', 'Modern facilities'],
    },
    {
      name: 'Rahman Khan',
      country: 'Bangladesh',
      flag: '🇧🇩',
      procedure: 'ACL Reconstruction',
      image: '/images/success-rahman-khan.svg',
      quote: 'As a football player, I needed the best ACL surgery. The arthroscopic procedure got me back on the field stronger than before!',
      rating: 5,
      recoveryTime: '6 weeks',
      cost: '$4,500',
      highlights: ['Sports medicine expertise', 'Advanced rehab', 'Personalized care'],
    },
    {
      name: 'Sarah Johnson',
      country: 'Kenya',
      flag: '🇰🇪',
      procedure: 'Shoulder Replacement',
      image: '/images/success-sarah-johnson.svg',
      quote: 'The shoulder replacement changed my life. I can work and play without pain. The medical visa assistance made the process so easy.',
      rating: 5,
      recoveryTime: '5 weeks',
      cost: '$6,200',
      highlights: ['Life-changing results', 'Smooth process', 'Great outcomes'],
    },
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };
  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <section ref={ref} className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiGlobe} className="w-4 h-4 mr-2" /> Patient Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Transforming Lives <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Worldwide</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real stories from international patients who chose Hyderabad for their orthopedic treatment
          </p>
        </motion.div>

        {/* Story Carousel */}
        <div className="relative max-w-5xl mx-auto px-0 md:px-12">
          {/* Navigation Buttons - Adjusted for mobile */}
          <button
            onClick={prevStory}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 md:-translate-x-4"
            aria-label="Previous Story"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 md:translate-x-4"
            aria-label="Next Story"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
          </button>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden mx-2 md:mx-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left - Image & Patient Info */}
                <div className="relative">
                  <div className="aspect-square lg:aspect-auto lg:h-full">
                    <img src={currentStory.image} alt={currentStory.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Patient Info Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">{currentStory.flag}</span>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold">{currentStory.name}</h3>
                          <p className="text-blue-200">{currentStory.country}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                          <span>From {currentStory.country}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <SafeIcon icon={FiHeart} className="w-4 h-4" />
                          <span>Recovered in {currentStory.recoveryTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right - Story Content */}
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(currentStory.rating)].map((_, i) => (
                        <SafeIcon icon={FiStar} key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{currentStory.procedure}</h4>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-bold">
                      <FiDollarSign className="w-4 h-4 mr-1" /> {currentStory.cost}
                    </div>
                  </div>
                  <blockquote className="relative mb-8">
                    <SafeIcon icon={FiQuote} className="w-8 h-8 text-blue-200 absolute -top-2 -left-2" />
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg italic pl-6">"{currentStory.quote}"</p>
                  </blockquote>
                  <div className="space-y-3 mb-8">
                    <h5 className="font-semibold text-gray-900">Key Highlights:</h5>
                    <div className="grid grid-cols-1 gap-2">
                       {currentStory.highlights.map((highlight, index) => (
                         <div key={index} className="flex items-center gap-2 text-gray-600">
                           <SafeIcon icon={FiActivity} className="w-4 h-4 text-green-500" />
                           {highlight}
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                      <div>
                        <p className="text-xs sm:text-sm text-gray-600">Treatment Type</p>
                        <p className="font-semibold text-gray-900">{currentStory.procedure}</p>
                      </div>
                      <div className="sm:text-right">
                        <p className="text-xs sm:text-sm text-gray-600">Recovery Time</p>
                        <p className="font-semibold text-blue-600">{currentStory.recoveryTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div initial={{opacity: 0, y: 30}} animate={inView ? {opacity: 1, y: 0} : {}} transition={{duration: 0.6, delay: 0.8}} className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of international patients who have found new life through our advanced orthopedic treatments with transparent pricing.</p>
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto justify-center">
              Start Your Journey to Recovery
              <SafeIcon icon={FiChevronRight} className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;