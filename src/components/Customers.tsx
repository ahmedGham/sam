import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Users, TrendingUp, Award, Building2, Stethoscope, Pill, UserCheck } from 'lucide-react';

const Customers = () => {
  const reasons = [
    {
      number: "01",
      icon: <DollarSign className="w-8 h-8" />,
      title: "High Financial Capabilities",
      description: "Strong financial foundation enabling us to maintain extensive inventory and support large-scale operations with reliable supply chain management."
    },
    {
      number: "02",
      icon: <Users className="w-8 h-8" />,
      title: "Excellent Customer Network & Connections",
      description: "Extensive network of healthcare providers, distributors, and key opinion leaders built through years of trusted partnerships and professional relationships."
    },
    {
      number: "03",
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Experience (12 Years) & Better Understanding",
      description: "Deep market knowledge and comprehensive understanding of local healthcare needs, regulatory requirements, and market variables gained through 12 years of experience."
    },
    {
      number: "04",
      icon: <Award className="w-8 h-8" />,
      title: "Professional Marketing & Sales Staff",
      description: "Highly trained and experienced marketing and sales team dedicated to providing exceptional service and building lasting relationships with healthcare professionals."
    }
  ];

  const customerStats = [
    {
      icon: <Building2 className="w-8 h-8" />,
      number: 227,
      label: "Hospitals",
      color: "from-[#0054a6] to-[#003d7a]"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      number: 198,
      label: "Medical Centers",
      color: "from-[#00adee] to-[#0088bb]"
    },
    {
      icon: <Pill className="w-8 h-8" />,
      number: 85,
      label: "Pharmacies & Wholesalers",
      color: "from-[#0054a6] to-[#003d7a]"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      number: 378,
      label: "Specialist Physicians Private Clinics",
      color: "from-[#00adee] to-[#0088bb]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2
      }
    }
  };

  const CounterAnimation = ({ number, duration = 2 }: { number: number; duration?: number }) => {
    const [count, setCount] = React.useState(0);
    const [isVisible, setIsVisible] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    React.useEffect(() => {
      if (isVisible) {
        let startTime: number;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * number));
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isVisible, number, duration]);

    return <div ref={ref}>{count}</div>;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose SEMS Pharma?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover what sets us apart in the pharmaceutical industry and why healthcare 
            professionals trust us as their preferred partner.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0054a6]/5 to-[#00adee]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <motion.div
                    variants={numberVariants}
                    className="text-6xl font-bold text-[#0054a6] mr-6 leading-none"
                  >
                    {reason.number}
                  </motion.div>
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6] to-[#00adee] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {reason.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0054a6] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Customer Statistics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="bg-gradient-to-r from-[#0054a6] to-[#00adee] rounded-3xl p-12 text-white"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Trusted Customer Network</h3>
            <p className="text-xl text-blue-100">
              Serving healthcare providers across Yemen with reliable pharmaceutical solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {customerStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-2xl transition-shadow duration-300`}
                >
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </motion.div>
                <div className="text-4xl font-bold mb-2">
                  <CounterAnimation number={stat.number} />
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-lg text-blue-100">
              <span className="font-semibold text-white">888+</span> healthcare partners trust SEMS Pharma 
              for their pharmaceutical needs across Yemen
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;