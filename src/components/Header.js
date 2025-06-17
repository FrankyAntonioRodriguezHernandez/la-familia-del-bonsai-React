import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'INICIO', href: '#inicio', isAnchor: true },
    { name: 'INFORMACIÓN', href: '#informacion', isAnchor: true },
    { name: 'SERVICIOS', href: '/services', isAnchor: false },
    { name: 'EVENTOS', href: '#eventos', isAnchor: true },
    { name: 'CONTACTO', href: '#contacto', isAnchor: true }
  ];

  const handleNavigation = (item) => {
    if (!item.isAnchor) {
      setIsMenuOpen(false);
      return;
    }

    // Si estamos en otra página que no sea la principal (/)
    if (location.pathname !== '/') {
      // Navegar a la página principal con el hash
      window.location.href = `/${item.href}`;
    } else {
      // Comportamiento normal de anchor
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-800 bg-opacity-90 backdrop-blur-sm fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    onClick={(e) => {
                      if (location.pathname !== '/') {
                        e.preventDefault();
                        window.location.href = `/${item.href}`;
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            {navItems.map((item) => (
              item.isAnchor ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={(e) => {
                    handleNavigation(item);
                    if (location.pathname !== '/') {
                      e.preventDefault();
                    }
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;