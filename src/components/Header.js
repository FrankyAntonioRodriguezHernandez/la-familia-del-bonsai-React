import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'INICIO', target: 'inicio', isAnchor: true },
    { name: 'INFORMACIÓN', target: 'informacion', isAnchor: true },
    { name: 'SERVICIOS', target: 'services', isRoute: true },
    { name: 'EVENTOS', target: 'events', isRoute: true },
    { name: 'CONTACTO', target: 'contacto', isAnchor: true }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (item) => {
    if (item.isAnchor) {
      if (location.pathname !== '/') {
        // Si no estamos en la página principal, navegar a home primero
        window.location.href = `/#${item.target}`;
      } else {
        // Si ya estamos en home, hacer scroll a la sección
        scrollToSection(item.target);
      }
    } else if (item.isRoute && location.pathname === `/${item.target}`) {
      // Si ya estamos en la ruta, hacer scroll al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Efecto para manejar anchors al cargar la página
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      scrollToSection(id);
    }
  }, [location]);

  return (
    <nav className="fixed w-full z-50 top-4 flex justify-center">
      <div className="bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-full shadow-xl border border-gray-700">
        <div className="max-w-max mx-auto px-6 py-2">
          {/* Versión desktop */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={`/${item.target}`}
                  className="text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={`#${item.target}`}
                  className="text-gray-300 hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item);
                  }}
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
                  to={`/${item.target}`}
                  className="block text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => handleNavigation(item)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={`#${item.target}`}
                  className="block text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item);
                  }}
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