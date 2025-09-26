import React from "react";
import {
  Shield,
  Award,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";
import PopupInView from "./Animations/Popup";

const letterVariants = {
  hidden: { opacity: 0, y: 10, blur: 1 },
  visible: { opacity: 1, y: 0, blur: 1 },
};

const Hero = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#0054a6]/5 to-[#00adee]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-[#00adee]/5 to-[#0054a6]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0054a6]/3 to-[#00adee]/3 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {/* Trust badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0054a6]/10 to-[#00adee]/10 rounded-full border border-[#0054a6]/20">
              <Shield className="w-4 h-4 text-[#0054a6] mr-2" />
              <span className="text-[#0054a6] font-semibold text-sm">
                Trusted Since 2013
              </span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <motion.div
                className="text-4xl font-bold flex flex-wrap"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <motion.span
                    variants={letterVariants}
                    transition={{ duration: 0.6, ease: "easeIn" }}
                    className="inline-block"
                  >
                    <span className="text-gray-900">Delivering</span>
                  </motion.span>
                  <br />
                  <motion.span
                    variants={letterVariants}
                    transition={{ duration: 0.6, ease: "easeIn" }}
                    className="inline-block"
                  >
                    <span className="bg-gradient-to-r from-[#0054a6] to-[#00adee] bg-clip-text text-transparent">
                      Quality Healthcare
                    </span>
                  </motion.span>
                  <br />
                  <motion.span
                    variants={letterVariants}
                    transition={{ duration: 0.6, ease: "easeIn" }}
                    className="inline-block"
                  >
                    <span className="text-gray-900">Solutions</span>
                  </motion.span>
                </h1>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                {/* <span className="text-gray-900">Delivering</span>
                <br />
                <span className="bg-gradient-to-r from-[#0054a6] to-[#00adee] bg-clip-text text-transparent">
                  Quality Healthcare
                </span>
                <br />
                <span className="text-gray-900">Solutions</span> */}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                As a trusted subsidiary in the pharmaceuticals industry, SEMS
                Pharma has been committed to importing and distributing
                high-quality finished dosage forms with international standards
                since 2013.
              </p>
            </div>

            {/* Key features */}
            <div className="space-y-3">
              {[
                "International quality standards",
                "Trusted pharmaceutical partnerships",
                "Comprehensive pharmacovigilance",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-[#0054a6] to-[#00adee] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Explore Our Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-[#0054a6] hover:text-[#0054a6] hover:shadow-lg transition-all duration-300">
                Learn More About Us
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6]/10 to-[#00adee]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-[#0054a6]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6]/10 to-[#00adee]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-[#00adee]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600">Quality Assured</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6]/10 to-[#00adee]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-[#0054a6]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Global Partners</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0054a6]/10 to-[#00adee]/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-[#00adee]" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  888+
                </div>
                <div className="text-sm text-gray-600">Healthcare Partners</div>
              </div>
            </div> */}
          </div>

          {/* Right side - Image and features */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0054a6]/20 to-[#00adee]/20 rounded-3xl"
                whileInView={{ rotateZ: 6 }}
                transition={{
                  delay: 1,
                  duration: 0.3,
                }}
              ></motion.div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pharmaceutical laboratory"
                  className="w-full h-80 object-cover rounded-2xl"
                />

                {/* Floating cards */}
                <PopupInView style="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  {/* <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"> */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0054a6] to-[#00adee] rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        GMP Certified
                      </div>
                      <div className="text-xs text-gray-600">
                        International Standards
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </PopupInView>

                <PopupInView style="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#00adee] to-[#0054a6] rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        Quality First
                      </div>
                      <div className="text-xs text-gray-600">
                        Pharmacovigilance
                      </div>
                    </div>
                  </div>
                </PopupInView>
              </div>
            </div>

            {/* Bottom info card */}
            <div className="mt-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                International Standards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We apply international standards in quality, marketing ethics,
                pharmacovigilance and customer support to ensure excellence in
                every aspect of our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
