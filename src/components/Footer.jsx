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

            <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                <ul className="space-y-2">
                <li>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                        Eventos
                    </Link>
                </li>
                <li>
                    <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">
                        Contacto
                    </a>
                </li>
                </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
              </div>
              <span className="text-gray-300">
                Abrahan Delgado #60 <br />
                Ciego de Ávila, Cuba
              </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">+53 53646319</span>
                </li>
                <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">frankyan2001@gmail.com</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://whatsapp.com/channel/0029VaHjEYjA89Mrmf2zPv2K" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <div className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full mr-3 transition-colors duration-300">
                  <FaWhatsapp className="h-4 w-4" />
                </div>
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="https://www.instagram.com/la_familia_del_bonsai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <div className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full mr-3 transition-colors duration-300">
                  <FaInstagram className="h-4 w-4" />
                </div>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://t.me/Dreamcatchersboy" 
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <div className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-full mr-3 transition-colors duration-300">
                  <FaTelegram className="h-4 w-4" />
                </div>
                <span>Telegram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} La Familia del Bonsai. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;