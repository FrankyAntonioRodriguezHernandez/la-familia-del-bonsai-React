import React from 'react';
import Taller1 from '../assets/Events/Taller1.jpg';
import Exposicion1 from '../assets/Events/Exposicion1.jpg';
import MejorMomento1 from '../assets/Events/MejorMomento1.jpg';

const EventsFull = () => {
  const allEvents = [
    {
      title: "Exposiciones de Arte",
      description: "Celebramos la belleza del bonsai en exposiciones que muestran la armonía entre naturaleza y técnica artística tradicional.",
      image: Exposicion1
    },
    {
      title: "Talleres Especializados",
      description: "Eventos educativos donde compartimos técnicas milenarias y modernas para el cuidado perfecto de sus bonsai en cada estación del año.",
      image: Taller1
    },
    {
      title: "Mejores Momentos",
      description: "Guiamos a través de las estaciones, revelando el momento ideal para cada paso en el arte del bonsai, asegurando su crecimiento armonioso y saludable.",
      image: MejorMomento1
    },
    {
      title: "Convención Anual",
      description: "El evento más importante del año donde reunimos a los mejores expertos en bonsai del país.",
      image: Exposicion1 
    },
    {
      title: "Técnicas Avanzadas",
      description: "Talleres exclusivos para quienes desean llevar su arte del bonsai al siguiente nivel.",
      image: Taller1 
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50 min-h-screen relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            TODOS NUESTROS EVENTOS
          </h2>
          <p className="text-xl text-gray-600">
            Descubre nuestra agenda completa de actividades y talleres
          </p>
        </div>

        {/* Lista de eventos */}
        <div className="space-y-12">
          {allEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 h-64 lg:h-96">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsFull;
