import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiClock, FiDollarSign, FiAward, FiShield, FiCheckCircle, FiBone, FiPhone, FiCalendar, FiChevronDown, FiPlay, FiX, FiStar, FiTrendingUp, FiSearch, FiUsers, FiHeart, FiSmile } = FiIcons;

const BackPain = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    {
      icon: FiHeart,
      title: "Effective Pain Relief",
      description: "Targeted treatments to alleviate acute or chronic back pain, helping you find comfort and relief."
    },
    {
      icon: FiActivity,
      title: "Restored Mobility & Function",
      description: "Our goal is to help you return to your daily activities, work, and hobbies without being limited by back pain."
    },
    {
      icon: FiTarget,
      title: "Nerve Decompression",
      description: "Surgical options relieve pressure on spinal nerves, addressing sciatica, numbness, and weakness."
    },
    {
      icon: FiShield,
      title: "Long-Term Spinal Stability",
      description: "Treatments aim to address the root cause of pain and improve spinal health to prevent future issues."
    }
  ];

  const causes = [
    { title: "Herniated Disc", description: "When the soft center of a spinal disc pushes through a crack in the tougher exterior, irritating nearby nerves.", treatment: "Often managed with physical therapy and injections. Surgery (discectomy) may be needed for severe cases." },
    { title: "Spinal Stenosis", description: "The narrowing of the spinal canal, which can put pressure on the spinal cord and nerves.", treatment: "Non-surgical treatments are tried first. Decompressive surgery like laminectomy may be recommended if symptoms persist." },
    { title: "Spondylolisthesis", description: "A condition where one vertebra slips forward over the one below it, often causing nerve compression.", treatment: "Physical therapy can help. Spinal fusion surgery may be necessary to stabilize the spine and relieve pressure." },
    { title: "Muscle or Ligament Strain", description: "Repeated heavy lifting or a sudden awkward movement can strain back muscles and spinal ligaments.", treatment: "Typically resolves with rest, physical therapy, and anti-inflammatory medications. Seldom requires surgery." }
  ];

  const treatments = [
    { icon: FiActivity, title: "Physiotherapy & Rehabilitation", description: "Customized exercise programs to strengthen back and core muscles, improve posture, and increase flexibility." },
    { icon: FiAward, title: "Pain Management Injections", description: "Epidural steroid injections can deliver powerful anti-inflammatory medication directly to the source of pain." },
    { icon: FiTarget, title: "Minimally Invasive Discectomy", description: "A surgical procedure to remove the herniated portion of a disc to relieve nerve pressure. Done with small incisions for faster recovery." },
    { icon: FiBone, title: "Spinal Fusion", description: "A surgical technique to join two or more vertebrae into a single solid bone to eliminate painful motion or restore stability." }
  ];

  const processSteps = [
    {
      icon: FiSearch,
      title: "Precise Diagnosis",
      description: "We utilize advanced imaging like MRI and CT scans to accurately identify the source of your back pain and develop a targeted treatment plan."
    },
    {
      icon: FiUsers,
      title: "Conservative Care First",
      description: "Our philosophy is to start with the least invasive options, such as physical therapy and pain management, before considering surgery."
    },
    {
      icon: FiActivity,
      title: "Advanced Surgical Intervention",
      description: "When necessary, our expert spine surgeons perform minimally invasive procedures to ensure faster recovery and better outcomes."
    },
    {
      icon: FiTrendingUp,
      title: "Personalized Rehabilitation",
      description: "A dedicated physiotherapist will guide you through a recovery program designed to restore strength, function, and prevent recurrence."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Treatment",
      points: [
        "Chronic or sharp, debilitating back pain",
        "Pain radiating down the leg (sciatica)",
        "Numbness or weakness in legs or feet",
        "Inability to stand, walk, or work comfortably"
      ]
    },
    {
      title: "After Treatment",
      points: [
        "Significant reduction or elimination of pain",
        "Relief from sciatic nerve pain",
        "Restored strength and sensation",
        "Return to an active, productive, and pain-free life"
      ]
    }
  ];



  const faqs = [
    {
      question: "When should I see a doctor for back pain?",
      answer: "You should see a doctor if your back pain is severe, doesn't improve with rest, spreads down one or both legs, or causes weakness, numbness, or tingling. Also seek medical attention if your pain follows an injury or is accompanied by unexplained weight loss or fever."
    },
    {
      question: "Will I need surgery for my back pain?",
      answer: "Most cases of back pain can be treated non-surgically. Surgery is typically reserved for cases where conservative treatments fail, or when there is a clear structural problem like a herniated disc or spinal stenosis causing significant nerve compression."
    },
    {
      question: "What is minimally invasive spine surgery?",
      answer: "Minimally invasive spine surgery (MISS) uses smaller incisions and specialized instruments to treat back and neck problems. This approach reduces damage to surrounding muscles and tissues, leading to less pain, shorter hospital stays, and faster recovery times compared to traditional open surgery."
    },
    {
      question: "How can I prevent back pain?",
      answer: "You can help prevent back pain by maintaining a healthy weight, exercising regularly to keep your back and core muscles strong, practicing good posture, lifting objects correctly, and avoiding smoking, which can reduce blood flow to the spine."
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
        <title>Back Pain Treatment in India | Impact Ortho Centre</title>
        <meta name='description' content='Seeking effective back pain treatment in India? Impact Ortho Centre offers advanced orthopedic care with personalized solutions for long-term pain relief.' />
        <meta name='keywords' content='back pain treatment in india, best back pain treatment in india, lower back pain treatment in india, best treatment for lower back pain in india, treatment of lower back pain in india' />
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
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiShield} className="w-4 h-4 mr-2" />
                Advanced Spine Care
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Back Pain Treatment <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Find lasting relief from back pain with comprehensive spine care in India. Our expert spine surgeons specialize in minimally invasive techniques to treat a range of conditions, helping you get back on your feet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
                <button
                  onClick={() => window.location.href = 'tel:+919494559848'}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://impactorthocenter.com/photos/Back-Pain.webp"
                alt="Back Pain Treatment in India"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Benefits of Our Back Pain Treatment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our patient-focused approach aims to provide effective, long-lasting relief from back pain.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <SafeIcon icon={benefit.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Causes Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Causes of Back Pain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the root cause of your pain is the first step toward effective treatment.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {causes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-3 text-sm rounded-r-lg">
                  <p className="font-semibold">Treatment Approach:</p>
                  <p>{item.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Back Pain Treatment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full spectrum of treatments, from conservative care to minimally invasive surgery.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={treatment.icon} className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{treatment.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Back Pain Treatment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear and supportive path from diagnosis to a pain-free life.
            </p>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 h-full w-0.5 bg-blue-200 top-0 lg:left-1/2 lg:-translate-x-1/2"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10 lg:hidden">
                    {index + 1}
                  </div>
                  <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : ''}`}>
                    {index % 2 === 0 && (
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full">
                        <div className="flex items-center space-x-4 mb-4 justify-end">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-600 text-right">{step.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10">
                    {index + 1}
                  </div>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="lg:hidden pl-8">
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="hidden lg:block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full ml-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <SafeIcon icon={step.icon} className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Life Transformation: Before and After Back Pain Treatment
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover the profound impact of effective spine care in India.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {beforeAfter.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-lg ${index === 0 ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'}`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${index === 0 ? 'text-red-600' : 'text-green-600'}`}>
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${index === 0 ? 'bg-red-100' : 'bg-green-100'}`}>
                        <SafeIcon
                          icon={index === 0 ? FiX : FiCheckCircle}
                          className={`w-4 h-4 ${index === 0 ? 'text-red-600' : 'text-green-600'}`}
                        />
                      </div>
                      <span className="ml-3 text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Your questions about back pain treatment in India, answered.
            </p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center bg-white p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <SafeIcon
                    icon={FiChevronDown}
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="p-6 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Get Expert Back Pain Treatment in India
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Don't let back pain control your life. Contact our spine specialists for a personalized evaluation and start your journey to a pain-free future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <button
                onClick={() => window.location.href = 'tel:+919494559848'}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default BackPain;