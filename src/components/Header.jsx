import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMenu, FiX, FiChevronDown, FiGlobe, FiPlane, FiBook, FiUsers, FiVideo } = FiIcons;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPatientInfoOpen, setIsPatientInfoOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobilePatientInfoOpen, setIsMobilePatientInfoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesMenu = [
    {
      name: 'Joint Replacement Surgery',
      id: 'joint-replacement',
      isHeader: true,
      subMenu: [
        { name: 'Robotic Knee Replacement', id: 'robotic-knee-replacement' },
        { name: 'Shoulder Replacement', id: 'shoulder-replacement' },
        { name: 'Total Hip Replacement Surgery', id: 'total-hip-replacement' },
        { name: 'Total Knee Replacement Surgery', id: 'knee-replacement' },
      ],
    },
    {
      name: 'General Orthopedics',
      id: 'general-orthopedics',
      isHeader: true,
      subMenu: [
        { name: 'Arthritis', id: 'arthritis' },
        { name: 'Back Pain', id: 'back-pain' },
        { name: 'Elbow Pain', id: 'elbow-pain' },
        { name: 'Foot & Ankle Pain', id: 'foot-ankle-pain' },
        { name: 'Hand & Wrist Pain', id: 'hand-wrist-pain' },
        { name: 'Knee Pain', id: 'knee-pain' },
        { name: 'Neck Pain', id: 'neck-pain' },
        { name: 'Osteoporosis', id: 'osteoporosis' },
        { name: 'Shoulder Pain', id: 'shoulder-pain' },
      ],
    },
    {
      name: 'Sports Medicine',
      id: 'sports-medicine',
      isHeader: true,
      subMenu: [
        { name: 'Meniscus Tear', id: 'meniscus-tear' },
        { name: 'Rotator Cuff Tear', id: 'rotator-cuff-tear' },
        { name: 'Shoulder Impingement', id: 'shoulder-impingement' },
        { name: 'Tennis Elbow', id: 'tennis-elbow' },
      ],
    },
    {
      name: 'Arthroscopy',
      id: 'arthroscopy',
      subMenu: [],
    },
    {
      name: 'Avascular Necrosis',
      id: 'avascular-necrosis',
      subMenu: [],
    },        
    {
      name: 'Physiotherapy & Rehabilitation',
      id: 'physiotherapy-rehabilitation',
      subMenu: [],
    },
    {
      name: 'Trauma Surgery',
      id: 'trauma-surgery',
      subMenu: [],
    },
    {
      name: 'Diagnostic Services',
      id: 'diagnostic-services',
      subMenu: [],
    },
  ];

  const patientInfoMenu = [
    { name: 'International Patients', id: 'international-patients', icon: FiGlobe },
    { name: 'Domestic Patients', id: 'domestic-patients', icon: FiUsers },      
    { name: 'Video Testimonials', id: 'video-testimonials', icon: FiVideo },  
  ];

  const handleCallClick = () => {
    window.location.href = 'tel:+919494559848';
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://impactorthocenter.com/photos/logo-1-impact.webp" alt="Impact Ortho Centre" className="h-14 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/about"
              className={`font-medium transition-colors ${location.pathname === '/about' ? 'text-[#1E97D9]' : 'text-gray-700 hover:text-[#1E97D9]'
                }`}
            >
              About Us
            </Link>
            
            {/* Mega Menu - Our Specialities */}
            <div className="static" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button
                className={`flex items-center space-x-1 font-medium transition-colors ${location.pathname.startsWith('/services') ? 'text-[#1E97D9]' : 'text-gray-700 hover:text-[#1E97D9]'
                  }`}
              >
                <span>Our Specialities</span>
                <SafeIcon icon={FiChevronDown} className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 rounded-b-2xl z-50 overflow-hidden"
                  >
                    <div className="max-w-7xl mx-auto px-8 py-8">
                      <div className="grid grid-cols-4 gap-8">
                        {/* Column 1: Joint Replacement */}
                        <div className="space-y-4">
                          <h3 className="text-sm font-bold text-[#1E97D9] tracking-wider uppercase border-b border-gray-100 pb-2">
                            {servicesMenu[0].name}
                          </h3>
                          <ul className="space-y-3">
                            {servicesMenu[0].subMenu.map((item) => (
                              <li key={item.id}>
                                <Link 
                                  to={`/services/${item.id}`}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="text-gray-600 hover:text-[#1E97D9] hover:translate-x-1 transition-all duration-200 block text-sm font-medium"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: General Orthopedics */}
                        <div className="space-y-4">
                          <h3 className="text-sm font-bold text-[#1E97D9] tracking-wider uppercase border-b border-gray-100 pb-2">
                            {servicesMenu[1].name}
                          </h3>
                          <ul className="space-y-3">
                            {servicesMenu[1].subMenu.map((item) => (
                              <li key={item.id}>
                                <Link 
                                  to={`/services/${item.id}`}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="text-gray-600 hover:text-[#1E97D9] hover:translate-x-1 transition-all duration-200 block text-sm font-medium"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: Sports Medicine & Arthroscopy */}
                        <div className="space-y-8">
                          {/* Sports Medicine */}
                          <div className="space-y-4">
                            <h3 className="text-sm font-bold text-[#1E97D9] tracking-wider uppercase border-b border-gray-100 pb-2">
                              {servicesMenu[2].name}
                            </h3>
                            <ul className="space-y-3">
                              {servicesMenu[2].subMenu.map((item) => (
                                <li key={item.id}>
                                  <Link 
                                    to={`/services/${item.id}`}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="text-gray-600 hover:text-[#1E97D9] hover:translate-x-1 transition-all duration-200 block text-sm font-medium"
                                  >
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Arthroscopy */}
                          <div>
                             <Link 
                              to={`/services/${servicesMenu[3].id}`}
                              onClick={() => setIsServicesOpen(false)}
                              className="text-sm font-bold text-gray-900 hover:text-[#1E97D9] tracking-wider uppercase block"
                            >
                              {servicesMenu[3].name}
                            </Link>
                          </div>
                        </div>

                        {/* Column 4: Other Services */}
                        <div className="space-y-4">
                          <h3 className="text-sm font-bold text-[#1E97D9] tracking-wider uppercase border-b border-gray-100 pb-2">
                            Other Services
                          </h3>
                          <ul className="space-y-4">
                            {servicesMenu.slice(4).map((item) => (
                              <li key={item.id}>
                                <Link 
                                  to={`/services/${item.id}`}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="text-gray-800 hover:text-[#1E97D9] hover:translate-x-1 transition-all duration-200 block text-sm font-semibold"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Featured CTA */}
                          <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                            <p className="text-xs text-blue-600 font-semibold mb-2">Need Expert Advice?</p>
                            <Link 
                              to="/contact" 
                              onClick={() => setIsServicesOpen(false)}
                              className="text-sm font-bold text-gray-900 hover:text-[#1E97D9] flex items-center"
                            >
                              Book Consultation <SafeIcon icon={FiChevronDown} className="w-4 h-4 ml-1 -rotate-90" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Patient Info Dropdown */}
            <div className="relative" onMouseEnter={() => setIsPatientInfoOpen(true)} onMouseLeave={() => setIsPatientInfoOpen(false)}>
              <button
                className={`flex items-center space-x-1 font-medium transition-colors ${location.pathname.startsWith('/patient-info') ? 'text-[#1E97D9]' : 'text-gray-700 hover:text-[#1E97D9]'
                  }`}
              >
                <span>Patient Info</span>
                <SafeIcon icon={FiChevronDown} className={`w-4 h-4 transition-transform ${isPatientInfoOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isPatientInfoOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border z-50"
                  >
                    <div className="py-2">
                      {patientInfoMenu.map((item) => (
                        <Link
                          key={item.id}
                          to={`/patient-info/${item.id}`}
                          onClick={() => setIsPatientInfoOpen(false)}
                          className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E97D9] transition-colors"
                        >
                          <SafeIcon icon={item.icon} className="w-4 h-4 mr-3 text-gray-400" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/doctors"
              className={`font-medium transition-colors ${location.pathname === '/doctors' ? 'text-[#1E97D9]' : 'text-gray-700 hover:text-[#1E97D9]'
                }`}
            >
              Doctors
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${location.pathname === '/contact' ? 'text-[#1E97D9]' : 'text-gray-700 hover:text-[#1E97D9]'
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleCallClick}
              className="flex items-center space-x-2 px-4 py-2 text-[#1E97D9] border border-[#1E97D9] rounded-lg hover:bg-[#1E97D9] hover:text-white transition-all duration-300"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </button>
          
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100">
            <SafeIcon icon={isMobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t shadow-lg"
          >
            <div className="px-4 py-6 space-y-2">
              <Link to="/" className="block py-2 text-gray-700 hover:text-[#1E97D9]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-[#1E97D9]" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-[#1E97D9]"
                >
                  <span>Our Specialities</span>
                  <SafeIcon icon={FiChevronDown} className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 border-l-2 border-gray-100"
                    >
                      {servicesMenu.map(service => (
                        <div key={service.id}>
                          {service.isHeader ? (
                            <div className="block py-2 text-sm font-bold text-gray-900 bg-gray-50 mt-1 mb-1 px-2 rounded pointer-events-none">
                              {service.name}
                            </div>
                          ) : (
                            <Link
                              key={service.id}
                              to={`/services/${service.id}`}
                              className="block py-2 text-sm text-gray-600 hover:text-[#1E97D9]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          )}
                          
                          {service.subMenu && service.subMenu.map(subItem => (
                            <Link
                              key={subItem.id}
                              to={`/services/${subItem.id}`}
                              className="block py-2 text-xs text-gray-500 hover:text-[#1E97D9] pl-4"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              - {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* Mobile Patient Info Accordion */}
              <div>
                <button
                  onClick={() => setIsMobilePatientInfoOpen(!isMobilePatientInfoOpen)}
                  className="w-full flex justify-between items-center py-2 text-gray-700 hover:text-[#1E97D9]"
                >
                  <span>Patient Info</span>
                  <SafeIcon icon={FiChevronDown} className={`w-4 h-4 transition-transform ${isMobilePatientInfoOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobilePatientInfoOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-4 border-l-2 border-gray-100"
                    >
                      {patientInfoMenu.map(item => (
                        <Link
                          key={item.id}
                          to={`/patient-info/${item.id}`}
                          className="block py-2 text-sm text-gray-600 hover:text-[#1E97D9]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link to="/doctors" className="block py-2 text-gray-700 hover:text-[#1E97D9]" onClick={() => setIsMobileMenuOpen(false)}>Doctors</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#1E97D9]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <div className="pt-4 border-t space-y-3">
                <button
                  onClick={handleCallClick}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-[#1E97D9] border border-[#1E97D9] rounded-lg"
                >
                  <SafeIcon icon={FiPhone} className="w-4 h-4" />
                  <span className="font-medium">Call Now</span>
                </button>
                <Link
                  to="/patient-info/international-patients"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-[#1E97D9] to-blue-600 text-white rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <SafeIcon icon={FiPlane} className="w-4 h-4" />
                  <span className="font-medium">International Patients</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;