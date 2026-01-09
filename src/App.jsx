import React from 'react';
    import {Routes, Route} from 'react-router-dom';
    import {motion, AnimatePresence} from 'framer-motion';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import Home from './pages/Home';
    import About from './pages/About';
    import Services from './pages/Services';
    import ServiceDetail from './pages/ServiceDetail';
    import RoboticKneeReplacement from './pages/RoboticKneeReplacement';
    import KneeReplacement from './pages/KneeReplacement';
    import TotalHipReplacement from './pages/TotalHipReplacement';
    import ShoulderReplacement from './pages/ShoulderReplacement';
    import AvascularNecrosis from './pages/AvascularNecrosis';
    import Doctors from './pages/Doctors';
    import DrRatnakarRao from './pages/DrRatnakarRao';
    import DrSharathBabu from './pages/DrSharathBabu';
    import DrAshwinKumar from './pages/DrAshwinKumar';
    import Gallery from './pages/Gallery';
    import Contact from './pages/Contact';
    // General Orthopedics Pages
    import Arthritis from './pages/Arthritis';
    import BackPain from './pages/BackPain';
    import ElbowPain from './pages/ElbowPain';
    import FootAndAnklePain from './pages/FootAndAnklePain';
    import HandAndWristPain from './pages/HandAndWristPain';
    import KneePain from './pages/KneePain';
    import NeckPain from './pages/NeckPain';
    import Osteoporosis from './pages/Osteoporosis';
    import ShoulderPain from './pages/ShoulderPain';
    // Sports Medicine Pages
    import MeniscusTear from './pages/MeniscusTear';
    import RotatorCuffTear from './pages/RotatorCuffTear';
    import ShoulderImpingement from './pages/ShoulderImpingement';
    import TennisElbow from './pages/TennisElbow';
    // New Service Pages
    import DiagnosticServices from './pages/DiagnosticServices';
    import TraumaSurgery from './pages/TraumaSurgery';
    import PhysiotherapyRehabilitation from './pages/PhysiotherapyRehabilitation';
    import Arthroscopy from './pages/Arthroscopy';
    // Patient Info Pages
    import InternationalPatients from './pages/InternationalPatients';
    import DomesticPatients from './pages/DomesticPatients';
    import PatientEducation from './pages/PatientEducation';
    import VideoTestimonials from './pages/VideoTestimonials';
    import ThankYou from './pages/ThankYou';


    function App() {
      return (
          <div className="min-h-screen bg-white">
            <Header />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                {/* Specific Service Pages */}
                <Route path="/services/knee-replacement" element={<KneeReplacement />} />
                <Route path="/services/robotic-knee-replacement" element={<RoboticKneeReplacement />} />
                <Route path="/services/total-hip-replacement" element={<TotalHipReplacement />} />
                <Route path="/services/shoulder-replacement" element={<ShoulderReplacement />} />
                <Route path="/services/avascular-necrosis" element={<AvascularNecrosis />} />

                {/* General Orthopedics Service Pages */}
                <Route path="/services/arthritis" element={<Arthritis />} />
                <Route path="/services/back-pain" element={<BackPain />} />
                <Route path="/services/elbow-pain" element={<ElbowPain />} />
                <Route path="/services/foot-ankle-pain" element={<FootAndAnklePain />} />
                <Route path="/services/hand-wrist-pain" element={<HandAndWristPain />} />
                <Route path="/services/knee-pain" element={<KneePain />} />
                <Route path="/services/neck-pain" element={<NeckPain />} />
                <Route path="/services/osteoporosis" element={<Osteoporosis />} />
                <Route path="/services/shoulder-pain" element={<ShoulderPain />} />

                {/* Sports Medicine Pages */}
                <Route path="/services/meniscus-tear" element={<MeniscusTear />} />
                <Route path="/services/rotator-cuff-tear" element={<RotatorCuffTear />} />
                <Route path="/services/shoulder-impingement" element={<ShoulderImpingement />} />
                <Route path="/services/tennis-elbow" element={<TennisElbow />} />
                
                {/* New Service Pages */}
                <Route path="/services/diagnostic-services" element={<DiagnosticServices />} />
                <Route path="/services/trauma-surgery" element={<TraumaSurgery />} />
                <Route path="/services/physiotherapy-rehabilitation" element={<PhysiotherapyRehabilitation />} />
                <Route path="/services/arthroscopy" element={<Arthroscopy />} />

                {/* Patient Info Pages */}
                <Route path="/patient-info/international-patients" element={<InternationalPatients />} />
                <Route path="/patient-info/domestic-patients" element={<DomesticPatients />} />
                <Route path="/patient-info/patient-education" element={<PatientEducation />} />
                <Route path="/patient-info/video-testimonials" element={<VideoTestimonials />} />

                {/* Fallback for other services */}
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/dr-ratnakar-rao" element={<DrRatnakarRao />} />
                <Route path="/doctors/dr-sharath-babu" element={<DrSharathBabu />} />
                <Route path="/doctors/dr-ashwin-kumar" element={<DrAshwinKumar />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
      );
    }

    export default App;