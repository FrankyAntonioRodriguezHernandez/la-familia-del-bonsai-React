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

};

export default EventsFull;