import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-green-50 to-gray-800 relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-200 rounded-full opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            CONTACTO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a crear el espacio zen perfecto
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Teléfono</p>
                    <p className="text-gray-800 font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <FaWhatsapp className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">WhatsApp</p>
                    <p className="text-gray-800 font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <EnvelopeIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Email</p>
                    <p className="text-gray-800 font-semibold">info@familiadelbonsai.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <MapPinIcon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">Dirección</p>
                    <p className="text-gray-800 font-semibold">
                      Calle del Bonsai 123<br />
                      Ciudad Jardín, Estado 12345
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Síguenos
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors duration-300">
                    <FaInstagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors duration-300">
                    <FaFacebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors duration-300">
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors duration-300">
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Form */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-emerald-100 to-green-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPinIcon className="h-16 w-16 mx-auto mb-4 text-emerald-600" />
                  <p className="text-lg font-semibold">Mapa de Ubicación</p>
                  <p className="text-sm">Integración con Google Maps</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envíanos un Mensaje
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-300"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-700">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 La Familia del Bonsai. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;