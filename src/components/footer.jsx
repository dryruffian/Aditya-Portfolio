import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-bfrom-violet-200 to-pink-200 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-800 text-sm mb-4 md:mb-0">
            © {currentYear} Aditya. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <SocialLink href="https://github.com/yourusername" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="https://twitter.com/yourusername" icon={<Twitter size={20} />} label="Twitter" />
            <SocialLink href="mailto:your.email@example.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-indigo-600 transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;