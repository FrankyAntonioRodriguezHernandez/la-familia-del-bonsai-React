import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef();

  const navItems = [
    { name: 'INICIO', target: 'inicio', isAnchor: true },
    { name: 'INFORMACIÓN', target: 'informacion', isAnchor: true },
    { name: 'SERVICIOS', target: 'services', isRoute: true },
    { name: 'EVENTOS', target: 'events', isRoute: true },
    { name: 'CONTACTO', target: 'contacto', isAnchor: true }
  ];

  const handleNavigation = (item) => {
    if (item.isAnchor) {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: item.target } });
      } else {
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (item.isRoute) {
      if (location.pathname === `/${item.target}`) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleInteraction = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed w-full z-50 top-4">
      {/* Botón móvil arriba a la izquierda */}
      <div className="md:hidden absolute top-0 left-0 p-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-300 hover:text-white p-2 rounded-full bg-emerald-800 bg-opacity-90 backdrop-blur-sm shadow-md"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Fondo centralizado del header */}
      <div className="hidden md:flex justify-center">
        <div className="bg-emerald-800 bg-opacity-90 backdrop-blur-sm rounded-full shadow-xl border border-gray-700 px-6 py-2">
          {/* Versión desktop */}
          <div className="flex space-x-1">
            {navItems.map((item) =>
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
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden absolute top-16 left-4 bg-emerald-800 rounded-lg shadow-lg py-2 w-48 z-40">
          {navItems.map((item) =>
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
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
