import React from 'react';
import { motion } from 'framer-motion';
import Taller1 from '../../images/Events/Taller1.jpg';
import Exposicion1 from '../../images/Events/Exposicion1.jpg';
import MejorMomento1 from '../../images/Events/MejorMomento1.jpg';

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

const EventsFull = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50 relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-80px] left-[20%] w-72 h-72 md:w-96 md:h-96 bg-emerald-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-60px] right-[15%] w-64 h-64 md:w-80 md:h-80 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-emerald-300 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-amber-300 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">TODOS NUESTROS EVENTOS</h2>
          <p className="text-xl text-gray-600">Descubre nuestra agenda completa de actividades y talleres</p>
        </div>

        <div className="space-y-24">
          {allEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-12 bg-white bg-opacity-80 rounded-3xl shadow-2xl backdrop-blur-md p-6 lg:p-12 border border-gray-200`}
            >
              
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold text-emerald-800 mb-4">{event.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{event.description}</p>
              </div>

              <div className="lg:w-1/2 w-full h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-md">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsFull;
