import React, { useRef } from "react";
import AnimationUp from "./Animations/AnimationUp";
import SectionHeader from "./common/SectionHeader";
import Counter from "./Animations/Counter";
import { motion, useInView } from "motion/react";
import {  Users, Truck, Package, Shield, Globe, Award, Building2, Stethoscope, Pill, UserCheck } from 'lucide-react';

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

const Services = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Import Services",
      description:
        "Professional import of finished dosage forms from trusted global manufacturers with full regulatory compliance.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Distribution Network",
      description:
        "Extensive distribution network ensuring reliable delivery of pharmaceutical products across Yemen.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes and pharmacovigilance to ensure product safety and efficacy.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Support",
      description:
        "Dedicated customer support team providing professional assistance and technical guidance.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description:
        "Strong alliances with international pharmaceutical manufacturers and local healthcare providers.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description:
        "Full compliance with international standards and local pharmaceutical regulations.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          description="Comprehensive pharmaceutical solutions backed by years of experience
            and strategic partnerships with trusted manufacturers worldwide."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const delay = 1 / (index + 1);
            console.log(delay);
            return (
              <AnimationUp transition={{ delay: delay }}>
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6] to-[#00adee] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimationUp>
            );
          })}
        </div>

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
                ref={ref}
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
                  <Counter target={stat.number} duration={2}  inView={inView}/>
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

        {/* Call to Action */}
        {/* <div className="bg-gradient-to-r from-[#0054a6] to-[#00adee] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need Pharmaceutical Solutions?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your requirements and discover how we
            can support your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0054a6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0054a6] transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
