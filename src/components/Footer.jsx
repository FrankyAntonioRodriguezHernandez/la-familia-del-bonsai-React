import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa';

const Footer = () =>{
    return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
          <div className="flex flex-col">
            <h3 className="text-4xl sm:text-5xl lg:text-3xl font-bold text-gray-800 mb-4">
              <span className="block text-emerald-700">La Familia</span>
              <span className="block text-amber-700">del Bonsai</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Creando armonía entre naturaleza y arte a través del cultivo del bonsai.
            </p>
          </div>



        </div>

      </div>
    </footer>
  );
}

export default Footer;