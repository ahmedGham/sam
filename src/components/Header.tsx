import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      {/* <div className="bg-[#0054a6] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+967 1 234 567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@semspharma.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Trusted Healthcare Solutions Since 2013</span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/public/image-Photoroom (1).png" 
              alt="SEMS Pharma Logo" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-[#0054a6] font-medium transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-[#0054a6] font-medium transition-colors">
              About Us
            </a>
            <a href="#services" className="text-gray-700 hover:text-[#0054a6] font-medium transition-colors">
              Services
            </a>
            <a href="#products" className="text-gray-700 hover:text-[#0054a6] font-medium transition-colors">
              Products
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#0054a6] font-medium transition-colors">
              Contact
            </a>
            <button className="bg-[#00adee] text-white px-6 py-2 rounded-lg hover:bg-[#0054a6] transition-colors">
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#0054a6]"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-[#0054a6] font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#0054a6] font-medium">
                About Us
              </a>
              <a href="#services" className="text-gray-700 hover:text-[#0054a6] font-medium">
                Services
              </a>
              <a href="#products" className="text-gray-700 hover:text-[#0054a6] font-medium">
                Products
              </a>
              <a href="#contact" className="text-gray-700 hover:text-[#0054a6] font-medium">
                Contact
              </a>
              <button className="bg-[#00adee] text-white px-6 py-2 rounded-lg hover:bg-[#0054a6] transition-colors w-fit">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;