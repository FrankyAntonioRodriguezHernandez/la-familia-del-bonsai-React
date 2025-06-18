import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'INICIO', target: '#inicio' },
    { name: 'INFORMACIÓN', target: '#informacion' },
    { name: 'SERVICIOS', target: '/services', isRoute: true },
    { name: 'EVENTOS', target: '/events', isRoute: true },
    { name: 'CONTACTO', target: '#contacto' }
    
  ];

  const handleNavigation = (item) => {
    if (item.isRoute && location.pathname === '/services') {
      // Si ya estamos en services, hacer scroll al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-4 flex justify-center">
      {/* Contenedor centrado con fondo semitransparente */}
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full shadow-xl border border-gray-700">
        <div className="max-w-max mx-auto px-6 py-2">
          {/* Versión desktop */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.target}
                  className="text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.target}
                  className="text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          {/* Versión móvil */}
          <div className="md:hidden flex justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-full"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-14 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-lg shadow-lg py-2 w-48">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.target}
                  className="block text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.target}
                  className="block text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;