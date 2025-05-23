import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <GraduationCap className="h-8 w-8 text-primary mr-2" />
            <a href="/" className="text-2xl font-bold text-primary">
              Vidya Niketan
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#facilities" className="text-gray-600 hover:text-primary transition-colors">Facilities</a>
            <a href="#gallery" className="text-gray-600 hover:text-primary transition-colors">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#facilities"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Facilities
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;