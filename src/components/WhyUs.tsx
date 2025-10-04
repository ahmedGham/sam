import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import {
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Shield,
  Globe,
} from "lucide-react";
import {
  DollarSign,
  Building2,
  Stethoscope,
  Pill,
  UserCheck,
} from "lucide-react";
import AnimationUp from "./Animations/AnimationUp";
import Counter from "./Animations/Counter";
const milestones = [
  {
    year: "2013",
    title: "Company Establishment",
    description:
      "SEMS Pharma was established as a Yemeni company specializing in the import and distribution of finished dosage forms, marking the beginning of our journey in the pharmaceutical industry.",
    icon: <Award className="w-6 h-6" />,
    achievements: [
      "Founded as subsidiary of prominent business group",
      "Specialized focus on pharmaceutical distribution",
      "Initial market entry in Yemen",
    ],
  },
  {
    year: "2015-2017",
    title: "Market Expansion & Trust Building",
    description:
      "Through consistent quality service and reliable partnerships, we built valuable relationships with local healthcare providers and established our reputation in the market.",
    icon: <Users className="w-6 h-6" />,
    achievements: [
      "Built extensive customer network",
      "Established trust with healthcare providers",
      "Developed local market expertise",
    ],
  },
  {
    year: "2018-2020",
    title: "International Partnerships",
    description:
      "We expanded our global reach by establishing strategic agreements with trusted pharmaceutical manufacturers worldwide, enhancing our product portfolio and service capabilities.",
    icon: <Globe className="w-6 h-6" />,
    achievements: [
      "Global manufacturer partnerships",
      "Expanded product portfolio",
      "International quality standards implementation",
    ],
  },
  {
    year: "2021-2024",
    title: "Excellence & Innovation",
    description:
      "Today, we continue to lead with international standards in quality, marketing ethics, pharmacovigilance, and customer support, serving over 888 healthcare partners across Yemen.",
    icon: <Shield className="w-6 h-6" />,
    achievements: [
      "888+ healthcare partners",
      "International quality standards",
      "Comprehensive pharmacovigilance system",
    ],
  },
];

const stats = [
  {
    number: 10,
    unit: "+",
    label: "Years of Excellence",
    icon: <TrendingUp className="w-8 h-8" />,
  },
  {
    number: 888,
    unit: "+",
    label: "Healthcare Partners",
    icon: <Users className="w-8 h-8" />,
  },
  {
    number: 50,
    unit: "+",
    label: "Global Manufacturers",
    icon: <Globe className="w-8 h-8" />,
  },
  {
    number: 100,
    unit: "%",
    label: "Quality Assured",
    icon: <Shield className="w-8 h-8" />,
  },
];
const reasons = [
  {
    number: "01",
    icon: <DollarSign className="w-8 h-8" />,
    title: "High Financial Capabilities",
    description:
      "Strong financial foundation enabling us to maintain extensive inventory and support large-scale operations with reliable supply chain management.",
  },
  {
    number: "02",
    icon: <Users className="w-8 h-8" />,
    title: "Excellent Customer Network & Connections",
    description:
      "Extensive network of healthcare providers, distributors, and key opinion leaders built through years of trusted partnerships and professional relationships.",
  },
  {
    number: "03",
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Market Experience (12 Years) & Better Understanding",
    description:
      "Deep market knowledge and comprehensive understanding of local healthcare needs, regulatory requirements, and market variables gained through 12 years of experience.",
  },
  {
    number: "04",
    icon: <Award className="w-8 h-8" />,
    title: "Professional Marketing & Sales Staff",
    description:
      "Highly trained and experienced marketing and sales team dedicated to providing exceptional service and building lasting relationships with healthcare professionals.",
  },
];

const customerStats = [
  {
    icon: <Building2 className="w-8 h-8" />,
    number: 227,
    label: "Hospitals",
    color: "from-[#0054a6] to-[#003d7a]",
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    number: 198,
    label: "Medical Centers",
    color: "from-[#00adee] to-[#0088bb]",
  },
  {
    icon: <Pill className="w-8 h-8" />,
    number: 85,
    label: "Pharmacies & Wholesalers",
    color: "from-[#0054a6] to-[#003d7a]",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    number: 378,
    label: "Specialist Physicians Private Clinics",
    color: "from-[#00adee] to-[#0088bb]",
  },
];

const numberVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.2,
    },
  },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyUs = () => {
  const sectionRef = useRef(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const { scrollYProgress } = useScroll({
    // this section is the scroll area
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Map scroll progress (0 → 1) to path length (0 → 1)
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16">
          <AnimationUp>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose SEMS Pharma?
            </h2>
          </AnimationUp>
          <AnimationUp>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what sets us apart in the pharmaceutical industry and why
              healthcare professionals trust us as their preferred partner.
            </p>
          </AnimationUp>
        </div>

        {/* Timeline */}
        <div className="relative h-full">
          {/* Timeline line */}
          {/* <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <svg
            viewBox="-100 80 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
          >
            <defs>
              <linearGradient
                id="grad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#00adee" />
                <stop offset="100%" stopColor="#0054a6" />
              </linearGradient>
            </defs>

            <motion.path
              d="M 0 0 0 400"
              stroke="url(#grad)"
              strokeWidth="0.5"
              strokeLinecap="round"
              fill="transparent"
              style={{ pathLength }}
            />
          </svg> */}

          {/* Timeline items */}
          {/* <div className="space-y-10"> */}
          <div className="space-y-10 ">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-center md:justify-normal ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                {/* <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0054a6] rounded-full border-4 border-white shadow-lg z-10"></div> */}

                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="md:w-[45%] w-[85%] relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
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
                        <div className="text-white">{reason.icon}</div>
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

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg">
          <div className="text-center mb-12">
            <AnimationUp>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Impact Today
              </h3>
            </AnimationUp>
            <AnimationUp>
              <p className="text-xl text-gray-600">
                Trusted by healthcare professionals across Yemen
              </p>
            </AnimationUp>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
            {stats.map((stat, index) => (
              <AnimationUp key={index}>
                <div className="text-center group" >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0054a6] to-[#00adee] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {/* {stat.number} */}
                    <Counter
                      target={Number(stat.number)}
                      duration={2}
                      inView={inView}
                    />
                    {stat.unit}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </AnimationUp>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0054a6] to-[#00adee] rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Join Our Network of Success
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Partner with SEMS Pharma and experience the difference that comes
              from over a decade of pharmaceutical excellence and trusted
              relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0054a6] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Become a Partner
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0054a6] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export function Timeline() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // this section is the scroll area
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Map scroll progress (0 → 1) to path length (0 → 1)
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  console.log(pathLength);

  return (
    <div>
      {/* <div className="h-[150vh]"></div> */}
      <section
        ref={sectionRef}
        className="h-[200vh] flex items-start justify-center bg-gray-100 relative max-w-7xl"
      >
        <svg
          width="1200"
          height="100%"
          viewBox="-100 -1 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-10"
        >
          <defs>
            <linearGradient
              id="grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00adee" />
              <stop offset="100%" stopColor="#0054a6" />
            </linearGradient>
          </defs>

          <motion.path
            d="
              M 0 0
              L -50 0
              Q -52.5 0 -52.5 2.5
              L -52.5 70
              Q -52.5 72.5 -50 72.5
              L 50 72.5
              Q 52.5 72.5 52.5 75
              L 52.5 150
              "
            stroke="url(#grad)"
            strokeWidth="1"
            strokeLinecap="round"
            fill="transparent"
            style={{ pathLength }}
          />
        </svg>
        <div className="space-y-16 mt-10 px-4 sm:px-6 lg:px-8">
          {milestones.map((reason, index) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              {/* <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0054a6] rounded-full border-4 border-white shadow-lg z-10"></div> */}

              {/* Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0054a6]/5 to-[#00adee]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>

                {/* <div className="relative z-10">
                  <div className="flex items-start mb-6">
                    <motion.div
                      variants={numberVariants}
                      className="text-6xl font-bold text-[#0054a6] mr-6 leading-none"
                    >
                      {reason.number}
                    </motion.div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6] to-[#00adee] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{reason.icon}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0054a6] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div> */}
                {/* <div className="bg-white rounded-2xl shadow-lg p-8 ml-16 md:ml-0 hover:shadow-xl transition-shadow duration-300"> */}
                {/* Year badge */}
                {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0054a6] to-[#00adee] text-white rounded-full text-sm font-semibold mb-4">
                    {milestone.year}
                  </div> */}

                {/* Icon and title */}
                {/* <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0054a6] to-[#00adee] rounded-full flex items-center justify-center mr-4">
                      <div className="text-white">{milestone.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {milestone.title}
                    </h3>
                  </div> */}

                {/* Description */}
                {/* <p className="text-gray-600 mb-6 leading-relaxed">
                    {milestone.description}
                  </p> */}
                {/* </div> */}
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
      {/* <div className="h-[150vh]"> </div> */}
    </div>
  );
}

export default WhyUs;
