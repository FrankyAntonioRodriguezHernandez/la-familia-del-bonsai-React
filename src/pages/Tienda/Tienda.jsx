import React from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../../components/ui/ServiceCard';
import {BonsaisTiendaObjects} from '../../utils/BonsaisTiendaObjects.jsx';

const Tienda = () => {
  
  const navigate = useNavigate();

  const handleNavigation = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'contacto' } });
    } else {
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">EXPLORE NUESTROS BONSAIS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BonsaisTiendaObjects.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            ¿Te interesa alguno de nuestros bonsais?
          </h3>
        </div>

        <div className="mt-6 text-center">
          <a
            href={`#contacto`}
            className="inline-flex rounded-lg bg-emerald-700 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-emerald-800"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation();
            }}
          >
            ¡Contactanos!
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Tienda;