import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certification' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20 border-b border-white/20 bg-white/50 backdrop-blur-xl rounded-b-3xl px-6">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Yuteka S J
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-gray-700 hover:text-deep-rose font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <a href="https://github.com/yutekahemamalini" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-deep-rose transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/yuteka-jayamadhu-3a6110239/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-deep-rose transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-deep-rose focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="block h-6 w-6" /> : <FiMenu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-2 p-4 bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:bg-lavender-blush/50 hover:text-deep-rose block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4 flex items-center space-x-4">
               <a href="https://github.com/yutekahemamalini" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-deep-rose transition-colors duration-300">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/yuteka-jayamadhu-3a6110239/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-deep-rose transition-colors duration-300">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;