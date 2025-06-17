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
    }
  ];

};

export default AllServicesPage;