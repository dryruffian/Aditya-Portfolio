import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-bfrom-violet-200 to-pink-200 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-indigo-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex md:space-x-4">
            <NavItem text="_about" activeSection={activeSection} />
            <NavItem text="_work" activeSection={activeSection} />
            <NavItem text="_projects" activeSection={activeSection} />
            <NavItem text="_contact" activeSection={activeSection} />
          </div>
          <div className="text-white text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            Aditya
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white p-4 border-t border-gray-700">
          <div className="space-y-2">
            <NavItem text="_about" activeSection={activeSection} mobile />
            <NavItem text="_work" activeSection={activeSection} mobile />
            <NavItem text="_projects" activeSection={activeSection} mobile />
            <NavItem text="_contact" activeSection={activeSection} mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItem = ({ text, activeSection, mobile = false }) => {
  const sectionId = text.toLowerCase().replace('_', '');
  const isActive = activeSection === sectionId;
  
  return (
    <a
      href={`#${sectionId}`}
      className={`block text-lg transition-colors duration-200 ease-in-out relative group ${
        isActive ? 'text-indigo-500' : 'text-white hover:text-indigo-300'
      } ${mobile ? 'pl-4 py-2 border-l-2 border-gray-700' : ''}`}
    >
      {text}
      {!mobile && (
        <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 transform transition-transform duration-200 ease-in-out ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}></span>
      )}
    </a>
  );
};

export default Navbar;