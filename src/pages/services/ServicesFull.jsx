import React from 'react';
import ServiceCard from './components/ServiceCard';

const ServicesFull = () => {
  const allServices = [
    {
      title: "Poda y técnica de bonsai",
      description: "Más que una creación, una experiencia que se alimenta de naturaleza",
      image: require('../../images/Services/Poda1.jpg')
    },
    {
      title: "Arrendamiento de bonsai",
      description: "Le ofrecemos la oportunidad de tener un bonsai como experiencia para eventos especiales",
      image: require('../../images/Services/Arrendamiento1.jpg')
    },
    {
      title: "Decoración de eventos",
      description: "Transformamos su evento en una experiencia única, integrando elegancia y armonía",
      image: require('../../images/Services/Decoracion1.jpg')
    },    
    {
      title: "Cuidado profesional",
      description: "Mantenimiento especializado para bonsais antiguos",
      image: require('../../images/Services/Poda1.jpg')
    },
    {
      title: "Talleres educativos",
      description: "Aprende el arte del bonsai con expertos",
      image: require('../../images/Services/Arrendamiento1.jpg')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">TODOS NUESTROS SERVICIOS</h2>
          <p className="text-xl text-gray-600">Descubre nuestra gama completa de servicios especializados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesFull;