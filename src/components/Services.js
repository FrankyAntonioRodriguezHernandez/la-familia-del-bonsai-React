import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
  const featuredServices = [
    {
      title: "Poda y técnica de bonsai",
      description: "Más que una creación, una experiencia que se alimenta de naturaleza",
      image: require('../assets/Services/Poda1.jpg')
    },
    {
      title: "Arrendamiento de bonsai",
      description: "Le ofrecemos la oportunidad de tener un bonsai como experiencia para eventos especiales",
      image: require('../assets/Services/Arrendamiento1.jpg')
    },
    {
      title: "Decoración de eventos",
      description: "Transformamos su evento en una experiencia única, integrando elegancia y armonía",
      image: require('../assets/Services/Decoracion1.jpg')
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-amber-50 to-green-50 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-80px] left-[20%] w-72 h-72 md:w-96 md:h-96 bg-emerald-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-60px] right-[15%] w-64 h-64 md:w-80 md:h-80 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200 rounded-full opacity-10 transform rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-amber-200 rounded-full opacity-10 transform -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            SERVICIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors duration-300 shadow-xl">
              Ver todos nuestros servicios →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;