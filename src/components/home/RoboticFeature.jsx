import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiActivity, FiTarget, FiClock, FiTrendingUp } = FiIcons;

const RoboticFeature = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const benefits = [
        { icon: FiTarget, title: 'Precision accuracy within 1mm', description: 'Advanced robotic guidance ensures unparalleled surgical precision' },
        { icon: FiActivity, title: 'Minimal tissue damage', description: 'Less invasive approach preserves healthy tissue and bone' },
        { icon: FiTrendingUp, title: 'Customized to your anatomy', description: 'Personalized surgical plan based on your unique bone structure' },
        { icon: FiClock, title: 'Quick return to daily activities', description: 'Faster recovery means getting back to life sooner' },
    ];

    const stats = [
        { number: '500+', label: 'Successful Surgeries' },
        { number: '95%', label: 'Patient Satisfaction' },
        { number: '3-Day', label: 'Hospital Stay' },
    ];

    return (
        <section ref={ref} className="py-10 bg-gradient-to-br from-[#1E97D9] to-blue-700 text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                                <SafeIcon icon={FiActivity} className="w-4 h-4 mr-2" />
                                Advanced Technology
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Robotic Knee Replacement</h2>
                            <p className="text-xl text-blue-100 mb-8">Less Pain, Faster Recovery, Shorter Hospital Stay</p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="flex items-start space-x-3"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                        <SafeIcon icon={benefit.icon} className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                                        <p className="text-blue-100 text-sm">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="w-full sm:w-auto px-8 py-3 bg-white text-[#1E97D9] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Learn More About Robotic Surgery
                        </motion.button>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative mt-8 lg:mt-0"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/robotics-feature.svg"
                                alt="Robotic Surgery System"
                                className="w-full h-[300px] sm:h-[400px] object-cover"
                            />
                        </div>

                        {/* Floating Stats - Adjusted for mobile */}
                        <div className="flex flex-row flex-wrap lg:flex-col lg:absolute lg:-top-6 lg:-right-6 gap-4 mt-6 lg:mt-0 justify-center">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                                    className="bg-white rounded-xl shadow-lg p-4 text-center min-w-[100px] flex-1 lg:flex-none lg:min-w-[120px]"
                                >
                                    <div className="text-2xl font-bold text-[#1E97D9]">{stat.number}</div>
                                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RoboticFeature;