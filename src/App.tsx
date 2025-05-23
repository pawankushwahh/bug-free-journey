import React from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Gallery />
        <Contact />
      </main>
      <footer className="bg-accent text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-secondary">About Us</a></li>
                <li><a href="#facilities" className="hover:text-secondary">Facilities</a></li>
                <li><a href="#gallery" className="hover:text-secondary">Gallery</a></li>
                <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <MapPin size={18} className="text-secondary" />
                  <span>xyz, xyz, Madhya Pradesh</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-secondary" />
                  <span>+91 XXXXX XXXXX</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-secondary" />
                  <span>info@Xyz.edu.in</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-secondary"><Facebook /></a>
                <a href="#" className="hover:text-secondary"><Instagram /></a>
                <a href="#" className="hover:text-secondary"><Linkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-accent-light text-center">
            <p>&copy; {new Date().getFullYear()} Vidya Niketan Public High School Kotri Kalan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;