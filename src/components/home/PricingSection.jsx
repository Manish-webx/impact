import React from 'react';
    import {motion} from 'framer-motion';
    import {useInView} from 'react-intersection-observer';
    import {Link} from 'react-router-dom';
    import * as FiIcons from 'react-icons/fi';
    import SafeIcon from '../../common/SafeIcon';

    const {FiArrowRight,FiActivity,FiCpu,FiZap,FiCheck}=FiIcons;

    const PricingSection = () => {
      const [ref,inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
      });

      const services = [
        {
          id: 'robotic-knee-replacement',
          title: 'Robotic Knee Replacement',
          details: 'Unilateral; includes Mako system',
          popular: true,
          icon: FiCpu,
          features: [
            'Sub-millimeter Precision',
            'Faster Recovery',
            'Less Pain & Scarring'
          ]
        },
        {
          id: 'shoulder-replacement',
          title: 'Shoulder Replacement Surgery',
          details: 'Complete shoulder reconstruction',
          popular: true,
          icon: FiActivity,
          features: [
            'Minimally Invasive',
            'Quick Mobilization',
            'Long-term Durability'
          ]
        },
        {
          id: 'total-hip-replacement',
          title: 'Hip Replacement Surgery',
          details: 'Unilateral; includes implant',
          popular: false,
          icon: FiActivity,
          features: [
            'Minimally Invasive',
            'Anterior Approach',
            'Quick Mobilization'
          ]
        },
        {
          id: 'physiotherapy-rehabilitation',
          title: 'Physiotherapy & Rehabilitation',
          details: 'Comprehensive recovery programs',
          popular: false,
          icon: FiZap,
          features: [
            'Post-Op Recovery',
            'Pain Management',
            'Strength & Mobility'
          ]
        }
      ];

      return (
        <section ref={ref} className="py-10 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div 
              initial={{opacity: 0,y: 30}} 
              animate={inView ? {opacity: 1,y: 0} : {}} 
              transition={{duration: 0.6}}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Affordable & Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                World-class orthopedic care at a fraction of the cost in the US or UK. All packages are all-inclusive with no hidden fees.
              </p>
            </motion.div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service,index) => (
                <motion.div 
                  key={service.id}
                  initial={{opacity: 0,y: 30}} 
                  animate={inView ? {opacity: 1,y: 0} : {}} 
                  transition={{duration: 0.6,delay: index * 0.1}}
                  className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border ${service.popular ? 'border-blue-500' : 'border-gray-200'}`}
                >
                  {service.popular && (
                    <div className="absolute top-0 -translate-y-1/2 right-6 bg-green-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex-shrink-0 mb-6">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                        <SafeIcon icon={service.icon} className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.details}</p>
                    
                    <div className="space-y-3 mb-6 mt-auto">
                      {service.features.map((feature,idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/services/${service.id}`} 
                      className="flex items-center justify-between text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
                    >
                      <span>View Details</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default PricingSection;