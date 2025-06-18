import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Taller1 from '../assets/Events/Taller1.jpg';
import Exposicion1 from '../assets/Events/Exposicion1.jpg';
import MejorMomento1 from '../assets/Events/MejorMomento1.jpg';

const EventsFull = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allEvents.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + allEvents.length) % allEvents.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            TODOS NUESTROS EVENTOS
          </h2>
          <p className="text-xl text-gray-600">
            Descubre nuestra agenda completa de actividades y talleres
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-1/2 h-80 lg:h-96">
                <img
                  src={allEvents[currentSlide].image}
                  alt={allEvents[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentSlide + 1} / {allEvents.length}
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {allEvents[currentSlide].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {allEvents[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-md transition-all duration-300 z-10"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 shadow-md transition-all duration-300 z-10"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-800" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {allEvents.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsFull;