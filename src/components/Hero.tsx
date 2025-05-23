import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Vidya Niketan Public High School
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Empowering minds, fostering excellence, and building character through quality education in Kotri Kalan.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;