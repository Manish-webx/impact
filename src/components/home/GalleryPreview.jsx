import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCamera, FiPlay, FiArrowRight, FiX } = FiIcons;

const GalleryPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const galleryImages = [
    { src: '/images/gallery-op-theater.svg', title: 'Modern Operation Theater', category: 'Facilities' },
    { src: '/images/gallery-patient-care.svg', title: 'Patient Care Area', category: 'Patient Care' },
    { src: '/images/gallery-advanced-equipment.svg', title: 'Advanced Equipment', category: 'Technology' },
    { src: '/images/gallery-consult-room.svg', title: 'Consultation Room', category: 'Consultation' },
    { src: '/images/gallery-physio-center.svg', title: 'Physiotherapy Center', category: 'Rehabilitation' },
    { src: '/images/gallery-reception.svg', title: 'Reception Area', category: 'Welcome' },
  ];

  const videos = [
    { thumbnail: '/images/gallery-video-thumb-1.svg', title: 'Understanding Robotic Knee Replacement', duration: '5:30' },
    { thumbnail: '/images/gallery-video-thumb-2.svg', title: 'Patient Success Story - Mrs. Sharma', duration: '3:45' },
    { thumbnail: '/images/gallery-video-thumb-3.svg', title: 'Virtual Tour of Impact Ortho Centre', duration: '7:20' },
  ];

  const openImagePopup = (image) => {
    setSelectedImage(image);
  };
  const openVideoPopup = (video) => {
    setSelectedVideo(video);
  };
  const closeImagePopup = () => {
    setSelectedImage(null);
  };
  const closeVideoPopup = () => {
    setSelectedVideo(null);
  };

  return (
    <section ref={ref} className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our world-class infrastructure and see why patients choose Impact Ortho Centre
          </p>
        </motion.div>

        {/* Photo Gallery Preview */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiCamera} className="w-6 h-6 text-[#1E97D9]" />
              <h3 className="text-2xl font-bold text-gray-900">Photo Gallery</h3>
            </div>
            <Link to="/gallery" className="text-[#1E97D9] hover:text-blue-600 font-medium flex items-center">
              View All Photos
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => openImagePopup(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-medium text-sm">{image.title}</p>
                    <p className="text-xs text-gray-300">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Gallery Preview */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiPlay} className="w-6 h-6 text-[#1E97D9]" />
              <h3 className="text-2xl font-bold text-gray-900">Video Library</h3>
            </div>
            <Link to="/gallery" className="text-[#1E97D9] hover:text-blue-600 font-medium flex items-center">
              Watch All Videos
              <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openVideoPopup(video)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <SafeIcon icon={FiPlay} className="w-6 h-6 text-[#1E97D9] ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-[#1E97D9] transition-colors">
                  {video.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Gallery CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-4 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Full Gallery
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeImagePopup}>
          <div className="relative max-w-4xl max-h-[90vh]">
            <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-full object-contain rounded-lg" />
            <button
              onClick={closeImagePopup}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <SafeIcon icon={FiX} className="w-5 h-5 text-gray-800" />
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-4">
              <h3 className="font-bold text-gray-900">{selectedImage.title}</h3>
              <p className="text-sm text-gray-600">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Popup */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={closeVideoPopup}>
          <div className="relative max-w-4xl w-full">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <SafeIcon icon={FiPlay} className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-300">Video player would be embedded here</p>
                </div>
              </div>
            </div>
            <button
              onClick={closeVideoPopup}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <SafeIcon icon={FiX} className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPreview;