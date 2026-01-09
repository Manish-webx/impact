import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiX, FiVideo, FiCalendar } = FiIcons;

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 'PFNclB7NkCE', title: 'Patient Success Story', category: 'Knee Replacement' },
    { id: 'XKjqpMIKFT0', title: 'Recovery Journey', category: 'Joint Replacement' },
    { id: '26eSdQEygSk', title: 'Life After Surgery', category: 'Orthopedics' },
    { id: 'd13reLKlMbs', title: 'Patient Experience', category: 'Consultation' },
    { id: 'm9UHXw33tt4', title: 'Successful Recovery', category: 'Trauma Surgery' },
    { id: 'WUsyXT8-XMU', title: 'Back to Active Life', category: 'Sports Medicine' },
    { id: 'tSaZvq7K5Gc', title: 'Pain-Free Living', category: 'Joint Replacement' },
    { id: 'iR9vwr0yuDU', title: 'Patient Testimonial', category: 'General Orthopedics' },
    { id: 'BRkpeP4Sxlw', title: 'Treatment Satisfaction', category: 'Surgery' },
    { id: 'X0hRQmi9imU', title: 'Quality of Care', category: 'Patient Care' },
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Patient Video Testimonials | Impact Ortho Centre Hyderabad</title>
        <meta name='description' content='Watch real patient success stories & video testimonials from Impact Ortho Centre. Hear about their recovery from knee replacement, hip surgery & trauma care.' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <SafeIcon icon={FiVideo} className="w-4 h-4 mr-2" />
              Real Stories, Real People
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Video Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our patients about their experiences and journeys to recovery with Impact Ortho Centre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <SafeIcon icon={FiPlay} className="w-6 h-6 text-blue-600 ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="text-white/90 text-sm font-medium px-2 py-1 bg-blue-600/80 rounded">
                      {video.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="mt-4 flex items-center text-sm text-blue-600 font-medium">
                    Watch Story <SafeIcon icon={FiPlay} className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <SafeIcon icon={FiX} className="w-6 h-6" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Own Recovery Journey</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join our growing family of happy, pain-free patients. Schedule your consultation today.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300">
            <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
            Book Appointment
          </Link>
        </div>
      </section>
    </motion.main>
  );
};

export default VideoTestimonials;