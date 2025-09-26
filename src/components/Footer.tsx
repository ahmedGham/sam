import React from 'react';
import { Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/public/image-Photoroom (1).png" 
                alt="SEMS Pharma Logo" 
                className="h-12 w-auto mr-4"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As a subsidiary of a prominent business group in the pharmaceuticals industry, 
              SEMS Pharma has been committed to delivering high-quality healthcare solutions 
              since 2013. We specialize in the import and distribution of finished dosage forms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#0054a6] rounded-full flex items-center justify-center hover:bg-[#00adee] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0054a6] rounded-full flex items-center justify-center hover:bg-[#00adee] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0054a6] rounded-full flex items-center justify-center hover:bg-[#00adee] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-[#00adee] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#00adee] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-[#00adee] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-[#00adee] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-[#00adee] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#00adee] mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Sana'a, Yemen</p>
                  <p className="text-gray-300">Republic of Yemen</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-[#00adee] mr-3 flex-shrink-0" />
                <p className="text-gray-300">+967 1 234 567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-[#00adee] mr-3 flex-shrink-0" />
                <p className="text-gray-300">info@semspharma.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SEMS Pharma. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#00adee] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00adee] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00adee] text-sm transition-colors">
                Quality Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;