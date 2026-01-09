import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiUser, FiGlobe, FiStar, FiClock, FiX } = FiIcons;

const VideoTestimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Robotic Knee Replacement",
      procedure: "Robotic Knee Replacement",
      duration: "4:32",
      thumbnail: "https://img.youtube.com/vi/tSaZvq7K5Gc/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=tSaZvq7K5Gc",
      youtubeId: "tSaZvq7K5Gc",

    },
    {
      id: 2,
      name: "Hip Replacement Surgery", 
      procedure: "Hip Replacement Surgery",
      duration: "3:45",
      thumbnail: "https://img.youtube.com/vi/iR9vwr0yuDU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=iR9vwr0yuDU",
      youtubeId: "iR9vwr0yuDU",
    },
    {
      id: 3,
      name: "ACL Reconstruction",
      procedure: "ACL Reconstruction",
      duration: "5:12",
      thumbnail: "https://img.youtube.com/vi/BRkpeP4Sxlw/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=BRkpeP4Sxlw",
      youtubeId: "BRkpeP4Sxlw",   
    },
    {
      id: 4,
      name: "Shoulder Replacement",
      procedure: "Shoulder Replacement",
      duration: "4:18",
      thumbnail: "https://img.youtube.com/vi/X0hRQmi9imU/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=X0hRQmi9imU",
      youtubeId: "X0hRQmi9imU",
    }
  ];

  const playVideo = () => {
    setIsPlaying(true);
  };

  const closeVideo = () => {
    setIsPlaying(false);
  };

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
            <SafeIcon icon={FiStar} className="w-4 h-4 mr-2" />
            Patient Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray900 mb-4">
            Video <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from our international patients about their journey to recovery
          </p>
        </motion.div>

        {/* Video Testimonials Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Video Player Section - 2/3 width on large screens */}
            <div className="lg:col-span-2 p-6 border-r border-gray-100">
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group">
                {/* Video Thumbnail/Player */}
                {!isPlaying ? (
                  <>
                    <img 
                      src={testimonials[activeVideo].thumbnail} 
                      alt={testimonials[activeVideo].name} 
                      className="w-full h-full object-cover" 
                      onError={(e) => {
                        e.target.src = "/images/success-ahmed-hassan.svg";
                      }}
                    />
                    {/* Play Button Overlay */}
                    <div 
                      className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all duration-300 cursor-pointer"
                      onClick={playVideo}
                    >
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <SafeIcon icon={FiPlay} className="w-8 h-8 text-blue-600 ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  // YouTube Embed
                  <div className="relative w-full h-full">
                    <button 
                      onClick={closeVideo}
                      className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/75 transition-colors"
                    >
                      <SafeIcon icon={FiX} className="w-5 h-5" />
                    </button>
                    <iframe
                      src={`https://www.youtube.com/embed/${testimonials[activeVideo].youtubeId}?autoplay=1`}
                      title={testimonials[activeVideo].name}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      {testimonials[activeVideo].name}
                    </h3>
                    <div className="flex items-center space-x-2 text-white/80 text-sm">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{testimonials[activeVideo].duration}</span>
                    </div>
                  </div>                
                </div>
              </div>              
            
            </div>
            
            {/* Video Tabs Section - 1/3 width on large screens */}
            <div className="lg:col-span-1">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">More Patient Stories</h3>
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      onClick={() => {
                        setActiveVideo(index);
                        setIsPlaying(false);
                      }}
                      className={`group cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                        activeVideo === index 
                          ? 'bg-blue-50 border-2 border-blue-200' 
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <div className="flex space-x-4">
                        {/* Thumbnail */}
                        <div className="relative flex-shrink-0">
                          <img 
                            src={testimonial.thumbnail} 
                            alt={testimonial.name} 
                            className="w-20 h-12 object-cover rounded-lg" 
                            onError={(e) => {
                              e.target.src = `/images/success-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}.svg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                            <SafeIcon 
                              icon={FiPlay} 
                              className={`w-4 h-4 ${activeVideo === index ? 'text-white' : 'text-white/80'}`} 
                            />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                            {testimonial.duration}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold truncate ${activeVideo === index ? 'text-blue-700' : 'text-gray-900'}`}>
                            {testimonial.name}
                          </h4>                         
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <SafeIcon 
                                  key={i} 
                                  icon={FiStar} 
                                  className={`w-3 h-3 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-yellow-400 fill-current'}`} 
                                />
                              ))}
                            </div>                           
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Experience Our World-Class Care</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of international patients who have successfully undergone treatment at our center. 
              Our advanced robotic surgery and comprehensive care ensure exceptional outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/patient-info/video-testimonials">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                  Watch More Videos
                </button>     
              </Link>        
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;