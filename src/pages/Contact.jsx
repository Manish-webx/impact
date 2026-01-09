import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiCalendar, FiMessageSquare } = FiIcons;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();



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

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Visit Our Clinic',
      content: 'Apollo Hospitals, Rd Number 72, opposite Bharatiya Vidya Bhavan School, Film Nagar, Hyderabad, Telangana 500033',
      color: 'bg-blue-50 text-blue-600',
      action: null
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      content: '+91 9494559848',
      color: 'bg-green-50 text-green-600',
      action: () => window.location.href = 'tel:+919494559848'
    },
    {
      icon: FiMail,
      title: 'Email Us',
      content: 'impactorthoc.dm@gmail.com',
      color: 'bg-purple-50 text-purple-600',
      action: () => window.location.href = 'mailto:impactorthoc.dm@gmail.com'
    },
    {
      icon: FiClock,
      title: 'Clinic Hours',
      content: 'Monday - Saturday: 10:00 AM - 4:00 PM\nSunday: Closed\nEmergency: 24/7 Available',
      color: 'bg-orange-50 text-orange-600',
      action: null
    }
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Helmet>
        <title>Contact Us | Impact Ortho Centre</title>
        <meta name='description' content='Book an appointment with Impact Ortho Centre, Hyderabad. Call +91 9494559848 or visit us at Apollo Hospitals, Film Nagar for expert orthopedic care.' />
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="bg-gradient-to-r from-[#1E97D9] to-[#91EFF8] bg-clip-text text-transparent">Impact Ortho Centre</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our expert orthopedic team. We're here to answer your questions and help you start your journey to recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={info.action}
                className={`${info.action ? 'cursor-pointer hover:shadow-lg' : ''} bg-white rounded-xl p-6 border border-gray-100 transition-all duration-300`}
              >
                <div className={`w-12 h-12 ${info.color.split(' ')[0]} rounded-lg flex items-center justify-center mb-4`}>
                  <SafeIcon icon={info.icon} className={`w-6 h-6 ${info.color.split(' ')[1]}`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm whitespace-pre-line">{info.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Appointment</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you promptly to schedule your consultation.
              </p>

              <form accept-charset='UTF-8' action='https://app.formester.com/forms/fTTEjwFW5/submissions' method='POST' className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="fullName"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name" required
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
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
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                      placeholder="+91 9876543210" required
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please enter a valid email address'
                        }
                      })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>


                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      rows={4}
                      {...register('message')}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E97D9] focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your condition or any specific questions..."
                    />
                  </div>
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
                  <div className={`p-4 rounded-lg ${submitMessage.includes('Thank you') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {submitMessage}
                  </div>
                )}

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  Your information is secure and confidential. We respect your privacy and will never share your data with third parties.
                </p>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Find Us</h3>
                </div>
                <div className="h-80">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8278.067661174025!2d78.413217!3d17.415639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9359f092e5af%3A0xd5f249c3a74f11eb!2sImpact%20Ortho%20Center!5e1!3m2!1sen!2sin!4v1764932466612!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Care</h3>
                <p className="text-red-100 mb-6">
                  For urgent orthopedic emergencies, we're available 24/7 to provide immediate care and support.
                </p>
                <button
                  onClick={() => window.location.href = 'tel:+919494559848'}
                  className="w-full bg-white text-red-600 font-semibold py-3 rounded-lg hover:bg-red-50 transition-colors duration-300"
                >
                  Call Emergency Line
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;