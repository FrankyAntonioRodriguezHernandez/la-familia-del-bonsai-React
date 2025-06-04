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
          
      )}
    </nav>
  );
};

export default Header;