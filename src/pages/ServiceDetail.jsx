import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Details</h1>
          <p className="text-xl text-gray-600 mb-2">Service ID: {serviceId}</p>
          <p className="text-lg text-gray-500">Coming Soon - Detailed service information, procedures, benefits, and FAQ.</p>
        </div>
      </div>
    </motion.main>
  );
};

export default ServiceDetail;