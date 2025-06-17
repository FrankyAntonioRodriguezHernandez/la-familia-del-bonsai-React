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

    </section>
  );
};

export default AllServicesPage;