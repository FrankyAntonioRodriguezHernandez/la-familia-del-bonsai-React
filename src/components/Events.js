import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      title: "Mejores Momentos",
      description: "Guiamos a través de las estaciones, revelando el momento ideal para cada paso en el arte del bonsai, asegurando su crecimiento armonioso y saludable.",
      image: "https://images.unsplash.com/photo-1657043496762-89aca96457a0",
      buttonText: "Ver"
    },
    {
      title: "Talleres Especializados",
      description: "Eventos educativos donde compartimos técnicas milenarias y modernas para el cuidado perfecto de sus bonsai en cada estación del año.",
      image: "https://images.unsplash.com/photo-1614797091849-05915639d85a",
      buttonText: "Ver"
    },
    {
      title: "Exposiciones de Arte",
      description: "Celebramos la belleza del bonsai en exposiciones que muestran la armonía entre naturaleza y técnica artística tradicional.",
      image: "https://images.unsplash.com/photo-1585544224318-147fb1bcc462",
      buttonText: "Ver"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <section id="eventos" className="min-h-screen lg:min-h-0 py-12 md:py-20 bg-gradient-to-b from-green-50 to-amber-50 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 md:w-64 h-40 md:h-64 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            EVENTOS
          </h2>
        </div>

        <div className="relative flex-grow flex flex-col">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden flex-grow flex flex-col">
            <div className="flex flex-col lg:flex-row flex-grow">
              {/* Image Section - Altura controlada en móvil */}
              <div className="relative w-full lg:w-1/2 h-48 sm:h-64 md:h-72 lg:h-full">
                <img
                  src={events[currentSlide].image}
                  alt={events[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                  {currentSlide + 1} / {events.length}
                </div>
              </div>

              {/* Content Section - Ocupa el espacio restante */}
              <div className="p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center lg:w-1/2 flex-grow">
                <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                  {events[currentSlide].title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  {events[currentSlide].description}
                </p>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold transition-colors duration-300 shadow-md md:shadow-lg w-fit">
                  {events[currentSlide].buttonText}
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Posición ajustada */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-md md:shadow-lg transition-all duration-300 z-10"
          >
            <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-md md:shadow-lg transition-all duration-300 z-10"
          >
            <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
          </button>

          {/* Slide Indicators - Posición ajustada */}
          <div className="flex justify-center mt-4 md:mt-8 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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

export default Events;