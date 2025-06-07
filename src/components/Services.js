import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Poda y técnica de bonsai",
      description: "Más que una creación, una experiencia que se alimenta de naturaleza",
      image: "https://images.pexels.com/photos/7127356/pexels-photo-7127356.jpeg",
      buttonText: "Ver"
    },
    {
      title: "Arrendamiento de bonsai",
      description: "Le ofrecemos la oportunidad de tener un bonsai como experiencia para eventos especiales",
      image: "https://images.pexels.com/photos/1198741/pexels-photo-1198741.jpeg",
      buttonText: "Ver"
    },
    {
      title: "Decoración de eventos",
      description: "Transformamos su evento en una experiencia única, integrando elegancia y armonía",
      image: "https://images.pexels.com/photos/27113617/pexels-photo-27113617.jpeg",
      buttonText: "Ver"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-amber-50 to-green-50 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-20 w-96 h-96 bg-emerald-200 rounded-full opacity-10 transform rotate-12"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-amber-200 rounded-full opacity-10 transform -rotate-12"></div>
      </div>

    </section>
  );
};

export default Services;