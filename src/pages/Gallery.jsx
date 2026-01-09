import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">Coming Soon - Photo and video gallery showcasing our facilities, procedures, and patient success stories.</p>
        </div>
      </div>
    </motion.main>
  );
};

export default Gallery;