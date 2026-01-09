import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import MedicalTourismHero from '../components/home/MedicalTourismHero';
import StatsSection from '../components/home/StatsSection';
import PricingSection from '../components/home/PricingSection';
import PatientJourney from '../components/home/PatientJourney';
import InternationalServices from '../components/home/InternationalServices';
import AboutSection from '../components/home/AboutSection';
import DoctorsSection from '../components/home/DoctorsSection';
import ContactSection from '../components/home/ContactSection';
import ApolloRoboticSurgery from '../components/home/ApolloRoboticSurgery';
import VideoTestimonials from '../components/home/VideoTestimonials';
import ConditionsSection from '../components/home/ConditionsSection';
import VisaAssistanceProvider from '../components/common/VisaAssistanceProvider';

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Helmet>
        <title>Best Orthopedic Hospital in India | Impact Ortho Centre</title>
        <meta name='description' content='Seeking advanced care at a trusted Orthopedic Hospital in India? Impact Ortho Centre offers expert surgeons, modern facilities & personalized treatment.' />
        <meta name='keywords' content='best orthopedic hospital in india, top 10 orthopedic hospital in india, top orthopedic hospital in india, orthopedic hospital in india, orthopedic best hospital in india' />
      </Helmet>
      <MedicalTourismHero />
      <StatsSection />
      <AboutSection />
      <ApolloRoboticSurgery />
      <ConditionsSection />
      <PricingSection />
      <PatientJourney />
      <InternationalServices />
      <VisaAssistanceProvider />
      <VideoTestimonials />
      <DoctorsSection />
      <ContactSection />
    </motion.main>
  );
};

export default Home;