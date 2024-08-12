import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white fixed top-0 left-0 right-0 z-50 bg-gradient-to-bfrom-violet-200 to-pink-200 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-12">
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <div className="hidden md:flex md:space-x-3">
            <NavItem text="_about" activeSection={activeSection} />
            <NavItem text="_work" activeSection={activeSection} />
            <NavItem text="_projects" activeSection={activeSection} />
            <NavItem text="_contact" activeSection={activeSection} />
          </div>
          <div className="text-gray-800 text-xl font-semibold absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            Aditya
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 text-gray-800 p-3 border-t border-gray-200">
          <div className="space-y-1">
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
      className={`block text-base transition-colors duration-200 ease-in-out relative group ${
        isActive ? 'text-indigo-600' : 'text-gray-800 hover:text-indigo-500'
      } ${mobile ? 'pl-3 py-1 border-l border-gray-300' : ''}`}
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