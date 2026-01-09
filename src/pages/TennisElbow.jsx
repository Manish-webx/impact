import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiActivity, FiTarget, FiShield, FiCheckCircle, FiPhone, FiCalendar, FiChevronDown, FiHeart, FiTrendingUp, FiSearch, FiUsers, FiBone, FiAward, FiX, FiPlay, FiStar, FiSmile } = FiIcons;

const TennisElbow = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const benefits = [
    { icon: FiHeart, title: "Targeted Pain Relief", description: "Effective treatments to resolve the debilitating pain on the outside of your elbow." },
    { icon: FiActivity, title: "Return to Sports & Activities", description: "Our primary goal is to get you back to tennis, golf, and other activities without pain." },
    { icon: FiTarget, title: "Restored Grip Strength", description: "Strengthening programs to help you regain your grip for lifting, holding, and twisting motions." },
    { icon: FiShield, title: "Long-Term Prevention", description: "We provide guidance on proper form, technique, and exercises to prevent the injury from recurring." }
  ];

  const causes = [
    { title: "Overuse & Repetitive Strain", description: "Caused by repetitive wrist and arm motions, leading to micro-tears in the forearm tendon.", treatment: "Common in racquet sports, but also frequent in occupations like plumbing, painting, and carpentry." },
    { title: "Improper Technique", description: "Poor form during sports or work activities can put excessive stress on the elbow tendons.", treatment: "Correcting technique is a key part of long-term prevention and is addressed in our physiotherapy programs." }
  ];

  const treatments = [
    { icon: FiActivity, title: "Specialized Physiotherapy", description: "The cornerstone of treatment, involving specific stretching and strengthening exercises (especially eccentric exercises) for the forearm muscles." },
    { icon: FiAward, title: "Platelet-Rich Plasma (PRP) Injections", description: "A regenerative treatment that uses a concentration of your own blood platelets to accelerate the natural healing of the damaged tendon." },
    { icon: FiTarget, title: "Counterforce Bracing", description: "A strap worn around the forearm can help reduce tension on the affected tendon, providing pain relief during activities." },
    { icon: FiBone, title: "Minimally Invasive Surgery", description: "For chronic cases that fail to improve after 6-12 months of conservative care, a surgeon can remove the damaged tissue (tendon debridement)." }
  ];

  const processSteps = [
    { icon: FiSearch, title: "Accurate Clinical Diagnosis", description: "A thorough physical examination is key. We assess for tenderness and use specific resistance tests to confirm the diagnosis." },
    { icon: FiUsers, title: "Conservative Treatment First", description: "We prioritize non-invasive treatments like physiotherapy, bracing, and activity modification to promote healing." },
    { icon: FiHeart, title: "Advanced Regenerative Options", description: "If needed, we offer advanced treatments like PRP injections to stimulate the healing process in chronic cases." },
    { icon: FiTrendingUp, title: "Structured Return to Activity", description: "Our team provides a phased plan to help you safely and confidently return to your sports and work activities." }
  ];

  const beforeAfter = [
    { title: "Before Treatment", points: ["Pain on the outside of the elbow", "Weak grip strength", "Pain when lifting, shaking hands, or turning a doorknob", "Inability to play sports or work comfortably"] },
    { title: "After Treatment", points: ["Significant reduction in elbow pain", "Restored grip and forearm strength", "Ability to perform daily tasks without pain", "A clear plan for a safe return to sports"] }
  ];

  const faqs = [
    { question: "Do I have to play tennis to get tennis elbow?", answer: "No, not at all. While common in tennis players, the condition is more often caused by occupational activities that involve repetitive wrist and forearm movements, such as painting, plumbing, or extensive computer use." },
    { question: "What is the difference between Tennis Elbow and Golfer's Elbow?", answer: "Tennis Elbow (Lateral Epicondylitis) causes pain on the outside of the elbow. Golfer's Elbow (Medial Epicondylitis) causes pain on the inside. They affect different tendons but are both caused by overuse." },
    { question: "How long does it take for tennis elbow to heal?", answer: "With consistent conservative treatment like physiotherapy, most people see significant improvement within 6 to 12 weeks. However, chronic cases can take several months to resolve fully. Surgery is only a last resort." },
    { question: "Is surgery for tennis elbow effective?", answer: "Yes, for the small percentage of patients who do not respond to long-term conservative treatment, surgery is highly effective. It involves removing the damaged, degenerative tendon tissue and has a success rate of over 85-90%." }
  ];

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20">
      <Helmet>
        <title>Tennis Elbow Treatment in India | Impact Ortho Centre</title>
        <meta name='description' content='Seeking tennis elbow treatment in India? Impact Ortho Centre provides effective non-surgical & surgical care for lasting pain relief and recovery.' />
        <meta name='keywords' content='tennis elbow treatment in india' />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-cyan-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiTarget} className="w-4 h-4 mr-2" />
                Specialized Sports Medicine
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tennis Elbow Treatment <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">in India</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Find lasting relief from tennis elbow (Lateral Epicondylitis) with expert care in India. We offer a range of advanced non-surgical and minimally invasive treatments to get you back in the game.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Link>
                <button onClick={() => window.location.href = 'tel:+919494559848'} className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call Now
                </button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://impactorthocenter.com/photos/Tennis-Elbow-Treatment.webp" alt="Tennis Elbow Treatment" className="w-full h-auto object-cover rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Our Tennis Elbow Treatment</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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

      {/* Causes Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Understanding Tennis Elbow</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {causes.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-3 text-sm rounded-r-lg">
                  <p className="font-semibold">Context:</p>
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Treatment Options</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start space-x-6">
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Treatment Journey</h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 h-full w-0.5 bg-blue-200 top-0 lg:left-1/2 lg:-translate-x-1/2"></div>
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }} className="relative flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10 lg:hidden">{index + 1}</div>
                  <div className={`hidden lg:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : ''}`}>
                    {index % 2 === 0 && (
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full">
                        <div className="flex items-center space-x-4 mb-4 justify-end">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
                        </div>
                        <p className="text-gray-600 text-right">{step.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full items-center justify-center text-white text-2xl font-bold border-4 border-gray-50 z-10">{index + 1}</div>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="lg:hidden pl-8">
                      <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index % 2 !== 0 && (
                      <div className="hidden lg:block p-6 bg-white rounded-2xl shadow-lg border border-gray-100 w-full ml-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"><SafeIcon icon={step.icon} className="w-6 h-6 text-white" /></div>
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
              Life Transformation: Before and After Tennis Elbow Treatment
            </h2>
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
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => toggleFaq(index)} className="w-full flex justify-between items-center bg-white p-6 text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <SafeIcon icon={FiChevronDown} className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Get Relief from Elbow Pain</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Don't let tennis elbow affect your game or your daily life. Contact our specialists for a personalized evaluation and treatment plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <SafeIcon icon={FiCalendar} className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <button onClick={() => window.location.href = 'tel:+919494559848'} className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300">
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

export default TennisElbow;