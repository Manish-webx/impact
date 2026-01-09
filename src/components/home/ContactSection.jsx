import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiClock, FiCalendar, FiSend } = FiIcons;

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you! Your appointment request has been submitted. We will contact you soon.');
      reset();
    } catch (error) {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Book Your Appointment
              </h2>
              <p className="text-gray-600">
                Get expert orthopedic care. Fill out the form below and we'll get back to you promptly.
              </p>
            </div>
   
            <form accept-charset='UTF-8' action='https://app.formester.com/forms/fTTEjwFW5/submissions' method='POST'  className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  {...register('fullName', { required: 'Full name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name" required
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: 'Please enter a valid phone number'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                  placeholder="+91 9876543210" required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your condition or any specific questions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-4 bg-[#1E97D9] text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                    Book Appointment
                  </>
                )}
              </button>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center">
                Your information is secure and confidential. We respect your privacy.
              </p>
            </form>
          </motion.div>

          {/* Right Side - Location & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Clinic</h3>
              
              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1E97D9] rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Apollo Hospitals, Rd Number 72,<br />
                    opposite Bharatiya Vidya Bhavan School,<br />
                    Film Nagar, Hyderabad, Telangana 500033
                  </p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden border border-gray-200 mb-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8278.067661174025!2d78.413217!3d17.415639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9359f092e5af%3A0xd5f249c3a74f11eb!2sImpact%20Ortho%20Center!5e1!3m2!1sen!2sin!4v1764932466612!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiPhone} className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a 
                      href="tel:+919494559848" 
                      className="text-[#1E97D9] hover:text-blue-600 font-medium"
                    >
                      +91 9494559848
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiMail} className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:impactorthoc.dm@gmail.com"
                      className="text-[#1E97D9] hover:text-blue-600 font-medium break-all md:break-normal"
                    >
                      impactorthoc.dm@gmail.com
                    </a>
                  </div>
                </div>

                {/* Clinic Timings */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Clinic Timings</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className="text-red-600 font-medium">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;