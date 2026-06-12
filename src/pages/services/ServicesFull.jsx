import React from 'react';
import ServiceCard from '../../components/ui/ServiceCard';

const ServicesFull = () => {
  const allServices = [
    {
      title: "Arrendamiento de bonsai",
      description: "Acceso temporal a nuestras colecciones premium de bonsais para sus eventos especiales. Una solución elegante para añadir sofisticación sin compromiso de compra",
      image: require('../../images/Services/CayoCruz.webp')
    },
    {
      title: "Expoventas de bonsai",
      description: "Contamos con una exclusiva colección de bonsais cultivados y seleccionados cuidadosamente. Cada pieza representa años de dedicación y expertise en el arte del bonsai",
      image: require('../../images/Services/Expoventa.webp')
    },
    {
      title: "Decoración de eventos",
      description: "Transformamos espacios con arreglos botánicos especializados. Nuestros bonsais añaden belleza, equilibrio y una atmósfera de distinción a cualquier celebración",
      image: require('../../images/Services/Decoracion.webp')
    },
    {
      title: "Servicios de postventa",
      description: "Mantenimiento profesional, asesoramiento especializado y cuidado continuo para garantizar la longevidad y salud de su bonsai. Servicio integral post-compra",
      image: require('../../images/Services/Poda1.webp')
    },
    {
      title: "Talleres y cursos",
      description: "Programas educativos impartidos por expertos en el cultivo y mantenimiento de bonsais. Desde principiantes hasta técnicas avanzadas de poda y diseño",
      image: require('../../images/Services/Taller1.webp')
    },
    {
      title: "Diseño de Jardines Exóticos",
      description: "Creación de espacios verdes únicos integrando bonsais y plantas exóticas. Diseño personalizado para transformar su ambiente en un oasis natural de serenidad",
      image: require('../../images/Services/Exotico.webp')
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