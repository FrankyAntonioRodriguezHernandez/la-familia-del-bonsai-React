import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const ServiceCard = ({ service, showButton = false }) => {
  // Create WhatsApp link with phone number and description
  const phoneNumber = '5353646319';
  const message = `Hola! Me interesa el bonsái: ${service.title}. ${service.description}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
      <div className="h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* WhatsApp Button - Bottom Right */}
      {showButton && (
        <a 
          href={whatsappLink}
          className="absolute bottom-4 right-4 flex items-center text-gray-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
            <FaWhatsapp className="h-5 w-5" />
          </div>
        </a>
      )}
    </div>
  );
};

export default ServiceCard;