import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiPhone, FiMail, FiMapPin, FiClock, FiFacebook, FiInstagram,
  FiLinkedin, FiYoutube, FiGlobe, FiPlane, FiShield, FiAward
} = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img src="https://impactorthocenter.com/photos/impact-white-logo.png" alt="Impact Ortho Centre" className="h-14 w-auto" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              World-class orthopedic care in India, trusted by international patients from 40+ countries. Specializing in robotic surgery, joint replacement, and comprehensive medical tourism services with international standards and personalized care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <SafeIcon icon={FiYoutube} className="w-5 h-5" />
              </a>
            </div>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                <SafeIcon icon={FiShield} className="w-3 h-3 text-cyan-400" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                <SafeIcon icon={FiAward} className="w-3 h-3 text-cyan-400" />
                <span>NABH Accredited</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs">
                <SafeIcon icon={FiGlobe} className="w-3 h-3 text-cyan-400" />
                <span>Global Excellence</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-cyan-400 transition-colors">Doctors</Link></li>
              <li><Link to="https://impactorthocenter.com/blog/" className="text-gray-300 hover:text-cyan-400 transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link></li>
              <li><Link to="/patient-info/international-patients" className="text-gray-300 hover:text-cyan-400 transition-colors">International Patients</Link></li>
              <li><Link to="/patient-info/domestic-patients" className="text-gray-300 hover:text-cyan-400 transition-colors">Domestic Patients</Link></li>
              <li><Link to="/patient-info/video-testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors">Video Testimonials</Link></li>
            </ul>
          </div>

          {/* Medical Tourism */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">General Orthopedics</h4>
            <ul className="space-y-2">
              <li><Link to="/services/arthritis" className="text-gray-300 hover:text-cyan-400 transition-colors">Arthritis</Link></li>
              <li><Link to="/services/back-pain" className="text-gray-300 hover:text-cyan-400 transition-colors">Back Pain</Link></li>
              <li><Link to="/services/elbow-pain" className="text-gray-300 hover:text-cyan-400 transition-colors">Elbow Pain</Link></li>
              <li><Link to="/services/foot-ankle-pain" className="text-gray-300 hover:text-cyan-400 transition-colors">Foot Ankle</Link></li>
              <li><Link to="/services/hand-wrist-pain" className="text-gray-300 hover:text-cyan-400 transition-colors">Hand Wrist Pain</Link></li>
              <li><Link to="/services/knee-pain" className="text-gray-300 hover:text-cyan-400 transition-colors">Knee Pain</Link></li>
              <li><Link to="/services/neck-pain" className="text-gray-300 hover:text-cyan-400 transition-colors">Neck Pain</Link></li>
              <li><Link to="/services/osteoporosis" className="text-gray-300 hover:text-cyan-400 transition-colors">Osteoporosis</Link></li>
              <li><Link to="/services/shoulder-pain" className="text-gray-300 hover:text-cyan-300 transition-colors">Shoulder Pain</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Apollo Hospitals, Rd Number 72,<br />
                  opposite Bharatiya Vidya Bhavan School,<br />
                  Film Nagar, Hyderabad, Telangana 500033
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-cyan-400" />
                <a href="tel:+919494559848" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  +91 9494559848
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-cyan-400" />
                <a href="mailto:impactorthoc.dm@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  impactorthoc.dm@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-cyan-400 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>Monday - Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-cyan-400 font-medium">Emergency: 24/7 Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* International Patient Hotline */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-6 mt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <SafeIcon icon={FiGlobe} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">International Patient Hotline</h4>
                <p className="text-cyan-100">24/7 Support for Global Patients</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+919494559848" className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>+91 9494559848</span>
              </a>
              <Link to="/contact" className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors">
                <SafeIcon icon={FiPlane} className="w-5 h-5" />
                <span>Get Quote</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Impact Orthopedic & Joint Replacement Center. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;