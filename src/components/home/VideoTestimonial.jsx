import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { useInView } from 'react-intersection-observer';
    import * as FiIcons from 'react-icons/fi';
    import SafeIcon from '../../common/SafeIcon';

    const { FiPlay, FiX, FiArrowRight } = FiIcons;

    const VideoTestimonial = () => {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
      });

      const [selectedVideo, setSelectedVideo] = useState(null);

      const videos = [
        {
          id: 1,
          thumbnail: 'https://img.youtube.com/vi/PFNclB7NkCE/maxresdefault.jpg',
          videoId: 'PFNclB7NkCE',
          title: 'Knee Replacement Success Story',
        },
        {
          id: 2,
          thumbnail: 'https://img.youtube.com/vi/XKjqpMIKFT0/maxresdefault.jpg',
          videoId: 'XKjqpMIKFT0',
          title: 'Hip Replacement Recovery',
        },
        {
          id: 3,
          thumbnail: 'https://img.youtube.com/vi/26eSdQEygSk/maxresdefault.jpg',
          videoId: '26eSdQEygSk',
          title: 'Sports Injury Rehab',
        }
      ];

      return (
        <section ref={ref} className="py-10 bg-gray-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Patient Success Stories</h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Hear directly from our patients about their journey to recovery and pain-free living.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedVideo(video.videoId)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <SafeIcon icon={FiPlay} className="w-6 h-6 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link
                to="/patient-info/video-testimonials"
                className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Watch More Videos
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>

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
        </section>
      );
    };

    export default VideoTestimonial;