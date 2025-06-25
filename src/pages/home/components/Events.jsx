import React, { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Taller1 from '../../../images/Events/Taller1.jpg';
import Exposicion1 from '../../../images/Events/Exposicion1.jpg';
import MejorMomento1 from '../../../images/Events/MejorMomento1.jpg';
import DeviceFrame from '../../events/Device-frame';
import PlantButton from '../../../components/PlantButton';

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const events = [
    {
      title: "Exposiciones de Arte",
      description:
        "Celebramos la belleza del bonsai en exposiciones que muestran la armonía entre naturaleza y técnica artística tradicional.",
      image: Exposicion1,
    },
    {
      title: "Talleres Especializados",
      description:
        "Eventos educativos donde compartimos técnicas milenarias y modernas para el cuidado perfecto de sus bonsai en cada estación del año.",
      image: Taller1,
    },
    {
      title: "Mejores Momentos",
      description:
        "Guiamos a través de las estaciones, revelando el momento ideal para cada paso en el arte del bonsai, asegurando su crecimiento armonioso y saludable.",
      image: MejorMomento1,
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section id="eventos" className="py-12 md:py-16 bg-gradient-to-b from-green-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-40 md:w-56 h-40 md:h-56 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            EVENTOS DESTACADOS
          </h2>
          <p className="text-lg text-gray-600">Algunos de nuestros eventos</p>
        </div>
        <div className="relative">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl overflow-visible">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col lg:flex-row"
              >
            <div className="relative w-full lg:w-1/2 flex items-center justify-center lg:justify-start overflow-visible order-1 lg:order-1">
              <div className="relative z-10 max-w-[90%] sm:max-w-[350px] md:max-w-[480px] lg:max-w-[420px] mx-auto lg:mx-0 lg:scale-x-110 lg:-ml-20 lg:mb-[-4rem] lg:-mt-24 lg:translate-x-24">
                <DeviceFrame
                  imageSrc={events[currentSlide].image}
                  alt={events[currentSlide].title}
                  className="w-[110%] h-[100%]"
                />
              </div>

              <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-xs z-30">
                {currentSlide + 1} / {events.length}
              </div>
            </div>

                <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center lg:w-1/2 order-2 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center lg:text-left">
                    {events[currentSlide].title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed text-center lg:text-left">
                    {events[currentSlide].description}
                  </p>
                  <div className="text-center lg:text-left">
                    <Link
                      to="/events"
                    >
                      <PlantButton text="Ver todos los eventos →" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 md:p-3 shadow-md transition-all duration-300 z-10"
          >
            <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-800" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
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
