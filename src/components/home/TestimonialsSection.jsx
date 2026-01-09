import React, { useState, useEffect } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiStar, FiChevronLeft, FiChevronRight, FiQuote} = FiIcons;

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "After struggling with knee pain for years, Dr. Rajesh's robotic knee replacement changed my life. I'm now pain-free and back to my morning walks!",
      name: "Mr. Rajesh K.",
      procedure: "Knee Replacement",
      rating: 5
    },
    {
      quote: "The team at Impact Ortho provided exceptional care throughout my hip replacement journey. Professional, caring, and truly experts in their field.",
      name: "Mrs. Lakshmi M.",
      procedure: "Hip Replacement",
      rating: 5
    },
    {
      quote: "As a professional athlete, I needed the best care for my ACL injury. The sports medicine team got me back on the field in record time!",
      name: "Arjun S.",
      procedure: "Sports Injury",
      rating: 5
    },
    {
      quote: "World-class facilities combined with compassionate care. My shoulder surgery was a complete success, and the recovery was faster than expected.",
      name: "Dr. Priya R.",
      procedure: "Shoulder Surgery",
      rating: 5
    },
    {
      quote: "From consultation to post-op care, everything was seamless. The robotic technology ensured precise results, and I'm extremely satisfied.",
      name: "Mr. Venkat T.",
      procedure: "Robotic Knee Replacement",
      rating: 5
    },
    {
      quote: "Affordable without compromising quality. Thank you for giving me my life back after years of arthritis pain.",
      name: "Mrs. Sunita D.",
      procedure: "Arthritis Treatment",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const getVisibleTestimonials = () => {
    const testimonialsCopy = [...testimonials, ...testimonials]; // Duplicate for seamless loop
    return testimonialsCopy.slice(currentIndex, currentIndex + 2);
  };

  return (
    <section ref={ref} className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thousands of lives transformed with expert orthopedic care and compassionate treatment
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative px-0 md:px-12">
          {/* Navigation Buttons - Adjusted for mobile */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E97D9] hover:bg-[#1E97D9] hover:text-white transition-all duration-300 md:-translate-x-4"
            aria-label="Previous Testimonial"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1E97D9] hover:bg-[#1E97D9] hover:text-white transition-all duration-300 md:translate-x-4"
            aria-label="Next Testimonial"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
          </button>

          {/* Testimonials Grid - 2 columns on desktop, 1 on mobile */}
          <div className="overflow-hidden mx-2 md:mx-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                {getVisibleTestimonials().map((testimonial, index) => (
                  <motion.div
                    key={`${currentIndex}-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gray-50 rounded-2xl p-6 md:p-8 relative ${index === 1 ? 'hidden lg:block' : ''}`} // Hide second testimonial on small screens
                  >
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 text-[#1E97D9] opacity-20">
                      <SafeIcon icon={FiQuote} className="w-8 h-8" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <SafeIcon 
                          key={i} 
                          icon={FiStar} 
                          className="w-5 h-5 text-yellow-400 fill-current" 
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Patient Info */}
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-[#1E97D9] font-medium">{testimonial.procedure}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#1E97D9] w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1E97D9] mb-2">1000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1E97D9] mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#1E97D9] mb-2">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;