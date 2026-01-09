import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import DoctorsSection from '../components/home/DoctorsSection';

const { FiAward, FiUsers, FiTarget, FiHeart, FiCheckCircle, FiArrowRight, FiPhone, FiCalendar } = FiIcons;

const About = () => {
    const stats = [
        { number: '20+', label: 'Years Experience', icon: FiAward },
        { number: '25000+', label: 'Successful Surgeries', icon: FiTarget },
        { number: '95%', label: 'Patient Satisfaction', icon: FiHeart },
        { number: '24/7', label: 'Emergency Support', icon: FiUsers },
    ];

    const timeline = [
        { year: '2003', title: 'Foundation', description: 'Impact Ortho Centre was established with a vision to provide world-class orthopedic care in Hyderabad' },
        { year: '2010', title: 'Expansion', description: 'Introduced advanced joint replacement techniques and expanded our team of specialist surgeons' },
        { year: '2018', title: 'Innovation', description: 'Pioneered robotic knee replacement surgery in the region, setting new standards in precision surgery' },
        { year: '2024', title: 'Excellence', description: 'Recognized as the leading orthopedic center with over 5000 successful procedures and counting' },
    ];

    const values = [
        { icon: FiHeart, title: 'Patient-First Care', description: 'Every treatment plan is tailored to the individual needs and goals of our patients' },
        { icon: FiTarget, title: 'Clinical Excellence', description: 'We maintain the highest standards of medical care with evidence-based practices' },
        { icon: FiUsers, title: 'Compassionate Team', description: 'Our dedicated healthcare professionals provide care with empathy and understanding' },
        { icon: FiCheckCircle, title: 'Continuous Innovation', description: 'We constantly update our techniques and technology to provide the best possible outcomes' }
    ]

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-20"
        >
            <Helmet>
                <title>About Us | Impact Ortho Centre</title>
                <meta name='description' content='Impact Ortho Centre, a trusted destination for advanced orthopedic care with modern technology, and patient-focused treatment for joint, spine, and sports injuries.' />
            </Helmet>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                About <span className="bg-gradient-to-r from-[#1E97D9] to-[#91EFF8] bg-clip-text text-transparent">Impact Ortho Centre</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                For over two decades, Impact Ortho Centre has been at the forefront of orthopedic excellence in Hyderabad. We combine cutting-edge technology with compassionate care to transform lives and restore mobility.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-[#1E97D9] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all duration-300"
                                >
                                    <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" /> Book Appointment
                                </Link>
                                <button
                                    onClick={() => window.location.href = 'tel:+919494559848'}
                                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1E97D9] text-[#1E97D9] font-semibold rounded-xl hover:bg-[#1E97D9] hover:text-white transition-all duration-300"
                                >
                                    <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" /> Call Now
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <img
                                src="https://impactorthocenter.com/photos/dr-ratnakar-rao.webp"
                                alt="Modern Medical Facility"
                                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E97D9] to-[#91EFF8] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                To provide exceptional orthopedic care that restores mobility, alleviates pain, and enhances the quality of life for every patient through innovative treatments and compassionate service.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We are committed to making world-class orthopedic treatment accessible and affordable for all patients, ensuring that everyone receives the care they deserve.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                To be the leading orthopedic center in India, recognized for clinical excellence, innovative treatments, and outstanding patient outcomes.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We aspire to set new standards in orthopedic care through continuous research, advanced technology adoption, and a patient-centric approach to healing.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
                        <p className="text-xl text-gray-600">Two decades of excellence in orthopedic care</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-[#1E97D9] mb-4">{item.year}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-600">The principles that guide everything we do</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-[#1E97D9] to-[#91EFF8] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <SafeIcon icon={value.icon} className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{value.title}</h3>
                                <p className="text-gray-600 text-center">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <DoctorsSection />

            {/* CTA Section */}
            <section className="py-10 bg-gradient-to-r from-[#1E97D9] to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey to Recovery?</h2>
                        <p className="text-xl mb-8 text-blue-100">Join thousands of patients who have regained their mobility and quality of life at Impact Ortho Centre.</p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-[#1E97D9] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Schedule Your Consultation
                            <SafeIcon icon={FiArrowRight} className="w-5 h-5 ml-2" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </motion.main>
    );
};

export default About;