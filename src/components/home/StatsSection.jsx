import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiActivity,FiUsers,FiAward,FiHeart}=FiIcons;

const StatsSection = () => {
  const [ref,inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      value: '25K+',
      label: 'Orthopedic Surgeries',
      icon: FiActivity,
      color: 'text-blue-500'
    },
    {
      value: '20+',
      label: 'Years of Exp',
      icon: FiAward,
      color: 'text-[#1E97D9]'
    },
    {
      value: '40+',
      label: 'Countries Served',
      icon: FiUsers,
      color: 'text-blue-500'
    },
    {
      value: '40K+',
      label: 'Happy Patients',
      icon: FiHeart,
      color: 'text-[#1E97D9]'
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{opacity: 0}} 
          animate={inView ? {opacity: 1} : {}} 
          transition={{duration: 0.6}}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat,index) => (
            <motion.div 
              key={index}
              initial={{opacity: 0,y: 30}} 
              animate={inView ? {opacity: 1,y: 0} : {}} 
              transition={{duration: 0.6,delay: index * 0.1}}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className={`text-5xl font-bold ${stat.color}`}>{stat.value}</div>
                <SafeIcon icon={stat.icon} className={`absolute -top-2 -right-6 w-6 h-6 ${stat.color} opacity-30`} />
              </div>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;