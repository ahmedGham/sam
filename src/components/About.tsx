import React from "react";
import { Target, Eye, Heart, Handshake } from "lucide-react";
import AnimationUp from "./Animations/AnimationUp";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimationUp>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About SEMS Pharma
            </h2>
          </AnimationUp>
          <AnimationUp>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 2013 as a Yemeni company specializing in the import
              and distribution of finished dosage forms, committed to delivering
              high-quality healthcare solutions.
            </p>
          </AnimationUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <AnimationUp>
            <div>
              <img
                src="image-Photoroom (1).png"
                alt="Pharmaceutical team"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </AnimationUp>
          <div>
            <AnimationUp>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h3>
            </AnimationUp>
            <AnimationUp>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As a subsidiary of a prominent business group in the
                pharmaceuticals industry, SEMS Pharma was established with a
                clear mission: to provide essential healthcare products with
                high service standards and reliability to meet the needs of our
                clients and community.
              </p>
            </AnimationUp>
            <AnimationUp>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Through our years of experience and market trust, which we
                consider the core of our business, we have built valuable
                relationships with local and global business partners and key
                opinion leaders.
              </p>
            </AnimationUp>
            <AnimationUp>
              <p className="text-gray-600 leading-relaxed">
                We continue to expand our business and acquire our own product
                portfolio by establishing agreements with trusted pharmaceutical
                manufacturers worldwide, making us both trusted and professional
                in the eyes of our partners and customers.
              </p>
            </AnimationUp>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimationUp>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0054a6] rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Our Mission
              </h4>
              <p className="text-gray-600">
                To deliver high-quality healthcare solutions through reliable
                import and distribution of pharmaceutical products.
              </p>
            </div>
          </AnimationUp>
          <AnimationUp transition={{ delay: 0.1 }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#00adee] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Our Vision
              </h4>
              <p className="text-gray-600">
                To become an international firm within a local traditional
                context through applying international standards.
              </p>
            </div>
          </AnimationUp>

          <AnimationUp transition={{ delay: 0.2 }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0054a6] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Our Values
              </h4>
              <p className="text-gray-600">
                Quality, marketing ethics, pharmacovigilance, and exceptional
                customer support are at the heart of everything we do.
              </p>
            </div>
          </AnimationUp>
          <AnimationUp transition={{ delay: 0.3 }}>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#00adee] rounded-full flex items-center justify-center mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h4>
              <p className="text-gray-600">
                Building valuable relationships with partners and maintaining
                market trust through professional service delivery.
              </p>
            </div>
          </AnimationUp>
        </div>
      </div>
    </section>
  );
};

export default About;
