import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'INFORMACIÓN', href: '#informacion' },
    { name: 'SERVICIOS', href: '#servicios' },
    { name: 'EVENTOS', href: '#eventos' },
    { name: 'CONTACTO', href: '#contacto' }
  ];

  return (
    <nav className="bg-gray-800 bg-opacity-90 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          
      )}
    </nav>
  );
};

export default Header;