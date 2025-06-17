import React from 'react';
import { Link } from 'react-router-dom';
import Poda1 from '../assets/Services/Poda1.jpg';
import Arrendamiento1 from '../assets/Services/Arrendamiento1.jpg';
import Decoracion1 from '../assets/Services/Decoracion1.jpg';

const AllServicesPage = () => {
  const allServices = [
    {
      title: "Poda y técnica de bonsai",
      description: "Más que una creación, una experiencia que se alimenta de naturaleza",
      image: Poda1,
      buttonText: "Ver detalles",
      path: "/poda"
    },
    {
      title: "Arrendamiento de bonsai",
      description: "Le ofrecemos la oportunidad de tener un bonsai como experiencia para eventos especiales",
      image: Arrendamiento1,
      buttonText: "Ver detalles",
      path: "/arrendamiento"
    },
    {
      title: "Decoración de eventos",
      description: "Transformamos su evento en una experiencia única, integrando elegancia y armonía",
      image: Decoracion1,
      buttonText: "Ver detalles",
      path: "/decoracion"
    },
    {
      title: "Cuidado avanzado de bonsai",
      description: "Servicio especializado para el mantenimiento de bonsais antiguos",
      image: Decoracion1,
      buttonText: "Ver detalles",
      path: "/cuidado-avanzado"
    },
    {
      title: "Talleres de iniciación",
      description: "Aprende las técnicas básicas del arte del bonsai",
      image: Poda1, 
      buttonText: "Ver detalles",
      path: "/talleres"
    },
    {
      title: "Venta de bonsai",
      description: "Selección de bonsais cuidadosamente cultivados",
      image: Arrendamiento1, 
      buttonText: "Ver detalles",
      path: "/venta"
    }
  ];

  return (
    <section id="todos-servicios" className="py-20 bg-gradient-to-b from-amber-50 to-green-50 min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200 rounded-full opacity-10 transform rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-amber-200 rounded-full opacity-10 transform -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            TODOS NUESTROS SERVICIOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre la gama completa de servicios que ofrecemos para los amantes del bonsai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link to={service.path} className="inline-block">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg">
                    {service.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServicesPage;